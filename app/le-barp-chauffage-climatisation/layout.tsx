import Script from "next/script";

export const metadata = {
  title: "Chauffage, Climatisation et PAC à Le Barp - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Barp. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Le Barp",
    "climatisation Le Barp",
    "installation clim Le Barp",
    "chauffe-eau Le Barp",
    "pompe à chaleur Le Barp",
    "entretien clim Le Barp",
    "installateur RGE Le Barp",
    "chauffagiste Le Barp",
    "climatisation réversible Le Barp",
    "PAC air eau Le Barp",
    "PAC air air Le Barp",
    "chauffe-eau thermodynamique Le Barp",
    "dépannage chauffage Le Barp",
    "entretien pompe à chaleur Le Barp",
    "installateur clim Le Barp",
    "clim gainable Le Barp",
    "clim mural Le Barp",
    "économie énergie Le Barp",
    "artisan RGE Le Barp",
    "clim cassette Le Barp",
    "devis chauffage Le Barp",
    "devis climatisation Le Barp",
    "maintenance chauffage Le Barp",
    "solution thermique Le Barp",
    "installation RGE Le Barp",
    "confort thermique Le Barp",
    "entreprise chauffage Le Barp"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Le Barp - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Barp. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/le-barp-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/barp.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Le Barp - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Le Barp - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Barp. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/barp.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/le-barp-chauffage-climatisation"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
 <Script type="application/ld+json" id="ld-json-schema" strategy="afterInteractive">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ClimGO",
    "image": "https://www.climgo.fr/villes/barp.jpg",
    "@id": "https://www.climgo.fr/le-barp-chauffage-climatisation",
    "url": "https://www.climgo.fr/le-barp-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenue des Pyrénées",
      "addressLocality": "Le Barp",
      "postalCode": "33114",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.6055595,
      "longitude": -0.770532
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
      { "@type": "Place", "name": "Le Barp" },
      { "@type": "Place", "name": "Marcheprime" },
      { "@type": "Place", "name": "Saucats" },
      { "@type": "Place", "name": "Saint-Magne" }
    ],
    "description": "Installation, dépannage et entretien de climatisations, pompes à chaleur et chauffe-eau au Barp et alentours. ClimGO, votre expert local pour un confort thermique sur-mesure.",
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
        "name": "Installation de climatisation"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation de pompe à chaleur"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Entretien PAC et climatisation"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation chauffe-eau thermodynamique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Plomberie et chauffage"
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