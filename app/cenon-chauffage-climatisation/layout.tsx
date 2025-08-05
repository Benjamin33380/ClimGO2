import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: "Chauffage, Climatisation et PAC à Cenon",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Cenon. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Cenon",
    "climatisation Cenon",
    "installation clim Cenon",
    "chauffe-eau Cenon",
    "pompe à chaleur Cenon",
    "entretien clim Cenon",
    "installateur RGE Cenon",
    "chauffagiste Cenon",
    "climatisation réversible Cenon",
    "PAC air eau Cenon",
    "PAC air air Cenon",
    "chauffe-eau thermodynamique Cenon",
    "dépannage chauffage Cenon",
    "entretien pompe à chaleur Cenon",
    "installateur clim Cenon",
    "clim gainable Cenon",
    "clim mural Cenon",
    "économie énergie Cenon",
    "artisan RGE Cenon",
    "clim cassette Cenon",
    "devis chauffage Cenon",
    "devis climatisation Cenon",
    "maintenance chauffage Cenon",
    "solution thermique Cenon",
    "installation RGE Cenon",
    "confort thermique Cenon",
    "entreprise chauffage Cenon"
  ],
   robots: "index, follow",
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Cenon - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Cenon. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/cenon-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/cenon.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Cenon - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Cenon - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Cenon. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/cenon.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/cenon-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/cenon.jpg",
    "@id": "https://www.climgo.fr/cenon-chauffage-climatisation",
    "url": "https://www.climgo.fr/cenon-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Av. Carnot",
      "addressLocality": "Cenon",
      "postalCode": "33150",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.8576615,
      "longitude": -0.5309915
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
      { "@type": "Place", "name": "Cenon" },
      { "@type": "Place", "name": "Floirac" },
      { "@type": "Place", "name": "Lormont" },
      { "@type": "Place", "name": "Artigues-près-Bordeaux" }
    ],
    "description": "Entreprise RGE spécialisée en chauffage, climatisation et chauffe-eau à Cenon. Intervention rapide, matériel de qualité, devis gratuit avec ClimGO.",
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