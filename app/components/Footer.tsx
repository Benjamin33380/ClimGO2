import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div style={{ position: 'absolute', zIndex: -90 }}>
        <a href="https://www.oxelya.com" target="_blank" rel="noopener noreferrer"></a>
      </div>
      <footer className="bg-[#f8f9f4] text-gray-900 py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Bloc 1 : Logo + slogan */}
          <div className="text-center md:text-left">
            <Image src="/Logo.png" alt="ClimGO Logo" width={140} height={40} className="object-contain mb-2 mx-auto md:mx-0" />
            <p className="text-base font-semibold text-black leading-snug max-w-xs mx-auto md:mx-0">
              ClimGO
            </p>
            <p className="text-sm text-black leading-snug max-w-xs mx-auto md:mx-0">
              Chauffage – Climatisation – Pompe à chaleur en Gironde
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Intervention soignée – Artisan RGE
            </p>
          </div>

          {/* Bloc 2 : Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-md font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-black">
              <li><Link href="/" className="hover:text-[#1e40af] transition-colors">Accueil</Link></li>
              <li><Link href="/nos-services" className="hover:text-[#1e40af] transition-colors">Nos services</Link></li>
              <li><Link href="/zones-desservies" className="hover:text-[#1e40af] transition-colors">Zones desservies</Link></li>
              <li><Link href="/blog" className="hover:text-[#1e40af] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Bloc 3 : Infos légales */}
          <div className="text-center md:text-left">
            <h3 className="text-md font-semibold mb-4">Infos légales</h3>
            <ul className="space-y-2 text-sm text-black">
              <li><Link href="/aides-etat" className="hover:text-[#1e40af] transition-colors">Aides & subventions</Link></li>
              <li><Link href="/contact" className="hover:text-[#1e40af] transition-colors">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-[#1e40af] transition-colors">Mentions légales</Link></li>
              <li><Link href="/privacy" className="hover:text-[#1e40af] transition-colors">Politique de confidentialité</Link></li>
            </ul>
          </div>

          {/* Bloc 4 : Contact + réseaux */}
          <div className="text-center md:text-left">
            <h3 className="text-md font-semibold mb-4">Nous contacter</h3>
            <p className="text-sm text-black mb-1">📍 Marcheprime</p>
            <p className="text-sm text-black mb-1">📞 <Link href="tel:+33766460008" className="hover:text-[#1e40af]">07 66 46 00 08</Link></p>
            <p className="text-sm text-black mb-3">📧 <Link href="mailto:contact@climgo.fr" className="hover:text-[#1e40af]">contact@climgo.fr</Link></p>
            <div className="flex justify-center items-center md:justify-start space-x-3">
              <Link href="https://www.instagram.com/climgo_climatisation_chauffage" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/insta.png" alt="Instagram" width={20} height={20} />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/in.png" alt="LinkedIn" width={20} height={20} />
              </Link>
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/fb.png" alt="Facebook" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-xs text-gray-800 mx-6">
          © 2025 ClimGO · Artisan RGE · Garantie décennale · Tous Droits Réservés © <br />
          WebMentor  <a href="https://www.oxelya.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1e40af]">Oxelya</a>
        </div>
      </footer>
    </>
  );
}