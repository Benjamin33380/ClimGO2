export const metadata = {
  title: "Chauffage, Climatisation et PAC à Sanguinet - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Sanguinet. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Sanguinet",
    "climatisation Sanguinet",
    "installation clim Sanguinet",
    "chauffe-eau Sanguinet",
    "pompe à chaleur Sanguinet",
    "entretien clim Sanguinet",
    "installateur RGE Sanguinet",
    "chauffagiste Sanguinet",
    "climatisation réversible Sanguinet",
    "PAC air eau Sanguinet",
    "PAC air air Sanguinet",
    "chauffe-eau thermodynamique Sanguinet",
    "dépannage chauffage Sanguinet",
    "entretien pompe à chaleur Sanguinet",
    "installateur clim Sanguinet",
    "clim gainable Sanguinet",
    "clim mural Sanguinet",
    "économie énergie Sanguinet",
    "artisan RGE Sanguinet",
    "clim cassette Sanguinet",
    "devis chauffage Sanguinet",
    "devis climatisation Sanguinet",
    "maintenance chauffage Sanguinet",
    "solution thermique Sanguinet",
    "installation RGE Sanguinet",
    "confort thermique Sanguinet",
    "entreprise chauffage Sanguinet"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Sanguinet - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Sanguinet. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/sanguinet-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/sanguinet.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Sanguinet - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Sanguinet - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Sanguinet. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/sanguinet.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/sanguinet-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/sanguinet.jpg",
          "@id": "https://www.climgo.fr/sanguinet-chauffage-climatisation",
          "url": "https://www.climgo.fr/sanguinet-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Place de la Mairie",
            "addressLocality": "Sanguinet",
            "postalCode": "40460",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.4833984375,
            "longitude": -1.076384425163269
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