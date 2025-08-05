import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: "Chauffage, Climatisation et PAC à Biscarrosse - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Biscarrosse. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Biscarrosse",
    "climatisation Biscarrosse",
    "installation clim Biscarrosse",
    "chauffe-eau Biscarrosse",
    "pompe à chaleur Biscarrosse",
    "entretien clim Biscarrosse",
    "installateur RGE Biscarrosse",
    "chauffagiste Biscarrosse",
    "climatisation réversible Biscarrosse",
    "PAC air eau Biscarrosse",
    "PAC air air Biscarrosse",
    "chauffe-eau thermodynamique Biscarrosse",
    "dépannage chauffage Biscarrosse",
    "entretien pompe à chaleur Biscarrosse",
    "installateur clim Biscarrosse",
    "clim gainable Biscarrosse",
    "clim mural Biscarrosse",
    "économie énergie Biscarrosse",
    "artisan RGE Biscarrosse",
    "clim cassette Biscarrosse",
    "devis chauffage Biscarrosse",
    "devis climatisation Biscarrosse",
    "maintenance chauffage Biscarrosse",
    "solution thermique Biscarrosse",
    "installation RGE Biscarrosse",
    "confort thermique Biscarrosse",
    "entreprise chauffage Biscarrosse"
  ],
   robots: "index, follow",
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Biscarrosse - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Biscarrosse. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/biscarrosse-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/biscarosse.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Biscarrosse - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Biscarrosse - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Biscarrosse. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/biscarosse.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/biscarrosse-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/biscarosse.jpg",
    "@id": "https://www.climgo.fr/biscarrosse-chauffage-climatisation",
    "url": "https://www.climgo.fr/biscarrosse-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "149 Av. du 14 Juillet",
      "addressLocality": "Biscarrosse",
      "postalCode": "40600",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.3958115,
      "longitude": -1.1669558
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
      { "@type": "Place", "name": "Biscarrosse" },
      { "@type": "Place", "name": "Parentis-en-Born" },
      { "@type": "Place", "name": "Sanguinet" },
      { "@type": "Place", "name": "Gastes" }
    ],
    "description": "ClimGO intervient à Biscarrosse pour l'installation, l'entretien et la maintenance de pompes à chaleur, climatisations, chauffe-eaux et systèmes de chauffage modernes. Service rapide et certifié RGE.",
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