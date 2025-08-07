import { Metadata, Viewport } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Chauffage, Climatisation et PAC à Andernos-les-Bains",
  description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Andernos-les-Bains. Profitez d'un service local, certifié RGE.",
  keywords: [
    "chauffage Andernos-les-Bains",
    "climatisation Andernos-les-Bains",
    "installation clim Andernos-les-Bains",
    "chauffe-eau Andernos-les-Bains",
    "pompe à chaleur Andernos-les-Bains",
    "entretien clim Andernos-les-Bains",
    "installateur RGE Andernos-les-Bains",
    "chauffagiste Andernos-les-Bains",
    "climatisation réversible Andernos-les-Bains",
    "PAC air eau Andernos-les-Bains",
    "PAC air air Andernos-les-Bains",
    "chauffe-eau thermodynamique Andernos-les-Bains",
    "dépannage chauffage Andernos-les-Bains",
    "entretien pompe à chaleur Andernos-les-Bains",
    "installateur clim Andernos-les-Bains",
    "clim gainable Andernos-les-Bains",
    "clim mural Andernos-les-Bains",
    "prix pompe a chaleur Andernos-les-Bains",
    "artisan RGE Andernos-les-Bains",
    "clim cassette Andernos-les-Bains",
    "devis chauffage Andernos-les-Bains",
    "devis climatisation Andernos-les-Bains",
    "maintenance chauffage Andernos-les-Bains",
    "solution thermique Andernos-les-Bains",
    "installation RGE Andernos-les-Bains",
    "confort thermique Andernos-les-Bains",
    "entreprise chauffage Andernos-les-Bains"
  ],
  openGraph: {
    title: "Chauffage, Climatisation et PAC à Andernos-les-Bains - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Andernos-les-Bains. Profitez d'un service local, certifié RGE.",
    url: "https://www.climgo.fr/andernos-les-bains-chauffage-climatisation",
    siteName: "ClimGO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.climgo.fr/villes/andernos.jpg",
        width: 1200,
        height: 630,
        alt: "Chauffage et climatisation à Andernos-les-Bains - ClimGO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffage, Climatisation et PAC à Andernos-les-Bains - ClimGO",
    description: "Installation, entretien et dépannage de chauffage, climatisation, chauffe-eau et pompes à chaleur à Andernos-les-Bains. Profitez d'un service local, certifié RGE.",
    images: ["https://www.climgo.fr/villes/andernos.jpg"]
  },
  metadataBase: new URL("https://www.climgo.fr"),
  alternates: {
    canonical: "/andernos-les-bains-chauffage-climatisation"
  },
  other: {
    "zones-desservies": "true"
  }
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  height: 'device-height',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script type="application/ld+json" id="ld-json-schema" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.climgo.fr/andernos-les-bains-chauffage-climatisation",
              "url": "https://www.climgo.fr/andernos-les-bains-chauffage-climatisation",
              "name": "Chauffage, Climatisation et PAC à Andernos-les-Bains - ClimGO",
              "inLanguage": "fr",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.climgo.fr/andernos-les-bains-chauffage-climatisation"
              }
            },
            {
              "@type": "Organization",
              "name": "ClimGO",
              "url": "https://www.climgo.fr",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.climgo.fr/Logo.png",
                "width": 512,
                "height": 512
              },
              "sameAs": [
                "https://www.instagram.com/climgo_climatisation_chauffage/",
                "https://www.facebook.com/people/Climgo/61578576031066/",
                "https://www.linkedin.com/company/climgo"
              ]
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://www.climgo.fr/#climgo-andernos",
              "name": "ClimGO",
              "description": "ClimGO vous accompagne à Andernos-les-Bains pour l’installation, l’entretien et le dépannage de vos climatisations réversibles, pompes à chaleur et chauffe-eaux. Bénéficiez de notre expertise certifiée RGE.",
              "url": "https://www.climgo.fr/andernos-les-bains-chauffage-climatisation",
              "image": "https://www.climgo.fr/villes/andernos.jpg",
              "telephone": "+33 7 66 46 00 08",
              "priceRange": "€€",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.climgo.fr/Logo.png",
                "width": 512,
                "height": 512
              },
              "founder": {
                "@type": "Person",
                "name": "Benjamin Cardoso"
              },
              "foundingDate": "2025",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bd de la République",
                "addressLocality": "Andernos-les-Bains",
                "postalCode": "33510",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.7526956,
                "longitude": -1.0876728
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:30"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/climgo_climatisation_chauffage/",
                "https://www.facebook.com/people/Climgo/61578576031066/",
                "https://www.linkedin.com/company/climgo"
              ],
              "areaServed": [
                { "@type": "Place", "name": "Andernos-les-Bains" },
                { "@type": "Place", "name": "Lanton" },
                { "@type": "Place", "name": "Arès" },
                { "@type": "Place", "name": "Audenge" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Prestations ClimGO",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation de climatisation murale" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation de climatisation gainable" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pompe à chaleur air/air" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pompe à chaleur air/eau" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plancher chauffant hydraulique" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation de radiateurs basse température" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sèche-serviettes électrique" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chauffe-eau thermodynamique" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chauffe-eau électrique classique" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Entretien climatisation" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Entretien pompe à chaleur" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Désembouage plancher chauffant" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dépannage chauffage" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dépannage climatisation" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Petits travaux de plomberie" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conseils en rénovation énergétique" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mise en conformité installation thermique" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation de VMC simple flux" } }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "25"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33 7 66 46 00 08",
                "contactType": "customer service",
                "areaServed": "FR",
                "availableLanguage": ["French"]
              },
              "hasMap": "https://www.google.com/maps/place/Andernos-les-Bains/@44.7528937,-1.0820162,13z/data=!3m1!4b1!4m6!3m5!1s0xd54a36b5c67c873:0x40665174816f0a0!8m2!3d44.743536!4d-1.102449!16zL20vMDkybGwx?entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D",
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Client ClimGO"
                  },
                  "reviewBody": "Travail rapide et soigné, je recommande vivement !"
                }
              ]
            },
            {
              "@type": "Service",
              "serviceType": "Installation de chauffage, climatisation et pompes à chaleur",
              "provider": {
                "@type": "LocalBusiness",
                "name": "ClimGO"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Andernos-les-Bains"
              },
              "description": "ClimGO propose l'installation et l'entretien de systèmes thermiques à Andernos-les-Bains, incluant climatisations réversibles, PAC air/eau et air/air, et chauffe-eaux."
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "accueil",
                  "item": "https://www.climgo.fr"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "zones-desservies",
                  "item": "https://www.climgo.fr/zones-desservies"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "andernos-les-Bains",
                  "item": "https://www.climgo.fr/andernos-les-bains-chauffage-climatisation"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "ClimGO est-il certifié RGE ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, ClimGO est certifié RGE QualiPAC, ce qui vous permet de bénéficier des aides de l'État pour vos travaux."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quels sont les délais d’installation d’une PAC ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "En général, l’installation est planifiée sous 7 à 10 jours après validation du devis."
                  }
                }
              ]
            }
          ]
        })}
      </Script>
      {children}
    </>
  );
}