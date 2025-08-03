import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";

export default function Arcachon() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Arcachon" backgroundImage="/villes/arcachon.jpg" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Arcachon, élégance balnéaire et confort toute l’année</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Connue pour son front de mer emblématique, ses villas typiques et ses plages de sable fin, Arcachon est une destination prisée autant pour la résidence principale que secondaire. 
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Que vous soyez du centre-ville, du Moulleau ou du quartier de l’Aiguillon, ClimGO adapte ses solutions à l’architecture variée d’Arcachon.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Grâce à notre expertise locale, nous concevons des installations performantes, esthétiques et adaptées à l’humidité et au climat océanique.
          </p>
        </div>
      </section>

      <section className="my-20">
  
        <GoogleReviews ville="Arcachon" />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Arcachon</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            De la Ville d’Hiver à la jetée Thiers, nous intervenons dans tous les quartiers d’Arcachon. Chaque projet bénéficie d’un accompagnement personnalisé, avec des équipements performants et discrets.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Arcachon ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Choisir ClimGO, c’est faire confiance à une équipe réactive, ancrée localement. Nos interventions à Arcachon s’appuient sur des solutions éprouvées et un savoir-faire certifié RGE & QualiPAC.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nos installations sont pensées pour durer, avec un matériel haut de gamme sélectionné pour répondre aux exigences climatiques et architecturales de la région.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Proches de chez vous, nous vous assurons une grande réactivité, un accompagnement clair, et des chantiers menés avec exigence et professionnalisme.
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
            Maisons traditionnelles, extensions bois, pavillons récents : nos solutions s’adaptent à tous les styles présents à Arcachon. Nous savons composer avec les défis thermiques des bâtis neufs comme anciens.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Arcachon</h2>
          <p className="text-white leading-relaxed text-center">
            Nos experts vous accompagnent pour bénéficier des aides disponibles à Arcachon : MaPrimeRénov’, CEE, Éco-PTZ, TVA réduite… Nous simplifions les démarches pour vous.
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
                  question: "Quels équipements installez-vous à Arcachon ?",
                  answer: "Nous installons pompes à chaleur, climatiseurs, chauffe-eaux thermodynamiques et systèmes de chauffage à Arcachon.",
                },
                {
                  question: "Puis-je bénéficier d’aides pour mon installation ?",
                  answer: "Oui, ClimGO vous guide pour obtenir MaPrimeRénov’, les CEE, la TVA réduite et d’autres aides en vigueur.",
                },
                {
                  question: "Vous déplacez-vous dans toute la ville d’Arcachon ?",
                  answer: "Bien sûr. Nous intervenons dans tous les quartiers d’Arcachon, y compris Le Moulleau, l’Aiguillon ou la Ville d’Hiver.",
                }
              ]}
            />
          </section>
        </div>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
      <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Un art de vivre entre bassin et pinède</h2>
        <p className="text-[#03144a] leading-relaxed text-center">
          Arcachon séduit par son élégance naturelle, sa baie aux reflets changeants et son patrimoine architectural. Des quartiers paisibles de l’Aiguillon aux villas cossues de la Ville d’Hiver, chaque recoin d’Arcachon raconte une histoire.
        </p>
        <p className="text-[#03144a] leading-relaxed text-center">
          Avec plus de 11 000 habitants, la ville voit fleurir des projets de rénovation et de modernisation, mêlant charme d’antan et exigences thermiques actuelles. ClimGO s’y adapte avec finesse et rigueur.
        </p>
        <p className="text-[#03144a] leading-relaxed text-center">
          Nos interventions s’étendent de la place des Marquises au front de mer, sans oublier les résidences secondaires nichées près des forêts domaniales ou les logements collectifs récents autour de la gare.
        </p>
      </div>

      <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">Zoom sur nos interventions à Arcachon</h2>
        <p className="text-white leading-relaxed text-center">
          • Boulevard de la Plage : remplacement d’un ancien système de chauffage au fioul par une pompe à chaleur air/eau haut rendement.
        </p>
        <p className="text-white leading-relaxed text-center">
          • Allée des Bougainvillées : installation discrète d’un split mural dans une villa classée, sans dénaturer les volumes intérieurs.
        </p>
        <p className="text-white leading-relaxed text-center">
          • Rue du Maréchal de Lattre : mise en place d’un chauffe-eau thermodynamique dans une résidence secondaire, avec surveillance à distance.
        </p>
        <p className="text-white leading-relaxed text-center">
          • Quartier Pereire : entretien préventif de plusieurs consoles Daikin installées en bord de mer.
        </p>
      </div>

      <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">Un savoir-faire affiné pour le climat océanique</h2>
        <p className="text-white leading-relaxed text-center">
          Le climat arcachonnais, entre embruns salins, humidité et vents marins, nécessite un dimensionnement précis et des équipements durables. Nos installations sont pensées pour résister aux variations climatiques tout en restant discrètes.
        </p>
        <p className="text-white leading-relaxed text-center">
          Nous privilégions des unités extérieures en matériaux traités anticorrosion et des systèmes réversibles optimisés pour les résidences secondaires, souvent inhabitées plusieurs mois par an.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Discutons de votre projet à Arcachon</h2>
        <p className="text-[#03144a] leading-relaxed text-center">
          Que votre logement soit en centre-ville, au Moulleau ou vers Abatilles, notre équipe s’engage à vous proposer une solution sur-mesure, respectueuse du bâti et de vos attentes. Contactez-nous pour un devis ou une simple prise d’informations.
        </p>
      </div>
    </div>

     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Arcachon ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Vous avez un projet à Arcachon ? Bénéficiez d’un devis gratuit pour une solution adaptée à votre logement.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Arcachon
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
    </main>
  );
}