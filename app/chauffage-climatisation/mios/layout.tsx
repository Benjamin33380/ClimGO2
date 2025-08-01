export const metadata = {
  title: "Chauffage, Climatisation et PAC à Mios - ClimGO",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Mios. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Mios",
    "climatisation Mios",
    "installation clim Mios",
    "chauffe-eau Mios",
    "pompe à chaleur Mios",
    "entretien clim Mios",
    "installateur RGE Mios",
    "chauffagiste Mios",
    "climatisation réversible Mios",
    "PAC air eau Mios",
    "PAC air air Mios",
    "chauffe-eau thermodynamique Mios",
    "dépannage chauffage Mios",
    "entretien pompe à chaleur Mios",
    "installateur clim Mios",
    "clim gainable Mios",
    "clim mural Mios",
    "économie énergie Mios",
    "artisan RGE Mios",
    "clim cassette Mios",
    "devis chauffage Mios",
    "devis climatisation Mios",
    "maintenance chauffage Mios",
    "solution thermique Mios",
    "installation RGE Mios",
    "confort thermique Mios",
    "entreprise chauffage Mios"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Mios - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Mios. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/chauffage-climatisation/mios",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/images/og-image-mios.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Mios - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Mios - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Mios. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/images/og-image-mios.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/zones-desservies/mios"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}