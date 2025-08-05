// components/MapContent.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

export default function MapContent() {
  const pathname = usePathname();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const createCustomIcon = () => {
    return L.divIcon({
      html: `
        <div style="
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #10B981 0%, #03144A 100%);
          border: 2px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          font-weight: bold;
          color: white;
          font-size: 12px;
        ">
          CG
        </div>
      `,
      className: 'custom-climgo-marker',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    });
  };

  // Calcul de la ville courante à l'extérieur de useEffect
  const { city, isDefaultPage } = getCurrentPageInfo();
  
  console.log('🗺️ Ville courante:', city);
  console.log('🗺️ Coordonnées:', CITIES_CONFIG[city]);
  
  useEffect(() => {
    if (!mapRef.current) return;

    setIsLoading(true);
    setError(null);

    // Nettoyer la carte existante
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const cityConfig = CITIES_CONFIG[city];

    if (!cityConfig) {
      setError('Configuration de ville non trouvée');
      setIsLoading(false);
      return;
    }

    try {
      // Créer une nouvelle carte
      const map = L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        touchZoom: true
      }).setView([cityConfig.lat, cityConfig.lng], cityConfig.zoom);

      // Ajouter les tuiles
      L.tileLayer('https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.png?key=6Wc87ApEs23sBOY0iu6X', {
        attribution: '&copy; <a href="https://www.maptiler.com/">MapTiler</a> | ClimGO',
        tileSize: 512,
        zoomOffset: -1,
        maxZoom: 18
      }).addTo(map);

      // Ajouter le marqueur
      const marker = L.marker([cityConfig.lat, cityConfig.lng], {
        icon: createCustomIcon()
      }).addTo(map);

      const cityName = city.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      marker.bindPopup(`
        <div style="text-align: center; padding: 8px;">
          <strong style="color: #03144A;">ClimGO - ${cityName}</strong><br>
          <small style="color: #10B981;">Zone d'intervention</small>
        </div>
      `);

      // Ajouter le cercle de zone
      L.circle([cityConfig.lat, cityConfig.lng], {
        color: '#10B981',
        fillColor: '#10B981',
        fillOpacity: 0.1,
        radius: 5000,
        weight: 2
      }).addTo(map);

      mapInstanceRef.current = map;
      setIsLoading(false);
      
    } catch (err) {
      console.error('Erreur lors de l\'initialisation de la carte:', err);
      setError('Erreur lors du chargement de la carte');
      setIsLoading(false);
    }
  }, [city]); // ← CORRECTION : Dépendance sur 'city' au lieu de 'pathname'

  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
            {isDefaultPage ? 'Notre Zone d\'Intervention' : `ClimGO à ${cityName}`}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isDefaultPage 
              ? 'Nous intervenons dans toute la Gironde pour vos projets de climatisation, chauffage et maintenance'
              : `Découvrez nos services de climatisation et chauffage à ${cityName}`
            }
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-xl">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-20">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-gray-900 font-medium">Chargement de la carte...</span>
              </div>
            </div>
          )}
          
          <div
            ref={mapRef}
            className="w-full h-[400px] md:h-[500px] relative z-10"
          />
          
          {!isLoading && (
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg z-20">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-gray-900 font-semibold">
                  {cityName}
                </span>
              </div>
              <p className="text-xs text-gray-600">Zone d&apos;intervention ClimGO</p>
            </div>
          )}

          {!isLoading && (
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg z-20">
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-2 h-2 bg-blue-600/50 rounded-full"></div>
                <span className="text-gray-600">Zone de service</span>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            {isDefaultPage 
              ? 'Besoin d\'un devis personnalisé dans votre ville ?'
              : `Besoin d'une intervention à ${cityName} ?`
            }
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
            Demander un devis gratuit
          </button>
        </div>
      </div>
    </section>
  );
}