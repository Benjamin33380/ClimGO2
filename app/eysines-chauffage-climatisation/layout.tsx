export const metadata = {
  title: "Chauffage, Climatisation et PAC à Eysines",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Eysines. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Eysines",
    "climatisation Eysines",
    "installation clim Eysines",
    "chauffe-eau Eysines",
    "pompe à chaleur Eysines",
    "entretien clim Eysines",
    "installateur RGE Eysines",
    "chauffagiste Eysines",
    "climatisation réversible Eysines",
    "PAC air eau Eysines",
    "PAC air air Eysines",
    "chauffe-eau thermodynamique Eysines",
    "dépannage chauffage Eysines",
    "entretien pompe à chaleur Eysines",
    "installateur clim Eysines",
    "clim gainable Eysines",
    "clim mural Eysines",
    "économie énergie Eysines",
    "artisan RGE Eysines",
    "clim cassette Eysines",
    "devis chauffage Eysines",
    "devis climatisation Eysines",
    "maintenance chauffage Eysines",
    "solution thermique Eysines",
    "installation RGE Eysines",
    "confort thermique Eysines",
    "entreprise chauffage Eysines"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Eysines - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Eysines. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/eysines-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/eys.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Eysines - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Eysines - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Eysines. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/eys.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/eysines-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/eys.jpg",
          "@id": "https://www.climgo.fr/eysines-chauffage-climatisation",
          "url": "https://www.climgo.fr/eysines-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rue de l'Église",
            "addressLocality": "Eysines",
            "postalCode": "33320",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.8853564,
            "longitude": -0.6474612
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