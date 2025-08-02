import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zones desservies – ClimGO',
  description: 'ClimGO intervient en Gironde, sur le Bassin d’Arcachon et Bordeaux Métropole pour vos besoins en chauffage, climatisation et eau chaude.',
  openGraph: {
    type: 'website',
    url: 'https://www.climgo.fr/zones-desservies',
    title: 'Zones desservies – ClimGO',
    description: 'ClimGO intervient en Gironde, sur le Bassin d’Arcachon et Bordeaux Métropole pour vos besoins en chauffage, climatisation et eau chaude.',
    images: ['/Logo.png'],
    locale: 'fr_FR',
    siteName: 'ClimGO'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ClimGO',
    creator: '@ClimGO',
    title: 'Zones desservies – ClimGO',
    description: 'ClimGO intervient en Gironde, sur le Bassin d’Arcachon et Bordeaux Métropole pour vos besoins en chauffage, climatisation et eau chaude.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/zones-desservies',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/favicon.ico'
  },
  keywords: [
    'CLIMGO',
    'ZONES DESSERVIES CLIMGO',
    'CLIMATISATION MÉTROPOLE BORDELAISE',
    'CHAUFFAGE GIRONDE',
    'CLIMATISATION BASSIN D’ARCACHON',
    'INSTALLATEUR CLIM ARCACHON',
    'DEPANNAGE CHAUFFAGE BORDEAUX',
    'ENTREPRISE CLIMATISATION MARCHEPRIME',
    'INSTALLATEUR RGE GIRONDE',
    'CLIMGO INTERVENTION LOCALE',
    'MAINTENANCE CLIM GIRONDE',
    'CHAUFFAGE ZONES DESSERVIES',
    'RGE CLIM ARCACHON',
    'CLIMATISATION LOCALE BORDEAUX',
    'INSTALLATEUR CLIMATISATION GIRONDE',
    'DEPANNAGE POMPE A CHALEUR GIRONDE',
    'CLIMGO BASSIN ARCACHON',
    'CHAUFFAGE CLIMGO GIRONDE'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return <div><script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Zones desservies par ClimGO",
      "description": "ClimGO intervient dans toute la Gironde : découvrez toutes les villes couvertes pour vos travaux de chauffage, climatisation, chauffe-eau et entretien.",
      "url": "https://www.climgo.fr/zones-desservies",
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
    </div>;
}