export const metadata = {
  title: "Chauffage, Climatisation et PAC à Cestas",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Cestas. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Cestas",
    "climatisation Cestas",
    "installation clim Cestas",
    "chauffe-eau Cestas",
    "pompe à chaleur Cestas",
    "entretien clim Cestas",
    "installateur RGE Cestas",
    "chauffagiste Cestas",
    "climatisation réversible Cestas",
    "PAC air eau Cestas",
    "PAC air air Cestas",
    "chauffe-eau thermodynamique Cestas",
    "dépannage chauffage Cestas",
    "entretien pompe à chaleur Cestas",
    "installateur clim Cestas",
    "clim gainable Cestas",
    "clim mural Cestas",
    "économie énergie Cestas",
    "artisan RGE Cestas",
    "clim cassette Cestas",
    "devis chauffage Cestas",
    "devis climatisation Cestas",
    "maintenance chauffage Cestas",
    "solution thermique Cestas",
    "installation RGE Cestas",
    "confort thermique Cestas",
    "entreprise chauffage Cestas"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Cestas - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Cestas. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/cestas-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/cestas.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Cestas - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Cestas - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Cestas. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/cestas.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/cestas-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/cestas.jpg",
    "@id": "https://www.climgo.fr/cestas-chauffage-climatisation",
    "url": "https://www.climgo.fr/cestas-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. du Baron Haussmann",
      "addressLocality": "Cestas",
      "postalCode": "33610",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.7276359,
      "longitude": -0.7339215
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
      { "@type": "Place", "name": "Cestas" },
      { "@type": "Place", "name": "Canéjan" },
      { "@type": "Place", "name": "Gradignan" },
      { "@type": "Place", "name": "Pessac" }
    ],
    "description": "Installation, entretien et dépannage de climatisation, chauffage et chauffe-eau à Cestas. Artisan ClimGO certifié RGE et QualiPAC, réactif et local.",
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
    "serviceType": [
      "Installation de climatisation",
      "Pompes à chaleur air/air et air/eau",
      "Entretien et maintenance",
      "Chauffe-eau thermodynamique",
      "Chauffe-eau électrique",
      "Solutions de chauffage"
    ],
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