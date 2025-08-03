import Script from "next/script";

export const metadata = {
  title: "Chauffage, Climatisation et PAC à Belin-Béliet - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Belin-Béliet. Profitez d'un service local.",
  keywords: [
    "chauffage Belin-Béliet",
    "climatisation Belin-Béliet",
    "installation clim Belin-Béliet",
    "chauffe-eau Belin-Béliet",
    "pompe à chaleur Belin-Béliet",
    "entretien clim Belin-Béliet",
    "installateur RGE Belin-Béliet",
    "chauffagiste Belin-Béliet",
    "climatisation réversible Belin-Béliet",
    "PAC air eau Belin-Béliet",
    "PAC air air Belin-Béliet",
    "chauffe-eau thermodynamique Belin-Béliet",
    "dépannage chauffage Belin-Béliet",
    "entretien pompe à chaleur Belin-Béliet",
    "installateur clim Belin-Béliet",
    "clim gainable Belin-Béliet",
    "clim mural Belin-Béliet",
    "économie énergie Belin-Béliet",
    "artisan RGE Belin-Béliet",
    "clim cassette Belin-Béliet",
    "devis chauffage Belin-Béliet",
    "devis climatisation Belin-Béliet",
    "maintenance chauffage Belin-Béliet",
    "solution thermique Belin-Béliet",
    "installation RGE Belin-Béliet",
    "confort thermique Belin-Béliet",
    "entreprise chauffage Belin-Béliet"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Belin-Béliet - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Belin-Béliet. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/belin-beliet-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/belin.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Salles - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Belin-Béliet - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Belin-Béliet. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/belin.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/belin-beliet-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/belin.jpg",
    "@id": "https://www.climgo.fr/belin-beliet-chauffage-climatisation",
    "url": "https://www.climgo.fr/belin-beliet-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Aliénor",
      "addressLocality": "Belin-Béliet",
      "postalCode": "33380",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.4930554,
      "longitude": -0.7906699
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
      { "@type": "Place", "name": "Belin-Béliet" },
      { "@type": "Place", "name": "Salles" },
      { "@type": "Place", "name": "Le Barp" },
      { "@type": "Place", "name": "Marcheprime" }
    ],
    "description": "Installateur certifié RGE à Belin-Béliet : ClimGO vous accompagne pour tous vos besoins en chauffage, climatisation, pompe à chaleur et chauffe-eau. Intervention rapide, travail soigné, accompagnement aux aides d’État.",
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