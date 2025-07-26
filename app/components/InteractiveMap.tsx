'use client';

import dynamic from 'next/dynamic';

// Composant de carte qui sera chargé dynamiquement
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Chargement de la carte...</p>
      </div>
    </div>
  )
});

export default function InteractiveMap() {
  return (
    <div className="w-full h-96 relative z-10">
     
      <MapComponent />
    </div>
  );
}