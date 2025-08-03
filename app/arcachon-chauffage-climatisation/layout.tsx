export const metadata = {
  title: "Chauffage, Climatisation et PAC à Arcachon",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Arcachon. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Arcachon",
    "climatisation Arcachon",
    "installation clim Arcachon",
    "chauffe-eau Arcachon",
    "pompe à chaleur Arcachon",
    "entretien clim Arcachon",
    "installateur RGE Arcachon",
    "chauffagiste Arcachon",
    "climatisation réversible Arcachon",
    "PAC air eau Arcachon",
    "PAC air air Arcachon",
    "chauffe-eau thermodynamique Arcachon",
    "dépannage chauffage Arcachon",
    "entretien pompe à chaleur Arcachon",
    "installateur clim Arcachon",
    "clim gainable Arcachon",
    "clim mural Arcachon",
    "économie énergie Arcachon",
    "artisan RGE Arcachon",
    "clim cassette Arcachon",
    "devis chauffage Arcachon",
    "devis climatisation Arcachon",
    "maintenance chauffage Arcachon",
    "solution thermique Arcachon",
    "installation RGE Arcachon",
    "confort thermique Arcachon",
    "entreprise chauffage Arcachon"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Arcachon - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Arcachon. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/arcachon-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/arcachon.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Arcachon - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Arcachon - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Arcachon. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/arcachon.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/arcachon-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/arcachon.jpg",
    "@id": "https://www.climgo.fr/arcachon-chauffage-climatisation",
    "url": "https://www.climgo.fr/arcachon-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Place Lucien de Gracia",
      "addressLocality": "Arcachon",
      "postalCode": "33120",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.6519281,
      "longitude": -1.1718581
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
      { "@type": "Place", "name": "Arcachon" },
      { "@type": "Place", "name": "La Teste-de-Buch" },
      { "@type": "Place", "name": "Gujan-Mestras" },
      { "@type": "Place", "name": "Le Teich" }
    ],
    "description": "ClimGO intervient à Arcachon pour l'installation, l'entretien et le dépannage de pompes à chaleur, climatisations réversibles, chauffe-eaux et systèmes de chauffage. Entreprise certifiée RGE.",
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