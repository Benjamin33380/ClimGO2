'use client';
import React, { useState, useMemo, memo } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, CheckCircle, ArrowRight, Users, Star, DraftingCompass, ChevronDown, Zap, Target } from 'lucide-react';

// Composant optimisé pour les stats
const StatCard = memo(({ stat }: { stat: { number: string; label: string; icon: any; color: string } }) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
  <div className="group">
    <div className="relative bg-[#f8f9f4]/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#03144a]/10">
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      <div className="relative z-10 text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 shadow-lg`}>
          <stat.icon className="w-8 h-8 text-white" />
        </div>
        <div className="text-4xl font-black text-[#03144a] mb-2">{stat.number}</div>
        <div className="text-[#03144a]/70 font-medium">{stat.label}</div>
      </div>
    </div>
  </div>
));

StatCard.displayName = 'StatCard';

// Composant optimisé pour les services
const ServiceCard = memo(({ service }: { service: { icon: any; title: string; desc: string; color: string } }) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
  <div className="group relative bg-[#f8f9f4] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-[#03144a]/10">
    <div className="absolute inset-0 bg-gradient-to-br from-[#03144a]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10 text-center">
      <div className={`inline-flex items-center justify-center w-16 h-16 bg-[#F8F9F4] border-2 border-[#03144a]/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <service.icon className={`w-8 h-8 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
      </div>
      <h3 className="text-xl font-bold text-[#03144a] mb-3">{service.title}</h3>
      <p className="text-[#03144a]/70">{service.desc}</p>
    </div>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

// Composant optimisé pour les zones
const ZoneCard = memo(({ zone, onClick }: { 
  zone: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  onClick: () => void; 
}) => (
  <div
    className={`group cursor-pointer transition-all duration-700 hover:-translate-y-2 ${
      zone.span === 2 ? 'lg:col-span-2' : ''
    }`}
    onClick={onClick}
  >
    <div className={`relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-[#03144a]/10 ${zone.bgColor}`}>
      {/* Header */}
      <div className="relative p-8 overflow-hidden">
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${zone.color} rounded-full opacity-10 transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700`}></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${zone.color} rounded-xl shadow-lg`}>
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm font-bold text-[#03144a]/60">
              {zone.cities.length} communes
            </div>
          </div>
          <h3 className="text-3xl font-black mb-3 text-[#03144a]">{zone.title}</h3>
          <p className="text-[#03144a]/70 leading-relaxed">{zone.description}</p>
        </div>
      </div>

      {/* Cities Grid - Collapsible */}
      <div className={`transition-all duration-700 overflow-hidden bg-[#f8f9f4]/80 backdrop-blur-sm opacity-100`}>
        <div className="p-6">
          <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 transition-all duration-500`}>
            {zone.cities.map((city: any, cityIndex: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
              <Link
                key={cityIndex}
                href={city.url}
                className={`group/city rounded-xl p-3 transition-all duration-300 hover:scale-105 bg-[#f8f9f4]/60 hover:bg-gradient-to-br ${zone.color} hover:text-white border border-[#03144a]/10 hover:border-transparent shadow-sm hover:shadow-lg`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-medium transition-colors text-[#03144a] group-hover/city:text-white text-sm`}>
                    {city.name}
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#03144a]/60 group-hover/city:text-white transform group-hover/city:translate-x-1 transition-all duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
));

ZoneCard.displayName = 'ZoneCard';

export default function ZonesDesservies() {
  // Tous les menus dépliés par défaut - on utilise un objet pour tracker l'état de chaque zone
  const [, setActiveZones] = useState<Record<string, boolean>>({
    'bassin': true,
    'val-eyre': true,
    'landes': true,
    'pays-graves': true,
    'bordeaux': true,
    'gironde': true
  });

  // Données optimisées avec useMemo
  const zones = useMemo(() => [
    {
      id: 'bassin',
      title: "Bassin d'Arcachon",
      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
        { name: 'Arcachon', url: '/arcachon-chauffage-climatisation' },
        { name: 'La Teste-de-Buch', url: '/la-teste-de-buch-chauffage-climatisation' },
        { name: 'Gujan-Mestras', url: '/gujan-mestras-chauffage-climatisation' },
        { name: 'Le Teich', url: '/le-teich-chauffage-climatisation' },
        { name: 'Biganos', url: '/biganos-chauffage-climatisation' },
        { name: 'Audenge', url: '/audenge-chauffage-climatisation' },
        { name: 'Lanton', url: '/lanton-chauffage-climatisation' },
        { name: 'Andernos-les-Bains', url: '/andernos-les-bains-chauffage-climatisation' },
        { name: 'Arès', url: '/ares-chauffage-climatisation' },
        { name: 'Lège Cap Ferret', url: '/lege-cap-ferret-chauffage-climatisation' }
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      span: 2
    },
    {
      id: 'val-eyre',
      title: "Val de l'Eyre",
      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
        { name: 'Marcheprime', url: '/marcheprime-chauffage-climatisation' },
        { name: 'Le Barp', url: '/le-barp-chauffage-climatisation' },
        { name: 'Mios', url: '/mios-chauffage-climatisation' },
        { name: 'Salles', url: '/salles-chauffage-climatisation' },
        { name: 'Belin-Béliet', url: '/belin-beliet-chauffage-climatisation' }
      ],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      span: 1
    },
    {
      id: 'landes',
      title: 'Nord des Landes',
      description: 'Zone de pinèdes avec solutions adaptées',
      cities: [
        { name: 'Sanguinet', url: '/sanguinet-chauffage-climatisation' },
        { name: 'Parentis-en-Born', url: '/parentis-chauffage-climatisation' },
        { name: 'Biscarrosse', url: '/biscarrosse-chauffage-climatisation' },
        { name: 'Mimizan', url: '/mimizan-chauffage-climatisation' }
      ],
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
      span: 1
    },
    {
      id: 'pays-graves',
      title: 'Pays des Graves',
      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
        { name: 'Canéjan', url: '/canejan-chauffage-climatisation' },
        { name: 'Gradignan', url: '/gradignan-chauffage-climatisation' },
        { name: 'Saucats', url: '/saucats-chauffage-climatisation' },
        { name: 'Saint-Selve', url: '/saint-selve-chauffage-climatisation' },
        { name: 'Martillac', url: '/martillac-chauffage-climatisation' },
        { name: 'Léognan', url: '/leognan-chauffage-climatisation' },
        { name: 'La Brède', url: '/la-brede-chauffage-climatisation' },
        { name: 'Cadaujac', url: '/cadaujac-chauffage-climatisation' },
        { name: 'Cestas', url: '/cestas-chauffage-climatisation' }
      ],
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      span: 2
    },
    {
      id: 'bordeaux',
      title: 'Agglomération Bordelaise',
      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
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
        { name: 'Bègles', url: '/begles-chauffage-climatisation' }
      ],
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-red-50 to-pink-50',
      span: 2
    },
    {
      id: 'gironde',
      title: 'Autres communes de Gironde',
      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
        { name: 'Lacanau', url: '/lacanau-chauffage-climatisation' },
        { name: 'Saint-Loubès', url: '/saint-loubes-chauffage-climatisation' },
        { name: "Saint-Jean-d'Illac", url: '/saint-jean-d-illac-chauffage-climatisation' },
        { name: "Saint-Médard-en-Jalles", url: '/saint-medard-en-jalles-chauffage-climatisation' },
        { name: "Saint-Aubin-de-Médoc", url: '/saint-aubin-de-medoc-chauffage-climatisation' },
        { name: 'Martignas-sur-Jalle', url: '/martignas-sur-jalle-chauffage-climatisation' },
      ],
      color: 'from-slate-500 to-gray-500',
      bgColor: 'bg-gradient-to-br from-slate-50 to-gray-50',
      span: 2
    }
  ], []);

  const services = useMemo(() => [
    { icon: DraftingCompass, title: 'Installation', desc: 'Pose professionnelle', color: 'text-blue-500' },
    { icon: CheckCircle, title: 'Entretien', desc: 'Maintenance préventive', color: 'text-emerald-500' },
    { icon: Clock, title: 'Dépannage', desc: 'Urgence 24/7', color: 'text-amber-500' },
    { icon: Star, title: 'Garantie', desc: 'Service après-vente', color: 'text-purple-500' }
  ], []);

  const stats = useMemo(() => [
    { number: '50+', label: 'Communes desservies', icon: MapPin, color: 'from-blue-500 to-cyan-500' },
    { number: '100%', label: 'Gironde couverte', icon: Target, color: 'from-emerald-500 to-teal-500' },
    { number: '24/7', label: 'Service d\'urgence', icon: Zap, color: 'from-amber-500 to-orange-500' }
  ], []);

  const handleZoneClick = (zoneId: string) => {
    setActiveZones(prev => ({
      ...prev,
      [zoneId]: !prev[zoneId]
    }));
  };

  return (
    <div className="min-h-screen bg-[#F8F9F4] my-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#03144a] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-32">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-12 backdrop-blur-sm bg-[#f8f9f4]/30 rounded-full px-4 py-2 inline-flex items-center">
            <Link href="/" className="hover:text-[#03144a] transition-colors">Accueil</Link>
            <ChevronDown className="w-4 h-4 mx-2 rotate-[-90deg] text-gray-400" />
            <span className="text-[#03144a] font-medium">Zones desservies</span>
          </nav>

          {/* Hero Content */}
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#03144a] to-blue-600 rounded-2xl mb-8 shadow-2xl animate-bounce">
              <MapPin className="w-10 h-10 text-[#F8F9F4]" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-[#03144a] leading-tight">
              Zones
              <span className="bg-gradient-to-r from-[#03144a] via-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Desservies
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-[#03144a]/80 max-w-4xl mx-auto leading-relaxed font-medium">
              Nous intervenons en Gironde, sur tout le Bassin d&apos;Arcachon et 
              <span className="font-bold text-[#03144a]"> Bordeaux Métropole</span>
            </p>
            
            <p className="text-lg text-[#03144a]/70 max-w-4xl mx-auto leading-relaxed">
              Nous intervenons pour la pose, l&apos;installation, l&apos;entretien et la maintenance de systèmes de climatisation,
              chauffage, pompes à chaleur, chauffe-eau et ventilation sur l&apos;ensemble du Bassin d&apos;Arcachon, du Val de l&apos;Eyre
              jusqu&apos;à la métropole bordelaise.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#03144a]/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#03144a] mb-6">
              Nos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-[#03144a]/70 max-w-3xl mx-auto">
              Une expertise complète pour tous vos besoins en climatisation, chauffage et pompe à chaleur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#03144a] mb-6">
              Zones d&apos;<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Intervention</span>
            </h2>
            <p className="text-xl text-[#03144a]/70 max-w-3xl mx-auto">
              Cliquez sur une zone pour découvrir toutes les communes desservies et nos spécificités locales
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {zones.map((zone) => (
              <ZoneCard
                key={zone.id}
                zone={zone}
                onClick={() => handleZoneClick(zone.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#03144a] via-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-[#03144a]/90"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F8F9F4]/10 backdrop-blur-sm rounded-2xl mb-8">
            <Users className="w-10 h-10 text-[#F8F9F4]" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-[#F8F9F4]">
            Besoin d&apos;une <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Intervention</span> ?
          </h2>
          
          <p className="text-xl text-[#F8F9F4]/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Notre équipe d&apos;experts est à votre disposition dans toute la région. 
            Devis gratuit et intervention rapide garantie !
            Vous ne trouvez pas votre ville ?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="tel:0766460008"
              className="bg-[#F8F9F4] text-[#03144a] px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center justify-center group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Appeler Maintenant
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#F8F9F4] text-[#F8F9F4] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#F8F9F4] hover:text-[#03144a] transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              Devis Gratuit
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: DraftingCompass, title: 'Installation sur mesure', desc: 'projet personnalisé sur-mesure' },
              { icon: CheckCircle, title: 'Devis Gratuit', desc: 'Estimation précise sans engagement' },
              { icon: Star, title: 'Garantie Qualité', desc: 'Service après-vente' }
            ].map((item, index) => (
              <div key={index} className="bg-[#F8F9F4]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#F8F9F4]/20 hover:bg-[#F8F9F4]/20 transition-all duration-300">
                <item.icon className="w-8 h-8 text-[#F8F9F4] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-[#F8F9F4]">{item.title}</h3>
                <p className="text-[#F8F9F4]/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}