import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
# Interdire l'indexation des fichiers techniques
Disallow: /_next/
Disallow: /api/
# Sitemap
Sitemap: https://www.climgo.fr/sitemap.xml
# Crawl-delay pour éviter la surcharge
Crawl-delay: 1`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}