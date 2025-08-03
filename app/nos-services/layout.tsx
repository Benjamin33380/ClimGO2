import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Services ClimGO - Climatisation, Chauffage & Eau Chaude Sanitaire',
  description: 'ClimGO, spécialiste RGE en climatisation, chauffage et eau chaude sanitaire à Marcheprime et dans le Bassin d’Arcachon.',
  openGraph: {
    type: 'website',
    url: 'https://www.climgo.fr/nos-services',
    title: 'Nos services ClimGO - Climatisation, Chauffage & Eau Chaude Sanitaire | Marcheprime & Bassin d’Arcachon',
    description: 'ClimGO, spécialiste RGE en climatisation, chauffage et eau chaude sanitaire à Marcheprime et dans le Bassin d’Arcachon. Devis gratuit, intervention rapide, confort thermique assuré.',
    images: ['/Logo.png'],
    locale: 'fr_FR',
    siteName: 'ClimGO'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ClimGO',
    creator: '@ClimGO',
    title: 'Nos services ClimGO - Climatisation, Chauffage & Eau Chaude Sanitaire | Marcheprime & Bassin d’Arcachon',
    description: 'ClimGO, spécialiste RGE en climatisation, chauffage et eau chaude sanitaire à Marcheprime et dans le Bassin d’Arcachon. Devis gratuit, intervention rapide, confort thermique assuré.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/nos-services',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/favicon.ico'
  },
  keywords: [
    'CLIMGO SERVICES',
    'INSTALLATION CHAUFFAGE',
    'INSTALLATION CLIMATISATION',
    'EAU CHAUDE SANITAIRE',
    'POMPE À CHALEUR',
    'PLANCHER CHAUFFANT',
    'RADIATEUR BASSE TEMPÉRATURE',
    'ENTRETIEN CHAUFFAGE',
    'MAINTENANCE CLIM',
    'DEVIS GRATUIT CLIMGO',
    'SUBVENTIONS ÉNERGÉTIQUES',
    'RÉNOVATION ÉNERGÉTIQUE',
    'ARTISAN RGE MARCHEPRIME',
    'CLIMATISATION BASSIN ARCACHON',
    'CHAUFFAGE GIRONDE',
    'CLIM SILENCIEUSE',
    'CONFORT THERMIQUE',
    'SERVICE TECHNIQUE CLIMGO',
    'ÉCOLOGIE & ÉCONOMIES',
    'INTERVENTION RAPIDE',
    'INSTALLATEUR CLIM MARCHEPRIME',
    'CHAUFFAGE BASSIN D’ARCACHON',
    'POMPE À CHALEUR ARCACHON',
    'RGE GIRONDE',
    'CLIMATISATION MARCHEPRIME'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  height: 'device-height',
};
export default function NosServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Nos services",
      "description": "Découvrez les services proposés par ClimGO : installation de chauffage, climatisation, chauffe-eau, entretien et maintenance sur Marcheprime et le Bassin d’Arcachon.",
      "url": "https://www.climgo.fr/nos-services",
      "mainEntity": [
        {
          "@type": "Service",
          "name": "Installation de chauffage",
          "description": "Pompe à chaleur air/eau, plancher chauffant, radiateurs économiques."
        },
        {
          "@type": "Service",
          "name": "Climatisation",
          "description": "Climatisation murale, gainable, console ou cassette, adaptée à votre logement."
        },
        {
          "@type": "Service",
          "name": "Production d'eau chaude",
          "description": "Chauffe-eau thermodynamique ou électrique, pour répondre à tous les besoins sanitaires."
        },
        {
          "@type": "Service",
          "name": "Entretien & Maintenance",
          "description": "Contrat d’entretien et dépannage de vos systèmes pour garantir leur longévité."
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
        }
      }
    })
  }}
/>
      {children}
    </div>
  );
}