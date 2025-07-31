import GoogleReviews from "../components/GoogleReviews";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";

export default function Mios() {
  return (
    <main className="container px-6 py-10 max-w-5xl mx-auto">
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-[#03144a] mb-6 text-center">Installation de chauffage et climatisation à Mios</h1>
        <p className="text-gray-800 leading-relaxed text-center">
          ClimGO intervient à Mios pour l&apos;installation, l&apos;entretien et la maintenance de systèmes de chauffage, climatisation, chauffe-eau et pompes à chaleur. Située dans le sud-ouest de la France, la commune de Mios bénéficie d’un environnement naturel privilégié entre forêts de pins et proximité de l’océan Atlantique. Le climat océanique, avec ses hivers doux et humides et ses étés parfois chauds, nécessite des solutions énergétiques adaptées pour garantir confort et performance tout au long de l’année.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Mios</h2>
        <p className="text-gray-800 leading-relaxed text-center">
          Notre expertise couvre l’ensemble des quartiers de Mios, des lotissements récents aux secteurs traditionnels. Que vous habitiez dans une maison neuve ou ancienne, nous adaptons nos solutions à chaque type d’habitat. Nous intervenons aussi dans les zones en développement, garantissant un confort optimal grâce à des équipements performants et durables.
        </p>
      </section>

      <section className="mb-12">
        <Testimonials />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Mios ?</h2>
        <p className="text-gray-800 leading-relaxed mb-4 text-center">
          En faisant appel à ClimGO, vous bénéficiez d’un accompagnement de proximité, pensé pour les spécificités de Mios et ses alentours. Nos techniciens sont certifiés RGE et QualiPAC, garantissant qualité et durabilité des installations.
        </p>
        <p className="text-gray-800 leading-relaxed mb-4 text-center">
          Nous utilisons uniquement du matériel rigoureusement sélectionné pour sa fiabilité et performance. Chaque installation est réalisée avec soin, en respectant les normes en vigueur et l’esthétique de votre habitat.
        </p>
        <p className="text-gray-800 leading-relaxed text-center">
          Situés à proximité, nous intervenons rapidement, limitant les délais d’attente pour une prise en charge efficace, qu’il s’agisse d’une installation neuve ou d’une maintenance.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Types de logements desservis</h2>
        <p className="text-gray-800 leading-relaxed text-center">
          Nous intervenons aussi bien dans les maisons individuelles neuves que dans les bâtisses traditionnelles rénovées. Notre expérience nous permet d’adapter nos solutions aux contraintes architecturales et énergétiques propres à chaque logement.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Processus d’installation</h2>
        <p className="text-gray-800 leading-relaxed text-center">
          Après une étude personnalisée de votre habitat, nous vous proposons un devis gratuit et détaillé. Nos équipes assurent ensuite une installation soignée, en respectant les délais convenus et les normes en vigueur.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Entretien &amp; maintenance</h2>
        <p className="text-gray-800 leading-relaxed text-center">
          Pour garantir la performance et la durabilité de vos équipements, nous proposons des contrats d’entretien personnalisés avec des visites régulières pour vérification, nettoyage et optimisation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Aides financières à Mios</h2>
        <p className="text-gray-800 leading-relaxed text-center">
          Nous vous accompagnons dans l’obtention des aides telles que MaPrimeRénov’, les Certificats d’Économies d’Énergie (CEE), la TVA réduite ou l’Éco-PTZ, afin de rendre vos projets plus accessibles et avantageux.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Mini FAQ locale</h2>
        <Faq
          questions={[
            {
              question: "Quels services proposez-vous à Mios ?",
              answer: "Nous proposons l'installation, l'entretien et la maintenance de systèmes de chauffage, climatisation, chauffe-eau et pompes à chaleur à Mios.",
            },
            {
              question: "Travaillez-vous avec des aides financières ?",
              answer: "Oui, nous vous accompagnons pour bénéficier de MaPrimeRénov', des CEE, de la TVA réduite ou encore de l'Éco-PTZ.",
            },
            {
              question: "Intervenez-vous dans les zones rurales autour de Mios ?",
              answer: "Tout à fait. Nous couvrons Mios et ses alentours pour assurer un service de proximité.",
            }
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Avis clients à Mios</h2>
        <GoogleReviews />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Nos autres services</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-3">
          <li><a href="/chauffage" className="text-blue-700 hover:underline">Voir nos solutions de chauffage</a></li>
          <li><a href="/climatisation" className="text-blue-700 hover:underline">Voir nos systèmes de climatisation</a></li>
          <li><a href="/entretien" className="text-blue-700 hover:underline">Voir nos services d&apos;entretien</a></li>
          <li><a href="/chauffe-eau" className="text-blue-700 hover:underline">Voir nos chauffe-eaux</a></li>
          <li><a href="/aides-et-subventions" className="text-blue-700 hover:underline">Voir les aides financières disponibles</a></li>
          <li><a href="/zones-desservies" className="text-blue-700 hover:underline">Retour à la carte des zones desservies</a></li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Mios ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Faites confiance à ClimGO pour vos projets. Contactez-nous dès maintenant pour un devis gratuit et personnalisé.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Mios
        </a>
      </section>
    </main>
  );
}