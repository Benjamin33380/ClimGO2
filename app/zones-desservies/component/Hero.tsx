"use client";
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  ville: string;
  backgroundImage: string;
}

export default function Hero({ ville, backgroundImage }: HeroProps) {
  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center text-white overflow-hidden">
      <Image
        src={backgroundImage}
        alt={`ClimGO - Chauffage Climatisation à ${ville}`}
        fill
        priority
        quality={90}
        className="object-cover"
      />
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <div className="relative z-20 text-center px-4 md:px-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
          Chauffage, Climatisation à {ville} – ClimGO
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-6">
          100% confort. Service local certifié RGE.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link href="/contact">
            <button className="bg-white text-[#03144a] font-semibold px-6 py-3 rounded-full shadow-xl transition duration-300 transform hover:scale-105 hover:bg-[#03144a] hover:text-white">
              Obtenir un devis
            </button>
          </Link>
          <Link href="/contact">
            <Image
              src="/rge.png"
              alt="Logo RGE"
              className="w-24 h-auto mt-2 sm:mt-0 shadow-lg rounded transition duration-300 transform hover:scale-110 hover:shadow-xl"
              width={96}
              height={96}
            />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
}