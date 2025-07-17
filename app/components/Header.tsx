'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Barre supérieure avec bouton d'appel et réseaux sociaux */}
      <div className="w-full bg-[#03144a]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-15">
            {/* Bouton d'appel */}
            <Link href="tel:0766460008" className="flex items-center space-x-2">
              <button className="bg-white climText px-6 py-2 rounded-lg font-bold transform transition-transform duration-300 hover:scale-110" aria-label="Nous appeler">NOUS APPELER</button>
            </Link>
            {/* Réseaux sociaux */}
            <div className="flex items-center px-2 py-1 gap-3">
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <Image src="/fb.png" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="https://www.instagram.com/climgo_climatisation_chauffage" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <Image src="/insta.png" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <Image src="/in.png" alt="LinkedIn" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section navigation centrée avec logo intégré */}
      <div className="w-full bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-20 mt-4 relative">
            {/* Navigation centrée avec logo intégré */}
            <div className="bg-white/10 hover:bg-[#03144a] transition-colors duration-300 rounded-full px-4 py-0.5 backdrop-blur-md mt-4 text-[#03144a] group-hover:text-white">

          {/* Section navigation centrée avec logo intégré */}
              {/* Navigation Desktop */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/Logo.png"
                    alt="ClimGO Logo"
                    width={160}
                    height={55}
                    className="h-14 w-auto mr-6"
                  />
                </Link>
                <Link href="/" className="text-white hover:text-[#d4af37] transition-colors text-base font-semibold">
                  Accueil
                </Link>
                <div
                  className="relative group"
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => setIsMenuOpen(false)}
                >
                  <Link href="/nos-services" className="text-white hover:text-[#d4af37] transition-colors flex items-center text-base font-semibold">
                    Nos Services
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-200 pointer-events-auto z-50"
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                  >
                    <div className="py-2">
                      <Link href="/chauffage" className="block px-4 py-2 text-base text-[#03144a] hover:bg-[#03144a] hover:text-white">
                        Chauffage
                      </Link>
                      <Link href="/climatisation" className="block px-4 py-2 text-base text-[#03144a] hover:bg-[#03144a] hover:text-white">
                        Climatisation
                      </Link>
                      <Link href="/eau-chaude-sanitaire" className="block px-4 py-2 text-base text-[#03144a] hover:bg-[#03144a] hover:text-white">
                        Eau chaude sanitaire
                      </Link>
                      <Link href="/maintenance" className="block px-4 py-2 text-base text-[#03144a] hover:bg-[#03144a] hover:text-white">
                        Maintenance
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="/aides-etat" className="text-white hover:text-[#d4af37] transition-colors text-base font-semibold">
                  Aides d&apos;État
                </Link>
                <Link href="/a-propos" className="text-white hover:text-[#d4af37] transition-colors text-base font-semibold">
                  À Propos
                </Link>
                <Link href="/contact" className="text-white hover:text-[#d4af37] transition-colors text-base font-semibold">
                  Contact
                </Link>
              </nav>

              {/* Navigation Mobile */}
              <div className="md:hidden flex items-center">
                <Link href="/" className="flex items-center mr-4">
                  <Image
                    src="/Logo.png"
                    alt="ClimGO Logo"
                    width={160}
                    height={54}
                    className="h-14 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full bg-[#03144a] text-white hover:bg-[#d4af37] transition-colors"
                  aria-label="Ouvrir le menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            {/* Backdrop */}
            <div 
              className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onClick={closeMenu}
            />
            
          {/* Menu Panel */}
        <div className={`fixed inset-0 h-full w-full bg-white/20 backdrop-blur-md shadow-lg transform transition-transform duration-300 ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}>
  

              {/* Header du menu */}
              <div className="flex items-center justify-between p-6 pb-3">
                <div className="flex items-center">
                  <Image
                    src="/Logo.png"
                    alt="ClimGO Logo"
                    width={180}
                    height={72}
                    className="h-12 w-auto"
                  />
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full text-white hover:bg-[#2563EB] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex flex-col p-6 space-y-2">
                <Link 
                  href="/" 
                  onClick={closeMenu}
                  className="text-white hover:text-[#d4af37] transition-colors text-base font-medium py-2 border-b border-white/10 tracking-wide uppercase"
                >
                  Accueil
                </Link>

                <div>
                  <Link
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsSubMenuOpen(!isSubMenuOpen);
                    }}
                    className="flex justify-between items-center w-full text-white hover:text-[#d4af37] transition-colors text-base font-medium py-2 border-b border-white/10 tracking-wide uppercase"
                  >
                    Nos Services
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-200 ${
                        isSubMenuOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {isSubMenuOpen && (
                    <div className="pl-4 space-y-3 border-t border-white/20 mt-2 pt-3">
                      <Link 
                        href="/nos-services" 
                        className="block text-white text-sm tracking-wide uppercase hover:text-[#d4af37] transition-colors py-2"
                        onClick={closeMenu}
                      >
                        Tous les Services
                      </Link>
                      <Link 
                        href="/chauffage" 
                        className="block text-white text-sm tracking-wide uppercase hover:text-[#d4af37] transition-colors py-2"
                        onClick={closeMenu}
                      >
                        Chauffage
                      </Link>
                      <Link 
                        href="/climatisation" 
                        className="block text-white text-sm tracking-wide uppercase hover:text-[#d4af37] transition-colors py-2"
                        onClick={closeMenu}
                      >
                        Climatisation
                      </Link>
                      <Link 
                        href="/eau-chaude-sanitaire" 
                        className="block text-white text-sm tracking-wide uppercase hover:text-[#d4af37] transition-colors py-2"
                        onClick={closeMenu}
                      >
                        Eau chaude sanitaire
                      </Link>
                      <Link 
                        href="/maintenance" 
                        className="block text-white text-sm tracking-wide uppercase hover:text-[#d4af37] transition-colors py-2"
                        onClick={closeMenu}
                      >
                        Maintenance
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  href="/aides-etat" 
                  onClick={closeMenu}
                  className="text-white hover:text-[#d4af37] transition-colors text-base font-medium py-2 border-b border-white/10 tracking-wide uppercase"
                >
                  Aides d&apos;État
                </Link>
                
                <Link 
                  href="/a-propos" 
                  onClick={closeMenu}
                  className="text-white hover:text-[#d4af37] transition-colors text-base font-medium py-2 border-b border-white/10 tracking-wide uppercase"
                >
                  À Propos
                </Link>
                
                <Link 
                  href="/contact" 
                  onClick={closeMenu}
                  className="text-white hover:text-[#d4af37] transition-colors text-base font-medium py-2 border-b border-white/10 tracking-wide uppercase"
                >
                  Contact
                </Link>
              </nav>

              {/* Footer du menu */}
              <div className="absolute bottom-0 left-0 right-0 p-6 pb-3">
                <div className="flex justify-center space-x-4">
                  <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 transition-all duration-300 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </Link>
                  <Link href="https://www.instagram.com/climgo_climatisation_chauffage" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 transition-all duration-300 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="url(#instagram-gradient-mobile)">
                      <defs>
                        <linearGradient id="instagram-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#833ab4"/>
                          <stop offset="50%" stopColor="#fd1d1d"/>
                          <stop offset="100%" stopColor="#fcb045"/>
                        </linearGradient>
                      </defs>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>
                  <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 transition-all duration-300 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0077B5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 