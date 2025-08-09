import Link from 'next/link';

export default function Aids() {
    return (
      <section
        className="py-24 relative bg-fixed bg-center bg-no-repeat bg-cover md:bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(3, 20, 74, 0.9), rgba(3, 20, 74, 0.9))'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Profitez des aides financières !
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-white">Optimisez votre investissement</strong> grâce aux nombreuses <strong className="text-white">subventions,</strong> et <strong className="text-white">avantages fiscaux</strong> disponibles pour vos travaux d&apos;amélioration énergétique. <strong className="text-white">ClimGO vous accompagne pas à pas</strong> pour simplifier vos démarches et <strong className="text-white">maximiser vos économies</strong>.
            </p>
          </div>
  
          {/* Aides financières modernisées */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* MaPrimeRénov' */}
              <div className="flex items-start space-x-6 justify-start">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center shrink-0 border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">MaPrimeRénov&apos;</h3>
                  <p className="text-blue-100 leading-relaxed text-lg">
                    Une aide significative pour vos travaux d&apos;économie d&apos;énergie.
                  </p>
                </div>
              </div>
  
              {/* TVA réduite */}
              <div className="flex items-start space-x-6 justify-start">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center shrink-0 border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">TVA réduite</h3>
                  <p className="text-blue-100 leading-relaxed text-lg">
                    Bénéficiez d&apos;un taux réduit à 5,5% pour vos installations.
                  </p>
                </div>
              </div>
  
              {/* Certificats CEE */}
              <div className="flex items-start space-x-6 justify-start">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center shrink-0 border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Certificats d&apos;Économies d&apos;Énergie (CEE)</h3>
                  <p className="text-blue-100 leading-relaxed text-lg">
                    Obtenez un soutien financier complémentaire.
                  </p>
                </div>
              </div>
  
              {/* Éco-PTZ */}
              <div className="flex items-start space-x-6 justify-start">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center shrink-0 border border-white/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Éco-prêt à taux zéro (Éco-PTZ)</h3>
                  <p className="text-blue-100 leading-relaxed text-lg">
                    Financez vos travaux sans intérêts.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Call to Action modernisé */}
            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                <Link 
                  href="/aides-etat/" 
                  className="inline-block bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Découvrir toutes les aides
                </Link>
                <p className="text-lg text-blue-100 mt-6">
                  <strong className="text-white">ClimGO</strong>, votre partenaire <strong className="text-white">confort</strong> et <strong className="text-white">économies</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }