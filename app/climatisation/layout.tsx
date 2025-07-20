import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Climatisation ClimGO',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  openGraph: {
    title: 'Climatisation ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  twitter: {
    title: 'Climatisation ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/climatisation',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/Logo.png',
  },
  keywords: ['CLIMGO CLIMATISATION RGE', 'INSTALLATION CLIMATISATION MARCHEPRIME', "POSE CLIM BASSIN D'ARCACHON", 'CLIMATISATION RÉVERSIBLE BIGANOS', 'ENTRETIEN CLIMATISATION ANDERNOS', 'MAINTENANCE CLIM ARCACHON', 'ARTISAN CLIMATISATION SILENCIEUSE', 'DEVIS CLIM GRATUIT', "ENTREPRISE CLIMATISATION BASSIN D'ARCACHON", 'CLIMATISATION GAINABLE', "INSTALLATION CLIMATISEUR BASSIN D'ARCACHON", 'POSE CLIMATISEUR MARCHEPRIME', 'CLIMATISATION GIRONDE', 'CLIMATISATION ÉCONOMIQUE AUDENGE', 'INSTALLATEUR CLIM PESSAC', 'CLIMATISATION MIOS', 'CLIMATICIEN MARCHEPRIME', 'CLIM DURABLE', "PRIX D'UNE CLIM BIGANOS", 'AIDES DE L\'ÉTAT CLIMATISATION'],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};

export default function ClimatisationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Climatisation ClimGO</h1>
      {children}
    </div>
  );
}