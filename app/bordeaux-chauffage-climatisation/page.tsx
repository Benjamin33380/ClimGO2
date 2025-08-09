import CityPageTemplate from "../components/CityPageTemplate";

export default function Bordeaux() {
  return (
    <CityPageTemplate
      cityName="Bordeaux"
      backgroundImage="/villes/bordeaux.jpg"
      
      // Section principale
      mainTitle="Bordeaux, élégance urbaine et confort thermique toute l'année"
      mainDescription="Capitale du vin et joyau du patrimoine architectural, Bordeaux allie charme historique et modernité. Ses bâtiments en pierre blonde et ses appartements haussmanniens exigent des installations précises et sur mesure. Que vous soyez dans le quartier des Chartrons, Saint-Michel ou Caudéran, ClimGO adapte chaque installation aux spécificités thermiques de votre habitat. Grâce à notre ancrage local et nos certifications, nous garantissons des systèmes performants, sobres et discrets, parfaitement intégrés au tissu urbain bordelais."
      
      // Section interventions
      interventionsTitle="Nos interventions à Bordeaux"
      interventionsDescription="De la place de la Bourse aux quais de la Garonne, nous intervenons dans toute la métropole bordelaise. Chaque chantier est réalisé avec précision, pour un confort optimal été comme hiver."
      
      // Section pourquoi choisir
      whyChooseTitle="Pourquoi choisir ClimGO à Bordeaux ?"
      whyChooseDescription1="Faire appel à ClimGO à Bordeaux, c'est choisir une entreprise engagée, qui comprend les particularités climatiques et architecturales de la région bordelaise."
      whyChooseDescription2="Nos pompes à chaleur, climatiseurs et chauffe-eaux sont sélectionnés pour garantir efficacité, discrétion et durabilité, même dans les immeubles anciens ou les échoppes rénovées."
      whyChooseDescription3="Notre proximité et notre rigueur font la différence : un service rapide, des finitions propres, et un accompagnement administratif complet."
      
      // Cartes d'information
      card1={{
        title: "Types de logements desservis",
        description: "Échoppes typiques, immeubles du centre historique, maisons de ville modernes : nous maîtrisons les contraintes thermiques de tous les types d'habitat à Bordeaux."
      }}
      card2={{
        title: "Processus d'installation",
        description: "Un projet démarre toujours par une visite technique sur place. Nous établissons ensuite un devis précis, avant de programmer une installation rapide, propre et certifiée conforme."
      }}
      card3={{
        title: "Entretien & maintenance",
        description: "ClimGO assure un suivi complet de vos équipements, avec des interventions de maintenance planifiées pour préserver performances et économies d'énergie, année après année."
      }}
      card4={{
        title: "Aides financières à Bordeaux",
        description: "MaPrimeRénov', CEE, Éco-PTZ… à Bordeaux, de nombreuses aides sont accessibles. Nous vous aidons à maximiser vos subventions sans vous perdre dans la paperasse."
      }}
      
      // FAQ
      faqQuestions={[
        {
          question: "Quels équipements installez-vous à Bordeaux ?",
          answer: "Pompes à chaleur air/eau, climatisation réversible, chauffe-eaux thermodynamiques, radiateurs performants… Nous intervenons dans toute la métropole bordelaise."
        },
        {
          question: "Puis-je bénéficier d'aides locales à Bordeaux ?",
          answer: "Oui, en plus des aides nationales comme MaPrimeRénov', certaines subventions locales sont parfois disponibles. Nous vous guidons pas à pas."
        },
        {
          question: "Travaillez-vous dans le centre-ville de Bordeaux ?",
          answer: "Absolument. Nous intervenons même dans les zones à accès restreint, en adaptant notre logistique pour garantir la qualité sans compromis."
        }
      ]}
      
      // Sections enrichies
      section1={{
        title: "Une métropole entre histoire et modernité",
        content: [
          "Bordeaux, joyau d'Aquitaine, séduit autant par son patrimoine que par sa dynamique urbaine. Avec plus de 250 000 habitants, la ville conjugue art de vivre, innovation et exigence thermique, notamment dans ses quartiers emblématiques.",
          "Entre les ruelles pavées de Saint-Pierre, les boulevards animés de Gambetta ou les zones résidentielles calmes de Caudéran, chaque logement nécessite une approche technique adaptée à ses contraintes architecturales.",
          "ClimGO s'adapte à la diversité du bâti bordelais : maisons en pierre de taille, échoppes du XIXe, appartements récents ou rénovés, nous maîtrisons les subtilités thermiques du territoire urbain bordelais."
        ]
      }}
      section2={{
        title: "Exemples concrets d'interventions à Bordeaux",
        content: [
          "• Rue Judaïque : remplacement complet d'un système de chauffage gaz par une pompe à chaleur air/eau avec ballon thermodynamique.",
          "• Quartier Bacalan : pose de splits gainables dans un loft industriel reconverti, avec régulation par pièce.",
          "• Rue Notre-Dame aux Chartrons : installation d'une climatisation murale discrète dans un appartement haussmannien classé.",
          "• Résidence Belvédère : maintenance annuelle de PAC dans un ensemble immobilier neuf avec label BBC."
        ]
      }}
      section3={{
        title: "Une expertise au service du tissu urbain bordelais",
        content: [
          "Bordeaux impose souvent des contraintes spécifiques : ventilation dans les échoppes, insonorisation dans les immeubles collectifs, respect de la pierre bordelaise pour les fixations extérieures. Nos équipes interviennent avec rigueur et soin.",
          "Chaque PAC est posée avec attention aux normes de copropriété, aux gaines existantes et aux possibilités de raccordement électrique, souvent complexes dans l'hyper-centre historique."
        ]
      }}
      section4={{
        title: "Et si on lançait votre projet bordelais ?",
        content: [
          "Vous êtes propriétaire à Bordeaux ou vous venez d'acquérir un bien à rénover ? ClimGO vous accompagne dans vos démarches d'amélioration énergétique. Demandez une étude gratuite pour une solution thermique à la hauteur de votre cadre de vie."
        ]
      }}
      
      // CTA final
      ctaTitle="Besoin d'un devis à Bordeaux ?"
      ctaDescription="Votre logement bordelais mérite une installation fiable et adaptée. Obtenez un devis gratuit en quelques clics."
      ctaButtonText="Demandez votre devis gratuit à Bordeaux"
    />
  );
}