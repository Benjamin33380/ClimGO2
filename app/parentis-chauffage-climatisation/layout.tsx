import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: "Chauffage, Climatisation et PAC à Parentis-en-Born - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Parentis-en-Born. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Parentis-en-Born",
    "climatisation Parentis-en-Born",
    "installation clim Parentis-en-Born",
    "chauffe-eau Parentis-en-Born",
    "pompe à chaleur Parentis-en-Born",
    "entretien clim Parentis-en-Born",
    "installateur RGE Parentis-en-Born",
    "chauffagiste Parentis-en-Born",
    "climatisation réversible Parentis-en-Born",
    "PAC air eau Parentis-en-Born",
    "PAC air air Parentis-en-Born",
    "chauffe-eau thermodynamique Parentis-en-Born",
    "dépannage chauffage Parentis-en-Born",
    "entretien pompe à chaleur Parentis-en-Born",
    "installateur clim Parentis-en-Born",
    "clim gainable Parentis-en-Born",
    "clim mural Parentis-en-Born",
    "économie énergie Parentis-en-Born",
    "artisan RGE Parentis-en-Born",
    "clim cassette Parentis-en-Born",
    "devis chauffage Parentis-en-Born",
    "devis climatisation Parentis-en-Born",
    "maintenance chauffage Parentis-en-Born",
    "solution thermique Parentis-en-Born",
    "installation RGE Parentis-en-Born",
    "confort thermique Parentis-en-Born",
    "entreprise chauffage Parentis-en-Born"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Parentis-en-Born - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Parentis-en-Born. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/parentis-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/parentis.jpg.webp",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Parentis-en-Born - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Parentis-en-Born - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Parentis-en-Born. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/parentis.jpg.webp"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/parentis-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/parentis.jpg.webp",
    "@id": "https://www.climgo.fr/parentis-chauffage-climatisation",
    "url": "https://www.climgo.fr/parentis-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "258 Av. Maréchal Foch",
      "addressLocality": "Parentis-en-Born",
      "postalCode": "40160",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.3553772,
      "longitude": -1.0738232
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
      { "@type": "Place", "name": "Parentis-en-Born" },
      { "@type": "Place", "name": "Biscarrosse" },
      { "@type": "Place", "name": "Gastes" },
      { "@type": "Place", "name": "Pontenx-les-Forges" },
      { "@type": "Place", "name": "Sanguinet" }
    ],
    "description": "ClimGO intervient à Parentis-en-Born pour l'installation, l'entretien et le dépannage de climatisations, pompes à chaleur et chauffe-eaux. Service certifié RGE, rapide et de qualité dans les Landes.",
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