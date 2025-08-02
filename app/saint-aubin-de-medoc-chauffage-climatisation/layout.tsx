export const metadata = {
  title: "Chauffage, Climatisation et PAC à Saint-Aubin-de-Médoc",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Aubin-de-Médoc. Certifié RGE.",
  keywords: [
    "chauffage Saint-Aubin-de-Médoc",
    "climatisation Saint-Aubin-de-Médoc",
    "installation clim Saint-Aubin-de-Médoc",
    "chauffe-eau Saint-Aubin-de-Médoc",
    "pompe à chaleur Saint-Aubin-de-Médoc",
    "entretien clim Saint-Aubin-de-Médoc",
    "installateur RGE Saint-Aubin-de-Médoc",
    "chauffagiste Saint-Aubin-de-Médoc",
    "climatisation réversible Saint-Aubin-de-Médoc",
    "PAC air eau Saint-Aubin-de-Médoc",
    "PAC air air Saint-Aubin-de-Médoc",
    "chauffe-eau thermodynamique Saint-Aubin-de-Médoc",
    "dépannage chauffage Saint-Aubin-de-Médoc",
    "entretien pompe à chaleur Saint-Aubin-de-Médoc",
    "installateur clim Saint-Aubin-de-Médoc",
    "clim gainable Saint-Aubin-de-Médoc",
    "clim mural Saint-Aubin-de-Médoc",
    "économie énergie Saint-Aubin-de-Médoc",
    "artisan RGE Saint-Aubin-de-Médoc",
    "clim cassette Saint-Aubin-de-Médoc",
    "devis chauffage Saint-Aubin-de-Médoc",
    "devis climatisation Saint-Aubin-de-Médoc",
    "maintenance chauffage Saint-Aubin-de-Médoc",
    "solution thermique Saint-Aubin-de-Médoc",
    "installation RGE Saint-Aubin-de-Médoc",
    "confort thermique Saint-Aubin-de-Médoc",
    "entreprise chauffage Saint-Aubin-de-Médoc"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Saint-Aubin-de-Médoc - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Aubin-de-Médoc. Certifié RGE.",
    url: "https://www.climgo.fr/saint-aubin-de-medoc-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/sadm.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Saint-Aubin-de-Médoc - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Saint-Aubin-de-Médoc - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Saint-Aubin-de-Médoc. Certifié RGE.",
    images: ["https://www.climgo.fr/villes/sadm.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/saint-aubin-de-medoc-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/sadm.jpg",
          "@id": "https://www.climgo.fr/saint-aubin-de-medoc-chauffage-climatisation",
          "url": "https://www.climgo.fr/saint-aubin-de-medoc-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Route de Joli Bois",
            "addressLocality": "Saint-Aubin-de-Médoc",
            "postalCode": "33160",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.9158388,
            "longitude": -0.7220542
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