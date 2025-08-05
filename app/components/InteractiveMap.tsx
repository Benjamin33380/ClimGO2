'use client';

import dynamic from 'next/dynamic';

// Importer le composant carte de façon dynamique pour éviter les problèmes SSR
const DynamicMapContent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-[#F8F9F4]" />
  )
});

export default function InteractiveMap() {
  return <DynamicMapContent />;
}