'use client';

import { useState } from 'react';
import Link from 'next/link';

const SimpleCitiesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCities, setShowCities] = useState(false);

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

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-[#F8F9F4] text-[#03144a] py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-8">
            Nos <span className="text-[#03144a]/90">zones d&apos;interventions</span>
          </h2>
          <p className="text-lg text-[#03144a]/70">
            Excellence thermique dans toute la région
          </p>
        </div>

        {/* Search */}
        <div className="max-w-lg mx-auto mb-12">
          <input
            type="text"
            placeholder="Rechercher une ville..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 bg-[#03144a]/10 border border-[#03144a]/30 rounded-lg text-[#03144a] placeholder-[#03144a]/60 focus:outline-none focus:border-[#03144a]"
          />
        </div>

        <div className="text-center mb-8">
          <button
            onClick={() => setShowCities(!showCities)}
            className="px-6 py-3 bg-[#03144a] text-[#F8F9F4] rounded-lg hover:bg-[#03144a]/90 transition-colors"
          >
            {showCities ? 'Masquer les villes' : 'Afficher les villes'}
          </button>
        </div>

        {(showCities || searchTerm) && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
            {filteredCities.map((city) => (
              <Link
                key={city.name}
                href={city.url}
                className="block p-4 bg-[#03144a]/10 rounded-lg border border-[#03144a]/20 hover:border-[#03144a] hover:bg-[#03144a]/20 transition-all"
              >
                <h3 className="text-[#03144a] font-medium text-center">
                  {city.name}
                </h3>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <div className="bg-[#03144a]/10 rounded-xl p-8 border border-[#03144a]/20">
            <h3 className="text-2xl font-semibold mb-4">
              Votre ville n&apos;apparaît pas ?
            </h3>
            <p className="text-[#03144a]/80 mb-6">
              Contactez-nous pour discuter de votre projet
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#03144a] text-[#F8F9F4] rounded-lg hover:bg-[#03144a]/90 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleCitiesSection;