export const metadata = {
  title: "Chauffage, Climatisation et PAC à Cenon",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Cenon. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Cenon",
    "climatisation Cenon",
    "installation clim Cenon",
    "chauffe-eau Cenon",
    "pompe à chaleur Cenon",
    "entretien clim Cenon",
    "installateur RGE Cenon",
    "chauffagiste Cenon",
    "climatisation réversible Cenon",
    "PAC air eau Cenon",
    "PAC air air Cenon",
    "chauffe-eau thermodynamique Cenon",
    "dépannage chauffage Cenon",
    "entretien pompe à chaleur Cenon",
    "installateur clim Cenon",
    "clim gainable Cenon",
    "clim mural Cenon",
    "économie énergie Cenon",
    "artisan RGE Cenon",
    "clim cassette Cenon",
    "devis chauffage Cenon",
    "devis climatisation Cenon",
    "maintenance chauffage Cenon",
    "solution thermique Cenon",
    "installation RGE Cenon",
    "confort thermique Cenon",
    "entreprise chauffage Cenon"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Cenon - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Cenon. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/cenon-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/cenon.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Cenon - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Cenon - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Cenon. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/cenon.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/cenon-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/cenon.jpg",
          "@id": "https://www.climgo.fr/cenon-chauffage-climatisation",
          "url": "https://www.climgo.fr/cenon-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1 Av. Carnot",
            "addressLocality": "Cenon",
            "postalCode": "33150",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.8576615,
            "longitude": -0.5309915
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