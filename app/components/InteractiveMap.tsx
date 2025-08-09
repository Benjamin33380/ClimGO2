'use client';

import dynamic from 'next/dynamic';

// Importer le composant carte de façon dynamique pour éviter les problèmes SSR
const DynamicMapContent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[500px] bg-[#F8F9F4] flex items-center justify-center">
      <div className="flex items-center space-x-3">
        <div className="w-4 h-4 bg-[#03144a] rounded-full animate-pulse"></div>
        <span className="text-gray-900 font-medium">Chargement de la carte...</span>
      </div>
    </div>
  )
});

export default function InteractiveMap() {
  return <DynamicMapContent />;
}