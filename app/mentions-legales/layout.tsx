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
      {children}
    </div>
  );
}