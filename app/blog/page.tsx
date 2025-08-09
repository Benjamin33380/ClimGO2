import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import SortSelect from '../components/SortSelect'

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

type Category = {
  id: string
  name: string
  slug: string
  color: string | null
  _count: {
    articles: number
  }
}

interface PageProps {
  searchParams: Promise<{
    page?: string
    sort?: string
  }>
}

async function getArticles(page: number = 1, sort: string = 'recent'): Promise<{ articles: ArticlePreview[], total: number, totalPages: number }> {
  try {
    const pageSize = 9
    const skip = (page - 1) * pageSize

    let orderBy: any = { createdAt: 'desc' } // eslint-disable-line @typescript-eslint/no-explicit-any

    // Définir l'ordre selon le tri sélectionné
    switch (sort) {
      case 'popular':
        // Pour le tri par popularité, on récupère d'abord tous les articles puis on les trie
        orderBy = { createdAt: 'desc' }
        break
      case 'rating':
        // Pour le tri par rating, on devra le faire après récupération
        orderBy = { createdAt: 'desc' }
        break
      default: // 'recent'
        orderBy = { createdAt: 'desc' }
    }

    const [articles, total] = await Promise.all([
      prisma.article.findMany({
        where: {
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
        },
        orderBy,
        skip,
        take: pageSize
      }),
      prisma.article.count({
        where: {
          published: true
        }
      })
    ])

    // Calculer la note moyenne pour chaque article
    const articlesWithRating = await Promise.all(
      articles.map(async (article) => {
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

    // Trier par popularité (nombre de commentaires) si nécessaire
    if (sort === 'popular') {
      articlesWithRating.sort((a, b) => b._count.comments - a._count.comments)
    }

    // Trier par rating si nécessaire
    if (sort === 'rating') {
      articlesWithRating.sort((a, b) => b.averageRating - a.averageRating)
    }

    const totalPages = Math.ceil(total / pageSize)

    return {
      articles: articlesWithRating,
      total,
      totalPages
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error)
    return { articles: [], total: 0, totalPages: 0 }
  }
}

async function getCategories(): Promise<Category[]> {
  try {
    const categories = await prisma.category.findMany({
      where: {
        isActive: true
      },
      include: {
        _count: {
          select: {
            articles: true
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    })
    return categories
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories:', error)
    return []
  }
}

async function getFeaturedArticle(): Promise<ArticlePreview | null> {
  try {
    const featuredArticle = await prisma.article.findFirst({
      where: {
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
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    if (!featuredArticle) return null

    // Calculer la note moyenne
    const ratings = await prisma.rating.findMany({
      where: { articleId: featuredArticle.id },
    });

    const averageRating = ratings.length > 0
      ? ratings.reduce((sum, rating) => sum + rating.rating, 0) / ratings.length
      : 0;

    return {
      ...featuredArticle,
      averageRating,
    }
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article en vedette:', error)
    return null
  }
}

// Composant Hero avec article en vedette
function BlogHero({ featuredArticle }: { featuredArticle: ArticlePreview | null }) {
  return (
    <div className="relative bg-gradient-to-br from-[#03144a] via-[#03144a] to-[#03144a] overflow-hidden pt-42">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-32">
        <div className="text-center">
          <div className="inline-flex items-center bg-[#03144a] bg-opacity-20 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-20">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Conseils d&apos;experts
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-medium text-white mb-6">
            Blog ClimGo
          </h1>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed py-6">
            Découvrez nos conseils d&apos;experts en chauffage et climatisation. 
            Installation, maintenance, économies d&apos;énergie : tout ce que vous devez savoir !
          </p>
        </div>

        {/* Article en vedette */}
        {featuredArticle && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#f8f9f4] rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  {featuredArticle.imageUrl ? (
                    <Image
                      src={featuredArticle.imageUrl}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#03144a] to-[#03144a] flex items-center justify-center">
                      <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="p-8 lg:p-10">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      Article en vedette
                    </span>
                    <span className="text-gray-500 text-sm">•</span>
                    <time className="text-gray-500 text-sm">
                      {new Date(featuredArticle.createdAt).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-medium text-[#03144a] mb-4 line-clamp-3">
                    {featuredArticle.title}
                  </h2>
                  
                  {featuredArticle.excerpt && (
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                  )}

                  {/* Rating et commentaires */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.round(featuredArticle.averageRating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600 font-medium">
                        {featuredArticle.averageRating > 0 ? featuredArticle.averageRating.toFixed(1) : 'N/A'}
                      </span>
                    </div>

                    {/* Commentaires */}
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="text-gray-600">{featuredArticle._count.comments}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="inline-flex items-center bg-[#03144a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#03144a] transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Lire l&apos;article complet
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Décoration géométrique */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-[#03144a] rounded-full opacity-10"></div>
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 bg-[#03144a] rounded-full opacity-10"></div>
    </div>
  )
}

// Composant de catégories/filtres
function CategoryFilter({ categories }: { categories: Category[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/blog"
          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#03144a] text-white shadow-md"
        >
          <span className="mr-2">📰</span>
          Tous les articles
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categorie/${category.slug}`}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#f8f9f4] text-[#03144a] border border-gray-200 hover:border-[#03144a] hover:text-[#03144a] transition-all duration-200"
          >
            <div 
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: category.color || '#808080' }}
            ></div>
            {category.name}
            <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              {category._count.articles}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Composant de pagination
function Pagination({ currentPage, totalPages, sort }: { currentPage: number, totalPages: number, sort: string }) {
  const generatePageUrl = (page: number) => {
    const params = new URLSearchParams()
    if (page > 1) params.set('page', page.toString())
    if (sort !== 'recent') params.set('sort', sort)
    return `/blog${params.toString() ? `?${params.toString()}` : ''}`
  }

  const pages = []
  const maxVisiblePages = 5

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 4; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(totalPages)
    } else if (currentPage >= totalPages - 2) {
      pages.push(1)
      pages.push('...')
      for (let i = totalPages - 3; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      pages.push('...')
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(totalPages)
    }
  }

  return (
    <div className="flex justify-center mt-16">
      <nav className="flex items-center space-x-2">
        {currentPage > 1 && (
          <Link
            href={generatePageUrl(currentPage - 1)}
            className="px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Précédent
          </Link>
        )}
        
        {pages.map((page, index) => (
          <div key={index}>
            {page === '...' ? (
              <span className="px-4 py-2 text-gray-400">...</span>
            ) : (
              <Link
                href={generatePageUrl(page as number)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  page === currentPage
                    ? 'bg-[#03144a] text-white'
                    : 'text-[#03144a] hover:text-[#03144a] hover:bg-gray-100'
                }`}
              >
                {page}
              </Link>
            )}
          </div>
        ))}
        
        {currentPage < totalPages && (
          <Link
            href={generatePageUrl(currentPage + 1)}
            className="px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Suivant
          </Link>
        )}
      </nav>
    </div>
  )
}

// Composant CTA section
function CTASection() {
  return (
    <div className="bg-gradient-to-r from-[#f8f9f4] to-[#f8f9f4] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#f8f9f4] rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-[#03144a] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#F8F9F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-medium text-[#03144a] mb-4">
              Besoin d&apos;un conseil personnalisé ?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Nos experts ClimGo sont à votre disposition pour vous conseiller sur vos projets de chauffage et climatisation. Contactez-nous !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-[#03144a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#03144a] transition-colors shadow-md hover:shadow-lg"
              >
                Demander un conseil
              </Link>
              <Link 
                href="tel:0766460008"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
              >
                📞 Appel gratuit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Blog ClimGo - Conseils Experts Chauffage & Climatisation',
  description: 'Découvrez nos conseils d\'experts en chauffage et climatisation. Installation, maintenance, économies d\'énergie : guides pratiques et actualités du secteur.',
  keywords: 'blog chauffage, conseils climatisation, installation chauffage, maintenance climatisation, économies énergie, expert ClimGo',
  openGraph: {
    title: 'Blog ClimGo - Conseils Experts Chauffage & Climatisation',
    description: 'Conseils d\'experts, guides pratiques et actualités sur le chauffage et la climatisation par ClimGo.',
    type: 'website',
    locale: 'fr_FR',
  }
}

export default async function BlogPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams
  const currentPage = parseInt(resolvedSearchParams.page || '1')
  const sort = resolvedSearchParams.sort || 'recent'
  
  const { articles, totalPages } = await getArticles(currentPage, sort)
  const featuredArticle = await getFeaturedArticle()
  const categories = await getCategories()

  return (
    <div className="min-h-screen bg-[#f8f9f4]">
      {/* Hero Section */}
      <BlogHero featuredArticle={featuredArticle} />

      <div className="w-90/100 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filtres et tri */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <CategoryFilter categories={categories} />
          <SortSelect defaultValue={sort} />
        </div>

        {/* Grille d'articles */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group"
              >
                <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  {article.imageUrl && (
                    <div className="relative h-48">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      {article.category && (
                        <span 
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
                          style={{ 
                            backgroundColor: `${article.category.color || '#808080'}20`,
                            color: article.category.color || '#808080' 
                          }}
                        >
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: article.category.color || '#808080' }}
                          ></div>
                          {article.category.name}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-medium text-[#03144a] mb-3 line-clamp-2 group-hover:text-[#03144a] transition-colors">
                      {article.title}
                    </h3>
                    
                    {article.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {article.excerpt}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                      <time>
                        {new Date(article.createdAt).toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                      <div className="flex items-center gap-4">
                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-4 h-4 ${i < Math.round(article.averageRating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-gray-600 font-medium text-xs">
                            {article.averageRating > 0 ? article.averageRating.toFixed(1) : 'N/A'}
                          </span>
                        </div>

                        {/* Commentaires */}
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-gray-600 text-xs">{article._count.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun article trouvé</h3>
            <p className="text-gray-600">Essayez de modifier vos filtres ou revenez plus tard.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} sort={sort} />
        )}
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}