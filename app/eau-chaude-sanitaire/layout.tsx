import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Eau chaude sanitaire ClimGO',
  description: "Installation et entretien de chauffe-eau à Marcheprime et sur le Bassin d’Arcachon. Experts en eau chaude sanitaire.",
  openGraph: {
    type: 'website',
    url: 'https://www.climgo.fr/eau-chaude-sanitaire',
    title: 'Eau chaude sanitaire ClimGO',
    description: "Installation et entretien de chauffe-eau à Marcheprime et sur le Bassin d’Arcachon. Experts en eau chaude sanitaire, nous vous accompagnons pour des solutions performantes et économiques. Devis gratuit avec ClimGO.",
    images: ['/PylaCumulus.jpeg'],
    locale: 'fr_FR',
    siteName: 'ClimGO'
  },
  twitter: {
  card: 'summary_large_image',
    site: '@ClimGO',
    creator: '@ClimGO',
    title: 'Eau chaude sanitaire ClimGO',
    description: "Installation et entretien de chauffe-eau à Marcheprime et sur le Bassin d’Arcachon. Experts en eau chaude sanitaire, nous vous accompagnons pour des solutions performantes et économiques. Devis gratuit avec ClimGO.",
    images: ['/PylaCumulus.jpeg'],
  
  },
  alternates: {
    canonical: 'https://www.climgo.fr/eau-chaude-sanitaire',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/favicon.ico'
  },
  themeColor: '#ffffff',
  manifest: '/site.webmanifest',
  keywords: [
    'CHAUFFE-EAU THERMODYNAMIQUE MARCHÉPRIME',
    'CHAUFFE-EAU ÉLECTRIQUE ARCACHON',
    'INSTALLATEUR ECS BASSIN D’ARCACHON',
    'CLIMGO EXPERT EAU CHAUDE',
    'EAU CHAUDE SANITAIRE GIRONDE',
    'PLOMBIER CHAUFFE-EAU MARCHÉPRIME',
    'ENTRETIEN ECS NOUVELLE-AQUITAINE',
    'POMPE À CHALEUR EAU CHAUDE',
    'CHAUFFE-EAU ÉCOLOGIQUE SILENCIEUX',
    'CHAUFFE-EAU RAPIDE ET PERFORMANT',
    'DEVIS GRATUIT CHAUFFE-EAU MARCHÉPRIME',
    'CONFORT SANITAIRE ÉNERGÉTIQUE',
    'ARTISAN CHAUFFE-EAU ARCACHON',
    'MAINTENANCE ECS BASSIN D’ARCACHON',
    'SOLUTION ÉCONOMIQUE EAU CHAUDE',
    'INSTALLATION ECS MAISON INDIVIDUELLE',
    'RÉNOVATION ÉNERGÉTIQUE ECS',
    'ECS POUR LOGEMENT RÉSIDENTIEL',
    'INSTALLATEUR CERTIFIÉ ECS GIRONDE',
    'CLIMGO INSTALLATION EAU CHAUDE'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'chauffe-eau, plomberie, climatisation, énergies renouvelables',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function EauChaudeSanitaireLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Production d’eau chaude sanitaire",
      "description": "Installation, remplacement et entretien de chauffe-eaux thermodynamiques ou électriques. ClimGO vous accompagne à Marcheprime et alentours.",
      "url": "https://www.climgo.fr/eau-chaude-sanitaire",
      "mainEntity": [
        {
          "@type": "Service",
          "name": "Chauffe-eau thermodynamique",
          "description": "Solution économique et écologique pour produire de l’eau chaude sanitaire à partir des calories de l’air ambiant."
        },
        {
          "@type": "Service",
          "name": "Chauffe-eau électrique",
          "description": "Installation ou remplacement de chauffe-eau classiques adaptés aux besoins des particuliers et petits logements."
        },
        {
          "@type": "Service",
          "name": "Entretien chauffe-eau",
          "description": "Maintenance préventive et curative pour prolonger la durée de vie de votre équipement et garantir un fonctionnement optimal."
        }
      ],
      "publisher": {
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
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Catalogue de services climatisation",
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
            }
          ]
        }
      }
    })
  }}
/>
      {children}
    </div>
  );
}