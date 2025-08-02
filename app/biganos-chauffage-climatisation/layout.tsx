export const metadata = {
  title: "Chauffage, Climatisation et PAC à Biganos ",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Biganos. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Biganos",
    "climatisation Biganos",
    "installation clim Biganos",
    "chauffe-eau Biganos",
    "pompe à chaleur Biganos",
    "entretien clim Biganos",
    "installateur RGE Biganos",
    "chauffagiste Biganos",
    "climatisation réversible Biganos",
    "PAC air eau Biganos",
    "PAC air air Biganos",
    "chauffe-eau thermodynamique Biganos",
    "dépannage chauffage Biganos",
    "entretien pompe à chaleur Biganos",
    "installateur clim Biganos",
    "clim gainable Biganos",
    "clim mural Biganos",
    "prix pompe a chaleur Biganos",
    "artisan RGE Biganos",
    "clim cassette Biganos",
    "devis chauffage Biganos",
    "devis climatisation Biganos",
    "maintenance chauffage Biganos",
    "solution thermique Biganos",
    "installation RGE Biganos",
    "confort thermique Biganos",
    "entreprise chauffage Biganos"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Biganos - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Biganos. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/biganos-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/biganos.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Biganos - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Biganos - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Biganos. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/biganos.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/biganos-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/biganos.jpg",
          "@id": "https://www.climgo.fr/biganos-chauffage-climatisation",
          "url": "https://www.climgo.fr/biganos-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. de la Libération",
            "addressLocality": "Biganos",
            "postalCode": "33380",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.642014,
            "longitude": -0.9766226
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