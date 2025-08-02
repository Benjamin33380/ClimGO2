import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.climgo.fr'),
  title: 'Page de Contact ClimGO',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  applicationName: 'ClimGO',
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    type: 'website',
    url: 'https://www.climgo.fr/contact',
    title: 'Contact ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
    locale: 'fr_FR',
    siteName: 'ClimGO',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ClimGO',
    creator: '@ClimGO',
    title: 'Contact ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: '/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/favicon.ico'
  },
  keywords: [
    'CLIMGO CONTACT',
    'DEVIS GRATUIT CLIMATISATION',
    'CONTACTER CHAUFFAGISTE MARCHEPRIME',
    'PRISE DE RENDEZ-VOUS CLIM',
    'CLIMATISATION BASSIN D’ARCACHON',
    'INSTALLATEUR CLIM GIRONDE',
    'CHAUFFAGE ÉCOLOGIQUE',
    'ENTRETIEN POMPE À CHALEUR',
    'RÉPONSE RAPIDE CLIMGO',
    'ARTISAN RGE CLIMATISATION',
    'NUMÉRO TECHNICIEN CLIM',
    'DISPONIBILITÉ INSTALLATION CHAUFFAGE',
    'CLIMATISATION SILENCIEUSE',
    'DEVIS INSTALLATION RAPIDE',
    'CLIMGO PROFESSIONNEL LOCAL',
    'CONTACT TECHNIQUE',
    'SERVICE CLIENT CLIMGO',
    'ZONE D’INTERVENTION ARCACHON',
    'DEMANDE D’INFORMATION CHAUFFAGE',
    'CLIMATISATION PERSONNALISÉE'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contactez ClimGO",
      "description": "Besoin d’un devis, d’un conseil ou d’une intervention en chauffage, climatisation ou chauffe-eau ? Contactez ClimGO à Marcheprime.",
      "url": "https://www.climgo.fr/contact",
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