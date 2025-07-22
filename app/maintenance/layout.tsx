import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance ClimGO',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  openGraph: {
    title: 'Maintenance ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  twitter: {
    title: 'Maintenance ClimGO',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/maintenance',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/Logo.png',
  },
  keywords: [
    'CLIMGO MAINTENANCE',
    'ENTRETIEN CLIMATISATION',
    'MAINTENANCE POMPE À CHALEUR',
    'ENTRETIEN CHAUFFAGE MARCHEPRIME',
    'RÉVISION CHAUFFE-EAU',
    'CONTRAT ENTRETIEN CLIM',
    'TECHNICIEN CLIM ARCACHON',
    'CHAUFFAGE RGE GIRONDE',
    'ENTRETIEN PAC AIR AIR',
    'NETTOYAGE CLIMATISEUR',
    'DÉPANNAGE RAPIDE CHAUFFAGE',
    'ARTISAN CLIMATISATION GIRONDE',
    'MAINTENANCE PAC AIR EAU',
    'DEVIS MAINTENANCE GRATUIT',
    'CLIM SILENCIEUSE ENTRETIEN',
    'CLIMGO SERVICE TECHNIQUE',
    'RÉVISION SAISONNIÈRE CLIM',
    'CLIMATISATION SANS SURPRISE',
    'TECHNICIEN QUALIFIÉ',
    'BASSIN D’ARCACHON ENTRETIEN'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'business',
};

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}