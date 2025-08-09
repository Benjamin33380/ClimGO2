"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface HeroProps {
  ville: string;
  backgroundImage: string;
}

// Composant de recherche de ville
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
    { name: 'Parentis-en-Born', url: '/parentis-en-born-chauffage-climatisation' },
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
            <div className="px-4 py-3 text-gray-500 text-center">
              Aucune ville trouvée
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function Hero({ ville, backgroundImage }: HeroProps) {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden bg-center bg-no-repeat bg-cover md:bg-fixed">
      <div
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover md:bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      

      <div className="relative z-20 text-center px-4 md:px-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-medium font-playfair mb-4">
          Chauffage, Climatisation à {ville} – ClimGO
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-6">
          100% confort. Service local certifié RGE.
        </p>
        
        {/* Formulaire de recherche de ville */}
        <CitySearch />
        
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link href="/contact">
            <button className="bg-white text-[#03144a] font-semibold px-6 py-3 rounded-full shadow-xl transition duration-300 transform hover:scale-105 hover:bg-[#03144a] hover:text-white">
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
      </div>

      <style jsx>{`
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
    </div>
  );
}