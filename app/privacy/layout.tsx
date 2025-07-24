import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité ClimGO',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  openGraph: {
    title: 'Politique de confidentialité ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  twitter: {
    title: 'Politique de confidentialité ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/favicon.svg'
  },
  keywords: ['Politique de confidentialité', 'ClimGO confidentialité', 'Données personnelles ClimGO', 'Protection des données', 'Utilisation des données personnelles', 'Confidentialité site web', 'RGPD ClimGO', 'Sécurité des données', 'Collecte de données personnelles', 'Politique de confidentialité ClimGO'],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}