import Script from "next/script";

export const metadata = {
  title: "Chauffage, Climatisation et PAC à Belin-Béliet - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Belin-Béliet. Profitez d'un service local.",
  keywords: [
    "chauffage Belin-Béliet",
    "climatisation Belin-Béliet",
    "installation clim Belin-Béliet",
    "chauffe-eau Belin-Béliet",
    "pompe à chaleur Belin-Béliet",
    "entretien clim Belin-Béliet",
    "installateur RGE Belin-Béliet",
    "chauffagiste Belin-Béliet",
    "climatisation réversible Belin-Béliet",
    "PAC air eau Belin-Béliet",
    "PAC air air Belin-Béliet",
    "chauffe-eau thermodynamique Belin-Béliet",
    "dépannage chauffage Belin-Béliet",
    "entretien pompe à chaleur Belin-Béliet",
    "installateur clim Belin-Béliet",
    "clim gainable Belin-Béliet",
    "clim mural Belin-Béliet",
    "économie énergie Belin-Béliet",
    "artisan RGE Belin-Béliet",
    "clim cassette Belin-Béliet",
    "devis chauffage Belin-Béliet",
    "devis climatisation Belin-Béliet",
    "maintenance chauffage Belin-Béliet",
    "solution thermique Belin-Béliet",
    "installation RGE Belin-Béliet",
    "confort thermique Belin-Béliet",
    "entreprise chauffage Belin-Béliet"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Belin-Béliet - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Belin-Béliet. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/belin-beliet-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/belin.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Salles - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Belin-Béliet - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Belin-Béliet. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/belin.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/belin-beliet-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/belin.jpg",
          "@id": "https://www.climgo.fr/belin-beliet-chauffage-climatisation",
          "url": "https://www.climgo.fr/belin-beliet-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Aliénor",
            "addressLocality": "Belin-Béliet",
            "postalCode": "33380",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.4930554,
            "longitude": -0.7906699
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