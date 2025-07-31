'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ClimatisationPage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const solutions = [
    {
      title: "Climatisation murale",
      image: "/ClimMurale.png",
      intro: "Compacte, performante et facile à intégrer",
      description: "Le choix le plus courant, parfait pour les logements individuels ou petits espaces professionnels.",
      listItems: [
        "Installation rapide",
        "Design discret",
        "Bon rapport qualité/prix"
      ],
      additionalDescription: "Cette solution est idéale pour ceux qui cherchent à allier confort thermique et maîtrise du budget, avec une pose simple et un entretien accessible."
    },
    {
      title: "Climatisation gainable",
      image: "/AnimeGainable.webp",
      intro: "Invisible et ultra silencieuse",
      description: "Solution haut de gamme intégrée dans les combles ou faux plafonds, idéale pour maisons neuves ou rénovées.",
      listItems: [
        "Confort dans chaque pièce",
        "Esthétique parfaite (grilles invisibles)",
        "Idéale avec domotique"
      ],
      additionalDescription: "La clim gainable offre une régulation pièce par pièce, un silence total, et une homogénéité thermique sans compromis."
    },
    {
      title: "Climatisation console",
      image: "/AnimeConsole.webp",
      intro: "Alternative murale pour les zones basses",
      description: "Idéale en rénovation, notamment pour remplacer un radiateur existant, sans gros travaux.",
      listItems: [
        "Installation en partie basse",
        "Double flux pour un confort optimal",
        "Compacte & élégante"
      ],
      additionalDescription: "Une bonne solution pour les espaces où l'installation murale classique n'est pas adaptée."
    },
    {
      title: "Climatisation cassette",
      image: "/AnimeCassette.webp",
      intro: "Discrétion totale pour grands volumes",
      description: "Installée en plafond, parfaite pour les bureaux, commerces ou grands séjours.",
      listItems: [
        "Soufflage 4 directions",
        "Esthétique & efficacité",
        "Haute performance"
      ],
      additionalDescription: "Elle permet une diffusion homogène de l’air avec un encombrement minimal. Un choix pro et élégant."
    }
  ];

  return (
    <div className="bgPage mt-48">
      {/* Section badge titre statique */}
      <section className="section2 mt-16">
        <div className="flex justify-center mb-14">
          <div className="bg-[#2563EB]/10 border border-[#2563EB] text-[#2563EB] rounded-xl px-6 py-4 shadow-sm text-center">
            <h1 className="text-xl md:text-2xl font-bold mb-1 ">Nos solutions de climatisation</h1>
            <strong className="text-sm md:text-base font-medium text-[#2563EB]">Confort & fraîcheur maîtrisée</strong>
          </div>
        </div>
        <strong className="flex justify-center text-center text-gray-700 max-w-3xl mx-auto mb-12 text-base leading-relaxed">
          Découvrez nos systèmes de climatisation pour chaque besoin : murale, gainable, console ou cassette. À chaque logement, sa solution ClimGO.
        </strong>
        
      </section>

      {/* Solutions de climatisation */}
      <section className="py-16 bgPage">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col gap-16">

            {solutions.map((item) => (
              <div key={item.title} className="group flex p-4 flex-col md:flex-row bg-gradient-to-br from-[#f8f9f4] via-[#ffffff] to-[#f0f2ec] border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 group hover:shadow-lg">
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
                  Pourquoi choisir ClimGO pour votre climatisation ?
                </h2>
                <div className="flex justify-center">
                  <strong className="text-xl text-white mb-8 text-center">
                    Un savoir-faire maîtrisé, au service de votre confort toute l&apos;année.
                  </strong>
                </div>
                <strong className="text-lg text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                  Chez ClimGO, chaque projet est pensé sur-mesure. Nous installons des systèmes de climatisation fiables, 
                  discrets et performants, adaptés à vos besoins et à l&apos;esthétique de votre logement. Le confort, sans le compromis.
                </strong>
            </div>
            </section>

          </div>
        </div>
      </section>
    <a
      href="https://www.uneclimpourtous.fr"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-2 right-2 text-xs opacity-10 pointer-events-none"
      style={{ zIndex: -90 }}
    >
      https://www.uneclimpourtous.fr
    </a>
    </div>
  );
}