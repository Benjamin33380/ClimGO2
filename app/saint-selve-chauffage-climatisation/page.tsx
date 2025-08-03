import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";

export default function SaintSelve() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Saint-Selve" backgroundImage="/villes/ss.jpg" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Saint-Selve, entre nature et sérénité résidentielle</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Nichée dans un écrin de verdure, Saint-Selve séduit par son cadre paisible et résidentiel. 
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Nos solutions de chauffage et climatisation s’intègrent avec discrétion dans tous les quartiers, du centre aux lotissements récents.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Chez ClimGO, chaque projet est conçu pour répondre aux besoins thermiques spécifiques des habitations de Saint-Selve.
          </p>
        </div>
      </section>

      <section className="my-20">
       <GoogleReviews ville="Saint-Selve" />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Saint-Selve</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Que vous soyez près de l’église, des écoles ou des zones pavillonnaires, nous proposons des installations soignées et adaptées.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Saint-Selve ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Faire appel à ClimGO à Saint-Selve, c’est choisir une équipe locale réactive et spécialisée dans le confort thermique résidentiel.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nos pompes à chaleur, climatiseurs et chauffe-eaux sont installés selon les exigences techniques locales.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Basés à proximité de Saint-Selve, nous garantissons un service rapide et suivi.
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
            Pavillons récents, maisons traditionnelles ou résidences secondaires : ClimGO intervient dans toute la commune de Saint-Selve.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Saint-Selve</h2>
          <p className="text-white leading-relaxed text-center">
            MaPrimeRénov’, CEE, Éco-PTZ… Plusieurs aides sont disponibles à Saint-Selve. Nous vous accompagnons pour maximiser vos économies.
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
                  question: "Quels équipements installez-vous à Saint-Selve ?",
                  answer: "Pompes à chaleur, climatisations, chauffe-eaux... Nous proposons toutes les solutions thermiques adaptées aux logements de Saint-Selve."
                },
                {
                  question: "Puis-je bénéficier d’aides locales à Saint-Selve ?",
                  answer: "Oui, certaines aides communales ou intercommunales peuvent compléter les dispositifs nationaux. Nous vous assistons dans les démarches."
                },
                {
                  question: "Intervenez-vous aussi sur les résidences secondaires à Saint-Selve ?",
                  answer: "Absolument, nous traitons aussi bien les résidences principales que secondaires, sur tout le territoire selvois."
                }
              ]}
            />
          </section>
        </div>
      </div>
 {/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Saint-Selve ?" */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Une commune en développement maîtrisé</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Située au cœur de l’Entre-Deux-Mers, Saint-Selve connaît une croissance résidentielle douce tout en conservant son cadre de vie rural. Avec près de 3 500 habitants, elle attire les familles en quête de tranquillité, à seulement 25 minutes de Bordeaux.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Les habitants bénéficient d’un tissu associatif dynamique, d’un groupe scolaire récent, d’un pôle santé et de la proximité de la D1113 pour accéder à Langon, La Brède ou Villenave-d’Ornon.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      ClimGO intervient dans tous les quartiers : du centre-bourg historique aux zones pavillonnaires de la route de Beautiran, en passant par les hameaux de Veyrines ou de Naudet. Nous adaptons nos solutions à tous types d’habitat local.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Saint-Selve</h2>
    <p className="text-white leading-relaxed text-center">
      • Chemin de la Sablière : installation d’une pompe à chaleur air/eau pour remplacer une chaudière fioul, avec plancher chauffant intégré.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Lotissement Le Hameau des Vignes : pose d’une climatisation réversible dans une maison récente, avec unité extérieure discrète côté jardin.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Route de la Brède : remplacement d’un chauffe-eau électrique par un modèle thermodynamique à haut rendement.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Rue du Stade : maintenance annuelle d’un système multi-split Mitsubishi dans une résidence principale de 110 m².
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Un savoir-faire adapté aux maisons de Saint-Selve</h2>
    <p className="text-white leading-relaxed text-center">
      Entre les bâtis anciens en pierre et les maisons récentes BBC, nos installations sont toujours dimensionnées sur mesure. Le climat tempéré et l’exposition des logements à la chaleur estivale guident nos préconisations techniques.
    </p>
    <p className="text-white leading-relaxed text-center">
      Nous privilégions les systèmes silencieux, peu énergivores et discrets, pour un confort durable sans dénaturer l’environnement naturel de Saint-Selve.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Discutons ensemble de votre projet à Saint-Selve</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Vous habitez Saint-Selve ou vous y faites construire ? Notre équipe est disponible pour vous proposer un accompagnement sur mesure en chauffage, climatisation ou eau chaude. Contactez-nous pour un premier échange gratuit.
    </p>
  </div>
</div>

     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d’un devis à Saint-Selve ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Confiez votre projet thermique à ClimGO pour une installation fiable à Saint-Selve. Obtenez votre devis gratuit rapidement.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Saint-Selve
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
    </main>
  );
}