export const metadata = {
  title: "Chauffage, Climatisation et PAC à Martillac",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Martillac. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Martillac",
    "climatisation Martillac",
    "installation clim Martillac",
    "chauffe-eau Martillac",
    "pompe à chaleur Martillac",
    "entretien clim Martillac",
    "installateur RGE Martillac",
    "chauffagiste Martillac",
    "climatisation réversible Martillac",
    "PAC air eau Martillac",
    "PAC air air Martillac",
    "chauffe-eau thermodynamique Martillac",
    "dépannage chauffage Martillac",
    "entretien pompe à chaleur Martillac",
    "installateur clim Martillac",
    "clim gainable Martillac",
    "clim mural Martillac",
    "économie énergie Martillac",
    "artisan RGE Martillac",
    "clim cassette Martillac",
    "devis chauffage Martillac",
    "devis climatisation Martillac",
    "maintenance chauffage Martillac",
    "solution thermique Martillac",
    "installation RGE Martillac",
    "confort thermique Martillac",
    "entreprise chauffage Martillac"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Martillac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Martillac. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/martillac-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/mart.webp",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Martillac - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Martillac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Martillac. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/mart.webp"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/martillac-chauffage-climatisation"
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
    "image": "https://www.climgo.fr/martillac-chauffage-climatisation",
    "@id": "https://www.climgo.fr/martillac-chauffage-climatisation",
    "url": "https://www.climgo.fr/martillac-chauffage-climatisation",
    "telephone": "+33 7 66 46 00 08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 Av. Charles de Gaulle",
      "addressLocality": "Martillac",
      "postalCode": "33650",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.712032318115234,
      "longitude": -0.5437282919883728
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
      { "@type": "Place", "name": "Martillac" },
      { "@type": "Place", "name": "La Brède" },
      { "@type": "Place", "name": "Saint-Morillon" },
      { "@type": "Place", "name": "Léognan" },
      { "@type": "Place", "name": "Beautiran" }
    ],
    "description": "ClimGO intervient à Martillac pour l'installation, l'entretien et le dépannage de vos systèmes de climatisation, pompes à chaleur et chauffage. Artisan local certifié RGE.",
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
      "Installation de pompe à chaleur",
      "Entretien PAC et climatisation",
      "Installation chauffe-eau thermodynamique",
      "Plomberie et chauffage"
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