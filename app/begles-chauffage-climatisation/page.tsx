import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";
import Tableau from "../zones-desservies/component/Tableau";
import Link from "next/link";
export default function Begles() {
  return (
    <main className="px-0">
      <section className="w-full">
        <Hero ville="Bègles" backgroundImage="/villes/begles.jpg" />
      </section>
      <nav className="max-w-7xl mx-auto px-4 text-sm text-gray-600 my-6" aria-label="Fil d'Ariane">
        <ol className="list-reset flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:underline text-[#03144a]">Accueil</Link>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link href="/zones-desservies" className="hover:underline text-[#03144a]">Zones desservies</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-500">Bègles</li>
        </ol>
      </nav>
      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Bègles, ville dynamique et confort thermique maîtrisé</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Bègles est une commune dynamique située en proche banlieue de Bordeaux, connue pour son mélange d’urbanisme moderne et de quartiers historiques. Ses habitations variées nécessitent des solutions de chauffage et de climatisation adaptées.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Que vous soyez situé près du centre-ville, de la Gare ou du quartier Saint-Bruno, ClimGO conçoit et installe des équipements thermiques adaptés à votre habitat.
          </p>
          <p className="text-gray-800 leading-relaxed text-center">
            Avec notre expérience locale et nos certifications, nous assurons des installations durables, économiques et parfaitement intégrées aux exigences des habitations de Bègles.
          </p>
        </div>
      </section>

      <section className="my-20">
        <GoogleReviews ville="Bègles" />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/mo.png')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Nos interventions à Bègles</h2>
          <p className="text-gray-800 leading-relaxed text-center">
            Du centre-ville aux quartiers périphériques en passant par les zones résidentielles, nous intervenons dans toute la commune de Bègles avec précision. Chaque chantier est réalisé avec soin, pour un confort optimal été comme hiver.
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
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">Pourquoi choisir ClimGO à Bègles ?</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Faire appel à ClimGO à Bègles, c’est choisir une entreprise engagée, qui comprend les particularités climatiques et architecturales de la commune.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">
              Nos pompes à chaleur, climatiseurs et chauffe-eaux sont sélectionnés pour garantir efficacité, discrétion et durabilité, que ce soit dans les résidences familiales ou les logements étudiants.
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
            Résidences étudiantes, maisons familiales, logements collectifs : nous maîtrisons les contraintes thermiques de tous les types d’habitat à Bègles.
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
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Aides financières à Bègles</h2>
          <p className="text-white leading-relaxed text-center">
            MaPrimeRénov’, CEE, Éco-PTZ… à Bègles, de nombreuses aides sont accessibles. Nous vous aidons à maximiser vos subventions sans vous perdre dans la paperasse.
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
                  question: "Quels équipements installez-vous à Bègles ?",
                  answer: "Pompes à chaleur air/eau, climatisation réversible, chauffe-eaux thermodynamiques, radiateurs performants… Nous intervenons dans tous les quartiers de Bègles.",
                },
                {
                  question: "Puis-je bénéficier d’aides locales à Bègles ?",
                  answer: "Oui, en plus des aides nationales comme MaPrimeRénov’, certaines subventions locales sont parfois disponibles. Nous vous accompagnons dans toutes vos démarches.",
                },
                {
                  question: "Intervenez-vous dans les zones pavillonnaires de Bègles ?",
                  answer: "Oui, nous intervenons dans l’ensemble de la commune, que ce soit dans les quartiers résidentiels calmes ou les secteurs plus isolés."
                }
              ]}
            />
          </section>
        </div>
      </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
    <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Une commune urbaine aux visages multiples</h2>
      <p className="text-[#03144a] leading-relaxed text-center">
        Située aux portes de Bordeaux, Bègles est une ville en constante mutation, entre habitat ancien en pierre bordelaise et programmes immobiliers modernes autour de la ZAC des Sècheries ou du quartier Terre Sud.
      </p>
      <p className="text-[#03144a] leading-relaxed text-center">
        Connue pour sa ligne de tram C, ses établissements scolaires (Lycée Vaclav Havel, écoles Albert Camus), ses équipements culturels (Le Carré-Colonnes), Bègles attire de plus en plus de jeunes familles et de professionnels en quête de confort urbain.
      </p>
      <p className="text-[#03144a] leading-relaxed text-center">
        Nos interventions couvrent tous les secteurs, des échoppes proches de la gare de Bègles aux résidences neuves du côté du parc de Mussonville ou du centre commercial Rives d’Arcin.
      </p>
    </div>

    <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">Chantiers réalisés récemment à Bègles</h2>
      <p className="text-white leading-relaxed text-center">
        • Rue Léon Gambetta : pose d’une pompe à chaleur air/eau pour une maison de ville en pierre, avec circuit radiateurs existant.
      </p>
      <p className="text-white leading-relaxed text-center">
        • Quartier Terre Sud : climatisation gainable sur un logement T4 neuf RT2012, avec coffrage discret et module connecté.
      </p>
      <p className="text-white leading-relaxed text-center">
        • Boulevard Jean-Jacques Bosc : remplacement d’un chauffe-eau électrique par un modèle thermodynamique de 270 L.
      </p>
      <p className="text-white leading-relaxed text-center">
        • Avenue Salvador Allende : maintenance d’un système split Mitsubishi avec nettoyage complet et contrôle de rendement.
      </p>
    </div>

    <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">Des solutions pensées pour le tissu urbain béglais</h2>
      <p className="text-white leading-relaxed text-center">
        Entre mitoyenneté forte, petits jardins et fortes amplitudes thermiques, chaque installation à Bègles demande un diagnostic précis. Nos équipes adaptent les solutions selon l’orientation, l’espace disponible et les habitudes de vie.
      </p>
      <p className="text-white leading-relaxed text-center">
        Les PAC sont fixées sur plots ou supports muraux pour limiter les nuisances sonores, et les unités intérieures sont choisies pour leur discrétion et leur efficacité énergétique.
      </p>
    </div>

    <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">Et votre projet à Bègles, on en parle ?</h2>
      <p className="text-[#03144a] leading-relaxed text-center">
        Vous envisagez de moderniser votre système de chauffage, d’ajouter une climatisation réversible ou de remplacer un chauffe-eau à Bègles ? Faites appel à ClimGO. Un technicien peut se déplacer rapidement pour évaluer les besoins sur place.
      </p>
    </div>
  </div>
     <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">Besoin d&apos;un devis à Bègles ?</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">
          Votre logement à Bègles mérite une installation thermique fiable et performante. Obtenez un devis gratuit personnalisé.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition"
        >
          Demandez votre devis gratuit à Bègles
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