

'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    import('./scene').then((mod) => {
      mod.start3D();
    });
  }, []);

  return (
    <div
      id="zebi-scene"
      style={{ width: '100vw', height: '100vh', background: '#000' }}
    ></div>
  );
}