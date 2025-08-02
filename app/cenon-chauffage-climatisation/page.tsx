import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";

export default function Bruges() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Cenon" backgroundImage="/villes/cenon.jpg" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Cenon, entre nature et dynamisme urbain</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Située sur la rive droite de la Garonne, Cenon offre un cadre de vie agréable et en pleine évolution, idéal pour des installations énergétiques modernes.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            ClimGO vous accompagne à Cenon pour tous vos besoins en chauffage, climatisation ou production d’eau chaude.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Grâce à notre expertise locale, chaque solution est pensée pour s’adapter aux caractéristiques des logements cenonnais.
          </p>
        </div>
      </section>

      <section className="my-20">
        <GoogleReviews />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Cenon</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Du Parc Palmer au quartier de la Morlette, nous intervenons dans tous les quartiers de Cenon avec rigueur. Chaque installation est pensée pour optimiser votre confort thermique.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Cenon ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Faire appel à ClimGO à Cenon, c’est faire le choix de la proximité, du conseil et d’un savoir-faire reconnu.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nos équipements s’intègrent dans tous les types de logements cenonnais, avec discrétion et performance.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              ClimGO vous accompagne de A à Z, avec un service rapide, soigné, et des démarches simplifiées pour vos aides.
            </p>
          </section>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
        <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Types de logements desservis à Cenon</h2>
          <p className="text-white leading-relaxed text-center">
            Maisons récentes, résidences ou immeubles anciens : nous adaptons chaque installation aux spécificités des logements de Cenon.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Cenon</h2>
          <p className="text-white leading-relaxed text-center">
            MaPrimeRénov’, CEE, Éco-PTZ… à Cenon, bénéficiez des aides disponibles. ClimGO vous guide pas à pas dans vos démarches.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Mini FAQ locale à Cenon</h2>
            <Faq
              questions={[
                {
                  question: "Quels équipements installez-vous à Cenon ?",
                  answer: "Pompes à chaleur, climatisation réversible, chauffe-eaux performants… Nous intervenons dans tous les quartiers de Cenon, du Parc Palmer à la Morlette.",
                },
                {
                  question: "Puis-je bénéficier d’aides locales à Cenon ?",
                  answer: "Oui, des aides locales peuvent s’ajouter aux subventions nationales. ClimGO vous accompagne dans la constitution de vos dossiers.",
                },
                {
                  question: "Travaillez-vous aussi avec les logements collectifs à Cenon ?",
                  answer: "Absolument, nous équipons aussi bien les maisons individuelles que les copropriétés ou immeubles à Cenon."
                }
              ]}
            />
          </section>
        </div>
      </div>
    {/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Saint-Jean-d’Illac ?" */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
      <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Une commune tournée vers l’avenir</h2>
        <p className="text-[#03144a] leading-relaxed text-center">
          Avec ses 25 000 habitants, Cenon est une commune dynamique de la métropole bordelaise, connue pour ses projets urbains modernes, ses équipements culturels comme le Rocher de Palmer et ses quartiers en pleine mutation.
        </p>
        <p className="text-[#03144a] leading-relaxed text-center">
          Des Hauts de Cenon jusqu’au Bas-Cenon, les familles bénéficient d’une bonne desserte en transports (tram A, bus TBM), d’établissements scolaires de qualité et d’un tissu associatif vivant.
        </p>
        <p className="text-[#03144a] leading-relaxed text-center">
          ClimGO intervient dans l’ensemble de la commune, du secteur Palmer à la Marègue, avec des solutions adaptées aux résidences récentes comme aux habitats collectifs des années 70.
        </p>
      </div>

      <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples d’installations réalisées à Cenon</h2>
        <p className="text-white leading-relaxed text-center">
          • Rue René Cassagne : installation d’une pompe à chaleur air/eau pour une maison individuelle de plain-pied.
        </p>
        <p className="text-white leading-relaxed text-center">
          • Avenue Jean Jaurès : remplacement d’un ancien climatiseur par un split réversible Daikin dernière génération.
        </p>
        <p className="text-white leading-relaxed text-center">
          • Résidence Les Maronniers : maintenance annuelle de plusieurs unités intérieures dans un immeuble collectif.
        </p>
        <p className="text-white leading-relaxed text-center">
          • Rue Émile Combes : installation d’un chauffe-eau thermodynamique dans une maison rénovée avec combles aménagés.
        </p>
      </div>

      <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">Un savoir-faire calibré pour Cenon</h2>
        <p className="text-white leading-relaxed text-center">
          Cenon possède une diversité architecturale qui nécessite une approche sur-mesure : résidences en bande, logements sociaux, immeubles en terrasse ou pavillons modernes.
        </p>
        <p className="text-white leading-relaxed text-center">
          Chez ClimGO, nous analysons chaque configuration (exposition, orientation, ventilation naturelle) pour garantir des installations efficaces, silencieuses et durables, y compris dans des copropriétés denses.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Un projet thermique à Cenon ?</h2>
        <p className="text-[#03144a] leading-relaxed text-center">
          Vous habitez Cenon ou y investissez ? Nos équipes vous conseillent et se déplacent rapidement pour étudier votre logement et vous proposer la solution la plus adaptée à votre confort et à votre budget.
        </p>
      </div>
    </div>

     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d’un devis à Cenon ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Votre logement à Cenon mérite le meilleur de la technologie thermique. Obtenez votre devis sans engagement.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Cenon
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
    </main>
  );
}