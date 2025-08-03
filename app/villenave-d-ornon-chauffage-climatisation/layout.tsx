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
          "image": "https://www.climgo.fr/Logo.png",
          "url": "https://www.climgo.fr/villenave-d-ornon-chauffage-climatisation",
          "telephone": "+33-7-66-46-00-08",
          "priceRange": "€€",
          "description": "ClimGO est une entreprise spécialisée en installation, entretien et dépannage de pompes à chaleur, climatisation, chauffe-eau et systèmes de chauffage à Villenave-d'Ornon et en Gironde.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Place Ferdinand Buisson",
            "addressLocality": "Villenave-d'Ornon",
            "postalCode": "33140",
            "addressRegion": "Nouvelle-Aquitaine",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.782535552978516,
            "longitude": -0.570515513420105
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
            { "@type": "Place", "name": "Villenave-d'Ornon" },
            { "@type": "Place", "name": "Bègles" },
            { "@type": "Place", "name": "Cadaujac" },
            { "@type": "Place", "name": "Talence" },
            { "@type": "Place", "name": "Bordeaux" }
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
            "name": "Services proposés",
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