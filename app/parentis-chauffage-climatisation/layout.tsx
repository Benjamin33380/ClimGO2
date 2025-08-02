export const metadata = {
  title: "Chauffage, Climatisation et PAC à Parentis-en-Born - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Parentis-en-Born. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Parentis-en-Born",
    "climatisation Parentis-en-Born",
    "installation clim Parentis-en-Born",
    "chauffe-eau Parentis-en-Born",
    "pompe à chaleur Parentis-en-Born",
    "entretien clim Parentis-en-Born",
    "installateur RGE Parentis-en-Born",
    "chauffagiste Parentis-en-Born",
    "climatisation réversible Parentis-en-Born",
    "PAC air eau Parentis-en-Born",
    "PAC air air Parentis-en-Born",
    "chauffe-eau thermodynamique Parentis-en-Born",
    "dépannage chauffage Parentis-en-Born",
    "entretien pompe à chaleur Parentis-en-Born",
    "installateur clim Parentis-en-Born",
    "clim gainable Parentis-en-Born",
    "clim mural Parentis-en-Born",
    "économie énergie Parentis-en-Born",
    "artisan RGE Parentis-en-Born",
    "clim cassette Parentis-en-Born",
    "devis chauffage Parentis-en-Born",
    "devis climatisation Parentis-en-Born",
    "maintenance chauffage Parentis-en-Born",
    "solution thermique Parentis-en-Born",
    "installation RGE Parentis-en-Born",
    "confort thermique Parentis-en-Born",
    "entreprise chauffage Parentis-en-Born"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Parentis-en-Born - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Parentis-en-Born. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/parentis-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/parentis.jpg.webp",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Parentis-en-Born - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Parentis-en-Born - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Parentis-en-Born. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/parentis.jpg.webp"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/parentis-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/parentis.jpg.webp",
          "@id": "https://www.climgo.fr/parentis-chauffage-climatisation",
          "url": "https://www.climgo.fr/parentis-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "258 Av. Maréchal Foch",
            "addressLocality": "Parentis-en-Born",
            "postalCode": "40160",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.355377197265625,
            "longitude": -1.0738232135772705
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