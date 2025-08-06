"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsTransitioning] = useState(false);
  
  const bgImages = [
    "/sdb-pyla.jpeg",
    "/climcauderan.jpeg"
  ];


  // Animation de fond avec crossfade corrigée
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Attendre que la transition commence, puis changer l'image
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bgImages.length);
        setIsTransitioning(false);
      }, 1000); // Durée de la transition crossfade
    }, 5000); // 5 secondes par image

    return () => clearInterval(interval);
  }, [bgImages.length]);

  // Générer l'initiale pour l'avatar


  return (
    <div className="flex flex-col min-h-screen absolute top-0 left-0 w-full h-full">
      
      <main className="grow">
        {/* Hero Section avec carrousel d'images corrigé */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Images de fond avec système de crossfade */}
          {bgImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
              style={{ 
                backgroundImage: `url('${image}')`,
                opacity: currentIndex === index ? 1 : 0,
                transform: 'scale(1.05)', // Effet Ken Burns léger
                animation: currentIndex === index ? 'kenBurns 5s ease-in-out infinite alternate' : 'none'
              }}
            />
          ))}
          
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          
          <div className="relative z-20 text-center text-white px-4 md:px-8 mt-28 md:mt-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-medium mt-12 mb-4 font-playfair text-white font-light">
              ClimGO
            </h2>
            <h1 className="text-2xl md:text-4xl font-medium mt-4 mb-6 text-white">
              Installateur de Chauffage, Climatisation & Pompe à chaleur.
            </h1>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link href="/contact">
                <button className="bg-white text-[#001E60] font-semibold px-6 py-3 rounded-full shadow-xl transition duration-300 transform hover:scale-105 hover:bg-[#001E60] hover:text-white">
                  Obtenir un devis
                </button>
              </Link>
              <Link href="/contact">
                  <Image 
                  src="/rge.png" 
                  alt="Logo RGE"
                  className="w-24 h-auto mt-2 sm:mt-0 shadow-lg rounded transition duration-300 transform hover:scale-110 hover:shadow-xl"                  
                  width={96}
                  height={96}
                />
              </Link>
            </div>
            <nav className=" flex-wrap justify-center gap-4 mt-12 text-center px-4 max-w-7xl mx-auto hidden md:flex">
              <Link href="/chauffage" className="text-center w-full sm:w-auto text-white font-semibold tracking-wide text-xl py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Chauffage
              </Link>
              <Link href="/climatisation" className="text-center w-full sm:w-auto text-white font-semibold tracking-wide text-xl py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Climatisation
              </Link>
              <Link href="/nos-services" className="text-center w-full sm:w-auto text-white font-semibold tracking-wide text-xl py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Pompe à chaleur
              </Link>
              <Link href="/eau-chaude-sanitaire" className="text-center w-full sm:w-auto text-white font-semibold tracking-wide text-xl py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Eau chaude sanitaire
              </Link>
              <Link href="/maintenance" className="text-center w-full sm:w-auto text-white font-semibold tracking-wide text-xl py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Maintenance
              </Link>
            </nav>
       
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
      </main>
    </div>
  );
}