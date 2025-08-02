export const metadata = {
  title: "Chauffage, Climatisation et PAC à Talence",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Talence. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Talence",
    "climatisation Talence",
    "installation clim Talence",
    "chauffe-eau Talence",
    "pompe à chaleur Talence",
    "entretien clim Talence",
    "installateur RGE Talence",
    "chauffagiste Talence",
    "climatisation réversible Talence",
    "PAC air eau Talence",
    "PAC air air Talence",
    "chauffe-eau thermodynamique Talence",
    "dépannage chauffage Talence",
    "entretien pompe à chaleur Talence",
    "installateur clim Talence",
    "clim gainable Talence",
    "clim mural Talence",
    "économie énergie Talence",
    "artisan RGE Talence",
    "clim cassette Talence",
    "devis chauffage Talence",
    "devis climatisation Talence",
    "maintenance chauffage Talence",
    "solution thermique Talence",
    "installation RGE Talence",
    "confort thermique Talence",
    "entreprise chauffage Talence"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Talence - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Talence. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/talence-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/talence.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Talence - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Talence - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Talence. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/talence.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/talence-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/talence.jpg",
          "@id": "https://www.climgo.fr/talence-chauffage-climatisation",
          "url": "https://www.climgo.fr/talence-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rue du Professeur Arnozan",
            "addressLocality": "Talence",
            "postalCode": "33400",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.8087043762207,
            "longitude": -0.587873637676239
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