export const metadata = {
  title: "Chauffage, Climatisation et PAC à Pessac",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Pessac. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Pessac",
    "climatisation Pessac",
    "installation clim Pessac",
    "chauffe-eau Pessac",
    "pompe à chaleur Pessac",
    "entretien clim Pessac",
    "installateur RGE Pessac",
    "chauffagiste Pessac",
    "climatisation réversible Pessac",
    "PAC air eau Pessac",
    "PAC air air Pessac",
    "chauffe-eau thermodynamique Pessac",
    "dépannage chauffage Pessac",
    "entretien pompe à chaleur Pessac",
    "installateur clim Pessac",
    "clim gainable Pessac",
    "clim mural Pessac",
    "économie énergie Pessac",
    "artisan RGE Pessac",
    "clim cassette Pessac",
    "devis chauffage Pessac",
    "devis climatisation Pessac",
    "maintenance chauffage Pessac",
    "solution thermique Pessac",
    "installation RGE Pessac",
    "confort thermique Pessac",
    "entreprise chauffage Pessac"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Pessac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Pessac. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/pessac-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/pessac.png",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Pessac - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Pessac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Pessac. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/pessac.png"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/pessac-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/pessac.png",
    "@id": "https://www.climgo.fr/pessac-chauffage-climatisation",
    "url": "https://www.climgo.fr/pessac-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pl. de la 5ème République",
      "addressLocality": "Pessac",
      "postalCode": "33600",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.7924156,
      "longitude": -0.7051652
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
      { "@type": "Place", "name": "Pessac" },
      { "@type": "Place", "name": "Talence" },
      { "@type": "Place", "name": "Gradignan" },
      { "@type": "Place", "name": "Bègles" },
      { "@type": "Place", "name": "Mérignac" }
    ],
    "description": "ClimGO intervient à Pessac pour l'installation, l'entretien et le dépannage de climatisations, pompes à chaleur et chauffe-eaux. Service certifié RGE, réactif et de proximité.",
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