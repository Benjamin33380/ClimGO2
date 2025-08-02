export const metadata = {
  title: "Chauffage, Climatisation et PAC à Bègles",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bègles. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Bègles",
    "climatisation Bègles",
    "installation clim Bègles",
    "chauffe-eau Bègles",
    "pompe à chaleur Bègles",
    "entretien clim Bègles",
    "installateur RGE Bègles",
    "chauffagiste Bègles",
    "climatisation réversible Bègles",
    "PAC air eau Bègles",
    "PAC air air Bègles",
    "chauffe-eau thermodynamique Bègles",
    "dépannage chauffage Bègles",
    "entretien pompe à chaleur Bègles",
    "installateur clim Bègles",
    "clim gainable Bègles",
    "clim mural Bègles",
    "économie énergie Bègles",
    "artisan RGE Bègles",
    "clim cassette Bègles",
    "devis chauffage Bègles",
    "devis climatisation Bègles",
    "maintenance chauffage Bègles",
    "solution thermique Bègles",
    "installation RGE Bègles",
    "confort thermique Bègles",
    "entreprise chauffage Bègles"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Bègles - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bègles. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/begles-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/begles.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Bègles - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Bègles - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Bègles. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/begles.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/begles-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/begles.jpg",
          "@id": "https://www.climgo.fr/begles-chauffage-climatisation",
          "url": "https://www.climgo.fr/begles-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rue Calixte Camelle",
            "addressLocality": "Bègles",
            "postalCode": "33130",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.8031084,
            "longitude": -0.5492643
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