export const metadata = {
  title: "Chauffage, Climatisation et PAC à Le Bouscat",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Bouscat. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Le Bouscat",
    "climatisation Le Bouscat",
    "installation clim Le Bouscat",
    "chauffe-eau Le Bouscat",
    "pompe à chaleur Le Bouscat",
    "entretien clim Le Bouscat",
    "installateur RGE Le Bouscat",
    "chauffagiste Le Bouscat",
    "climatisation réversible Le Bouscat",
    "PAC air eau Le Bouscat",
    "PAC air air Le Bouscat",
    "chauffe-eau thermodynamique Le Bouscat",
    "dépannage chauffage Le Bouscat",
    "entretien pompe à chaleur Le Bouscat",
    "installateur clim Le Bouscat",
    "clim gainable Le Bouscat",
    "clim mural Le Bouscat",
    "économie énergie Le Bouscat",
    "artisan RGE Le Bouscat",
    "clim cassette Le Bouscat",
    "devis chauffage Le Bouscat",
    "devis climatisation Le Bouscat",
    "maintenance chauffage Le Bouscat",
    "solution thermique Le Bouscat",
    "installation RGE Le Bouscat",
    "confort thermique Le Bouscat",
    "entreprise chauffage Le Bouscat"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Le Bouscat - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Bouscat. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/le-bouscat-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/bou.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Le Bouscat - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Le Bouscat - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Bouscat. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/bou.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/le-bouscat-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/bou.jpg",
          "@id": "https://www.climgo.fr/le-bouscat-chauffage-climatisation",
          "url": "https://www.climgo.fr/le-bouscat-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": " Pl. Gambetta",
            "addressLocality": "Le Bouscat",
            "postalCode": "33650",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.8654742,
            "longitude": -0.6002881
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