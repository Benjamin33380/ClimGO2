'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface GoogleAdvice {
  id: string;
  fullName: string;
  content: string;
  rating: number;
  publishedDate: string;
}

interface GoogleReviewsProps {
  ville: string;
}

export default function GoogleReviews({ ville }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<GoogleAdvice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Erreur lors du chargement des avis:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Calculer la note moyenne
  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 5;

  return (
    <section className="py-20 bg-[#F8F9F4]">
      {/* Header réagencé avec design moderne */}
      <div className="text-center mb-16 px-4">
        {/* Titre principal accrocheur */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#03144a] mb-6">
          ClimGO c&apos;est 100% de satisfaction à {ville}
        </h2>
        
        {/* Sous-titre avec note */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex text-yellow-400 text-2xl">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-2xl font-bold text-gray-900">
            {averageRating.toFixed(1)} EXCELLENT
          </span>
        </div>
        
        {/* Section avec QR Code et CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Logo Google */}
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-700 font-medium text-lg">Google</span>
            </div>
            
            {/* CTA Principal */}
            <div className="text-center">
              <Link href="https://g.page/r/CYU8G8pY5uo1EBM/review" target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Laisser un avis
                </button>
              </Link>
            </div>
            
            {/* QR Code */}
            <div className="flex justify-center">
              <div className="text-center">
                <Image  
                  src="/qrcode.png" 
                  alt="QR Code Google" 
                  className="w-20 h-20 mx-auto mb-2"
                  width={80}
                  height={80}
                />
                <p className="text-sm text-gray-500">Scanner pour avis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel de scroll infini - Toute la largeur */}
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="w-full overflow-hidden">
          {/* Premier groupe d'avis */}
          <div className="flex animate-scroll">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mx-4 w-80 flex-shrink-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* En-tête avec nom et note */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {review.fullName}
                  </h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Contenu de l'avis */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-4">
                  {review.content}
                </p>
                
                {/* Date */}
                <div className="text-sm text-gray-500">
                  {new Date(review.publishedDate).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            ))}
            
            {/* Deuxième groupe d'avis (dupliqué pour l'effet infini) */}
            {reviews.map((review) => (
              <div 
                key={`duplicate-${review.id}`} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mx-4 w-80 flex-shrink-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* En-tête avec nom et note */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {review.fullName}
                  </h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Contenu de l'avis */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-4">
                  {review.content}
                </p>
                
                {/* Date */}
                <div className="text-sm text-gray-500">
                  {new Date(review.publishedDate).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            ))}
          </div>
          
          {/* Message si aucun avis */}
          {reviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucun avis pour le moment. Soyez le premier à laisser un avis !
              </p>
            </div>
          )}
        </div>
      )}

      {/* CSS pour l'animation de scroll infini */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
} 