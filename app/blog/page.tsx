import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import Image from 'next/image'

// Revalidate rapide pour voir les nouveaux articles
export const revalidate = 60

const prisma = new PrismaClient()

type ArticlePreview = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  imageUrl: string | null
  createdAt: Date
  metaDesc: string | null
}

async function getArticles(): Promise<ArticlePreview[]> {
  try {
    const articles = await prisma.article.findMany({
      where: {
        published: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        imageUrl: true,
        createdAt: true,
        metaDesc: true
      }
    })
    return articles
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error)
    return []
  }
}

export default async function BlogPage() {
  const articles = await getArticles()

  return (
    <div className="space-y-8 my-24">
      {/* Header du blog */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Blog ClimGo
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez nos derniers articles sur la climatisation, le chauffage et les solutions énergétiques. 
          Conseils d&apos;experts et actualités du secteur.
        </p>
      </div>

      {/* Liste des articles */}
      {articles.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">
            Aucun article disponible pour le moment.
          </div>
          <p className="text-gray-400 mt-2">
            Revenez bientôt pour découvrir nos premiers articles !
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {article.imageUrl && (
                <div className="relative h-48 w-full">
                  <Image
                    fill
                    src={article.imageUrl}
                    alt={article.title}
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <time dateTime={article.createdAt.toISOString()}>
                    {new Date(article.createdAt).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h2>
                
                {article.excerpt && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                )}
                
                <Link 
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Lire la suite
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
            
          ))}
        </div>
      )}
    </div>
  )
}
