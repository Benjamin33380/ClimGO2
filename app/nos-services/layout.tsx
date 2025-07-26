import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services ClimGO - Climatisation, Chauffage & Eau Chaude Sanitaire',
  description: 'ClimGO, spécialiste RGE en climatisation, chauffage et eau chaude sanitaire à Marcheprime et dans le Bassin d’Arcachon.',
  openGraph: {
    title: 'Nos services ClimGO - Climatisation, Chauffage & Eau Chaude Sanitaire | Marcheprime & Bassin d’Arcachon',
    description: 'ClimGO, spécialiste RGE en climatisation, chauffage et eau chaude sanitaire à Marcheprime et dans le Bassin d’Arcachon. Devis gratuit, intervention rapide, confort thermique assuré.',
    images: ['/Logo.png'],
    locale: 'fr_FR',
    siteName: 'ClimGO'
  },
  twitter: {
    title: 'Nos services ClimGO - Climatisation, Chauffage & Eau Chaude Sanitaire | Marcheprime & Bassin d’Arcachon',
    description: 'ClimGO, spécialiste RGE en climatisation, chauffage et eau chaude sanitaire à Marcheprime et dans le Bassin d’Arcachon. Devis gratuit, intervention rapide, confort thermique assuré.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/nos-services',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/favicon.ico'
  },
  keywords: [
    'CLIMGO SERVICES',
    'INSTALLATION CHAUFFAGE',
    'INSTALLATION CLIMATISATION',
    'EAU CHAUDE SANITAIRE',
    'POMPE À CHALEUR',
    'PLANCHER CHAUFFANT',
    'RADIATEUR BASSE TEMPÉRATURE',
    'ENTRETIEN CHAUFFAGE',
    'MAINTENANCE CLIM',
    'DEVIS GRATUIT CLIMGO',
    'SUBVENTIONS ÉNERGÉTIQUES',
    'RÉNOVATION ÉNERGÉTIQUE',
    'ARTISAN RGE MARCHEPRIME',
    'CLIMATISATION BASSIN ARCACHON',
    'CHAUFFAGE GIRONDE',
    'CLIM SILENCIEUSE',
    'CONFORT THERMIQUE',
    'SERVICE TECHNIQUE CLIMGO',
    'ÉCOLOGIE & ÉCONOMIES',
    'INTERVENTION RAPIDE',
    'INSTALLATEUR CLIM MARCHEPRIME',
    'CHAUFFAGE BASSIN D’ARCACHON',
    'POMPE À CHALEUR ARCACHON',
    'RGE GIRONDE',
    'CLIMATISATION MARCHEPRIME'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};

export default function NosServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}