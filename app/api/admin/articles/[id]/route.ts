import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyJWT } from '@/lib/auth'

// GET - Récupérer un article spécifique
export async function GET(
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

    const resolvedParams = await params
    const article = await prisma.article.findUnique({
      where: { id: resolvedParams.id },
      include: {
        admin: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })

    if (!article) {
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 })
    }

    return NextResponse.json({ article })
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
}

// PUT - Modifier un article
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

    const { title, content, slug, excerpt, imageUrl, published, metaTitle, metaDesc, metaKeywords } = await request.json()

    // Validation des données
    if (!title || !content || !slug) {
      return NextResponse.json({ error: 'Titre, contenu et slug sont requis' }, { status: 400 })
    }

    // Vérifier si l'article existe
    const resolvedParams = await params
    const existingArticle = await prisma.article.findUnique({
      where: { id: resolvedParams.id }
    })

    if (!existingArticle) {
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 })
    }

    // Vérifier si le slug existe déjà (sauf pour cet article)
    if (slug !== existingArticle.slug) {
      const slugExists = await prisma.article.findUnique({
        where: { slug }
      })

      if (slugExists) {
        return NextResponse.json({ error: 'Un article avec ce slug existe déjà' }, { status: 400 })
      }
    }

    // Mettre à jour l'article
    const article = await prisma.article.update({
      where: { id: resolvedParams.id },
      data: {
        title,
        content,
        slug,
        excerpt,
        imageUrl,
        published: published || false,
        metaTitle,
        metaDesc,
        metaKeywords
      },
      include: {
        admin: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })

    return NextResponse.json({ article, message: 'Article modifié avec succès' })
  } catch (error) {
    console.error('Erreur lors de la modification de l\'article:', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
}

// DELETE - Supprimer un article
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

    // Vérifier si l'article existe
    const resolvedParams = await params
    const existingArticle = await prisma.article.findUnique({
      where: { id: resolvedParams.id }
    })

    if (!existingArticle) {
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 })
    }

    // Supprimer l'article
    await prisma.article.delete({
      where: { id: resolvedParams.id }
    })

    return NextResponse.json({ message: 'Article supprimé avec succès' })
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'article:', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
} 