'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f9f4] my-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Logo */}
          <div className="flex justify-center mb-16">
            <div className="bg-[#f8f9f4]/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40">
              <Image 
                src="/Logo + nom.png" 
                alt="ClimGO" 
                width={1000} 
                height={500} 
                className="w-auto h-24 md:h-32 object-contain" 
              />
            </div>
          </div>

          {/* Badge */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#03144a]/10 text-[#03144a] border border-[#03144a]/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Artisan RGE Certifié
            </span>
          </div>

          {/* Titre principal */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[#03144a] mb-8 leading-tight">
              À propos de
              <span className="bg-gradient-to-r from-[#03144a] to-blue-600 bg-clip-text text-transparent"> ClimGO</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-12 leading-relaxed">
              Votre artisan RGE en chauffage & climatisation à Marcheprime
            </h2>
          </div>

          {/* Badges de confiance */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center bg-[#f8f9f4]/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
              <div className="text-2xl font-bold text-[#03144a] mb-2">RGE</div>
              <div className="text-gray-600 text-sm">Reconnu Garant Environnement</div>
            </div>
            <div className="text-center bg-[#f8f9f4]/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
              <div className="text-2xl font-bold text-[#03144a] mb-2">10 ans</div>
              <div className="text-gray-600 text-sm">Garantie décennale</div>
            </div>
            <div className="text-center bg-[#f8f9f4]/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
              <div className="text-2xl font-bold text-[#03144a] mb-2">MAAF</div>
              <div className="text-gray-600 text-sm">Assurance professionnelle</div>
            </div>
            <div className="text-center bg-[#f8f9f4]/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
              <div className="text-2xl font-bold text-[#03144a] mb-2">Gironde</div>
              <div className="text-gray-600 text-sm">Basé à Marcheprime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#f8f9f4] rounded-3xl p-12 shadow-xl border border-gray-100 mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-[#03144a] mb-6">
                  L&apos;excellence thermique à votre service
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>ClimGO</strong>, artisan RGE à Marcheprime, est une entreprise spécialisée dans l&apos;installation, 
                    la mise en service et la maintenance de systèmes thermiques et énergétiques sur mesure.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Basée en Gironde, nous intervenons auprès des particuliers et des professionnels avec un haut niveau d&apos;exigence.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Chaque chantier est réalisé avec méthode : <strong>étude technique rigoureuse</strong>, 
                    <strong> dimensionnement précis</strong>, <strong>installation soignée</strong> et <strong>suivi assuré</strong>.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#03144a] to-blue-700 rounded-2xl p-8 text-white">
                  <h4 className="text-xl font-bold mb-6">Notre engagement qualité</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span className="text-blue-100">Certification RGE</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span className="text-blue-100">Attestation fluides frigorigènes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span className="text-blue-100">Assurance décennale MAAF</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span className="text-blue-100">Conformité aux normes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 leading-relaxed text-lg">
                    Notre objectif : garantir des systèmes <strong>durables</strong>, <strong>performants</strong> et <strong>conformes aux normes en vigueur</strong>, 
                  pour un confort maîtrisé et une efficacité énergétique optimale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties Section */}
      <section className="py-20 bg-gradient-to-r from-[#03144a]/5 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-[#03144a] mb-6">
                Garanties professionnelles
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Avec votre artisan RGE à Marcheprime
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="bg-[#f8f9f4] rounded-3xl p-10 shadow-xl border border-gray-100">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-[#03144a] mb-4">
                    Protection maximale
                  </h4>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Chez ClimGO, chaque chantier est couvert par une assurance responsabilité civile professionnelle et une garantie décennale.
                </p>

                <h5 className="text-lg font-semibold text-[#03144a] mb-4">
                  Qu&apos;est-ce que ça change pour vous ?
                </h5>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Toutes nos installations – chauffage, climatisation, eau chaude sanitaire, ventilation – 
                  sont assurées pendant <strong>10 ans</strong> contre les dommages liés à notre intervention.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <h6 className="font-semibold text-[#03144a] mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Informations d&apos;assurance
                  </h6>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Assureur :</strong> MAAF Assurances</p>
                    <p><strong>Contrat n° :</strong> 133144624 U MCE – 001</p>
                    <p><strong>Activités couvertes :</strong> Plomberie, chauffage, climatisation, ventilation, énergies renouvelables.</p>
                  </div>
                </div>
              </div>

              {/* Carousel MAAF */}
              <div className="flex justify-center items-center w-full h-full">
              <div className="bg-[#f8f9f4] rounded-3xl p-10 shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-[#03144a] mb-4">
                    Nos garanties en images
                  </h4>
                </div>
                <CarouselMaaf />
                <p className="text-gray-600 leading-relaxed text-center mt-8">
                  Parce qu&apos;un bon artisan, c&apos;est aussi un artisan couvert. Et chez ClimGO, artisan RGE basé à Marcheprime, 
                  la protection du client fait partie de l&apos;engagement pro, pas d&apos;une option.
                </p>
              </div>
              </div>
              </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-[#03144a] mb-6">
                Nos certifications d&apos;artisan RGE
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Chez ClimGO, artisan RGE basé à Marcheprime, chaque intervention repose sur des compétences certifiées 
                dans les domaines du génie climatique, de la thermique du bâtiment et des énergies renouvelables.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* QualiPAC RGE */}
              <div className="bg-[#f8f9f4] rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-[#03144a] to-blue-600 rounded-2xl p-4 mr-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-[#03144a]">QualiPAC RGE</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Certification indispensable pour installer des pompes à chaleur et faire bénéficier nos clients 
                  des aides de l&apos;État (MaPrimeRénov&apos;, CEE…). Elle atteste d&apos;une excellence énergétique reconnue.
                </p>
              </div>

              {/* Attestation fluides frigorigènes */}
              <div className="bg-[#f8f9f4] rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-[#03144a] to-blue-600 rounded-2xl p-4 mr-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-[#03144a]">Fluides frigorigènes</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Obligatoire pour manipuler les fluides frigorigènes en toute sécurité, cette certification garantit 
                  une installation conforme à la réglementation environnementale.
                </p>
              </div>

              {/* Habilitation électrique BR */}
              <div className="bg-[#f8f9f4] rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-[#03144a] to-blue-600 rounded-2xl p-4 mr-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-[#03144a]">Habilitation électrique BR</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Indispensable pour intervenir en toute sécurité sur les circuits électriques de vos climatiseurs, 
                  chauffe-eaux et pompes à chaleur.
                </p>
              </div>

              {/* BEP & Bac Pro TISEC */}
              <div className="bg-[#f8f9f4] rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-[#03144a] to-blue-600 rounded-2xl p-4 mr-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-[#03144a]">BEP & Bac Pro TISEC</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Un parcours complet de technicien installateur en systèmes énergétiques & climatiques, 
                  validé par diplôme et expérience terrain.
                </p>
              </div>
            </div>

            {/* Carousel RGE */}
            <div className="bg-[#f8f9f4] rounded-3xl p-12 shadow-xl border border-gray-100 text-center">
              <h4 className="text-2xl font-bold text-[#03144a] mb-8">
                Nos certifications en images
              </h4>
              <CarouselRGE />
              <p className="text-gray-600 mt-8 leading-relaxed max-w-3xl mx-auto">
                Parce que la performance passe par la maîtrise, chaque qualification que nous détenons est une garantie 
                de <strong>sécurité</strong>, d&apos;<strong>expertise</strong> et de <strong>qualité</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir ClimGO */}
      <section className="py-20 bg-gradient-to-r from-[#03144a]/5 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#f8f9f4] rounded-3xl p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-[#03144a] mb-6">
                  Pourquoi choisir un artisan RGE ?
                </h3>
                <p className="text-xl text-gray-600">
                  À Marcheprime pour vos travaux
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Faire appel à un artisan RGE à Marcheprime, c&apos;est s&apos;assurer d&apos;un travail reconnu par l&apos;État, 
                    éligible aux aides (MaPrimeRénov&apos;, CEE) et respectueux des normes.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Chez ClimGO, chaque projet est réalisé avec méthode, dans le respect de votre logement 
                    et des performances énergétiques attendues.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                  <h4 className="text-xl font-bold text-[#03144a] mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Nos avantages RGE
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Éligibilité aux aides d&apos;État</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Respect des normes environnementales</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Expertise certifiée</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Installations performantes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center bg-gradient-to-r from-[#03144a]/5 to-blue-50 rounded-2xl p-8">
                <p className="text-xl font-semibold text-[#03144a] leading-relaxed">
                  Que ce soit pour l&apos;installation d&apos;une pompe à chaleur, d&apos;un climatiseur ou d&apos;un chauffe-eau, 
                  nous vous accompagnons avec <strong>rigueur</strong>, <strong>transparence</strong> et <strong>efficacité</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-[#03144a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à travailler avec un artisan RGE ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez ClimGO dès maintenant pour votre projet de chauffage ou climatisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="tel:0766460008" className="bg-[#f8f9f4] text-[#03144a] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>07 66 46 00 08</span>
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#f8f9f4] hover:text-[#03144a] transition-all duration-300 flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Demander un devis</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const CarouselMaaf: React.FC = () => {
  const images = [
    { src: "/logoMaf.jpg", alt: "MAAF" },
    { src: "/GarantieDecenale.png", alt: "Garantie Décennale" },
  ];

  const [index, setIndex] = React.useState(0);
  const [isFading, setIsFading] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 300);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="carousel-container relative min-h-[200px] max-w-lg mx-auto flex items-center justify-center bg-gray-50 rounded-2xl p-4">
      <Image
        width={400}
        height={200}
        src={images[index].src}
        alt={images[index].alt}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain 
          max-h-32 max-w-xs w-auto h-auto select-none ${isFading ? "opacity-0" : "opacity-100"}`}
        style={{
          transition: "opacity 300ms ease-in-out",
        }}
      />
    </div>
  );
};


const CarouselRGE: React.FC = () => {
  const images: { src: string; alt: string }[] = [
    { src: "/LogoSogotec.png", alt: "Logo RGE Sogotec" },
    { src: "/RGEQualiPac.png", alt: "Logo RGE QualiPAC" },
  ];

  const [index, setIndex] = React.useState(0);
  const [isFading, setIsFading] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 300); // fade out 300ms
    }, 4000); // 4s per image

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="carousel-container relative min-h-[200px] max-w-lg mx-auto flex items-center justify-center bg-gray-50 rounded-2xl p-4">
      <Image
        width={400}
        height={200}
        src={images[index].src}
        alt={images[index].alt}
        className={`carousel-image absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain 
          max-h-32 max-w-xs w-auto h-auto select-none ${isFading ? 'opacity-0' : 'opacity-100'}`}
        style={{
          transition: 'opacity 300ms ease-in-out',
        }}
      />
    </div>
  );
};
