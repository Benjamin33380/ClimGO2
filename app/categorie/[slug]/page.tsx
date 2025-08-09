import { Metadata, Viewport } from 'next';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const category = await prisma.category.findUnique({
      where: { slug: resolvedParams.slug },
      select: {
        name: true,
        description: true,
      },
    });

    if (!category) {
      return {
        title: 'Catégorie non trouvée',
        description: 'La catégorie demandée n\'existe pas.',
      };
    }

    return {
      title: `${category.name} - Articles ClimGO`,
      description: category.description || `Découvrez tous nos articles sur ${category.name}`,
      openGraph: {
        title: `${category.name} - Articles ClimGO`,
        description: category.description || `Découvrez tous nos articles sur ${category.name}`,
        type: 'website',
        siteName: 'ClimGO',
        locale: 'fr_FR',
        url: 'https://www.climgo.fr',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${category.name} - Articles ClimGO`,
        description: category.description || `Découvrez tous nos articles sur ${category.name}`,
      },
      alternates: {
        canonical: `https://www.climgo.fr/categorie/${resolvedParams.slug}`,
      },
      robots: {
        index: true,
        follow: true,
      },
      icons: {
        icon: '/favicon.ico',
      },
    };
  } catch (error) {
    console.error('Erreur lors de la génération des métadonnées:', error);
    return {
      title: 'Catégorie - ClimGO',
      description: 'Découvrez nos articles par catégorie.',
    };
  }
}

export default async function CategoryPage({ params }: PageProps) {
  try {
    const resolvedParams = await params;
    const category = await prisma.category.findUnique({
      where: { slug: resolvedParams.slug },
      include: {
        articles: {
          where: {
            published: true,
          },
          include: {
            _count: {
              select: {
                comments: true,
                ratings: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    if (!category || !category.isActive) {
      notFound();
    }

    // Calculer la note moyenne pour chaque article
    const articlesWithRating = await Promise.all(
      category.articles.map(async (article) => {
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
    );

    return (
      <div className="min-h-screen bg-[#F8F9F4] my-20">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-4 mb-4">
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour au blog
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <div 
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: category.color || '#808080' }}
              ></div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
                {category.description && (
                  <p className="text-gray-600 mt-2">{category.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Articles */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {articlesWithRating.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Aucun article dans cette catégorie
              </h2>
              <p className="text-gray-600 mb-8">
                Aucun article n&apos;a encore été publié dans cette catégorie.
              </p>
              <Link
                href="/blog"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Voir tous les articles
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articlesWithRating.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {article.imageUrl && (
                    <div className="relative h-48">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Catégorie */}
                    <div className="flex items-center gap-2 mb-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: category.color || '#808080' }}
                      ></div>
                      <span className="text-sm font-medium text-gray-600">{category.name}</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link href={`/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                        {article.title}
                      </Link>
                    </h2>

                    {article.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                    )}

                    {/* Rating et commentaires */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
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
                          <span className="text-gray-600 font-medium">
                            {article.averageRating > 0 ? article.averageRating.toFixed(1) : 'N/A'}
                          </span>
                        </div>

                        {/* Commentaires */}
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span>{article._count.comments}</span>
                        </div>
                      </div>

                      <span className="text-gray-400">
                        {new Date(article.createdAt).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Erreur lors du chargement de la catégorie:', error);
    notFound();
  }
} 