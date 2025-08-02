import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";

export default function Pessac() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Pessac" backgroundImage="/villes/pessac.png" />
      </section>

      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pessac, entre nature et dynamisme urbain</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Située entre vignobles et zones d’activité, Pessac allie cadre résidentiel et vitalité économique. De Saige à Monbalon, ClimGO intervient avec précision sur tous types de logements.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Que vous soyez dans le quartier de Saige, Monbalon ou Magonty, ClimGO adapte chaque installation aux spécificités thermiques de votre habitat.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Grâce à notre ancrage local et nos certifications, nous garantissons des systèmes performants, sobres et discrets, parfaitement intégrés au cadre de vie pessacais.
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
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Pessac</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            De Saige à Monbalon, nous intervenons dans toute la commune de Pessac. Chaque chantier est réalisé avec précision, pour un confort optimal été comme hiver.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Pessac ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Faire appel à ClimGO à Pessac, c’est choisir une entreprise engagée, qui comprend les particularités climatiques et architecturales de la région pessacaise.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nos pompes à chaleur, climatiseurs et chauffe-eaux sont sélectionnés pour garantir efficacité, discrétion et durabilité, même dans les maisons traditionnelles ou les quartiers récents.
            </p>
            <p className="text-gray-800 leading-relaxed text-center">
              Notre proximité et notre rigueur font la différence : un service rapide, des finitions propres, et un accompagnement administratif complet.
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
            Maisons individuelles, résidences récentes, logements collectifs : nous maîtrisons les contraintes thermiques de tous les types d’habitat à Pessac.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Pessac</h2>
          <p className="text-white leading-relaxed text-center">
            MaPrimeRénov’, CEE, Éco-PTZ… à Pessac, de nombreuses aides sont accessibles. Nous vous aidons à maximiser vos subventions sans vous perdre dans la paperasse.
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
                  question: "Quels équipements installez-vous à Pessac ?",
                  answer: "Pompes à chaleur air/eau, climatisation réversible, chauffe-eaux thermodynamiques, radiateurs performants… Nous intervenons dans toute la commune de Pessac.",
                },
                {
                  question: "Puis-je bénéficier d’aides locales à Pessac ?",
                  answer: "Oui, en plus des aides nationales comme MaPrimeRénov’, certaines subventions locales sont parfois disponibles. Nous vous guidons pas à pas.",
                },
                {
                  question: "Travaillez-vous dans les différents quartiers de Pessac ?",
                  answer: "Absolument. Nous intervenons dans tous les quartiers, en adaptant notre logistique pour garantir la qualité sans compromis.",
                }
              ]}
            />
          </section>
        </div>
      </div>

 {/* Ajout des sections enrichies juste avant le bloc "Besoin d’un devis à Pessac ?" */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Une ville stratégique entre nature et innovation</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Située au cœur de la métropole bordelaise, Pessac conjugue patrimoine, modernité et attractivité. Forte de plus de 65 000 habitants, la commune séduit par ses quartiers résidentiels, ses espaces verts et sa proximité immédiate avec Bordeaux.
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      C’est aussi une ville universitaire et scientifique dynamique (Université de Bordeaux, technopole Bordeaux InnoCampus), avec un réseau de transports performant (tram B, rocade, gare SNCF).
    </p>
    <p className="text-[#03144a] leading-relaxed text-center">
      ClimGO intervient dans tous les secteurs de Pessac : Saige, Alouette, Toctoucau, Noès, France Alouette ou encore Bellegrave. Nos installations s’adaptent aussi bien aux maisons anciennes en pierre qu’aux logements récents ou collectifs.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Exemples concrets d’interventions à Pessac</h2>
    <p className="text-white leading-relaxed text-center">
      • Avenue Pasteur : installation d’une PAC air/eau avec plancher chauffant dans une maison des années 90.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Résidence Le Monteil : maintenance complète de splits muraux dans un appartement T4 loué à l’année.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Rue des Poilus : remplacement d’un chauffe-eau classique par un chauffe-eau thermodynamique pour une famille de 5 personnes.
    </p>
    <p className="text-white leading-relaxed text-center">
      • Quartier Cap de Bos : pose d’un gainable Mitsubishi invisible dans les combles d’une maison de plain-pied.
    </p>
  </div>

  <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">Des installations pensées pour l’habitat pessacais</h2>
    <p className="text-white leading-relaxed text-center">
      Le bâti pessacais est très varié, allant de l’ancien pavillonnaire aux nouvelles résidences BBC. Chez ClimGO, chaque projet est adapté aux contraintes thermiques du logement et aux règles d’urbanisme en vigueur.
    </p>
    <p className="text-white leading-relaxed text-center">
      Nous privilégions des solutions discrètes, performantes et adaptées aux espaces réduits, en tenant compte de l’exposition et de l’isolation existante.
    </p>
  </div>

  <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Votre projet énergétique sur Pessac commence ici</h2>
    <p className="text-[#03144a] leading-relaxed text-center">
      Vous habitez Pessac ou ses environs ? Nos techniciens ClimGO vous accompagnent dans le choix, l’installation et l’entretien de vos équipements thermiques. Contactez-nous dès aujourd’hui pour un devis ou un diagnostic gratuit.
    </p>
  </div>
</div>
     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Pessac ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Votre logement pessacais mérite une installation fiable et adaptée. Obtenez un devis gratuit en quelques clics.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Pessac
        </a>
      </section>

      <section className="my-20">
        <Partenaires />
      </section>
    </main>
  );
}