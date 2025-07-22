'use client';

import { useEffect } from 'react';
import { start3D } from './zzzz/scene';

export default function NotFoundPage() {
  useEffect(() => {
    start3D();

    return () => {
      const canvas = document.querySelector('canvas');
      if (canvas) canvas.remove(); // Nettoyage du canvas à la sortie
    };
  }, []);

  return (
    <div
      id="zebi-scene"
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: '#F8F9F4',
        overflow: 'hidden',
      }}
    >
      <h1
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: "'Rubik', sans-serif",
          fontSize: '4rem',
          background: 'linear-gradient(90deg, orange, #0033cc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
          zIndex: 10,
        }}
      >
        Erreur 404
      </h1>
    </div>
  );
}