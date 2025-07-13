'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function MaintenancePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [, setIsTransitioning] = useState(false)

  const bgImages = [
    "/MaintenanceEauChaudeSanitaire.jpg",
    "/MaintenancePompeAChaleur.jpg"
  ]

  // Animation de fond avec crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bgImages.length)
        setIsTransitioning(false)
      }, 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [bgImages.length])

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bgPage">
      {/* Hero Section avec carousel */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Images de fond avec système de crossfade */}
        {bgImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{ 
              backgroundImage: `url('${image}')`,
              opacity: currentIndex === index ? 1 : 0,
              transform: 'scale(1.05)',
              animation: currentIndex === index ? 'kenBurns 5s ease-in-out infinite alternate' : 'none'
            }}
          />
        ))}
        
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 md:px-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Maintenance
          </h1>
          <p className="text-xl mb-4">
            Prolongez la durée de vie de vos équipements
          </p>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            Chez ClimGO, la maintenance, ce n&apos;est pas une formalité, c&apos;est une garantie. Une clim bien entretenue, 
            une PAC bien réglée ou un chauffe-eau bien suivi, c&apos;est moins de pannes, plus de performance, 
            et une vraie sérénité toute l&apos;année.
          </p>
          <p className="text-lg mt-6 font-semibold">
            Un entretien régulier prolonge la durée de vie de vos équipements.
          </p>
        </div>
        
        {/* Animation Ken Burns en CSS */}
        <style jsx>{`
          @keyframes kenBurns {
            0% { transform: scale(1.05); }
            100% { transform: scale(1.15); }
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out;
          }
        `}</style>
      </section>

      {/* Section principale */}
      <section className="py-16 bgPage">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
                <Image
                  src="/MaintenanceClim.png"
                  alt="Maintenance équipements"
                  width={500}
                  height={400}
                  className=""
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold climText mb-6">
                  Maintenance ClimGO
                </h2>
                <h3 className="text-2xl font-semibold climText mb-4">
                  Entretenez vos équipements pour durer
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Chez ClimGO, on ne se contente pas d&apos;installer. On vous accompagne aussi dans le temps pour garantir 
                  la performance, la sécurité et la longévité de vos systèmes de chauffage, climatisation ou eau chaude.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold climText mb-4">Pourquoi entretenir vos équipements ?</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Prolonger leur durée de vie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Maintenir leur performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Respecter les garanties fabricants</span>
                    </li>
                  </ul>
                </div>
                
                <Link
                  href="/contact"
                  className="inline-block climBg text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Demander un devis
                </Link>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir ClimGO */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold climText mb-6">
            Pourquoi choisir ClimGO pour l&apos;entretien de vos équipements ?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Un suivi fiable, pour un confort durable.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Chez ClimGO, on ne vous laisse pas tomber une fois le matériel posé.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            On assure un entretien sérieux et régulier pour faire durer vos équipements, éviter les pannes 
            et garantir des performances optimales toute l&apos;année.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold climText mb-4">Notre engagement ?</h3>
            <p className="text-lg text-gray-700 mb-4">
              Vous offrir la tranquillité d&apos;esprit. Un système bien entretenu, c&apos;est un confort préservé, 
              une facture maîtrisée et un client satisfait.
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              Et surtout, un interlocuteur disponible quand vous en avez besoin.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto climText">
          <h2 className="text-4xl font-bold climText mb-12 text-center">
            FAQ maintenance ClimGO - Réponses aux questions les plus posées
          </h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('frequence')}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-lg">À quelle fréquence faut-il entretenir une climatisation ou une pompe à chaleur ?</span>
                <span className="text-2xl climText">
                  {activeSection === 'frequence' ? '−' : '+'}
                </span>
              </button>
              {activeSection === 'frequence' && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700">
                    Une fois par an est recommandé pour assurer le bon fonctionnement et allonger la durée de vie de l&apos;équipement.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('obligatoire')}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-lg">L&apos;entretien est-il obligatoire ?</span>
                <span className="text-2xl climText">
                  {activeSection === 'obligatoire' ? '−' : '+'}
                </span>
              </button>
              {activeSection === 'obligatoire' && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700">
                    Oui, dès que l&apos;équipement contient plus de 2 kg de fluide frigorigène (PAC ou clim). 
                    C&apos;est une obligation légale pour des raisons de sécurité et d&apos;environnement.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('prise-en-charge')}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-lg">L&apos;entretien est-il pris en charge par ClimGO ?</span>
                <span className="text-2xl climText">
                  {activeSection === 'prise-en-charge' ? '−' : '+'}
                </span>
              </button>
              {activeSection === 'prise-en-charge' && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700">
                    Bien sûr. Nous proposons des contrats sur mesure ou des interventions ponctuelles, selon vos besoins.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('risques')}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-lg">Quels sont les risques en cas d&apos;absence d&apos;entretien ?</span>
                <span className="text-2xl climText">
                  {activeSection === 'risques' ? '−' : '+'}
                </span>
              </button>
              {activeSection === 'risques' && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700">
                    Surconsommation, pannes, baisse de performance, et perte de garantie fabricant. 
                    Mieux vaut prévenir que réparer.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 