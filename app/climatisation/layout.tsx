import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Climatisation ClimGO',
  description: 'Installation, entretien et mise en service de climatisation à Marcheprime et sur le Bassin d’Arcachon. Systèmes muraux, gainables, consoles et cassettes.',
  openGraph: {
    type: 'website',
    url: 'https://www.climgo.fr/climatisation',
    title: 'Climatisation ClimGO',
    description: 'Installation, entretien et mise en service de climatisation à Marcheprime et sur le Bassin d’Arcachon. Spécialiste des systèmes muraux, gainables, consoles et cassettes. Artisan qualifié, devis gratuit avec ClimGO.',
    images: ['/climcauderan.jpeg'],
    locale: 'fr_FR',
    siteName: 'ClimGO'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ClimGO',
    creator: '@ClimGO',
    title: 'Climatisation ClimGO',
    description: 'Installation, entretien et mise en service de climatisation à Marcheprime et sur le Bassin d’Arcachon. Spécialiste des systèmes muraux, gainables, consoles et cassettes. Artisan qualifié, devis gratuit avec ClimGO.',
    images: ['/climcauderan.jpeg'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/climatisation',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/favicon.ico'
  },
  keywords: [ 
   'CLIMATISATION MURALE MARCHÉPRIME',
    'INSTALLATEUR CLIM BASSIN D’ARCACHON',
    'CLIM RÉVERSIBLE NOUVELLE-AQUITAINE',
    'CLIM GO EXPERT CLIMATISATION',
    'CLIMATISATION GAINABLE GIRONDE',
    'ENTRETIEN CLIM MARCHÉPRIME',
    'INSTALLATION CLIM CONSOLE',
    'CLIMATISATION SILENCIEUSE INTÉRIEURE',
    'CLIMATISATION CASSABLE DESIGN',
    'POMPE À CHALEUR AIR AIR',
    'CONFORT D’ÉTÉ MAISON',
    'CLIMATISEUR ÉCOLOGIQUE',
    'ARTISAN CLIM MARCHÉPRIME',
    'DEVIS GRATUIT CLIMATISATION',
    'CLIMATISATION POUR MAISON INDIVIDUELLE',
    'SOLUTION CLIM BASSIN D’ARCACHON',
    'CLIM RÉGLABLE MULTI-ZONE',
    'INSTALLATION RAPIDE CLIM'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'climatisation, pompe à chaleur, confort thermique, énergies renouvelables',
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
  manifest: '/site.webmanifest',
};

export default function ClimatisationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": [
        "Climatisation murale",
        "Climatisation gainable",
        "Climatisation console",
        "Climatisation cassette",
        "Pompe à chaleur réversible",
        "Entretien et dépannage de climatisation"
      ],
      "name": "Solutions de climatisation par ClimGO",
      "description": "Installation, entretien et dépannage de systèmes de climatisation : murale, gainable, cassette, console. Solutions sur mesure pour un confort optimal.",
      "provider": {
        "@type": "Organization",
        "name": "ClimGO",
        "url": "https://www.climgo.fr",
        "logo": "https://www.climgo.fr/Logo.png",
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
      },
      "areaServed": [
        { "@type": "Place", "name": "Marcheprime" },
        { "@type": "Place", "name": "Bassin d’Arcachon" },
        { "@type": "Place", "name": "Gironde" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catalogue de services climatisation",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Climatisation murale"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Climatisation gainable"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Climatisation cassette"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Climatisation console"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pompe à chaleur réversible"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Entretien et dépannage de climatisation"
            }
          }
        ]
      }
    })
  }}
/>
      {children}
    </div>
  );
}