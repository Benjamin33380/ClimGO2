import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chauffage ClimGO',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  openGraph: {
    title: 'Chauffage ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  twitter: {
    title: 'Chauffage ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/chauffage',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/Logo.png',
  },
  keywords: [
    'CLIMGO CHAUFFAGE',
    'POMPE À CHALEUR AIR EAU',
    'PLANCHER CHAUFFANT MARCHEPRIME',
    'RADIATEURS MODERNES GIRONDE',
    'CHAUFFAGE ÉCOLOGIQUE ARCACHON',
    'RÉNOVATION ÉNERGÉTIQUE',
    'INSTALLATION CHAUFFAGE BORDEAUX',
    'ENTRETIEN CHAUFFAGE BIGANOS',
    'MAINTENANCE POMPE À CHALEUR',
    'DEVIS CHAUFFAGE GRATUIT',
    'CHAUFFAGE ÉCONOMIQUE',
    'ARTISAN CHAUFFAGISTE BASSIN D’ARCACHON',
    'PAC AIR EAU',
    'PAC AIR AIR BASSIN D’ARCACHON',
    'RADIATEUR BASSE TEMPÉRATURE',
    'SÈCHE-SERVIETTES',
    'CHAUFFAGE RGE',
    'CHAUFFAGISTE LOCAL GIRONDE',
    'CLIMGO EXPERT CHAUFFAGE',
    'CHAUFFAGE MAISON NEUVE'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};  

export default function ChauffageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Chauffage ClimGO</h1>
      {children}
    </div>
  );
}