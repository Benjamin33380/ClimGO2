import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client', 'prisma'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@prisma/client')
    }
    return config
  },
  // Configuration pour éviter les conflits avec les bloqueurs et forcer le rechargement des styles
  experimental: {
    optimizePackageImports: ['@uiw/react-md-editor'],
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'climgo.fr',
          },
        ],
        destination: 'https://www.climgo.fr/:path*',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/chauffage-climatisation-mios',
        destination: '/zones-desservies/mios',
      },
      {
        source: '/chauffage-climatisation-marcheprime',
        destination: '/zones-desservies/marcheprime',
      },
      {
        source: '/chauffage-climatisation-biganos',
        destination: '/zones-desservies/biganos',
      },
      {
        source: '/chauffage-climatisation-arcachon',
        destination: '/zones-desservies/arcachon',
      },
      {
        source: '/chauffage-climatisation-bordeaux',
        destination: '/zones-desservies/bordeaux',
      },
      {
        source: '/chauffage-climatisation-audenge',
        destination: '/zones-desservies/audenge',
      },
      {
        source: '/chauffage-climatisation-pessac',
        destination: '/zones-desservies/pessac',
      },
      {
        source: '/chauffage-climatisation-merignac',
        destination: '/zones-desservies/merignac',
      },
      {
        source: '/chauffage-climatisation-gujan-mestras',
        destination: '/zones-desservies/gujan-mestras',
      },
      {
        source: '/chauffage-climatisation-la-teste-de-buch',
        destination: '/zones-desservies/la-teste-de-buch',
      },
      {
        source: '/chauffage-climatisation-le-teich',
        destination: '/zones-desservies/le-teich',
      },
      {
        source: '/chauffage-climatisation-saint-jean-d-illac',
        destination: '/zones-desservies/saint-jean-d-illac',
      },
      {
        source: '/chauffage-climatisation-saint-medard-en-jalles',
        destination: '/zones-desservies/saint-medard-en-jalles',
      },
      {
        source: '/chauffage-climatisation-saint-andre-de-cubzac',
        destination: '/zones-desservies/saint-andre-de-cubzac',
      },
      {
        source: '/chauffage-climatisation-salles',
        destination: '/zones-desservies/salles',
      },
      {
        source: '/chauffage-climatisation-le-barp',
        destination: '/zones-desservies/le-barp',
      },
      {
        source: '/chauffage-climatisation-cestas',
        destination: '/zones-desservies/cestas',
      },
      {
        source: '/chauffage-climatisation-villenave-d-ornon',
        destination: '/zones-desservies/villenave-d-ornon',
      },
      {
        source: '/chauffage-climatisation-gradignan',
        destination: '/zones-desservies/gradignan',
      },
      // Added missing cities
      {
        source: '/chauffage-climatisation-lanton',
        destination: '/zones-desservies/lanton',
      },
      {
        source: '/chauffage-climatisation-andernos-les-bains',
        destination: '/zones-desservies/andernos-les-bains',
      },
      {
        source: '/chauffage-climatisation-ares',
        destination: '/zones-desservies/ares',
      },
      {
        source: '/chauffage-climatisation-lege-cap-ferret',
        destination: '/zones-desservies/lege-cap-ferret',
      },
      {
        source: '/chauffage-climatisation-belin-beliet',
        destination: '/zones-desservies/belin-beliet',
      },
      {
        source: '/chauffage-climatisation-sanguinet',
        destination: '/zones-desservies/sanguinet',
      },
      {
        source: '/chauffage-climatisation-parentis-en-born',
        destination: '/zones-desservies/parentis-en-born',
      },
      {
        source: '/chauffage-climatisation-biscarrosse',
        destination: '/zones-desservies/biscarrosse',
      },
      {
        source: '/chauffage-climatisation-cazaux',
        destination: '/zones-desservies/cazaux',
      },
      {
        source: '/chauffage-climatisation-mimizan',
        destination: '/zones-desservies/mimizan',
      },
      {
        source: '/chauffage-climatisation-talence',
        destination: '/zones-desservies/talence',
      },
      {
        source: '/chauffage-climatisation-canejan',
        destination: '/zones-desservies/canejan',
      },
      {
        source: '/chauffage-climatisation-villenave-d-ornon',
        destination: '/zones-desservies/villenave-d-ornon',
      },
      {
        source: '/chauffage-climatisation-begles',
        destination: '/zones-desservies/begles',
      },
      {
        source: '/chauffage-climatisation-le-porge',
        destination: '/zones-desservies/le-porge',
      },
      {
        source: '/chauffage-climatisation-lacanau',
        destination: '/zones-desservies/lacanau',
      },
      {
        source: '/chauffage-climatisation-le-temple',
        destination: '/zones-desservies/le-temple',
      },
      {
        source: '/chauffage-climatisation-saint-loubes',
        destination: '/zones-desservies/saint-loubes',
      },
      {
        source: '/chauffage-climatisation-saint-selve',
        destination: '/zones-desservies/saint-selve',
      },

      {
        source: '/chauffage-climatisation-saint-aubin-de-medoc',
        destination: '/zones-desservies/saint-aubin-de-medoc',
      },
      {
        source: '/chauffage-climatisation-saucats',
        destination: '/zones-desservies/saucats',
      },
      {
        source: '/chauffage-climatisation-martignas-sur-jalle',
        destination: '/zones-desservies/martignas-sur-jalle',
      },
      {
        source: '/chauffage-climatisation-saint-savin',
        destination: '/zones-desservies/saint-savin',
      },
    ];
  },
  // Headers pour éviter les blocages et CSP
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
