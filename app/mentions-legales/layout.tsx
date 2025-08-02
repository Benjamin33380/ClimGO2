import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales ClimGO',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  openGraph: {
    type: 'website',
    url: 'https://www.climgo.fr/mentions-legales',
    title: 'Mentions légales ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
    locale: 'fr_FR',
    siteName: 'ClimGO'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ClimGO',
    creator: '@ClimGO',
    title: 'Mentions légales ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/mentions-legales',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/favicon.ico'
    ,
  },
  keywords: [
    'CLIMGO',
    'MENTIONS LÉGALES CLIMGO',
    'INFORMATIONS LÉGALES',
    'ENTREPRISE CLIMATISATION MARCHEPRIME',
    'RESPONSABILITÉ LÉGALE',
    'SITE INTERNET CLIMGO',
    'RÉGLEMENTATION RGPD',
    'CONFIDENTIALITÉ DONNÉES',
    'DONNÉES PERSONNELLES',
    'MENTIONS OBLIGATOIRES',
    'EDITEUR SITE INTERNET',
    'HÉBERGEMENT SITE CLIMGO',
    'AVIS CLIENTS CLIMGO',
    'IDENTITÉ ENTREPRISE',
    'STATUT JURIDIQUE CLIMGO',
    'RÉGION NOUVELLE-AQUITAINE',
    'GIRONDE',
    'ARCACHON',
    'BASSIN D’ARCACHON',
    'RÈGLES LÉGALES ENTREPRISE'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};

export default function MentionsLegalesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mentions légales",
      "description": "Consultez les mentions légales de ClimGO : informations légales de l’entreprise, éditeur du site, hébergement, propriété intellectuelle et responsabilité.",
      "url": "https://www.climgo.fr/mentions-legales",
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