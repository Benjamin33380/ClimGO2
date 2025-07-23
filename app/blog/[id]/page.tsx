import { PrismaClient } from '@prisma/client'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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

async function getPreviousArticles(currentArticleId: string): Promise<Article[]> {
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
      take: 2
    })
    return articles
  } catch (error) {
    console.error('Erreur lors de la récupération des articles précédents:', error)
    return []
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params
  const article = await getArticle(resolvedParams.id)
  
  if (!article) {
    return {
      title: 'Article non trouvé - ClimGo',
      description: 'L\'article que vous recherchez n\'existe pas ou n\'est plus disponible.'
    }
  }

  return {
    title: article.metaTitle || article.title,
    description: article.metaDesc || article.excerpt || 'Découvrez cet article sur ClimGo',
    keywords: article.metaKeywords || undefined,
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDesc || article.excerpt || undefined,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params
  const article = await getArticle(resolvedParams.id)
  const previousArticles = await getPreviousArticles(article?.id || '')

  if (!article) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Article principal */}
        <article className="lg:col-span-2">
          {/* Navigation retour */}
          <div className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour au blog
            </Link>
          </div>

          {/* En-tête de l'article */}
          <header className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <time dateTime={article.createdAt.toISOString()}>
                Publié le {new Date(article.createdAt).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {article.updatedAt > article.createdAt && (
                <span className="ml-4">
                  Mis à jour le {new Date(article.updatedAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </header>

          {/* Image principale */}
          {article.imageUrl && (
            <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={1000}
                height={1000}
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Contenu de l'article */}
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-bold text-gray-900 mb-2 mt-5">{children}</h3>,
                h4: ({ children }) => <h4 className="text-lg font-bold text-gray-900 mb-2 mt-4">{children}</h4>,
                p: ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
                li: ({ children }) => <li className="text-gray-700">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
                    {children}
                  </blockquote>
                ),
                code: ({ children, className }) => {
                  const isInline = !className
                  return isInline ? (
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
                  ) : (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                      <code className="text-sm font-mono">{children}</code>
                    </pre>
                  )
                },
                a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
                  <Link href={typeof href === 'string' ? href : ''} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                    {children}
                  </Link>
                ),
                img: ({ src, alt }: { src?: string; alt?: string }) => (
                  <Image width={1000} height={1000} src={typeof src === 'string' ? src : ''} alt={alt || ''} className="max-w-full h-auto rounded-lg my-4" />
                ),
                table: (props) => (
                  <div className="overflow-x-auto mb-4">
                    <table {...props} className={`min-w-full border border-gray-300${props.className ? ' ' + props.className : ''}`}>
                      {props.children}
                    </table>
                  </div>
                ),
                th: (props) => (
                  <th {...props} className={`border border-gray-300 px-4 py-2 bg-gray-100 font-semibold${props.className ? ' ' + props.className : ''}`}>
                    {props.children}
                  </th>
                ),
                td: (props) => (
                  <td {...props} className={`border border-gray-300 px-4 py-2${props.className ? ' ' + props.className : ''}`}>
                    {props.children}
                  </td>
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          {/* Pied de page de l'article */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="text-sm text-gray-500">
                <p>Partagez cet article :</p>
              </div>
              
              <div className="flex space-x-4 mt-4 sm:mt-0">
                <Link 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Facebook
                </Link>
                <Link 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Twitter
                </Link>
                <Link 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </footer>
        </article>

        {/* Sidebar avec articles précédents */}
        <aside className="lg:col-span-1 my-24">
          <div className="sticky top-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Consultez ces articles
              </h3>
              
              {previousArticles.length > 0 ? (
                <div className="space-y-6">
                  {previousArticles.map((prevArticle) => (
                    <article key={prevArticle.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <Link href={`/blog/${prevArticle.slug}`} className="group">
                        {prevArticle.imageUrl && (
                          <div className="relative h-32 w-full mb-3 rounded-lg overflow-hidden">
                            <Image
                              src={prevArticle.imageUrl}
                              alt={prevArticle.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                        )}
                        
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                          {prevArticle.title}
                        </h4>
                        
                        {prevArticle.excerpt && (
                          <p className="text-sm text-gray-600 line-clamp-3 mb-2">
                            {prevArticle.excerpt}
                          </p>
                        )}
                        
                        <time className="text-xs text-gray-500">
                          {new Date(prevArticle.createdAt).toLocaleDateString('fr-FR', {
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
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link 
                  href="/blog"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                >
                  Voir tous les articles
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
