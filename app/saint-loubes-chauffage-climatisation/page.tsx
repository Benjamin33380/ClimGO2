import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";

export default function Pessac() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Saint-Loubès" backgroundImage="/villes/stlo.jpg" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Saint-Loubès, entre tradition viticole et qualité de vie</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Nichée entre vignes et Garonne, Saint-Loubès séduit par son authenticité et sa douceur de vivre.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Que vous soyez proche du centre-bourg, du secteur de Queyrut ou en périphérie, ClimGO vous accompagne avec des solutions sur-mesure.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Nous installons des systèmes fiables et performants, parfaitement intégrés aux logements loubésiens, du pavillon traditionnel aux constructions récentes.
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
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Saint-Loubès</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            De Queyrut à la rive droite, nos équipes interviennent sur l’ensemble de la commune pour assurer votre confort thermique en toute saison.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Saint-Loubès ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Choisir ClimGO à Saint-Loubès, c’est faire confiance à une entreprise locale qui connaît les besoins thermiques propres à la région.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nos équipements sont adaptés à l’architecture loubésienne : discrets, efficaces, et pensés pour durer.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Disponibilité, propreté, accompagnement administratif… votre satisfaction est notre priorité.
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
            Pavillons traditionnels, lotissements récents, habitats en zone rurale : nous adaptons chaque installation au contexte de Saint-Loubès.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Saint-Loubès</h2>
          <p className="text-white leading-relaxed text-center">
            MaPrimeRénov’, CEE, Éco-PTZ… nous optimisons vos démarches pour obtenir un maximum d’aides à Saint-Loubès.
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
                  question: "Quels équipements installez-vous à Saint-Loubès ?",
                  answer: "Pompes à chaleur, climatisation, chauffe-eaux, radiateurs performants… Nous intervenons dans tous les quartiers de Saint-Loubès.",
                },
                {
                  question: "Puis-je bénéficier d’aides locales à Saint-Loubès ?",
                  answer: "Oui, certaines aides locales complètent les dispositifs nationaux. Nous vous accompagnons dans chaque étape.",
                },
                {
                  question: "Travaillez-vous dans toute la commune de Saint-Loubès ?",
                  answer: "Bien sûr. De Queyrut à la Garonne, nous couvrons l’ensemble de la ville avec la même rigueur.",
                }
              ]}
            />
          </section>
        </div>
      </div>
  {/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Saint-Loubès ?" */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Une commune entre vignobles, patrimoine et dynamisme</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Située à une vingtaine de kilomètres de Bordeaux, Saint-Loubès attire les familles en quête d’un cadre de vie paisible et verdoyant. Forte de plus de 8 000 habitants, la ville se distingue par son ambiance villageoise et ses domaines viticoles réputés.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Les habitants profitent d’un accès rapide via la D670, d’une gare TER et d’équipements scolaires variés (collège Max Linder, écoles publiques). Le tissu associatif local est très actif.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      ClimGO intervient à Saint-Loubès dans tous les quartiers : La Poste, Le Bourg, La Chapelle, Les Gravières ou les lotissements proches de l’avenue de la République. Nos solutions s’adaptent aussi bien aux maisons anciennes en pierre qu’aux pavillons des années 2000.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Saint-Loubès</h2>
    <p className="text-white leading-relaxed text-center">
      • Rue des Écoles : installation d’une climatisation gainable dans une maison rénovée en R+1 avec isolation renforcée.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Chemin des Loubèsiens : remplacement d’un ancien radiateur électrique par une PAC air/air réversible Daikin.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Lotissement Les Vergers : entretien annuel de quatre unités extérieures pour une petite copropriété.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Allée des Vignes : mise en place d’un chauffe-eau thermodynamique vertical pour optimiser l’espace buanderie.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Des installations pensées pour Saint-Loubès</h2>
    <p className="text-white leading-relaxed text-center">
      Le climat océanique loubésien et les variations de température entre hiver humide et été sec nécessitent des systèmes performants. Chez ClimGO, nous privilégions des solutions réversibles et silencieuses adaptées aux contraintes locales.
    </p>
    <p className="text-white leading-relaxed text-center">
      Nos techniciens prennent en compte la configuration des bâtiments loubésiens pour assurer un confort optimal toute l’année, sans dénaturer le charme architectural.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Un projet sur Saint-Loubès ? Parlons-en</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Vous êtes loubésien et souhaitez améliorer votre confort thermique ? ClimGO vous accompagne avec sérieux et réactivité. Contactez-nous pour une étude gratuite et personnalisée de votre habitation.
    </p>
  </div>
</div>

     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d’un devis à Saint-Loubès ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Vous habitez à Saint-Loubès ? Offrez-vous un confort thermique fiable et adapté. Obtenez un devis gratuit en ligne.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Saint-Loubès
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
    </main>
  );
}