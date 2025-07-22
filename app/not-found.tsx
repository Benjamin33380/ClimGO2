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
    </div>
  );
}