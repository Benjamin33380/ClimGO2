export const metadata = {
  title: "Chauffage, Climatisation et PAC à Audenge",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Audenge. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Audenge",
    "climatisation Audenge",
    "installation clim Audenge",
    "chauffe-eau Audenge",
    "pompe à chaleur Audenge",
    "entretien clim Audenge",
    "installateur RGE Audenge",
    "chauffagiste Audenge",
    "climatisation réversible Audenge",
    "PAC air eau Audenge",
    "PAC air air Audenge",
    "chauffe-eau thermodynamique Audenge",
    "dépannage chauffage Audenge",
    "entretien pompe à chaleur Audenge",
    "installateur clim Audenge",
    "clim gainable Audenge",
    "clim mural Audenge",
    "économie énergie Audenge",
    "artisan RGE Audenge",
    "clim cassette Audenge",
    "devis chauffage Audenge",
    "devis climatisation Audenge",
    "maintenance chauffage Audenge",
    "solution thermique Audenge",
    "installation RGE Audenge",
    "confort thermique Audenge",
    "entreprise chauffage Audenge"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Audenge - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Audenge. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/audenge-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/ares.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Audenge - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Audenge - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Audenge. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/ares.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/audenge-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/ares.jpg", // À corriger si tu as une image dédiée pour Audenge
    "@id": "https://www.climgo.fr/audenge-chauffage-climatisation",
    "url": "https://www.climgo.fr/audenge-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "All. Ernest de Boissière",
      "addressLocality": "Audenge",
      "postalCode": "33980",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.682824196826395,
      "longitude": -1.0148100720908548
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
      { "@type": "Place", "name": "Audenge" },
      { "@type": "Place", "name": "Andernos-les-Bains" },
      { "@type": "Place", "name": "Bigannos" },
      { "@type": "Place", "name": "Lanton" }
    ],
    "description": "ClimGO intervient à Audenge pour tous vos besoins en chauffage, climatisation et chauffe-eau. Installation, entretien, et accompagnement aux aides d’État. Entreprise certifiée RGE.",
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