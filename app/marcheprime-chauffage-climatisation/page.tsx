import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";

export default function Marcheprime() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Marcheprime" backgroundImage="/villes/marcheprime.jpg.webp" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Marcheprime, équilibre entre nature et accessibilité</h2>
          <p className="text-gray-800 leading-relaxed text-center">
Entre pins et pistes cyclables, Marcheprime attire par sa douceur de vivre et sa situation idéale entre Bordeaux et le Bassin. Sa croissance maîtrisée en fait un territoire dynamique sans perdre son âme.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
Que vous soyez installé à Croix d’Hins, au Bourg ou dans les hameaux environnants comme Biard, ClimGO adapte ses solutions à la typologie locale : maisons récentes, habitats anciens ou rénovés.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
Avec une parfaite connaissance du secteur, nous intégrons les particularités thermiques de chaque zone pour concevoir des installations durables, performantes et adaptées au climat de la région.
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
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Marcheprime</h2>
          <p className="text-gray-800 leading-relaxed text-center">
De Biard aux lotissements résidentiels du Bourg, notre équipe intervient dans tous les quartiers de Marcheprime. Chaque projet bénéficie d’un accompagnement sur mesure, avec des équipements qui allient confort, discrétion et efficacité énergétique.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Marcheprime ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
Choisir ClimGO, c’est faire confiance à une équipe réactive, ancrée localement. Nos interventions à Marcheprime s’appuient sur des solutions éprouvées et un savoir-faire certifié RGE & QualiPAC.
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
Maisons traditionnelles, extensions bois, pavillons récents : nos solutions s’adaptent à tous les styles présents à Marcheprime. Nous savons composer avec les défis thermiques des bâtis neufs comme anciens.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Marcheprime</h2>
          <p className="text-white leading-relaxed text-center">
Profitez de notre accompagnement dans vos démarches pour réduire vos coûts : primes CEE, MaPrimeRénov’, TVA réduite et Éco-PTZ sont accessibles pour la majorité des projets à Marcheprime.
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
                  question: "Quels équipements installez-vous à Marcheprime ?",
                  answer: "Nous installons pompes à chaleur, climatiseurs, chauffe-eaux thermodynamiques et solutions de chauffage sur mesure à Marcheprime.",
                },
                {
                  question: "Puis-je bénéficier d’aides pour mon installation ?",
                  answer: "Oui, ClimGO vous guide pour obtenir MaPrimeRénov’, les CEE, la TVA réduite et d’autres aides en vigueur.",
                },
                {
                  question: "Vous déplacez-vous dans tout Marcheprime ?",
                  answer: "Bien sûr. Nous intervenons sur tout le territoire de Marcheprime, y compris Croix d’Hins, Biard ou le Bourg.",
                }
              ]}
            />
          </section>
        </div>
      </div>

 {/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Marcheprime ?" */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Un cadre résidentiel prisé entre ville et nature</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Nichée entre Bordeaux et le bassin d’Arcachon, Marcheprime séduit par son environnement boisé, ses pistes cyclables et sa proximité avec la N250. Avec plus de 5 000 habitants, la commune attire des familles en quête de calme, de maisons avec jardin et de solutions de confort thermique adaptées.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Le tissu résidentiel se compose de lotissements récents, d’habitations individuelles et de bâtis plus anciens à rénover. ClimGO intervient dans tous les secteurs : autour de la gare, route de Lacanau, quartier du Bourg, ou près du collège Aliénor d’Aquitaine.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      Nos solutions s’adaptent aux maisons RT2012, aux logements de plain-pied ou à étage, avec une attention particulière portée à la consommation énergétique et à l’intégration visuelle des équipements.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Marcheprime</h2>
    <p className="text-white leading-relaxed text-center">
      • Rue des Palombes : remplacement d’un système fioul par une pompe à chaleur air/eau nouvelle génération.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Lotissement du Bourg : installation de splits muraux silencieux pour une maison familiale avec mezzanine.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Rue du Stade : entretien complet d’un chauffe-eau thermodynamique avec vérification des performances.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Impasse des Genêts : installation d’un plancher chauffant relié à une PAC double service pour chauffage et eau chaude.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Un savoir-faire taillé pour les habitations de Marcheprime</h2>
    <p className="text-white leading-relaxed text-center">
      La nature sableuse du sol et la présence fréquente de pins imposent une attention particulière à l’emplacement des unités extérieures. Chez ClimGO, nous installons sur plots ou dalles isolées pour préserver les performances acoustiques et thermiques.
    </p>
    <p className="text-white leading-relaxed text-center">
      Nous tenons compte des expositions sud/ouest typiques de la commune et des besoins de rafraîchissement l’été, surtout dans les maisons à grande baie vitrée ou orientées plein soleil.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Parlons de votre projet à Marcheprime</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Que vous soyez résident de longue date ou nouvel arrivant, nous étudions votre logement pour vous proposer une solution sur mesure. Demandez votre devis en ligne ou contactez-nous pour planifier une visite technique à Marcheprime.
    </p>
  </div>
</div>
     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Marcheprime ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
Vous avez un projet à Marcheprime ? Bénéficiez d’un devis rapide et gratuit pour une solution sur mesure.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Marcheprime
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
    </main>
  );
}