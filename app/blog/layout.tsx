import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog ClimGO | Conseils Chauffage, Climatisation à Marcheprime',
  description: 'Découvrez nos articles experts sur le chauffage, la climatisation et les solutions énergétiques. Conseils, actualités et guides techniques par ClimGO.',
  keywords: 'blog climatisation Marcheprime, conseils chauffage Gironde, eau chaude sanitaire Bassin d\'Arcachon, rénovation énergétique Sud-Ouest, aides climatisation Marcheprime, PAC air eau Gironde, climatisation RGE Marcheprime, actualités énergie Gironde, ClimGO Bassin d\'Arcachon, installation climatisation locale, solutions énergétiques Marcheprime',
  category: 'business',
  // Entre ici
  openGraph: {
    type: 'website',
    url: 'https://www.climgo.fr/blog', // Change l'URL
    title: 'Blog ClimGO | Conseils Chauffage, Climatisation à Marcheprime', // Change le titre
    description: 'Découvrez nos articles experts sur le chauffage, la climatisation et les solutions énergétiques. Conseils, actualités et guides techniques par ClimGO.', // Change la description
    images: ['/Logo.png'],
    locale: 'fr_FR',
    siteName: 'ClimGO',
     // Change l'URL
  },
  // Et ici
  twitter: {
  card: 'summary_large_image',
    site: '@ClimGO',
    creator: '@ClimGO',
    title: 'Blog ClimGO | Conseils Chauffage, Climatisation à Marcheprime',
    description: 'Découvrez nos articles experts sur le chauffage, la climatisation et les solutions énergétiques. Conseils, actualités et guides techniques par ClimGO.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/blog',
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
    <div><script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Le blog de ClimGO",
      "description": "Conseils, actualités et informations sur le chauffage, la climatisation, les aides d’État et l’entretien de vos équipements.",
      "url": "https://www.climgo.fr/blog",
      "publisher": {
        "@type": "Organization",
        "name": "ClimGO",
        "url": "https://www.climgo.fr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.climgo.fr/Logo.png"
        },
        "founder": {
          "@type": "Person",
          "name": "Benjamin Cardoso"
        },
        "foundingDate": "2025",
        "sameAs": [
          "https://www.instagram.com/climgo_climatisation_chauffage/",
          "https://www.facebook.com/people/Climgo/61578576031066/",
          "https://www.linkedin.com/company/climgo"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "28 Rue de Cantelaude",
          "addressLocality": "Marcheprime",
          "addressRegion": "Nouvelle-Aquitaine",
          "postalCode": "33380",
          "addressCountry": "FR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+33 7 66 46 00 08",
          "contactType": "customer service",
          "areaServed": "FR",
          "availableLanguage": ["French"]
        }
      }
    })
  }}
/> 
          {children}
           </div>
  )
}
