export const metadata = {
  title: "Chauffage, Climatisation et PAC à Cadaujac",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Cadaujac. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Cadaujac",
    "climatisation Cadaujac",
    "installation clim Cadaujac",
    "chauffe-eau Cadaujac",
    "pompe à chaleur Cadaujac",
    "entretien clim Cadaujac",
    "installateur RGE Cadaujac",
    "chauffagiste Cadaujac",
    "climatisation réversible Cadaujac",
    "PAC air eau Cadaujac",
    "PAC air air Cadaujac",
    "chauffe-eau thermodynamique Cadaujac",
    "dépannage chauffage Cadaujac",
    "entretien pompe à chaleur Cadaujac",
    "installateur clim Cadaujac",
    "clim gainable Cadaujac",
    "clim mural Cadaujac",
    "économie énergie Cadaujac",
    "artisan RGE Cadaujac",
    "clim cassette Cadaujac",
    "devis chauffage Cadaujac",
    "devis climatisation Cadaujac",
    "maintenance chauffage Cadaujac",
    "solution thermique Cadaujac",
    "installation RGE Cadaujac",
    "confort thermique Cadaujac",
    "entreprise chauffage Cadaujac"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Cadaujac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Cadaujac. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/cadaujac-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/Cadaujac.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Cadaujac - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Cadaujac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Cadaujac. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/Cadaujac.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/cadaujac-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/Cadaujac.jpg",
          "@id": "https://www.climgo.fr/cadaujac-chauffage-climatisation",
          "url": "https://www.climgo.fr/cadaujac-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3 Pl. de l'Église",
            "addressLocality": "Cadaujac",
            "postalCode": "33140",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.7544,
            "longitude": -0.5313
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