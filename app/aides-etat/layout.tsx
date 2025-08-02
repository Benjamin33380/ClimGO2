import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aides & Subventions ClimGO',
  description: 'Bénéficiez des aides de l’État avec ClimGO pour vos travaux de chauffage, climatisation ou eau chaude : MaPrimeRénov’, CEE, TVA réduite, éco-PTZ, et plus.',
  openGraph: {
    type: 'website',
    url: 'https://www.climgo.fr/aides-etat',
    title: 'Aides & Subventions ClimGO',
    description: 'Bénéficiez des aides de l’État avec ClimGO pour vos travaux de chauffage, climatisation ou eau chaude : MaPrimeRénov’, CEE, TVA réduite, éco-PTZ, et plus. Accompagnement sur Marcheprime, Bassin d’Arcachon et alentours.',
    images: ['/Logo.png'],
    locale: 'fr_FR',
    siteName: 'ClimGO'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ClimGO',
    creator: '@ClimGO',
    title: 'Aides & Subventions ClimGO',
    description: 'Bénéficiez des aides de l’État avec ClimGO pour vos travaux de chauffage, climatisation ou eau chaude : MaPrimeRénov’, CEE, TVA réduite, éco-PTZ, et plus. Accompagnement sur Marcheprime, Bassin d’Arcachon et alentours.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/aides-etat',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/favicon.ico'
  },
  keywords: [
    'CLIMGO AIDES',
    'AIDES FINANCIÈRES TRAVAUX',
    'SUBVENTIONS CHAUFFAGE',
    'SUBVENTIONS CLIMATISATION',
    'MA PRIME RÉNOV',
    'CERTIFICATS D’ÉCONOMIES D’ÉNERGIE',
    'TVA RÉDUITE TRAVAUX',
    'ÉCO PTZ',
    'RÉNOVATION ÉNERGÉTIQUE',
    'AIDES ÉTAT ENERGIE',
    'DEVIS GRATUIT SUBVENTIONS',
    'DOSSIER AIDES CLIMGO',
    'ACCOMPAGNEMENT AIDES TRAVAUX',
    'CLIMGO CONSEILS FINANCEMENT',
    'CHAUFFAGE ÉCOLOGIQUE',
    'CLIMATISATION ÉCONOME',
    'FINANCER TRAVAUX ENERGIE',
    'AIDES LOCALES ÉNERGIE',
    'AIDES ENERGIE BASSIN ARCACHON',
    'CLIMGO MARCHEPRIME'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
  generator: 'Next.js',
  themeColor: '#ffffff',
};

export default function AidesEtatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Aides et subventions pour vos travaux",
            "description":
              "Découvrez toutes les aides disponibles pour vos projets de chauffage, climatisation ou chauffe-eau : MaPrimeRénov', CEE, TVA réduite, éco-PTZ, et plus encore.",
            "url": "https://www.climgo.fr/aides-etat",
            
            "mainEntity": [
              {
                "@type": "Service",
                "name": "MaPrimeRénov'",
                "description":
                  "Aide nationale destinée à financer une partie des travaux de rénovation énergétique, accessible à tous les ménages."
              },
              {
                "@type": "Service",
                "name": "Certificats d'Économies d'Énergie (CEE)",
                "description":
                  "Prime versée par les fournisseurs d’énergie pour inciter les particuliers à réaliser des travaux économes en énergie."
              },
              {
                "@type": "Service",
                "name": "TVA à taux réduit",
                "description":
                  "Application d’un taux de TVA réduit à 5,5 % pour les travaux d'amélioration énergétique."
              },
              {
                "@type": "Service",
                "name": "Éco-prêt à taux zéro (Éco-PTZ)",
                "description":
                  "Prêt sans intérêts permettant de financer des travaux de rénovation énergétique."
              },
              {
                "@type": "Service",
                "name": "Aides locales",
                "description":
                  "Certaines collectivités locales proposent des aides financières complémentaires pour la rénovation énergétique."
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
  },
            
          })
        }}
      />
      {children}
    </div>
  );
}