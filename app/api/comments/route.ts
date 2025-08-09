import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { author, email, content, articleId } = await request.json()

    // Validation
    if (!author || !email || !content || !articleId) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 })
    }

    if (content.length > 240) {
      return NextResponse.json({ error: 'Le commentaire ne peut pas dépasser 240 caractères' }, { status: 400 })
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 })
    }

    // Vérifier que l'article existe
    const article = await prisma.article.findUnique({
      where: { id: articleId }
    })

    if (!article) {
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 })
    }

    // Créer le commentaire
    const comment = await prisma.comment.create({
      data: {
        author,
        email,
        content,
        articleId
      }
    })

    return NextResponse.json({ 
      comment, 
      message: 'Commentaire ajouté avec succès' 
    })
  } catch (error) {
    console.error('Erreur lors de la création du commentaire:', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
} 