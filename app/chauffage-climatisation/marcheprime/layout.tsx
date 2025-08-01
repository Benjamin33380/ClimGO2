export const metadata = {
  title: "Chauffage, Climatisation et PAC à Marcheprime - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Marcheprime. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Marcheprieme",
    "climatisation Marcheprime",
    "installation clim Marcheprime",
    "chauffe-eau Marcheprime",
    "pompe à chaleur Marcheprime",
    "entretien clim Marcheprime",
    "installateur RGE Marcheprime",
    "chauffagiste Marcheprime",
    "climatisation réversible Marcheprime",
    "PAC air eau Marcheprime",
    "PAC air air Marcheprime",
    "chauffe-eau thermodynamique Marcheprime",
    "dépannage chauffage Marcheprime",
    "entretien pompe à chaleur Marcheprime",
    "installateur clim Marcheprime",
    "clim gainable Marcheprime",
    "clim mural Marcheprime",
    "économie énergie Marcheprime",
    "artisan RGE Marcheprime",
    "clim cassette Marcheprime",
    "devis chauffage Marcheprime",
    "devis climatisation Marcheprime",
    "maintenance chauffage Marcheprime",
    "solution thermique Marcheprime",
    "installation RGE Marcheprime",
    "confort thermique Marcheprime",
    "entreprise chauffage Marcheprime"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Marcheprime - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Marcheprime. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/chauffage-climatisation/marcheprime",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/images/og-image-marcheprime.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Marcheprime - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Marcheprime - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Marcheprime. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/images/og-image-marcheprime.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/zones-desservies/marcheprime"
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
          "image": "https://www.climgo.fr/images/og-image-marcheprime.jpg",
          "@id": "https://www.climgo.fr/zones-desservies/marcheprime",
          "url": "https://www.climgo.fr/zones-desservies/marcheprime",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "28 rue de Cantelaude",
            "addressLocality": "Marcheprime",
            "postalCode": "33380",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.6931,
            "longitude": -0.9555
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