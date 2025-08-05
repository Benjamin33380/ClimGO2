import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: "Chauffage, Climatisation et PAC à Saint-Médard-en-Jalles",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Médard-en-Jalles. Certifié RGE.",
  keywords: [
    "chauffage Saint-Médard-en-Jalles",
    "climatisation Saint-Médard-en-Jalles",
    "installation clim Saint-Médard-en-Jalles",
    "chauffe-eau Saint-Médard-en-Jalles",
    "pompe à chaleur Saint-Médard-en-Jalles",
    "entretien clim Saint-Médard-en-Jalles",
    "installateur RGE Saint-Médard-en-Jalles",
    "chauffagiste Saint-Médard-en-Jalles",
    "climatisation réversible Saint-Médard-en-Jalles",
    "PAC air eau Saint-Médard-en-Jalles",
    "PAC air air Saint-Médard-en-Jalles",
    "chauffe-eau thermodynamique Saint-Médard-en-Jalles",
    "dépannage chauffage Saint-Médard-en-Jalles",
    "entretien pompe à chaleur Saint-Médard-en-Jalles",
    "installateur clim Saint-Médard-en-Jalles",
    "clim gainable Saint-Médard-en-Jalles",
    "clim mural Saint-Médard-en-Jalles",
    "économie énergie Saint-Médard-en-Jalles",
    "artisan RGE Saint-Médard-en-Jalles",
    "clim cassette Saint-Médard-en-Jalles",
    "devis chauffage Saint-Médard-en-Jalles",
    "devis climatisation Saint-Médard-en-Jalles",
    "maintenance chauffage Saint-Médard-en-Jalles",
    "solution thermique Saint-Médard-en-Jalles",
    "installation RGE Saint-Médard-en-Jalles",
    "confort thermique Saint-Médard-en-Jalles",
    "entreprise chauffage Saint-Médard-en-Jalles"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Saint-Médard-en-Jalles - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Médard-en-Jalles. Certifié RGE.",
    url: "https://www.climgo.fr/saint-medard-en-jalles-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/smej.webp",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Saint-Médard-en-Jalles - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Saint-Médard-en-Jalles - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Médard-en-Jalles. Certifié RGE.",
    images: ["https://www.climgo.fr/villes/smej.webp"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/saint-medard-en-jalles-chauffage-climatisation"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
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
    "image": "https://www.climgo.fr/villes/smej.webp",
    "@id": "https://www.climgo.fr/saint-medard-en-jalles-chauffage-climatisation",
    "url": "https://www.climgo.fr/saint-medard-en-jalles-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6 Pl. de l'Hôtel de ville",
      "addressLocality": "Saint-Médard-en-Jalles",
      "postalCode": "33160",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.895660400390625,
      "longitude": -0.7170525193214417
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
      { "@type": "Place", "name": "Saint-Médard-en-Jalles" },
      { "@type": "Place", "name": "Le Haillan" },
      { "@type": "Place", "name": "Eysines" },
      { "@type": "Place", "name": "Martignas-sur-Jalle" },
      { "@type": "Place", "name": "Mérignac" }
    ],
    "description": "ClimGO propose à Saint-Médard-en-Jalles l'installation, la maintenance et le dépannage de climatisations, pompes à chaleur et chauffe-eau. Artisan certifié RGE pour des projets fiables et durables.",
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