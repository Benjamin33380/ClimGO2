'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ChauffagePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsTransitioning] = useState(false);
  
  const bgImages = [
    "/PacCropped.jpeg",
    "/ch1.png"
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
      question: "Combien coûte une pompe à chaleur installée ?",
      answer: "Le tarif dépend du modèle choisi, de la surface à chauffer et de l'installation existante. Chez ClimGO, on vous propose un devis clair, sans surprise, adapté à vos besoins. Et surtout : on optimise les aides pour vous faire gagner."
    },
    {
      question: "Puis-je cumuler plusieurs aides ?",
      answer: "Oui. MaPrimeRénov', les Certificats d'Économie d'Énergie (CEE) et parfois des aides locales peuvent se cumuler. On vous accompagne pas à pas pour constituer le bon dossier et maximiser vos aides."
    },
    {
      question: "Combien de temps prend l'installation ?",
      answer: "En général, une installation standard dure entre 1 et 3 jours selon le type de chauffage et l'état du logement. On fixe un planning précis à l'avance et on le respecte."
    },
    {
      question: "Un entretien est-il obligatoire ?",
      answer: "Oui, pour les pompes à chaleur et certains systèmes, un entretien annuel est recommandé et parfois obligatoire pour garantir la performance et la durée de vie de votre équipement. ClimGO vous propose un contrat d'entretien simple et sans surprise."
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
        
        <div className="relative z-20 text-center px-4 md:px-8 animate-fade-in-up mx-auto max-w-screen-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#f5f5f5' }}>
            Chauffage économique & performant avec ClimGO
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#f5f5f5' }}>
            ClimGO vous accompagne dans le choix, l&apos;installation et l&apos;entretien de votre système de chauffage. 
            Que ce soit pour une maison neuve, une rénovation ou une amélioration de votre confort thermique, 
            nous vous proposons des solutions fiables, performantes et adaptées à vos besoins.
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

      {/* Solutions de chauffage */}
      <section className="py-16 bgPage">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* PAC Air/Eau */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="rounded-xl overflow-hidden bg-[#f9f8f4] max-w-xs mx-auto">
                    <Image
                      src="/PacAirEau.png"
                      alt="Pompe à chaleur air/eau"
                      width={300}
                      height={240}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold climText mb-4" style={{ color: '#03144a' }}>Pompe à chaleur air/eau</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Un confort économique et écologique
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    La PAC air/eau récupère l&apos;énergie gratuite de l&apos;air extérieur pour chauffer l&apos;eau de votre réseau 
                    (radiateurs, plancher chauffant). Une solution durable, performante et silencieuse, idéale dans les logements bien isolés.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold climText mb-4">Ce que vous y gagnez :</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Réduisez jusqu&apos;à 70% votre facture</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Système compatible avec les aides (MaPrimeRénov&apos;, CEE...)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Chauffage homogène, discret, sans à coups</span>
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

            {/* PAC Air/Air */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2">
                  <h3 className="text-3xl font-bold climText mb-4" style={{ color: '#03144a' }}>Pompe à chaleur air/air</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Du confort toute l&apos;année, sans se ruiner
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Avec la PAC air/air, vous chauffez l&apos;hiver et rafraîchissez l&apos;été. Un appareil compact, 
                    idéal pour adapter la température selon les saisons tout en maîtrisant votre budget énergie.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold climText mb-4">Ce que vous y gagnez :</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Deux fonctions en un seul équipement</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Installation rapide, entretien simplifié</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Idéal en rénovation</span>
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
                  <div className="rounded-xl overflow-hidden bg-[#f9f8f4] max-w-xs mx-auto">
                    <Image
                      src="/PompeChaleurAirAir.webp"
                      alt="Pompe à chaleur air/air"
                      width={300}
                      height={240}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Plancher chauffant */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="rounded-xl overflow-hidden bg-[#f9f8f4] max-w-xs mx-auto">
                    <Image
                      src="/PlancherChauffantAnime.webp"
                      alt="Plancher chauffant"
                      width={300}
                      height={240}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold climText mb-4" style={{ color: '#03144a' }}>Plancher chauffant</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Le luxe discret sous vos pieds
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Invisible à l&apos;œil nu, le plancher chauffant diffuse une chaleur douce et uniforme. 
                    Il libère vos murs et garantit un confort constant dans toute la maison.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold climText mb-4">Ce que vous y gagnez :</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Esthétique et silence absolu</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Confort optimal pièce par pièce</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Parfait pour une PAC</span>
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

            {/* Radiateurs */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2">
                  <h3 className="text-3xl font-bold climText mb-4" style={{ color: '#03144a' }}>Radiateurs</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Le mix parfait entre design et performance
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Nos radiateurs nouvelle génération s&apos;adaptent à toutes les pièces et à tous les styles. 
                    Électriques ou à eau chaude, ils chauffent vite et bien, sans sacrifier le look.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold climText mb-4">Ce que vous y gagnez :</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Chaleur instantanée dès l&apos;allumage</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Format compact, discret ou décoratif</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Parfait pour une PAC</span>
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
                  <div className="rounded-xl overflow-hidden bg-[#f9f8f4] max-w-xs mx-auto">
                    <Image
                      src="/Radiateur.png"
                      alt="Radiateurs sèche-serviettes et électriques"
                      width={300}
                      height={240}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pourquoi choisir ClimGO */}
            <div className="mb-20 text-center py-16">
              <h2 className="text-3xl font-bold climText mb-6" style={{ color: '#03144a' }}>
                Pourquoi choisir ClimGO ?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                L&apos;alliance du savoir-faire et de la rigueur.
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Chez ClimGO, chaque installation est réalisée avec précision, exigence et soin. 
                Nous ne laissons rien au hasard, car votre confort mérite notre engagement le plus total.
              </p>
              <div className="bg-[#f9f8f4] rounded-lg p-8 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold climText mb-4" style={{ color: '#03144a' }}>Ce qui nous anime ?</h3>
                <p className="text-gray-700 leading-relaxed">
                  La satisfaction de livrer un chantier parfaitement exécuté, et de voir nos clients recommander ClimGO les yeux fermés.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold climText text-center mb-12" style={{ color: '#f03144a' }}>
                Mini FAQ - Chauffage
              </h2>
              
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-[#f9f8f4] border border-gray-200 rounded-lg">
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