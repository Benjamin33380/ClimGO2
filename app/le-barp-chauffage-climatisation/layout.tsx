import Script from "next/script";

export const metadata = {
  title: "Chauffage, Climatisation et PAC à Le Barp - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Barp. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Le Barp",
    "climatisation Le Barp",
    "installation clim Le Barp",
    "chauffe-eau Le Barp",
    "pompe à chaleur Le Barp",
    "entretien clim Le Barp",
    "installateur RGE Le Barp",
    "chauffagiste Le Barp",
    "climatisation réversible Le Barp",
    "PAC air eau Le Barp",
    "PAC air air Le Barp",
    "chauffe-eau thermodynamique Le Barp",
    "dépannage chauffage Le Barp",
    "entretien pompe à chaleur Le Barp",
    "installateur clim Le Barp",
    "clim gainable Le Barp",
    "clim mural Le Barp",
    "économie énergie Le Barp",
    "artisan RGE Le Barp",
    "clim cassette Le Barp",
    "devis chauffage Le Barp",
    "devis climatisation Le Barp",
    "maintenance chauffage Le Barp",
    "solution thermique Le Barp",
    "installation RGE Le Barp",
    "confort thermique Le Barp",
    "entreprise chauffage Le Barp"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Le Barp - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Barp. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/le-barp-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/barp.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Le Barp - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Le Barp - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Barp. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/barp.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/le-barp-chauffage-climatisation"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script type="application/ld+json" id="ld-json-schema" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ClimGO",
          "image": "https://www.climgo.fr/villes/barp.jpg",
          "@id": "https://www.climgo.fr/le-barp-chauffage-climatisation",
          "url": "https://www.climgo.fr/le-barp-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Des Pyrénées",
            "addressLocality": "Le Barp",
            "postalCode": "33380",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.6055595,
            "longitude": -0.770532
          },
          "sameAs": [
            "https://www.instagram.com/climgo_climatisation_chauffage/",
            "https://www.facebook.com/people/Climgo/61578576031066/",
            "https://www.linkedin.com/company/climgo"
          ]
        })}
      </Script>
      {children}
    </>
  );
}