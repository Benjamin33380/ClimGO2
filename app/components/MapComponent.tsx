'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialiser la carte
    const map = L.map(mapRef.current).setView([47.0, 3.0], 5);

    // Ajouter les tuiles Apple-like (MapTiler Dataviz)
    L.tileLayer('https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.png?key=6Wc87ApEs23sBOY0iu6X', {
      attribution: '&copy; <a href="https://www.maptiler.com/">MapTiler</a>',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map);

    // Créer une icône personnalisée
    

    

    mapInstanceRef.current = map;

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full rounded-lg relative z-10" />;
} 