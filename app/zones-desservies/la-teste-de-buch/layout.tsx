export const metadata = {
  title: "Chauffage, Climatisation et PAC à La Teste-de-Buch",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à La Teste-de-Buch. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage La Teste-de-Buch",
    "climatisation La Teste-de-Buch",
    "installation clim La Teste-de-Buch",
    "chauffe-eau La Teste-de-Buch",
    "pompe à chaleur La Teste-de-Buch",
    "entretien clim La Teste-de-Buch",
    "installateur RGE La Teste-de-Buch",
    "chauffagiste La Teste-de-Buch",
    "climatisation réversible La Teste-de-Buch",
    "PAC air eau La Teste-de-Buch",
    "PAC air air La Teste-de-Buch",
    "chauffe-eau thermodynamique La Teste-de-Buch",
    "dépannage chauffage La Teste-de-Buch",
    "entretien pompe à chaleur La Teste-de-Buch",
    "installateur clim La Teste-de-Buch",
    "clim gainable La Teste-de-Buch",
    "clim mural La Teste-de-Buch",
    "prix pompe a chaleur La Teste-de-Buch",
    "artisan RGE La Teste-de-Buch",
    "clim cassette La Teste-de-Buch",
    "devis chauffage La Teste-de-Buch",
    "devis climatisation La Teste-de-Buch",
    "maintenance chauffage La Teste-de-Buch",
    "solution thermique La Teste-de-Buch",
    "installation RGE La Teste-de-Buch",
    "confort thermique La Teste-de-Buch",
    "entreprise chauffage La Teste-de-Buch"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à La Teste-de-Buch - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à La Teste-de-Buch. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/zones-desservies/la-teste-de-buch",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/images/og-image-la-teste-de-buch.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à La Teste-de-Buch - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à La Teste-de-Buch - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à La Teste-de-Buch. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/images/og-image-la-teste-de-buch.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/zones-desservies/la-teste-de-buch"
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
          "image": "https://www.climgo.fr/images/og-image-la-teste-de-buch.jpg",
          "@id": "https://www.climgo.fr/zones-desservies/la-teste-de-buch",
          "url": "https://www.climgo.fr/zones-desservies/la-teste-de-buch",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Place Jean Hameau",
            "addressLocality": "La Teste-de-Buch",
            "postalCode": "33260",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.6255,
            "longitude": -1.1439
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