import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyJWT } from '@/lib/auth'

// GET - Lister tous les articles
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

    // Récupérer tous les articles avec les informations de l'admin
    const articles = await prisma.article.findMany({
      include: {
        admin: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        category: {
          select: {
            id: true,
            name: true,
            color: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ articles })
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
}

// POST - Créer un nouvel article
export async function POST(request: NextRequest) {
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

    const { title, content, slug, excerpt, imageUrl, published, metaTitle, metaDesc, metaKeywords, categoryId } = await request.json()

    // Validation des données
    if (!title || !content || !slug) {
      return NextResponse.json({ error: 'Titre, contenu et slug sont requis' }, { status: 400 })
    }

    // Vérifier si le slug existe déjà
    const existingArticle = await prisma.article.findUnique({
      where: { slug }
    })

    if (existingArticle) {
      return NextResponse.json({ error: 'Un article avec ce slug existe déjà' }, { status: 400 })
    }

    // Créer l'article
    const article = await prisma.article.create({
      data: {
        title,
        content,
        slug,
        excerpt,
        imageUrl,
        published: published || false,
        metaTitle,
        metaDesc,
        metaKeywords,
        categoryId: categoryId || null,
        adminId: jwtPayload.adminId
      },
      include: {
        admin: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        category: {
          select: {
            id: true,
            name: true,
            color: true
          }
        }
      }
    })

    return NextResponse.json({ article, message: 'Article créé avec succès' })
  } catch (error) {
    console.error('Erreur lors de la création de l\'article:', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
} 