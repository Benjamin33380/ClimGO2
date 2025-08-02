export const metadata = {
  title: "Chauffage, Climatisation et PAC à Villenave-d'Ornon",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Villenave-d'Ornon. Certifié RGE.",
  keywords: [
    "chauffage Villenave-d'Ornon",
    "climatisation Villenave-d'Ornon",
    "installation clim Villenave-d'Ornon",
    "chauffe-eau Villenave-d'Ornon",
    "pompe à chaleur Villenave-d'Ornon",
    "entretien clim Villenave-d'Ornon",
    "installateur RGE Villenave-d'Ornon",
    "chauffagiste Villenave-d'Ornon",
    "climatisation réversible Villenave-d'Ornon",
    "PAC air eau Villenave-d'Ornon",
    "PAC air air Villenave-d'Ornon",
    "chauffe-eau thermodynamique Villenave-d'Ornon",
    "dépannage chauffage Villenave-d'Ornon",
    "entretien pompe à chaleur Villenave-d'Ornon",
    "installateur clim Villenave-d'Ornon",
    "clim gainable Villenave-d'Ornon",
    "clim mural Villenave-d'Ornon",
    "économie énergie Villenave-d'Ornon",
    "artisan RGE Villenave-d'Ornon",
    "clim cassette Villenave-d'Ornon",
    "devis chauffage Villenave-d'Ornon",
    "devis climatisation Villenave-d'Ornon",
    "maintenance chauffage Villenave-d'Ornon",
    "solution thermique Villenave-d'Ornon",
    "installation RGE Villenave-d'Ornon",
    "confort thermique Villenave-d'Ornon",
    "entreprise chauffage Villenave-d'Ornon"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Villenave-d'Ornon - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Villenave-d'Ornon. Certifié RGE.",
    url: "https://www.climgo.fr/villenave-d-ornon-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/villenave-d-ornon.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Villenave-d'Ornon - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Villenave-d'Ornon - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Villenave-d'Ornon. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/villenave-d-ornon.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/villenave-d-ornon-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/villenave-d-ornon.jpg",
          "@id": "https://www.climgo.fr/villenave-d-ornon-chauffage-climatisation",
          "url": "https://www.climgo.fr/villenave-d-ornon-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Place Ferdinand Buisson",
            "addressLocality": "Villenave-d'Ornon",
            "postalCode": "33140",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.782535552978516,
            "longitude": -0.570515513420105
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