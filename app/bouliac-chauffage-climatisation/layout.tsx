export const metadata = {
  title: "Chauffage, Climatisation et PAC à Bouliac",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bouliac. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Bouliac",
    "climatisation Bouliac",
    "installation clim Bouliac",
    "chauffe-eau Bouliac",
    "pompe à chaleur Bouliac",
    "entretien clim Bouliac",
    "installateur RGE Bouliac",
    "chauffagiste Bouliac",
    "climatisation réversible Bouliac",
    "PAC air eau Bouliac",
    "PAC air air Bouliac",
    "chauffe-eau thermodynamique Bouliac",
    "dépannage chauffage Bouliac",
    "entretien pompe à chaleur Bouliac",
    "installateur clim Bouliac",
    "clim gainable Bouliac",
    "clim mural Bouliac",
    "économie énergie Bouliac",
    "artisan RGE Bouliac",
    "clim cassette Bouliac",
    "devis chauffage Bouliac",
    "devis climatisation Bouliac",
    "maintenance chauffage Bouliac",
    "solution thermique Bouliac",
    "installation RGE Bouliac",
    "confort thermique Bouliac",
    "entreprise chauffage Bouliac"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Bouliac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bouliac. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/bouliac-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/liac.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Bouliac - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Bouliac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bouliac. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/liac.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/bouliac-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/liac.jpg",
          "@id": "https://www.climgo.fr/bouliac-chauffage-climatisation",
          "url": "https://www.climgo.fr/bouliac-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "20 Pl. Camille Hostein",
            "addressLocality": "Bouliac",
            "postalCode": "33270",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.814239501953125,
            "longitude": -0.5036646723747253
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