'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ChauffagePage() {
  return (
    <div className=" bgPage">

      {/* Solutions de chauffage */}
      <section className="py-16 bgPage">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <section className="section2 mt-30">
              <div className="flex justify-center mb-14">
                <div className="bg-[#DC2626]/10 border border-[#DC2626] text-[#DC2626] rounded-xl px-6 py-4 shadow-sm text-center">
                  <h1 className="text-xl md:text-2xl font-bold mb-1">Nos solutions de chauffage</h1>
                  <strong className="text-sm md:text-base font-medium text-[#DC2626]">Chaleur & économies</strong>
                </div>
              </div>
              <strong className="flex justify-center text-center text-gray-700 max-w-3xl mx-auto mb-12 text-base leading-relaxed">
                Découvrez nos différentes solutions pour chauffer votre logement efficacement. Chaque technologie est pensée pour répondre à vos besoins de confort, d&apos;économie et d&apos;environnement.
              </strong>
              <div className="flex flex-col gap-12 mt-24">
                {[{
                  title: "Pompe à chaleur air/eau",
                  image: "/PacAirEau.png",
                  intro: "Un confort économique et écologique",
                  content: (
                    <>
                      <p className="text-base leading-relaxed text-gray-600 mb-4">
                        La PAC air/eau récupère l&apos;énergie gratuite de l&apos;air extérieur pour chauffer l&apos;eau de votre réseau. Idéale dans les logements bien isolés.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm mb-4">
                        <li>Réduisez jusqu&apos;à 70% votre facture</li>
                        <li>Compatible avec MaPrimeRénov&apos;, CEE...</li>
                        <li>Chauffage homogène et silencieux</li>
                      </ul>
                      <p className="text-base leading-relaxed text-gray-600 mb-4">
                        C&apos;est une solution idéale pour remplacer une chaudière traditionnelle tout en réduisant son empreinte carbone. Elle s&apos;intègre parfaitement à un plancher chauffant ou à des radiateurs basse température.
                      </p>
                      <p className="text-sm text-gray-500 mb-2 italic">Vous êtes intéressé ?</p>
                      <Link href="/contact" className="climBg bg-[#03144a] hover:bg-[#021035] text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center space-x-2">
                        <span>Demander un devis</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    </>
                  )
                }, {
                  title: "Pompe à chaleur air/air",
                  image: "/PompeChaleurAirAir.webp",
                  intro: "Du confort toute l'année, sans se ruiner",
                  content: (
                    <>
                      <p className="text-base leading-relaxed text-gray-600 mb-4">
                        Chauffez l&apos;hiver, rafraîchissez l&apos;été. Appareil compact et économique.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm mb-4">
                        <li>Deux fonctions en un seul appareil</li>
                        <li>Installation rapide, entretien facile</li>
                        <li>Idéal en rénovation</li>
                      </ul>
                      <p className="text-base leading-relaxed text-gray-600 mb-4">
                        Avec son fonctionnement réversible, vous bénéficiez d&apos;un confort toute l&apos;année sans devoir installer plusieurs systèmes. Elle permet aussi de réaliser des économies importantes sur la facture d&apos;énergie.
                      </p>
                      <p className="text-sm text-gray-500 mb-2 italic">Vous êtes intéressé ?</p>
                      <Link href="/contact" className="climBg bg-[#03144a] hover:bg-[#021035] text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center space-x-2">
                        <span>Demander un devis</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    </>
                  )
                }, {
                  title: "Plancher chauffant",
                  image: "/PlancherChauffantAnime.webp",
                  intro: "Le luxe discret sous vos pieds",
                  content: (
                    <>
                      <p className="text-base leading-relaxed text-gray-600 mb-4">
                        Invisible à l&apos;œil nu, il diffuse une chaleur douce et libère vos murs.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm mb-4">
                        <li>Esthétique & silence absolu</li>
                        <li>Confort pièce par pièce</li>
                        <li>Parfait pour une PAC</li>
                      </ul>
                      <p className="text-base leading-relaxed text-gray-600 mb-4">
                        Ce système est particulièrement adapté aux maisons neuves ou rénovées. Il assure une répartition homogène de la chaleur et améliore significativement le confort thermique.
                      </p>
                      <p className="text-sm text-gray-500 mb-2 italic">Vous êtes intéressé ?</p>
                      <Link href="/contact" className="climBg bg-[#03144a] hover:bg-[#021035] text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center space-x-2">
                        <span>Demander un devis</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    </>
                  )
                }, {
                  title: "Radiateurs",
                  image: "/Radiateur.png",
                  intro: "Le mix parfait entre design et performance",
                  content: (
                    <>
                      <p className="text-base leading-relaxed text-gray-600 mb-4">
                        Radiateurs nouvelle génération, compacts et rapides à chauffer.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm mb-4">
                        <li>Chaleur instantanée</li>
                        <li>Format discret ou décoratif</li>
                        <li>Compatible PAC</li>
                      </ul>
                      <p className="text-base leading-relaxed text-gray-600 mb-4">
                        Les modèles récents offrent un excellent rendement, tout en s&apos;intégrant dans votre déco. Une solution simple, efficace, et sans gros travaux.
                      </p>
                      <p className="text-sm text-gray-500 mb-2 italic">Vous êtes intéressé ?</p>
                      <Link href="/contact" className="climBg bg-[#03144a] hover:bg-[#021035] text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center space-x-2">
                        <span>Demander un devis</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    </>
                  )
                }].map((item, i) => (
                  <div
                    key={i}
                    className="group flex flex-col md:flex-row bg-[#f9f9f5] border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
                  >
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                      <div className="rounded-lg p-2 w-full h-full flex items-center justify-center" style={{ backgroundColor: '#f8f9f4' }}>
                        <div className="w-[220px] h-[160px] relative transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105">
                          <Image src={item.image} alt={item.title} fill className="object-contain transition-transform duration-300 group-hover:scale-105" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 w-full md:w-1/2 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                      <p className="text-md text-[#4a4a4a] mb-4">{item.intro}</p>
                      <details className="text-sm text-gray-600 mb-4">
                        <summary className="cursor-pointer font-medium text-[#03144a] hover:underline flex items-center gap-2 hover:text-blue-600">
                          Voir plus
                          <svg className="w-4 h-4 transform transition-transform group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </summary>
                        <div className="mt-4">{item.content}</div>
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pourquoi choisir ClimGO */}
            <section
              className="section3 relative w-full py-24 mt-24 text-center shadow-md bg-scroll md:bg-fixed"
              style={{
                backgroundImage: "url('/fond3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
                marginLeft: "calc(-50vw + 50%)",
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold climText mb-6" style={{ color: '#ffffff' }}>
                  Pourquoi choisir ClimGO ?
                </h2>
                <div className="flex justify-center">
                  <strong className="text-xl text-white mb-8 text-center">
                    L&apos;alliance du savoir-faire et de la rigueur.
                  </strong>
                </div>
                <strong className="text-lg text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                  Chez ClimGO, chaque installation est réalisée avec précision, exigence et soin. 
                  Nous ne laissons rien au hasard, car votre confort mérite notre engagement le plus total.
                </strong>
                <strong className="text-lg text-white max-w-4xl mx-auto leading-relaxed italic">
                  Chez nous, le confort, c&apos;est pas une option. C&apos;est un engagement.
                </strong>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}