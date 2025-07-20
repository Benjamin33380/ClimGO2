import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A propos de ClimGO',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  openGraph: {
    title: 'A propos de ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  twitter: {
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
    icon: '/Logo.png',
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
};

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}