import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";
import Tableau from "../zones-desservies/component/Tableau";
export default function SaintAubinDeMedoc() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Saint-Aubin-de-Médoc" backgroundImage="/villes/sadm.jpg" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Saint-Aubin-de-Médoc, confort et modernité au cœur des Landes girondines</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Située entre forêt et dynamisme périurbain, Saint-Aubin-de-Médoc offre un cadre de vie privilégié pour ses habitants.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Des quartiers de La Canau à celui du Bourg, ClimGO vous accompagne avec des installations de qualité, pensées pour durer.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Nous intervenons sur tous types d’habitations aubinoises, avec des solutions sur mesure alliant performance, discrétion et esthétique.
          </p>
        </div>
      </section>

      <section className="my-20">
  
       <GoogleReviews ville="Saint-Aubin-de-Médoc" />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Saint-Aubin-de-Médoc</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            De La Canau au centre-ville, nos équipes interviennent partout à Saint-Aubin-de-Médoc pour garantir votre confort thermique en toute saison.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Saint-Aubin-de-Médoc ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Chez ClimGO, nous connaissons parfaitement les particularités de Saint-Aubin-de-Médoc et adaptons nos solutions aux réalités locales.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nous combinons efficacité, discrétion et adaptabilité pour chaque projet, du pavillon familial à la maison contemporaine.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Notre équipe vous accompagne aussi dans toutes vos démarches administratives, avec rigueur et disponibilité.
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
            Maisons récentes, demeures de caractère ou lotissements résidentiels : nous adaptons chaque installation aux spécificités de Saint-Aubin-de-Médoc.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Saint-Aubin-de-Médoc</h2>
          <p className="text-white leading-relaxed text-center">
            ClimGO vous aide à obtenir toutes les aides disponibles à Saint-Aubin-de-Médoc : MaPrimeRénov’, CEE, TVA réduite…
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
                  question: "Quels équipements installez-vous à Saint-Aubin-de-Médoc ?",
                  answer: "Pompes à chaleur, climatisation, chauffe-eaux, planchers chauffants… Nous intervenons dans tous les quartiers de Saint-Aubin.",
                },
                {
                  question: "Y a-t-il des aides spécifiques à Saint-Aubin-de-Médoc ?",
                  answer: "Oui, en plus des aides nationales, certaines aides locales existent. ClimGO vous guide à chaque étape.",
                },
                {
                  question: "Couvrez-vous toute la commune de Saint-Aubin-de-Médoc ?",
                  answer: "Oui, nos équipes se déplacent dans tous les quartiers, y compris La Canau et les zones pavillonnaires.",
                }
              ]}
            />
          </section>
        </div>
      </div>

{/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Saint-Aubin-de-Médoc ?" */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Un environnement privilégié entre pinède et modernité</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      À moins de 30 minutes de Bordeaux, Saint-Aubin-de-Médoc séduit par son cadre boisé, ses grands terrains et son ambiance résidentielle haut de gamme. Avec un peu plus de 7 000 habitants, la commune attire les familles et cadres en quête de tranquillité et d’espace.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Villas d’architecte, maisons traditionnelles ou nouvelles constructions RT2012, chaque projet demande une attention particulière. Chez ClimGO, nous adaptons nos solutions aux exigences thermiques et esthétiques du secteur.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Nos installations répondent parfaitement aux attentes des foyers saint-aubinois, soucieux d’allier performance, discrétion et intégration paysagère.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Saint-Aubin-de-Médoc</h2>
    <p className="text-white leading-relaxed text-center">
      • Allée du Bourdieu : installation d’une pompe à chaleur air/eau pour une maison en ossature bois.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Rue de la Gravière : pose d’une climatisation gainable discrète dans une villa contemporaine.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Lotissement Les Chênes : maintenance annuelle de systèmes multi-split Mitsubishi.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Route de Castelnau : remplacement d’un ancien chauffe-eau électrique par un modèle thermodynamique compact.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Des solutions pensées pour le cadre boisé de Saint-Aubin</h2>
    <p className="text-white leading-relaxed text-center">
      Le relief plat, les haies hautes et l’ombre permanente influencent le choix des équipements à Saint-Aubin-de-Médoc. Nos techniciens prennent en compte l’orientation, l’ensoleillement et l’accessibilité pour une installation optimale.
    </p>
    <p className="text-white leading-relaxed text-center">
      Nous veillons à préserver la tranquillité sonore et l’esthétique extérieure, souvent recherchées dans les zones pavillonnaires entourées de pins.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Discutons de votre confort thermique à Saint-Aubin</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Vous envisagez une rénovation, une construction ou un simple remplacement d’équipement ? ClimGO vous accompagne à Saint-Aubin-de-Médoc avec des solutions sur mesure. Contactez-nous pour un devis clair et une étude personnalisée.
    </p>
  </div>
</div>
     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d’un devis à Saint-Aubin-de-Médoc ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Vous vivez à Saint-Aubin-de-Médoc ? Profitez d’un confort thermique sur mesure grâce à ClimGO. Demandez votre devis personnalisé.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Saint-Aubin-de-Médoc
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