'use client';

import { useEffect } from 'react';

export default function NotFoundPage() {
  useEffect(() => {
    let cleanup = () => {};
    const run = async () => {
      const { start3D } = await import('./zzzz/scene');
      start3D();
      cleanup = () => {
        const canvas = document.querySelector('canvas');
        if (canvas) canvas.remove();
      };
    };

    if (typeof window !== 'undefined') {
      run();
    }

    return cleanup;
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