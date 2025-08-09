import { PrismaClient } from '@prisma/client'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ArticleClient from './ArticleClient'

// Revalidate rapide pour voir les nouveaux articles
export const revalidate = 60

const prisma = new PrismaClient()

type ArticlePageProps = {
  params: Promise<{
    id: string
  }>
}

type Article = {
  id: string
  title: string
  content: string
  slug: string
  imageUrl: string | null
  excerpt: string | null
  metaTitle: string | null
  metaDesc: string | null
  metaKeywords: string | null
  createdAt: Date
  updatedAt: Date
  category?: {
    name: string
    color: string | null
    slug: string
  } | null
  _count: {
    comments: number
    ratings: number
  }
  averageRating: number
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const article = await prisma.article.findUnique({
      where: {
        slug: slug,
        published: true
      },
      include: {
        category: {
          select: {
            name: true,
            color: true,
            slug: true,
          }
        },
        _count: {
          select: {
            comments: true,
            ratings: true,
          }
        }
      }
    })

    if (!article) return null

    // Calculer la note moyenne
    const ratings = await prisma.rating.findMany({
      where: { articleId: article.id },
    });

    const averageRating = ratings.length > 0
      ? ratings.reduce((sum, rating) => sum + rating.rating, 0) / ratings.length
      : 0;

    return {
      ...article,
      averageRating,
    }
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error)
    return null
  }
}

async function getRelatedArticles(currentArticleId: string, currentArticleCreatedAt: Date): Promise<Article[]> {
  try {
    // Récupérer les 3 articles précédents (plus récents)
    const previousArticles = await prisma.article.findMany({
      where: {
        published: true,
        id: {
          not: currentArticleId
        },
        createdAt: {
          gt: currentArticleCreatedAt
        }
      },
      include: {
        category: {
          select: {
            name: true,
            color: true,
            slug: true,
          }
        },
        _count: {
          select: {
            comments: true,
            ratings: true,
          }
        }
      },
      orderBy: {
        createdAt: 'asc'
      },
      take: 3
    })

    // Récupérer les 3 articles suivants (plus anciens)
    const nextArticles = await prisma.article.findMany({
      where: {
        published: true,
        id: {
          not: currentArticleId
        },
        createdAt: {
          lt: currentArticleCreatedAt
        }
      },
      include: {
        category: {
          select: {
            name: true,
            color: true,
            slug: true,
          }
        },
        _count: {
          select: {
            comments: true,
            ratings: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 3
    })

    // Combiner et calculer les notes moyennes
    const allArticles = [...previousArticles, ...nextArticles]
    
    const articlesWithRating = await Promise.all(
      allArticles.map(async (article) => {
        const ratings = await prisma.rating.findMany({
          where: { articleId: article.id },
        });

        const averageRating = ratings.length > 0
          ? ratings.reduce((sum, rating) => sum + rating.rating, 0) / ratings.length
          : 0;

        return {
          ...article,
          averageRating,
        };
      })
    )

    return articlesWithRating
  } catch (error) {
    console.error('Erreur lors de la récupération des articles liés:', error)
    return []
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params
  const article = await getArticle(resolvedParams.id)

  if (!article) {
    return {
      title: 'Article non trouvé',
      description: 'L\'article demandé n\'existe pas.',
    }
  }

  return {
    title: article.metaTitle || `${article.title} - Blog ClimGo`,
    description: article.metaDesc || article.excerpt || `Découvrez notre article sur ${article.title}`,
    keywords: article.metaKeywords || `chauffage, climatisation, ${article.title.toLowerCase()}`,
    openGraph: {
      title: article.metaTitle || `${article.title} - Blog ClimGo`,
      description: article.metaDesc || article.excerpt || `Découvrez notre article sur ${article.title}`,
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.slug}`,
      images: article.imageUrl ? [article.imageUrl] : [],
      publishedTime: article.createdAt.toISOString(),
      modifiedTime: article.updatedAt.toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle || `${article.title} - Blog ClimGo`,
      description: article.metaDesc || article.excerpt || `Découvrez notre article sur ${article.title}`,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
    alternates: {
      canonical: `https://www.climgo.fr/blog/${article.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params
  const article = await getArticle(resolvedParams.id)

  if (!article) {
    notFound()
  }

  const relatedArticles = await getRelatedArticles(article.id, article.createdAt)

  return <ArticleClient article={article} relatedArticles={relatedArticles} />
}

export async function generateStaticParams() {
  try {
    const articles = await prisma.article.findMany({
      where: {
        published: true
      },
      select: {
        slug: true
      }
    })

    return articles.map((article) => ({
      id: article.slug,
    }))
  } catch (error) {
    console.error('Erreur lors de la génération des paramètres statiques:', error)
    // Retourner un tableau vide en cas d'erreur pour éviter le crash
    return []
  }
}