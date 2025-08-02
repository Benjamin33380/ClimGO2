import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";

export default function Lacanau() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Lacanau" backgroundImage="/villes/laca.jpg" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Littoral Atlantique, Habitant de Lacanau</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Station balnéaire prisée et ville nature, Lacanau offre un cadre de vie entre océan, lacs et forêt de pins. Que vous soyez en résidence principale ou secondaire, ClimGO s’adapte à chaque style de logement pour améliorer votre confort thermique.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Nous accompagnons les familles, les surfeurs de l’année et les retraités installés en bord de plage ou côté Lacanau-ville, avec des solutions sur mesure, pensées pour la performance et l’esthétique.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Nos interventions tiennent compte des spécificités climatiques de la côte et des constructions locales, pour un confort durable tout au long de l’année.
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
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Lacanau</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            De Lacanau-Océan jusqu’au bourg, en passant par les abords du lac, nos équipes interviennent sur tous les secteurs de Lacanau. Construction neuve, maison bois ou habitat plus ancien : nous adaptons nos solutions à chaque configuration.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Lacanau ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Choisir ClimGO à Lacanau, c’est s’appuyer sur une équipe locale, expérimentée, et proche de vos besoins. Nos experts connaissent parfaitement les contraintes du littoral atlantique.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nous allions performance énergétique et finitions soignées pour vous garantir un résultat à la hauteur de vos attentes, avec réactivité et écoute.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Que ce soit pour un dépannage urgent ou un projet complet, nous sommes présents sur toute la commune.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Lacanau</h2>
          <p className="text-white leading-relaxed text-center">
            Nous vous guidons dans les démarches pour bénéficier des aides disponibles à Lacanau : MaPrimeRénov’, Certificats d’Économies d’Énergie (CEE), TVA à taux réduit ou Éco-PTZ.
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
                  question: "Quels sont vos services à Lacanau ?",
                  answer: "Nous assurons l’installation, l’entretien et le dépannage de systèmes de chauffage, climatisation et production d’eau chaude à Lacanau et ses alentours.",
                },
                {
                  question: "Proposez-vous un accompagnement pour les aides ?",
                  answer: "Oui. Nous vous guidons dans les démarches pour obtenir MaPrimeRénov’, les CEE, la TVA réduite ou l’Éco-PTZ, selon votre projet à Lacanau.",
                },
                {
                  question: "Intervenez-vous dans tous les quartiers de Lacanau ?",
                  answer: "Bien sûr. Que vous soyez à Lacanau-Océan, en centre-ville ou près du lac, nous intervenons rapidement et efficacement.",
                }
              ]}
            />
          </section>
        </div>
      </div>
 {/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Lacanau ?" */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Un cadre naturel très prisé</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Entre lac, océan et forêt, Lacanau séduit de plus en plus de résidents et de propriétaires de résidences secondaires. Cette commune du littoral girondin connaît un développement constant tout en préservant son environnement exceptionnel.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Des zones comme Lacanau-Océan, le centre-ville, le Huga ou le Moutchic accueillent des logements très variés. Les habitants profitent d’un cadre de vie apaisant, d’activités nautiques et de pistes cyclables à proximité.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      ClimGO intervient sur l’ensemble du territoire canaulais, pour équiper les maisons de plain-pied, villas bois, constructions neuves RT2012 ou logements rénovés à proximité du lac ou de l’océan.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Lacanau</h2>
    <p className="text-white leading-relaxed text-center">
      • Quartier du Moutchic : installation d’un split mural silencieux pour un studio loué en saison estivale.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Avenue de l’Europe : remplacement d’un chauffage électrique par une pompe à chaleur air/air avec contrôle à distance.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Rue du Général Leclerc : entretien d’un chauffe-eau thermodynamique dans une résidence principale.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Zone Lacanau-Océan : pose de splits dans une maison secondaire avec mode déshumidification intégré.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Nos solutions techniques pour le climat côtier</h2>
    <p className="text-white leading-relaxed text-center">
      Le climat océanique humide de Lacanau nécessite des installations résistantes au sel, aux vents et aux variations de température. Nous privilégions des modèles adaptés au bord de mer, avec protections renforcées et fixations anti-corrosion.
    </p>
    <p className="text-white leading-relaxed text-center">
      Pour les résidences secondaires, nous proposons également des systèmes programmables à distance, pour un confort dès l’arrivée et des économies en votre absence.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Discutons de votre projet à Lacanau</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Vous envisagez une installation thermique sur Lacanau ou Lacanau-Océan ? Notre équipe se déplace sur place pour vous proposer la solution la plus adaptée à votre logement, votre usage et votre budget. Contactez-nous simplement en ligne.
    </p>
  </div>
</div>

     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Lacanau ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Faites confiance à ClimGO pour vos projets à Lacanau.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Lacanau
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
    </main>
  );
}