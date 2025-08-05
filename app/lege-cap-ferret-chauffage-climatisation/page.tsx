import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";
import Tableau from "../zones-desservies/component/Tableau";
import Link from "next/link";
export default function LegeCapFerret() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Lège-Cap-Ferret" backgroundImage="/villes/lege.jpg" />
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
          <li className="text-gray-500">Lège-Cap-Ferret</li>
        </ol>
      </nav>
      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Bassin d&apos;Arcachon, Habitant de Lège-Cap-Ferret</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Nichée entre l’océan Atlantique et le bassin d’Arcachon, Lège-Cap-Ferret offre un cadre de vie exceptionnel. Entre villas en bois, cabanes ostréicoles et maisons d’architecte, nous adaptons chaque projet thermique à l’environnement marin et forestier.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            De Claouey au Cap Ferret, en passant par Le Canon ou La Vigne, nous accompagnons les résidences principales comme secondaires avec des solutions adaptées au climat salin, à la végétation dense et aux contraintes d’accès.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Chaque installation est pensée pour conjuguer efficacité énergétique, discrétion esthétique et durabilité, dans le respect du cadre unique du Cap.
          </p>
        </div>
      </section>

      <section className="my-20">
  
      <GoogleReviews ville="Lège-Cap-Ferret" />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Lège-Cap-Ferret</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Du Four à La Vigne, nous couvrons tous les hameaux de Lège-Cap-Ferret. Nos installations s’intègrent harmonieusement dans chaque quartier, en respectant les exigences techniques et esthétiques de la presqu’île.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Lège-Cap-Ferret ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Choisir ClimGO à Lège-Cap-Ferret, c’est faire confiance à une équipe qui connaît parfaitement les spécificités du littoral, les contraintes liées au sel, au vent et aux normes environnementales locales.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Isolation renforcée, appareils silencieux et matériaux résistants aux embruns : nous veillons à la qualité et à la longévité de chaque installation.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Grâce à notre proximité, nous intervenons rapidement à Claouey, Grand Piquey, Le Canon, ou Cap Ferret pour toute installation ou dépannage.
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
            Nous intervenons aussi bien dans les maisons individuelles neuves que dans les bâtisses traditionnelles rénovées. Notre expérience nous permet d’adapter nos solutions aux contraintes architecturales et énergétiques propres à chaque logement.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-[#03144a] mx-auto mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Processus d’installation</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Après une étude personnalisée de votre habitat, nous vous proposons un devis gratuit et détaillé. Nos équipes assurent ensuite une installation soignée, en respectant les délais convenus et les normes en vigueur.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-[#03144a] mx-auto mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
          </svg>
          <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Entretien &amp; maintenance</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Pour garantir la performance et la durabilité de vos équipements, nous proposons des contrats d’entretien personnalisés avec des visites régulières pour vérification, nettoyage et optimisation.
          </p>
        </div>

        <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white mx-auto mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
          </svg>
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières au Teich</h2>
          <p className="text-white leading-relaxed text-center">
            Nous vous accompagnons dans l’obtention des aides telles que MaPrimeRénov’, les Certificats d’Économies d’Énergie (CEE), la TVA réduite ou l’Éco-PTZ, afin de rendre vos projets plus accessibles et avantageux.
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
                  question: "Quels sont vos services à Lège-Cap-Ferret ?",
                  answer: "Nous assurons l’installation, l’entretien et le dépannage de systèmes de chauffage, climatisation et production d’eau chaude sur toute la presqu’île de Lège-Cap-Ferret.",
                },
                {
                  question: "Installez-vous des systèmes adaptés aux résidences secondaires ?",
                  answer: "Oui. Nos systèmes sont connectés et conçus pour une gestion à distance, idéale pour les maisons secondaires sur la presqu’île.",
                },
                {
                  question: "Travaillez-vous dans les villages comme Le Canon ou La Vigne ?",
                  answer: "Absolument. Nous intervenons dans tous les quartiers de Lège-Cap-Ferret, de Claouey à La Vigne, pour vos projets thermiques.",
                }
              ]}
            />
          </section>
        </div>
      </div>
{/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Lège-Cap-Ferret ?" */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Une presqu’île prisée et préservée</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Lège-Cap-Ferret, joyau de la côte girondine, attire aussi bien les résidents permanents que les vacanciers en quête d’authenticité. Avec ses villages ostréicoles, ses plages océanes et son cadre naturel unique, la commune connaît un essor maîtrisé.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Les familles apprécient ses écoles, sa vie de quartier paisible à Lège, ainsi que les commodités locales accessibles même en saison. Les constructions neuves comme les villas traditionnelles y cohabitent harmonieusement.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      ClimGO intervient sur toute la presqu’île : du Grand Crohot à Claouey, du Four au Canon jusqu’au mythique Cap-Ferret. Nos équipements s’adaptent aux contraintes architecturales locales et aux exigences esthétiques imposées par les zones classées.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples d’interventions à Lège-Cap-Ferret</h2>
    <p className="text-white leading-relaxed text-center">
      • Avenue de Bordeaux à Lège : pose d’une PAC air/air Daikin dans une maison secondaire rénovée, avec télécommande connectée.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Quartier des Jacquets : remplacement d’un chauffe-eau électrique par un modèle thermodynamique silencieux, adapté à la proximité du bassin.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Rue des Goélands (Cap-Ferret) : installation d’un système gainable pour climatiser sans dénaturer l’esthétique intérieure d’une villa de prestige.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Impasse des Tourterelles : maintenance annuelle d’un split Mitsubishi dans une résidence secondaire occupée l’été.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Savoir-faire local adapté aux contraintes du Cap</h2>
    <p className="text-white leading-relaxed text-center">
      Le climat océanique et l’air salin imposent des précautions particulières pour préserver la durabilité des installations. Nos équipements sont traités anti-corrosion et posés sur supports spécifiques pour éviter l’encrassement.
    </p>
    <p className="text-white leading-relaxed text-center">
      Nous respectons scrupuleusement les règles d’urbanisme locales, et proposons des solutions intégrées discrètes pour ne pas dénaturer les façades ou toitures en zone sensible.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Votre projet énergétique au Ferret ?</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Vous avez un projet de rénovation, de location saisonnière ou de résidence principale à Lège-Cap-Ferret ? Contactez-nous pour une étude personnalisée. Notre équipe s’adapte à vos contraintes et vous accompagne avec sérieux et discrétion.
    </p>
  </div>
</div>

     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Lège-Cap-Ferret ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Faites confiance à ClimGO pour vos projets. Contactez-nous dès maintenant pour un devis gratuit et personnalisé.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Lège-Cap-Ferret
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