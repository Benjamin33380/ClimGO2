'use client';

import { useEffect } from 'react';
import { start3D } from './zzzz/scene';

export default function NotFoundPage() {
  useEffect(() => {
    start3D();
  }, []);
    
  return (
    <div
      id="zebi-scene"
      style={{
        width: '100vw',
        height: '100vh',
        background: '#000',
        overflow: 'hidden',
      }}
    />
  );
}