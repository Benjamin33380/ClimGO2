import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyJWT } from '@/lib/auth'

// POST - Débloquer une tentative de bruteforce
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Vérifier l'authentification
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json({ error: 'Token d\'authentification manquant' }, { status: 401 })
    }

    const jwtPayload = verifyJWT(token)
    if (!jwtPayload) {
      return NextResponse.json({ error: 'Token invalide' }, { status: 401 })
    }

    // Vérifier si la tentative existe
    const resolvedParams = await params
    const existingAttempt = await prisma.bruteforceAttempt.findUnique({
      where: { id: resolvedParams.id }
    })

    if (!existingAttempt) {
      return NextResponse.json({ error: 'Tentative non trouvée' }, { status: 404 })
    }

    // Débloquer la tentative
    const attempt = await prisma.bruteforceAttempt.update({
      where: { id: resolvedParams.id },
      data: {
        isBlocked: false,
        blockedUntil: null,
        attempts: 0
      }
    })

    return NextResponse.json({ attempt, message: 'Tentative débloquée avec succès' })
  } catch (error) {
    console.error('Erreur lors du déblocage de la tentative:', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
} 