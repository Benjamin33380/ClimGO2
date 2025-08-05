'use client';

import { useEffect } from 'react';

export default function NotFoundPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        background: '#F8F9F4',
        fontSize: '2rem',
        fontWeight: 'bold',
      }}
    >
      Erreur 404 - Page non trouvée
    </div>
  );
}