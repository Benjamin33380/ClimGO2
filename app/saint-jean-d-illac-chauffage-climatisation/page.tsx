import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";

export default function Pessac() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Saint-Jean-d'Illac" backgroundImage="/villes/sji.webp" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Saint-Jean-d&apos;Illac, entre forêt et modernité résidentielle</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Située entre Bordeaux et le bassin d’Arcachon, Saint-Jean-d’Illac offre un cadre de vie paisible, dynamique et arboré.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Que vous soyez dans un lotissement récent, près du Bourg ou du côté de la plaine forestière, ClimGO vous propose des solutions thermiques adaptées.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Nos installations s’intègrent parfaitement aux habitations illacaises, avec discrétion et performance.
          </p>
        </div>
      </section>

      <section className="my-20">
  
       <GoogleReviews ville="Saint-Jean-d&apos;Illac" />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Saint-Jean-d&apos;Illac</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Du Bourg à la forêt d’Illac, nos techniciens interviennent sur tout le territoire communal pour garantir votre confort thermique.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Saint-Jean-d&apos;Illac ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Choisir ClimGO à Saint-Jean-d’Illac, c’est s’appuyer sur un savoir-faire local et des équipements pensés pour le climat illacais.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nous veillons à proposer des solutions silencieuses, esthétiques et économes en énergie.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Notre accompagnement personnalisé vous assure une installation sereine, durable et conforme.
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
            Maisons neuves, habitats de lotissements, résidences en zone boisée : nous adaptons chaque installation aux spécificités de Saint-Jean-d’Illac.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Saint-Jean-d&apos;Illac</h2>
          <p className="text-white leading-relaxed text-center">
            MaPrimeRénov’, CEE, Éco-PTZ… nous vous aidons à maximiser vos aides pour votre projet à Saint-Jean-d’Illac.
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
                  question: "Quels équipements installez-vous à Saint-Jean-d’Illac ?",
                  answer: "Pompes à chaleur, climatisation, chauffe-eaux, radiateurs performants… Nous intervenons dans tous les quartiers d’Illac.",
                },
                {
                  question: "Puis-je bénéficier d’aides locales à Saint-Jean-d’Illac ?",
                  answer: "Oui, certaines aides locales viennent compléter les aides nationales. Nous vous accompagnons dans toutes les démarches.",
                },
                {
                  question: "Travaillez-vous dans toute la commune de Saint-Jean-d’Illac ?",
                  answer: "Oui. De la plaine forestière jusqu’au Bourg, nous couvrons toute la commune avec réactivité.",
                }
              ]}
            />
          </section>
        </div>
      </div>


    {/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Saint-Jean-d’Illac ?" */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
      <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Une ville en pleine évolution résidentielle</h2>
        <p className="text-[#03144a] leading-relaxed text-center">
          Saint-Jean-d’Illac attire chaque année de nouveaux habitants grâce à sa position stratégique entre Bordeaux, Mérignac et le bassin d’Arcachon. Avec plus de 8 000 habitants, la commune allie qualité de vie, calme forestier et dynamisme immobilier.
        </p>
        <p className="text-[#03144a] leading-relaxed text-center">
          Les familles apprécient les infrastructures scolaires (collège Montaigne, écoles communales), les équipements sportifs et la proximité de la D106 pour rejoindre rapidement l’aéroport ou la rocade.
        </p>
        <p className="text-[#03144a] leading-relaxed text-center">
          ClimGO intervient dans tous les quartiers : Le Las, Les Badines, Les Pins ou encore les nouvelles zones pavillonnaires près du centre. Nos équipements s’intègrent aussi bien dans les maisons neuves que dans les habitations traditionnelles des années 80 à 2000.
        </p>
      </div>

      <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Illac</h2>
        <p className="text-white leading-relaxed text-center">
          • Rue François Mauriac : remplacement d’un ancien système électrique par une pompe à chaleur air/air discrète, avec option réversible.
        </p>
        <p className="text-white leading-relaxed text-center">
          • Avenue du Las : installation d’un plancher chauffant pour une maison RT2012, couplé à une PAC air/eau haut rendement.
        </p>
        <p className="text-white leading-relaxed text-center">
          • Résidence Les Chênes : maintenance annuelle de plusieurs splits Mitsubishi dans une copropriété récente.
        </p>
        <p className="text-white leading-relaxed text-center">
          • Allée des Mimosas : remplacement d’un chauffe-eau électrique par un chauffe-eau thermodynamique, avec gain de place et économies sur la facture EDF.
        </p>
      </div>

      <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">Un savoir-faire adapté au territoire illacais</h2>
        <p className="text-white leading-relaxed text-center">
          Le sol sablonneux et les nombreuses zones boisées imposent une vigilance particulière pour les installations extérieures. Chez ClimGO, chaque PAC est installée sur plots ou dalle béton ventilée pour garantir stabilité, silence et longévité.
        </p>
        <p className="text-white leading-relaxed text-center">
          Nous tenons aussi compte de l’exposition des logements illacais, souvent orientés nord/sud avec peu de protections solaires, pour adapter la puissance et le type d’équipements.
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Et si on discutait de votre projet à Illac ?</h2>
        <p className="text-[#03144a] leading-relaxed text-center">
          Que vous soyez propriétaire, primo-accédant ou en rénovation, notre équipe se tient à votre disposition pour échanger sur votre confort thermique à Saint-Jean-d’Illac. Vous pouvez nous joindre en quelques clics via notre formulaire ou par téléphone.
        </p>
      </div>
    </div>

    <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d’un devis à Saint-Jean-d’Illac ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Vous habitez à Saint-Jean-d’Illac ? Offrez-vous un confort thermique sur-mesure. Demandez votre devis personnalisé.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Saint-Jean-d’Illac
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
    </main>
  );
}