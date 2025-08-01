import Script from "next/script";

export const metadata = {
  title: "Chauffage, Climatisation et PAC à Salles - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Salles. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Salles",
    "climatisation Salles",
    "installation clim Salles",
    "chauffe-eau Salles",
    "pompe à chaleur Salles",
    "entretien clim Salles",
    "installateur RGE Salles",
    "chauffagiste Salles",
    "climatisation réversible Salles",
    "PAC air eau Salles",
    "PAC air air Salles",
    "chauffe-eau thermodynamique Salles",
    "dépannage chauffage Salles",
    "entretien pompe à chaleur Salles",
    "installateur clim Salles",
    "clim gainable Salles",
    "clim mural Salles",
    "économie énergie Salles",
    "artisan RGE Salles",
    "clim cassette Salles",
    "devis chauffage Salles",
    "devis climatisation Salles",
    "maintenance chauffage Salles",
    "solution thermique Salles",
    "installation RGE Salles",
    "confort thermique Salles",
    "entreprise chauffage Salles"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Salles - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Salles. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/zones-desservies/salles",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/images/og-image-salles.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Salles - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Salles - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Salles. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/images/og-image-salles.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/zones-desservies/salles"
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
          "image": "https://www.climgo.fr/images/og-image-salles.jpg",
          "@id": "https://www.climgo.fr/zones-desservies/salles",
          "url": "https://www.climgo.fr/zones-desservies/salles",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Place de la Mairie",
            "addressLocality": "Salles",
            "postalCode": "33380",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.5508,
            "longitude": -0.8736
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