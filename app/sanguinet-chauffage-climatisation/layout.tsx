import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: "Chauffage, Climatisation et PAC à Sanguinet - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Sanguinet. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Sanguinet",
    "climatisation Sanguinet",
    "installation clim Sanguinet",
    "chauffe-eau Sanguinet",
    "pompe à chaleur Sanguinet",
    "entretien clim Sanguinet",
    "installateur RGE Sanguinet",
    "chauffagiste Sanguinet",
    "climatisation réversible Sanguinet",
    "PAC air eau Sanguinet",
    "PAC air air Sanguinet",
    "chauffe-eau thermodynamique Sanguinet",
    "dépannage chauffage Sanguinet",
    "entretien pompe à chaleur Sanguinet",
    "installateur clim Sanguinet",
    "clim gainable Sanguinet",
    "clim mural Sanguinet",
    "économie énergie Sanguinet",
    "artisan RGE Sanguinet",
    "clim cassette Sanguinet",
    "devis chauffage Sanguinet",
    "devis climatisation Sanguinet",
    "maintenance chauffage Sanguinet",
    "solution thermique Sanguinet",
    "installation RGE Sanguinet",
    "confort thermique Sanguinet",
    "entreprise chauffage Sanguinet"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Sanguinet - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Sanguinet. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/sanguinet-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/sanguinet.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Sanguinet - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Sanguinet - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Sanguinet. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/sanguinet.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/sanguinet-chauffage-climatisation"
  }
};

import Script from 'next/script';
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  height: 'device-height',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script type="application/ld+json" id="ld-json-schema" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ClimGO",
          "image": "https://www.climgo.fr/villes/sanguinet.jpg",
          "@id": "https://www.climgo.fr/sanguinet-chauffage-climatisation",
          "url": "https://www.climgo.fr/sanguinet-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "priceRange": "€€",
          "description": "ClimGO est votre partenaire de confiance à Sanguinet pour tous vos besoins en chauffage, climatisation et production d’eau chaude. Nous intervenons avec sérieux, discrétion et efficacité dans toute la région.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Place de la Mairie",
            "addressLocality": "Sanguinet",
            "postalCode": "40460",
            "addressRegion": "Nouvelle-Aquitaine",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.4833984375,
            "longitude": -1.076384425163269
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
            { "@type": "Place", "name": "Sanguinet" },
            { "@type": "Place", "name": "Biscarrosse" },
            { "@type": "Place", "name": "Parentis-en-Born" },
            { "@type": "Place", "name": "La Teste-de-Buch" },
            { "@type": "Place", "name": "Ychoux" }
          ],
          "foundingDate": "2025",
          "founder": {
            "@type": "Person",
            "name": "Benjamin Cardoso"
          },
          "sameAs": [
            "https://www.climgo.fr",
            "https://www.instagram.com/climgo_climatisation_chauffage/",
            "https://www.facebook.com/people/Climgo/61578576031066/",
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
  "name": "Prestations ClimGO",
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
}
          ,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33 7 66 46 00 08",
            "contactType": "customer service",
            "areaServed": "FR",
            "availableLanguage": ["French"]
          }
        })}
      </Script>
      {children}
    </>
  );
}