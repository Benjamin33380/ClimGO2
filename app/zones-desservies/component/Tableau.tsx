import React from 'react';

const CitiesTable = () => {
  const cities = [
    { name: 'Arcachon', url: 'https://www.climgo.fr/arcachon-chauffage-climatisation' },
    { name: 'La Teste-de-Buch', url: 'https://www.climgo.fr/la-teste-de-buch-chauffage-climatisation' },
    { name: 'Gujan-Mestras', url: 'https://www.climgo.fr/gujan-mestras-chauffage-climatisation' },
    { name: 'Le Teich', url: 'https://www.climgo.fr/le-teich-chauffage-climatisation' },
    { name: 'Biganos', url: 'https://www.climgo.fr/biganos-chauffage-climatisation' },
    { name: 'Audenge', url: 'https://www.climgo.fr/audenge-chauffage-climatisation' },
    { name: 'Lanton', url: 'https://www.climgo.fr/lanton-chauffage-climatisation' },
    { name: 'Andernos-les-Bains', url: 'https://www.climgo.fr/andernos-les-bains-chauffage-climatisation' },
    { name: 'Arès', url: 'https://www.climgo.fr/ares-chauffage-climatisation' },
    { name: 'Lège Cap Ferret', url: 'https://www.climgo.fr/lege-cap-ferret-chauffage-climatisation' },
    { name: 'Marcheprime', url: 'https://www.climgo.fr/marcheprime-chauffage-climatisation' },
    { name: 'Le Barp', url: 'https://www.climgo.fr/le-barp-chauffage-climatisation' },
    { name: 'Mios', url: 'https://www.climgo.fr/mios-chauffage-climatisation' },
    { name: 'Salles', url: 'https://www.climgo.fr/salles-chauffage-climatisation' },
    { name: 'Belin-Béliet', url: 'https://www.climgo.fr/belin-beliet-chauffage-climatisation' },
    { name: 'Sanguinet', url: 'https://www.climgo.fr/sanguinet-chauffage-climatisation' },
    { name: 'Parentis-en-Born', url: 'https://www.climgo.fr/parentis-chauffage-climatisation' },
    { name: 'Biscarrosse', url: 'https://www.climgo.fr/biscarrosse-chauffage-climatisation' },
    { name: 'Mimizan', url: 'https://www.climgo.fr/mimizan-chauffage-climatisation' },
    { name: 'Canéjan', url: 'https://www.climgo.fr/canejan-chauffage-climatisation' },
    { name: 'Gradignan', url: 'https://www.climgo.fr/gradignan-chauffage-climatisation' },
    { name: 'Saucats', url: 'https://www.climgo.fr/saucats-chauffage-climatisation' },
    { name: 'Saint-Selve', url: 'https://www.climgo.fr/saint-selve-chauffage-climatisation' },
    { name: 'Martillac', url: 'https://www.climgo.fr/martillac-chauffage-climatisation' },
    { name: 'Léognan', url: 'https://www.climgo.fr/leognan-chauffage-climatisation' },
    { name: 'La Brède', url: 'https://www.climgo.fr/la-brede-chauffage-climatisation' },
    { name: 'Cadaujac', url: 'https://www.climgo.fr/cadaujac-chauffage-climatisation' },
    { name: 'Cestas', url: 'https://www.climgo.fr/cestas-chauffage-climatisation' },
    { name: 'Bordeaux', url: 'https://www.climgo.fr/bordeaux-chauffage-climatisation' },
    { name: 'Le Haillan', url: 'https://www.climgo.fr/le-haillan-chauffage-climatisation' },
    { name: 'Le Bouscat', url: 'https://www.climgo.fr/le-bouscat-chauffage-climatisation' },
    { name: 'Bruges', url: 'https://www.climgo.fr/bruges-chauffage-climatisation' },
    { name: 'Eysines', url: 'https://www.climgo.fr/eysines-chauffage-climatisation' },
    { name: 'Cenon', url: 'https://www.climgo.fr/cenon-chauffage-climatisation' },
    { name: 'Lormont', url: 'https://www.climgo.fr/lormont-chauffage-climatisation' },
    { name: 'Floirac', url: 'https://www.climgo.fr/floirac-chauffage-climatisation' },
    { name: 'Bouliac', url: 'https://www.climgo.fr/bouliac-chauffage-climatisation' },
    { name: 'Mérignac', url: 'https://www.climgo.fr/merignac-chauffage-climatisation' },
    { name: 'Pessac', url: 'https://www.climgo.fr/pessac-chauffage-climatisation' },
    { name: 'Talence', url: 'https://www.climgo.fr/talence-chauffage-climatisation' },
    { name: "Villenave-d'Ornon", url: 'https://www.climgo.fr/villenave-d-ornon-chauffage-climatisation' },
    { name: 'Bègles', url: 'https://www.climgo.fr/begles-chauffage-climatisation' },
    { name: 'Lacanau', url: 'https://www.climgo.fr/lacanau-chauffage-climatisation' },
    { name: 'Saint-Loubès', url: 'https://www.climgo.fr/saint-loubes-chauffage-climatisation' },
    { name: "Saint-Jean-d'Illac", url: 'https://www.climgo.fr/saint-jean-d-illac-chauffage-climatisation' },
    { name: "Saint-Médard-en-Jalles", url: 'https://www.climgo.fr/saint-medard-en-jalles-chauffage-climatisation' },
    { name: "Saint-Aubin-de-Médoc", url: 'https://www.climgo.fr/saint-aubin-de-medoc-chauffage-climatisation' },
    { name: 'Martignas-sur-Jalle', url: 'https://www.climgo.fr/martignas-sur-jalle-chauffage-climatisation' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 border border-[#b5b7bd] rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-center mb-6">
        <a
          href="/zones-desservies"
          className="bg-[#03144a] text-[#F8F9F4] px-4 py-2 rounded shadow hover:opacity-90 transition-opacity"
        >
          Zones d&apos;intervention ClimGO
        </a>
      </h1>

      <div className="flex flex-wrap gap-2 justify-center">
        {cities.map((city) => (
          <a
            key={city.name}
            href={city.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-[#F8F9F4] text-[#03144a] text-sm rounded border border-[#03144a] hover:bg-[#e8e9e4] transition-colors"
          >
            {city.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CitiesTable;