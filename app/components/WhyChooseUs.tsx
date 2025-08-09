import Link from "next/link";
import { TbBulb, TbHeart, TbShield, TbLeaf, TbArrowRight, TbPhone, TbBook } from "react-icons/tb";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Image de fond de haute qualité */}
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('WhyChooseUs.png')"
        }}
      />
      
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Pourquoi choisir ClimGO ?
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Votre <strong className="text-white">confort</strong> mérite une <strong className="text-white">attention particulière</strong>, nous avons développé une <strong className="text-white">approche élégante</strong> et <strong className="text-white">sur-mesure</strong> pour chacun de nos clients. Choisir <strong className="text-white">ClimGO</strong>, c&apos;est opter pour :
            </p>
          </div>

          {/* Cards modernes avec nouveau design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Expertise */}
            <div className="h-48 w-60 bg-white m-auto rounded-2xl overflow-hidden relative group p-4 z-0">
              <div className="circle absolute h-20 w-20 -top-10 -right-10 rounded-full bg-blue-600 group-hover:scale-[800%] duration-500 z-[-1] opacity-80"></div>
              
              <button className="text-sm absolute bottom-4 left-4 text-blue-600 group-hover:text-white duration-500">
                <Link href="/nos-services" className="relative before:h-0.5 before:absolute before:w-full before:content-[''] before:bg-blue-600 group-hover:before:bg-white duration-300 before:bottom-0 before:left-0">
                  Plus d'infos
                </Link>
                <TbArrowRight className="inline ml-1 w-3 h-3" />
              </button>
              
              <h3 className="z-20 font-bold group-hover:text-white duration-500 text-xl text-gray-800 mb-2">
                Expertise
              </h3>
              
              <p className="z-20 text-xs text-gray-600 group-hover:text-white duration-500 leading-relaxed">
                Chaque projet est unique. <strong className="text-gray-800 group-hover:text-white">Notre savoir-faire technique</strong> et <strong className="text-gray-800 group-hover:text-white">notre maîtrise des dernières innovations</strong> garantissent une <strong className="text-gray-800 group-hover:text-white">qualité irréprochable</strong>.
              </p>
            </div>

            {/* Accompagnement Personnalisé */}
            <div className="h-48 w-60 bg-white m-auto rounded-2xl overflow-hidden relative group p-4 z-0">
              <div className="circle absolute h-20 w-20 -top-10 -right-10 rounded-full bg-green-600 group-hover:scale-[800%] duration-500 z-[-1] opacity-80"></div>
              
              <button className="text-sm absolute bottom-4 left-4 text-green-600 group-hover:text-white duration-500">
                <Link href="/aides-etat" className="relative before:h-0.5 before:absolute before:w-full before:content-[''] before:bg-green-600 group-hover:before:bg-white duration-300 before:bottom-0 before:left-0">
                  Plus d'infos
                </Link>
                <TbArrowRight className="inline ml-1 w-3 h-3" />
              </button>
              
              <h3 className="z-20 font-bold group-hover:text-white duration-500 text-lg text-gray-800 mb-2">
                Accompagnement
              </h3>
              
              <p className="z-20 text-xs text-gray-600 group-hover:text-white duration-500 leading-relaxed">
                Nous <strong className="text-gray-800 group-hover:text-white">prenons le temps de vous écouter</strong> pour comprendre précisément vos besoins. <strong className="text-gray-800 group-hover:text-white">Chaque installation est conçue sur mesure</strong>.
              </p>
            </div>

            {/* Discrétion et Confiance */}
            <div className="h-48 w-60 bg-white m-auto rounded-2xl overflow-hidden relative group p-4 z-0">
              <div className="circle absolute h-20 w-20 -top-10 -right-10 rounded-full bg-purple-600 group-hover:scale-[800%] duration-500 z-[-1] opacity-80"></div>
              
              <button className="text-sm absolute bottom-4 left-4 text-purple-600 group-hover:text-white duration-500">
                <Link href="/a-propos" className="relative before:h-0.5 before:absolute before:w-full before:content-[''] before:bg-purple-600 group-hover:before:bg-white duration-300 before:bottom-0 before:left-0">
                  Plus d'infos
                </Link>
                <TbArrowRight className="inline ml-1 w-3 h-3" />
              </button>
              
              <h3 className="z-20 font-bold group-hover:text-white duration-500 text-lg text-gray-800 mb-2">
                Discrétion
              </h3>
              
              <p className="z-20 text-xs text-gray-600 group-hover:text-white duration-500 leading-relaxed">
                Votre intimité est précieuse. <strong className="text-gray-800 group-hover:text-white">ClimGO s&apos;engage</strong> à intervenir dans le <strong className="text-gray-800 group-hover:text-white">plus grand respect de votre vie privée</strong>.
              </p>
            </div>

            {/* Engagement Durable */}
            <div className="h-48 w-60 bg-white m-auto rounded-2xl overflow-hidden relative group p-4 z-0">
              <div className="circle absolute h-20 w-20 -top-10 -right-10 rounded-full bg-emerald-600 group-hover:scale-[800%] duration-500 z-[-1] opacity-80"></div>
              
              <button className="text-sm absolute bottom-4 left-4 text-emerald-600 group-hover:text-white duration-500">
                <Link href="/blog" className="relative before:h-0.5 before:absolute before:w-full before:content-[''] before:bg-emerald-600 group-hover:before:bg-white duration-300 before:bottom-0 before:left-0">
                  Plus d'infos
                </Link>
                <TbArrowRight className="inline ml-1 w-3 h-3" />
              </button>
              
              <h3 className="z-20 font-bold group-hover:text-white duration-500 text-lg text-gray-800 mb-2">
                Engagement
              </h3>
              
              <p className="z-20 text-xs text-gray-600 group-hover:text-white duration-500 leading-relaxed">
                Nous privilégions des <strong className="text-gray-800 group-hover:text-white">solutions à haute performance énergétique</strong>, <strong className="text-gray-800 group-hover:text-white">respectueuses de l&apos;environnement</strong> et <strong className="text-gray-800 group-hover:text-white">pensées pour durer</strong>.
              </p>
            </div>
          </div>

          {/* CTA Repensé */}
          <div className="relative overflow-hidden rounded-3xl">
            {/* Overlay gradient pour le CTA */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#03144a]/95 via-[#03144a]/90 to-[#03144a]/95"></div>
            
            {/* Contenu CTA */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  
                  {/* Texte principal */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <TbBulb className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Prêt à expérimenter l'excellence ?
                      </h3>
                    </div>
                    
                    <p className="text-lg text-blue-100 leading-relaxed">
                      Découvrez pourquoi des centaines de clients font confiance à <strong className="text-white">ClimGO</strong> pour leurs projets de confort thermique. Notre expertise, notre engagement et notre passion font la différence.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-blue-100">Plus de 50 installations</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-blue-100">Certification RGE et QualiPAC</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-blue-100">Garantie décennale incluse</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Boutons d'action */}
                  <div className="space-y-4">
                    <Link 
                      href="/contact" 
                      className="group block w-full bg-white text-[#03144a] font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                    >
                      <span>Découvrir nos services</span>
                      <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link 
                      href="/blog" 
                      className="group block w-full bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                    >
                      <TbBook className="w-5 h-5" />
                      <span>Consulter notre blog</span>
                    </Link>
                    
                    <Link 
                      href="tel:0766460008" 
                      className="group block w-full bg-white/10 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                    >
                      <TbPhone className="w-5 h-5" />
                      <span>07 66 46 00 08</span>
                    </Link>
                    
                    <div className="text-center">
                      <p className="text-blue-200 text-sm">
                        🌟 <strong className="text-white">Excellence reconnue</strong> depuis 2024
                      </p>
                      <p className="text-blue-200 text-sm mt-1">
                        📍 <strong className="text-white">Dans toute la Gironde, basé entre Bordeaux et Arcachon</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 