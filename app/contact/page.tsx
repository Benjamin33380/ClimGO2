import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import Tableau from '../zones-desservies/component/Tableau';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 my-24">
      {/* Hero Section Modernisé */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Badge */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#03144a]/10 text-[#03144a] border border-[#03144a]/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Parlons de votre projet
            </span>
          </div>

          {/* Titre principal */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[#03144a] mb-6 leading-tight">
              Contactez
              <span className="bg-gradient-to-r from-[#03144a] to-blue-600 bg-clip-text text-transparent"> ClimGO</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Des solutions thermiques sur mesure avec un accompagnement personnalisé. 
              Votre confort, notre expertise.
            </p>
          </div>

          {/* Stats rapides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
              <div className="text-3xl font-bold text-[#03144a] mb-2">48h</div>
              <div className="text-gray-600 text-sm">Délai de réponse moyen</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
              <div className="text-3xl font-bold text-[#03144a] mb-2">100%</div>
              <div className="text-gray-600 text-sm">Devis gratuits</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
              <div className="text-3xl font-bold text-[#03144a] mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support technique</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section principale */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Colonne gauche - Formulaire */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#03144a] mb-4">
                    Démarrons votre projet
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Remplissez ce formulaire et recevez une réponse personnalisée sous 48h. 
                    Nos experts analysent votre demande pour vous proposer la meilleure solution.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Colonne droite - Informations */}
            <div className="order-1 lg:order-2 space-y-6">
              
              {/* Contact direct */}
              <div className="bg-gradient-to-br from-[#03144a] to-blue-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Besoin d&apos;une réponse immédiate ?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Appelez directement</p>
                      <Link href="tel:+33766460008" className="text-xl font-semibold hover:text-blue-200 transition-colors">
                        07 66 46 00 08
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Email professionnel</p>
                      <Link href="mailto:contact@climgo.fr" className="text-xl font-semibold hover:text-blue-200 transition-colors">
                        contact@climgo.fr
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <Link
                    href="tel:+33766460008"
                    className="w-full bg-white text-[#03144a] px-6 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Appel d&apos;urgence</span>
                  </Link>
                </div>
              </div>

              {/* Services */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#03144a] mb-6">Nos domaines d&apos;expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🔥", title: "Pompes à chaleur", desc: "Installation & maintenance" },
                    { icon: "❄️", title: "Climatisation", desc: "Solutions sur mesure" },
                    { icon: "💧", title: "Chauffe-eau", desc: "Performants et économes" },
                    { icon: "🔧", title: "Entretien", desc: "Service technique 24/7" }
                  ].map((service, index) => (
                    <div key={index} className="text-center p-4 rounded-2xl bg-gray-50 hover:bg-[#03144a]/5 transition-colors group">
                      <div className="text-2xl mb-2">{service.icon}</div>
                      <div className="font-semibold text-[#03144a] text-sm mb-1 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </div>
                      <div className="text-xs text-gray-500">{service.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aides disponibles */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
                <h3 className="text-xl font-bold text-[#03144a] mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Aides financières disponibles
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">MaPrimeRénov&apos; jusqu&apos;à 5 000€</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Certificats d&apos;Économie d&apos;Énergie</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">TVA réduite à 5.5%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Éco-prêt à taux zéro</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-4 italic">
                  Nos experts vous accompagnent dans toutes vos démarches administratives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section témoignage */}
      <section className="py-16 bg-gradient-to-r from-[#03144a]/5 to-blue-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-[#03144a] mb-8 leading-relaxed">
              &quot;Chez ClimGO, chaque projet est unique et mérite une attention personnalisée. 
              Votre satisfaction est notre priorité absolue.&quot;
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Image src="/Logo.png" alt="Équipe ClimGO" width={100} height={100} />

              <div className="text-left">
                <div className="font-semibold text-[#03144a]">Équipe ClimGO</div>
                <div className="text-gray-600 text-sm">Spécialistes du confort thermique</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tableau des zones desservies */}
      <section className="py-20">
        <Tableau />
      </section>

      {/* CTA final */}
      <section className="py-16 bg-[#03144a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à améliorer votre confort ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Demandez votre devis gratuit dès maintenant et découvrez nos solutions personnalisées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="tel:+33766460008"
              className="bg-white text-[#03144a] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center space-x-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Appelez maintenant</span>
            </Link>
            <Link
              href="mailto:contact@climgo.fr"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#03144a] transition-all duration-300 flex items-center space-x-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Écrivez-nous</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}