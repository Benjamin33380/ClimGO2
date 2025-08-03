export const metadata = {
  title: "Chauffage, Climatisation et PAC à Talence",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Talence. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Talence",
    "climatisation Talence",
    "installation clim Talence",
    "chauffe-eau Talence",
    "pompe à chaleur Talence",
    "entretien clim Talence",
    "installateur RGE Talence",
    "chauffagiste Talence",
    "climatisation réversible Talence",
    "PAC air eau Talence",
    "PAC air air Talence",
    "chauffe-eau thermodynamique Talence",
    "dépannage chauffage Talence",
    "entretien pompe à chaleur Talence",
    "installateur clim Talence",
    "clim gainable Talence",
    "clim mural Talence",
    "économie énergie Talence",
    "artisan RGE Talence",
    "clim cassette Talence",
    "devis chauffage Talence",
    "devis climatisation Talence",
    "maintenance chauffage Talence",
    "solution thermique Talence",
    "installation RGE Talence",
    "confort thermique Talence",
    "entreprise chauffage Talence"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Talence - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Talence. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/talence-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/talence.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Talence - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Talence - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Talence. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/talence.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/talence-chauffage-climatisation"
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
          "image": "https://www.climgo.fr/villes/talence.jpg",
          "@id": "https://www.climgo.fr/talence-chauffage-climatisation",
          "url": "https://www.climgo.fr/talence-chauffage-climatisation",
          "telephone": "+33-7-66-46-00-08",
          "priceRange": "€€",
          "description": "ClimGO propose l'installation, l'entretien et le dépannage de systèmes de chauffage, climatisation, chauffe-eau et pompes à chaleur à Talence et ses environs.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rue du Professeur Arnozan",
            "addressLocality": "Talence",
            "postalCode": "33400",
            "addressRegion": "Nouvelle-Aquitaine",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.8087043762207,
            "longitude": -0.587873637676239
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:30"
            }
          ],
          "areaServed": [
            { "@type": "Place", "name": "Talence" },
            { "@type": "Place", "name": "Bordeaux" },
            { "@type": "Place", "name": "Pessac" },
            { "@type": "Place", "name": "Bègles" },
            { "@type": "Place", "name": "Gradignan" }
          ],
          "foundingDate": "2025",
          "founder": {
            "@type": "Person",
            "name": "Benjamin Cardoso"
          },
          "sameAs": [
            "https://www.climgo.fr",
            "https://www.instagram.com/climgo_climatisation_chauffage/",
            "https://www.facebook.com/people/Climgo/61578576031066/",
            "https://www.linkedin.com/company/climgo"
          ],
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.climgo.fr/Logo.png",
            "width": 512,
            "height": 512
          },
 "hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "Prestations ClimGO",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation de climatisation murale"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation de climatisation gainable"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Pompe à chaleur air/air"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Pompe à chaleur air/eau"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Plancher chauffant hydraulique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation de radiateurs basse température"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Sèche-serviettes électrique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Chauffe-eau thermodynamique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Chauffe-eau électrique classique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Entretien climatisation"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Entretien pompe à chaleur"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Désembouage plancher chauffant"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Dépannage chauffage"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Dépannage climatisation"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Petits travaux de plomberie"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Conseils en rénovation énergétique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Mise en conformité installation thermique"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Installation de VMC simple flux"
      }
    }
  ]
},
          
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33-7-66-46-00-08",
            "contactType": "customer service",
            "areaServed": "FR",
            "availableLanguage": ["French"]
          }
        })}
      </Script>
      {children}
    </>
  );
}