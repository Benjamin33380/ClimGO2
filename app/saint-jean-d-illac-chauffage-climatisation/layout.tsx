import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: "Chauffage, Climatisation et PAC à Saint-Jean-d'Illac",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Jean-d'Illac. Certifié RGE.",
  keywords: [
    "chauffage Saint-Jean-d'Illac",
    "climatisation Saint-Jean-d'Illac",
    "installation clim Saint-Jean-d'Illac",
    "chauffe-eau Saint-Jean-d'Illac",
    "pompe à chaleur Saint-Jean-d'Illac",
    "entretien clim Saint-Jean-d'Illac",
    "installateur RGE Saint-Jean-d'Illac",
    "chauffagiste Saint-Jean-d'Illac",
    "climatisation réversible Saint-Jean-d'Illac",
    "PAC air eau Saint-Jean-d'Illac",
    "PAC air air Saint-Jean-d'Illac",
    "chauffe-eau thermodynamique Saint-Jean-d'Illac",
    "dépannage chauffage Saint-Jean-d'Illac",
    "entretien pompe à chaleur Saint-Jean-d'Illac",
    "installateur clim Saint-Jean-d'Illac",
    "clim gainable Saint-Jean-d'Illac",
    "clim mural Saint-Jean-d'Illac",
    "économie énergie Saint-Jean-d'Illac",
    "artisan RGE Saint-Jean-d'Illac",
    "clim cassette Saint-Jean-d'Illac",
    "devis chauffage Saint-Jean-d'Illac",
    "devis climatisation Saint-Jean-d'Illac",
    "maintenance chauffage Saint-Jean-d'Illac",
    "solution thermique Saint-Jean-d'Illac",
    "installation RGE Saint-Jean-d'Illac",
    "confort thermique Saint-Jean-d'Illac",
    "entreprise chauffage Saint-Jean-d'Illac"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Saint-Jean-d'Illac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Jean-d'Illac. Certifié RGE.",
    url: "https://www.climgo.fr/saint-jean-d-illac-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/sji.webp",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Saint-Jean-d'Illac - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Saint-Jean-d'Illac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Jean-d'Illac. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/sji.webp"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/saint-jean-d-illac-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/sji.webp",
    "@id": "https://www.climgo.fr/saint-jean-d-illac-chauffage-climatisation",
    "url": "https://www.climgo.fr/saint-jean-d-illac-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "120 Av. du Las",
      "addressLocality": "Saint-Jean-d'Illac",
      "postalCode": "33127",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.8036851,
      "longitude": -0.8157354
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
      { "@type": "Place", "name": "Saint-Jean-d'Illac" },
      { "@type": "Place", "name": "Martignas-sur-Jalle" },
      { "@type": "Place", "name": "Cestas" },
      { "@type": "Place", "name": "Pessac" },
      { "@type": "Place", "name": "Mérignac" }
    ],
    "description": "ClimGO intervient à Saint-Jean-d'Illac pour tous vos besoins en climatisation, chauffage, pompe à chaleur et chauffe-eau. Artisan RGE, travail soigné et conseils personnalisés.",
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