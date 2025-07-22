import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ClimGO',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  openGraph: {
    title: 'Contact ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  twitter: {
    title: 'Contact ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/Logo.png',
  },
  keywords: [
    'CLIMGO CONTACT',
    'DEVIS GRATUIT CLIMATISATION',
    'CONTACTER CHAUFFAGISTE MARCHEPRIME',
    'PRISE DE RENDEZ-VOUS CLIM',
    'CLIMATISATION BASSIN D’ARCACHON',
    'INSTALLATEUR CLIM GIRONDE',
    'CHAUFFAGE ÉCOLOGIQUE',
    'ENTRETIEN POMPE À CHALEUR',
    'RÉPONSE RAPIDE CLIMGO',
    'ARTISAN RGE CLIMATISATION',
    'NUMÉRO TECHNICIEN CLIM',
    'DISPONIBILITÉ INSTALLATION CHAUFFAGE',
    'CLIMATISATION SILENCIEUSE',
    'DEVIS INSTALLATION RAPIDE',
    'CLIMGO PROFESSIONNEL LOCAL',
    'CONTACT TECHNIQUE',
    'SERVICE CLIENT CLIMGO',
    'ZONE D’INTERVENTION ARCACHON',
    'DEMANDE D’INFORMATION CHAUFFAGE',
    'CLIMATISATION PERSONNALISÉE'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}