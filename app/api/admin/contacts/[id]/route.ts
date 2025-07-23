import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyJWT } from '@/lib/auth'

// PUT - Modifier le statut d'une demande de contact
export async function PUT(
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

    const { status } = await request.json()

    // Validation des données
    if (!status) {
      return NextResponse.json({ error: 'Statut requis' }, { status: 400 })
    }

    // Vérifier si la demande existe
    const resolvedParams = await params
    const existingContact = await prisma.contactRequest.findUnique({
      where: { id: resolvedParams.id }
    })

    if (!existingContact) {
      return NextResponse.json({ error: 'Demande de contact non trouvée' }, { status: 404 })
    }

    // Mettre à jour le statut
    const contact = await prisma.contactRequest.update({
      where: { id: resolvedParams.id },
      data: {
        status
      }
    })

    return NextResponse.json({ contact, message: 'Statut mis à jour avec succès' })
  } catch (error) {
    console.error('Erreur lors de la modification du contact:', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
}

// DELETE - Supprimer une demande de contact
export async function DELETE(
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

    // Vérifier si la demande existe
    const resolvedParams = await params
    const existingContact = await prisma.contactRequest.findUnique({
      where: { id: resolvedParams.id }
    })

    if (!existingContact) {
      return NextResponse.json({ error: 'Demande de contact non trouvée' }, { status: 404 })
    }

    // Supprimer la demande
    await prisma.contactRequest.delete({
      where: { id: resolvedParams.id }
    })

    return NextResponse.json({ message: 'Demande supprimée avec succès' })
  } catch (error) {
    console.error('Erreur lors de la suppression du contact:', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
} 