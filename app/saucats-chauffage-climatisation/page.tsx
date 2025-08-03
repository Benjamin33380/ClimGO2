import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";

export default function Saucats() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Saucats" backgroundImage="/villes/saucats.jpg" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Saucats, entre nature préservée et dynamisme résidentiel</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            À la croisée entre la forêt girondine et les grandes zones naturelles protégées, Saucats offre un cadre de vie paisible à ses habitants. Cette commune séduit autant les familles que les actifs recherchant calme et proximité avec Bordeaux.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Des quartiers pavillonnaires aux habitations anciennes du centre, ClimGO adapte ses solutions aux besoins des logements saucatais, qu’ils soient neufs ou à rénover.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Nous prenons en compte les exigences thermiques de la région pour concevoir des installations pérennes, performantes et parfaitement intégrées à leur environnement.
          </p>
        </div>
      </section>

      <section className="my-20">
  
        <GoogleReviews ville="Saucats" />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Saucats</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            De la route de Léognan aux quartiers résidentiels du centre-bourg, nous intervenons dans tous les secteurs de Saucats avec des solutions personnalisées.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Saucats ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Choisir ClimGO, c’est opter pour un installateur local de confiance, habitué aux spécificités thermiques et architecturales de la commune de Saucats.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nos équipements sont sélectionnés pour leur fiabilité, leur efficacité énergétique et leur adaptation au bâti girondin.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Proches de chez vous, nous garantissons une intervention rapide, un accompagnement sur mesure et des travaux soignés.
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
            Nos solutions s’adaptent aux maisons de lotissement, résidences récentes ou anciennes bâtisses de Saucats, avec une prise en compte rigoureuse des spécificités thermiques locales.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Saucats</h2>
          <p className="text-white leading-relaxed text-center">
            ClimGO vous accompagne dans vos démarches pour bénéficier des aides disponibles à Saucats : primes CEE, MaPrimeRénov’, TVA à taux réduit et Éco-PTZ.
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
                  question: "Quels équipements installez-vous à Saucats ?",
                  answer: "Nous installons pompes à chaleur, climatiseurs, chauffe-eaux et systèmes thermiques performants à Saucats.",
                },
                {
                  question: "Puis-je bénéficier d’aides pour mon installation ?",
                  answer: "Oui, nous vous guidons pour MaPrimeRénov’, les CEE, TVA réduite et autres aides disponibles à Saucats.",
                },
                {
                  question: "Vous couvrez toute la commune de Saucats ?",
                  answer: "Oui, nous intervenons dans tous les quartiers de Saucats, y compris les zones périurbaines et résidentielles.",
                }
              ]}
            />
          </section>
        </div>
      </div>
{/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Saucats ?" */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Un cadre naturel et résidentiel préservé</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      À seulement 25 minutes de Bordeaux, Saucats offre un environnement paisible en lisière de la forêt des Landes. Cette commune de près de 2 500 habitants séduit les familles recherchant calme, espace et qualité de vie.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Entre maisons individuelles avec grands terrains, lotissements récents et bâtis traditionnels, Saucats présente une diversité architecturale idéale pour l’intégration de systèmes de chauffage et climatisation discrets et performants.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Chez ClimGO, nous adaptons chaque solution aux spécificités locales : nature du sol, accès, réglementation thermique et respect de l’environnement résidentiel saucattais.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Saucats</h2>
    <p className="text-white leading-relaxed text-center">
      • Chemin de la Forge : installation d’une pompe à chaleur air/eau pour une maison neuve en zone Bbio.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Route de Léognan : pose d’un climatiseur mural Daikin dans un salon cathédrale, avec gestion domotique.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Allée du Bosquet : entretien annuel d’une installation multisplit dans une maison de 200 m² avec étage.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Rue de l’Église : remplacement d’un ancien chauffe-eau électrique par un modèle thermodynamique plus économique.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Une expertise pensée pour le secteur saucattais</h2>
    <p className="text-white leading-relaxed text-center">
      À Saucats, les distances entre habitations, la végétation abondante et les zones à l’écart du réseau urbain nécessitent des installations robustes et bien dimensionnées. Nos équipements sont prévus pour résister aux conditions extérieures tout en assurant un confort optimal.
    </p>
    <p className="text-white leading-relaxed text-center">
      Nous veillons également à l’intégration esthétique de nos systèmes, notamment dans les maisons ossature bois ou à bardage, très présentes dans la commune.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Discutons ensemble de votre projet à Saucats</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Que vous habitiez le centre de Saucats ou ses hameaux environnants, nous sommes à votre écoute pour tous vos besoins en chauffage, climatisation ou chauffe-eau. Demandez votre devis personnalisé en quelques clics ou appelez-nous directement.
    </p>
  </div>
</div>

     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Saucats ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Vous avez un projet à Saucats ? Recevez rapidement un devis gratuit pour une solution personnalisée.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Saucats
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
    </main>
  );
}