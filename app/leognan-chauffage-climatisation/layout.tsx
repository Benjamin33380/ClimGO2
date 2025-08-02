export const metadata = {
  title: "Chauffage, Climatisation et PAC à Léognan",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Léognan. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Léognan",
    "climatisation Léognan",
    "installation clim Léognan",
    "chauffe-eau Léognan",
    "pompe à chaleur Léognan",
    "entretien clim Léognan",
    "installateur RGE Léognan",
    "chauffagiste Léognan",
    "climatisation réversible Léognan",
    "PAC air eau Léognan",
    "PAC air air Léognan",
    "chauffe-eau thermodynamique Léognan",
    "dépannage chauffage Léognan",
    "entretien pompe à chaleur Léognan",
    "installateur clim Léognan",
    "clim gainable Léognan",
    "clim mural Léognan",
    "économie énergie Léognan",
    "artisan RGE Léognan",
    "clim cassette Léognan",
    "devis chauffage Léognan",
    "devis climatisation Léognan",
    "maintenance chauffage Léognan",
    "solution thermique Léognan",
    "installation RGE Léognan",
    "confort thermique Léognan",
    "entreprise chauffage Léognan"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Léognan - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Léognan. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/leognan-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/leo.webp",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Léognan - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Léognan - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Léognan. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/leo.webp"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/leognan-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/leo.webp",
          "@id": "https://www.climgo.fr/leognan-chauffage-climatisation",
          "url": "https://www.climgo.fr/leognan-chauffage-climatisation",
          "telephone": "+33 7 66 46 00 08",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "11 Cr du Maréchal de Lattre de Tassigny",
            "addressLocality": "Léognan",
            "postalCode": "33850",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.7282113,
            "longitude": -0.5987226
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