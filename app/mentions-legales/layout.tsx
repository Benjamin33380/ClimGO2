import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales ClimGO',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  openGraph: {
    title: 'Mentions légales ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  twitter: {
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
    icon: '/Logo.png',
  },
  keywords: ['ClimGO', 'Chauffage', 'Climatisation', 'Eau chaude', 'Pompe à chaleur', 'Plancher chauffant', 'Radiateur', 'Rénovation énergétique', 'Aides de l\'État', 'Subventions', 'Devis', 'Installation', 'Entretien', 'Maintenance', 'Confort', 'Économie', 'Écologie', 'Bordeaux', 'Arcachon', 'Gironde', 'Nouvelle Aquitaine'],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};

export default function MentionsLegalesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Mentions légales ClimGO</h1>
      {children}
    </div>
  );
}