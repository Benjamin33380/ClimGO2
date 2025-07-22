"use client";
import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bgPage my-20">
      {/* Hero Section */}
      <section className="py-20 bgPage">
        <div className="flex justify-center mb-14 w-full">
        <Image src="/Logo + nom.png" alt="ClimGO" width={1000} height={500} className="w-fit h-auto" />
        </div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold climText mb-6">
            À propos de ClimGO
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold climText mb-8">
            Votre artisan RGE en chauffage & climatisation à Marcheprime
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bgPage">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Introduction */}
            <div className="p-8 mb-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>ClimGO</strong>, artisan RGE à Marcheprime, est une entreprise spécialisée dans l&apos;installation, 
                la mise en service et la maintenance de systèmes thermiques et énergétiques sur mesure.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Basée en Gironde, nous intervenons auprès des particuliers et des professionnels avec un haut niveau d&apos;exigence.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Chaque chantier est réalisé avec méthode : <strong>étude technique rigoureuse</strong>, 
                <strong> dimensionnement précis</strong>, <strong>installation soignée</strong> et <strong>suivi assuré</strong>.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Nous sommes certifiés <strong>RGE</strong>, titulaires de l&apos;attestation fluides frigorigènes et assurés en décennale (MAAF).
                Notre objectif : garantir des systèmes <strong>durables</strong>, <strong>performants</strong> et <strong>conformes aux normes en vigueur</strong>, 
                pour un confort maîtrisé et une efficacité énergétique optimale.
              </p>
            </div>

            {/* Garanties professionnelles */}
            <div className="p-8 mb-12">
              <h3 className="text-2xl font-bold climText mb-6">
                Garanties professionnelles avec votre artisan RGE à Marcheprime
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Chez ClimGO, chaque chantier est couvert par une assurance responsabilité civile professionnelle et une garantie décennale.
              </p>

              <h4 className="text-xl font-semibold climText mb-4">
                Qu&apos;est-ce que ça change pour vous ?
              </h4>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Toutes nos installations – chauffage, climatisation, eau chaude sanitaire, ventilation – 
                sont assurées pendant <strong>10 ans</strong> contre les dommages liés à notre intervention.
              </p>

              <div className="bg-[#F8F9F4] rounded-lg p-6 mb-6">
                <h5 className="font-semibold climText mb-3">Informations d&apos;assurance :</h5>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Assureur :</strong> MAAF Assurances</p>
                  <p><strong>Contrat n° :</strong> 133144624 U MCE – 001</p>
                  <p><strong>Activités couvertes :</strong> Plomberie, chauffage, climatisation, ventilation, énergies renouvelables.</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Parce qu&apos;un bon artisan, c&apos;est aussi un artisan couvert. Et chez ClimGO, artisan RGE basé à Marcheprime, 
                la protection du client fait partie de l&apos;engagement pro, pas d&apos;une option.
              </p>
            </div>
            
            <CarouselMaaf />
            
            {/* Certifications */}
            <div className="p-8 mb-12">
              <h3 className="text-2xl font-bold climText mb-6">
                Nos certifications d&apos;artisan RGE à Marcheprime
              </h3>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Chez ClimGO, artisan RGE basé à Marcheprime, chaque intervention repose sur des compétences certifiées 
                dans les domaines du génie climatique, de la thermique du bâtiment et des énergies renouvelables.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* QualiPAC RGE */}
                <div className="bg-[#F8F9F4] rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="climBg rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold climText">QualiPAC RGE</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Certification indispensable pour installer des pompes à chaleur et faire bénéficier nos clients 
                    des aides de l&apos;État (MaPrimeRénov&apos;, CEE…). Elle atteste d&apos;une excellence énergétique reconnue.
                  </p>
                </div>

                {/* Attestation fluides frigorigènes */}
                <div className="bg-[#F8F9F4] rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="climBg rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold climText">Attestation fluides frigorigènes</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Obligatoire pour manipuler les fluides frigorigènes en toute sécurité, cette certification garantit 
                    une installation conforme à la réglementation environnementale.
                  </p>
                </div>

                {/* Habilitation électrique BR */}
                <div className="bg-[#F8F9F4] rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="climBg rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold climText">Habilitation électrique BR</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Indispensable pour intervenir en toute sécurité sur les circuits électriques de vos climatiseurs, 
                    chauffe-eaux et pompes à chaleur.
                  </p>
                </div>

                {/* BEP & Bac Pro TISEC */}
                <div className="bg-[#F8F9F4] rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="climBg rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold climText">BEP & Bac Pro TISEC</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Un parcours complet de technicien installateur en systèmes énergétiques & climatiques, 
                    validé par diplôme et expérience terrain.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mt-8 leading-relaxed">
                Parce que la performance passe par la maîtrise, chaque qualification que nous détenons est une garantie 
                de <strong>sécurité</strong>, d&apos;<strong>expertise</strong> et de <strong>qualité</strong>.
              </p>
            </div>

            {/* Pourquoi choisir ClimGO */}
            <CarouselRGE />

            <div className="p-8">
              <h3 className="text-2xl font-bold climText mb-6">
                Pourquoi choisir un artisan RGE à Marcheprime pour vos travaux ?
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Faire appel à un artisan RGE à Marcheprime, c&apos;est s&apos;assurer d&apos;un travail reconnu par l&apos;État, 
                éligible aux aides (MaPrimeRénov&apos;, CEE) et respectueux des normes.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Chez ClimGO, chaque projet est réalisé avec méthode, dans le respect de votre logement 
                et des performances énergétiques attendues.
              </p>

              <p className="text-lg font-semibold climText">
                Que ce soit pour l&apos;installation d&apos;une pompe à chaleur, d&apos;un climatiseur ou d&apos;un chauffe-eau, 
                nous vous accompagnons avec <strong>rigueur</strong>, <strong>transparence</strong> et <strong>efficacité</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
} 

const CarouselMaaf: React.FC = () => {
    const images: { src: string; alt: string }[] = [
      { src: "/logoMaf.jpg", alt: "MAAF" },
      { src: "/GarantieDecenale.png", alt: "Garantie Decennale" },
    ];
    
    const [index, setIndex] = React.useState(0);
    const [isFading, setIsFading] = React.useState(false);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setIsFading(true);
        
        // Délai pour le fade out, puis changement d'image
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % images.length);
          setIsFading(false);
        }, 300); // 300ms pour le fade out
        
      }, 4000); // 5 secondes par image
      
      return () => clearInterval(timer);
    }, [images.length]); // Seulement dépendant de images.length
  
    return (
      <div className="carousel-container relative min-h-[320px] max-w-2xl mx-auto flex items-center justify-center">
          <Image
            width={1000}
            height={500}
            src={images[index].src}
            alt={images[index].alt}
            className={`carousel-image ${isFading ? 'fade-out' : 'fade-in'} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain 
              max-h-32 max-w-xs 
              sm:max-h-40 sm:max-w-md 
              md:max-h-[320px] md:max-w-[1000px] 
              w-auto h-auto select-none`}
            style={{
              opacity: isFading ? 0 : 1,
              transition: 'opacity 300ms ease-in-out',
            }}
          />
        </div>
    );
  };

  const CarouselRGE: React.FC = () => {
    const images: { src: string; alt: string }[] = [
      { src: "/LogoSogotec.png", alt: "RGE" },
      { src: "/RGEQualiPac.png", alt: "RGE" },
    ];
    
    const [index, setIndex] = React.useState(0);
    const [isFading, setIsFading] = React.useState(false);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setIsFading(true);
        
        // Délai pour le fade out, puis changement d'image
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % images.length);
          setIsFading(false);
        }, 300); // 300ms pour le fade out
        
      }, 4000); // 5 secondes par image
      
      return () => clearInterval(timer);
    }, [images.length]); // Seulement dépendant de images.length
  
    return (
      <div className="carousel-container relative min-h-[320px] max-w-2xl mx-auto flex items-center justify-center">
          <Image
            width={1000}
            height={500}
            src={images[index].src}
            alt={images[index].alt}
            className={`carousel-image ${isFading ? 'fade-out' : 'fade-in'} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain 
              max-h-32 max-w-xs 
              sm:max-h-40 sm:max-w-md 
              md:max-h-[320px] md:max-w-[1000px] 
              w-auto h-auto select-none`}
            style={{
              opacity: isFading ? 0 : 1,
              transition: 'opacity 300ms ease-in-out',
            }}
          />
        </div>
    );
  };