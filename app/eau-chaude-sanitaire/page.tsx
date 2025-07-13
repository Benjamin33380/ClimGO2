'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function EauChaudeSanitaire() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [, setIsTransitioning] = useState(false)

  const bgImages = [
    "/sdb-toulouse.png",
    "/Cumulus_cropped.jpeg"
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
            Eau Chaude Sanitaire
          </h1>
          <p className="text-xl mb-4">
            Offrez-vous une eau chaude sanitaire fiable, économique et bien pensée
          </p>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            ClimGO vous accompagne dans le choix, l&apos;installation et l&apos;entretien de votre chauffe-eau. 
            Qu&apos;il soit thermodynamique ou électrique, extra-plat ou compact, nous vous proposons des solutions efficaces, 
            durables et adaptées à votre mode de vie.
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

      {/* Services */}
      <section className="py-16 bgPage">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-20">
              {/* Chauffe-eau thermodynamique */}
              <div className="mb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-1">
                    <Image
                      src="/AnimeThermodynamy.webp"
                      alt="Chauffe-eau thermodynamique"
                      width={350}
                      height={280}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="order-2">
                    <h3 className="text-3xl font-bold climText mb-4">Chauffe-eau thermodynamique</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Une eau chaude sanitaire économique et écoresponsable
                    </p>
                    <p className="text-gray-600 mb-6">
                      Ce système capte les calories de l&apos;air ambiant pour chauffer l&apos;eau de votre ballon. Idéal pour les maisons avec un local ventilé, il combine performance énergétique et confort au quotidien.
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3 climText">Ce que vous y gagnez :</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Jusqu&apos;à 70% d&apos;économie d&apos;énergie
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Éligible aux aides (CEE, MaPrimeRénov&apos;)
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Eau chaude disponible en continu
                        </li>
                      </ul>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="inline-block climBg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity transition-transform transform hover:scale-105 duration-300"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </div>

              {/* Chauffe-eau électrique */}
              <div className="mb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-1">
                    <Image
                      src="/AnimeChauffeEauElec.webp"
                      alt="Chauffe-eau électrique"
                      width={350}
                      height={280}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="order-2">
                    <h3 className="text-3xl font-bold climText mb-4">Chauffe-eau électrique</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Une solution d&apos;eau chaude sanitaire simple et fiable pour votre quotidien
                    </p>
                    <p className="text-gray-600 mb-6">
                      Le chauffe-eau électrique classique assure une production d&apos;eau chaude constante pour toute la maison. Discret, facile à installer et adapté aux petits budgets, c&apos;est une valeur sûre.
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3 climText">Ce que vous y gagnez :</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Eau chaude disponible à toute heure
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Installation rapide et sans contraintes
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Solution économique à l&apos;achat
                        </li>
                      </ul>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="inline-block climBg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity transition-transform transform hover:scale-105 duration-300"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </div>

              {/* Chauffe-eau extra plat */}
              <div className="mb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-1">
                    <Image
                      src="/AnimeChauffeEauExtraPet.webp"
                      alt="Chauffe-eau extra plat"
                      width={350}
                      height={280}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="order-2">
                    <h3 className="text-3xl font-bold climText mb-4">Chauffe-eau extra plat</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Un maximum de confort dans un minimum d&apos;espace pour votre eau chaude sanitaire
                    </p>
                    <p className="text-gray-600 mb-6">
                      Parfait pour les petits logements ou les espaces optimisés, le chauffe-eau extra plat s&apos;intègre facilement dans un placard ou au-dessus d&apos;une machine à laver. Design, discret et performant, il allie confort et gain de place.
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3 climText">Ce que vous y gagnez :</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Format compact, idéal pour les petits espaces
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Consommation maîtrisée et intelligente
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          Confort quotidien, sans compromis
                        </li>
                      </ul>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="inline-block climBg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity transition-transform transform hover:scale-105 duration-300"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir ClimGO */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold climText mb-6">
            Pourquoi choisir ClimGO pour votre eau chaude sanitaire ?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Un savoir-faire fiable, au service de votre quotidien.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Chez ClimGO, chaque installation est pensée pour durer. Nous sélectionnons les équipements les plus performants, et nous les posons avec rigueur, précision et discrétion.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold climText mb-4">Notre engagement ?</h3>
            <p className="text-lg text-gray-700">
              Que votre eau chaude soit toujours au rendez-vous, sans mauvaise surprise, avec un système bien posé, bien réglé, et prêt à tenir sur la durée.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold climText mb-12 text-center">
            FAQ eau chaude sanitaire ClimGO - Réponses aux question les plus posées
          </h2>
          
          <div className="space-y-6 climText">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('type')}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-lg">Quel type de chauffe-eau choisir ?</span>
                <span className="text-2xl climText">
                  {activeSection === 'type' ? '−' : '+'}
                </span>
              </button>
              {activeSection === 'type' && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700">
                    Ça dépend de votre logement et de vos besoins. On vous conseille selon votre consommation et l&apos;espace disponible.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('aides')}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-lg">Est-ce qu&apos;il y a des aides pour l&apos;installation ?</span>
                <span className="text-2xl climText">
                  {activeSection === 'aides' ? '−' : '+'}
                </span>
              </button>
              {activeSection === 'aides' && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700">
                    Oui, certains modèles sont éligibles aux aides comme MaPrimeRénov&apos; ou la TVA réduite.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('duree')}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-lg">Combien de temps dure un chauffe-eau ?</span>
                <span className="text-2xl climText">
                  {activeSection === 'duree' ? '−' : '+'}
                </span>
              </button>
              {activeSection === 'duree' && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700">
                    En moyenne 15 ans, s&apos;il est bien entretenu.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection('entretien')}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-lg">Faut-il un entretien régulier ?</span>
                <span className="text-2xl climText">
                  {activeSection === 'entretien' ? '−' : '+'}
                </span>
              </button>
              {activeSection === 'entretien' && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700">
                    Oui, surtout pour les chauffe-eaux thermodynamiques. Un petit check-up évite les pannes.
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