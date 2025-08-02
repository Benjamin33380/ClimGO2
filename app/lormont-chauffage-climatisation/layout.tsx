export const metadata = {
  title: "Chauffage, Climatisation et PAC à Lormont",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lormont. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Lormont",
    "climatisation Lormont",
    "installation clim Lormont",
    "chauffe-eau Lormont",
    "pompe à chaleur Lormont",
    "entretien clim Lormont",
    "installateur RGE Lormont",
    "chauffagiste Lormont",
    "climatisation réversible Lormont",
    "PAC air eau Lormont",
    "PAC air air Lormont",
    "chauffe-eau thermodynamique Lormont",
    "dépannage chauffage Lormont",
    "entretien pompe à chaleur Lormont",
    "installateur clim Lormont",
    "clim gainable Lormont",
    "clim mural Lormont",
    "économie énergie Lormont",
    "artisan RGE Lormont",
    "clim cassette Lormont",
    "devis chauffage Lormont",
    "devis climatisation Lormont",
    "maintenance chauffage Lormont",
    "solution thermique Lormont",
    "installation RGE Lormont",
    "confort thermique Lormont",
    "entreprise chauffage Lormont"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Lormont - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lormont. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/lormont-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/lormont.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Lormont - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Lormont - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lormont. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/lormont.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/lormont-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/lormont.jpg",
    "@id": "https://www.climgo.fr/lormont-chauffage-climatisation",
    "url": "https://www.climgo.fr/lormont-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rue André Dupin",
      "addressLocality": "Lormont",
      "postalCode": "33310",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.8796511,
      "longitude": -0.5221354
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
      { "@type": "Place", "name": "Lormont" },
      { "@type": "Place", "name": "Cenon" },
      { "@type": "Place", "name": "Bassens" },
      { "@type": "Place", "name": "Carbon-Blanc" },
      { "@type": "Place", "name": "Artigues-près-Bordeaux" }
    ],
    "description": "ClimGO propose ses services à Lormont pour l'installation, l'entretien et le dépannage de systèmes de chauffage, climatisations et chauffe-eaux. Intervention rapide, conseils sur mesure et travail soigné.",
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