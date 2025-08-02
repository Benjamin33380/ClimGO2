export const metadata = {
  title: "Chauffage, Climatisation et PAC à Saint-Selve",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Selve. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Saint-Selve",
    "climatisation Saint-Selve",
    "installation clim Saint-Selve",
    "chauffe-eau Saint-Selve",
    "pompe à chaleur Saint-Selve",
    "entretien clim Saint-Selve",
    "installateur RGE Saint-Selve",
    "chauffagiste Saint-Selve",
    "climatisation réversible Saint-Selve",
    "PAC air eau Saint-Selve",
    "PAC air air Saint-Selve",
    "chauffe-eau thermodynamique Saint-Selve",
    "dépannage chauffage Saint-Selve",
    "entretien pompe à chaleur Saint-Selve",
    "installateur clim Saint-Selve",
    "clim gainable Saint-Selve",
    "clim mural Saint-Selve",
    "économie énergie Saint-Selve",
    "artisan RGE Saint-Selve",
    "clim cassette Saint-Selve",
    "devis chauffage Saint-Selve",
    "devis climatisation Saint-Selve",
    "maintenance chauffage Saint-Selve",
    "solution thermique Saint-Selve",
    "installation RGE Saint-Selve",
    "confort thermique Saint-Selve",
    "entreprise chauffage Saint-Selve"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Saint-Selve - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Selve. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/saint-selve-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/ss.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Saint-Selve - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Saint-Selve - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Selve. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/ss.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/saint-selve-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/saint-selve-chauffage-climatisation",
          "@id": "https://www.climgo.fr/saint-selve-chauffage-climatisation",
          "url": "https://www.climgo.fr/saint-selve-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1 Pl. Saint Antoine",
            "addressLocality": "Saint-Selve",
            "postalCode": "33650",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.671579,
            "longitude": -0.48091
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