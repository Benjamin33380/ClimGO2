import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

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

async function getFeaturedArticle(): Promise<ArticlePreview | null> {
  try {
    const featuredArticle = await prisma.article.findFirst({
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
    return featuredArticle
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article en vedette:', error)
    return null
  }
}

// Composant Hero avec article en vedette
function BlogHero({ featuredArticle }: { featuredArticle: ArticlePreview | null }) {
  return (
    <div className="relative bg-gradient-to-br from-[#03144a] via-[#03144a] to-[#03144a] overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#03144a] bg-opacity-20 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Conseils d&apos;experts
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Blog ClimGo
          </h1>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
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
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#03144a] mb-4 line-clamp-3">
                    {featuredArticle.title}
                  </h2>
                  
                  {featuredArticle.excerpt && (
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                  )}
                  
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
function CategoryFilter() {
  const categories = [
    { name: "Tous les articles", icon: "📚", active: true },
    { name: "Chauffage", icon: "🔥", active: false },
    { name: "Climatisation", icon: "❄️", active: false },
    { name: "Maintenance", icon: "🔧", active: false },
    { name: "Économies", icon: "💡", active: false }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              category.active
                ? 'bg-[#03144a] text-white shadow-md'
                : 'bg-[#f8f9f4] text-[#03144a] border border-gray-200 hover:border-[#03144a] hover:text-[#03144a]'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
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
              <svg className="w-8 h-8 text-[#03144a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-[#03144a] mb-4">
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

export default async function BlogPage() {
  const articles = await getArticles()
  const featuredArticle = await getFeaturedArticle()
  
  // Séparer l'article en vedette des autres
  const otherArticles = featuredArticle 
    ? articles.filter(article => article.id !== featuredArticle.id)
    : articles

  return (
    <div className="min-h-screen bg-[#f8f9f4]">
      {/* Hero avec article en vedette */}
      <BlogHero featuredArticle={featuredArticle} />
      
      {/* Filtres par catégorie */}
      <CategoryFilter />

      {/* Liste des articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {otherArticles.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#03144a] mb-2">
              Aucun article disponible
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Nos experts préparent actuellement du contenu de qualité pour vous. Revenez bientôt !
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-[#03144a]">
                  Nos derniers articles
                </h2>
                <p className="text-gray-600 mt-2">
                  {otherArticles.length} article{otherArticles.length > 1 ? 's' : ''} disponible{otherArticles.length > 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-sm text-gray-500">Trier par :</span>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03144a]">
                  <option>Plus récent</option>
                  <option>Plus ancien</option>
                  <option>Populaire</option>
                </select>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-[#f8f9f4] rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#03144a]"
                >
                  <div className="relative">
                    {article.imageUrl ? (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          fill
                          src={article.imageUrl}
                          alt={article.title}
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-[#03144a] to-[#03144a] flex items-center justify-center">
                        <svg className="w-12 h-12 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                        </svg>
                      </div>
                    )}
                    
                    {/* Badge catégorie */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#f8f9f4] bg-opacity-90 text-[#03144a] text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                        Conseil expert
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                      </svg>
                      <time dateTime={article.createdAt.toISOString()}>
                        {new Date(article.createdAt).toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>

                    <h3 className="text-xl font-bold text-[#03144a] mb-3 line-clamp-2 group-hover:text-[#03144a] transition-colors">
                      {article.title}
                    </h3>

                    {article.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    )}

                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center text-[#03144a] hover:text-[#03144a] font-semibold transition-colors duration-200 group"
                    >
                      Lire l&apos;article
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination (exemple) */}
            <div className="flex justify-center mt-16">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Précédent
                </button>
                <button className="px-4 py-2 bg-[#03144a] text-white rounded-lg font-medium">
                  1
                </button>
                <button className="px-4 py-2 text-[#03144a] hover:text-[#03144a] hover:bg-gray-100 rounded-lg transition-colors">
                  2
                </button>
                <button className="px-4 py-2 text-[#03144a] hover:text-[#03144a] hover:bg-gray-100 rounded-lg transition-colors">
                  3
                </button>
                <button className="px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Suivant
                </button>
              </nav>
            </div>
          </>
        )}
      </div>

      {/* Section CTA */}
      <CTASection />
    </div>
  )
}