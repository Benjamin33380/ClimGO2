export const metadata = {
  title: "Chauffage, Climatisation et PAC à Bordeaux",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bordeaux. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Bordeaux",
    "climatisation Bordeaux",
    "installation clim Bordeaux",
    "chauffe-eau Bordeaux",
    "pompe à chaleur Bordeaux",
    "entretien clim Bordeaux",
    "installateur RGE Bordeaux",
    "chauffagiste Bordeaux",
    "climatisation réversible Bordeaux",
    "PAC air eau Bordeaux",
    "PAC air air Bordeaux",
    "chauffe-eau thermodynamique Bordeaux",
    "dépannage chauffage Bordeaux",
    "entretien pompe à chaleur Bordeaux",
    "installateur clim Bordeaux",
    "clim gainable Bordeaux",
    "clim mural Bordeaux",
    "économie énergie Bordeaux",
    "artisan RGE Bordeaux",
    "clim cassette Bordeaux",
    "devis chauffage Bordeaux",
    "devis climatisation Bordeaux",
    "maintenance chauffage Bordeaux",
    "solution thermique Bordeaux",
    "installation RGE Bordeaux",
    "confort thermique Bordeaux",
    "entreprise chauffage Bordeaux"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Bordeaux - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bordeaux. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/zones-desservies/bordeaux",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/images/og-image-bordeaux.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Bordeaux - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Bordeaux - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bordeaux. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/images/og-image-bordeaux.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/zones-desservies/bordeaux"
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
          "image": "https://www.climgo.fr/images/og-image-bordeaux.jpg",
          "@id": "https://www.climgo.fr/zones-desservies/bordeaux",
          "url": "https://www.climgo.fr/zones-desservies/bordeaux",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Place Pey Berland",
            "addressLocality": "Bordeaux",
            "postalCode": "33000",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.837896,
            "longitude": -0.579531
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