import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: "Chauffage, Climatisation et PAC à Lacanau",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lacanau. Certifié RGE.",
  keywords: [
    "chauffage Lacanau",
    "climatisation Lacanau",
    "installation clim Lacanau",
    "chauffe-eau Lacanau",
    "pompe à chaleur Lacanau",
    "entretien clim Lacanau",
    "installateur RGE Lacanau",
    "chauffagiste Lacanau",
    "climatisation réversible Lacanau",
    "PAC air eau Lacanau",
    "PAC air air Lacanau",
    "chauffe-eau thermodynamique Lacanau",
    "dépannage chauffage Lacanau",
    "entretien pompe à chaleur Lacanau",
    "installateur clim Lacanau",
    "clim gainable Lacanau",
    "clim mural Lacanau",
    "prix pompe a chaleur Lacanau",
    "artisan RGE Lacanau",
    "clim cassette Lacanau",
    "devis chauffage Lacanau",
    "devis climatisation Lacanau",
    "maintenance chauffage Lacanau",
    "solution thermique Lacanau",
    "installation RGE Lacanau",
    "confort thermique Lacanau",
    "entreprise chauffage Lacanau"
  ],
   robots: "index, follow",
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Lacanau - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lacanau. Certifié RGE.",
    url: "https://www.climgo.fr/lacanau-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/laca.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Lacanau - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Lacanau - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lacanau. Certifié RGE.",
    images: ["https://www.climgo.fr/villes/laca.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/lacanau-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/laca.jpg",
    "@id": "https://www.climgo.fr/lacanau-chauffage-climatisation",
    "url": "https://www.climgo.fr/lacanau-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "31 Av. de la Libération",
      "addressLocality": "Lacanau",
      "postalCode": "33680",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.9780536,
      "longitude": -1.0764005
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
      { "@type": "Place", "name": "Lacanau" },
      { "@type": "Place", "name": "Lège-Cap-Ferret" },
      { "@type": "Place", "name": "Sainte-Hélène" },
      { "@type": "Place", "name": "Carcans" }
    ],
    "description": "Installation, entretien et dépannage de climatisations et pompes à chaleur à Lacanau. ClimGO, votre artisan local pour un confort thermique optimal au bord de l'océan.",
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