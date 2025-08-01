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
