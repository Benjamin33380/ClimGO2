import Tree from './Tree';
import Badge from './Badge';
import Clock from './Clock';
import Lightning from './Lightning';
import Person from './Person';

export default function FinancialAids() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Image de fond */}
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-center bg-cover bg-no-repeat md:bg-fixed"
        style={{
          backgroundImage: "url('/handshake.png')",
          filter: "brightness(0.3)",
        }}
        aria-hidden="true"
      ></div>
      
      {/* Overlay gradient pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header modernisé */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Nos Engagements
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Nos engagements sont simples : qualité, clarté, et respect du client à chaque étape.
          </p>
        </div>

        {/* Cards modernisées avec icônes à gauche */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {/* Qualité */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Badge />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Qualité</h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  des <strong className="text-white">installations</strong>, <strong className="text-white">rigoureusement sélectionnées</strong> et <strong className="text-white">contrôlées</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Service personnalisé */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Person />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Service personnalisé</h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Un <strong className="text-white">accompagnement sur mesure</strong>, <strong className="text-white">discret</strong> et <strong className="text-white">à votre écoute</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Ponctualité & rigueur */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Clock />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Ponctualité & rigueur</h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  <strong className="text-white">Intervention à l&apos;heure</strong> et <strong className="text-white">respect des délais annoncés</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Efficacité & Propreté */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Lightning />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Efficacité & Propreté</h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  <strong className="text-white">Une intervention rapide</strong>, <strong className="text-white">soignée</strong>, et <strong className="text-white">sans surprise</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Engagement écologique */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Tree />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Engagement écologique</h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  <strong className="text-white">Solutions durables</strong> et <strong className="text-white">respectueuses de l&apos;environnement</strong> pour un avenir plus vert.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA moderne */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à nous faire confiance ?
            </h3>
            <p className="text-blue-100 mb-6">
              Découvrez pourquoi nos clients nous font confiance pour leurs projets de confort thermique.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}