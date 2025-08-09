import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { rating, articleId } = await request.json()

    // Validation
    if (!rating || !articleId) {
      return NextResponse.json({ error: 'Note et article requis' }, { status: 400 })
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'La note doit être entre 1 et 5' }, { status: 400 })
    }

    // Vérifier que l'article existe
    const article = await prisma.article.findUnique({
      where: { id: articleId }
    })

    if (!article) {
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 })
    }

    // Créer le rating
    const newRating = await prisma.rating.create({
      data: {
        rating,
        articleId
      }
    })

    return NextResponse.json({ 
      rating: newRating, 
      message: 'Note ajoutée avec succès' 
    })
  } catch (error) {
    console.error('Erreur lors de la création du rating:', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
} 