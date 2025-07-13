'use client';

import React from 'react';
import { IoWater, IoFlame, IoSnow, IoSettings } from 'react-icons/io5';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bgPage">
      {/* Hero Section */}
      <section
        className="py-32 bgPage bg-cover bg-center"
        style={{
          backgroundImage: "url('/serv.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '600px'
        }}
      >
        <div className="container mx-auto px-4 text-center mt-64">
          <div className="bg-white/30 backdrop-blur-sm p-6 rounded-lg inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-[#03144a] mb-6 drop-shadow-xl">
              Notre savoir-faire à votre service
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Nos services ClimGO couvrent tous vos besoins en chauffage, climatisation, chauffe-eau et entretien.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ClimGO met tout son savoir-faire à votre service pour concrétiser vos projets d&apos;équipement thermique. 
              Chauffage, climatisation, chauffe-eau ou maintenance : nous vous proposons des solutions fiables, 
              performantes et adaptées à vos besoins, avec un accompagnement sur-mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bgPage">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Eau chaude sanitaire */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center">
                  <Link
                    href="/eau-chaude-sanitaire"
                    className="bg-[#03144a] rounded-full p-8 w-32 h-32 mx-auto flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    // className="climBg ..."
                  >
                    <IoWater className="w-16 h-16 text-[#f4f1ec]" />
                  </Link>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#03144a] mb-4">Eau chaude sanitaire</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Une eau chaude toujours disponible, performante et économique.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    ClimGO installe des chauffe-eaux thermodynamiques ou électriques selon vos besoins, 
                    la configuration de votre logement et votre budget.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Nos équipements sont fiables, durables, silencieux et éligibles aux aides de l&apos;État.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Vous profitez d&apos;un confort constant tout en réduisant votre consommation d&apos;énergie.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Jusqu&apos;à 60% d&apos;économie sur votre production d&apos;eau chaude</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Installation adaptée à vos besoins et à votre logement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Équipement éligibles aux aides financières</span>
                    </div>
                  </div>
                  
                  <p className="text-lg font-semibold text-[#03144a]">
                    Profitez d&apos;une eau chaude fiable, économique et disponible à tout moment.
                  </p>
                </div>
              </div>
            </div>

            {/* Chauffage */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-1 text-center">
                  <Link
                    href="/chauffage"
                    className="bg-[#03144a] rounded-full p-8 w-32 h-32 mx-auto flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    // className="climBg ..."
                  >
                    <IoFlame className="w-16 h-16 text-[#f4f1ec]" />
                  </Link>
                </div>
                <div className="order-2">
                  <h3 className="text-3xl font-bold text-[#03144a] mb-4">Chauffage</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Un confort thermique toute l&apos;année, pour un logement bien chauffé et économique.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Offrez à votre logement un confort thermique optimal avec nos solutions de chauffage économiques et performantes.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pompes à chaleur air/eau ou air/air, plancher chauffant, radiateurs dernière génération : 
                    nous vous accompagnons dans le choix, l&apos;installation et l&apos;entretien du système le plus adapté à vos besoins.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Jusqu&apos;à 70% d&apos;économies sur votre facture</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Systèmes éligibles aux aides de l&apos;État</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Installation rapide et personnalisée</span>
                    </div>
                  </div>
                  
                  <p className="text-lg font-semibold text-[#03144a]">
                    Profitez d&apos;une chaleur homogène et économe en énergie, tout au long de l&apos;année.
                  </p>
                </div>
              </div>
            </div>

            {/* Climatisation */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center">
                  <Link
                    href="/climatisation"
                    className="bg-[#03144a] rounded-full p-8 w-32 h-32 mx-auto flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    // className="climBg ..."
                  >
                    <IoSnow className="w-16 h-16 text-[#f4f1ec]" />
                  </Link>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#03144a] mb-4">Climatisation</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Un air frais en été, un air sain toute l&apos;année.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    ClimGO installe des climatiseurs muraux, gainables, consoles ou cassettes pour répondre à toutes les configurations de logements.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Discrets, efficaces et silencieux, nos systèmes vous garantissent un confort sur-mesure avec un excellent rapport qualité/prix.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Confort thermique toute l&apos;année</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Système discrets et silencieux</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Entretien simple et performant</span>
                    </div>
                  </div>
                  
                  <p className="text-lg font-semibold text-[#03144a]">
                    Profitez d&apos;un air pur et d&apos;une température idéale, été comme hiver.
                  </p>
                </div>
              </div>
            </div>

            {/* Maintenance */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2">
                  <h3 className="text-3xl font-bold text-[#03144a] mb-4">Maintenance</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Un système bien entretenu, c&apos;est plus de confort, plus longtemps.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Un bon équipement, c&apos;est aussi un bon suivi.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    ClimGO assure l&apos;entretien régulier et la maintenance de vos installations pour prolonger leur durée de vie et garantir leur performance.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Pompe à chaleur, climatisation, chauffe-eau : un seul interlocuteur, un service de proximité et zéro mauvaise surprise.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Nettoyage complet et vérification des réglages</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Diagnostic préventif pour éviter les pannes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Intervention rapide et suivie</span>
                    </div>
                  </div>
                  
                  <p className="text-lg font-semibold text-[#03144a]">
                    Prolongez la durée de vie de vos équipements en toute sérénité.
                  </p>
                </div>
                <div className="order-1 text-center">
                  <Link
                    href="/maintenance"
                    className="bg-[#03144a] rounded-full p-8 w-32 h-32 mx-auto flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    // className="climBg ..."
                  >
                    <IoSettings className="w-16 h-16 text-[#f4f1ec]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center py-16">
              <h2 className="text-3xl font-bold text-[#03144a] mb-6">
                Besoin d&apos;un conseil ou d&apos;un devis ?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                ClimGO vous accompagne dans vos projets, en tenant compte de vos besoins, de votre logement, et des aides disponibles.
              </p>
              <a
                href="/contact"
                className="bg-[#03144a] text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 hover:scale-105 transition-transform duration-300 inline-block"
              >
                Demander un devis
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
} 