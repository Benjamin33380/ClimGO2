import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: "Chauffage, Climatisation et PAC à Saint-Aubin-de-Médoc",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Aubin-de-Médoc. Certifié RGE.",
  keywords: [
    "chauffage Saint-Aubin-de-Médoc",
    "climatisation Saint-Aubin-de-Médoc",
    "installation clim Saint-Aubin-de-Médoc",
    "chauffe-eau Saint-Aubin-de-Médoc",
    "pompe à chaleur Saint-Aubin-de-Médoc",
    "entretien clim Saint-Aubin-de-Médoc",
    "installateur RGE Saint-Aubin-de-Médoc",
    "chauffagiste Saint-Aubin-de-Médoc",
    "climatisation réversible Saint-Aubin-de-Médoc",
    "PAC air eau Saint-Aubin-de-Médoc",
    "PAC air air Saint-Aubin-de-Médoc",
    "chauffe-eau thermodynamique Saint-Aubin-de-Médoc",
    "dépannage chauffage Saint-Aubin-de-Médoc",
    "entretien pompe à chaleur Saint-Aubin-de-Médoc",
    "installateur clim Saint-Aubin-de-Médoc",
    "clim gainable Saint-Aubin-de-Médoc",
    "clim mural Saint-Aubin-de-Médoc",
    "économie énergie Saint-Aubin-de-Médoc",
    "artisan RGE Saint-Aubin-de-Médoc",
    "clim cassette Saint-Aubin-de-Médoc",
    "devis chauffage Saint-Aubin-de-Médoc",
    "devis climatisation Saint-Aubin-de-Médoc",
    "maintenance chauffage Saint-Aubin-de-Médoc",
    "solution thermique Saint-Aubin-de-Médoc",
    "installation RGE Saint-Aubin-de-Médoc",
    "confort thermique Saint-Aubin-de-Médoc",
    "entreprise chauffage Saint-Aubin-de-Médoc"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Saint-Aubin-de-Médoc - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Aubin-de-Médoc. Certifié RGE.",
    url: "https://www.climgo.fr/saint-aubin-de-medoc-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/sadm.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Saint-Aubin-de-Médoc - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Saint-Aubin-de-Médoc - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Aubin-de-Médoc. Certifié RGE.",
    images: ["https://www.climgo.fr/villes/sadm.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/saint-aubin-de-medoc-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/sadm.jpg",
    "@id": "https://www.climgo.fr/saint-aubin-de-medoc-chauffage-climatisation",
    "url": "https://www.climgo.fr/saint-aubin-de-medoc-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Route de Joli Bois",
      "addressLocality": "Saint-Aubin-de-Médoc",
      "postalCode": "33160",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.9158388,
      "longitude": -0.7220542
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
      { "@type": "Place", "name": "Saint-Aubin-de-Médoc" },
      { "@type": "Place", "name": "Saint-Médard-en-Jalles" },
      { "@type": "Place", "name": "Le Taillan-Médoc" },
      { "@type": "Place", "name": "Eysines" },
      { "@type": "Place", "name": "Le Haillan" }
    ],
    "description": "ClimGO vous accompagne à Saint-Aubin-de-Médoc pour l'installation, l'entretien et le dépannage de pompes à chaleur, climatisations et chauffe-eaux. Intervention rapide et service de proximité certifié RGE.",
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