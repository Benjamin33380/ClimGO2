export const metadata = {
  title: "Chauffage, Climatisation et PAC à Canéjan",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Canéjan. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Canéjan",
    "climatisation Canéjan",
    "installation clim Canéjan",
    "chauffe-eau Canéjan",
    "pompe à chaleur Canéjan",
    "entretien clim Canéjan",
    "installateur RGE Canéjan",
    "chauffagiste Canéjan",
    "climatisation réversible Canéjan",
    "PAC air eau Canéjan",
    "PAC air air Canéjan",
    "chauffe-eau thermodynamique Canéjan",
    "dépannage chauffage Canéjan",
    "entretien pompe à chaleur Canéjan",
    "installateur clim Canéjan",
    "clim gainable Canéjan",
    "clim mural Canéjan",
    "économie énergie Canéjan",
    "artisan RGE Canéjan",
    "clim cassette Canéjan",
    "devis chauffage Canéjan",
    "devis climatisation Canéjan",
    "maintenance chauffage Canéjan",
    "solution thermique Canéjan",
    "installation RGE Canéjan",
    "confort thermique Canéjan",
    "entreprise chauffage Canéjan"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Canéjan - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Canéjan. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/zones-desservies/canejan",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/images/og-image-canejan.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Canéjan - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Canéjan - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Canéjan. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/images/og-image-canejan.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/zones-desservies/canejan"
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
          "image": "https://www.climgo.fr/images/og-image-canejan.jpg",
          "@id": "https://www.climgo.fr/zones-desservies/canejan",
          "url": "https://www.climgo.fr/zones-desservies/canejan",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. du Baron Haussmann",
            "addressLocality": "Canéjan",
            "postalCode": "33610",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.754,
            "longitude": -0.641
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