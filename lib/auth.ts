import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface JWTPayload {
  adminId: string
  email: string
  role: string
  iat: number
  exp: number
}

export interface AuthenticatedAdmin {
  id: string
  email: string
  name: string
  role: string
}

// Configuration JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'
const JWT_EXPIRES_IN = '7d'

// Hash du mot de passe
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12
  return bcrypt.hash(password, saltRounds)
}

// Vérification du mot de passe
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

// Génération du token JWT
export function generateJWT(admin: AuthenticatedAdmin): string {
  const payload: Omit<JWTPayload, 'iat' | 'exp'> = {
    adminId: admin.id,
    email: admin.email,
    role: admin.role
  }
  
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

// Vérification du token JWT
export function verifyJWT(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload
  } catch (error) {
    console.error('Erreur lors de la vérification du token JWT:', error)
    return null
  }
}

// Authentification d'un admin
export async function authenticateAdmin(email: string, password: string): Promise<AuthenticatedAdmin | null> {
  try {
    const admin = await prisma.admin.findUnique({
      where: { email, isActive: true }
    })

    if (!admin) {
      return null
    }

    const isValidPassword = await verifyPassword(password, admin.password)
    if (!isValidPassword) {
      return null
    }

    // Mettre à jour la dernière connexion
    await prisma.admin.update({
      where: { id: admin.id },
      data: { lastLogin: new Date() }
    })

    return {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role
    }
  } catch (error) {
    console.error('Erreur lors de l\'authentification:', error)
    return null
  }
}

// Création d'une session admin
export async function createAdminSession(adminId: string, token: string, ip?: string, userAgent?: string): Promise<void> {
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 7) // 7 jours

  await prisma.adminSession.create({
    data: {
      token,
      adminId,
      ip,
      userAgent,
      expiresAt
    }
  })
}

// Vérification d'une session admin
export async function verifyAdminSession(token: string): Promise<AuthenticatedAdmin | null> {
  try {
    const session = await prisma.adminSession.findUnique({
      where: { token },
      include: { admin: true }
    })

    if (!session || session.expiresAt < new Date()) {
      return null
    }

    return {
      id: session.admin.id,
      email: session.admin.email,
      name: session.admin.name,
      role: session.admin.role
    }
  } catch (error) {
    console.error('Erreur lors de la vérification de session:', error)
    return null
  }
}

// Suppression d'une session admin
export async function deleteAdminSession(token: string): Promise<void> {
  await prisma.adminSession.deleteMany({
    where: { token }
  })
}

// Nettoyage des sessions expirées
export async function cleanupExpiredSessions(): Promise<void> {
  await prisma.adminSession.deleteMany({
    where: {
      expiresAt: {
        lt: new Date()
      }
    }
  })
}

// Création d'un admin initial
export async function createInitialAdmin(): Promise<void> {
  const existingAdmin = await prisma.admin.findFirst()
  
  if (!existingAdmin) {
    const hashedPassword = await hashPassword('admin123')
    
    await prisma.admin.create({
      data: {
        email: 'admin@climgo.fr',
        password: hashedPassword,
        name: 'Administrateur ClimGo',
        role: 'super_admin'
      }
    })
    
    console.log('✅ Admin initial créé: admin@climgo.fr / admin123')
  }
} 