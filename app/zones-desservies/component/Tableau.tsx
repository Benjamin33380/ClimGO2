'use client';

import { useState } from 'react';
import Link from 'next/link';

const SimpleCitiesSection = () => {
  const [searchTerm] = useState('');
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

        <div className="text-center mb-8">
          <button
            onClick={() => setShowCities(!showCities)}
            className="px-6 py-3 bg-[#03144a] text-[#F8F9F4] rounded-lg hover:bg-[#03144a]/90 transition-colors"
          >
            {showCities ? 'Masquer les villes' : 'Afficher les villes'}
          </button>
        </div>

        {/* Toujours rendre les liens des villes dans le DOM pour le SEO, mais masquer visuellement si besoin */}
        <div aria-hidden={!showCities && !searchTerm} style={{ display: !showCities && !searchTerm ? 'none' : 'grid' }} className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCities.map((city) => (
            <Link
              key={city.name}
              href={city.url}
              className="block p-4 bg-[#F8F9F4] rounded-lg border border-[#03144a]/20 hover:border-[#03144a] hover:bg-[#03144a]/10 transition-all"
            >
              <h3 className="text-[#03144a] font-medium text-center">
                {city.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* CTA - Layout flex pour les deux sections */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Section "Votre ville n'apparaît pas ?" */}
            <div className="flex-1 bg-[#F8F9F4] rounded-xl p-8 border border-[#03144a]/20">
              <h3 className="text-2xl font-semibold mb-4">
                Votre ville n&apos;apparaît pas ?
              </h3>
              <p className="text-[#03144a]/80 mb-6">
                Contactez-nous pour découvrir nos services dans votre ville, vous y verrez bientôt la page correspondante !
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-[#03144a] text-[#F8F9F4] rounded-lg hover:bg-[#03144a]/90 transition-colors"
              >
                Nous contacter
              </Link>
            </div>

            {/* Section "ClimGO à Bordeaux" */}
            <div className="flex-1 bg-[#F8F9F4] rounded-xl p-8 border border-[#03144a]/20">
              <h3 className="text-2xl font-semibold mb-4">
                ClimGO à Bordeaux
              </h3>
              <p className="text-[#03144a]/80 mb-6">
                Découvrez nos services de chauffage et climatisation dans la métropole bordelaise
              </p>
              <Link
                href="/blog"
                className="inline-block px-8 py-3 bg-[#03144a] text-[#F8F9F4] rounded-lg hover:bg-[#03144a]/90 transition-colors"
              >
                Consulter nos articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleCitiesSection;