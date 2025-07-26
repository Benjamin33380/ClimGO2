import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eau chaude sanitaire ClimGO',
  description: "Installation et entretien de chauffe-eau à Marcheprime et sur le Bassin d’Arcachon. Experts en eau chaude sanitaire, nous vous accompagnons pour des solutions performantes et économiques. Devis gratuit avec ClimGO.",
  openGraph: {
    title: 'Eau chaude sanitaire ClimGO',
    description: "Installation et entretien de chauffe-eau à Marcheprime et sur le Bassin d’Arcachon. Experts en eau chaude sanitaire, nous vous accompagnons pour des solutions performantes et économiques. Devis gratuit avec ClimGO.",
    images: ['/PylaCumulus.jpeg'],
    locale: 'fr_FR',
    siteName: 'ClimGO'
  },
  twitter: {
    title: 'Eau chaude sanitaire ClimGO',
    description: "Installation et entretien de chauffe-eau à Marcheprime et sur le Bassin d’Arcachon. Experts en eau chaude sanitaire, nous vous accompagnons pour des solutions performantes et économiques. Devis gratuit avec ClimGO.",
    images: ['/PylaCumulus.jpeg'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr/eau-chaude-sanitaire',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon/favicon.ico'
  },
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
  manifest: '/site.webmanifest',
  keywords: [
    'CHAUFFE-EAU THERMODYNAMIQUE MARCHÉPRIME',
    'CHAUFFE-EAU ÉLECTRIQUE ARCACHON',
    'INSTALLATEUR ECS BASSIN D’ARCACHON',
    'CLIMGO EXPERT EAU CHAUDE',
    'EAU CHAUDE SANITAIRE GIRONDE',
    'PLOMBIER CHAUFFE-EAU MARCHÉPRIME',
    'ENTRETIEN ECS NOUVELLE-AQUITAINE',
    'POMPE À CHALEUR EAU CHAUDE',
    'CHAUFFE-EAU ÉCOLOGIQUE SILENCIEUX',
    'CHAUFFE-EAU RAPIDE ET PERFORMANT',
    'DEVIS GRATUIT CHAUFFE-EAU MARCHÉPRIME',
    'CONFORT SANITAIRE ÉNERGÉTIQUE',
    'ARTISAN CHAUFFE-EAU ARCACHON',
    'MAINTENANCE ECS BASSIN D’ARCACHON',
    'SOLUTION ÉCONOMIQUE EAU CHAUDE',
    'INSTALLATION ECS MAISON INDIVIDUELLE',
    'RÉNOVATION ÉNERGÉTIQUE ECS',
    'ECS POUR LOGEMENT RÉSIDENTIEL',
    'INSTALLATEUR CERTIFIÉ ECS GIRONDE',
    'CLIMGO INSTALLATION EAU CHAUDE'
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
  category: 'chauffe-eau, plomberie, climatisation, énergies renouvelables',
};

export default function EauChaudeSanitaireLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}