import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#f8f9f4] text-gray-900 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Bloc 1 : Logo + slogan */}
        <div className="text-center md:text-left">
          <Image src="/Logo.png" alt="ClimGO Logo" width={140} height={40} className="object-contain mb-2 mx-auto md:mx-0" />
          <p className="text-sm text-gray-600">Le confort sur mesure entre Bordeaux & le Bassin</p>
        </div>

        {/* Bloc 2 : Navigation + mentions */}
        <div className="text-center md:text-left">
          <h3 className="text-md font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-[#1e40af] transition-colors">Accueil</Link></li>
            <li><Link href="/nos-services" className="hover:text-[#1e40af] transition-colors">Nos services</Link></li>
            <li><Link href="/aides-etat" className="hover:text-[#1e40af] transition-colors">Aides & subventions</Link></li>
            <li><Link href="/contact" className="hover:text-[#1e40af] transition-colors">Contact</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-[#1e40af] transition-colors">Mentions légales</Link></li>
            <li><Link href="/privacy" className="hover:text-[#1e40af] transition-colors">Politique de Confidentialité</Link></li>
          </ul>
        </div>

        {/* Bloc 3 : Contact + réseaux */}
        <div className="text-center md:text-left">
          <h3 className="text-md font-semibold mb-4">Nous contacter</h3>
          <p className="text-sm text-gray-600 mb-1">📍 Entre Bordeaux et Arcachon</p>
          <p className="text-sm text-gray-600 mb-1">📞 <Link href="tel:+33766460008" className="hover:text-[#1e40af]">07 66 46 00 08</Link></p>
          <p className="text-sm text-gray-600 mb-3">📧 <Link href="mailto:contact@climgo.fr" className="hover:text-[#1e40af]">contact@climgo.fr</Link></p>
          <div className="flex justify-center items-center md:justify-start space-x-3">
            <Link href="https://www.instagram.com/climgo_climatisation_chauffage" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/insta.png" alt="Instagram" width={20} height={20} />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/in.png" alt="LinkedIn" width={20} height={20} />
            </Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1e40af] transition-colors">
            <Image src="/fb.png" alt="Facebook" width={24} height={24} />
            </Link>

          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-xs text-gray-500">
        © 2025 ClimGO – Artisan RGE – Garantie décennale – Tous droits réservés.
      </div>
    </footer>
  );
}