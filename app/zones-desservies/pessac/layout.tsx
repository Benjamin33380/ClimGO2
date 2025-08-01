export const metadata = {
  title: "Chauffage, Climatisation et PAC à Pessac",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Pessac. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Pessac",
    "climatisation Pessac",
    "installation clim Pessac",
    "chauffe-eau Pessac",
    "pompe à chaleur Pessac",
    "entretien clim Pessac",
    "installateur RGE Pessac",
    "chauffagiste Pessac",
    "climatisation réversible Pessac",
    "PAC air eau Pessac",
    "PAC air air Pessac",
    "chauffe-eau thermodynamique Pessac",
    "dépannage chauffage Pessac",
    "entretien pompe à chaleur Pessac",
    "installateur clim Pessac",
    "clim gainable Pessac",
    "clim mural Pessac",
    "économie énergie Pessac",
    "artisan RGE Pessac",
    "clim cassette Pessac",
    "devis chauffage Pessac",
    "devis climatisation Pessac",
    "maintenance chauffage Pessac",
    "solution thermique Pessac",
    "installation RGE Pessac",
    "confort thermique Pessac",
    "entreprise chauffage Pessac"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Pessac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Pessac. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/zones-desservies/pessac",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/images/og-image-pessac.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Pessac - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Pessac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Pessac. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/images/og-image-pessac.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/zones-desservies/pessac"
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
          "image": "https://www.climgo.fr/images/og-image-pessac.jpg",
          "@id": "https://www.climgo.fr/zones-desservies/pessac",
          "url": "https://www.climgo.fr/zones-desservies/pessac",
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
            "latitude": 44.7943,
            "longitude": -0.6333
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