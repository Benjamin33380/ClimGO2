import { NextRequest, NextResponse } from 'next/server'
import { verifyJWT, verifyAdminSession } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    // Vérifier le token JWT dans les headers
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json(
        { error: 'Token d\'authentification manquant' },
        { status: 401 }
      )
    }

    // Vérifier le token JWT
    const jwtPayload = verifyJWT(token)
    if (!jwtPayload) {
      return NextResponse.json(
        { error: 'Token invalide ou expiré' },
        { status: 401 }
      )
    }

    // Vérifier la session en base
    const admin = await verifyAdminSession(token)
    if (!admin) {
      return NextResponse.json(
        { error: 'Session invalide ou expirée' },
        { status: 401 }
      )
    }

    return NextResponse.json({
      success: true,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role
      }
    })

  } catch (error) {
    console.error('Erreur lors de la vérification d\'authentification:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
} 