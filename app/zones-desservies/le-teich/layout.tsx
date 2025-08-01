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
    url: "https://www.climgo.fr/zones-desservies/le-teich",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/images/og-image-le-teich.jpg",
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
    images: ["https://www.climgo.fr/images/og-image-le-teich.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/zones-desservies/le-teich"
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
          "image": "https://www.climgo.fr/images/og-image-le-teich.jpg",
          "@id": "https://www.climgo.fr/zones-desservies/le-teich",
          "url": "https://www.climgo.fr/zones-desservies/le-teich",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Place du Souvenir",
            "addressLocality": "Le Teich",
            "postalCode": "33470",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.6288,
            "longitude": -1.0212
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