'use client';

import dynamic from 'next/dynamic';

// Importer le composant carte de façon dynamique pour éviter les problèmes SSR
const DynamicMapContent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <section className="py-16 bg-gradient-to-br from-[#F8F9F4] to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-[#03144A]">
            Notre Zone d'Intervention
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous intervenons dans toute la Gironde pour vos projets de climatisation, chauffage et maintenance
          </p>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <div className="w-full h-[400px] md:h-[500px] bg-gray-100 flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-[#10B981] rounded-full animate-pulse"></div>
              <span className="text-[#03144A] font-medium">Chargement de la carte...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
});

export default function InteractiveMap() {
  return <DynamicMapContent />;
}