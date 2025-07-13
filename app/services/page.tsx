'use client';

import React, { useState } from 'react';
import { IoWater, IoFlame, IoSnow, IoSettings } from 'react-icons/io5';
import Link from 'next/link';

export default function ServicesPage() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
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

      {/* Nos domaines d'expertise cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#03144a] mb-10 text-center">Nos domaines d&apos;expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div
              onClick={() => setSelectedSection('climatisation')}
              className="group block bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-[#e6f0fa] transition p-8 text-center cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <IoSnow className="w-12 h-12 text-[#03144a] group-hover:text-blue-500 transition" />
              </div>
              <h3 className="text-xl font-semibold text-[#03144a] mb-2">Climatisation</h3>
              <p className="text-gray-600">Installation, entretien et dépannage de systèmes de climatisation.</p>
            </div>
            <div
              onClick={() => setSelectedSection('chauffage')}
              className="group block bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-[#fceee7] transition p-8 text-center cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <IoFlame className="w-12 h-12 text-[#03144a] group-hover:text-orange-500 transition" />
              </div>
              <h3 className="text-xl font-semibold text-[#03144a] mb-2">Chauffage</h3>
              <p className="text-gray-600">Solutions de chauffage économiques et performantes.</p>
            </div>
            <div
              onClick={() => setSelectedSection('eau-chaude')}
              className="group block bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-[#e7f7f6] transition p-8 text-center cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <IoWater className="w-12 h-12 text-[#03144a] group-hover:text-cyan-500 transition" />
              </div>
              <h3 className="text-xl font-semibold text-[#03144a] mb-2">Eau chaude sanitaire</h3>
              <p className="text-gray-600">Production d&apos;eau chaude fiable et économique.</p>
            </div>
            <div
              onClick={() => setSelectedSection('maintenance')}
              className="group block bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-[#f7f7f7] transition p-8 text-center cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <IoSettings className="w-12 h-12 text-[#03144a] group-hover:text-gray-600 transition" />
              </div>
              <h3 className="text-xl font-semibold text-[#03144a] mb-2">Maintenance</h3>
              <p className="text-gray-600">Entretien et suivi régulier de vos équipements.</p>
            </div>
          </div>
          {/* Affichage dynamique des sections */}
          <div className="max-w-4xl mx-auto">
            {selectedSection === 'eau-chaude' && (
              <section className="mt-10 transition-all duration-500 ease-in-out">
                <h2 className="text-2xl font-bold text-[#001240] mb-4">Eau chaude sanitaire</h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Une eau chaude toujours disponible, performante et économique.
                </h3>
                <p className="text-gray-700 mb-2">
                  ClimGO installe des chauffe-eaux thermodynamiques ou électriques selon vos besoins, la configuration de votre logement et votre budget.
                </p>
                <p className="text-gray-700 mb-2">
                  Nos équipements sont fiables, durables, silencieux et éligibles aux aides de l'État.
                </p>
                <p className="text-gray-700 mb-4">
                  Vous profitez d'un confort constant tout en réduisant votre consommation d'énergie.
                </p>
                <ul className="text-gray-700 list-none mb-4 space-y-2">
                  <li>✔️ Jusqu'à 60% d’économie sur votre production d'eau chaude</li>
                  <li>✔️ Installation adaptée à vos besoins et à votre logement</li>
                  <li>✔️ Équipements éligibles aux aides financières</li>
                </ul>
                <p className="text-[#001240] font-bold">
                  Profitez d'une eau chaude fiable, économique et disponible à tout moment.
                </p>
              </section>
            )}
            {selectedSection === 'chauffage' && (
              <section className="mt-10 transition-all duration-500 ease-in-out">
                <h2 className="text-2xl font-bold text-[#001240] mb-4">Chauffage</h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Un confort thermique toute l'année, pour un logement bien chauffé et économique.
                </h3>
                <p className="text-gray-700 mb-2">
                  Offrez à votre logement un confort thermique optimal avec nos solutions de chauffage économiques et performantes.
                </p>
                <p className="text-gray-700 mb-2">
                  Pompes à chaleur air/eau ou air/air, plancher chauffant, radiateurs dernière génération : nous vous accompagnons dans le choix, l'installation et l'entretien du système le plus adapté à vos besoins.
                </p>
                <ul className="text-gray-700 list-none mb-4 space-y-2">
                  <li>✔️ Jusqu'à 70% d'économies sur votre facture</li>
                  <li>✔️ Systèmes éligibles aux aides de l'État</li>
                  <li>✔️ Installation rapide et personnalisée</li>
                </ul>
                <p className="text-[#001240] font-bold">
                  Profitez d'une chaleur homogène et économe en énergie, tout au long de l'année.
                </p>
              </section>
            )}
            {selectedSection === 'climatisation' && (
              <section className="mt-10 transition-all duration-500 ease-in-out">
                <h2 className="text-2xl font-bold text-[#001240] mb-4">Climatisation</h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Un air frais en été, un air sain toute l'année.
                </h3>
                <p className="text-gray-700 mb-2">
                  ClimGO installe des climatiseurs muraux, gainables, consoles ou cassettes pour répondre à toutes les configurations de logements.
                </p>
                <p className="text-gray-700 mb-2">
                  Discrets, efficaces et silencieux, nos systèmes vous garantissent un confort sur-mesure avec un excellent rapport qualité/prix.
                </p>
                <ul className="text-gray-700 list-none mb-4 space-y-2">
                  <li>✔️ Confort thermique toute l'année</li>
                  <li>✔️ Systèmes discrets et silencieux</li>
                  <li>✔️ Entretien simple et performant</li>
                </ul>
                <p className="text-[#001240] font-bold">
                  Profitez d'un air pur et d'une température idéale, été comme hiver.
                </p>
              </section>
            )}
            {selectedSection === 'maintenance' && (
              <section className="mt-10 transition-all duration-500 ease-in-out">
                <h2 className="text-2xl font-bold text-[#001240] mb-4">Maintenance</h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Un système bien entretenu, c'est plus de confort, plus longtemps.
                </h3>
                <p className="text-gray-700 mb-2">
                  Un bon équipement, c'est aussi un bon suivi.
                </p>
                <p className="text-gray-700 mb-2">
                  ClimGO assure l'entretien régulier et la maintenance de vos installations pour prolonger leur durée de vie et garantir leur performance.
                </p>
                <p className="text-gray-700 mb-2">
                  Pompe à chaleur, climatisation, chauffe-eau : un seul interlocuteur, un service de proximité et zéro mauvaise surprise.
                </p>
                <ul className="text-gray-700 list-none mb-4 space-y-2">
                  <li>✔️ Nettoyage complet et vérification des réglages</li>
                  <li>✔️ Diagnostic préventif pour éviter les pannes</li>
                  <li>✔️ Intervention rapide et suivie</li>
                </ul>
                <p className="text-[#001240] font-bold">
                  Prolongez la durée de vie de vos équipements en toute sérénité.
                </p>
              </section>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#001240] text-white py-16 mt-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d’un devis rapide ?</h2>
          <p className="text-lg mb-8">
            Contactez-nous dès maintenant pour obtenir une estimation personnalisée de vos travaux.
          </p>
          <a
            href="tel:0766460008"
            className="inline-block bg-[#c59f36] hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition"
          >
            Nous appeler
          </a>
        </div>
      </section>

      {/* Les sections Services Grid et CTA Section ont été supprimées */}
    </div>
  );
} 