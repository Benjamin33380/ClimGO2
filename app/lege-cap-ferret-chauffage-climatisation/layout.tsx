export const metadata = {
  title: "Chauffage, Climatisation et PAC à Lège-Cap-Ferret",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lège-Cap-Ferret. Certifié RGE.",
  keywords: [
    "chauffage Lège-Cap-Ferret",
    "climatisation Lège-Cap-Ferret",
    "installation clim Lège-Cap-Ferret",
    "chauffe-eau Lège-Cap-Ferret",
    "pompe à chaleur Lège-Cap-Ferret",
    "entretien clim Lège-Cap-Ferret",
    "installateur RGE Lège-Cap-Ferret",
    "chauffagiste Lège-Cap-Ferret",
    "climatisation réversible Lège-Cap-Ferret",
    "PAC air eau Lège-Cap-Ferret",
    "PAC air air Lège-Cap-Ferret",
    "chauffe-eau thermodynamique Lège-Cap-Ferret",
    "dépannage chauffage Lège-Cap-Ferret",
    "entretien pompe à chaleur Lège-Cap-Ferret",
    "installateur clim Lège-Cap-Ferret",
    "clim gainable Lège-Cap-Ferret",
    "clim mural Lège-Cap-Ferret",
    "prix pompe a chaleur Lège-Cap-Ferret",
    "artisan RGE Lège-Cap-Ferret",
    "clim cassette Lège-Cap-Ferret",
    "devis chauffage Lège-Cap-Ferret",
    "devis climatisation Lège-Cap-Ferret",
    "maintenance chauffage Lège-Cap-Ferret",
    "solution thermique Lège-Cap-Ferret",
    "installation RGE Lège-Cap-Ferret",
    "confort thermique Lège-Cap-Ferret",
    "entreprise chauffage Lège-Cap-Ferret"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Lège-Cap-Ferret - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lège-Cap-Ferret. Certifié RGE.",
    url: "https://www.climgo.fr/lege-cap-ferret-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/lege.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Lège-Cap-Ferret - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Lège-Cap-Ferret - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lège-Cap-Ferret. Certifié RGE.",
    images: ["https://www.climgo.fr/villes/lege.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/lege-cap-ferret-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/lege.jpg",
          "@id": "https://www.climgo.fr/lege-cap-ferret-chauffage-climatisation",
          "url": "https://www.climgo.fr/leg-cap-ferret-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "79 Avenue de la Mairie",
            "addressLocality": "Lège-Cap-Ferret",
            "postalCode": "33950",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.795271,
            "longitude": -1.146957
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