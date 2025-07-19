import { TbSnowflake, TbFlame, TbDroplet, TbTools } from 'react-icons/tb';
import Link from 'next/link';
export default function Testimonials() {
  return (
    <section className="relative py-20 bg-[#f8f9f4] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-[url('/fond-multiverse.png')] bg-cover bg-center opacity-40 animate-pulse-slow"
          style={{ zIndex: 0 }}
        ></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">

        {/* Cards minimalistes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Climatisation */}
          <Link href="/climatisation" className="group block backdrop-blur-md bg-[#f8f9f4] rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.03] hover:bg-[#f8f9f4] transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center transition-all duration-300">
              <div className="bg-[#f8f9f4] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#2563EB]">
                <TbSnowflake className="w-10 h-10 drop-shadow-lg text-[#2563EB]" />
              </div>
              <div className="transition-all duration-500 ease-in-out overflow-hidden transform group-hover:-translate-y-1 opacity-100 max-h-40 md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-40">
                <h3 className="text-lg font-semibold text-[#2563EB]">Climatisation</h3>
              </div>
              <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out overflow-hidden transform group-hover:-translate-y-1">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Systèmes de climatisation haute performance pour un confort optimal. 
                  <strong>Réversible</strong> pour chauffer en hiver et refroidir en été.
                </p>
              </div>
            </div>
          </Link>

          {/* Chauffage */}
          <Link href="/chauffage" className="group block backdrop-blur-md bg-[#f8f9f4] rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.03] hover:bg-[#f8f9f4] transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center transition-all duration-300">
              <div className="bg-[#f8f9f4] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#DC2626]">
                <TbFlame className="w-10 h-10 drop-shadow-lg text-[#DC2626]" />
              </div>
              <div className="transition-all duration-500 ease-in-out overflow-hidden transform group-hover:-translate-y-1 opacity-100 max-h-40 md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-40">
                <h3 className="text-lg font-semibold text-[#DC2626]">Chauffage</h3>
              </div>
              <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out overflow-hidden transform group-hover:-translate-y-1">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pompes à chaleur et planchers chauffants pour un <strong>chauffage écologique</strong> et économique toute l&apos;année.
                </p>
              </div>
            </div>
          </Link>

          {/* Eau Chaude Sanitaire */}
          <Link href="/eau-chaude-sanitaire" className="group block backdrop-blur-md bg-[#f8f9f4] rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.03] hover:bg-[#f8f9f4] transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center transition-all duration-300">
              <div className="bg-[#f8f9f4] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#0EA5E9]">
                <TbDroplet className="w-10 h-10 drop-shadow-lg text-[#0EA5E9]" />
              </div>
              <div className="transition-all duration-500 ease-in-out overflow-hidden transform group-hover:-translate-y-1 opacity-100 max-h-40 md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-40">
                <h3 className="text-lg font-semibold text-[#0EA5E9]">Eau <span className="text-[#0EA5E9]">Chaude</span> Sanitaire</h3>
              </div>
              <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out overflow-hidden transform group-hover:-translate-y-1">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ballons thermodynamiques et cumulus électriques pour une <strong>eau chaude</strong> disponible 24h/24 et économique.
                </p>
              </div>
            </div>
          </Link>

          {/* Maintenance */}
          <Link href="/maintenance" className="group block backdrop-blur-md bg-[#f8f9f4] rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.03] hover:bg-[#f8f9f4] transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center transition-all duration-300">
              <div className="bg-[#f8f9f4] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-[#10B981]">
                <TbTools className="w-10 h-10 drop-shadow-lg text-[#10B981]" />
              </div>
              <div className="transition-all duration-500 ease-in-out overflow-hidden transform group-hover:-translate-y-1 opacity-100 max-h-40 md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-40">
                <h3 className="text-lg font-semibold text-[#10B981]">Maintenance</h3>
              </div>
              <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out overflow-hidden transform group-hover:-translate-y-1">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Maintenance experte et <strong>garantie décennale</strong>. 
                  Engagement sur 10 ans pour la tranquillité de vos équipements.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}