import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aides & Subventions ClimGO',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  openGraph: {
    title: 'Aides & Subventions ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  twitter: {
    title: 'Aides & Subventions ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
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
    icon: '/Logo.png',
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
};

export default function AidesEtatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Aides & Subventions ClimGO</h1>
      {children}
    </div>
  );
}