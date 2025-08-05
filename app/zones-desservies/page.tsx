import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, CheckCircle, ArrowRight, Users, Star , DraftingCompass } from 'lucide-react';


export default function ZonesDesservies() {


  const zones = [
    {
      id: 'bassin',
      title: "Bassin d'Arcachon",
      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
        { name: 'Arcachon', url: 'https://www.climgo.fr/arcachon-chauffage-climatisation' },
        { name: 'La Teste-de-Buch', url: 'https://www.climgo.fr/la-teste-de-buch-chauffage-climatisation' },
        { name: 'Gujan-Mestras', url: 'https://www.climgo.fr/gujan-mestras-chauffage-climatisation' },
        { name: 'Le Teich', url: 'https://www.climgo.fr/le-teich-chauffage-climatisation' },
        { name: 'Biganos', url: 'https://www.climgo.fr/biganos-chauffage-climatisation' },
        { name: 'Audenge', url: 'https://www.climgo.fr/audenge-chauffage-climatisation' },
        { name: 'Lanton', url: 'https://www.climgo.fr/lanton-chauffage-climatisation' },
        { name: 'Andernos-les-Bains', url: 'https://www.climgo.fr/andernos-les-bains-chauffage-climatisation' },
        { name: 'Arès', url: 'https://www.climgo.fr/ares-chauffage-climatisation' },
        { name: 'Lège Cap Ferret', url: 'https://www.climgo.fr/lege-cap-ferret-chauffage-climatisation' }
      ],
      span: 2
    },
    {
      id: 'val-eyre',
      title: "Val de l'Eyre",
      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
        { name: 'Marcheprime', url: 'https://www.climgo.fr/marcheprime-chauffage-climatisation' },
        { name: 'Le Barp', url: 'https://www.climgo.fr/le-barp-chauffage-climatisation' },
        { name: 'Mios', url: 'https://www.climgo.fr/mios-chauffage-climatisation' },
        { name: 'Salles', url: 'https://www.climgo.fr/salles-chauffage-climatisation' },
        { name: 'Belin-Béliet', url: 'https://www.climgo.fr/belin-beliet-chauffage-climatisation' }
      ],
      span: 1
    },
    {
      id: 'landes',
      title: 'Nord des Landes',
      description: 'Zone de pinèdes avec solutions adaptées',
      cities: [
        { name: 'Sanguinet', url: 'https://www.climgo.fr/sanguinet-chauffage-climatisation' },
        { name: 'Parentis-en-Born', url: 'https://www.climgo.fr/parentis-chauffage-climatisation' },
        { name: 'Biscarrosse', url: 'https://www.climgo.fr/biscarrosse-chauffage-climatisation' },
        { name: 'Mimizan', url: 'https://www.climgo.fr/mimizan-chauffage-climatisation' }
      ],
      span: 1
    },
    {
      id: 'pays-graves',
      title: 'Pays des Graves',
      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
        { name: 'Canéjan', url: 'https://www.climgo.fr/canejan-chauffage-climatisation' },
        { name: 'Gradignan', url: 'https://www.climgo.fr/gradignan-chauffage-climatisation' },
        { name: 'Saucats', url: 'https://www.climgo.fr/saucats-chauffage-climatisation' },
        { name: 'Saint-Selve', url: 'https://www.climgo.fr/saint-selve-chauffage-climatisation' },
        { name: 'Martillac', url: 'https://www.climgo.fr/martillac-chauffage-climatisation' },
        { name: 'Léognan', url: 'https://www.climgo.fr/leognan-chauffage-climatisation' },
        { name: 'La Brède', url: 'https://www.climgo.fr/la-brede-chauffage-climatisation' },
        { name: 'Cadaujac', url: 'https://www.climgo.fr/cadaujac-chauffage-climatisation' },
        { name: 'Cestas', url: 'https://www.climgo.fr/cestas-chauffage-climatisation' }
      ],
      span: 1
    },
    {
      id: 'bordeaux',
      title: 'Agglomération Bordelaise',
      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
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
        { name: 'Bègles', url: 'https://www.climgo.fr/begles-chauffage-climatisation' }
      ],
      span: 2
    },
    {
      id: 'gironde',
      title: 'Autres communes de Gironde',
      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
        { name: 'Lacanau', url: 'https://www.climgo.fr/lacanau-chauffage-climatisation' },
        { name: 'Saint-Loubès', url: 'https://www.climgo.fr/saint-loubes-chauffage-climatisation' },
        { name: "Saint-Jean-d'Illac", url: 'https://www.climgo.fr/saint-jean-d-illac-chauffage-climatisation' },
        { name: "Saint-Médard-en-Jalles", url: 'https://www.climgo.fr/saint-medard-en-jalles-chauffage-climatisation' },
        { name: "Saint-Aubin-de-Médoc", url: 'https://www.climgo.fr/saint-aubin-de-medoc-chauffage-climatisation' },
        { name: 'Martignas-sur-Jalle', url: 'https://www.climgo.fr/martignas-sur-jalle-chauffage-climatisation' },
      ],
      span: 3
    }
  ];

  const services = [
    { icon: DraftingCompass, title: 'Installation', desc: 'Pose professionnelle' },
    { icon: CheckCircle, title: 'Entretien', desc: 'Maintenance préventive' },
    { icon: Clock, title: 'Dépannage', desc: 'Urgence 24/7' },
    { icon: Star, title: 'Garantie', desc: 'Service après-vente' }
  ];

  const stats = [
    { number: '50+', label: 'Communes desservies' },
    { number: '100%', label: 'Gironde couverte' },
    { number: '24/7', label: 'Service d\'urgence' }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9F4]">
      {/* Hero Section */}
      {/* <div className="absolute inset-0 bg-linear-to-r from-[#03144a]/30 to-transparent"></div> */}
      <div
        className="relative w-full min-h-[100dvh] flex flex-col justify-between pt-80 px-4 pb-12"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/mo.png')",
          backgroundSize: 'cover',
          backgroundAttachment: 'scroll',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-[#F8F9F4] backdrop-blur-sm rounded-full px-8 py-4 mb-12">
              <MapPin className="w-5 h-5" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#F8F9F4]">
                Zones Desservies
              </h1>
              
              <p className="text-xl md:text-2xl text-[#F8F9F4] mb-8 max-w-4xl mx-auto leading-relaxed font-semibold">
                {/* FR: Nous intervenons en Gironde, sur tout le Bassin d'Arcachon et Bordeaux Métropole */}
                Nous intervenons en Gironde, sur tout le Bassin d&apos;Arcachon et 
                <span className="font-bold text-[#F8F9F4]"> Bordeaux Métropole</span>
              </p>
              
              <p className="mb-12 text-lg text-[#F8F9F4]/80 max-w-3xl mx-auto">
                {/* FR: Nous intervenons pour la pose, l'installation, l'entretien et la maintenance de systèmes de climatisation, chauffage, pompes à chaleur, chauffe-eau et ventilation sur l'ensemble du Bassin d'Arcachon, du Val de l'Eyre jusqu'à la métropole bordelaise. */}
                Nous intervenons pour la pose, l&apos;installation, l&apos;entretien et la maintenance de systèmes de climatisation,
                chauffage, pompes à chaleur, chauffe-eau et ventilation sur l&apos;ensemble du Bassin d&apos;Arcachon, du Val de l&apos;Eyre
                jusqu&apos;à la métropole bordelaise.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-[#F8F9F4]/10 backdrop-blur-sm rounded-lg px-6 py-4 text-center border border-[#F8F9F4]/20">
                    <div className="text-2xl font-bold text-[#F8F9F4]">{stat.number}</div>
                    <div className="text-sm text-[#F8F9F4]/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <nav className="text-sm text-gray-600 mb-4">
          <Link href="/" className="hover:underline text-[#03144a]">Accueil</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/zones-desservies" className="hover:underline text-[#03144a] font-semibold">Zones desservies</Link>
        </nav>
      </div>
      {/* Services Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-[#03144a] mb-4 climText">Nos Services sur Toute la Zone</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une expertise complète pour tous vos besoins en climatisation, chauffage et pompe à chaleur
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#F8F9F4] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#03144a]/10 text-center flex flex-col items-center justify-center"
              >
                <div className="bg-[#F8F9F4] border border-[#03144a] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-[#03144a]" />
                </div>
                <h3 className="text-xl font-bold text-[#03144a] mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Zones Section */}
        <section className="py-20 bg-[#F8F9F4]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#03144a] mb-6 climText">Découvrez Nos Zones d&apos;Interventions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cliquez sur une zone pour découvrir toutes les communes desservies et nos spécificités locales
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              {zones.map((zone) => (
                <div
                  key={zone.id}
                  className="group cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:bg-[#F8F9F4] scale-100"
                >
                  <div
                    className={`relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-[#03144a]/10 ${
                      zone.id === 'bassin' ? 'bg-[#DEF2F1]' :
                      zone.id === 'val-eyre' ? 'bg-[#FCEFEF]' :
                      zone.id === 'landes' ? 'bg-[#FFF5E1]' :
                      zone.id === 'bordeaux' ? 'bg-[#E3F2FD]' :
                      zone.id === 'gironde' ? 'bg-[#F3E5F5]' :
                      zone.id === 'other' ? 'bg-white' :
                      'bg-white'
                    }`}
                  >
                    {/* Header */}
                    <div className="p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12 translate-x-4 -translate-y-2">
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-3 text-[#03144a]">
                          <Link
                            href={zone.cities?.[0]?.url || '#'}
                            className="hover:text-[#03144a] transition-colors text-[#03144a]"
                          >
                            {zone.title}
                          </Link>
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-700">{zone.description}</p>
                      </div>
                    </div>

                    {/* Cities Grid */}
                    <div className=" p-6 transition-all duration-500 opacity-70 overflow-hidden bg-white rounded-b-3xl">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-gray-700">
                          {zone.cities.length} communes
                        </span>
                      </div>
                      <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
                        {zone.cities.map((city, cityIndex) => (
                          <Link
                            key={cityIndex}
                            href={city.url}
                            className={`group/city rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300
                              ${
                                zone.id === 'bassin' ? 'bg-[#DEF2F1] hover:bg-[#3AAFA9] hover:text-white border border-[#3AAFA9]/30 text-[#17252A]' :
                                zone.id === 'val-eyre' ? 'bg-[#FCEFEF] hover:bg-[#E84545] hover:text-white border border-[#E84545]/30 text-[#2B2E4A]' :
                                zone.id === 'landes' ? 'bg-[#FFF5E1] hover:bg-[#F4A261] hover:text-white border border-[#F4A261]/30 text-[#264653]' :
                                zone.id === 'bordeaux' ? 'bg-[#E3F2FD] hover:bg-[#2196F3] hover:text-white border border-[#2196F3]/30 text-[#0D47A1]' :
                                zone.id === 'gironde' ? 'bg-[#F3E5F5] hover:bg-[#9C27B0] hover:text-white border border-[#9C27B0]/30 text-[#4A148C]' :
                                zone.id === 'graves' ? 'bg-white border border-[#03144a]/10 text-[#03144a] hover:bg-[#03144a] hover:text-white' :
                                'bg-white border border-[#03144a]/10 text-[#03144a] hover:bg-[#03144a] hover:text-white'
                              }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold transition-colors text-[#03144a] group-hover/city:text-white">
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
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <Users className="w-16 h-16 mx-auto mb-8 text-[#03144a]" />
            <h2 className="text-4xl font-bold mb-6 climText">Besoin d&apos;une Intervention ?</h2>
            <p className="text-xl text-[#03144a]/90 mb-8 leading-relaxed">
              Notre équipe d&apos;experts est à votre disposition dans toute la région. 
              Devis gratuit et intervention rapide garantie !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:0766460008"
                className="bg-[#03144a] text-[#F8F9F4] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F8F9F4] hover:text-[#03144a] transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Appeler Maintenant
              </Link>
              <Link
                href="https://www.climgo.fr/contact"
                className="border-2 border-[#F8F9F4] text-[#03144a] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F8F9F4] hover:text-[#03144a] transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Devis Gratuit
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F8F9F4]/10 backdrop-blur-sm rounded-lg p-6 border border-[#03144a]/10">
                <DraftingCompass className="w-8 h-8 text-[#03144a] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Installation sur mesure</h3>
                <p className="text-[#03144a]/80 text-sm">projet personnalisé sur-mesure</p>
              </div>
              <div className="bg-[#F8F9F4]/10 backdrop-blur-sm rounded-lg p-6 border border-[#03144a]/10">
                <CheckCircle className="w-8 h-8 text-[#03144a] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Devis Gratuit</h3>
                <p className="text-[#03144a]/80 text-sm">Estimation précise sans engagement</p>
              </div>
              <div className="bg-[#F8F9F4]/10 backdrop-blur-sm rounded-lg p-6 border border-[#03144a]/10">
                <Star className="w-8 h-8 text-[#03144a] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Garantie Qualité</h3>
                <p className="text-[#03144a]/80 text-sm">Service après-vente</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}