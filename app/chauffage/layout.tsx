import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chauffage ClimGO',
  description: 'Installation et entretien de chauffage à Marcheprime et sur le Bassin d’Arcachon. Pompes à chaleur air/eau, planchers chauffants, radiateurs économiques.',
  openGraph: {
    type: 'website',
    url: 'https://www.climgo.fr/chauffage',
    title: 'Chauffage ClimGO',
    description: 'Installation et entretien de chauffage à Marcheprime et sur le Bassin d’Arcachon. Pompes à chaleur air/eau, planchers chauffants, radiateurs économiques. Artisan local, devis gratuit avec ClimGO.',
    images: ['/aepac.jpg'],
    locale: 'fr_FR',
    siteName: 'ClimGO'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ClimGO',
    creator: '@ClimGO',
    title: 'Chauffage ClimGO',
    description: 'Installation et entretien de chauffage à Marcheprime et sur le Bassin d’Arcachon. Pompes à chaleur air/eau, planchers chauffants, radiateurs économiques. Artisan local, devis gratuit avec ClimGO.',
    images: ['/aepac.jpg'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/chauffage',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/favicon.ico'
  },
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
  manifest: '/site.webmanifest',
  keywords: [
    'POMPE À CHALEUR AIR EAU MARCHÉPRIME',
    'INSTALLATION CHAUFFAGE BASSIN D’ARCACHON',
    'CLIMGO CHAUFFAGE ÉCOLOGIQUE',
    'CHAUFFAGE BASSE CONSOMMATION',
    'INSTALLATEUR PAC GIRONDE',
    'PLAN CHAUFFANT ÉNERGÉTIQUE',
    'ENTRETIEN CHAUFFAGE MARCHÉPRIME',
    'ARTISAN CHAUFFAGE ARCACHON',
    'CONFORT THERMIQUE MAISON',
    'RADIATEUR ÉLECTRIQUE BASSE CONSO',
    'SYSTÈME DE CHAUFFAGE MODERNE',
    'PLOMBIER CHAUFFAGE NOUVELLE-AQUITAINE',
    'DEVIS GRATUIT POMPE À CHALEUR',
    'CHAUFFAGE RÉVERSIBLE CLIMGO',
    'PAC PERFORMANTE LOGEMENT',
    'INSTALLATION PLAN CHAUFFANT',
    'CHAUFFAGE SILENCIEUX INTÉRIEUR',
    'RÉNOVATION CHAUFFAGE ÉNERGÉTIQUE'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'chauffage, pompe à chaleur, plancher chauffant, radiateurs, énergies renouvelables',
};  

export default function ChauffageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": [
        "Pompe à chaleur air/air",
        "Pompe à chaleur air/eau",
        "Plancher chauffant",
        "Radiateurs basse température",
        "Radiateurs électriques",
        "Sèche-serviettes"
      ],
      "name": "Solutions de chauffage par ClimGO",
      "description": "Installation, remplacement et entretien de systèmes de chauffage performants : pompes à chaleur, planchers chauffants, radiateurs et sèche-serviettes.",
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
        {
          "@type": "Place",
          "name": "Marcheprime"
        },
        {
          "@type": "Place",
          "name": "Bassin d’Arcachon"
        },
        {
          "@type": "Place",
          "name": "Gironde"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catalogue de services chauffage",
        "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation de climatisation murale"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation de climatisation gainable"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Pompe à chaleur air/air"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Pompe à chaleur air/eau"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Plancher chauffant hydraulique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation de radiateurs basse température"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Sèche-serviettes électrique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Chauffe-eau thermodynamique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Chauffe-eau électrique classique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Entretien climatisation"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Entretien pompe à chaleur"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Désembouage plancher chauffant"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Dépannage chauffage"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Dépannage climatisation"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Petits travaux de plomberie"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Conseils en rénovation énergétique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Mise en conformité installation thermique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation de VMC simple flux"
      }
    },
        ]
      }
    })
  }}
/>
      {children}
    </div>
  );
}