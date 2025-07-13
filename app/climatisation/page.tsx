'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

  
export default function ClimatisationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsTransitioning] = useState(false);
  
  const bgImages = [
    "/climcauderan.jpeg",
    "/gainable-arca.jpeg"
  ];

  // Animation de fond avec crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bgImages.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "Quel type de climatisation choisir ?",
      answer: "Tout dépend de votre logement : mural pour l'efficacité, gainable pour la discrétion, console pour les combles, cassette pour les grandes pièces."
    },
    {
      question: "Est-ce que ça fait du bruit ?",
      answer: "Non. Les modèles qu'on installe sont silencieux, vous oubliez même qu'ils sont là."
    },
    {
      question: "La climatisation consomme-t-elle beaucoup ?",
      answer: "Les nouvelles générations sont très économes. Et en mode chauffage, elles consomment 3 à 4 fois moins qu'un convecteur."
    },
    {
      question: "Peut-on bénéficier d'aides ?",
      answer: "Oui, selon votre situation. On vous guide pas à pas pour les obtenir facilement."
    }
  ];

  return (
    <div className=" bgPage">
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
            Climatisation sur mesure avec ClimGO
          </h1>
          <p className="text-xl mb-4">
            Silence, confort, performance.
          </p>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            Chez ClimGO, nous maîtrisons votre confort thermique en toute saison grâce à des systèmes de climatisation 
            discrets, performants et parfaitement intégrés à votre intérieur.
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

      {/* Solutions de climatisation */}
      <section className="py-16 bgPage">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Murale */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="/ClimAnime.png"
                    alt="Climatisation murale"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold climText mb-4">Murale</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Polyvalente, élégante, accessible
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Compacte, performante et facile à intégrer, la climatisation murale s&apos;adapte à tous les espaces. 
                    Elle chauffe et rafraîchit avec précision, sans prendre de place.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold climText mb-4">Ce que vous y gagnez :</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Facile à entretenir</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Mode chaud/froid toute l&apos;année</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">S&apos;intègre discrètement dans toutes les pièces</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="climBg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center space-x-2"
                  >
                    <span>Demander un devis</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Gainable */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2">
                  <h3 className="text-3xl font-bold climText mb-4">Gainable</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Invisible, mais redoutablement efficace
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Encastrée dans les combles ou le plafond, la clim gainable diffuse une température homogène pièce par pièce. 
                    Idéale pour les projets neufs ou les rénovations haut de gamme.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold climText mb-4">Ce que vous y gagnez :</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Aucun appareil visible, silence total</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Confort centralisé et pilotage pièce par pièce</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Esthétique soignée, parfaite en maison contemporaine</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="climBg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center space-x-2"
                  >
                    <span>Demander un devis</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="order-1">
                  <Image
                    src="/GainableAnime.png"
                    alt="Climatisation gainable"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Console */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="/AnimeConsole.webp"
                    alt="Climatisation console"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold climText mb-4">Console</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Discrète, pratique, polyvalente
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Installée en bas de mur, comme un radiateur, la console est idéale en rénovation ou en remplacement d&apos;un ancien système.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold climText mb-4">Ce que vous y gagnez :</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Chauffe rapidement, rafraîchit efficacement</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Pose rapide et sans gros travaux</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Idéale en complément de radiateurs</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="climBg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center space-x-2"
                  >
                    <span>Demander un devis</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Cassette */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2">
                  <h3 className="text-3xl font-bold climText mb-4">Cassette</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    La solution pro, en toute discrétion
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Parfaite pour les grandes pièces ou les locaux tertiaires, la cassette se pose au plafond pour une diffusion multidirectionnelle.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold climText mb-4">Ce que vous y gagnez :</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Confort homogène dans les grands volumes</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Parfait pour bureaux, commerces ou grandes pièces à vivre</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Design sobre, modulation pièce par pièce</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="climBg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center space-x-2"
                  >
                    <span>Demander un devis</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="order-1">
                  <Image
                    src="/CassetClimAnime.png"
                    alt="Climatisation cassette"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

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

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold climText text-center mb-12">
                Mini FAQ - Climatisation
              </h2>
              
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800">{item.question}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
} 