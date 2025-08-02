export const metadata = {
  title: "Chauffage, Climatisation et PAC à Saucats - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saucats. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Saucats",
    "climatisation Saucats",
    "installation clim Saucats",
    "chauffe-eau Saucats",
    "pompe à chaleur Saucats",
    "entretien clim Saucats",
    "installateur RGE Saucats",
    "chauffagiste Saucats",
    "climatisation réversible Saucats",
    "PAC air eau Saucats",
    "PAC air air Saucats",
    "chauffe-eau thermodynamique Saucats",
    "dépannage chauffage Saucats",
    "entretien pompe à chaleur Saucats",
    "installateur clim Saucats",
    "clim gainable Saucats",
    "clim mural Saucats",
    "économie énergie Saucats",
    "artisan RGE Saucats",
    "clim cassette Saucats",
    "devis chauffage Saucats",
    "devis climatisation Saucats",
    "maintenance chauffage Saucats",
    "solution thermique Saucats",
    "installation RGE Saucats",
    "confort thermique Saucats",
    "entreprise chauffage Saucats"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Saucats - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saucats. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/saucats-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/saucats.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Saucats - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Saucats - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saucats. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/saucats.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/saucats-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/saucats.jpg",
          "@id": "https://www.climgo.fr/saucats-chauffage-climatisation",
          "url": "https://www.climgo.fr/saucats-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4 Chem. de la Mairie",
            "addressLocality": "Saucats",
            "postalCode": "33650",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.6833,
            "longitude": -0.5333
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