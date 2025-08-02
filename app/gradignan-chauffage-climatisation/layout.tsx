export const metadata = {
  title: "Chauffage, Climatisation et PAC à Gradignan",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Gradignan. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Gradignan",
    "climatisation Gradignan",
    "installation clim Gradignan",
    "chauffe-eau Gradignan",
    "pompe à chaleur Gradignan",
    "entretien clim Gradignan",
    "installateur RGE Gradignan",
    "chauffagiste Gradignan",
    "climatisation réversible Gradignan",
    "PAC air eau Gradignan",
    "PAC air air Gradignan",
    "chauffe-eau thermodynamique Gradignan",
    "dépannage chauffage Gradignan",
    "entretien pompe à chaleur Gradignan",
    "installateur clim Gradignan",
    "clim gainable Gradignan",
    "clim mural Gradignan",
    "économie énergie Gradignan",
    "artisan RGE Gradignan",
    "clim cassette Gradignan",
    "devis chauffage Gradignan",
    "devis climatisation Gradignan",
    "maintenance chauffage Gradignan",
    "solution thermique Gradignan",
    "installation RGE Gradignan",
    "confort thermique Gradignan",
    "entreprise chauffage Gradignan"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Gradignan - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Gradignan. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/gradignan-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/gradignan.jpg.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Gradignan - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Gradignan - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Gradignan. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/gradignan.jpg.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/gradignan-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/gradignan.jpg.jpg",
          "@id": "https://www.climgo.fr/gradignan-chauffage-climatisation",
          "url": "https://www.climgo.fr/gradignan-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "All. Prom. Gaston Rodrigues",
            "addressLocality": "Gradignan",
            "postalCode": "33170",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.7726,
            "longitude": -0.6139
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