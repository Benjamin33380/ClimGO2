import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: "Chauffage, Climatisation et PAC à Martignas-sur-Jalle",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Martignas-sur-Jalle. Certifié RGE.",
  keywords: [
    "chauffage Martignas-sur-Jalle",
    "climatisation Martignas-sur-Jalle",
    "installation clim Martignas-sur-Jalle",
    "chauffe-eau Martignas-sur-Jalle",
    "pompe à chaleur Martignas-sur-Jalle",
    "entretien clim Martignas-sur-Jalle",
    "installateur RGE Martignas-sur-Jalle",
    "chauffagiste Martignas-sur-Jalle",
    "climatisation réversible Martignas-sur-Jalle",
    "PAC air eau Martignas-sur-Jalle",
    "PAC air air Martignas-sur-Jalle",
    "chauffe-eau thermodynamique Martignas-sur-Jalle",
    "dépannage chauffage Martignas-sur-Jalle",
    "entretien pompe à chaleur Martignas-sur-Jalle",
    "installateur clim Martignas-sur-Jalle",
    "clim gainable Martignas-sur-Jalle",
    "clim mural Martignas-sur-Jalle",
    "économie énergie Martignas-sur-Jalle",
    "artisan RGE Martignas-sur-Jalle",
    "clim cassette Martignas-sur-Jalle",
    "devis chauffage Martignas-sur-Jalle",
    "devis climatisation Martignas-sur-Jalle",
    "maintenance chauffage Martignas-sur-Jalle",
    "solution thermique Martignas-sur-Jalle",
    "installation RGE Martignas-sur-Jalle",
    "confort thermique Martignas-sur-Jalle",
    "entreprise chauffage Martignas-sur-Jalle"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Martignas-sur-Jalle - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Martignas-sur-Jalle. Certifié RGE.",
    url: "https://www.climgo.fr/martignas-sur-jalle-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/marti.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Martignas-sur-Jalle - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Martignas-sur-Jalle - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Martignas-sur-Jalle. Certifié RGE.",
    images: ["https://www.climgo.fr/villes/marti.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/martignas-sur-jalle-chauffage-climatisation"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
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
    "image": "https://www.climgo.fr/villes/marti.jpg",
    "@id": "https://www.climgo.fr/martignas-sur-jalle-chauffage-climatisation",
    "url": "https://www.climgo.fr/martignas-sur-jalle-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3 Av. de la République",
      "addressLocality": "Martignas-sur-Jalle",
      "postalCode": "33127",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.83898,
      "longitude": -0.775593
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:30"
      }
    ],
    "priceRange": "€€",
    "areaServed": [
      { "@type": "Place", "name": "Martignas-sur-Jalle" },
      { "@type": "Place", "name": "Saint-Jean-d'Illac" },
      { "@type": "Place", "name": "Mérignac" },
      { "@type": "Place", "name": "Cestas" }
    ],
    "description": "ClimGO intervient à Martignas-sur-Jalle pour l'installation, l'entretien et le dépannage de systèmes de chauffage, climatisation, pompes à chaleur et chauffe-eau. Artisan local certifié RGE.",
    "sameAs": [
      "https://www.instagram.com/climgo_climatisation_chauffage/",
      "https://www.facebook.com/people/Climgo/61578576031066/",
      "https://www.linkedin.com/company/climgo"
    ],
    "foundingDate": "2025",
    "founder": {
      "@type": "Person",
      "name": "Benjamin Cardoso"
    },
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
},
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