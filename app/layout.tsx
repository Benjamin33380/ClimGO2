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
    locale: 'fr_FR',
    siteName: 'ClimGO',
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
    icon: '/favicon/web-app-manifest-512x512.png'
    ,
  },
  keywords: [
    "installateur pompe à chaleur Marcheprime",
    "chauffagiste certifié RGE Marcheprime",
    "climatisation réversible Marcheprime",
    "chauffe-eau thermodynamique Marcheprime",
    "dépannage climatisation Marcheprime",
    "entretien pompe à chaleur Marcheprime",
    "installation clim air/air Marcheprime",
    "plancher chauffant basse température Marcheprime",
    "chauffage éco-responsable Marcheprime",
    "artisan chauffage climatisation Marcheprime",
    "pompe à chaleur air eau Marcheprime",
    "devis pompe à chaleur Marcheprime",
    "subventions chauffage climatisation Marcheprime",
    "entreprise rénovation énergétique Marcheprime",
    "installateur clim certifié Marcheprime",
    "chauffagiste Bassin d'Arcachon",
    "climatisation Bassin d'Arcachon",
    "pompe à chaleur Bassin d'Arcachon",
    "chauffe-eau Bassin d'Arcachon",
    "installation chauffage Bassin d'Arcachon",
    "artisan RGE Bassin d'Arcachon"
  ],
  authors: [{ name: 'ClimGO', url: 'https://www.climgo.fr' }],
  creator: 'ClimGO',
  publisher: 'ClimGO',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
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
