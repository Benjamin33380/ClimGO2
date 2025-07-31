"use client";
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  ville: string;
  backgroundImage: string;
}

export default function Hero({ ville, backgroundImage }: HeroProps) {
  return (
    <div
  className="relative w-full h-[100vh] bg-cover bg-center bg-fixed flex items-center justify-center text-white"
  style={{ backgroundImage: `url(${backgroundImage})` }}

    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <div className="relative z-20 text-center px-4 md:px-8 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
          ClimGO à {ville}
        </h2>
        <h1 className="text-2xl md:text-3xl font-medium mb-6">
          Chauffage, climatisation et pompe à chaleur, 100% confort.
        </h1>
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