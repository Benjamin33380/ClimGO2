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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "HVACBusiness",
                "name": "ClimGO",
                "url": "https://www.climgo.fr",
                "logo": "https://www.climgo.fr/Logo.png",
                "image": "https://www.climgo.fr/Logo.png",
                "description": "ClimGO installe et entretient vos systèmes de chauffage, climatisation et pompes à chaleur bassin d'Arcachon.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "28 rue de Cantelaude",
                  "addressLocality": "Marcheprime",
                  "postalCode": "33380",
                  "addressCountry": "FR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "44.6890",
                  "longitude": "-0.9321"
                },
                "openingHours": "Mo-Fr 08:00-19:30",
                "telephone": "+33 7 66 46 00 08",
                "priceRange": "€€",
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=61578576031066",
                  "https://www.instagram.com/climgo_climatisation_chauffage/",
                  "https://www.linkedin.com/company/climgo"
                ]
              }
            `
          }}
        />
      </head>
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
