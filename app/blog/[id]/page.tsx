import { PrismaClient } from '@prisma/client'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const article = await prisma.article.findUnique({
      where: {
        slug: slug,
        published: true
      },
      select: {
        id: true,
        title: true,
        content: true,
        slug: true,
        imageUrl: true,
        excerpt: true,
        metaTitle: true,
        metaDesc: true,
        metaKeywords: true,
        createdAt: true,
        updatedAt: true
      }
    })
    return article
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error)
    return null
  }
}

async function getRelatedArticles(currentArticleId: string): Promise<Article[]> {
  try {
    const articles = await prisma.article.findMany({
      where: {
        published: true,
        id: {
          not: currentArticleId
        }
      },
      select: {
        id: true,
        title: true,
        content: true,
        slug: true,
        imageUrl: true,
        excerpt: true,
        metaTitle: true,
        metaDesc: true,
        metaKeywords: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 3
    })
    return articles
  } catch (error) {
    console.error('Erreur lors de la récupération des articles liés:', error)
    return []
  }
}

// Composant Hero avec breadcrumb
function ArticleHero({ article }: { article: Article }) {
  return (
    <div className="relative bg-gradient-to-b from-[#f8f9f4] to-[#f8f9f4] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#03144a] transition-colors">
            Accueil
          </Link>
          <svg className="mx-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/blog" className="hover:text-[#03144a] transition-colors">
            Blog
          </Link>
          <svg className="mx-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
            <span className="text-gray-700 font-medium">{article.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center text-sm text-gray-600 mb-4">
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
              <span className="mx-2">•</span>
              <span className="text-[#03144a] font-medium">Expert ClimGo</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-[#03144a] mb-6 leading-tight">
              {article.title}
            </h1>
            
            {article.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {article.excerpt}
              </p>
            )}

            {/* Tags d'expertise */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Chauffage
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Climatisation
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Conseils d&apos;expert
              </span>
            </div>
          </div>

          {/* Image principale */}
          {article.imageUrl && (
            <div className="relative">
              <div className="relative h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Widget de contact d'urgence
function EmergencyContact() {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Urgence 24h/7j</h3>
          <p className="text-sm opacity-90 mb-3">
            Panne de chauffage ou climatisation ? Notre équipe intervient rapidement !
          </p>
          <Link 
            href="tel:0766460008"
            className="inline-block bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Nous Appeler
          </Link>
        </div>
      </div>
    </div>
  )
}

// Widget devis gratuit
function QuoteWidget() {
  return (
    <div className="bg-gradient-to-br from-[#03144a] to-[#03144a] rounded-xl p-6 text-white shadow-lg">
      <div className="text-center">
        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-bold text-lg mb-2">Devis Gratuit</h3>
        <p className="text-sm opacity-90 mb-4">
          Installation, dépannage ou maintenance : obtenez votre devis personnalisé
        </p>
        <Link 
          href="/devis"
          className="inline-block bg-white text-[#03144a] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-md"
        >
          Demander un devis
        </Link>
      </div>
    </div>
  )
}

// Zone d'expertise
function ExpertiseZone() {
  const services = [
    { icon: "🔥", title: "Chauffage", desc: "Installation, réparation, entretien" },
    { icon: "❄️", title: "Climatisation", desc: "Systèmes réversibles et fixes" },
    { icon: "🔧", title: "Maintenance", desc: "Contrats d'entretien annuel" },
    { icon: "⚡", title: "Dépannage", desc: "Intervention rapide 24h/7j" }
  ]

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="font-bold text-lg text-[#03144a] mb-4 text-center">
        Nos Services d'Expert
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl mb-2">{service.icon}</div>
            <h4 className="font-semibold text-[#03144a] text-sm mb-1">
              {service.title}
            </h4>
            <p className="text-xs text-gray-600">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200 text-center">
        <Link 
          href="/services"
          className="text-[#03144a] hover:text-[#03144a] font-medium text-sm inline-flex items-center"
        >
          Voir tous nos services
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params
  const article = await getArticle(resolvedParams.id)
  
  if (!article) {
    return {
      title: 'Article non trouvé - ClimGo',
      description: 'L\'article que vous recherchez n\'existe pas ou n\'est plus disponible.',
      robots: {
        index: false,
        follow: false
      }
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.climgo.fr'
  const articleUrl = `${baseUrl}/blog/${article.slug}`
  
  const cleanDescription = (article.metaDesc || article.excerpt || `Conseils d'experts ClimGo pour ${article.title}`)
    .replace(/[\r\n\t]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/[""'']/g, '"')
    .replace(/[–—]/g, '-')
    .trim()
    .substring(0, 160)

  const cleanTitle = (article.metaTitle || `${article.title} - Expert ClimGo`)
    .replace(/[\r\n\t]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/[""'']/g, '"')
    .replace(/[–—]/g, '-')
    .trim()
    .substring(0, 60)

  const imageUrl = article.imageUrl && article.imageUrl.startsWith('http') 
    ? article.imageUrl 
    : null

  const metadata: Metadata = {
    title: cleanTitle,
    description: cleanDescription,
    keywords: article.metaKeywords || 'chauffage, climatisation, installation, réparation, entretien, ClimGo',
    
    alternates: {
      canonical: articleUrl,
    },
    
    openGraph: {
      title: cleanTitle,
      description: cleanDescription,
      url: articleUrl,
      siteName: 'ClimGo - Expert Chauffage & Climatisation',
      locale: 'fr_FR',
      type: 'article',
      publishedTime: article.createdAt.toISOString(),
      modifiedTime: article.updatedAt.toISOString(),
      authors: ['ClimGo'],
      section: 'Conseils Chauffage et Climatisation',
    },
    
    twitter: {
      card: 'summary_large_image',
      site: '@climgo',
      creator: '@climgo',
      title: cleanTitle,
      description: cleanDescription,
    },
    
    authors: [{ name: 'ClimGo', url: baseUrl }],
    publisher: 'ClimGo',
    category: 'Chauffage et Climatisation',
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

  if (imageUrl) {
    metadata.openGraph!.images = [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: cleanTitle,
        type: 'image/jpeg',
      }
    ]
    
    metadata.twitter!.images = [imageUrl]
  }

  return metadata
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params
  const article = await getArticle(resolvedParams.id)

  if (!article) {
    notFound()
  }

  const relatedArticles = await getRelatedArticles(article.id)

  return (
    <div className="min-h-screen bg-[#f8f9f4]">
      {/* Hero Section */}
      <ArticleHero article={article} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Contenu principal */}
          <article className="lg:col-span-3">
            <div className="bg-[#f8f9f4] rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
              {/* Contenu de l'article */}
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => <h1 className="text-3xl font-bold text-[#03144a] mb-6 mt-8 first:mt-0">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-bold text-[#03144a] mb-4 mt-8 pb-2 border-b border-gray-100">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-bold text-[#03144a] mb-3 mt-6">{children}</h3>,
                    h4: ({ children }) => <h4 className="text-lg font-bold text-[#03144a] mb-2 mt-5">{children}</h4>,
                    p: ({ children }) => <p className="mb-6 text-gray-700 leading-relaxed text-lg">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2 ml-4">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2 ml-4">{children}</ol>,
                    li: ({ children }) => <li className="text-gray-700 leading-relaxed">{children}</li>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-blue-500 bg-[#f8f9f4] p-4 rounded-r-lg italic text-gray-700 mb-6">
                        {children}
                      </blockquote>
                    ),
                    code: ({ children, className }) => {
                      const isInline = !className
                      return isInline ? (
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">{children}</code>
                      ) : (
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
                          <code className="text-sm font-mono">{children}</code>
                        </pre>
                      )
                    },
                    a: (props) => (
                      <Link 
                        href={props.href || ''} 
                        className="text-[#03144a] hover:text-[#03144a] underline font-medium" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {props.children}
                      </Link>
                    ),
                    img: (props) => (
                      <div className="my-8">
                        <Image 
                          width={800} 
                          height={400} 
                          src={typeof props.src === 'string' ? props.src : ''} 
                          alt={props.alt || ''} 
                          className="w-full h-auto rounded-lg shadow-md" 
                        />
                      </div>
                    ),
                  }}
                >
                  {article.content}
                </ReactMarkdown>
              </div>

              {/* Partage social */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-lg font-semibold text-[#03144a] mb-2">
                      Cet article vous a été utile ?
                    </h3>
                    <p className="text-gray-600">Partagez-le avec vos proches !</p>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#03144a] text-white px-4 py-2 rounded-lg hover:bg-[#03144a] transition-colors flex items-center space-x-2"
                    >
                      <span>Facebook</span>
                    </Link>
                    <Link 
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors flex items-center space-x-2"
                    >
                      <span>Twitter</span>
                    </Link>
                    <Link 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#03144a] text-white px-4 py-2 rounded-lg hover:bg-[#03144a] transition-colors flex items-center space-x-2"
                    >
                      <span>LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Contact d'urgence */}
            <EmergencyContact />
            
            {/* Widget devis */}
            <QuoteWidget />
            
            {/* Zone d'expertise */}
            <ExpertiseZone />

            {/* Articles liés */}
            <div className="bg-[#f8f9f4] rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-[#03144a] mb-6">
                Autres articles qui pourraient vous intéresser
              </h3>
              
              {relatedArticles.length > 0 ? (
                <div className="space-y-6">
                  {relatedArticles.map((relatedArticle) => (
                    <article key={relatedArticle.id} className="group">
                      <Link href={`/blog/${relatedArticle.slug}`}>
                        {relatedArticle.imageUrl && (
                          <div className="relative h-32 w-full mb-3 rounded-lg overflow-hidden">
                            <Image
                              src={relatedArticle.imageUrl}
                              alt={relatedArticle.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                        )}
                        
                        <h4 className="font-semibold text-[#03144a] group-hover:text-[#03144a] transition-colors duration-200 mb-2 line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                        
                        {relatedArticle.excerpt && (
                          <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                            {relatedArticle.excerpt}
                          </p>
                        )}
                        
                        <time className="text-xs text-gray-500">
                          {new Date(relatedArticle.createdAt).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  Aucun autre article disponible pour le moment.
                </p>
              )}
              
              <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                <Link 
                  href="/blog"
                  className="text-[#03144a] hover:text-[#03144a] font-medium text-sm inline-flex items-center"
                >
                  Voir tous nos conseils
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Section CTA finale */}
      <section className="bg-gradient-to-r from-[#03144a] to-[#03144a] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d'un professionnel pour vos installations ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Notre équipe d&apos;experts ClimGo vous accompagne pour tous vos projets de chauffage et climatisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-[#03144a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Nous contacter
            </Link>
            <Link 
              href="tel:0766460008"
              className="bg-[#03144a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#03144a] transition-colors border-2 border-[#03144a]"
            >
              Nous appeler
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
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
    return []
  }
}