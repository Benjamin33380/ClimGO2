
export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden" style={{
      marginTop: "100vh",
    }}>
      {/* Motifs décoratifs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/30 rounded-full -translate-y-36 translate-x-36"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full translate-y-48 -translate-x-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#03144a] mb-8">
              Votre partenaire confort thermique
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          {/* Contenu principal */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Texte principal */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#03144a]">
                    Expertise locale reconnue
                  </h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-[#03144a]">ClimGO est votre partenaire local entre Bordeaux et le Bassin d'Arcachon pour tous vos projets de chauffage, climatisation et confort thermique. </strong>
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Basée entre Bordeaux et le Bassin d'Arcachon, l'entreprise <strong className="text-[#03144a]">ClimGO</strong>, certifiée <strong className="text-green-600">RGE</strong>, vous accompagne dans tous vos projets
                   d&apos;<strong className="text-[#03144a]">installation</strong>, de <strong className="text-[#03144a]">dépannage</strong> et de <strong className="text-[#03144a]">maintenance</strong> en <strong className="text-[#03144a]">pompe à chaleur</strong>, <strong className="text-[#03144a]">chauffage</strong>
                   , <strong className="text-[#03144a]">climatisation</strong>, <strong className="text-[#03144a]">eau chaude sanitaire</strong> et <strong className="text-[#03144a]">énergies renouvelables</strong>.
                </p>
              </div>

              {/* Points clés */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <h4 className="text-xl font-bold text-[#03144a] mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Notre mission
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Notre mission est simple : vous garantir <strong className="text-[#03144a]">confort</strong>, <strong className="text-[#03144a]">performance</strong> et <strong className="text-[#03144a]">sérénité</strong>, jour après jour.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                  <h4 className="text-xl font-bold text-[#03144a] mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    Notre approche
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Grâce à notre <strong className="text-[#03144a]">savoir-faire</strong>, nous vous proposons des solutions <strong className="text-[#03144a]">durables</strong>, <strong className="text-[#03144a]">soignées</strong> et <strong className="text-[#03144a]">parfaitement adaptées à vos besoins</strong>.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                  <h4 className="text-xl font-bold text-[#03144a] mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Notre engagement
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    En complément, nous sélectionnons des équipements <strong className="text-[#03144a]">fiables</strong> et <strong className="text-[#03144a]">performants</strong>, à haute <strong className="text-[#03144a]">efficacité énergétique</strong>. 
                    C&apos;est pourquoi chaque installation bénéficie d&apos;un <strong className="text-[#03144a]">suivi rigoureux</strong>, dans le respect des <strong className="text-[#03144a]">délais</strong> et de vos <strong className="text-[#03144a]">attentes</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 