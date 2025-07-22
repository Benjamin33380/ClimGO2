import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eau chaude sanitaire ClimGO',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  openGraph: {
    title: 'Eau chaude sanitaire ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  twitter: {
    title: 'Eau chaude sanitaire ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/eau-chaude-sanitaire',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/Logo.png',
  },
  keywords: [
    'CLIMGO EAU CHAUDE',
    'CHAUFFE-EAU THERMODYNAMIQUE',
    'CHAUFFE-EAU ÉLECTRIQUE',
    'INSTALLATION CHAUFFE-EAU GIRONDE',
    'CHAUFFE-EAU ARCACHON',
    'EAU CHAUDE SANITAIRE',
    'RÉNOVATION ÉNERGÉTIQUE',
    'ENTRETIEN CHAUFFE-EAU MARCHEPRIME',
    'TECHNICIEN ECS BASSIN D’ARCACHON',
    'SOLUTION ÉCOLOGIQUE EAU CHAUDE',
    'MAINTENANCE CHAUFFE-EAU',
    'DEVIS GRATUIT ECS',
    'INSTALLATION ECS NOUVELLE-AQUITAINE',
    'CHAUFFE-EAU SILENCIEUX',
    'ARTISAN CHAUFFE-EAU ARCACHON',
    'EAU CHAUDE RAPIDE',
    'CONFORT SANITAIRE',
    'POMPE À CHALEUR ECS',
    'CLIMGO EXPERT CHAUFFE-EAU',
    'ECS MAISON INDIVIDUELLE'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};

export default function EauChaudeSanitaireLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}