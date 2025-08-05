'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tableau from '../zones-desservies/component/Tableau';
export default function PremiumEauChaudePage() {
  const solutionsRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      id: 'chauffe-eau-thermodynamique',
      title: "Chauffe-eau Thermodynamique",
      subtitle: "Économique & Écoresponsable",
      image: "/AnimeThermodynamy.webp",
      badge: "Jusqu'à -70% sur votre facture",
      features: [
        "Jusqu'à 70% d'économie d'énergie",
        "Éligible aux aides (CEE, MaPrimeRénov')",
        "Eau chaude disponible en continu",
        "Technologie écologique avancée"
      ],
      description: "Ce système capte les calories de l'air ambiant pour chauffer l'eau de votre ballon. Une eau chaude sanitaire économique et écoresponsable.",
      price: "À partir de 2 500€",
      gradient: "from-[#03144A] to-[#0EA5E9]"
    },
    {
      id: 'chauffe-eau-electrique',
      title: "Chauffe-eau électrique",
      subtitle: "Simple & Fiable",
      image: "/AnimeChauffeEauElec.webp",
      badge: "Installation rapide",
      features: [
        "Eau chaude disponible à toute heure",
        "Installation rapide et sans contraintes",
        "Solution économique à l'achat",
        "Maintenance simplifiée"
      ],
      description: "Le chauffe-eau électrique classique assure une production d'eau chaude constante pour toute la maison. Discret, facile à installer et adapté aux petits budgets.",
      price: "À partir de 350€",
      gradient: "from-[#03144A] to-[#0EA5E9]"
    },
    {
      id: 'chauffe-eau-extra-plat',
      title: "Chauffe-eau extra plat",
      subtitle: "Confort & Gain de Place",
      image: "/AnimeChauffeEauExtraPet.webp",
      badge: "Format compact",
      features: [
        "Format compact, idéal petits espaces",
        "Consommation maîtrisée et intelligente",
        "Confort quotidien, sans compromis",
        "Design discret et moderne"
      ],
      description: "Un maximum de confort dans un minimum d'espace pour votre eau chaude sanitaire. Parfait pour les petits logements ou les espaces optimisés.",
      price: "À partir de 450€",
      gradient: "from-[#03144A] to-[#0EA5E9]"
    }
  ];

  const advantages = [
    {
      icon: "🚿",
      title: "Expertise sanitaire",
      desc: "15 ans d'expérience en eau chaude"
    },
    {
      icon: "⚡",
      title: "Installation express",
      desc: "Mise en service en 24h chrono"
    },
    {
      icon: "🔧",
      title: "Garantie premium",
      desc: "SAV réactif et pièces d'origine"
    },
    {
      icon: "💰",
      title: "Financement 0%",
      desc: "Solutions adaptées à votre budget"
    }
  ];

  // Carousel state for desktop
  const [currentIndex, setCurrentIndex] = useState(0);
  // For auto-scroll logic
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const carouselHovering = useRef(false);

  // Helper to clear interval
  const clearAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  // Start auto-scroll
  const startAutoScroll = () => {
    clearAutoScroll();
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === solutions.length - 1 ? 0 : prev + 1
      );
    }, 5000);
  };

  // Effect to start auto-scroll and clean up on unmount
  useEffect(() => {
    startAutoScroll();
    return () => {
      clearAutoScroll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset auto-scroll when index is changed manually
  useEffect(() => {
    if (!carouselHovering.current) {
      startAutoScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-[#F8F9F4] text-[#03144A]">
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 md:pt-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F9F4]" />
        
        {/* Background effects */}
        {/* Blue particles */}
        <div className="absolute w-2 h-2 bg-[#03144a] rounded-full top-10 left-10" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#03144a] rounded-full top-1/3 left-1/2" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#03144a] rounded-full bottom-1/3 right-20" style={{ animation: 'float 4s ease-in-out infinite' }} />

        {/* Accent particles */}
        <div className="absolute w-2 h-2 bg-[#0EA5E9] rounded-full top-20 right-10" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#0EA5E9] rounded-full bottom-10 left-1/3" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#0EA5E9] rounded-full top-1/2 right-1/4" style={{ animation: 'float 4s ease-in-out infinite' }} />

        {/* New animated particles */}
        <div className="absolute w-2 h-2 bg-[#03144a] rounded-full top-[15%] left-[20%]" style={{ animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#0EA5E9] rounded-full bottom-[20%] right-[15%]" style={{ animation: 'float 5s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#03144a] rounded-full top-[60%] left-[45%]" style={{ animation: 'float 7s ease-in-out infinite' }} />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0EA5E9] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#F8F9F4] rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-[#03144A]/20 text-sm tracking-widest uppercase mb-8 text-[#03144A] bg-[#F8F9F4] backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#0EA5E9] rounded-full mr-3 animate-pulse" />
            Nos solutions d&apos;eau chaude sanitaire
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wide mb-8">
            <span className="bg-gradient-to-r from-[#0EA5E9] via-[#03144A] to-[#0EA5E9] bg-clip-text text-transparent">
              Eau Chaude Sanitaire
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#03144A] via-[#0EA5E9] to-[#03144A] bg-clip-text text-transparent">
              ClimGO
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#03144A] mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            D&eacute;couvrez nos solutions d&apos;eau chaude sanitaire d&apos;exception. Confort, &eacute;conomies et fiabilit&eacute; r&eacute;unis dans des technologies &eacute;prouv&eacute;es.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => solutionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-4 bg-[#F8F9F4] text-[#03144A] rounded-full font-medium transition-all duration-300 hover:scale-105 overflow-hidden border border-[#03144A]/30"
            >
              <span className="relative z-10">Découvrir nos solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#03144A] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group px-10 py-4 border border-[#03144A] rounded-full font-medium transition-all duration-300 hover:border-[#0EA5E9] hover:bg-[#03144A]/5 text-[#03144A]">
              Demander un devis
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section ref={solutionsRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-wide">
              Nos <span className="text-[#03144a]">Technologies</span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#03144a] to-transparent mx-auto mb-8" />
            <p className="text-xl text-[#03144A] max-w-3xl mx-auto">
              Chaque solution est pens&eacute;e pour maximiser votre confort tout en optimisant vos &eacute;conomies d&apos;&eacute;nergie
            </p>
          </div>

          {/* Carousel Solutions */}
          <div className="relative">
            {/* Desktop version : une solution visible à la fois */}
            <div
              className="hidden md:block"
              onMouseEnter={() => {
                carouselHovering.current = true;
                clearAutoScroll();
              }}
              onMouseLeave={() => {
                carouselHovering.current = false;
                startAutoScroll();
              }}
            >
              <div className="transition-all duration-700">
                {solutions.map((solution, index) =>
                  index === currentIndex ? (
                    <div key={index} className="inline-block w-full px-4">
                      <div className="bg-[#F8F9F4] rounded-3xl border border-[#03144A]/20 overflow-hidden backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                          {/* Content Side */}
                          <div className="p-12 lg:p-16">
                            <div className="mb-8">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#03144A]/10 to-[#0EA5E9]/10 border border-[#0EA5E9] text-[#0EA5E9] text-sm font-medium mb-6">
                                {solution.badge}
                              </div>
                              <h3 className="text-3xl md:text-4xl font-light mb-4 text-[#03144A]">
                                {solution.title}
                              </h3>
                              <p className="text-xl text-[#0EA5E9] mb-6 font-light">
                                {solution.subtitle}
                              </p>
                            </div>
                            <p className="text-[#03144A] text-lg leading-relaxed mb-8">
                              {solution.description}
                            </p>
                            <div className="space-y-4 mb-8">
                              {solution.features.map((feature, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                  <div className="w-2 h-2 bg-[#0EA5E9] rounded-full flex-shrink-0" />
                                  <span className="text-[#03144A]">{feature}</span>
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-2xl font-light text-[#03144A]">
                                {solution.price}
                              </div>
                              <Link
                                href="/contact"
                                className="group px-8 py-3 bg-gradient-to-r from-[#03144A] to-[#0EA5E9] rounded-full text-[#F8F9F4] font-medium transition-all duration-300 hover:scale-105"
                              >
                                Devis gratuit
                              </Link>
                            </div>
                          </div>

                          {/* Image Side */}
                          <div className="relative bg-gradient-to-br from-[#03144A] to-[#0EA5E9] flex items-center justify-center p-12">
                            <div className="relative w-80 h-80">
                              <Image
                                src={solution.image}
                                alt={solution.title}
                                fill
                                className="object-contain filter drop-shadow-2xl"
                              />
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#03144A]/20 to-transparent rounded-bl-full" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#0EA5E9]/20 to-transparent rounded-tr-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </div>

              {/* Boutons de sélection */}
              <div className="flex justify-center gap-4 mt-6">
                {solutions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-4 h-4 rounded-full ${
                      i === currentIndex ? 'bg-[#0EA5E9]' : 'bg-[#03144A]/30'
                    } transition-all duration-300`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile version : carrousel horizontal */}
            <div className="md:hidden overflow-x-auto flex snap-x snap-mandatory scrollbar-hide px-2">
              {solutions.map((solution, index) => (
                <div key={index} className="snap-center flex-shrink-0 w-full px-2">
                  <div className="bg-[#F8F9F4] rounded-3xl border border-[#03144A]/20 overflow-hidden backdrop-blur-sm min-h-[600px] flex flex-col">
                    <div className="w-full h-48 relative">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-contain rounded-t-3xl"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl text-[#03144A] mb-2">{solution.title}</h3>
                        <p className="text-[#0EA5E9] mb-4">{solution.subtitle}</p>
                        <p className="text-[#03144A] mb-4">{solution.description}</p>
                      </div>
                      <div>
                        <p className="text-[#03144A] text-lg mb-2">{solution.price}</p>
                        <Link href="/contact" className="text-[#0EA5E9] underline">Devis</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F9F4]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8">
              Pourquoi nous <span className="text-[#03144A]">choisir</span> ?
            </h2>
            <p className="text-xl text-[#03144A] max-w-2xl mx-auto">
              L&apos;alliance du savoir-faire technique et de l&apos;excellence service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-[#F8F9F4] border border-[#03144A]/20 hover:border-[#0EA5E9]/50 transition-all duration-300 hover:bg-[#0EA5E9]/5"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 text-[#03144A] group-hover:text-[#0EA5E9] transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-[#03144A]/80 group-hover:text-[#0EA5E9] transition-colors">
                  {advantage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="bg-gradient-to-br from-[#F8F9F4] to-[#F8F9F4] rounded-3xl p-16 border border-[#03144A]/20 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Pr&ecirc;t &agrave; optimiser votre
              <br />
              <span className="text-[#0EA5E9]">eau chaude sanitaire</span> ?
            </h2>
            
            <p className="text-xl text-[#03144A] mb-12 leading-relaxed">
              Nos experts vous accompagnent dans le choix de la solution parfaite pour votre habitat
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative px-10 py-4 bg-gradient-to-r from-[#03144A] to-[#0EA5E9] rounded-full text-[#F8F9F4] font-medium transition-all duration-300 hover:scale-105"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
        <Tableau />
        <nav className="max-w-7xl mx-auto px-4 text-sm text-gray-600 my-6" aria-label="Fil d'Ariane">
          <ol className="list-reset flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline text-[#0EA5E9]">Accueil</Link>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link href="/nos-services" className="hover:underline text-[#0EA5E9]">Nos services</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-500">Eau chaude</li>
          </ol>
        </nav>
      </section>
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(5px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
      `}</style>
    </div>
  );
}