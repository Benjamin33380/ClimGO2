export default function FinancialAids() {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-[scroll] md:bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/mo.png')",
          filter: "brightness(0.3)",
        }}
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f8f8f9] mb-6 text-center">
          Nos Engagements 
        </h2>
        <p className="text-lg text-[#f8f8f9] max-w-4xl mx-auto leading-relaxed mb-8 text-center">
          Nos engagements sont simples : qualité, clarté, et respect du client à chaque étape.
        </p>

        {/* Cards minimalistes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {/* Qualité */}
          <div className="bg-transparent  rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
            <div className="text-center">
              <div className="bg-[#f8f8f9] text-[#d4af37] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f8f8f9] mb-3">Qualité</h3>
              <p className="text-[#f8f8f9] text-sm leading-relaxed">
                des <strong>installations</strong>, <strong>rigoureusement sélectionnées</strong> et <strong>contrôlées</strong>.
              </p>
            </div>
          </div>

          {/* Service personnalisé */}
          <div className="bg-transparent  rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
            <div className="text-center">
              <div className="bg-[#f8f8f9] text-[#d4af37] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f8f8f9] mb-3">Service personnalisé</h3>
              <p className="text-[#f8f8f9] text-sm leading-relaxed">
                Un <strong>accompagnement sur mesure</strong>, <strong>discret</strong> et <strong>à votre écoute</strong>.
              </p>
            </div>
          </div>

          {/* Ponctualité & rigueur */}
          <div className="bg-transparent  rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
            <div className="text-center">
              <div className="bg-[#f8f8f9] text-[#d4af37] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f8f8f9] mb-3">Ponctualité & rigueur</h3>
              <p className="text-[#f8f8f9] text-sm leading-relaxed">
                <strong>Intervention à l&apos;heure</strong> et <strong>respect des délais annoncés</strong>.
              </p>
            </div>
          </div>

          {/* Efficacité & Propreté */}
          <div className="bg-transparent  rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
            <div className="text-center">
              <div className="bg-[#f8f8f9] text-[#d4af37] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#f8f8f9] mb-3">Efficacité & Propreté</h3>
              <p className="text-[#f8f8f9] text-sm leading-relaxed">
                <strong>Une intervention rapide</strong>, <strong>soignée</strong>, et <strong>sans surprise</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}