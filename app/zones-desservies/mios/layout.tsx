import Script from "next/script";

export const metadata = {
  title: "Chauffage, Climatisation et PAC à Mios - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Mios. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Mios",
    "climatisation Mios",
    "installation clim Mios",
    "chauffe-eau Mios",
    "pompe à chaleur Mios",
    "entretien clim Mios",
    "installateur RGE Mios",
    "chauffagiste Mios",
    "climatisation réversible Mios",
    "PAC air eau Mios",
    "PAC air air Mios",
    "chauffe-eau thermodynamique Mios",
    "dépannage chauffage Mios",
    "entretien pompe à chaleur Mios",
    "installateur clim Mios",
    "clim gainable Mios",
    "clim mural Mios",
    "économie énergie Mios",
    "artisan RGE Mios",
    "clim cassette Mios",
    "devis chauffage Mios",
    "devis climatisation Mios",
    "maintenance chauffage Mios",
    "solution thermique Mios",
    "installation RGE Mios",
    "confort thermique Mios",
    "entreprise chauffage Mios"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Mios - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Mios. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/zones-desservies/mios",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/images/og-image-mios.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Mios - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Mios - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Mios. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/images/og-image-mios.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/chauffage-climatisation-mios"
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
          "image": "https://www.climgo.fr/images/og-image-mios.jpg",
          "@id": "https://www.climgo.fr/chauffage-climatisation-mios",
          "url": "https://www.climgo.fr/chauffage-climatisation-mios",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Place Alexandre Austre",
            "addressLocality": "Mios",
            "postalCode": "33380",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.5797,
            "longitude": -0.9739
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