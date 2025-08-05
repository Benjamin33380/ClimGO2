import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";
import Tableau from "../zones-desservies/component/Tableau";
import Link from "next/link";
export default function Martignas() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Martignas-sur-Jalle" backgroundImage="/villes/marti.jpg" />
      </section>
      <nav className="max-w-7xl mx-auto px-4 text-sm text-gray-600 my-6" aria-label="Fil d'Ariane">
        <ol className="list-reset flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:underline text-[#03144a]">Accueil</Link>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link href="/zones-desservies" className="hover:underline text-[#03144a]">Zones desservies</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-500">Martignas-sur-Jalle</li>
        </ol>
      </nav>
      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Martignas-sur-Jalle, confort et performance entre Bordeaux et Médoc</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Entre tradition girondine et modernité résidentielle, Martignas-sur-Jalle offre un cadre de vie prisé.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            De Beauséjour au centre-ville, ClimGO vous accompagne avec des solutions fiables et durables.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Nous intervenons sur tous types d’habitations martignassaises avec des installations sur mesure, performantes et esthétiques.
          </p>
        </div>
      </section>

      <section className="my-20">
  
      <GoogleReviews ville="Martignas-sur-Jalle" />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Martignas-sur-Jalle</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Que vous soyez à Beauséjour ou dans un lotissement moderne, nos équipes interviennent dans toute la commune pour assurer votre confort thermique.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Martignas-sur-Jalle ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Chez ClimGO, nous connaissons les besoins spécifiques des foyers de Martignas-sur-Jalle.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nous proposons des solutions discrètes, efficaces et adaptées à chaque type de logement.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Notre équipe vous accompagne aussi dans vos démarches administratives, avec rigueur et proximité.
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
            Maisons individuelles, pavillons neufs ou logements rénovés : chaque installation est pensée pour les réalités de Martignas-sur-Jalle.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Martignas-sur-Jalle</h2>
          <p className="text-white leading-relaxed text-center">
            ClimGO vous accompagne pour bénéficier de toutes les aides disponibles à Martignas-sur-Jalle : MaPrimeRénov’, CEE, TVA réduite…
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
                  question: "Quels équipements installez-vous à Martignas-sur-Jalle ?",
                  answer: "Pompes à chaleur, climatisation, chauffe-eaux, planchers chauffants… Nous intervenons dans toute la commune.",
                },
                {
                  question: "Y a-t-il des aides spécifiques à Martignas-sur-Jalle ?",
                  answer: "Oui, en plus des aides nationales, certaines aides locales existent. ClimGO vous guide à chaque étape.",
                },
                {
                  question: "Couvrez-vous toute la commune de Martignas-sur-Jalle ?",
                  answer: "Oui, nos équipes se déplacent dans tous les quartiers de Martignas, y compris Beauséjour et les zones pavillonnaires.",
                }
              ]}
            />
          </section>
        </div>
      </div>
  {/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Martignas-sur-Jalle ?" */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Un cadre de vie recherché entre ville et nature</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Située entre Bordeaux, Mérignac et Saint-Jean-d’Illac, Martignas-sur-Jalle connaît un véritable essor résidentiel. Avec près de 7 500 habitants, cette commune paisible offre un équilibre idéal entre dynamisme local, environnement naturel et proximité des grands axes.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Les familles y trouvent des infrastructures modernes, des établissements scolaires appréciés et un tissu pavillonnaire varié, allant des maisons neuves RT2012 aux constructions plus anciennes à rénover.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      ClimGO intervient à Martignas dans tous les secteurs : quartier de la Jalle, chemin du Blayais, avenue du 18 Juin, ou près du collège Aliénor d’Aquitaine. Nos solutions s’adaptent à chaque typologie de logement.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Interventions techniques à Martignas</h2>
    <p className="text-white leading-relaxed text-center">
      • Rue de Capeyron : installation d’un système gainable pour une maison familiale à étage avec combles isolés.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Quartier des Palombes : remplacement d’un ancien chauffage électrique par une PAC air/eau avec plancher chauffant.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Avenue Jean Moulin : maintenance annuelle d’une climatisation multisplit dans un pavillon des années 2000.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Chemin de la Jalle : pose d’un chauffe-eau thermodynamique avec gestion connectée pour optimiser la consommation.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Une expertise adaptée aux contraintes locales</h2>
    <p className="text-white leading-relaxed text-center">
      Le sol argilo-sableux et les haies denses typiques des quartiers résidentiels de Martignas nécessitent des précautions spécifiques pour les unités extérieures. Nos équipes anticipent les risques d’humidité et de vibration pour chaque installation.
    </p>
    <p className="text-white leading-relaxed text-center">
      Grâce à une étude d’ensoleillement précise, nous ajustons la puissance des équipements selon l’exposition réelle du logement, souvent orientée est/ouest dans la région.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Votre projet énergétique à Martignas-sur-Jalle</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Vous habitez Martignas ou vous venez d’y acquérir un bien ? Faites confiance à ClimGO pour moderniser votre confort thermique. Nos experts se déplacent gratuitement pour évaluer vos besoins et vous proposer un devis clair et personnalisé.
    </p>
  </div>
</div>

     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d’un devis à Martignas-sur-Jalle ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Vous vivez à Martignas-sur-Jalle ? Profitez d’un confort thermique sur mesure grâce à ClimGO. Demandez votre devis personnalisé.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Martignas-sur-Jalle
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
      <section className="my-20">
        <Tableau />
      </section>
    </main>
  );
}