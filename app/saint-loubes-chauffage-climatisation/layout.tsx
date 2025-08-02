export const metadata = {
  title: "Chauffage, Climatisation et PAC à Saint-Loubès",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Loubès. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Saint-Loubès",
    "climatisation Saint-Loubès",
    "installation clim Saint-Loubès",
    "chauffe-eau Saint-Loubès",
    "pompe à chaleur Saint-Loubès",
    "entretien clim Saint-Loubès",
    "installateur RGE Saint-Loubès",
    "chauffagiste Saint-Loubès",
    "climatisation réversible Saint-Loubès",
    "PAC air eau Saint-Loubès",
    "PAC air air Saint-Loubès",
    "chauffe-eau thermodynamique Saint-Loubès",
    "dépannage chauffage Saint-Loubès",
    "entretien pompe à chaleur Saint-Loubès",
    "installateur clim Saint-Loubès",
    "clim gainable Saint-Loubès",
    "clim mural Saint-Loubès",
    "économie énergie Saint-Loubès",
    "artisan RGE Saint-Loubès",
    "clim cassette Saint-Loubès",
    "devis chauffage Saint-Loubès",
    "devis climatisation Saint-Loubès",
    "maintenance chauffage Saint-Loubès",
    "solution thermique Saint-Loubès",
    "installation RGE Saint-Loubès",
    "confort thermique Saint-Loubès",
    "entreprise chauffage Saint-Loubès"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Saint-Loubès - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Loubès. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/saint-loubes-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/stlo.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Saint-Loubès - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Saint-Loubès - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Loubès. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/stlo.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/saint-loubes-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/stlo.jpg",
          "@id": "https://www.climgo.fr/saint-loubes-chauffage-climatisation",
          "url": "https://www.climgo.fr/saint-loubes-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pl. de l'Hôtel de ville,",
            "addressLocality": "Saint-Loubès",
            "postalCode": "33450",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.91651153564453,
            "longitude": -0.42713022232055664
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