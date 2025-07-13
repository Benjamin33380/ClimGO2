import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f6] text-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="ClimGO Logo" className="h-20" width={100} height={100} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#03144a]">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-black hover:text-[#d4af37] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-[#d4af37] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-black hover:text-[#d4af37] transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/aides-etat" className="text-black hover:text-[#d4af37] transition-colors">
                  Aides d&apos;État
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#03144a]">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chauffage" className="text-black hover:text-[#d4af37] transition-colors">
                  Chauffage
                </Link>
              </li>
              <li>
                <Link href="/climatisation" className="text-black hover:text-[#d4af37] transition-colors">
                  Climatisation
                </Link>
              </li>
              <li>
                <Link href="/eau-chaude-sanitaire" className="text-black hover:text-[#d4af37] transition-colors">
                  Eau chaude sanitaire
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-black hover:text-[#d4af37] transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#03144a]">Contact</h3>
            <div className="space-y-2">
              <p className="text-black">
                <a href="tel:+33766460008" className="hover:text-[#d4af37] transition-colors">
                  +33 (0)7 66 46 00 08
                </a>
              </p>
              <p className="text-black">
                <a href="mailto:accueil@climgo.fr" className="hover:text-[#d4af37] transition-colors">
                  contact@climgo.fr
                </a>
              </p>
              <p className="text-black">
                Entre Bordeaux et le Bassin d&apos;Arcachon
              </p>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Image src="/fb.png" alt="Facebook" className="w-6 h-6" width={24} height={24} />
              </a>
              <a
                href="https://www.instagram.com/climgo_climatisation_chauffage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Image src="/insta.png" alt="Instagram" className="w-6 h-6" width={24} height={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Image src="/in.png" alt="LinkedIn" className="w-6 h-6" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
              <Link href="/mentions-legales" className="text-black hover:text-[#d4af37] transition-colors text-sm">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-black hover:text-[#d4af37] transition-colors text-sm">
                Politique de confidentialité
              </Link>
              <Link href="/conditions-generales" className="text-black hover:text-[#d4af37] transition-colors text-sm">
                Conditions générales de ventes
              </Link>
              <Link href="/zones-desservies" className="text-black hover:text-[#d4af37] transition-colors text-sm">
                Zones desservies
              </Link>
            </div>
            <div className="text-black text-sm">
              © 2025 ClimGO. Tous droits réservés.
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}