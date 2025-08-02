export const metadata = {
  title: "Chauffage, Climatisation et PAC à Lanton",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lanton. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Lanton",
    "climatisation Lanton",
    "installation clim Lanton",
    "chauffe-eau Lanton",
    "pompe à chaleur Lanton",
    "entretien clim Lanton",
    "installateur RGE Lanton",
    "chauffagiste Lanton",
    "climatisation réversible Lanton",
    "PAC air eau Lanton",
    "PAC air air Lanton",
    "chauffe-eau thermodynamique Lanton",
    "dépannage chauffage Lanton",
    "entretien pompe à chaleur Lanton",
    "installateur clim Lanton",
    "clim gainable Lanton",
    "clim mural Lanton",
    "prix pompe a chaleur Lanton",
    "artisan RGE Lanton",
    "clim cassette Lanton",
    "devis chauffage Lanton",
    "devis climatisation Lanton",
    "maintenance chauffage Lanton",
    "solution thermique Lanton",
    "installation RGE Lanton",
    "confort thermique Lanton",
    "entreprise chauffage Lanton"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Lanton - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lanton. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/lanton-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/lanton.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Lanton - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Lanton - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Lanton. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/lanton.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/lanton-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/lanton.jpg",
          "@id": "https://www.climgo.fr/lanton-chauffage-climatisation",
          "url": "https://www.climgo.fr/lanton-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. de la Libération",
            "addressLocality": "Lanton",
            "postalCode": "33138",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.7022051,
            "longitude": -1.0355407
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