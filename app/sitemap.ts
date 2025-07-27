// app/sitemap.ts
import { MetadataRoute } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Fonction pour récupérer tous les articles publiés
async function getAllPublishedArticles() {
  try {
    const articles = await prisma.article.findMany({
      where: {
        published: true
      },
      select: {
        slug: true,
        updatedAt: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return articles
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error)
    return []
  } finally {
    await prisma.$disconnect()
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.climgo.fr'
  
  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/aides-etat`,
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/chauffage`,
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/climatisation`,
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/eau-chaude-sanitaire`,
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/maintenance`,
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2025-07-23'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nos-services`,
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/zones-desservies`,
      lastModified: new Date('2025-07-23'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]

  // Récupération des articles dynamiques
  const articles = await getAllPublishedArticles()
  
  // Génération des URLs d'articles dynamiques
  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.updatedAt > article.createdAt ? article.updatedAt : article.createdAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Retour du sitemap complet
  return [...staticPages, ...blogPages]
}

// Si tu préfères utiliser app/sitemap.xml/route.ts (alternative)
/*
export async function GET() {
  const baseUrl = 'https://www.climgo.fr'
  
  const articles = await getAllPublishedArticles()
  
  const staticUrls = `
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>2025-07-17</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${baseUrl}/blog</loc>
      <lastmod>2025-07-23</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>
    <!-- Ajoute tes autres pages statiques ici -->
  `
  
  const blogUrls = articles.map((article) => `
    <url>
      <loc>${baseUrl}/blog/${article.slug}</loc>
      <lastmod>${(article.updatedAt > article.createdAt ? article.updatedAt : article.createdAt).toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticUrls}
    ${blogUrls}
  </urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
*/