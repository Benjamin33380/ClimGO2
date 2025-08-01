export const metadata = {
  title: "Chauffage, Climatisation et PAC à Audenge",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Audenge. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Audenge",
    "climatisation Audenge",
    "installation clim Audenge",
    "chauffe-eau Audenge",
    "pompe à chaleur Audenge",
    "entretien clim Audenge",
    "installateur RGE Audenge",
    "chauffagiste Audenge",
    "climatisation réversible Audenge",
    "PAC air eau Audenge",
    "PAC air air Audenge",
    "chauffe-eau thermodynamique Audenge",
    "dépannage chauffage Audenge",
    "entretien pompe à chaleur Audenge",
    "installateur clim Audenge",
    "clim gainable Audenge",
    "clim mural Audenge",
    "économie énergie Audenge",
    "artisan RGE Audenge",
    "clim cassette Audenge",
    "devis chauffage Audenge",
    "devis climatisation Audenge",
    "maintenance chauffage Audenge",
    "solution thermique Audenge",
    "installation RGE Audenge",
    "confort thermique Audenge",
    "entreprise chauffage Audenge"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Audenge - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Audenge. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/zones-desservies/audenge",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/images/og-image-audenge.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Audenge - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Audenge - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Audenge. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/images/og-image-audenge.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/zones-desservies/audenge"
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
          "image": "https://www.climgo.fr/images/og-image-audenge.jpg",
          "@id": "https://www.climgo.fr/zones-desservies/audenge",
          "url": "https://www.climgo.fr/zones-desservies/audenge",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Place Laurent-Barrière",
            "addressLocality": "Audenge",
            "postalCode": "33980",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.6843,
            "longitude": -1.0133
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