import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: "Chauffage, Climatisation et PAC à Saint-Loubès",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Loubès. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Saint-Loubès",
    "climatisation Saint-Loubès",
    "installation clim Saint-Loubès",
    "chauffe-eau Saint-Loubès",
    "pompe à chaleur Saint-Loubès",
    "entretien clim Saint-Loubès",
    "installateur RGE Saint-Loubès",
    "chauffagiste Saint-Loubès",
    "climatisation réversible Saint-Loubès",
    "PAC air eau Saint-Loubès",
    "PAC air air Saint-Loubès",
    "chauffe-eau thermodynamique Saint-Loubès",
    "dépannage chauffage Saint-Loubès",
    "entretien pompe à chaleur Saint-Loubès",
    "installateur clim Saint-Loubès",
    "clim gainable Saint-Loubès",
    "clim mural Saint-Loubès",
    "économie énergie Saint-Loubès",
    "artisan RGE Saint-Loubès",
    "clim cassette Saint-Loubès",
    "devis chauffage Saint-Loubès",
    "devis climatisation Saint-Loubès",
    "maintenance chauffage Saint-Loubès",
    "solution thermique Saint-Loubès",
    "installation RGE Saint-Loubès",
    "confort thermique Saint-Loubès",
    "entreprise chauffage Saint-Loubès"
  ],
   robots: "index, follow",
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Saint-Loubès - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Loubès. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/saint-loubes-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/stlo.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Saint-Loubès - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Saint-Loubès - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Loubès. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/stlo.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/saint-loubes-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/stlo.jpg",
    "@id": "https://www.climgo.fr/saint-loubes-chauffage-climatisation",
    "url": "https://www.climgo.fr/saint-loubes-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pl. de l'Hôtel de ville",
      "addressLocality": "Saint-Loubès",
      "postalCode": "33450",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.91651153564453,
      "longitude": -0.42713022232055664
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
      { "@type": "Place", "name": "Saint-Loubès" },
      { "@type": "Place", "name": "Yvrac" },
      { "@type": "Place", "name": "Sainte-Eulalie" },
      { "@type": "Place", "name": "Ambarès-et-Lagrave" },
      { "@type": "Place", "name": "Carbon-Blanc" }
    ],
    "description": "ClimGO propose ses services à Saint-Loubès pour l'installation, la maintenance et le dépannage de climatisations, pompes à chaleur et chauffe-eau. Artisan RGE, service local et fiable.",
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