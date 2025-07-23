import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyJWT } from '@/lib/auth'

// GET - Lister toutes les tentatives de bruteforce
export async function GET(request: NextRequest) {
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

    // Récupérer toutes les tentatives de bruteforce
    const attempts = await prisma.bruteforceAttempt.findMany({
      orderBy: {
        lastAttempt: 'desc'
      }
    })

    return NextResponse.json({ attempts })
  } catch (error) {
    console.error('Erreur lors de la récupération des tentatives:', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
} 