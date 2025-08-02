export const metadata = {
  title: "Chauffage, Climatisation et PAC à Lacanau",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lacanau. Certifié RGE.",
  keywords: [
    "chauffage Lacanau",
    "climatisation Lacanau",
    "installation clim Lacanau",
    "chauffe-eau Lacanau",
    "pompe à chaleur Lacanau",
    "entretien clim Lacanau",
    "installateur RGE Lacanau",
    "chauffagiste Lacanau",
    "climatisation réversible Lacanau",
    "PAC air eau Lacanau",
    "PAC air air Lacanau",
    "chauffe-eau thermodynamique Lacanau",
    "dépannage chauffage Lacanau",
    "entretien pompe à chaleur Lacanau",
    "installateur clim Lacanau",
    "clim gainable Lacanau",
    "clim mural Lacanau",
    "prix pompe a chaleur Lacanau",
    "artisan RGE Lacanau",
    "clim cassette Lacanau",
    "devis chauffage Lacanau",
    "devis climatisation Lacanau",
    "maintenance chauffage Lacanau",
    "solution thermique Lacanau",
    "installation RGE Lacanau",
    "confort thermique Lacanau",
    "entreprise chauffage Lacanau"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Lacanau - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lacanau. Certifié RGE.",
    url: "https://www.climgo.fr/lacanau-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/laca.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Lacanau - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Lacanau - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lacanau. Certifié RGE.",
    images: ["https://www.climgo.fr/villes/laca.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/lacanau-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/laca.jpg",
          "@id": "https://www.climgo.fr/lacanau-chauffage-climatisation",
          "url": "https://www.climgo.fr/lacanau-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "31 Av. de la Libération",
            "addressLocality": "Lacanau",
            "postalCode": "33680",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.9780536,
            "longitude": -1.0764005
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