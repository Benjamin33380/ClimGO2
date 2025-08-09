import Link from "next/link";
import { TbTools, TbFlame, TbSnowflake, TbDroplet } from "react-icons/tb";
export default function Engagements() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#03144a] via-blue-900 to-[#03144a] relative overflow-hidden">
      {/* Motifs décoratifs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 translate-x-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Notre savoir-faire
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Chez <strong className="text-white">ClimGO</strong>, nous vous accompagnons dans tous les domaines du confort thermique et sanitaire : <strong className="text-white">chauffage</strong>, <strong className="text-white">climatisation</strong>, <strong className="text-white">eau chaude sanitaire</strong> et <strong className="text-white">maintenance</strong>. Nos solutions sont pensées pour allier <strong className="text-white">performance</strong>, <strong className="text-white">durabilité</strong>, <strong className="text-white">économies d'énergie</strong> et <strong className="text-white">sérénité</strong>, année après année.
            </p>
          </div>

          {/* Cartes de services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Chauffage */}
            <Link href="/chauffage" className="group cursor-pointer bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TbFlame className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Chauffage</h3>
                <p className="text-blue-100 leading-relaxed">
                  Solutions de chauffage performantes et économiques pour votre confort hivernal.
                </p>
              </div>
            </Link>

            {/* Climatisation */}
            <Link href="/climatisation" className="group cursor-pointer bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TbSnowflake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Climatisation</h3>
                <p className="text-blue-100 leading-relaxed">
                  Systèmes de climatisation réversibles pour un confort optimal toute l'année.
                </p>
              </div>
            </Link>

            {/* Eau chaude sanitaire */}
            <Link href="/eau-chaude-sanitaire" className="group cursor-pointer bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TbDroplet className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Eau chaude sanitaire</h3>
                <p className="text-blue-100 leading-relaxed">
                  Ballons thermodynamiques et cumulus pour une eau chaude disponible 24h/24.
                </p>
              </div>
            </Link>

            {/* Maintenance */}
            <Link href="/maintenance" className="group cursor-pointer bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TbTools className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Maintenance</h3>
                <p className="text-blue-100 leading-relaxed">
                  Service de maintenance préventive et curative avec garantie décennale.
                </p>
              </div>
            </Link>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Besoin d'un devis personnalisé ?
              </h3>
              <p className="text-blue-100 mb-6">
                Nos experts sont à votre disposition pour étudier votre projet et vous proposer la solution la plus adaptée.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-[#03144a] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Demander un devis gratuit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}