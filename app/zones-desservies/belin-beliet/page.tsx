import GoogleReviews from "../component/GoogleReviews";
import Testimonials from "../component/Testimonials";
import Faq from "../component/Faq";
import Hero from "../component/Hero";
import Partenaires from "../component/Partenaires";

export default function BelinBeliet() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Belin-Béliet" backgroundImage="/villes/belin.jpg" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Val de l&apos;Eyre, Habitant de Belin-Béliet</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Située au cœur du Val de l&apos;Eyre, la commune de Belin-Béliet se distingue par son environnement naturel remarquable, entre forêts de pins, rivières et sentiers boisés. Nous intervenons dans tous ses quartiers, notamment les lieux-dits Guiton, le Puch, Pernaud ou encore le Télègraphe.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Que vous résidiez au centre-ville, ou dans les hameaux environnants, ClimGO vous propose des solutions de chauffage, climatisation et eau chaude sanitaire pensées pour répondre aux besoins spécifiques des maisons du Val de l&apos;Eyre, tout en respectant les normes énergétiques les plus exigeantes.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Grâce à notre proximité géographique et notre connaissance du tissu local, nous vous accompagnons dans chaque étape de votre projet, en prenant en compte les contraintes d&apos;isolation, de consommation et de configuration de votre logement typique de Belin-Béliet ou de ses alentours.
          </p>
        </div>
      </section>

      <section className="my-20">
  
        <GoogleReviews />
      </section>

      <section
        className="relative bg-fixed bg-[50%_30%] bg-cover bg-no-repeat py-20 mb-12 transition-all duration-700 ease-out"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Belin-Béliet</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Notre expertise couvre l’ensemble des quartiers de Belin-Béliet, des lotissements récents aux secteurs traditionnels. Que vous habitiez dans une maison neuve ou ancienne, nous adaptons nos solutions à chaque type d’habitat. Nous intervenons aussi dans les zones en développement, garantissant un confort optimal grâce à des équipements performants et durables.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <Testimonials />
      </section>

      <div
        className="relative bg-fixed bg-[50%_30%] bg-cover bg-no-repeat py-20 transition-all duration-700 ease-out"
        style={{ backgroundImage: "url('/fond3.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/80 backdrop-blur-md p-6 rounded-lg max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Belin-Béliet ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              En faisant appel à ClimGO, vous bénéficiez d’un accompagnement de proximité, pensé pour les spécificités de Belin-Béliet et ses alentours. Nos techniciens sont certifiés RGE et QualiPAC, garantissant qualité et durabilité des installations.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nous utilisons uniquement du matériel rigoureusement sélectionné pour sa fiabilité et performance. Chaque installation est réalisée avec soin, en respectant les normes en vigueur et l’esthétique de votre habitat.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Situés à proximité, nous intervenons rapidement, limitant les délais d’attente pour une prise en charge efficace, qu’il s’agisse d’une installation neuve ou d’une maintenance.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Belin-Béliet</h2>
          <p className="text-white leading-relaxed text-center">
            Nous vous accompagnons dans l’obtention des aides telles que MaPrimeRénov’, les Certificats d’Économies d’Énergie (CEE), la TVA réduite ou l’Éco-PTZ, afin de rendre vos projets plus accessibles et avantageux.
          </p>
        </div>
      </div>

      <div
        className="relative bg-fixed bg-[50%_30%] bg-cover bg-no-repeat py-20 mb-12 transition-all duration-700 ease-out"
        style={{ backgroundImage: "url('/faq.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/60 backdrop-blur-md p-6 rounded-lg max-w-4xl mx-auto px-4">
          <section>
            <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Mini FAQ locale</h2>
            <Faq
              questions={[
                {
                  question: "Quels services proposez-vous à Belin-Béliet ?",
                  answer: "Nous proposons l'installation, l'entretien et la maintenance de systèmes de chauffage, climatisation, chauffe-eau et pompes à chaleur à Belin-Béliet.",
                },
                {
                  question: "Travaillez-vous avec des aides financières ?",
                  answer: "Oui, nous vous accompagnons pour bénéficier de MaPrimeRénov', des CEE, de la TVA réduite ou encore de l'Éco-PTZ.",
                },
                {
                  question: "Intervenez-vous dans les zones rurales autour de Belin-Béliet ?",
                  answer: "Tout à fait. Nous couvrons Belin-Béliet et ses alentours pour assurer un service de proximité.",
                }
              ]}
            />
          </section>
        </div>
      </div>


     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Belin-Béliet ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Faites confiance à ClimGO pour vos projets. Contactez-nous dès maintenant pour un devis gratuit et personnalisé.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Belin-Béliet 
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
    </main>
  );
}