'use client';

import React, { useState } from 'react';
import { IoWater, IoFlame, IoSnow, IoSettings } from 'react-icons/io5';
import Link from 'next/link';
import Tableau from '../zones-desservies/component/Tableau';
export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="min-h-screen bgPage">
      {/* Hero Section */}
      <section
        className="relative py-32 bgPage bg-cover bg-center"
        style={{
          backgroundImage: "url('/serv.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '600px'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container relative z-10 mx-auto px-4 text-center mt-64">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-xl">
            Notre savoir-faire à votre service
          </h1>
          <strong className="text-xl text-white max-w-3xl mx-auto mb-8">
            Nos services ClimGO couvrent tous vos besoins en chauffage, climatisation, chauffe-eau et entretien.
          </strong>
          <strong className="text-lg text-white max-w-4xl mx-auto leading-relaxed">
            ClimGO met tout son savoir-faire à votre service pour concrétiser vos projets d&apos;équipement thermique. 
            Chauffage, climatisation, chauffe-eau ou maintenance : nous vous proposons des solutions fiables, 
            performantes et adaptées à vos besoins, avec un accompagnement sur-mesure.
          </strong>
        </div>
      </section>

      {/* 
        ============================
          // Section 1 – Titre "Nos domaines d&apos;expertise"
        ============================
      */}
      <section className="relative bg-[#f8f9f4] text-[#0a0f2c] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/epic-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-lg">
            Nos domaines d&apos;expertise
          </h2>
          <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-[#1E40AF] via-[#dc2626] to-[#10B981] rounded-full"></div>
        </div>
      </section>

      {/* 
        ============================
        // Section 2 – Blocs de services
        ============================
      */}
      <section
        className="pt-20 pb-32 relative bg-[#f8f9f4] text-[#0a0f2c]"
      >
        <div className="container relative z-10 mx-auto px-4">
          <div className="space-y-10 max-w-4xl mx-auto">
            {/* Bloc Climatisation */}
            <div
              onClick={() => toggleSection('clim')}
              className="group block cursor-pointer border border-gray-200 border-t-4 border-t-[#1E40AF] rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out p-8 text-center bg-[#f1f1f1] hover:bg-[#1E40AF]"
            >
              <div className="flex justify-center mb-4">
                <IoSnow className="w-12 h-12 text-[#1E40AF] group-hover:text-white transition" />
              </div>
              <div className="inline-block bg-[#dbeafe] text-[#1E40AF] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                Air pur & confort
              </div>
              <h3 className="text-xl font-semibold text-[#1E40AF] group-hover:text-white mb-2 transition">Climatisation</h3>
              <p className="text-gray-600 group-hover:text-white transition">Installation, entretien et dépannage de systèmes de climatisation.</p>
            </div>
            {activeSection === 'clim' && (
              <section className="mt-6 bg-[#f8f9f4] rounded-lg shadow-lg px-8 py-12 transition-all duration-500 ease-in-out text-center">
                <h2 className="text-2xl font-bold text-[#1E40AF] mb-4 flex items-center justify-center gap-2">
                  <IoSnow className="w-6 h-6 text-[#1E40AF]" /> Climatisation
                </h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Un air pur en toute saison. Un confort sur-mesure au quotidien.
                </h3>
                <p className="text-gray-700 mb-2">
                  ClimGO installe des climatiseurs muraux, gainables, consoles ou cassettes, selon la configuration de votre logement.
                </p>
                <p className="text-gray-700 mb-2">
                  Performants, discrets et silencieux, nos systèmes vous offrent une température idéale toute l’année, dans un confort absolu.
                </p>
                <ul className="text-gray-700 list-none mb-4 space-y-2">
                  <li>✔️ Confort thermique toute l&apos;année</li>
                  <li>✔️ Systèmes discrets et silencieux</li>
                  <li>✔️ Entretien simple et performant</li>
                </ul>
                <p className="text-[#1E40AF] font-bold">
                  Profitez d&apos;un air pur et d&apos;une température idéale, été comme hiver.
                </p>
                <Link
                  href="/climatisation"
                  className="inline-block mt-6 px-6 py-3 bg-[#1E40AF] text-white font-semibold rounded-lg transition hover:brightness-110"
                >
                  En savoir plus
                </Link>
              </section>
            )}
            {/* Bloc Chauffage */}
            <div
              onClick={() => toggleSection('chauffage')}
              className="group block cursor-pointer border border-gray-200 border-t-4 border-t-[#dc2626] rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out p-8 text-center bg-[#f1f1f1] hover:bg-[#dc2626]"
            >
              <div className="flex justify-center mb-4">
                <IoFlame className="w-12 h-12 text-[#dc2626] group-hover:text-white transition" />
              </div>
              <div className="inline-block bg-[#fee2e2] text-[#dc2626] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                Chaleur & économies
              </div>
              <h3 className="text-xl font-semibold text-[#dc2626] group-hover:text-white mb-2 transition">Chauffage</h3>
              <p className="text-gray-600 group-hover:text-white transition">Solutions de chauffage économiques et performantes.</p>
            </div>
            {activeSection === 'chauffage' && (
              <section className="mt-6 bg-[#f8f9f4] rounded-lg shadow-lg px-8 py-12 transition-all duration-500 ease-in-out text-center">
                <h2 className="text-2xl font-bold text-[#dc2626] mb-4 flex items-center justify-center gap-2">
                  <IoFlame className="w-6 h-6 text-[#dc2626]" /> Chauffage
                </h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Chaleur douce, économies fortes.
                </h3>
                <p className="text-gray-700 mb-2">
                  Nos solutions de chauffage s&apos;adaptent à tous les intérieurs : pompes à chaleur air/eau ou air/air, plancher chauffant ou radiateurs nouvelle génération.
                </p>
                <p className="text-gray-700 mb-2">
                  Fiables, performants et éligibles aux aides, nos équipements garantissent confort durable et consommation maîtrisée.
                </p>
                <ul className="text-gray-700 list-none mb-4 space-y-2">
                  <li>✔️ Jusqu&apos;à 70% d&apos;économies sur votre facture</li>
                  <li>✔️ Systèmes éligibles aux aides de l&apos;État</li>
                  <li>✔️ Installation rapide et personnalisée</li>
                </ul>
                <p className="text-[#dc2626] font-bold">
                  Profitez d&apos;une chaleur homogène et économe en énergie, tout au long de l&apos;année.
                </p>
                <Link
                  href="/chauffage"
                  className="inline-block mt-6 px-6 py-3 bg-[#dc2626] text-white font-semibold rounded-lg transition hover:brightness-110"
                >
                  En savoir plus
                </Link>
              </section>
            )}
            {/* Bloc Eau Chaude Sanitaire */}
            <div
              onClick={() => toggleSection('eau-chaude')}
              className="group block cursor-pointer border border-gray-200 border-t-4 border-t-[#0EA5E9] rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out p-8 text-center bg-[#f1f1f1] hover:bg-[#0EA5E9]"
            >
              <div className="flex justify-center mb-4">
                <IoWater className="w-12 h-12 text-[#0EA5E9] group-hover:text-white transition" />
              </div>
              <div className="inline-block bg-[#bae6fd] text-[#0EA5E9] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                Eau chaude & sérénité
              </div>
              <h3 className="text-xl font-semibold text-[#0EA5E9] group-hover:text-white mb-2 transition">Eau chaude sanitaire</h3>
              <p className="text-gray-600 group-hover:text-white transition">Production d&apos;eau chaude fiable et économique.</p>
            </div>
            {activeSection === 'eau-chaude' && (
              <section className="mt-6 bg-[#f8f9f4] rounded-lg shadow-lg px-8 py-12 transition-all duration-500 ease-in-out text-center">
                <h2 className="text-2xl font-bold text-[#0EA5E9] mb-4 flex items-center justify-center gap-2">
                  <IoWater className="w-6 h-6 text-[#0EA5E9]" /> Eau chaude sanitaire
                </h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  De l&apos;eau chaude quand vous en avez besoin, sans gaspiller un centime.
                </h3>
                <p className="text-gray-700 mb-2">
                  ClimGO vous propose des chauffe-eaux thermodynamiques ou classiques, parfaitement adaptés à votre rythme de vie et à votre logement.
                </p>
                <p className="text-gray-700 mb-2">
                  Des équipements sobres, fiables, silencieux, et conçus pour durer, tout en allégeant vos factures.
                </p>
                <ul className="text-gray-700 list-none mb-4 space-y-2">
                  <li>✔️ Jusqu&apos;à 60% d&apos;économie sur votre production d&apos;eau chaude</li>
                  <li>✔️ Installation adaptée à vos besoins et à votre logement</li>
                  <li>✔️ Équipements éligibles aux aides financières</li>
                </ul>
                <p className="text-[#0EA5E9] font-bold">
                  Profitez d&apos;une eau chaude fiable, économique et disponible à tout moment.
                </p>
                <Link
                  href="/eau-chaude-sanitaire"
                  className="inline-block mt-6 px-6 py-3 bg-[#0EA5E9] text-white font-semibold rounded-lg transition hover:brightness-110"
                >
                  En savoir plus
                </Link>
              </section>
            )}
            {/* Bloc Maintenance */}
            <div
              onClick={() => toggleSection('maintenance')}
              className="group block cursor-pointer border border-gray-200 border-t-4 border-t-[#10B981] rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out p-8 text-center bg-[#f1f1f1] hover:bg-[#10B981]"
            >
              <div className="flex justify-center mb-4">
                <IoSettings className="w-12 h-12 text-[#10B981] group-hover:text-white transition" />
              </div>
              <div className="inline-block bg-[#d1fae5] text-[#10B981] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                Suivi & tranquillité
              </div>
              <h3 className="text-xl font-semibold text-[#10B981] group-hover:text-white mb-2 transition">Maintenance</h3>
              <p className="text-gray-600 group-hover:text-white transition">Entretien et suivi régulier de vos équipements.</p>
            </div>
            {activeSection === 'maintenance' && (
              <section className="mt-6 bg-[#f8f9f4] rounded-lg shadow-lg px-8 py-12 transition-all duration-500 ease-in-out text-center">
                <h2 className="text-2xl font-bold text-[#10B981] mb-4 flex items-center justify-center gap-2">
                  <IoSettings className="w-6 h-6 text-[#10B981]" /> Maintenance
                </h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Parce qu&apos;un bon équipement mérite un bon suivi.
                </h3>
                <p className="text-gray-700 mb-2">
                  Nos équipes assurent un entretien rigoureux et préventif de vos installations : clim, PAC, chauffe-eau.
                </p>
                <p className="text-gray-700 mb-2">
                  Objectif : performance maximale, durée de vie prolongée, zéro imprévu.
                </p>
                <ul className="text-gray-700 list-none mb-4 space-y-2">
                  <li>✔️ Nettoyage complet et vérification des réglages</li>
                  <li>✔️ Diagnostic préventif pour éviter les pannes</li>
                  <li>✔️ Intervention rapide et suivie</li>
                </ul>
                <p className="text-[#10B981] font-bold">
                  Prolongez la durée de vie de vos équipements en toute sérénité.
                </p>
                <Link
                  href="/maintenance"
                  className="inline-block mt-6 px-6 py-3 bg-[#10B981] text-white font-semibold rounded-lg transition hover:brightness-110"
                >
                  En savoir plus
                  </Link>
              </section>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* 
        ============================
        // Section 3 – CTA final
        ============================
      */}
      <section className="relative bg-[#f8f9f4] text-[#0a0f2c] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/epic-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <div className="h-1 w-32 mx-auto mb-10 bg-gradient-to-r from-[#1E40AF] via-[#dc2626] to-[#10B981] rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-lg">
            Vous avez un projet ?
            <br />
            On le rend possible.
          </h2>
          <p className="text-lg md:text-xl mb-10 text-[#475569] font-light">
            Demandez votre devis personnalisé, rapide et sans engagement.
            <br />
            Un expert vous rappelle sous 48h.
          </p>
          <Link
            href="tel:0766460008"
            className="inline-block bg-[#03144a] hover:scale-105 hover:brightness-110 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300"
          >
             Je veux être rappelé
          </Link>
        </div>
      </section>
      <section className="my-20">
        <Tableau />
      </section>

      <nav className="max-w-7xl mx-auto px-4 text-sm text-gray-600 mt-10 mb-20" aria-label="Fil d'Ariane">
        <ol className="list-reset flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:underline text-[#03144a]">Accueil</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-[#03144a] font-semibold">Nos services</li>
        </ol>
      </nav>

      {/* Les sections Services Grid et CTA Section ont été supprimées */}
    </div>
  );
}