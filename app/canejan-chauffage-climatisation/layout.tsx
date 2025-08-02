export const metadata = {
  title: "Chauffage, Climatisation et PAC à Canéjan",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Canéjan. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Canéjan",
    "climatisation Canéjan",
    "installation clim Canéjan",
    "chauffe-eau Canéjan",
    "pompe à chaleur Canéjan",
    "entretien clim Canéjan",
    "installateur RGE Canéjan",
    "chauffagiste Canéjan",
    "climatisation réversible Canéjan",
    "PAC air eau Canéjan",
    "PAC air air Canéjan",
    "chauffe-eau thermodynamique Canéjan",
    "dépannage chauffage Canéjan",
    "entretien pompe à chaleur Canéjan",
    "installateur clim Canéjan",
    "clim gainable Canéjan",
    "clim mural Canéjan",
    "économie énergie Canéjan",
    "artisan RGE Canéjan",
    "clim cassette Canéjan",
    "devis chauffage Canéjan",
    "devis climatisation Canéjan",
    "maintenance chauffage Canéjan",
    "solution thermique Canéjan",
    "installation RGE Canéjan",
    "confort thermique Canéjan",
    "entreprise chauffage Canéjan"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Canéjan - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Canéjan. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/canejan-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/Canéjan.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Canéjan - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Canéjan - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Canéjan. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/Canéjan.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/canejan-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/Canéjan.jpg",
    "@id": "https://www.climgo.fr/canejan-chauffage-climatisation",
    "url": "https://www.climgo.fr/canejan-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. du Baron Haussmann",
      "addressLocality": "Canéjan",
      "postalCode": "33610",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.7626562,
      "longitude": -0.6540587
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
      { "@type": "Place", "name": "Canéjan" },
      { "@type": "Place", "name": "Cestas" },
      { "@type": "Place", "name": "Pessac" },
      { "@type": "Place", "name": "Gradignan" }
    ],
    "description": "ClimGO intervient à Canéjan pour tous vos besoins en climatisation, chauffage, pompe à chaleur et chauffe-eau. Service rapide, devis gratuit, entreprise RGE.",
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