export const metadata = {
  title: "Chauffage, Climatisation et PAC à Mérignac",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Mérignac. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Mérignac",
    "climatisation Mérignac",
    "installation clim Mérignac",
    "chauffe-eau Mérignac",
    "pompe à chaleur Mérignac",
    "entretien clim Mérignac",
    "installateur RGE Mérignac",
    "chauffagiste Mérignac",
    "climatisation réversible Mérignac",
    "PAC air eau Mérignac",
    "PAC air air Mérignac",
    "chauffe-eau thermodynamique Mérignac",
    "dépannage chauffage Mérignac",
    "entretien pompe à chaleur Mérignac",
    "installateur clim Mérignac",
    "clim gainable Mérignac",
    "clim mural Mérignac",
    "économie énergie Mérignac",
    "artisan RGE Mérignac",
    "clim cassette Mérignac",
    "devis chauffage Mérignac",
    "devis climatisation Mérignac",
    "maintenance chauffage Mérignac",
    "solution thermique Mérignac",
    "installation RGE Mérignac",
    "confort thermique Mérignac",
    "entreprise chauffage Mérignac"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Mérignac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Mérignac. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/zones-desservies/merignac",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/images/og-image-merignac.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Mérignac - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Mérignac - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Mérignac. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/images/og-image-merignac.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/zones-desservies/merignac"
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
          "image": "https://www.climgo.fr/images/og-image-merignac.jpg",
          "@id": "https://www.climgo.fr/zones-desservies/merignac",
          "url": "https://www.climgo.fr/zones-desservies/merignac",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "60 Avenue du Maréchal de Lattre de Tassigny",
            "addressLocality": "Mérignac",
            "postalCode": "33700",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.8307,
            "longitude": -0.6337
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