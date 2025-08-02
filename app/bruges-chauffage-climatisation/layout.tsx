export const metadata = {
  title: "Chauffage, Climatisation et PAC à Bruges",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bruges. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Bruges",
    "climatisation Bruges",
    "installation clim Bruges",
    "chauffe-eau Bruges",
    "pompe à chaleur Bruges",
    "entretien clim Bruges",
    "installateur RGE Bruges",
    "chauffagiste Bruges",
    "climatisation réversible Bruges",
    "PAC air eau Bruges",
    "PAC air air Bruges",
    "chauffe-eau thermodynamique Bruges",
    "dépannage chauffage Bruges",
    "entretien pompe à chaleur Bruges",
    "installateur clim Bruges",
    "clim gainable Bruges",
    "clim mural Bruges",
    "économie énergie Bruges",
    "artisan RGE Bruges",
    "clim cassette Bruges",
    "devis chauffage Bruges",
    "devis climatisation Bruges",
    "maintenance chauffage Bruges",
    "solution thermique Bruges",
    "installation RGE Bruges",
    "confort thermique Bruges",
    "entreprise chauffage Bruges"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Bruges - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bruges. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/bruges-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/bru.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Bruges - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Bruges - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bruges. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/bru.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/bruges-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/villes/bru.jpg",
    "@id": "https://www.climgo.fr/bruges-chauffage-climatisation",
    "url": "https://www.climgo.fr/bruges-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "87 Av. Charles de Gaulle",
      "addressLocality": "Bruges",
      "postalCode": "33520",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.87969970703125,
      "longitude": -0.6144943237304688
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
      { "@type": "Place", "name": "Bruges" },
      { "@type": "Place", "name": "Le Bouscat" },
      { "@type": "Place", "name": "Eysines" },
      { "@type": "Place", "name": "Blanquefort" }
    ],
    "description": "ClimGO intervient à Bruges pour l'installation, l'entretien et la maintenance de vos systèmes de chauffage, climatisation, pompe à chaleur et chauffe-eau. Entreprise certifiée RGE. Devis gratuit et intervention rapide.",
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
      "Climatisation réversible",
      "Pompes à chaleur air/air et air/eau",
      "Chauffe-eau thermodynamique",
      "Entretien et dépannage",
      "Installation de chauffage",
      "Maintenance des systèmes"
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