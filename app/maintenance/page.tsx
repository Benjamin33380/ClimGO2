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
            <h2 className="text-xl md:text-2xl font-bold mb-1">Nos solutions de maintenance</h2>
            <p className="text-sm md:text-base font-medium text-[#10B981]">Entretenez vos équipements pour durer</p>
          </div>
        </div>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-base leading-relaxed">
          Découvrez nos solutions de maintenance pour chaque besoin : climatisation, chauffage ou eau chaude. À chaque logement, sa solution ClimGO.
        </p>
      </section>

      {/* Solutions de climatisation */}
      <section className="py-16 bgPage">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col gap-16">

            {solutions.map((item) => (
              <div key={item.title} className="group flex p-4 flex-col md:flex-row bg-gradient-to-br from-[#f8f9f4] via-[#ffffff] to-[#f0f2ec] border border-[#e6e6e6] border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 group hover:shadow-lg">
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
                  Pourquoi choisir ClimGO pour votre maintenance ?                </h2>
                <p className="text-xl text-white mb-8">
                  Un savoir-faire fiable, au service de votre confort.</p>
                <p className="text-lg text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                  Chez ClimGO, on ne se contente pas d&apos;installer. On vous accompagne aussi dans le temps pour garantir la performance, la sécurité et la longévité de vos systèmes de chauffage, climatisation ou eau chaude.
                </p>
                <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed italic">
                  Chez nous, le confort, c’est pas une option. C’est un engagement.
                </p>
            </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}