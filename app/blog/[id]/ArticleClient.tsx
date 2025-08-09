'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CommentModal from '../../components/CommentModal';
import RatingModal from '../../components/RatingModal';

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
    color: string
    slug: string
  } | null
  _count: {
    comments: number
    ratings: number
  }
  averageRating: number
}

interface ArticleClientProps {
  article: Article;
  relatedArticles: Article[];
}

// Composant Hero avec breadcrumb
function ArticleHero({ article }: { article: Article }) {
  return (
    <div className="relative bg-gradient-to-b from-[#f8f9f4] to-[#f8f9f4] border-b border-gray-100 pt-42">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-[#03144a] transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#03144a] transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[#03144a] font-medium">{article.title}</span>
        </nav>

        {/* Header de l'article */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            {article.category && (
              <Link
                href={`/categorie/${article.category.slug}`}
                className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm font-medium border border-gray-200 hover:border-[#03144a] transition-colors"
              >
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: article.category.color }}
                ></div>
                {article.category.name}
              </Link>
            )}
            <time className="text-sm text-gray-500">
              {new Date(article.createdAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          <h1 className="text-4xl lg:text-5xl font-medium text-[#03144a] mb-6 leading-tight">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {article.excerpt}
            </p>
          )}

          {/* Rating et commentaires */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < Math.round(article.averageRating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="font-medium">
                {article.averageRating > 0 ? article.averageRating.toFixed(1) : 'N/A'}
              </span>
            </div>

            {/* Commentaires */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{article._count.comments} commentaire{article._count.comments > 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Composant Sidebar avec modals
function ArticleSidebar({ article, onRatingSubmitted, onCommentSubmitted }: { 
  article: Article;
  onRatingSubmitted: () => void;
  onCommentSubmitted: () => void;
}) {
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Actions rapides */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-[#03144a] mb-4">
          Interagir avec cet article
        </h3>
        
        <div className="space-y-3">
          <button 
            onClick={() => setShowRatingModal(true)}
            className="w-full bg-yellow-500 text-white px-4 py-3 rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Noter cet article
          </button>
          
          <button 
            onClick={() => setShowCommentModal(true)}
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Laisser un commentaire
          </button>
        </div>
      </div>

      {/* Statistiques */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-[#03144a] mb-4">
          Statistiques
        </h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Note moyenne</span>
            <span className="font-semibold">
              {article.averageRating > 0 ? article.averageRating.toFixed(1) : 'N/A'}/5
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Commentaires</span>
            <span className="font-semibold">{article._count.comments}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Votes</span>
            <span className="font-semibold">{article._count.ratings}</span>
          </div>
        </div>
      </div>

      {/* Contact rapide */}
      <div className="bg-gradient-to-br from-[#03144a] to-[#03144a] rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">
          Besoin d'aide ?
        </h3>
        <p className="text-blue-100 mb-4">
          Nos experts sont là pour vous conseiller
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#03144a] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Nous contacter
        </Link>
      </div>

      {/* Modals */}
      <RatingModal
        isOpen={showRatingModal}
        onClose={() => setShowRatingModal(false)}
        articleId={article.id}
        articleTitle={article.title}
        onRatingSubmitted={onRatingSubmitted}
      />

      <CommentModal
        isOpen={showCommentModal}
        onClose={() => setShowCommentModal(false)}
        articleId={article.id}
        articleTitle={article.title}
        onCommentSubmitted={onCommentSubmitted}
      />
    </div>
  )
}




// Composant ExpertiseZone
function ExpertiseZone() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-[#03144a] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#F8F9F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        
        <h3 className="text-2xl font-semibold text-[#03144a] mb-2">
          Notre expertise
        </h3>
        <p className="text-gray-600">
          Plus de 15 ans d&apos;expérience en chauffage et climatisation
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="font-semibold text-[#03144a] mb-1">Certifié RGE</h4>
          <p className="text-sm text-gray-600">Reconnu Garant de l&apos;Environnement</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="font-semibold text-[#03144a] mb-1">Intervention rapide</h4>
          <p className="text-sm text-gray-600">Sous 24h en cas d&apos;urgence</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h4 className="font-semibold text-[#03144a] mb-1">Satisfaction client</h4>
          <p className="text-sm text-gray-600">100% de clients satisfaits</p>
        </div>
      </div>
    </div>
  )
}

export default function ArticleClient({ article, relatedArticles }: ArticleClientProps) {
  const [currentArticle, setCurrentArticle] = useState(article);

  const handleRatingSubmitted = () => {
    // Recharger les données de l'article
    window.location.reload();
  };

  const handleCommentSubmitted = () => {
    // Recharger les données de l'article
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#f8f9f4]">
      {/* Hero Section */}
      <ArticleHero article={currentArticle} />

      <div className="w-90/100 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar gauche */}
          <div className="lg:col-span-1">
            <ArticleSidebar 
              article={currentArticle} 
              onRatingSubmitted={handleRatingSubmitted}
              onCommentSubmitted={handleCommentSubmitted}
            />
          </div>

          {/* Contenu principal */}
          <article className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
              {/* Image de l'article */}
              {currentArticle.imageUrl && (
                <div className="mb-8">
                  <Image
                    src={currentArticle.imageUrl}
                    alt={currentArticle.title}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              )}

              {/* Contenu de l'article */}
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => <h1 className="text-3xl font-medium text-[#03144a] mb-6 mt-8 first:mt-0">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-medium text-[#03144a] mb-4 mt-8 pb-2 border-b border-gray-100">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-medium text-[#03144a] mb-3 mt-6">{children}</h3>,
                    h4: ({ children }) => <h4 className="text-lg font-medium text-[#03144a] mb-2 mt-5">{children}</h4>,
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
                  {currentArticle.content}
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
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${currentArticle.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#03144a] text-white px-4 py-2 rounded-lg hover:bg-[#03144a] transition-colors flex items-center space-x-2"
                    >
                      <span>Facebook</span>
                    </Link>
                    <Link 
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(currentArticle.title)}&url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${currentArticle.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors flex items-center space-x-2"
                    >
                      <span>Twitter</span>
                    </Link>
                    <Link 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${currentArticle.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <span>LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar droite avec CTA */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* CTA Urgence */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 text-white shadow-lg">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#03144a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Urgence chauffage/climatisation ?
                </h3>
                <p className="text-red-100 mb-6 text-center">
                  Notre équipe d&apos;urgence est disponible 24h/24 et 7j/7
                </p>
                
                <Link 
                  href="tel:0766460008"
                  className="inline-flex items-center justify-center w-full bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2 text-[#03144a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Appel d&apos;urgence
                </Link>
              </div>

              {/* CTA Devis */}
              <div className="bg-gradient-to-r from-[#03144a] to-[#03144a] rounded-xl p-6 text-white shadow-lg">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#03144a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Devis gratuit
                </h3>
                <p className="text-blue-100 mb-6 text-center">
                  Obtenez un devis personnalisé pour vos projets de chauffage et climatisation
                </p>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center w-full bg-white text-[#03144a] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Articles liés */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-medium text-[#03144a] mb-8">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/blog/${relatedArticle.slug}`}
                  className="group w-full relative"
                >
                  <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    {relatedArticle.imageUrl && (
                      <div className="relative h-48">
                        <Image
                          src={relatedArticle.imageUrl}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-medium text-[#03144a] mb-3 line-clamp-2 group-hover:text-[#03144a] transition-colors">
                        {relatedArticle.title}
                      </h3>
                      
                      {relatedArticle.excerpt && (
                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                          {relatedArticle.excerpt}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                        <time>
                          {new Date(relatedArticle.createdAt).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                        <span className="text-[#03144a] font-medium">
                          Lire l&apos;article →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 w-90/100 mx-auto">
          <ExpertiseZone />
        </div>
      </div>
    </div>
  )
} 