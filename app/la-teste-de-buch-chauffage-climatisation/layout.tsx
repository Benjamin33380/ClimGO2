import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: "Chauffage, Climatisation et PAC à La Teste-de-Buch",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à La Teste-de-Buch. Certifié RGE.",
  keywords: [
    "chauffage La Teste-de-Buch",
    "climatisation La Teste-de-Buch",
    "installation clim La Teste-de-Buch",
    "chauffe-eau La Teste-de-Buch",
    "pompe à chaleur La Teste-de-Buch",
    "entretien clim La Teste-de-Buch",
    "installateur RGE La Teste-de-Buch",
    "chauffagiste La Teste-de-Buch",
    "climatisation réversible La Teste-de-Buch",
    "PAC air eau La Teste-de-Buch",
    "PAC air air La Teste-de-Buch",
    "chauffe-eau thermodynamique La Teste-de-Buch",
    "dépannage chauffage La Teste-de-Buch",
    "entretien pompe à chaleur La Teste-de-Buch",
    "installateur clim La Teste-de-Buch",
    "clim gainable La Teste-de-Buch",
    "clim mural La Teste-de-Buch",
    "prix pompe a chaleur La Teste-de-Buch",
    "artisan RGE La Teste-de-Buch",
    "clim cassette La Teste-de-Buch",
    "devis chauffage La Teste-de-Buch",
    "devis climatisation La Teste-de-Buch",
    "maintenance chauffage La Teste-de-Buch",
    "solution thermique La Teste-de-Buch",
    "installation RGE La Teste-de-Buch",
    "confort thermique La Teste-de-Buch",
    "entreprise chauffage La Teste-de-Buch"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à La Teste-de-Buch - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à La Teste-de-Buch. Certifié RGE.",
    url: "https://www.climgo.fr/la-teste-de-buch-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/teste.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à La Teste-de-Buch - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à La Teste-de-Buch - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à La Teste-de-Buch. Certifié RGE.",
    images: ["https://www.climgo.fr/villes/teste.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/la-teste-de-buch-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/teste.jpg",
    "@id": "https://www.climgo.fr/la-teste-de-buch-chauffage-climatisation",
    "url": "https://www.climgo.fr/la-teste-de-buch-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rue Edmond Doré",
      "addressLocality": "La Teste-de-Buch",
      "postalCode": "33260",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.631431579589844,
      "longitude": -1.1485286951065063
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
      { "@type": "Place", "name": "La Teste-de-Buch" },
      { "@type": "Place", "name": "Arcachon" },
      { "@type": "Place", "name": "Gujan-Mestras" },
      { "@type": "Place", "name": "Pyla-sur-Mer" }
    ],
    "description": "ClimGO intervient à La Teste-de-Buch pour l’installation et l’entretien de climatisations, pompes à chaleur et chauffe-eau. Confort, performance et expertise locale.",
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