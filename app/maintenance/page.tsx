'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MaintenancePage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const solutions = [
    {
      title: "Maintenance ClimGO",
      image: "/MaintenanceClim.png",
      intro: "Entretenez vos équipements pour durer",
      description: "Chez ClimGO, on ne se contente pas d'installer. On vous accompagne aussi dans le temps pour garantir la performance, la sécurité et la longévité de vos systèmes de chauffage, climatisation ou eau chaude.",
      listItems: [
        "Prolonger leur durée de vie",
        "Maintenir leur performance",
        "Respecter les garanties fabricants"
      ],
      additionalDescription: "Chez ClimGO, on ne se contente pas d'installer. On vous accompagne aussi dans le temps pour garantir la performance, la sécurité et la longévité de vos systèmes de chauffage, climatisation ou eau chaude."
    },
  ];

  return (
    <div className="bgPage mt-48">
      {/* Section badge titre statique */}
      <section className="section2 mt-16">
        <div className="flex justify-center mb-14">
          <div className="bg-[#10B981]/10 border border-[#10B981] text-[#10B981] rounded-xl px-6 py-4 shadow-sm text-center">
            <h1 className="text-xl md:text-2xl font-bold mb-1">Nos solutions de maintenance</h1>
            <strong className="text-sm md:text-base font-medium text-[#10B981]">Entretenez vos équipements pour durer</strong>
          </div>
        </div>
        <div className="flex justify-center">
          <strong className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-base leading-relaxed">
            Découvrez nos solutions de maintenance pour chaque besoin : climatisation, chauffage ou eau chaude. À chaque logement, sa solution ClimGO.
          </strong>
        </div>
      </section>

      {/* Solutions de climatisation */}
      <section className="py-16 bgPage">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col gap-16">

            {solutions.map((item) => (
              <div key={item.title} className="group flex p-4 flex-col md:flex-row bg-linear-to-br from-[#f8f9f4] via-[#ffffff] to-[#f0f2ec] border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 group hover:shadow-lg">
                <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f8f9f4]">
                  <div className="w-[220px] h-[160px] relative">
                    <Image src={item.image} alt={item.title} fill className="object-contain transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </div>
                <div className="p-6 w-full md:w-1/2 flex flex-col justify-center text-gray-900">
                  <h3 className="text-2xl font-bold text-[#1c1e21]">{item.title}</h3>
                  <p className="text-base text-[#4b4f56] mt-2">{item.intro}</p>
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === item.title ? null : item.title)}
                    className="text-md font-medium text-[#03144a] hover:text-blue-600 hover:underline cursor-pointer transition-colors duration-150 flex items-center space-x-1 mt-2"
                  >
                    <>
                      {expandedIndex === item.title ? 'Voir moins' : 'Voir plus'}
                      <svg className="w-3 h-3 ml-1 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out mt-4 ${
                      expandedIndex === item.title ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-gray-700">{item.description}</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-3">
                      {item.listItems.map((li, idx) => (
                        <li key={idx}>{li}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-700 mt-3">{item.additionalDescription}</p>
                    <p className="text-xs text-gray-500 italic mt-3">Vous êtes intéressé ?</p>
                    <Link href="/contact" className="inline-flex items-center px-4 py-2 bg-[#03144a] text-white text-sm rounded-md hover:bg-[#021035] w-max mt-2">
                      <span>Demander un devis</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Bloc SEO enrichi */}
            <section className="py-20 px-4 max-w-5xl mx-auto text-gray-800">
              <h2 className="text-3xl font-bold text-center mb-6 text-[#03144a]">
                Confier l&apos;entretien de vos systèmes à ClimGO, c’est choisir l’expertise locale
              </h2>
              <p className="text-base leading-relaxed text-center mb-10">
                ClimGO, spécialiste en maintenance de climatisation, chauffage et production d’eau chaude sanitaire en Gironde, vous accompagne tout au long de la vie de vos équipements. Nous intervenons à domicile pour garantir sécurité, durabilité et confort thermique dans chaque logement. Qu’il s’agisse d’une pompe à chaleur air/air, air/eau, d’un chauffe-eau thermodynamique ou d’un système de climatisation gainable, notre équipe assure un suivi technique rigoureux, conforme aux normes en vigueur.
              </p>
              <p className="text-base leading-relaxed text-center mb-6">
                Nos contrats de maintenance personnalisés incluent les vérifications essentielles, le nettoyage, les contrôles de pression et l’ajustement des performances. Grâce à notre présence locale autour de Bordeaux, Arcachon, Marcheprime et leurs alentours, nous garantissons une réactivité optimale, avec un service client humain, précis et ponctuel.
              </p>
              <p className="text-base leading-relaxed text-center text-gray-600 italic">
                Un entretien régulier, c’est l’assurance d’un équipement performant, économique et durable.
              </p>
            </section>

            {/* Bloc SEO complémentaire 2 */}
            <section className="py-20 px-4 max-w-5xl mx-auto text-gray-800">
              <h3 className="text-2xl font-bold text-center mb-6 text-[#03144a]">Pourquoi choisir ClimGO pour votre maintenance ?</h3>
              <p className="text-base leading-relaxed text-center mb-6">
                Un savoir-faire fiable, au service de votre confort.
              </p>
              <p className="text-base leading-relaxed text-center mb-6">
                Chez ClimGO, on ne se contente pas d’installer. On vous accompagne aussi dans le temps pour garantir la performance, la sécurité et la longévité de vos systèmes de chauffage, climatisation ou eau chaude.
              </p>
              <p className="text-base leading-relaxed text-center text-gray-600 italic">
                Chez nous, le confort, c’est pas une option. C’est un engagement.
              </p>
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
                  Pourquoi choisir ClimGO pour votre maintenance ?                </h2>
                <div className="flex justify-center">
                  <p className="text-xl text-white mb-8 text-center">
                  Un savoir-faire fiable, au service de votre confort.</p>
                </div>
                <p className="text-lg text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                  Chez ClimGO, on ne se contente pas d&apos;installer. On vous accompagne aussi dans le temps pour garantir la performance, la sécurité et la longévité de vos systèmes de chauffage, climatisation ou eau chaude.
                </p>
                <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed italic">
                  Chez nous, le confort, c’est pas une option. C’est un engagement.
                </p>
            </div>
            </section>

            {/* Bloc SEO complémentaire */}
            <section className="py-20 px-4 max-w-5xl mx-auto text-gray-800">
              <h3 className="text-2xl font-bold text-center mb-6 text-[#03144a]">Pour quel type de logement ou bâtiment ?</h3>
              <p className="text-base leading-relaxed text-center mb-10">
                Que vous soyez en maison individuelle, en appartement, ou gestionnaire d’un petit local professionnel, ClimGO adapte ses contrats de maintenance à votre situation. Nous assurons l’entretien de vos équipements dans tout le Sud-Ouest, avec des solutions adaptées aux résidences principales, secondaires ou aux petits bâtiments tertiaires.
              </p>

              <h3 className="text-2xl font-bold text-center mb-6 text-[#03144a]">Questions fréquentes</h3>
              <div className="space-y-6">
                <div>
                  <strong className="block text-md font-semibold mb-1">À quelle fréquence faut-il entretenir une pompe à chaleur ?</strong>
                  <p className="text-sm text-gray-700">Il est recommandé de faire entretenir votre pompe à chaleur une fois par an. Cet entretien permet de maintenir son rendement, d’éviter les pannes et de prolonger sa durée de vie.</p>
                </div>
                <div>
                  <strong className="block text-md font-semibold mb-1">L’entretien est-il obligatoire ?</strong>
                  <p className="text-sm text-gray-700">Oui, pour les pompes à chaleur dont la charge gaz frigorifique est au dessus de 2kg, un entretien annuel est obligatoire selon la réglementation française.</p>
                </div>
                <div>
                  <strong className="block text-md font-semibold mb-1">Proposez-vous des contrats annuels ?</strong>
                  <p className="text-sm text-gray-700">Absolument. Nous proposons des contrats annuels sur-mesure incluant le déplacement, la main-d’œuvre et les vérifications techniques nécessaires.</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-base text-gray-700 mb-4">
                  Besoin d’un entretien rapide ou d’un contrat de maintenance personnalisé ? ClimGO intervient sur rendez-vous dans toute la Gironde, notamment à Bordeaux, Arcachon, Marcheprime, Biganos, Gujan-Mestras et alentours.
                </p>
                <Link href="/contact" className="inline-flex items-center px-5 py-3 bg-[#03144a] text-white text-sm rounded-md hover:bg-[#021035]">
                  <span>Demander un devis personnalisé</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}