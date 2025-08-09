import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div style={{ position: 'absolute', zIndex: -90 }}>
        <Link
          href="https://www.oxelya.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Site partenaire Oxelya"
        >   
          <span style={{ display: 'none' }}>Site partenaire Oxelya</span>
        </Link>
      </div>
      
      <footer className="bg-[#03144a] text-white py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            
            {/* Bloc 1 : Logo + slogan */}
            <div className="text-center lg:text-left">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-4">
                <Image src="/Logo.png" alt="ClimGO Logo" width={140} height={40} className="object-contain mb-4 mx-auto lg:mx-0" />
                <h3 className="text-xl font-bold text-white mb-2">ClimGO</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Chauffage – Climatisation – Pompe à chaleur en Gironde
                </p>
                <div className="mt-3 flex items-center justify-center lg:justify-start space-x-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">RGE</span>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Garantie 10 ans</span>
                </div>
              </div>
            </div>

            {/* Bloc 2 : Navigation */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold text-white mb-6">Navigation</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Accueil</Link></li>
                <li><Link href="/nos-services" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Nos services</Link></li>
                <ul className="space-y-3 list-disc ml-8">
                  <li><Link href="/chauffage" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Chauffage</Link></li>
                  <li><Link href="/climatisation" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Climatisation</Link></li>
                  <li><Link href="/eau-chaude-sanitaire" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Eau chaude sanitaire</Link></li>
                  <li><Link href="/maintenance" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Maintenance</Link></li>
                </ul>
                <li><Link href="/zones-desservies" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Zones desservies</Link></li>

              </ul>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold text-white mb-6">Blog</h3>
              <Link href="/blog" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block mb-3">Articles</Link>
                <ul className="space-y-3 list-disc ml-6">
                  <li><Link href="/chauffage" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Chauffage</Link></li>
                  <li><Link href="/climatisation" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Climatisation</Link></li>
                  <li><Link href="/categorie/eau-chaude-sanitaire" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Eau chaude sanitaire</Link></li>
                  <li><Link href="/categorie/btp" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">BTP</Link></li>
                  <li><Link href="/categorie/economies" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Economies</Link></li>
                  <li><Link href="/categorie/maintenance" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Maintenance</Link></li>
                </ul>
            </div>
            {/* Bloc 3 : Infos légales */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold text-white mb-6">Infos légales</h3>
              <ul className="space-y-3">
                <li><Link href="/aides-etat" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Aides & subventions</Link></li>
                <li><Link href="/contact" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Contact</Link></li>
                <li><Link href="/mentions-legales" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Mentions légales</Link></li>
                <li><Link href="/privacy" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Politique de confidentialité</Link></li>
              </ul>
            </div>

            {/* Bloc 4 : Contact + réseaux */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold text-white mb-6">Nous contacter</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-white">📍</span>
                  </div>
                  <span className="text-blue-100">Marcheprime</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-white">📞</span>
                  </div>
                  <Link href="tel:+33766460008" className="text-blue-100 hover:text-white transition-colors duration-300">07 66 46 00 08</Link>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-white">📧</span>
                  </div>
                  <Link href="mailto:contact@climgo.fr" className="text-blue-100 hover:text-white transition-colors duration-300">contact@climgo.fr</Link>
                </div>
              </div>
              
              {/* Réseaux sociaux */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-3">Suivez-nous</h4>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <Link href="https://www.instagram.com/climgo_climatisation_chauffage" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                    <FaInstagram />
                  </Link>
                  <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                    <FaLinkedin />
                  </Link>
                  <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                    <FaFacebook />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-white/20 my-8"></div>

          {/* Footer bottom */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <p className="text-blue-100 text-sm mb-2">
                © 2025 ClimGO · Artisan RGE · Garantie décennale · Tous Droits Réservés ©
              </p>
              <p className="text-blue-100 text-xs">
                WebMentor <Link href="https://www.oxelya.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors duration-300 underline">Oxelya</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}