export const metadata = {
  title: "Chauffage, Climatisation et PAC à Le Teich",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Teich. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Le Teich",
    "climatisation Le Teich",
    "installation clim Le Teich",
    "chauffe-eau Le Teich",
    "pompe à chaleur Le Teich",
    "entretien clim Le Teich",
    "installateur RGE Le Teich",
    "chauffagiste Le Teich",
    "climatisation réversible Le Teich",
    "PAC air eau Le Teich",
    "PAC air air Le Teich",
    "chauffe-eau thermodynamique Le Teich",
    "dépannage chauffage Le Teich",
    "entretien pompe à chaleur Le Teich",
    "installateur clim Le Teich",
    "clim gainable Le Teich",
    "clim mural Le Teich",
    "prix pompe a chaleur Le Teich",
    "artisan RGE Le Teich",
    "clim cassette Le Teich",
    "devis chauffage Le Teich",
    "devis climatisation Le Teich",
    "maintenance chauffage Le Teich",
    "solution thermique Le Teich",
    "installation RGE Le Teich",
    "confort thermique Le Teich",
    "entreprise chauffage Le Teich"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Le Teich - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Teich. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/le-teich-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/teich.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Le Teich - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Le Teich - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Teich. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/teich.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/le-teich-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/teich.jpg",
    "@id": "https://www.climgo.fr/le-teich-chauffage-climatisation",
    "url": "https://www.climgo.fr/le-teich-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenue de la Côte d'Argent",
      "addressLocality": "Le Teich",
      "postalCode": "33470",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.6356226,
      "longitude": -1.0208573
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
      { "@type": "Place", "name": "Le Teich" },
      { "@type": "Place", "name": "Biganos" },
      { "@type": "Place", "name": "Audenge" },
      { "@type": "Place", "name": "Gujan-Mestras" }
    ],
    "description": "ClimGO intervient à Le Teich et sur le Bassin d’Arcachon pour l’installation, l’entretien et le dépannage de pompes à chaleur, climatisation et chauffe-eau. Réactivité, qualité, conseils personnalisés.",
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
      "Solutions de confort thermique"
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