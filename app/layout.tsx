import type { Metadata } from "next";
import "./globals.css";
import Header from './components/Header';
import InteractiveMap from './components/InteractiveMap';
import Footer from './components/Footer';


  

export const metadata: Metadata = {
  title: 'ClimGO - Spécialiste Chauffage, Climatisation & Pompe à Chaleur',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  openGraph: {
    title: 'ClimGO - Spécialiste Chauffage, Climatisation & Pompe à Chaleur',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  twitter: {
    title: 'ClimGO - Spécialiste Chauffage, Climatisation & Pompe à Chaleur',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.climgo.fr',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <InteractiveMap />
        <Footer />
      </body>
    </html>
  );
}
