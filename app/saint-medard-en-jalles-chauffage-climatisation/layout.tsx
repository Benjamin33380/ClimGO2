export const metadata = {
  title: "Chauffage, Climatisation et PAC à Saint-Médard-en-Jalles",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Médard-en-Jalles. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Saint-Médard-en-Jalles",
    "climatisation Saint-Médard-en-Jalles",
    "installation clim Saint-Médard-en-Jalles",
    "chauffe-eau Saint-Médard-en-Jalles",
    "pompe à chaleur Saint-Médard-en-Jalles",
    "entretien clim Saint-Médard-en-Jalles",
    "installateur RGE Saint-Médard-en-Jalles",
    "chauffagiste Saint-Médard-en-Jalles",
    "climatisation réversible Saint-Médard-en-Jalles",
    "PAC air eau Saint-Médard-en-Jalles",
    "PAC air air Saint-Médard-en-Jalles",
    "chauffe-eau thermodynamique Saint-Médard-en-Jalles",
    "dépannage chauffage Saint-Médard-en-Jalles",
    "entretien pompe à chaleur Saint-Médard-en-Jalles",
    "installateur clim Saint-Médard-en-Jalles",
    "clim gainable Saint-Médard-en-Jalles",
    "clim mural Saint-Médard-en-Jalles",
    "économie énergie Saint-Médard-en-Jalles",
    "artisan RGE Saint-Médard-en-Jalles",
    "clim cassette Saint-Médard-en-Jalles",
    "devis chauffage Saint-Médard-en-Jalles",
    "devis climatisation Saint-Médard-en-Jalles",
    "maintenance chauffage Saint-Médard-en-Jalles",
    "solution thermique Saint-Médard-en-Jalles",
    "installation RGE Saint-Médard-en-Jalles",
    "confort thermique Saint-Médard-en-Jalles",
    "entreprise chauffage Saint-Médard-en-Jalles"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Saint-Médard-en-Jalles - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Médard-en-Jalles. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/saint-medard-en-jalles-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/smej.webp",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Saint-Médard-en-Jalles - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Saint-Médard-en-Jalles - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Médard-en-Jalles. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/smej.webp"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/saint-medard-en-jalles-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/smej.webp",
          "@id": "https://www.climgo.fr/saint-medard-en-jalles-chauffage-climatisation",
          "url": "https://www.climgo.fr/saint-medard-en-jalles-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "6 Pl. de l'Hôtel de ville",
            "addressLocality": "Saint-Médard-en-Jalles",
            "postalCode": "33160",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.895660400390625,
            "longitude": -0.7170525193214417
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