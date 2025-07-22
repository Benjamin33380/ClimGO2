

// app/zzzz/layout.tsx

import React from 'react';

export const metadata = {
  title: 'Erreur 404 - ClimGO',
  description: 'Page non trouvée - ClimGO',
};

export default function ZzzzLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}