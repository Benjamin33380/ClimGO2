export const metadata = {
  title: "Chauffage, Climatisation et PAC à Arès",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Arès. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Arès",
    "climatisation Arès",
    "installation clim Arès",
    "chauffe-eau Arès",
    "pompe à chaleur Arès",
    "entretien clim Arès",
    "installateur RGE Arès",
    "chauffagiste Arès",
    "climatisation réversible Arès",
    "PAC air eau Arès",
    "PAC air air Arès",
    "chauffe-eau thermodynamique Arès",
    "dépannage chauffage Arès",
    "entretien pompe à chaleur Arès",
    "installateur clim Arès",
    "clim gainable Arès",
    "clim mural Arès",
    "prix pompe a chaleur Arès",
    "artisan RGE Arès",
    "clim cassette Arès",
    "devis chauffage Arès",
    "devis climatisation Arès",
    "maintenance chauffage Arès",
    "solution thermique Arès",
    "installation RGE Arès",
    "confort thermique Arès",
    "entreprise chauffage Arès"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Arès - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Arès. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/ares-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/ares.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Arès - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Arès - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Arès. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/ares.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/ares-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/ares.jpg",
          "@id": "https://www.climgo.fr/ares-chauffage-climatisation",
          "url": "https://www.climgo.fr/ares-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pierre Pauilhac",
            "addressLocality": "Arès",
            "postalCode": "33740",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.7983533,
            "longitude": -1.0714701
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