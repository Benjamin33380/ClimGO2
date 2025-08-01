import GoogleReviews from "../component/GoogleReviews";
import Testimonials from "../component/Testimonials";
import Faq from "../component/Faq";
import Hero from "../component/Hero";
import Partenaires from "../component/Partenaires";

export default function Audenge() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Audenge" backgroundImage="/villes/audenge.jpg" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Audenge, nature, confort et performance énergétique au cœur du Bassin</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Située entre forêt, bassin et tranquillité, Audenge est une commune prisée pour sa qualité de vie. Ses maisons individuelles, ses lotissements récents et ses bâtisses anciennes demandent des solutions thermiques bien pensées. Nous intervenons aussi dans les lieux-dits voisins comme Hougueyra, Lubec, la Pointe Émile ou encore Bas-Vallon, pour garantir le même niveau de confort et d&apos;exigence.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Que vous soyez à proximité du port d’Audenge, du Domaine de Certes ou en plein cœur de la commune, ClimGO vous accompagne avec des installations adaptées à chaque configuration.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Avec notre connaissance du secteur et nos certifications, nous garantissons un confort optimal en toutes saisons, sans dénaturer l’esthétique de votre maison.
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
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Audenge</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Du centre-ville aux abords du Domaine de Certes, nous intervenons dans tous les quartiers d’Audenge du centre ville au Domaines de Certes. Chaque projet bénéficie de notre expertise pour conjuguer performance et discrétion. Nous couvrons également les secteurs périphériques comme Hougueyra, Lubec, la Pointe Émile ou Bas-Vallon, où notre réactivité fait la différence.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Audenge ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Choisir ClimGO à Audenge, c’est faire confiance à un expert local qui comprend les besoins thermiques des foyers audengeois.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nos équipements sont sélectionnés pour garantir efficacité, discrétion et respect de l’environnement, qu’il s’agisse de maisons en zone pavillonnaire ou de bâtis plus anciens.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Notre proximité et notre savoir-faire vous assurent une intervention soignée, rapide et conforme aux dernières normes.
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
            Maisons de lotissement, pavillons individuels, bâtisses en pierre : nous maîtrisons les contraintes thermiques des habitats à Audenge.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Audenge</h2>
          <p className="text-white leading-relaxed text-center">
            MaPrimeRénov’, CEE, Éco-PTZ… À Audenge, nous vous accompagnons pour obtenir les aides disponibles et optimiser votre investissement.
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
                  question: "Quels équipements installez-vous à Audenge ?",
                  answer: "Pompes à chaleur air/eau, climatisations réversibles, chauffe-eaux thermodynamiques, radiateurs économiques… Nous intervenons sur toute la commune d’Audenge.",
                },
                {
                  question: "Puis-je bénéficier d’aides locales à Audenge ?",
                  answer: "Oui, et nous vous accompagnons dans chaque démarche, de la simulation au montage du dossier.",
                },
                {
                  question: "Intervenez-vous sur des maisons individuelles à Audenge ?",
                  answer: "Oui, nous sommes spécialisés dans l’adaptation de nos équipements aux maisons individuelles, même avec des contraintes spécifiques.",
                }
              ]}
            />
          </section>
        </div>
      </div>


     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Audenge ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Votre maison audengeoise mérite une installation performante, économe et adaptée. Obtenez un devis gratuit dès aujourd’hui.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Audenge
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
    </main>
  );
}