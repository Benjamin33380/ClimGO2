// components/MapContent.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// Configuration des villes avec leurs coordonnées
const CITIES_CONFIG = {
  'arcachon': { lat: 44.6586, lng: -1.1686, zoom: 13 },
  'la-teste-de-buch': { lat: 44.6308, lng: -1.1428, zoom: 13 },
  'gujan-mestras': { lat: 44.6344, lng: -1.0714, zoom: 13 },
  'le-teich': { lat: 44.6397, lng: -1.0217, zoom: 13 },
  'biganos': { lat: 44.6428, lng: -0.9661, zoom: 13 },
  'audenge': { lat: 44.6833, lng: -0.9833, zoom: 13 },
  'lanton': { lat: 44.7064, lng: -1.0333, zoom: 13 },
  'andernos-les-bains': { lat: 44.7419, lng: -1.1011, zoom: 13 },
  'ares': { lat: 44.7633, lng: -1.1364, zoom: 13 },
  'lege-cap-ferret': { lat: 44.7911, lng: -1.2431, zoom: 13 },
  'marcheprime': { lat: 44.6917, lng: -0.8500, zoom: 13 },
  'le-barp': { lat: 44.6094, lng: -0.7708, zoom: 13 },
  'mios': { lat: 44.6306, lng: -0.9364, zoom: 13 },
  'salles': { lat: 44.5525, lng: -0.8694, zoom: 13 },
  'belin-beliet': { lat: 44.5064, lng: -0.7828, zoom: 13 },
  'sanguinet': { lat: 44.4844, lng: -1.0758, zoom: 13 },
  'biscarrosse': { lat: 44.3931, lng: -1.1614, zoom: 13 },
  'parentis': { lat: 44.3539, lng: -1.0719, zoom: 13 },
  'mimizan': { lat: 44.2086, lng: -1.2289, zoom: 13 },
  'canejan': { lat: 44.7675, lng: -0.6581, zoom: 13 },
  'gradignan': { lat: 44.7706, lng: -0.6158, zoom: 13 },
  'saucats': { lat: 44.6889, lng: -0.5664, zoom: 13 },
  'saint-selve': { lat: 44.7056, lng: -0.4714, zoom: 13 },
  'martillac': { lat: 44.7169, lng: -0.5522, zoom: 13 },
  'leognan': { lat: 44.7333, lng: -0.5992, zoom: 13 },
  'la-brede': { lat: 44.6847, lng: -0.5219, zoom: 13 },
  'cadaujac': { lat: 44.7492, lng: -0.5331, zoom: 13 },
  'cestas': { lat: 44.7447, lng: -0.6778, zoom: 13 },
  'bordeaux': { lat: 44.8378, lng: -0.5792, zoom: 12 },
  'le-haillan': { lat: 44.8692, lng: -0.6678, zoom: 13 },
  'le-bouscat': { lat: 44.8606, lng: -0.5983, zoom: 13 },
  'bruges': { lat: 44.8889, lng: -0.6167, zoom: 13 },
  'eysines': { lat: 44.8758, lng: -0.6531, zoom: 13 },
  'cenon': { lat: 44.8522, lng: -0.5314, zoom: 13 },
  'lormont': { lat: 44.8767, lng: -0.5261, zoom: 13 },
  'floirac': { lat: 44.8356, lng: -0.5158, zoom: 13 },
  'bouliac': { lat: 44.8047, lng: -0.4708, zoom: 13 },
  'merignac': { lat: 44.8356, lng: -0.6503, zoom: 13 },
  'pessac': { lat: 44.8089, lng: -0.6292, zoom: 13 },
  'talence': { lat: 44.8083, lng: -0.5903, zoom: 13 },
  'villenave-d-ornon': { lat: 44.7739, lng: -0.5711, zoom: 13 },
  'begles': { lat: 44.8067, lng: -0.5492, zoom: 13 },
  'lacanau': { lat: 44.9764, lng: -1.0614, zoom: 13 },
  'saint-loubes': { lat: 44.9131, lng: -0.4281, zoom: 13 },
  'saint-jean-d-illac': { lat: 44.8044, lng: -0.7661, zoom: 13 },
  'saint-medard-en-jalles': { lat: 44.8981, lng: -0.7206, zoom: 13 },
  'saint-aubin-de-medoc': { lat: 44.9064, lng: -0.7147, zoom: 13 },
  'martignas-sur-jalle': { lat: 44.8439, lng: -0.7811, zoom: 13 }
};

const DEFAULT_PAGES = [
  '',
  'accueil',
  'nos-services', 
  'climatisation',
  'chauffage',
  'eau-chaude-sanitaire',
  'maintenance',
  'zones-desservies',
  'contact',
  'aides-d-etat',
  'blog',
  'mentions-legales',
  'privacy'
];

declare global {
  interface Window {
    google: {
      maps: {
        Map: any; // eslint-disable-line @typescript-eslint/no-explicit-any
        Marker: any; // eslint-disable-line @typescript-eslint/no-explicit-any
        Circle: any; // eslint-disable-line @typescript-eslint/no-explicit-any
        InfoWindow: any; // eslint-disable-line @typescript-eslint/no-explicit-any
        Size: any; // eslint-disable-line @typescript-eslint/no-explicit-any
        Point: any; // eslint-disable-line @typescript-eslint/no-explicit-any
        SymbolPath: any; // eslint-disable-line @typescript-eslint/no-explicit-any
        event: any; // eslint-disable-line @typescript-eslint/no-explicit-any
      };
    };
  }
}

export default function MapContent() {
  const pathname = usePathname();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const markerRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const miniCircleRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const circleRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);

  const getCurrentPageInfo = () => {
    const segments = pathname.split('/').filter(Boolean);
    console.log('🔍 URL segments:', segments);
    console.log('🔍 Pathname complet:', pathname);
    
    // Chercher dans tous les segments une ville avec le suffixe -chauffage-climatisation
    for (const segment of segments) {
      console.log('🔍 Test segment:', segment);
      
      // Vérifier si le segment se termine par -chauffage-climatisation
      if (segment.endsWith('-chauffage-climatisation')) {
        // Extraire le nom de la ville en retirant le suffixe
        const cityName = segment.replace('-chauffage-climatisation', '');
        console.log('🔍 Nom de ville extrait:', cityName);
        
        if (CITIES_CONFIG[cityName as keyof typeof CITIES_CONFIG]) {
          console.log('✅ Ville trouvée:', cityName);
          return {
            city: cityName as keyof typeof CITIES_CONFIG,
            isDefaultPage: false
          };
        }
      }
      
      // Vérification directe pour les segments sans suffixe (au cas où)
      if (CITIES_CONFIG[segment as keyof typeof CITIES_CONFIG]) {
        console.log('✅ Ville trouvée (directe):', segment);
        return {
          city: segment as keyof typeof CITIES_CONFIG,
          isDefaultPage: false
        };
      }
    }
    
    const lastSegment = segments[segments.length - 1] || '';
    console.log('🔍 Dernier segment:', lastSegment);
    
    if (DEFAULT_PAGES.includes(lastSegment)) {
      console.log('✅ Page par défaut détectée');
      return {
        city: 'marcheprime' as keyof typeof CITIES_CONFIG,
        isDefaultPage: true
      };
    }
    
    console.log('⚠️ Fallback vers Marcheprime');
    return {
      city: 'marcheprime' as keyof typeof CITIES_CONFIG,
      isDefaultPage: true
    };
  };

  // Charger Google Maps API
  useEffect(() => {
    const loadGoogleMaps = () => {
      // Vérifier si la clé API est définie
      if (!process.env.NEXT_PUBLIC_GOOGLE_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_API_KEY === 'your_google_maps_api_key_here') {
        setError('Clé API Google Maps manquante. Veuillez configurer NEXT_PUBLIC_GOOGLE_API_KEY dans votre fichier .env.local');
        setIsLoading(false);
        return;
      }

      // Vérifier si l'API est déjà chargée
      if (window.google && window.google.maps) {
        setIsGoogleMapsLoaded(true);
        return;
      }

      // Vérifier si le script est déjà en cours de chargement
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        // Attendre que le script existant se charge
        existingScript.addEventListener('load', () => {
          setIsGoogleMapsLoaded(true);
        });
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=geometry`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setIsGoogleMapsLoaded(true);
      };
      script.onerror = () => {
        setError('Erreur lors du chargement de Google Maps. Vérifiez votre clé API.');
        setIsLoading(false);
      };
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  // Calcul de la ville courante à l'extérieur de useEffect
  const { city, isDefaultPage } = getCurrentPageInfo();
  
  console.log('🗺️ Ville courante:', city);
  console.log('🗺️ Coordonnées:', CITIES_CONFIG[city]);
  
  useEffect(() => {
    if (!mapRef.current || !isGoogleMapsLoaded) return;

    setIsLoading(true);
    setError(null);

    const cityConfig = CITIES_CONFIG[city];

    if (!cityConfig) {
      setError('Configuration de ville non trouvée');
      setIsLoading(false);
      return;
    }

    try {
      // Créer une nouvelle carte Google Maps
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: cityConfig.lat, lng: cityConfig.lng },
        zoom: cityConfig.zoom,
        mapTypeId: 'satellite',
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        scrollwheel: true,
        gestureHandling: 'cooperative'
      });

      // Créer le marqueur ClimGO
      const marker = new window.google.maps.Marker({
        position: { lat: cityConfig.lat, lng: cityConfig.lng },
        map: map,
        icon: {
          url: '/favicon/favicon-32x32.png',
          className: 'w-fit h-fit bg-white rounded-full border-2 border-white shadow-lg',
          scaledSize: new window.google.maps.Size(32, 32),
          anchor: new window.google.maps.Point(16, 16)
        },
        title: `ClimGO - ${city.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}`
      });

      const miniCircle = new window.google.maps.Circle({
        map: map,
        strokeColor: '#F8F9F4',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#F8F9F4',
        fillOpacity: 1,
        radius: 300,
        center: { lat: cityConfig.lat, lng: cityConfig.lng }
      });

      // Créer le cercle de 6km
      const circle = new window.google.maps.Circle({
        strokeColor: '#9CA3AF',
        strokeOpacity: 0.4,
        strokeWeight: 2,
        fillColor: '#9CA3AF',
        fillOpacity: 0.2,
        map: map,
        center: { lat: cityConfig.lat, lng: cityConfig.lng },
        radius: 6000 // 6km en mètres
      });

      // InfoWindow pour le marqueur ClimGO
      const cityName = city.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="text-align: center; padding: 8px; font-family: Arial, sans-serif;">
            <strong style="color: #03144A; font-size: 14px;">ClimGO - ${cityName}</strong>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      mapInstanceRef.current = map;
      markerRef.current = marker;
      miniCircleRef.current = miniCircle;
      circleRef.current = circle;
      
      // Forcer le redimensionnement de la carte après un délai
      setTimeout(() => {
        if (mapInstanceRef.current) {
          window.google.maps.event.trigger(mapInstanceRef.current, 'resize');
          mapInstanceRef.current.setCenter({ lat: cityConfig.lat, lng: cityConfig.lng });
        }
      }, 100);

      // Redimensionner à nouveau après un délai plus long pour s'assurer que tout est chargé
      setTimeout(() => {
        if (mapInstanceRef.current) {
          window.google.maps.event.trigger(mapInstanceRef.current, 'resize');
        }
      }, 500);

      setIsLoading(false);
      
    } catch (err) {
      console.error('Erreur lors de l\'initialisation de la carte:', err);
      setError('Erreur lors du chargement de la carte');
      setIsLoading(false);
    }
  }, [city, isGoogleMapsLoaded]);

  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        // Google Maps se nettoie automatiquement
        mapInstanceRef.current = null;
        markerRef.current = null;
        circleRef.current = null;
      }
    };
  }, []);

  if (error) {
    return (
      <section className="py-16 bg-[#f8f9f4]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <div className="text-red-600 mb-2 text-2xl">⚠️</div>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  const cityName = city.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <section className="py-16 bg-[#F8F9F4]">
      <div className="w-full px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
            {isDefaultPage ? 'Notre Zone d\'Intervention' : `ClimGO à ${cityName}`}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            {isDefaultPage 
              ? 'Nous intervenons dans toute la Gironde pour vos projets de climatisation, chauffage et maintenance'
              : `Découvrez nos services de climatisation et chauffage à ${cityName}`
            }
          </p>
          <Link 
            href="tel:0766460008" 
            className="inline-block bg-[#03144a] text-[#f8f9f4] px-8 py-3 rounded-lg font-medium hover:bg-[#03144a] transition-colors duration-300"
          >
            Nous appeler 
          </Link>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-xl">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-[#03144a] rounded-full animate-pulse"></div>
                <span className="text-gray-900 font-medium">Chargement de la carte...</span>
              </div>
            </div>
          )}
          
          <div
            ref={mapRef}
            className="w-full h-[400px] md:h-[500px] relative z-10"
            style={{ minHeight: '400px' }}
          />
          
          {!isLoading && (
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg z-20">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-3 h-3 bg-[#03144a] rounded-full animate-pulse"></div>
                <span className="text-gray-900 font-semibold">
                  {cityName}
                </span>
              </div>
              <p className="text-xs text-gray-600">Zone d&apos;intervention ClimGO</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}