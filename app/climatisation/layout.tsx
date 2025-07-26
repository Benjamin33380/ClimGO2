import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Climatisation ClimGO',
  description: 'Installation, entretien et mise en service de climatisation à Marcheprime et sur le Bassin d’Arcachon. Spécialiste des systèmes muraux, gainables, consoles et cassettes. Artisan qualifié, devis gratuit avec ClimGO.',
  openGraph: {
    title: 'Climatisation ClimGO',
    description: 'Installation, entretien et mise en service de climatisation à Marcheprime et sur le Bassin d’Arcachon. Spécialiste des systèmes muraux, gainables, consoles et cassettes. Artisan qualifié, devis gratuit avec ClimGO.',
    images: ['/climcauderan.jpeg'],
    locale: 'fr_FR',
    siteName: 'ClimGO'
  },
  twitter: {
    title: 'Climatisation ClimGO',
    description: 'Installation, entretien et mise en service de climatisation à Marcheprime et sur le Bassin d’Arcachon. Spécialiste des systèmes muraux, gainables, consoles et cassettes. Artisan qualifié, devis gratuit avec ClimGO.',
    images: ['/climcauderan.jpeg'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/climatisation',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/favicon.ico'
  },
  keywords: [ 
   'CLIMATISATION MURALE MARCHÉPRIME',
    'INSTALLATEUR CLIM BASSIN D’ARCACHON',
    'CLIM RÉVERSIBLE NOUVELLE-AQUITAINE',
    'CLIM GO EXPERT CLIMATISATION',
    'CLIMATISATION GAINABLE GIRONDE',
    'ENTRETIEN CLIM MARCHÉPRIME',
    'INSTALLATION CLIM CONSOLE',
    'CLIMATISATION SILENCIEUSE INTÉRIEURE',
    'CLIMATISATION CASSABLE DESIGN',
    'POMPE À CHALEUR AIR AIR',
    'CONFORT D’ÉTÉ MAISON',
    'CLIMATISEUR ÉCOLOGIQUE',
    'ARTISAN CLIM MARCHÉPRIME',
    'DEVIS GRATUIT CLIMATISATION',
    'CLIMATISATION POUR MAISON INDIVIDUELLE',
    'SOLUTION CLIM BASSIN D’ARCACHON',
    'CLIM RÉGLABLE MULTI-ZONE',
    'INSTALLATION RAPIDE CLIM'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'climatisation, pompe à chaleur, confort thermique, énergies renouvelables',
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
  manifest: '/site.webmanifest',
};

export default function ClimatisationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}