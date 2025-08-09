"use client";
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, MapPin, Phone, ArrowRight } from 'lucide-react';
import { TbFlame, TbSnowflake, TbBolt, TbDroplet, TbTools } from 'react-icons/tb';

// Composant de recherche séparé pour Suspense
const CitySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const cities = [
    { name: 'Arcachon', url: '/arcachon-chauffage-climatisation' },
    { name: 'La Teste-de-Buch', url: '/la-teste-de-buch-chauffage-climatisation' },
    { name: 'Gujan-Mestras', url: '/gujan-mestras-chauffage-climatisation' },
    { name: 'Le Teich', url: '/le-teich-chauffage-climatisation' },
    { name: 'Biganos', url: '/biganos-chauffage-climatisation' },
    { name: 'Audenge', url: '/audenge-chauffage-climatisation' },
    { name: 'Lanton', url: '/lanton-chauffage-climatisation' },
    { name: 'Andernos-les-Bains', url: '/andernos-les-bains-chauffage-climatisation' },
    { name: 'Arès', url: '/ares-chauffage-climatisation' },
    { name: 'Lège Cap Ferret', url: '/lege-cap-ferret-chauffage-climatisation' },
    { name: 'Marcheprime', url: '/marcheprime-chauffage-climatisation' },
    { name: 'Le Barp', url: '/le-barp-chauffage-climatisation' },
    { name: 'Mios', url: '/mios-chauffage-climatisation' },
    { name: 'Salles', url: '/salles-chauffage-climatisation' },
    { name: 'Belin-Béliet', url: '/belin-beliet-chauffage-climatisation' },
    { name: 'Sanguinet', url: '/sanguinet-chauffage-climatisation' },
    { name: 'Parentis-en-Born', url: '/parentis-chauffage-climatisation' },
    { name: 'Biscarrosse', url: '/biscarrosse-chauffage-climatisation' },
    { name: 'Mimizan', url: '/mimizan-chauffage-climatisation' },
    { name: 'Canéjan', url: '/canejan-chauffage-climatisation' },
    { name: 'Gradignan', url: '/gradignan-chauffage-climatisation' },
    { name: 'Saucats', url: '/saucats-chauffage-climatisation' },
    { name: 'Saint-Selve', url: '/saint-selve-chauffage-climatisation' },
    { name: 'Martillac', url: '/martillac-chauffage-climatisation' },
    { name: 'Léognan', url: '/leognan-chauffage-climatisation' },
    { name: 'La Brède', url: '/la-brede-chauffage-climatisation' },
    { name: 'Cadaujac', url: '/cadaujac-chauffage-climatisation' },
    { name: 'Cestas', url: '/cestas-chauffage-climatisation' },
    { name: 'Bordeaux', url: '/bordeaux-chauffage-climatisation' },
    { name: 'Le Haillan', url: '/le-haillan-chauffage-climatisation' },
    { name: 'Le Bouscat', url: '/le-bouscat-chauffage-climatisation' },
    { name: 'Bruges', url: '/bruges-chauffage-climatisation' },
    { name: 'Eysines', url: '/eysines-chauffage-climatisation' },
    { name: 'Cenon', url: '/cenon-chauffage-climatisation' },
    { name: 'Lormont', url: '/lormont-chauffage-climatisation' },
    { name: 'Floirac', url: '/floirac-chauffage-climatisation' },
    { name: 'Bouliac', url: '/bouliac-chauffage-climatisation' },
    { name: 'Mérignac', url: '/merignac-chauffage-climatisation' },
    { name: 'Pessac', url: '/pessac-chauffage-climatisation' },
    { name: 'Talence', url: '/talence-chauffage-climatisation' },
    { name: "Villenave-d'Ornon", url: '/villenave-d-ornon-chauffage-climatisation' },
    { name: 'Bègles', url: '/begles-chauffage-climatisation' },
    { name: 'Lacanau', url: '/lacanau-chauffage-climatisation' },
    { name: 'Saint-Loubès', url: '/saint-loubes-chauffage-climatisation' },
    { name: "Saint-Jean-d'Illac", url: '/saint-jean-d-illac-chauffage-climatisation' },
    { name: "Saint-Médard-en-Jalles", url: '/saint-medard-en-jalles-chauffage-climatisation' },
    { name: "Saint-Aubin-de-Médoc", url: '/saint-aubin-de-medoc-chauffage-climatisation' },
    { name: 'Martignas-sur-Jalle', url: '/martignas-sur-jalle-chauffage-climatisation' }
  ];

  // Filtrer les villes basé sur la recherche
  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto mb-6 sm:mb-8 relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Rechercher votre ville..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowSearchResults(e.target.value.length > 0);
          }}
          onFocus={() => setShowSearchResults(searchQuery.length > 0)}
          className="w-full bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-12 py-3 sm:py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm sm:text-base"
        />
        <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
      
      {/* Résultats de recherche */}
      {showSearchResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/30 max-h-60 overflow-y-auto z-50">
          {filteredCities.length > 0 ? (
            filteredCities.slice(0, 8).map((city, index) => (
              <Link
                key={index}
                href={city.url}
                onClick={() => {
                  setSearchQuery('');
                  setShowSearchResults(false);
                }}
                className="block w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-gray-400" />
                {city.name}
              </Link>
            ))
          ) : (
            <div className="px-4 py-3 text-gray-500">
              Aucune ville trouvée
            </div>
          )}
        </div>
      )}
    </div>
  );
};

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
                animation: currentIndex === index ? 'kenBurns 5s ease-in-out infinite alternate' : 'none',
                zIndex: 1 // Correction de la teinte bleue
              }}
            />
          ))}
          
          {/* Overlay sombre avec gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
          
          <div className="relative z-20 text-center text-white px-4 md:px-8 py-8 sm:py-12 animate-fade-in-up max-h-screen overflow-y-auto">
            {/* Badge de certification */}
            <div className="mb-4 sm:mb-6">
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-white/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Certifié RGE - Qualifié QualiPAC
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-white">Clim</span>
              <span className="text-[#03144a]">GO</span>
            </h1>
            
            {/* Sous-titre */}
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              Votre expert en <strong className="text-white">chauffage</strong>, <strong className="text-white">climatisation</strong> et <strong className="text-white">pompes à chaleur</strong> entre Bordeaux et le Bassin d'Arcachon
            </p>

            {/* Recherche de villes avec Suspense */}
            <Suspense fallback={
              <div className="max-w-md mx-auto mb-6 sm:mb-8">
                <div className="w-full bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-12 py-3 sm:py-4 animate-pulse">
                  <div className="h-4 bg-white/20 rounded"></div>
                </div>
              </div>
            }>
              <CitySearch />
            </Suspense>

            {/* CTA Principal */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-2">
              <Link href="/contact">
                <button className="group bg-white text-[#03144a] font-bold px-6 cursor-pointer sm:px-8 py-3 sm:py-4 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center">
                  <span>Obtenir un devis gratuit</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="tel:0766460008">
                <button className="group bg-[#03144a]/80 backdrop-blur-md text-white/90 cursor-pointer font-semibold px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-white/30 transition-all duration-300 transform hover:scale-105 hover:bg-[#03144a] flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>07 66 46 00 08</span>
                </button>
              </Link>
            </div>

            {/* Services rapides */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-3 max-w-4xl mx-auto px-2">
              <Link href="/chauffage" className="group bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="text-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <TbFlame className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white group-hover:text-blue-200 transition-colors">Chauffage</span>
                </div>
              </Link>
              
              <Link href="/climatisation" className="group bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="text-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <TbSnowflake className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white group-hover:text-blue-200 transition-colors">Climatisation</span>
                </div>
              </Link>
              
              <Link href="/nos-services" className="group bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="text-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <TbBolt className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white group-hover:text-blue-200 transition-colors">Tous Nos Services</span>
                </div>
              </Link>
              
              <Link href="/eau-chaude-sanitaire" className="group bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="text-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <TbDroplet className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white group-hover:text-blue-200 transition-colors">Eau chaude</span>
                </div>
              </Link>
              
              <Link href="/maintenance" className="group col-span-2 md:col-span-1 bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="text-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <TbTools className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-white group-hover:text-blue-200 transition-colors">Maintenance</span>
                </div>
              </Link>
            </div>
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