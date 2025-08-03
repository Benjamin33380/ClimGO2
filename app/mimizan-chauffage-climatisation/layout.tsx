export const metadata = {
  title: "Chauffage, Climatisation et PAC à Mimizan - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Mimizan. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Mimizan",
    "climatisation Mimizan",
    "installation clim Mimizan",
    "chauffe-eau Mimizan",
    "pompe à chaleur Mimizan",
    "entretien clim Mimizan",
    "installateur RGE Mimizan",
    "chauffagiste Mimizan",
    "climatisation réversible Mimizan",
    "PAC air eau Mimizan",
    "PAC air air Mimizan",
    "chauffe-eau thermodynamique Mimizan",
    "dépannage chauffage Mimizan",
    "entretien pompe à chaleur Mimizan",
    "installateur clim Mimizan",
    "clim gainable Mimizan",
    "clim mural Mimizan",
    "économie énergie Mimizan",
    "artisan RGE Mimizan",
    "clim cassette Mimizan",
    "devis chauffage Mimizan",
    "devis climatisation Mimizan",
    "maintenance chauffage Mimizan",
    "solution thermique Mimizan",
    "installation RGE Mimizan",
    "confort thermique Mimizan",
    "entreprise chauffage Mimizan"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Mimizan - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Mimizan. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/mimizan-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/mimizan.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Mimizan - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Mimizan - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Mimizan. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/mimizan.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/mimizan-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/mimizan.jpg",
    "@id": "https://www.climgo.fr/mimizan-chauffage-climatisation",
    "url": "https://www.climgo.fr/mimizan-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2 Av. de la Gare",
      "addressLocality": "Mimizan",
      "postalCode": "40200",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.2005152,
      "longitude": -1.2282498
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
      { "@type": "Place", "name": "Mimizan" },
      { "@type": "Place", "name": "Parentis-en-Born" },
      { "@type": "Place", "name": "Biscarrosse" },
      { "@type": "Place", "name": "Aureilhan" },
      { "@type": "Place", "name": "Pontenx-les-Forges" }
    ],
    "description": "ClimGO intervient à Mimizan pour l’installation, l’entretien et le dépannage de vos pompes à chaleur, climatisations et chauffe-eaux. Service rapide, certifié RGE, 100% local.",
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