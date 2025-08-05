import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";
import Tableau from "../zones-desservies/component/Tableau";
import Link from "next/link";
export default function Sanguinet() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Sanguinet" backgroundImage="/villes/sanguinet.jpg" />
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
          <li className="text-gray-500">Sanguinet</li>
        </ol>
      </nav>
      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Sanguinet, entre lac et pinède, un cadre de vie prisé</h2>
          <p className="text-gray-800 leading-relaxed text-center">
Nichée entre forêt landaise et étendues d’eau, Sanguinet séduit par son cadre naturel exceptionnel. La commune attire les familles et les actifs en quête de sérénité tout en restant proches des axes majeurs.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
Du centre-bourg aux quartiers résidentiels proches du lac, ClimGO adapte ses solutions aux besoins variés des habitations de Sanguinet, qu’elles soient anciennes, rénovées ou neuves.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
Nous maîtrisons les contraintes thermiques propres au climat landais pour concevoir des installations durables, économiques et performantes.
          </p>
        </div>
      </section>

      <section className="my-20">
  
       <GoogleReviews ville="Sanguinet" />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Sanguinet</h2>
          <p className="text-gray-800 leading-relaxed text-center">
Du quartier du port à celui des Landes, notre équipe intervient dans tous les secteurs de Sanguinet. Nous proposons des solutions personnalisées alliant confort, efficacité et respect de l’architecture locale.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Sanguinet ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
Choisir ClimGO, c’est faire appel à des spécialistes locaux reconnus pour leur sérieux. Nos interventions à Sanguinet s’appuient sur un savoir-faire RGE & QualiPAC parfaitement adapté aux exigences régionales.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
Nous sélectionnons des équipements fiables et performants, compatibles avec les spécificités thermiques des logements landais.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
Installés à proximité, nous garantissons une grande réactivité, un suivi rigoureux, et des réalisations soignées.
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
Maisons de lotissement, résidences bois, pavillons proches du lac : nos solutions s’intègrent parfaitement à tous les types de logements de Sanguinet. Nous tenons compte des performances thermiques propres à chaque configuration.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Sanguinet</h2>
          <p className="text-white leading-relaxed text-center">
ClimGO vous accompagne dans vos démarches pour bénéficier des aides disponibles à Sanguinet : primes CEE, MaPrimeRénov’, TVA à taux réduit et Éco-PTZ.
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
                  question: "Quels équipements installez-vous à Sanguinet ?",
                  answer: "Nous installons pompes à chaleur, climatiseurs, chauffe-eaux thermodynamiques et solutions de chauffage sur mesure à Sanguinet.",
                },
                {
                  question: "Puis-je bénéficier d’aides pour mon installation ?",
                  answer: "Oui, ClimGO vous guide pour obtenir MaPrimeRénov’, les CEE, la TVA réduite et d’autres aides disponibles à Sanguinet.",
                },
                {
                  question: "Vous déplacez-vous dans tout Sanguinet ?",
                  answer: "Absolument. Nous intervenons dans tous les quartiers de Sanguinet, du centre jusqu’aux abords du lac.",
                }
              ]}
            />
          </section>
        </div>
      </div>

 {/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Sanguinet ?" */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Un village lacustre en forte croissance</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Sanguinet séduit par son cadre de vie paisible au bord du lac, sa forêt environnante et sa proximité avec Biscarrosse et le Bassin d’Arcachon. Avec plus de 4 000 habitants, la commune attire de nombreux projets de construction et de rénovation.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Les résidents profitent d’un environnement naturel protégé, de commerces de proximité, d’équipements scolaires, et d’activités nautiques toute l’année. Le tissu pavillonnaire s’étend dans les quartiers comme le Lac, Canteloup ou les résidences autour du centre-bourg.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      ClimGO intervient régulièrement à Sanguinet pour installer des systèmes de climatisation, pompes à chaleur ou chauffe-eaux thermodynamiques, adaptés à des habitations secondaires comme principales.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Sanguinet</h2>
    <p className="text-white leading-relaxed text-center">
      • Rue des Arbousiers : installation d’un split mural Mitsubishi dans une maison bois de 100 m².
    </p>
    <p className="text-white leading-relaxed text-center">
      • Avenue des Grands Lacs : remplacement d’un ancien chauffe-eau électrique par un modèle thermodynamique compact.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Chemin de Canteloup : pose d’une pompe à chaleur air/eau avec plancher chauffant pour une résidence principale neuve.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Lotissement du Lac : entretien saisonnier d’une climatisation gainable dans une villa secondaire.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Des installations pensées pour le climat landais</h2>
    <p className="text-white leading-relaxed text-center">
      Le climat océanique humide et la proximité du lac nécessitent des équipements résistants à la corrosion et à la salinité. ClimGO sélectionne des modèles performants, traités pour durer dans ces conditions particulières.
    </p>
    <p className="text-white leading-relaxed text-center">
      Nos techniciens adaptent chaque installation au type de sol sableux typique de la région, avec des fixations renforcées et des emplacements étudiés pour limiter les nuisances sonores.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Et si on parlait de votre projet à Sanguinet ?</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Vous habitez Sanguinet ou vous y avez une résidence secondaire ? Contactez-nous pour une étude personnalisée de vos besoins en chauffage, climatisation ou production d’eau chaude. Notre équipe est à votre écoute pour optimiser votre confort toute l’année.
    </p>
  </div>
</div>

     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Sanguinet ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
Vous avez un projet à Sanguinet ? Recevez rapidement un devis gratuit pour une solution personnalisée.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Sanguinet
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