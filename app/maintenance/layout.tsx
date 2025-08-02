import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance ClimGO',
  description: 'Entretien et maintenance de climatisation, chauffage et chauffe-eau à Marcheprime et sur le Bassin d’Arcachon.',
  openGraph: {
    type: 'website',
    url: 'https://www.climgo.fr/maintenance',
    title: 'Maintenance ClimGO',
    description: 'Entretien et maintenance de climatisation, chauffage et chauffe-eau à Marcheprime et sur le Bassin d’Arcachon. ClimGO assure la révision, le dépannage et le suivi technique de vos équipements. Devis gratuit.',
    images: ['/emd.jpeg'],
    locale: 'fr_FR',
    siteName: 'ClimGO'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ClimGO',
    creator: '@ClimGO',
    title: 'Maintenance ClimGO',
    description: 'Entretien et maintenance de climatisation, chauffage et chauffe-eau à Marcheprime et sur le Bassin d’Arcachon. ClimGO assure la révision, le dépannage et le suivi technique de vos équipements. Devis gratuit.',
    images: ['/emd.jpeg'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/maintenance',
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
    'ENTRETIEN CLIMATISATION MARCHEPRIME',
    'MAINTENANCE POMPE À CHALEUR MARCHEPRIME',
    'ENTRETIEN PAC AIR AIR',
    'ENTRETIEN PAC AIR EAU',
    'RÉVISION CLIMATISATION',
    'DÉPANNAGE CHAUFFAGE MARCHEPRIME',
    'CONTRAT ENTRETIEN CHAUFFAGE',
    'TECHNICIEN CLIMATISATION BASSIN D’ARCACHON',
    'RGE CHAUFFAGE GIRONDE',
    'ARTISAN CLIMATISATION MARCHEPRIME',
    'MAINTENANCE CHAUFFE-EAU',
    'ENTRETIEN CLIM RÉVERSIBLE',
    'INSTALLATEUR QUALIFIÉ CHAUFFAGE',
    'TECHNICIEN POMPE À CHALEUR',
    'RÉVISION CHAUFFE-EAU MARCHEPRIME',
    'CLIMGO MAINTENANCE',
    'ENTRETIEN CLIMATISATION BASSIN D’ARCACHON',
    'ENTRETIEN SAISONNIER CLIM',
    'DÉPANNAGE RAPIDE CHAUFFAGE',
    'DEVIS GRATUIT ENTRETIEN CLIM'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'climatisation, chauffage, plomberie, énergies renouvelables',
};

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Entretien & maintenance des équipements",
      "description": "ClimGO assure l’entretien, la maintenance et le dépannage de vos systèmes de chauffage, climatisation et chauffe-eau sur le Bassin d’Arcachon et en Gironde.",
      "url": "https://www.climgo.fr/entretien-maintenance",
      "mainEntity": [
        {
          "@type": "Service",
          "name": "Entretien de climatisation",
          "description": "Nettoyage, désinfection et vérification des performances de votre climatiseur pour garantir son efficacité et sa longévité."
        },
        {
          "@type": "Service",
          "name": "Entretien de pompe à chaleur",
          "description": "Contrôle complet et maintenance de vos PAC air/air ou air/eau pour une performance optimale toute l’année."
        },
        {
          "@type": "Service",
          "name": "Entretien de chauffe-eau",
          "description": "Purge, détartrage et vérification des composants de votre chauffe-eau thermodynamique ou électrique."
        },
        {
          "@type": "Service",
          "name": "Dépannage urgent",
          "description": "Intervention rapide en cas de panne sur vos équipements thermiques et climatiques."
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