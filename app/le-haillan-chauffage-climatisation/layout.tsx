export const metadata = {
  title: "Chauffage, Climatisation et PAC à Le Haillan",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Haillan. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Le Haillan",
    "climatisation Le Haillan",
    "installation clim Le Haillan",
    "chauffe-eau Le Haillan",
    "pompe à chaleur Le Haillan",
    "entretien clim Le Haillan",
    "installateur RGE Le Haillan",
    "chauffagiste Le Haillan",
    "climatisation réversible Le Haillan",
    "PAC air eau Le Haillan",
    "PAC air air Le Haillan",
    "chauffe-eau thermodynamique Le Haillan",
    "dépannage chauffage Le Haillan",
    "entretien pompe à chaleur Le Haillan",
    "installateur clim Le Haillan",
    "clim gainable Le Haillan",
    "clim mural Le Haillan",
    "économie énergie Le Haillan",
    "artisan RGE Le Haillan",
    "clim cassette Le Haillan",
    "devis chauffage Le Haillan",
    "devis climatisation Le Haillan",
    "maintenance chauffage Le Haillan",
    "solution thermique Le Haillan",
    "installation RGE Le Haillan",
    "confort thermique Le Haillan",
    "entreprise chauffage Le Haillan"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Le Haillan - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Haillan. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/le-haillan-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/hail.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Le Haillan - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Le Haillan - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Le Haillan. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/hail.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/le-haillan-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/hail.jpg",
          "@id": "https://www.climgo.fr/le-haillan-chauffage-climatisation",
          "url": "https://www.climgo.fr/le-haillan-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "137 Av. Pasteur",
            "addressLocality": "Le Haillan",
            "postalCode": "33650",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.87205505371094,
            "longitude": -0.6771429181098938
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