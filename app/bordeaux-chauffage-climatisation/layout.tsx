export const metadata = {
  title: "Chauffage, Climatisation et PAC à Bordeaux",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bordeaux. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Bordeaux",
    "climatisation Bordeaux",
    "installation clim Bordeaux",
    "chauffe-eau Bordeaux",
    "pompe à chaleur Bordeaux",
    "entretien clim Bordeaux",
    "installateur RGE Bordeaux",
    "chauffagiste Bordeaux",
    "climatisation réversible Bordeaux",
    "PAC air eau Bordeaux",
    "PAC air air Bordeaux",
    "chauffe-eau thermodynamique Bordeaux",
    "dépannage chauffage Bordeaux",
    "entretien pompe à chaleur Bordeaux",
    "installateur clim Bordeaux",
    "clim gainable Bordeaux",
    "clim mural Bordeaux",
    "économie énergie Bordeaux",
    "artisan RGE Bordeaux",
    "clim cassette Bordeaux",
    "devis chauffage Bordeaux",
    "devis climatisation Bordeaux",
    "maintenance chauffage Bordeaux",
    "solution thermique Bordeaux",
    "installation RGE Bordeaux",
    "confort thermique Bordeaux",
    "entreprise chauffage Bordeaux"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Bordeaux - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bordeaux. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/bordeaux-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/bordeaux.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Bordeaux - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Bordeaux - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bordeaux. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/bordeaux.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/bordeaux-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/bordeaux.jpg",
    "@id": "https://www.climgo.fr/bordeaux-chauffage-climatisation",
    "url": "https://www.climgo.fr/bordeaux-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Place Pey Berland",
      "addressLocality": "Bordeaux",
      "postalCode": "33000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.841225,
      "longitude": -0.5800364
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
      { "@type": "Place", "name": "Bordeaux" },
      { "@type": "Place", "name": "Talence" },
      { "@type": "Place", "name": "Mérignac" },
      { "@type": "Place", "name": "Bègles" },
      { "@type": "Place", "name": "Cenon" }
    ],
    "description": "ClimGO est votre spécialiste à Bordeaux pour l'installation, l'entretien et la maintenance de pompes à chaleur, systèmes de chauffage, climatisations et chauffe-eaux performants. Service rapide, certifié RGE.",
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