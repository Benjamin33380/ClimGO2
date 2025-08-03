export const metadata = {
  title: "Chauffage, Climatisation et PAC à Marcheprime - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Marcheprime. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Marcheprieme",
    "climatisation Marcheprime",
    "installation clim Marcheprime",
    "chauffe-eau Marcheprime",
    "pompe à chaleur Marcheprime",
    "entretien clim Marcheprime",
    "installateur RGE Marcheprime",
    "chauffagiste Marcheprime",
    "climatisation réversible Marcheprime",
    "PAC air eau Marcheprime",
    "PAC air air Marcheprime",
    "chauffe-eau thermodynamique Marcheprime",
    "dépannage chauffage Marcheprime",
    "entretien pompe à chaleur Marcheprime",
    "installateur clim Marcheprime",
    "clim gainable Marcheprime",
    "clim mural Marcheprime",
    "économie énergie Marcheprime",
    "artisan RGE Marcheprime",
    "clim cassette Marcheprime",
    "devis chauffage Marcheprime",
    "devis climatisation Marcheprime",
    "maintenance chauffage Marcheprime",
    "solution thermique Marcheprime",
    "installation RGE Marcheprime",
    "confort thermique Marcheprime",
    "entreprise chauffage Marcheprime"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Marcheprime - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Marcheprime. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/marcheprime-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/marcheprime.jpg.webp",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Marcheprime - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Marcheprime - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Marcheprime. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/marcheprime.jpg.webp"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/marcheprime-chauffage-climatisation"
  }
};

import Script from 'next/script';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
<Script type="application/ld+json" id="ld-json-schema" strategy="afterInteractive">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ClimGO",
    "image": "https://www.climgo.fr/villes/marcheprime.jpg.webp",
    "@id": "https://www.climgo.fr/marcheprime-chauffage-climatisation",
    "url": "https://www.climgo.fr/marcheprime-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "28 rue de Cantelaude",
      "addressLocality": "Marcheprime",
      "postalCode": "33380",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.6920229,
      "longitude": -0.8534089
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
      { "@type": "Place", "name": "Marcheprime" },
      { "@type": "Place", "name": "Mios" },
      { "@type": "Place", "name": "Biganos" },
      { "@type": "Place", "name": "Cestas" },
      { "@type": "Place", "name": "Le Barp" }
    ],
    "description": "ClimGO intervient à Marcheprime pour l'installation, l'entretien et le dépannage de climatisations, pompes à chaleur et chauffe-eaux. Artisan certifié RGE et reconnu pour son professionnalisme local.",
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