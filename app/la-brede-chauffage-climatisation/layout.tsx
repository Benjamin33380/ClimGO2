export const metadata = {
  title: "Chauffage, Climatisation et PAC à La Brède",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à La Brède. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage La Brède",
    "climatisation La Brède",
    "installation clim La Brède",
    "chauffe-eau La Brède",
    "pompe à chaleur La Brède",
    "entretien clim La Brède",
    "installateur RGE La Brède",
    "chauffagiste La Brède",
    "climatisation réversible La Brède",
    "PAC air eau La Brède",
    "PAC air air La Brède",
    "chauffe-eau thermodynamique La Brède",
    "dépannage chauffage La Brède",
    "entretien pompe à chaleur La Brède",
    "installateur clim La Brède",
    "clim gainable La Brède",
    "clim mural La Brède",
    "économie énergie La Brède",
    "artisan RGE La Brède",
    "clim cassette La Brède",
    "devis chauffage La Brède",
    "devis climatisation La Brède",
    "maintenance chauffage La Brède",
    "solution thermique La Brède",
    "installation RGE La Brède",
    "confort thermique La Brède",
    "entreprise chauffage La Brède"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à La Brède - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à La Brède. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/la-brede-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/brede.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à La Brède - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à La Brède - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à La Brède. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/brede.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/la-brede-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/brede.jpg",
          "@id": "https://www.climgo.fr/la-brede-chauffage-climatisation",
          "url": "https://www.climgo.fr/la-brede-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1 Pl. Saint-Jean d'Etampes",
            "addressLocality": "La Brède",
            "postalCode": "33650",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.68149948120117,
            "longitude": -0.5272435545921326
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