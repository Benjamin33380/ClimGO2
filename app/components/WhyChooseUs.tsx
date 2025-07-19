export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-fixed bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed"
        style={{
          backgroundImage: "url('/fond3.png')",
          filter: "brightness(0.3)",
        }}
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f8f8f5] mb-6">
            Pourquoi choisir ClimGO ?
          </h2>
          <p className="text-lg text-[#f8f8f9] max-w-4xl mx-auto leading-relaxed">
            Votre <strong>confort</strong> mérite une <strong>attention particulière</strong>, nous avons développé une <strong>approche élégante</strong> et <strong>sur-mesure</strong> pour chacun de nos clients. Choisir <strong>ClimGO</strong>, c&apos;est opter pour :
          </p>
        </div>

        {/* Cards minimalistes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Expertise */}
          <div className="group bg-transparent rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="bg-[#f8f8f5] border-2 border-[#f8f8f5] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f8f8f5] mb-3 opacity-100 translate-y-0 transition-all duration-300">Expertise</h3>
              <p className="text-[#f8f8f9] text-sm leading-relaxed opacity-100 translate-y-0 transition-all duration-300">
                Chaque projet est unique. <strong>Notre savoir-faire technique</strong> et <strong>notre maîtrise des dernières innovations</strong> garantissent une <strong>qualité irréprochable</strong>, adaptée à vos attentes les plus exigeantes.
              </p>
            </div>
          </div>

          {/* Accompagnement Personnalisé */}
          <div className="group bg-transparent rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="bg-[#f8f8f5] border-2 border-[#f8f8f5] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f8f8f5] mb-3 opacity-100 translate-y-0 transition-all duration-300">Accompagnement Personnalisé</h3>
              <p className="text-[#f8f8f9] text-sm leading-relaxed opacity-100 translate-y-0 transition-all duration-300">
                Nous <strong>prenons le temps de vous écouter</strong> pour comprendre précisément vos besoins. <strong>Chaque installation est conçue sur mesure</strong>, pour un <strong>résultat impeccable à votre image</strong>.
              </p>
            </div>
          </div>

          {/* Discrétion et Confiance */}
          <div className="group bg-transparent rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="bg-[#f8f8f9] border-2 border-[#f8f8f9] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f8f8f9] mb-3 opacity-100 translate-y-0 transition-all duration-300">Discrétion et Confiance</h3>
              <p className="text-[#f8f8f9] text-sm leading-relaxed opacity-100 translate-y-0 transition-all duration-300">
                Votre intimité est précieuse. <strong>ClimGO s&apos;engage</strong> à intervenir dans le <strong>plus grand respect de votre vie privée</strong> et à assurer une <strong>totale confidentialité</strong>.
              </p>
            </div>
          </div>

          {/* Engagement Durable */}
          <div className="group bg-transparent rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="bg-[#f8f8f9] border-2 border-[#f8f8f9] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f8f8f9] mb-3 opacity-100 translate-y-0 transition-all duration-300">Engagement Durable</h3>
              <p className="text-[#f8f8f9] text-sm leading-relaxed opacity-100 translate-y-0 transition-all duration-300">
                Nous privilégions des <strong>solutions à haute performance énergétique</strong>, <strong>respectueuses de l&apos;environnement</strong> et <strong>pensées pour durer</strong>. Choisir <strong>ClimGO</strong>, c&apos;est <strong>investir sereinement dans l&apos;avenir</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 