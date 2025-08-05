import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";
import Tableau from "../zones-desservies/component/Tableau";
import Link from "next/link";
export default function Bordeaux() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Bordeaux" backgroundImage="/villes/bordeaux.jpg" />
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
          <li className="text-gray-500">Bordeaux</li>
        </ol>
      </nav>
      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Bordeaux, élégance urbaine et confort thermique toute l’année</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Capitale du vin et joyau du patrimoine architectural, Bordeaux allie charme historique et modernité. Ses bâtiments en pierre blonde et ses appartements haussmanniens exigent des installations précises et sur mesure.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Que vous soyez dans le quartier des Chartrons, Saint-Michel ou Caudéran, ClimGO adapte chaque installation aux spécificités thermiques de votre habitat.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Grâce à notre ancrage local et nos certifications, nous garantissons des systèmes performants, sobres et discrets, parfaitement intégrés au tissu urbain bordelais.
          </p>
        </div>
      </section>

      <section className="my-20">
  
        <GoogleReviews ville="Bordeaux" />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Bordeaux</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            De la place de la Bourse aux quais de la Garonne, nous intervenons dans toute la métropole bordelaise. Chaque chantier est réalisé avec précision, pour un confort optimal été comme hiver.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Bordeaux ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Faire appel à ClimGO à Bordeaux, c’est choisir une entreprise engagée, qui comprend les particularités climatiques et architecturales de la région bordelaise.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nos pompes à chaleur, climatiseurs et chauffe-eaux sont sélectionnés pour garantir efficacité, discrétion et durabilité, même dans les immeubles anciens ou les échoppes rénovées.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Notre proximité et notre rigueur font la différence : un service rapide, des finitions propres, et un accompagnement administratif complet.
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
            Échoppes typiques, immeubles du centre historique, maisons de ville modernes : nous maîtrisons les contraintes thermiques de tous les types d’habitat à Bordeaux.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Bordeaux</h2>
          <p className="text-white leading-relaxed text-center">
            MaPrimeRénov’, CEE, Éco-PTZ… à Bordeaux, de nombreuses aides sont accessibles. Nous vous aidons à maximiser vos subventions sans vous perdre dans la paperasse.
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
                  question: "Quels équipements installez-vous à Bordeaux ?",
                  answer: "Pompes à chaleur air/eau, climatisation réversible, chauffe-eaux thermodynamiques, radiateurs performants… Nous intervenons dans toute la métropole bordelaise.",
                },
                {
                  question: "Puis-je bénéficier d’aides locales à Bordeaux ?",
                  answer: "Oui, en plus des aides nationales comme MaPrimeRénov’, certaines subventions locales sont parfois disponibles. Nous vous guidons pas à pas.",
                },
                {
                  question: "Travaillez-vous dans le centre-ville de Bordeaux ?",
                  answer: "Absolument. Nous intervenons même dans les zones à accès restreint, en adaptant notre logistique pour garantir la qualité sans compromis.",
                }
              ]}
            />
          </section>
        </div>
      </div>
    {/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Saint-Jean-d’Illac ?" */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Une métropole entre histoire et modernité</h2>
          <p className="text-[#03144a] leading-relaxed text-center">
            Bordeaux, joyau d’Aquitaine, séduit autant par son patrimoine que par sa dynamique urbaine. Avec plus de 250 000 habitants, la ville conjugue art de vivre, innovation et exigence thermique, notamment dans ses quartiers emblématiques.
          </p>
          <p className="text-[#03144a] leading-relaxed text-center">
            Entre les ruelles pavées de Saint-Pierre, les boulevards animés de Gambetta ou les zones résidentielles calmes de Caudéran, chaque logement nécessite une approche technique adaptée à ses contraintes architecturales.
          </p>
          <p className="text-[#03144a] leading-relaxed text-center">
            ClimGO s’adapte à la diversité du bâti bordelais : maisons en pierre de taille, échoppes du XIXe, appartements récents ou rénovés, nous maîtrisons les subtilités thermiques du territoire urbain bordelais.
          </p>
        </div>

        <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Bordeaux</h2>
          <p className="text-white leading-relaxed text-center">
            • Rue Judaïque : remplacement complet d’un système de chauffage gaz par une pompe à chaleur air/eau avec ballon thermodynamique.
          </p>
          <p className="text-white leading-relaxed text-center">
            • Quartier Bacalan : pose de splits gainables dans un loft industriel reconverti, avec régulation par pièce.
          </p>
          <p className="text-white leading-relaxed text-center">
            • Rue Notre-Dame aux Chartrons : installation d’une climatisation murale discrète dans un appartement haussmannien classé.
          </p>
          <p className="text-white leading-relaxed text-center">
            • Résidence Belvédère : maintenance annuelle de PAC dans un ensemble immobilier neuf avec label BBC.
          </p>
        </div>

        <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Une expertise au service du tissu urbain bordelais</h2>
          <p className="text-white leading-relaxed text-center">
            Bordeaux impose souvent des contraintes spécifiques : ventilation dans les échoppes, insonorisation dans les immeubles collectifs, respect de la pierre bordelaise pour les fixations extérieures. Nos équipes interviennent avec rigueur et soin.
          </p>
          <p className="text-white leading-relaxed text-center">
            Chaque PAC est posée avec attention aux normes de copropriété, aux gaines existantes et aux possibilités de raccordement électrique, souvent complexes dans l’hyper-centre historique.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Et si on lançait votre projet bordelais ?</h2>
          <p className="text-[#03144a] leading-relaxed text-center">
            Vous êtes propriétaire à Bordeaux ou vous venez d’acquérir un bien à rénover ? ClimGO vous accompagne dans vos démarches d’amélioration énergétique. Demandez une étude gratuite pour une solution thermique à la hauteur de votre cadre de vie.
          </p>
        </div>
      </div>

     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Bordeaux ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Votre logement bordelais mérite une installation fiable et adaptée. Obtenez un devis gratuit en quelques clics.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Bordeaux
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