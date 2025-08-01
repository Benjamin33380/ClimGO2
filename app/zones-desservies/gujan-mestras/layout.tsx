export const metadata = {
  title: "Chauffage, Climatisation et PAC à Gujan-Mestras",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Gujan-Mestras. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Gujan-Mestras",
    "climatisation Gujan-Mestras",
    "installation clim Gujan-Mestras",
    "chauffe-eau Gujan-Mestras",
    "pompe à chaleur Gujan-Mestras",
    "entretien clim Gujan-Mestras",
    "installateur RGE Gujan-Mestras",
    "chauffagiste Gujan-Mestras",
    "climatisation réversible Gujan-Mestras",
    "PAC air eau Gujan-Mestras",
    "PAC air air Gujan-Mestras",
    "chauffe-eau thermodynamique Gujan-Mestras",
    "dépannage chauffage Gujan-Mestras",
    "entretien pompe à chaleur Gujan-Mestras",
    "installateur clim Gujan-Mestras",
    "clim gainable Gujan-Mestras",
    "clim mural Gujan-Mestras",
    "prix pompe a chaleur Gujan-Mestras",
    "artisan RGE Gujan-Mestras",
    "clim cassette Gujan-Mestras",
    "devis chauffage Gujan-Mestras",
    "devis climatisation Gujan-Mestras",
    "maintenance chauffage Gujan-Mestras",
    "solution thermique Gujan-Mestras",
    "installation RGE Gujan-Mestras",
    "confort thermique Gujan-Mestras",
    "entreprise chauffage Gujan-Mestras"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Gujan-Mestras - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Gujan-Mestras. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/zones-desservies/gujan-mestras",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/images/og-image-gujan-mestras.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Gujan-Mestras - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Gujan-Mestras - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Gujan-Mestras. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/images/og-image-gujan-mestras.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/zones-desservies/gujan-mestras"
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
          "image": "https://www.climgo.fr/images/og-image-gujan-mestras.jpg",
          "@id": "https://www.climgo.fr/zones-desservies/gujan-mestras",
          "url": "https://www.climgo.fr/zones-desservies/gujan-mestras",
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
            "latitude": 44.6526,
            "longitude": -1.0211
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