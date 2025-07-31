import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, CheckCircle, ArrowRight, Users, Star , DraftingCompass } from 'lucide-react';
import Image from 'next/image';

export default function ZonesDesservies() {

  const zones = [
    {
      id: 'bassin',
      title: "Bassin d'Arcachon",
      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
        { name: 'Arcachon', url: 'https://www.climgo.fr/blog/arcachon/' },
        { name: 'La Teste-de-Buch', url: 'https://www.climgo.fr/blog/la-teste-de-buch/' },
        { name: 'Gujan-Mestras', url: 'https://www.climgo.fr/blog/gujan-mestras/' },
        { name: 'Le Teich', url: 'https://www.climgo.fr/blog/le-teich/' },
        { name: 'Biganos', url: 'https://www.climgo.fr/blog/biganos/' },
        { name: 'Audenge', url: 'https://www.climgo.fr/blog/audenge/' },
        { name: 'Lanton', url: 'https://www.climgo.fr/blog/lanton/' },
        { name: 'Andernos-les-Bains', url: 'https://www.climgo.fr/blog/andernos-les-bains/' },
        { name: 'Arès', url: 'https://www.climgo.fr/blog/ares/' },
        { name: 'Lège Cap Ferret', url: 'https://www.climgo.fr/blog/lege-cap-ferret/' }
      ],
      span: 2
    },
    {
      id: 'val-eyre',
      title: "Val de l'Eyre",
      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
        { name: 'Marcheprime', url: 'https://www.climgo.fr/blog/marcheprime/' },
        { name: 'Le Barp', url: 'https://www.climgo.fr/blog/le-barp/' },
        { name: 'Mios', url: 'https://www.climgo.fr/blog/mios/' },
        { name: 'Salles', url: 'https://www.climgo.fr/blog/salles/' },
        { name: 'Belin-Béliet', url: 'https://www.climgo.fr/blog/belin-beliet/' }
      ],
      span: 1
    },
    {
      id: 'landes',
      title: 'Nord des Landes',

      description: 'Zone de pinèdes avec solutions adaptées',
      cities: [
        { name: 'Sanguinet', url: 'https://www.climgo.fr/blog/sanguinet/' },
        { name: 'Parentis-en-Born', url: 'https://www.climgo.fr/blog/parentis-en-born/' },
        { name: 'Biscarrosse', url: 'https://www.climgo.fr/blog/biscarrosse/' },
        { name: 'Cazaux', url: 'https://www.climgo.fr/blog/cazaux/' },
        { name: 'Mimizan', url: 'https://www.climgo.fr/blog/mimizan/' }
      ],
      span: 1
    },
    {
      id: 'bordeaux',
      title: 'Agglomération Bordelaise',

      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
        { name: 'Bordeaux', url: 'https://www.climgo.fr/blog/bordeaux/' },
        { name: 'Mérignac', url: 'https://www.climgo.fr/blog/merignac/' },
        { name: 'Pessac', url: 'https://www.climgo.fr/blog/pessac/' },
        { name: 'Talence', url: 'https://www.climgo.fr/blog/talence/' },
        { name: 'Gradignan', url: 'https://www.climgo.fr/blog/gradignan/' },
        { name: 'Cestas', url: 'https://www.climgo.fr/blog/cestas/' },
        { name: 'Canéjan', url: 'https://www.climgo.fr/blog/canejan/' },
        { name: "Villenave-d'Ornon", url: 'https://www.climgo.fr/blog/villenave-d-ornon/' },
        { name: 'Bègles', url: 'https://www.climgo.fr/blog/begles/' }
      ],
      span: 2
    },
    {
      id: 'gironde',
      title: 'Autres communes de Gironde',

      description: 'Zone intervention, zone desservies par ClimGO',
      cities: [
        { name: 'Le Porge', url: 'https://www.climgo.fr/blog/le-porge/' },
        { name: 'Lacanau', url: 'https://www.climgo.fr/blog/lacanau/' },
        { name: 'Le Temple', url: 'https://www.climgo.fr/blog/le-temple/' },
        { name: 'Saint-Loubès', url: 'https://www.climgo.fr/blog/saint-loubes/' },
        { name: 'Saint-Selve', url: 'https://www.climgo.fr/blog/saint-selve/' },
        { name: "Saint-Jean-d'Illac", url: 'https://www.climgo.fr/blog/saint-jean-dillac/' },
        { name: "Saint-Médard-en-Jalles", url: 'https://www.climgo.fr/blog/saint-medard-en-jalles/' },
        { name: "Saint-Aubin-de-Médoc", url: 'https://www.climgo.fr/blog/saint-aubin-de-medoc/' },
        { name: 'Saucats', url: 'https://www.climgo.fr/blog/saucats/' },
        { name: 'Martignas-sur-Jalle', url: 'https://www.climgo.fr/blog/martignas-sur-jalle/' },
        { name: 'Saint-Savin', url: 'https://www.climgo.fr/blog/saint-savin/' }
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
          
          <div className="relative max-w-7xl mx-auto px-4 pt-[300px] pb-24">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-[#F8F9F4]/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Zone de couverture étendue</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#F8F9F4] bg-clip-text text-transparent climText">
                Zones Desservies zerazkhrjiazjhirhazr
              </h1>
              
              <p className="text-xl md:text-2xl text-[#03144a] mb-8 max-w-4xl mx-auto leading-relaxed font-semibold">
                Nous intervenons en Gironde, sur tout le Bassin d&apos;Arcachon et 
                <span className="font-bold text-[#03144a]"> Bordeaux Métropole</span>
              </p>
              
              <p className="mb-12 text-lg text-[#03144a]/80 max-w-3xl mx-auto">
                Nous intervenons pour la pose, l&apos;installation, l&apos;entretien et la maintenance de systèmes de climatisation,
                chauffage, pompes à chaleur, chauffe-eau et ventilation sur l&apos;ensemble du Bassin d&apos;Arcachon, du Val de l&apos;Eyre
                jusqu&apos;à la métropole bordelaise.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-[#F8F9F4]/10 backdrop-blur-sm rounded-lg px-6 py-4 text-center border border-[#F8F9F4]/20">
                    <div className="text-2xl font-bold text-[#03144a]">{stat.number}</div>
                    <div className="text-sm text-[#03144a]/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

      {/* Decorative animated image after Hero */}
      <div className="relative h-[500px] overflow-hidden z-10 w-full flex justify-center items-center">
        <Image
          src="/mo.png"
          alt="Effet décoratif"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 scale-100 animate-scroll-move"
          width={1000}
          height={1000}
          priority
        />
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
                <div key={index} className="group bg-gradient-to-br from-[#F8F9F4] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#03144a]/10">
                  <div className="bg-gradient-to-r from-[#03144a] to-[#0a1f5e] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-[#F8F9F4]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#03144a] mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
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
                  <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border-2 border-[#03144a]/10">
                    {/* Header */}
                    <div className="bg-white p-8 relative overflow-hidden">
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
                    <div className="p-6 transition-all duration-500 max-h-20 opacity-70 overflow-hidden bg-white rounded-b-3xl">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-gray-700">
                          {zone.cities.length} communes
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#03144a]/60 transition-transform duration-300" />
                      </div>
                      <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
                        {zone.cities.map((city, cityIndex) => (
                          <Link
                            key={cityIndex}
                            href={city.url}
                            className="group/city bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#03144a] border border-[#03144a]/10 hover:border-[#03144a]/30 text-[#03144a] hover:text-white"
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
        <section className="py-20 bg-gradient-to-br from-[#03144a] via-[#0a1f5e] to-[#03144a] text-[#03144a] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#F8F9F4]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F8F9F4]/10 rounded-full blur-3xl"></div>
          </div>
          
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
                className="bg-[#F8F9F4] text-[#03144a] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
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
              <div className="bg-[#F8F9F4]/10 backdrop-blur-sm rounded-lg p-6 border border-[#F8F9F4]/20">
                <DraftingCompass className="w-8 h-8 text-[#03144a] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Installation sur mesure</h3>
                <p className="text-[#03144a]/80 text-sm">projet personnalisé sur-mesure</p>
              </div>
              <div className="bg-[#F8F9F4]/10 backdrop-blur-sm rounded-lg p-6 border border-[#F8F9F4]/20">
                <CheckCircle className="w-8 h-8 text-[#03144a] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Devis Gratuit</h3>
                <p className="text-[#03144a]/80 text-sm">Estimation précise sans engagement</p>
              </div>
              <div className="bg-[#F8F9F4]/10 backdrop-blur-sm rounded-lg p-6 border border-[#F8F9F4]/20">
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