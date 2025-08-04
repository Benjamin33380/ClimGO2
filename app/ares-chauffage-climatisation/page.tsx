import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";
import Tableau from "../zones-desservies/component/Tableau";
export default function Ares() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Arès" backgroundImage="/villes/ares.jpg" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Bassin d&apos;Arcachon, Habitant d&apos;Arès</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Située entre bassin et forêt, Arès séduit par son authenticité, ses pistes cyclables et ses quartiers calmes comme les Quinconces ou Jane de Boy. ClimGO s’adapte à chaque habitat pour assurer votre confort thermique.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Nous accompagnons les familles, retraités et nouveaux arrivants dans leurs projets d’installation, en respectant les zones naturelles protégées et les spécificités locales.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Chaque intervention vise à optimiser la performance énergétique de votre logement tout en préservant son intégration dans ce cadre naturel exceptionnel.
          </p>
        </div>
      </section>

      <section className="my-20">
  
        <GoogleReviews ville="Arès" />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Arès</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Des quartiers comme Domaine de Saint-Brice aux Quinconces, nous couvrons tous les secteurs d’Arès. Nos solutions s’adaptent aux constructions neuves comme aux maisons anciennes, avec un souci constant d’efficacité et de durabilité. Où que vous soyez, nous vous garantissons un service réactif et personnalisé.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Arès ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Choisir ClimGO à Arès, c’est faire appel à des experts qui connaissent les contraintes spécifiques du climat local et la richesse environnementale de la commune.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Matériaux performants, normes rigoureuses et finitions impeccables : chaque projet est traité avec la plus grande exigence, du premier contact à la mise en service.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Notre proximité nous permet d&apos;intervenir rapidement sur tout Arès, pour des dépannages ou des installations urgentes sans attente.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Arès</h2>
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
                  question: "Quels sont vos services à Arès ?",
                  answer: "Nous assurons l’installation, l’entretien et le dépannage de systèmes de chauffage, climatisation et production d’eau chaude à Arès et ses lieux-dits.",
                },
                {
                  question: "Proposez-vous un accompagnement pour les aides ?",
                  answer: "Oui. Nous vous guidons dans les démarches pour obtenir MaPrimeRénov’, les CEE, la TVA réduite ou l’Éco-PTZ, selon votre projet.",
                },
                {
                  question: "Intervenez-vous dans les lieux-dits autour d’Arès ?",
                  answer: "Absolument. Nos techniciens se déplacent dans tous les lieux-dits d’Arès, comme Domaine de Saint-Brice, Quinconces ou Jane de Boy.",
                }
              ]}
            />
          </section>
        </div>
      </div>
    {/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Arès ?" */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
      <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Une ville entre bassin et nature</h2>
        <p className="text-[#03144a] leading-relaxed text-center">
          Arès charme ses habitants avec ses plages paisibles, sa réserve naturelle des prés salés, ses marchés traditionnels et son port ostréicole. Ici, l’authenticité du bassin se mêle à un mode de vie doux et tourné vers la nature.
        </p>
        <p className="text-[#03144a] leading-relaxed text-center">
          Les quartiers comme Jane de Boy, Les Quinconces ou Le Coulin abritent des maisons de style arcachonnais, des villas contemporaines et des résidences familiales. ClimGO s’adapte à chaque typologie de logement.
        </p>
        <p className="text-[#03144a] leading-relaxed text-center">
          Entre jeunes familles en quête de confort moderne et retraités attentifs aux économies d’énergie, les profils sont variés. Nous accompagnons chacun avec précision et respect du cadre naturel.
        </p>
      </div>

      <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Arès</h2>
        <p className="text-white leading-relaxed text-center">
          • Rue du Temple : installation d’une pompe à chaleur air/eau pour une maison bois en bordure de forêt, avec chauffage au sol basse température.
        </p>
        <p className="text-white leading-relaxed text-center">
          • Chemin des Pêcheurs : remplacement d’un ancien climatiseur par une console double flux Mitsubishi dans une villa secondaire.
        </p>
        <p className="text-white leading-relaxed text-center">
          • Avenue de la Libération : maintenance annuelle d’un chauffe-eau thermodynamique dans une maison louée à l’année.
        </p>
        <p className="text-white leading-relaxed text-center">
          • Quartier des Quinconces : intervention en urgence pour fuite sur circuit frigorifique d’un split Daikin.
        </p>
      </div>

      <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">Un savoir-faire local et engagé</h2>
        <p className="text-white leading-relaxed text-center">
          À Arès, le vent marin, la proximité de la pinède et les conditions salines imposent un choix rigoureux de matériel extérieur. Nous utilisons des unités renforcées anticorrosion, fixées sur plots surélevés.
        </p>
        <p className="text-white leading-relaxed text-center">
          Nos conseils prennent aussi en compte les zones inondables et la proximité des zones protégées pour des installations respectueuses de la réglementation locale.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Discutons ensemble de votre projet à Arès</h2>
        <p className="text-[#03144a] leading-relaxed text-center">
          Vous habitez à Arès ou vous y investissez dans une résidence secondaire ? ClimGO vous accompagne du conseil à l’entretien. N’hésitez pas à nous contacter pour échanger sur votre projet.
        </p>
      </div>
    </div>

     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Arès ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Faites confiance à ClimGO pour vos projets. Contactez-nous dès maintenant pour un devis gratuit et personnalisé.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Arès
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