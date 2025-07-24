import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance ClimGO',
  description: 'Entretien et maintenance de climatisation, chauffage et chauffe-eau à Marcheprime et sur le Bassin d’Arcachon. ClimGO assure la révision, le dépannage et le suivi technique de vos équipements. Devis gratuit.',
  openGraph: {
    title: 'Maintenance ClimGO',
    description: 'Entretien et maintenance de climatisation, chauffage et chauffe-eau à Marcheprime et sur le Bassin d’Arcachon. ClimGO assure la révision, le dépannage et le suivi technique de vos équipements. Devis gratuit.',
    images: ['/emd.jpeg'],
  },
  twitter: {
    title: 'Maintenance ClimGO',
    description: 'Entretien et maintenance de climatisation, chauffage et chauffe-eau à Marcheprime et sur le Bassin d’Arcachon. ClimGO assure la révision, le dépannage et le suivi technique de vos équipements. Devis gratuit.',
    images: ['/emd.jpeg'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/maintenance',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
  manifest: '/site.webmanifest',
  keywords: [
    'ENTRETIEN CLIMATISATION MARCHEPRIME',
    'MAINTENANCE POMPE À CHALEUR MARCHEPRIME',
    'ENTRETIEN PAC AIR AIR',
    'ENTRETIEN PAC AIR EAU',
    'RÉVISION CLIMATISATION',
    'DÉPANNAGE CHAUFFAGE MARCHEPRIME',
    'CONTRAT ENTRETIEN CHAUFFAGE',
    'TECHNICIEN CLIMATISATION BASSIN D’ARCACHON',
    'RGE CHAUFFAGE GIRONDE',
    'ARTISAN CLIMATISATION MARCHEPRIME',
    'MAINTENANCE CHAUFFE-EAU',
    'ENTRETIEN CLIM RÉVERSIBLE',
    'INSTALLATEUR QUALIFIÉ CHAUFFAGE',
    'TECHNICIEN POMPE À CHALEUR',
    'RÉVISION CHAUFFE-EAU MARCHEPRIME',
    'CLIMGO MAINTENANCE',
    'ENTRETIEN CLIMATISATION BASSIN D’ARCACHON',
    'ENTRETIEN SAISONNIER CLIM',
    'DÉPANNAGE RAPIDE CHAUFFAGE',
    'DEVIS GRATUIT ENTRETIEN CLIM'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'climatisation, chauffage, plomberie, énergies renouvelables',
};

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}