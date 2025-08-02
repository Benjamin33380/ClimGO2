import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";

export default function LeBouscat() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Lormont" backgroundImage="/villes/lormont.jpg" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Lormont, ville dynamique en bordure de la Garonne</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Lormont, avec ses quartiers variés et son patrimoine riche, nécessite des solutions thermiques adaptées à ses spécificités urbaines.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            ClimGO vous accompagne pour équiper votre maison ou appartement à Lormont avec des installations performantes, esthétiques et durables.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Forts de notre expertise locale et de nos certifications, nous garantissons des installations fiables, économiques et parfaitement adaptées aux besoins des habitants de Lormont.
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
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Lormont</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Des quartiers de Génicart aux Hauts de Lormont, nos équipes interviennent partout avec précision. Chaque chantier est réalisé avec soin, pour un confort optimal toute l’année.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Lormont ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Faire appel à ClimGO à Lormont, c’est choisir un savoir-faire local et un accompagnement complet.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nos pompes à chaleur, climatiseurs et chauffe-eaux sont sélectionnés pour garantir efficacité, discrétion et durabilité, que ce soit dans les pavillons ou les résidences collectives.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Notre proximité et notre rigueur font la différence : un service rapide, des finitions soignées, et un accompagnement administratif complet.
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
            Pavillons, copropriétés et résidences collectives : nous maîtrisons les contraintes thermiques de tous les types d’habitat à Lormont.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Lormont</h2>
          <p className="text-white leading-relaxed text-center">
            MaPrimeRénov’, CEE, Éco-PTZ… à Lormont, de nombreuses aides sont accessibles. Nous vous aidons à maximiser vos subventions sans vous perdre dans la paperasse.
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
                  question: "Quels équipements installez-vous à Lormont ?",
                  answer: "Pompes à chaleur air/eau, climatisation réversible, chauffe-eaux thermodynamiques, radiateurs modernes… Nous couvrons tous les quartiers de Lormont, y compris Génicart, Carriet et les Hauts de Lormont.",
                },
                {
                  question: "Puis-je bénéficier d’aides locales à Lormont ?",
                  answer: "Oui, en complément de MaPrimeRénov’ et des aides CEE, des subventions peuvent être disponibles via la métropole de Bordeaux. Nous vous accompagnons dans toutes vos démarches.",
                },
                {
                  question: "Intervenez-vous dans les résidences collectives à Lormont ?",
                  answer: "Absolument, notre expertise s’adapte aussi bien aux pavillons individuels qu’aux copropriétés et résidences collectives."
                }
              ]}
            />
          </section>
        </div>
      </div>

{/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Lormont ?" */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Une ville dynamique aux portes de Bordeaux</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Située sur la rive droite de la Garonne, Lormont connaît une véritable transformation urbaine tout en conservant son patrimoine historique. Proche du pont d’Aquitaine et bien desservie par les transports, la ville attire familles, retraités et jeunes actifs.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      La diversité des quartiers — Carriet, Génicart, La Ramade ou Vieux Lormont — permet à chaque profil d’habitat de trouver une solution de confort thermique adaptée. Les maisons de ville, les pavillons des années 70 et les logements sociaux rénovés offrent un large champ d’intervention.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      ClimGO intervient dans toute la commune, en adaptant chaque installation aux contraintes techniques locales : orientation, isolation, espace disponible, accessibilité. Notre priorité : conjuguer performance, esthétique et économies d’énergie.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Lormont</h2>
    <p className="text-white leading-relaxed text-center">
      • Résidence Lauriers Roses : pose d’un split mural silencieux avec régulation automatique.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Avenue de Paris : remplacement d’un chauffe-eau vieillissant par un modèle thermodynamique haute efficacité.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Rue du Général de Gaulle : entretien complet d’un système air/air multisplit sur maison mitoyenne.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Quartier Génicart : installation d’une pompe à chaleur air/eau avec plancher chauffant sur maison rénovée.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Un savoir-faire calibré pour Lormont</h2>
    <p className="text-white leading-relaxed text-center">
      Entre bâtiments anciens en pierre, immeubles collectifs et maisons en bande, chaque logement à Lormont présente des défis uniques. Nos équipes dimensionnent chaque appareil selon les spécificités du bâti et des besoins réels.
    </p>
    <p className="text-white leading-relaxed text-center">
      Nous veillons également à optimiser la discrétion des unités extérieures, notamment dans les zones plus denses ou les copropriétés, tout en garantissant efficacité énergétique et durabilité.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Un projet à Lormont ? Parlons-en</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Vous êtes propriétaire, bailleur ou gestionnaire de biens à Lormont ? ClimGO vous accompagne dans l’étude, l’installation et l’entretien de vos équipements. Contactez-nous pour un devis gratuit, rapide et sur mesure.
    </p>
  </div>
</div>
     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d’un devis à Lormont ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Votre logement à Lormont mérite une installation thermique efficace et durable. Demandez votre devis gratuit.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Lormont
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
    </main>
  );
}