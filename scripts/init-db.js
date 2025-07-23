const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Initialisation de la base de données...')

  try {
    // Créer l'admin initial
    const existingAdmin = await prisma.admin.findFirst()
    
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('benclimgo06', 12)
      
      const admin = await prisma.admin.create({
        data: {
          email: 'contact@climgo.fr',
          password: hashedPassword,
          name: 'Administrateur ClimGo',
          role: 'super_admin',
          isActive: true
        }
      })
      
      console.log('✅ Admin initial créé:')
      console.log(`   Email: ${admin.email}`)
      console.log(`   Mot de passe: admin123`)
      console.log(`   ID: ${admin.id}`)
    } else {
      console.log('ℹ️  Admin existe déjà:', existingAdmin.email)
    }

    // Créer quelques articles de test
    const existingArticles = await prisma.article.count()
    
    if (existingArticles === 0) {
      const admin = await prisma.admin.findFirst()
      
      if (admin) {
        const articles = [
          {
            title: 'Bienvenue sur le blog ClimGo',
            content: `
              <h1>Bienvenue sur le blog ClimGo</h1>
              <p>Ceci est le premier article de notre blog. Ici vous trouverez des conseils, des actualités et des informations sur la climatisation et le chauffage.</p>
              <h2>Nos services</h2>
              <ul>
                <li>Installation de climatisation</li>
                <li>Maintenance de systèmes de chauffage</li>
                <li>Réparation d'urgence</li>
                <li>Conseils en efficacité énergétique</li>
              </ul>
              <p>N'hésitez pas à nous contacter pour plus d'informations !</p>
            `,
            slug: 'bienvenue-blog-climgo',
            excerpt: 'Découvrez notre blog dédié à la climatisation et au chauffage. Conseils d\'experts et actualités du secteur.',
            published: true,
            metaTitle: 'Bienvenue sur le blog ClimGo - Conseils Climatisation',
            metaDesc: 'Découvrez notre blog dédié à la climatisation et au chauffage. Conseils d\'experts et actualités du secteur.',
            metaKeywords: 'climatisation, chauffage, blog, conseils, ClimGo',
            adminId: admin.id
          },
          {
            title: 'Comment choisir sa climatisation en 2024',
            content: `
              <h1>Comment choisir sa climatisation en 2024</h1>
              <p>Le choix d'une climatisation est une décision importante qui impacte votre confort et votre budget énergétique.</p>
              <h2>Les critères à considérer</h2>
              <ul>
                <li><strong>La puissance :</strong> Calculée selon la surface et l'orientation</li>
                <li><strong>L'efficacité énergétique :</strong> Privilégiez les appareils classe A+++</li>
                <li><strong>Le niveau sonore :</strong> Important pour le confort</li>
                <li><strong>Les fonctionnalités :</strong> Inverter, purification d'air, etc.</li>
              </ul>
              <h2>Les différents types</h2>
              <p>Il existe plusieurs types de climatisation :</p>
              <ul>
                <li>Split mural</li>
                <li>Cassette</li>
                <li>Gainable</li>
                <li>Console</li>
              </ul>
              <p>Nos experts ClimGo sont là pour vous conseiller dans votre choix !</p>
            `,
            slug: 'choisir-climatisation-2024',
            excerpt: 'Guide complet pour choisir sa climatisation en 2024. Critères, types d\'appareils et conseils d\'experts.',
            published: true,
            metaTitle: 'Comment choisir sa climatisation en 2024 - Guide complet',
            metaDesc: 'Guide complet pour choisir sa climatisation en 2024. Critères, types d\'appareils et conseils d\'experts ClimGo.',
            metaKeywords: 'climatisation, choix, guide, 2024, ClimGo',
            adminId: admin.id
          }
        ]

        for (const article of articles) {
          await prisma.article.create({
            data: article
          })
        }
        
        console.log('✅ Articles de test créés')
      }
    } else {
      console.log(`ℹ️  ${existingArticles} articles existent déjà`)
    }

    console.log('✅ Initialisation terminée avec succès !')
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 