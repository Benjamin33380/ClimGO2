import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";
import Tableau from "../zones-desservies/component/Tableau";
import Link from "next/link";
export default function Gradignan() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Gradignan" backgroundImage="/villes/gradignan.jpg.jpg" />
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
          <li className="text-gray-500">Gradignan</li>
        </ol>
      </nav>
      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Gradignan, ville verte et résidentielle au cœur de la métropole</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Gradignan, connue pour ses parcs, ses équipements publics et son cadre résidentiel, est une commune idéale pour des solutions de confort thermique haut de gamme.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Que vous habitiez près du Bourg, de Mandavit ou du quartier Saint-Géry, ClimGO vous accompagne pour choisir et installer la solution la plus adaptée.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Nos installations sur Gradignan sont pensées pour durer, tout en s’adaptant à l’architecture et aux spécificités locales.
          </p>
        </div>
      </section>

      <section className="my-20">
       <GoogleReviews ville="Gradignan" />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Gradignan</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            De Cayac à Saint-Albe, nous intervenons dans toute la commune avec expertise. Chaque projet est réalisé dans les règles de l’art, pour un confort thermique optimisé toute l’année.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Gradignan ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Faire appel à ClimGO à Gradignan, c’est choisir une équipe locale qui connaît parfaitement les besoins thermiques des logements pavillonnaires et collectifs.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Pompes à chaleur, climatisation gainable ou murale, chauffe-eaux performants : nous adaptons chaque solution à votre habitat.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Notre proximité garantit une réactivité optimale et un suivi rigoureux, du devis à l’entretien annuel.
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
            Maisons de famille, résidences récentes, quartiers anciens : nous intervenons partout à Gradignan avec des solutions sur mesure.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Gradignan</h2>
          <p className="text-white leading-relaxed text-center">
            De nombreuses aides sont accessibles à Gradignan : MaPrimeRénov’, CEE, Éco-PTZ. On vous guide à chaque étape pour en profiter au maximum.
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
                  question: "Quels équipements installez-vous à Gradignan ?",
                  answer: "Pompes à chaleur air/eau, climatisation réversible, chauffe-eaux performants… Nous intervenons dans tous les quartiers de Gradignan."
                },
                {
                  question: "Puis-je bénéficier d’aides locales à Gradignan ?",
                  answer: "Oui, en complément des aides nationales, certaines aides locales peuvent être disponibles. Nous vous accompagnons dans toutes vos démarches."
                },
                {
                  question: "Intervenez-vous dans les résidences neuves de Gradignan ?",
                  answer: "Absolument, nous intervenons dans les logements anciens comme dans les constructions neuves à Gradignan."
                }
              ]}
            />
          </section>
        </div>
      </div>
{/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Gradignan ?" */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Gradignan, ville verte et familiale au sud de Bordeaux</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Située à la lisière de Pessac et Talence, Gradignan séduit par ses nombreux parcs, ses infrastructures scolaires réputées et son cadre de vie arboré. Avec plus de 25 000 habitants, la ville attire autant les familles que les seniors à la recherche de tranquillité.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Entre les écoles Jean Vilar, le lycée des Graves, les zones pavillonnaires calmes et les résidences modernes proches du centre-ville, Gradignan se modernise tout en gardant son cachet naturel et résidentiel.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      ClimGO intervient à Mandavit, Laurenzane, Beausoleil ou encore Saint-Albe, en neuf comme en rénovation. Nos systèmes s’intègrent parfaitement aux maisons des années 70-80 comme aux constructions BBC récentes.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Gradignan</h2>
    <p className="text-white leading-relaxed text-center">
      • Rue des Pins : installation d’une PAC air/eau dans une maison traditionnelle avec radiateurs basse température.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Avenue F. Mauriac : remplacement d’un chauffe-eau par un modèle thermodynamique compact et économique.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Lotissement Laurenzane : mise en place d’un système multisplit pour climatiser plusieurs pièces d’un pavillon rénové.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Résidence Les Terrasses de Gradignan : contrat annuel de maintenance sur des équipements collectifs Daikin.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Des installations pensées pour Gradignan</h2>
    <p className="text-white leading-relaxed text-center">
      À Gradignan, les grands jardins ombragés nécessitent des installations extérieures silencieuses et bien positionnées. Nos équipes prennent en compte chaque contrainte : mitoyenneté, orientation, espace technique ou esthétique.
    </p>
    <p className="text-white leading-relaxed text-center">
      Nous proposons des équipements discrets et efficaces, adaptés aux besoins thermiques spécifiques de Gradignan, tout en respectant les normes environnementales.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Un projet à Gradignan ? On est là.</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Vous habitez à Gradignan ou vous venez d’acheter dans le secteur ? Contactez ClimGO pour des conseils adaptés à votre habitation. On vous accompagne de l’étude à l’entretien, avec la transparence et la qualité d’un partenaire local.
    </p>
  </div>
</div>

     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d’un devis à Gradignan ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Votre logement à Gradignan mérite une installation thermique efficace et pérenne. Contactez-nous pour un devis personnalisé et gratuit.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Gradignan
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