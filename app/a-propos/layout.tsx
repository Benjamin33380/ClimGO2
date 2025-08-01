import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A propos de ClimGO',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  openGraph: {
    type : 'website',
    url: 'https://www.climgo.fr/a-propos',
    title: 'A propos de ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
    locale: 'fr_FR',
    siteName: 'ClimGO'
  },
  twitter: {
    card : 'summary_large_image',
    site: '@ClimGO',
    creator: '@ClimGO',
    title: 'A propos de ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/a-propos',
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
    'À PROPOS CLIMGO',
    'ENTREPRISE CLIMATISATION MARCHEPRIME',
    'CHAUFFAGE ET CLIMATISATION',
    'CLIMATISATION BASSIN D’ARCACHON',
    'SAVOIR-FAIRE CHAUFFAGE',
    'EXPERTISE THERMIQUE',
    'ARTISAN CLIM GIRONDE',
    'CLIMGO PRÉSENTATION',
    'HISTOIRE CLIMGO',
    'INSTALLATEUR CLIM ET CHAUFFAGE',
    'CLIM GO ENTREPRISE LOCALE',
    'VALEURS CLIMGO',
    'PARTENAIRE DE CONFIANCE',
    'CERTIFICATIONS RGE',
    'TECHNICIEN QUALIFIÉ',
    'MARQUE CLIMGO',
    'ENGAGEMENTS CLIMGO',
    'CLIMGO BASSIN ARCACHON',
    'CLIMGO GIRONDE'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
  generator: 'Next.js',
  themeColor: '#ffffff',
};

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ClimGO",
            "url": "https://www.climgo.fr",
            "logo": "https://www.climgo.fr/Logo.png",
            "description": "ClimGO est une entreprise spécialisée dans l'installation de chauffage, climatisation et production d'eau chaude sanitaire en Gironde.",
            "sameAs": [
              "https://www.instagram.com/climgo_climatisation_chauffage/",
              "https://www.facebook.com/people/Climgo/61578576031066/",
              "https://www.linkedin.com/company/climgo"
            ],
            "address": {
              "@type": "PostalAddress",
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
          })
        }}
      />
      {children}
    </div>
  );
}