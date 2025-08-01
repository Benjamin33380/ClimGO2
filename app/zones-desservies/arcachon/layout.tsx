export const metadata = {
  title: "Chauffage, Climatisation et PAC à Arcachon",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Arcachon. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Arcachon",
    "climatisation Arcachon",
    "installation clim Arcachon",
    "chauffe-eau Arcachon",
    "pompe à chaleur Arcachon",
    "entretien clim Arcachon",
    "installateur RGE Arcachon",
    "chauffagiste Arcachon",
    "climatisation réversible Arcachon",
    "PAC air eau Arcachon",
    "PAC air air Arcachon",
    "chauffe-eau thermodynamique Arcachon",
    "dépannage chauffage Arcachon",
    "entretien pompe à chaleur Arcachon",
    "installateur clim Arcachon",
    "clim gainable Arcachon",
    "clim mural Arcachon",
    "économie énergie Arcachon",
    "artisan RGE Arcachon",
    "clim cassette Arcachon",
    "devis chauffage Arcachon",
    "devis climatisation Arcachon",
    "maintenance chauffage Arcachon",
    "solution thermique Arcachon",
    "installation RGE Arcachon",
    "confort thermique Arcachon",
    "entreprise chauffage Arcachon"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Arcachon - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Arcachon. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/zones-desservies/arcachon",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/images/og-image-arcachon.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Arcachon - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Arcachon - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Arcachon. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/images/og-image-arcachon.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/zones-desservies/arcachon"
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
          "image": "https://www.climgo.fr/images/og-image-arcachon.jpg",
          "@id": "https://www.climgo.fr/zones-desservies/arcachon",
          "url": "https://www.climgo.fr/zones-desservies/arcachon",
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
            "latitude": 44.6583,
            "longitude": -1.1696
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