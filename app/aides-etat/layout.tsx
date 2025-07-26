import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aides & Subventions ClimGO',
  description: 'Bénéficiez des aides de l’État avec ClimGO pour vos travaux de chauffage, climatisation ou eau chaude : MaPrimeRénov’, CEE, TVA réduite, éco-PTZ, et plus. Accompagnement sur Marcheprime, Bassin d’Arcachon et alentours.',
  openGraph: {
    title: 'Aides & Subventions ClimGO',
    description: 'Bénéficiez des aides de l’État avec ClimGO pour vos travaux de chauffage, climatisation ou eau chaude : MaPrimeRénov’, CEE, TVA réduite, éco-PTZ, et plus. Accompagnement sur Marcheprime, Bassin d’Arcachon et alentours.',
    images: ['/Logo.png'],
    locale: 'fr_FR',
    siteName: 'ClimGO'
  },
  twitter: {
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
      {children}
    </div>
  );
}