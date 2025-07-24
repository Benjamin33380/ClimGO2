import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chauffage ClimGO',
  description: 'Installation et entretien de chauffage à Marcheprime et sur le Bassin d’Arcachon. Pompes à chaleur air/eau, planchers chauffants, radiateurs économiques. Artisan local, devis gratuit avec ClimGO.',
  openGraph: {
    title: 'Chauffage ClimGO',
    description: 'Installation et entretien de chauffage à Marcheprime et sur le Bassin d’Arcachon. Pompes à chaleur air/eau, planchers chauffants, radiateurs économiques. Artisan local, devis gratuit avec ClimGO.',
    images: ['/aepac.jpg'],
  },
  twitter: {
    title: 'Chauffage ClimGO',
    description: 'Installation et entretien de chauffage à Marcheprime et sur le Bassin d’Arcachon. Pompes à chaleur air/eau, planchers chauffants, radiateurs économiques. Artisan local, devis gratuit avec ClimGO.',
    images: ['/aepac.jpg'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/chauffage',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/web-app-manifest-512x512.png'
  },
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
  manifest: '/site.webmanifest',
  keywords: [
    'POMPE À CHALEUR AIR EAU MARCHÉPRIME',
    'INSTALLATION CHAUFFAGE BASSIN D’ARCACHON',
    'CLIMGO CHAUFFAGE ÉCOLOGIQUE',
    'CHAUFFAGE BASSE CONSOMMATION',
    'INSTALLATEUR PAC GIRONDE',
    'PLAN CHAUFFANT ÉNERGÉTIQUE',
    'ENTRETIEN CHAUFFAGE MARCHÉPRIME',
    'ARTISAN CHAUFFAGE ARCACHON',
    'CONFORT THERMIQUE MAISON',
    'RADIATEUR ÉLECTRIQUE BASSE CONSO',
    'SYSTÈME DE CHAUFFAGE MODERNE',
    'PLOMBIER CHAUFFAGE NOUVELLE-AQUITAINE',
    'DEVIS GRATUIT POMPE À CHALEUR',
    'CHAUFFAGE RÉVERSIBLE CLIMGO',
    'PAC PERFORMANTE LOGEMENT',
    'INSTALLATION PLAN CHAUFFANT',
    'CHAUFFAGE SILENCIEUX INTÉRIEUR',
    'RÉNOVATION CHAUFFAGE ÉNERGÉTIQUE'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'chauffage, pompe à chaleur, plancher chauffant, radiateurs, énergies renouvelables',
};  

export default function ChauffageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}