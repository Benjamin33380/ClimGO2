import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const canonicalUrl = `https://www.climgo.fr/blog/${params.slug}`

  return {
    title: `Blog ClimGO – ${params.slug} | Chauffage, Climatisation, Énergie`,
    description: 'Découvrez nos articles experts sur le chauffage, la climatisation et les solutions énergétiques. Conseils, actualités et guides techniques par ClimGO.',
    keywords: 'blog climatisation Marcheprime, conseils chauffage Gironde, eau chaude sanitaire Bassin d\'Arcachon, rénovation énergétique Sud-Ouest, aides climatisation Marcheprime, PAC air eau Gironde, climatisation RGE Marcheprime, actualités énergie Gironde, ClimGO Bassin d\'Arcachon, installation climatisation locale, solutions énergétiques Marcheprime',
    category: 'business',
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: `Blog ClimGO – ${params.slug} | Chauffage, Climatisation`,
      description: 'Découvrez nos articles experts sur le chauffage, la climatisation et les solutions énergétiques. Conseils, actualités et guides techniques par ClimGO.',
      images: ['/Logo.png'],
      locale: 'fr_FR',
      siteName: 'ClimGO',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ClimGO',
      creator: '@ClimGO',
      title: `Blog ClimGO – ${params.slug}`,
      description: 'Découvrez nos articles experts sur le chauffage, la climatisation et les solutions énergétiques. Conseils, actualités et guides techniques par ClimGO.',
      images: ['/Logo.png'],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#F8F9F4] my-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
