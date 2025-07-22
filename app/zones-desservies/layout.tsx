import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zones desservies – ClimGO',
  description: 'ClimGO intervient en Gironde, sur le Bassin d’Arcachon et Bordeaux Métropole pour vos besoins en chauffage, climatisation et eau chaude.',
  openGraph: {
    title: 'Zones desservies – ClimGO',
    description: 'ClimGO intervient en Gironde, sur le Bassin d’Arcachon et Bordeaux Métropole pour vos besoins en chauffage, climatisation et eau chaude.',
    images: ['/Logo.png'],
  },
  twitter: {
    title: 'Zones desservies – ClimGO',
    description: 'ClimGO intervient en Gironde, sur le Bassin d’Arcachon et Bordeaux Métropole pour vos besoins en chauffage, climatisation et eau chaude.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/zones-desservies',
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
    'ZONES DESSERVIES CLIMGO',
    'CLIMATISATION MÉTROPOLE BORDELAISE',
    'CHAUFFAGE GIRONDE',
    'CLIMATISATION BASSIN D’ARCACHON',
    'INSTALLATEUR CLIM ARCACHON',
    'DEPANNAGE CHAUFFAGE BORDEAUX',
    'ENTREPRISE CLIMATISATION MARCHEPRIME',
    'INSTALLATEUR RGE GIRONDE',
    'CLIMGO INTERVENTION LOCALE',
    'MAINTENANCE CLIM GIRONDE',
    'CHAUFFAGE ZONES DESSERVIES',
    'RGE CLIM ARCACHON',
    'CLIMATISATION LOCALE BORDEAUX',
    'INSTALLATEUR CLIMATISATION GIRONDE',
    'DEPANNAGE POMPE A CHALEUR GIRONDE',
    'CLIMGO BASSIN ARCACHON',
    'CHAUFFAGE CLIMGO GIRONDE'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}