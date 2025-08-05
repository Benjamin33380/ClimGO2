"use client";
import Image from 'next/image';
import React from 'react';

export default function Partenaires() {
  return (
    <section className="py-20 bgPage">
      <div className="container mx-auto px-4">
        <CarouselMarques />
      </div>
    </section>
  );
}
const CarouselMarques: React.FC = () => {
  const images: { src: string; alt: string; url: string }[] = [
    { src: "/DaikinLogo.png", alt: "Daikin", url: "https://www.daikin.fr" },
    { src: "/Mitsubishi-Electric-Logo.png", alt: "Mitsubishi Electric", url: "https://fr.mitsubishielectric.com" },
    { src: "/atl.png", alt: "ATL", url: "https://www.atlantic.fr" },
  ];
  
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 secondes par image
    
    return () => clearInterval(timer);
  }, [images.length]); // Seulement dépendant de images.length

  return (
    <div className="carousel-container relative min-h-[320px] max-w-2xl mx-auto flex items-center justify-center">
      <a
        href={images[index].url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          width={1000}
          height={500}
          src={images[index].src}
          alt={images[index].alt}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain 
            max-h-32 max-w-xs 
            sm:max-h-40 sm:max-w-md 
            md:max-h-[320px] md:max-w-[500px] 
            w-auto h-auto select-none 
            animate-[zoom8d_4s_ease-in-out_infinite] drop-shadow-2xl"
        />
      </a>
    </div>
  );
};