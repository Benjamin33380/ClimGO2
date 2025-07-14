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
    <div className=" bgPage">
      {/* Section badge titre statique */}
      <section className="section2 mt-16">
        <div className="flex justify-center mb-14">
          <div className="bg-blue-50 border border-blue-300 text-blue-700 rounded-xl px-6 py-4 shadow-sm text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-1">Nos solutions de climatisation</h2>
            <p className="text-sm md:text-base font-medium text-blue-600">Confort & fraîcheur maîtrisée</p>
          </div>
        </div>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-base leading-relaxed">
          Découvrez nos systèmes de climatisation pour chaque besoin : murale, gainable, console ou cassette. À chaque logement, sa solution ClimGO.
        </p>
      </section>

      {/* Solutions de climatisation */}
      <section className="py-16 bgPage">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">

            {solutions.map((item) => (
              <div key={item.title} className="group flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 group hover:shadow-lg">
                <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f8f9f4]">
                  <div className="w-[220px] h-[160px] relative">
                    <Image src={item.image} alt={item.title} fill className="object-contain transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </div>
                <div className="p-6 w-full md:w-1/2 flex flex-col justify-center text-gray-900">
                  <h3 className="text-lg font-bold text-[#1c1e21]">{item.title}</h3>
                  <p className="text-base text-[#4b4f56] mt-2">{item.intro}</p>
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === item.title ? null : item.title)}
                    className="text-sm font-medium text-[#03144a] hover:text-[#021035] transition-colors duration-150 flex items-center space-x-1 mt-2"
                  >
                    <>
                      {expandedIndex === item.title ? 'Voir moins' : 'Voir plus'}
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="mb-20 text-center py-16">
              <h2 className="text-3xl font-bold climText mb-6">
                Pourquoi choisir ClimGO pour votre climatisation ?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Un savoir-faire maîtrisé, au service de votre confort toute l&apos;année.
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Chez ClimGO, chaque projet est pensé sur-mesure. Nous installons des systèmes de climatisation fiables, 
                discrets et performants, adaptés à vos besoins et à l&apos;esthétique de votre logement. Le confort, sans le compromis.
              </p>
              <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold climText mb-4">Engagement ClimGO ?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vous garantir une température idéale en toute saison, un appareil bien posé, silencieux, économe… 
                  et un service qui reste joignable quand vous en avez besoin.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}