import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog ClimGO | Conseils Chauffage, Climatisation & Énergie à Marcheprime',
  description: 'Explorez les articles ClimGO sur la climatisation, le chauffage, l’eau chaude sanitaire et les aides à la rénovation. Informations locales pour le Bassin d’Arcachon, la Gironde et alentours. Profitez de conseils d’experts, d’actualités et de solutions adaptées à Marcheprime et à la région Sud-Ouest pour optimiser votre confort thermique.',
  keywords: 'blog climatisation Marcheprime, conseils chauffage Gironde, eau chaude sanitaire Bassin d’Arcachon, rénovation énergétique Sud-Ouest, aides climatisation Marcheprime, PAC air eau Gironde, climatisation RGE Marcheprime, actualités énergie Gironde, ClimGO Bassin d’Arcachon, installation climatisation locale, solutions énergétiques Marcheprime',
  category: 'business',
  alternates: {
    canonical: '/blog',
  },
  robots: {
    index: true,
    follow: true,
  },
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
