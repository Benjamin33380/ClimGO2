import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: "Chauffage, Climatisation et PAC à Lège-Cap-Ferret",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lège-Cap-Ferret. Certifié RGE.",
  keywords: [
    "chauffage Lège-Cap-Ferret",
    "climatisation Lège-Cap-Ferret",
    "installation clim Lège-Cap-Ferret",
    "chauffe-eau Lège-Cap-Ferret",
    "pompe à chaleur Lège-Cap-Ferret",
    "entretien clim Lège-Cap-Ferret",
    "installateur RGE Lège-Cap-Ferret",
    "chauffagiste Lège-Cap-Ferret",
    "climatisation réversible Lège-Cap-Ferret",
    "PAC air eau Lège-Cap-Ferret",
    "PAC air air Lège-Cap-Ferret",
    "chauffe-eau thermodynamique Lège-Cap-Ferret",
    "dépannage chauffage Lège-Cap-Ferret",
    "entretien pompe à chaleur Lège-Cap-Ferret",
    "installateur clim Lège-Cap-Ferret",
    "clim gainable Lège-Cap-Ferret",
    "clim mural Lège-Cap-Ferret",
    "prix pompe a chaleur Lège-Cap-Ferret",
    "artisan RGE Lège-Cap-Ferret",
    "clim cassette Lège-Cap-Ferret",
    "devis chauffage Lège-Cap-Ferret",
    "devis climatisation Lège-Cap-Ferret",
    "maintenance chauffage Lège-Cap-Ferret",
    "solution thermique Lège-Cap-Ferret",
    "installation RGE Lège-Cap-Ferret",
    "confort thermique Lège-Cap-Ferret",
    "entreprise chauffage Lège-Cap-Ferret"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Lège-Cap-Ferret - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lège-Cap-Ferret. Certifié RGE.",
    url: "https://www.climgo.fr/lege-cap-ferret-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/lege.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Lège-Cap-Ferret - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Lège-Cap-Ferret - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lège-Cap-Ferret. Certifié RGE.",
    images: ["https://www.climgo.fr/villes/lege.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/lege-cap-ferret-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/lege.jpg",
    "@id": "https://www.climgo.fr/lege-cap-ferret-chauffage-climatisation",
    "url": "https://www.climgo.fr/lege-cap-ferret-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "79 Avenue de la Mairie",
      "addressLocality": "Lège-Cap-Ferret",
      "postalCode": "33950",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.795271,
      "longitude": -1.146957
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
      { "@type": "Place", "name": "Lège-Cap-Ferret" },
      { "@type": "Place", "name": "Arès" },
      { "@type": "Place", "name": "Andernos-les-Bains" },
      { "@type": "Place", "name": "Claouey" },
      { "@type": "Place", "name": "Cap Ferret" }
    ],
    "description": "ClimGO intervient à Lège-Cap-Ferret et sur la presqu'île pour l'installation, l'entretien ou le dépannage de vos équipements de chauffage, climatisation et chauffe-eau. Service réactif, conseils personnalisés et intervention locale rapide.",
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