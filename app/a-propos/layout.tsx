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
  keywords: ['ClimGO', 'CHAUFFAGE', 'CLIMATISATION', 'EAU CHAUDE', 'POMPE À CHALEUR', 'PLANCHER CHAUFFANT', 'RADIATEUR', 'Rénovation énergétique', 'Aides de l\'État', 'Subventions', 'Devis', 'INSTALLATION', 'ENTRETIEN', 'MAINTENANCE', 'Confort', 'Économie', 'POSE', 'BORDEAUX', 'ARCACHON', 'ANDERNOS', 'BIGANOS', "BASSIN D'ARCACHON", 'MARCHEPRIME'],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}