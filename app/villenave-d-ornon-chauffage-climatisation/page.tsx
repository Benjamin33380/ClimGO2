import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";

export default function VillenaveDornon() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Villenave-d'Ornon" backgroundImage="/villes/villenave-d-ornon.jpg" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Villenave-d&apos;Ornon, entre tradition, accessibilité et performance énergétique</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Située aux portes de Bordeaux, Villenave-d&apos;Ornon combine zones pavillonnaires, habitat collectif et dynamique économique. Une commune en pleine évolution qui demande des solutions thermiques sur mesure.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Que ce soit autour du vieux bourg, du quartier Chambéry ou des nouveaux lotissements, ClimGO adapte chaque installation à l’environnement urbain de Villenave-d&apos;Ornon.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Nous apportons des solutions de confort hautement efficaces, discrètes et compatibles avec les normes locales, tout en garantissant un accompagnement complet.
          </p>
        </div>
      </section>

      <section className="my-20">
        <GoogleReviews ville="Villenave d&apos;Ornon" />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Villenave-d&apos;Ornon</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Des quartiers de la Geneste jusqu’à la rue Léon Blum, nos équipes interviennent dans tous les secteurs de Villenave-d&apos;Ornon pour vous offrir un confort thermique optimal.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <Testimonials />
      </section>

      <div
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20"
        style={{ backgroundImage: "url('/fond3.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/80 backdrop-blur-md p-6 rounded-lg max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Villenave-d&apos;Ornon ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Faire appel à ClimGO à Villenave-d&apos;Ornon, c’est choisir une entreprise de proximité, capable de répondre aux besoins thermiques d’une commune à la fois résidentielle et dynamique.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nos systèmes de chauffage, climatisation et eau chaude sont pensés pour respecter l’architecture locale et optimiser les performances énergétiques de vos logements.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Proximité, rigueur et accompagnement administratif : l&apos;excellence ClimGO au service des habitants de Villenave-d&apos;Ornon.
            </p>
          </section>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
        <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Types de logements desservis</h2>
          <p className="text-white leading-relaxed text-center">
            Résidences étudiantes, maisons familiales, logements collectifs : nous maîtrisons les contraintes thermiques de tous les types d’habitat à Villenave-d&apos;Ornon.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-[#03144a] mx-auto mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Processus d’installation</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Un projet démarre toujours par une visite technique sur place. Nous établissons ensuite un devis précis, avant de programmer une installation rapide, propre et certifiée conforme.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-[#03144a] mx-auto mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
          </svg>
          <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Entretien &amp; maintenance</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            ClimGO assure un suivi complet de vos équipements, avec des interventions de maintenance planifiées pour préserver performances et économies d’énergie, année après année.
          </p>
        </div>

        <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white mx-auto mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
          </svg>
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Villenave-d&apos;Ornon</h2>
          <p className="text-white leading-relaxed text-center">
            MaPrimeRénov’, CEE, Éco-PTZ… à Villenave-d&apos;Ornon, nous facilitons l’accès aux aides disponibles pour vos projets. De la constitution du dossier à l’obtention, on s’occupe de tout.
          </p>
        </div>
      </div>

      <div
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/faq.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/60 backdrop-blur-md p-6 rounded-lg max-w-4xl mx-auto px-4">
          <section>
            <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Mini FAQ locale</h2>
            <Faq
              questions={[
                {
                  question: "Quels équipements installez-vous à Villenave-d'Ornon ?",
                  answer: "Pompes à chaleur air/eau, climatisation réversible, chauffe-eaux thermodynamiques, radiateurs performants… Nous intervenons dans tous les quartiers de Villenave-d'Ornon.",
                },
                {
                  question: "Puis-je bénéficier d’aides locales à Villenave-d'Ornon ?",
                  answer: "Oui, en plus des aides nationales comme MaPrimeRénov’, certaines subventions locales peuvent être disponibles. Nous vous guidons dans toutes les démarches.",
                },
                {
                  question: "Travaillez-vous dans le centre-ville de Villenave-d'Ornon ?",
                  answer: "Absolument. Nous intervenons dans tous les secteurs, y compris les zones résidentielles et à circulation réglementée.",
                }
              ]}
            />
          </section>
        </div>
      </div>
{/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Villenave-d'Ornon ?" */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Une commune en pleine mutation entre ville et nature</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Située au sud de Bordeaux, Villenave-d&apos;Ornon compte plus de 35 000 habitants et connaît une forte croissance résidentielle. Grâce à sa proximité avec la rocade, la gare de Bègles et les zones d’activités, elle attire aussi bien des familles que des actifs.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Entre les quartiers du Pont-de-la-Maye, Chambéry, Bocage ou Courrejean, les styles de logements sont variés : maisons de lotissements, bâtis anciens rénovés ou résidences neuves. Une diversité à laquelle ClimGO s’adapte avec des solutions sur-mesure.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Nos interventions s’inscrivent parfaitement dans les projets de rénovation énergétique et d’amélioration du confort, en respectant les spécificités locales et les contraintes urbanistiques.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Villenave-d&apos;Ornon</h2>
    <p className="text-white leading-relaxed text-center">
      • Rue Jules Ferry : remplacement d’un ancien système de chauffage par une PAC air/eau haute performance.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Avenue du Maréchal Leclerc : installation d’une climatisation réversible dans un appartement récent.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Résidence Les Jardins de Courrejean : maintenance annuelle de climatiseurs muraux en copropriété.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Rue du Bocage : mise en place d’un chauffe-eau thermodynamique pour une maison RT2012.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Une expertise locale adaptée au cadre urbain et pavillonnaire</h2>
    <p className="text-white leading-relaxed text-center">
      À Villenave-d&apos;Ornon, nos équipes prennent en compte les différences de terrains (zones inondables, terrains argileux), les règles de mitoyenneté et les accès parfois étroits dans les lotissements.
    </p>
    <p className="text-white leading-relaxed text-center">
      Nos installations sont pensées pour s’intégrer discrètement à l’environnement urbain, tout en offrant performance, confort acoustique et économies d’énergie.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Votre projet thermique à Villenave-d&apos;Ornon</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Vous habitez Villenave-d&apos;Ornon ou venez d’y acquérir un bien ? Notre équipe vous accompagne dans vos projets de chauffage, climatisation ou production d’eau chaude. Contactez-nous pour un devis gratuit et un accompagnement personnalisé.
    </p>
  </div>
</div>
     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Villenave-d&apos;Ornon ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Votre logement à Villenave-d&apos;Ornon mérite une installation fiable et performante. Obtenez un devis gratuit dès maintenant.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Villenave-d&apos;Ornon
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
    </main>
  );
}