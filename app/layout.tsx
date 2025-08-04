import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from '../app/components/Header';
import InteractiveMap from '../app/components/InteractiveMap';
import Footer from '../app/components/Footer';



export const metadata: Metadata = {
  title: 'ClimGO - Spécialiste Chauffage, Climatisation & Pompe à Chaleur',
  description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
  openGraph: {
    type: 'website',
    url: 'https://www.climgo.fr',
    title: 'ClimGO - Spécialiste Chauffage, Climatisation & Pompe à Chaleur',
    description: 'Découvrez ClimGO, votre partenaire de confiance pour tous vos travaux de chauffage, climatisation ou eau chaude.',
    images: ['/Logo.png'],
    locale: 'fr_FR',
    siteName: 'ClimGO',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ClimGO',
    creator: '@ClimGO',
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
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },

    ],
  },
  keywords: [
    "installateur pompe à chaleur Marcheprime",
    "chauffagiste certifié RGE Marcheprime",
    "climatisation réversible Marcheprime",
    "chauffe-eau thermodynamique Marcheprime",
    "dépannage climatisation Marcheprime",
    "entretien pompe à chaleur Marcheprime",
    "installation clim air/air Marcheprime",
    "Clim , Chauffage , Plomberie ",
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
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  height: 'device-height',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ClimGO",
              "image": "https://www.climgo.fr/Logo.png",
              "url": "https://www.climgo.fr",
              "telephone": "+33-7-66-46-00-08",
              "priceRange": "€€",
              "description": "ClimGO est une entreprise spécialisée en installation, entretien et dépannage de pompes à chaleur, climatisation, chauffe-eau et systèmes de chauffage dans le Sud-Ouest.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "28 rue de Cantelaude",
                "addressLocality": "Marcheprime",
                "postalCode": "33380",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.6882,
                "longitude": -0.8901
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:30"
                }
              ],
              "areaServed": [
                { "@type": "Place", "name": "Marcheprime" },
                { "@type": "Place", "name": "Biganos" },
                { "@type": "Place", "name": "Cestas" },
                { "@type": "Place", "name": "Mios" },
                { "@type": "Place", "name": "Gujan-Mestras" },
                { "@type": "Place", "name": "La Teste-de-Buch" },
                { "@type": "Place", "name": "Pessac" },
                { "@type": "Place", "name": "Mérignac" },
                { "@type": "Place", "name": "Saint-Médard-en-Jalles" },
                { "@type": "Place", "name": "Arcachon" }
              ],
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "Benjamin Cardoso"
              },
              "sameAs": [
                "https://www.climgo.fr",
                "https://www.facebook.com/profile.php?id=61578576031066",
                "https://www.instagram.com/climgo_climatisation_chauffage/",
                "https://www.linkedin.com/company/climgo"
              ],
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.climgo.fr/Logo.png",
                "width": 512,
                "height": 512
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Catalogue de services ClimGO",
                "itemListElement": [
                {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation de climatisation murale"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation de climatisation gainable"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Pompe à chaleur air/air"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Pompe à chaleur air/eau"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Plancher chauffant hydraulique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation de radiateurs basse température"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Sèche-serviettes électrique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Chauffe-eau thermodynamique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Chauffe-eau électrique classique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Entretien climatisation"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Entretien pompe à chaleur"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Désembouage plancher chauffant"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Dépannage chauffage"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Dépannage climatisation"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Petits travaux de plomberie"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Conseils en rénovation énergétique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Mise en conformité installation thermique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation de VMC simple flux"
      }
    }
                ]
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33-7-66-46-00-08",
                "contactType": "customer service",
                "areaServed": "FR",
                "availableLanguage": ["French"]
              }
            })
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
