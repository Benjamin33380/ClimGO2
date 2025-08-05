'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tableau from '../zones-desservies/component/Tableau';

export default function PremiumHeatingPage() {
  const solutionsRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      id: 'pac-air-eau',
      title: "Pompe à chaleur air/eau",
      subtitle: "Performance & Économies",
      image: "/PacAirEau.png",
      badge: "Jusqu'à -70% sur votre facture",
      features: [
        "Coefficient de performance exceptionnel",
        "Compatible MaPrimeRénov' & CEE",
        "Intégration plancher chauffant",
        "Fonctionnement jusqu'à -15°C"
      ],
      description: "Technologie de pointe qui transforme l'énergie gratuite de l'air en chaleur pour votre habitation. Solution idéale pour remplacer votre ancienne chaudière.",
      price: "À partir de 8 900€",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 'pac-air-air',
      title: "Pompe à chaleur air/air",
      subtitle: "Réversible 4 Saisons",
      image: "/PompeChaleurAirAir.webp",
      badge: "Chauffage + Climatisation",
      features: [
        "Système réversible intégral",
        "Installation rapide et propre",
        "Contrôle zone par zone",
        "Design ultra-moderne"
      ],
      description: "Un seul équipement pour votre confort toute l'année. Chauffage l'hiver, climatisation l'été, avec une efficacité énergétique remarquable.",
      price: "À partir de 3 200€",
      gradient: "from-[#03144a] to-[#305f95]"
    },
    {
      id: 'plancher-chauffant',
      title: "Plancher chauffant",
      subtitle: "Confort Invisible",
      image: "/PlancherChauffantAnime.webp",
      badge: "Luxe & Discrétion",
      features: [
        "Chaleur homogène optimale",
        "Libération totale des murs",
        "Silence absolu garanti",
        "Température pièce par pièce"
      ],
      description: "Le summum du confort thermique.",
      TbFileDescription: "Invisible mais omniprésent, il transforme votre sol en source de bien-être permanent.",
      price: "À partir de 65€/m²",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 'radiateurs',
      title: "Radiateurs nouvelle génération",
      subtitle: "Design & Performance",
      image: "/Radiateur.png",
      badge: "Montée en température rapide",
      features: [
        "Inertie intelligente avancée",
        "Formats décoratifs variés",
        "Compatibilité PAC optimale",
        "Installation sans gros œuvre"
      ],
      description: "L'évolution des radiateurs traditionnels.", 
      TbFileDescription:"Design contemporain, performance énergétique et facilité d'installation réunis.",
      price: "À partir de 290€",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const advantages = [
    {
      
      title: "Expertise technique",
      desc: "15 ans d'expérience dans le thermique"
    },
    {
      
      title: "Installation express",
      desc: "Mise en service en 24h chrono"
    },
    {
      icon: "🔧",
      title: "Garantie premium",
      desc: "SAV réactif et pièces d'origine"
    },
    {
      
      title: "Financement 0%",
      desc: "Solutions adaptées à votre budget"
    }
  ];

  // Carousel state and refs
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === solutions.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Suppression du scroll automatique lors du changement de slide
  useEffect(() => {
    if (!carouselRef.current) return;
    // Ancien code de scroll automatique supprimé pour empêcher le repositionnement automatique du viewport
    /*
    const children = carouselRef.current.children;
    const isLastClone = currentIndex === solutions.length;
    const scrollTo = children[currentIndex] as HTMLElement;
    scrollTo?.scrollIntoView({
      behavior: isLastClone ? 'auto' : 'smooth',
      inline: 'start',
      block: 'nearest'
    });
    if (isLastClone) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 50);
    }
    */
    // Si vous souhaitez gérer le changement de slide sans scroll, laissez ce useEffect vide ou adaptez-le selon vos besoins UX.
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-[#f8f9f4] text-[#03144a]">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br bg-[#F8F9F4] via-[#F8F9F4] to-slate-[#111111]" />
        
        {/* Background effects */}
        {/* Blue particles */}
        <div className="absolute w-2 h-2 bg-[#03144a] rounded-full top-10 left-10" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#03144a] rounded-full top-1/3 left-1/2" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#03144a] rounded-full bottom-1/3 right-20" style={{ animation: 'float 4s ease-in-out infinite' }} />

        {/* Orange particles */}
        <div className="absolute w-2 h-2 bg-[#ff7700] rounded-full top-20 right-10" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#ff7700] rounded-full bottom-10 left-1/3" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#ff7700] rounded-full top-1/2 right-1/4" style={{ animation: 'float 4s ease-in-out infinite' }} />

        {/* New animated particles */}
        <div className="absolute w-2 h-2 bg-[#03144a] rounded-full top-[15%] left-[20%]" style={{ animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#ff7700] rounded-full bottom-[20%] right-[15%]" style={{ animation: 'float 5s ease-in-out infinite' }} />
        <div className="absolute w-2 h-2 bg-[#03144a] rounded-full top-[60%] left-[45%]" style={{ animation: 'float 7s ease-in-out infinite' }} />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#da0000bd] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#f8f9f4] rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-[#f1f1f1] text-sm tracking-widest uppercase mb-8 text-slate-300 bg-[#03144a] backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#03144a] rounded-full mr-3 animate-pulse" />
            Nos solutions thermiques
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-wide mb-8">
            <span className="bg-gradient-to-r from-[#ff7700] via-[#ffb347] to-[#ff7700] bg-clip-text text-transparent">
              Chauffage
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#03144a] via-[#305f95] to-[#03144a] bg-clip-text text-transparent">
              ClimGO
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Découvrez nos solutions thermiques d'exception. Performance, économies et confort réunis dans des technologies de pointe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => solutionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-4 bg-white text-black rounded-full font-medium transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Découvrir nos solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#03144a] to-[#305f95] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group px-10 py-4 border border-[#305f95] rounded-full font-medium transition-all duration-300 hover:border-[#305f95] hover:bg-[#03144a]/5">
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
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Chaque solution est pensée pour maximiser votre confort tout en optimisant vos économies d'énergie
            </p>
          </div>

          {/* Carousel Solutions */}
          <div
            ref={carouselRef}
            className="overflow-x-auto whitespace-nowrap space-x-6 scrollbar-hide px-0 w-screen transition-transform duration-1000 ease-in-out"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 1s ease-in-out'
            }}
          >
            {solutions.map((solution, index) => (
              <div key={index} className="inline-block w-screen align-top">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/30 rounded-3xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className="p-12 lg:p-16">
                      <div className="mb-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#03144a]/20 to-[#305f95]/20 border border-[#305f95] text-[#305f95] text-sm font-medium mb-6">
                          {solution.badge}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-light mb-4 text-white">
                          {solution.title}
                        </h3>
                        <p className="text-xl text-[#305f95] mb-6 font-light">
                          {solution.subtitle}
                        </p>
                      </div>
                      <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        {solution.description}
                      </p>
                      
                      <div className="space-y-4 mb-8">
                        {solution.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#03144a] rounded-full flex-shrink-0" />
                            <span className="text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-light text-white">
                          {solution.price}
                        </div>
                        <Link
                          href="/contact"
                          className="group px-8 py-3 bg-gradient-to-r from-[#03144a] to-[#305f95] rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
                        >
                          Devis gratuit
                        </Link>
                      </div>
                    </div>
                    {/* Image Side */}
                    <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center p-12">
                      <div className="relative w-80 h-80">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-contain filter drop-shadow-2xl"
                        />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#03144a]/20 to-transparent rounded-bl-full" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-tr-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8">
              Pourquoi nous <span className="text-[#03144a]">choisir</span> ?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              L'alliance du savoir-faire technique et de l'excellence service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-[#305f95]/50 transition-all duration-300 hover:bg-slate-800/50"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 text-white group-hover:text-[#305f95] transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
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
          <div className="bg-gradient-to-br from-slate[#F8F9F4] to-slate-[#F8F9F4] rounded-3xl p-16 border border-slate-600/30 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Prêt à optimiser votre
              <br />
              <span className="text-[#03144a]">confort thermique</span> ?
            </h2>
            
            <p className="text-xl text-slate-800 mb-12 leading-relaxed">
              Nos experts vous accompagnent dans le choix de la solution parfaite pour votre habitat
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative px-10 py-4 bg-gradient-to-r from-[#03144a] to-[#305f95] rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Demander un devis gratuit
              </Link>

            </div>
          </div>
        </div>
        <Tableau />
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