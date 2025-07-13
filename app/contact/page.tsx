import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bgPage my-24">
      {/* Hero Section */}
      <section className="relative pt-52 pb-28 -mt-20">
        {/* Fond flouté */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/contact.png')",
            backgroundSize: "100% auto",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            zIndex: 0
          }}
        ></div>

        {/* Texte au-dessus */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-[#03144a] mb-6">
              Parlons de votre projet
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#03144a] mb-8">
              Contact ClimGO
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vous avez une question, un projet d&apos;installation ou besoin d&apos;un devis ?
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bgPage bg-[radial-gradient(ellipse_at_center,_#c0c0c0_0%,_#1a1a1a_100%)]">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="mx-auto">
            {/* Introduction */}
            <div className="bg-[#f8f8f7] rounded-lg shadow-md p-8 mb-12 text-center">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Contactez ClimGO</strong> : nous vous accompagnons avec écoute, réactivité et des solutions techniques sur mesure.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vous souhaitez installer une <strong>pompe à chaleur</strong>, une <strong>climatisation</strong> ou un <strong>chauffe-eau performant</strong> ? 
                Vous avez besoin d&apos;informations sur les <strong>aides disponibles</strong> pour vos travaux de rénovation énergétique ? 
                Contactez <strong>ClimGO</strong>, votre spécialiste du confort thermique dans le Sud-Ouest.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Chez ClimGO, nous savons qu&apos;un bon accompagnement commence par une <strong>écoute attentive</strong>. 
                C&apos;est pourquoi notre équipe se tient à votre disposition pour vous apporter un premier conseil, 
                un <strong>devis gratuit</strong>, ou tout simplement répondre à vos questions.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Que vous soyez un <strong>particulier</strong> ou un <strong>professionnel</strong>, nous vous proposons des solutions sur mesure 
                pour votre logement ou vos locaux. Notre expertise couvre le <strong>chauffage</strong>, la <strong>climatisation</strong>, 
                la production d&apos;<strong>eau chaude sanitaire</strong>, l&apos;<strong>entretien</strong> de vos équipements, 
                mais aussi toutes les aides de l&apos;État (MaPrimeRénov&apos;, CEE, TVA réduite…).
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Un besoin urgent ? Une question technique ? Un projet en réflexion ? 
                Contactez ClimGO via le formulaire ci-dessous ou par téléphone. 
                Vous recevrez une réponse <strong>rapide</strong>, <strong>claire</strong>, et <strong>personnalisée</strong>.
              </p>

              <p className="text-lg font-semibold text-[#03144a] text-center">
                Parce que chaque projet est unique, notre priorité reste la vôtre.
              </p>
            </div>

            {/* Contact Form and Info */}
            <div className="grid md:grid-cols-2 gap-12 place-items-center">
              {/* Formulaire */}
              <div className="bg-white/10 backdrop-blur-[10px] border border-white/30 rounded-xl p-8 shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2),_0_4px_30px_rgba(0,0,0,0.2)]">
                <h3 className="text-2xl font-bold text-[#03144a] mb-6">Envoyez-nous un message</h3>
                <ContactForm />
              </div>

              {/* Informations de contact */}
              <div className="bg-white/10 backdrop-blur-[10px] border border-white/30 rounded-xl p-8 text-center w-fit h-fit shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2),_0_4px_30px_rgba(0,0,0,0.2)]">
                <h3 className="text-2xl font-bold text-[#03144a] mb-6">Une question ? On est là pour vous répondre.</h3>
                
                <div className="space-y-6">
                  {/* Chaque bloc icône + texte */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#03144a] rounded-full p-3 flex items-center justify-center">
                      {/* Icône téléphone */}
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#03144a]">Téléphone</p>
                      <a href="tel:+33766460008" className="text-gray-600 hover:text-blue-600 transition-colors">
                        +33 (0)7 66 46 00 08
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-[#03144a] rounded-full p-3 flex items-center justify-center">
                      {/* Icône email */}
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#03144a]">Email</p>
                      <a href="mailto:contact@climgo.fr" className="text-gray-600 hover:text-blue-600 transition-colors">
                        contact@climgo.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-[#03144a] rounded-full p-3 flex items-center justify-center">
                      {/* Icône réponse rapide */}
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#03144a]">Réponse rapide</p>
                      <p className="text-gray-600">Sous 48h en moyenne</p>
                    </div>
                  </div>
                </div>

                {/* Bouton d'appel d'urgence */}
                <div className="mt-8 p-4 bg-white/20 backdrop-blur-md rounded-lg">
                  <p className="text-sm text-gray-600 mb-3">Besoin urgent ?</p>
                  <a
                    href="tel:+33766460008"
                    className="bg-[#03144a] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Appelez maintenant</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}