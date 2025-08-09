const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addTestCategories() {
  try {
    console.log('🌱 Ajout des catégories de test...');

    const categories = [
      {
        name: 'Chauffage',
        slug: 'chauffage',
        description: 'Conseils et guides sur l\'installation et la maintenance des systèmes de chauffage',
        color: '#EF4444', // Rouge
        isActive: true,
      },
      {
        name: 'Climatisation',
        slug: 'climatisation',
        description: 'Tout sur la climatisation : installation, entretien et optimisation',
        color: '#3B82F6', // Bleu
        isActive: true,
      },
      {
        name: 'Maintenance',
        slug: 'maintenance',
        description: 'Guides de maintenance préventive et curative pour vos équipements',
        color: '#10B981', // Vert
        isActive: true,
      },
      {
        name: 'Économies d\'énergie',
        slug: 'economies-energie',
        description: 'Conseils pour réduire votre consommation énergétique',
        color: '#F59E0B', // Orange
        isActive: true,
      },
      {
        name: 'Aides et subventions',
        slug: 'aides-subventions',
        description: 'Informations sur les aides financières disponibles',
        color: '#8B5CF6', // Violet
        isActive: true,
      },
      {
        name: 'Actualités',
        slug: 'actualites',
        description: 'Actualités du secteur du chauffage et de la climatisation',
        color: '#EC4899', // Rose
        isActive: true,
      },
    ];

    for (const category of categories) {
      const existingCategory = await prisma.category.findUnique({
        where: { slug: category.slug },
      });

      if (!existingCategory) {
        await prisma.category.create({
          data: category,
        });
        console.log(`✅ Catégorie "${category.name}" créée`);
      } else {
        console.log(`⚠️  Catégorie "${category.name}" existe déjà`);
      }
    }

    console.log('🎉 Catégories de test ajoutées avec succès !');
  } catch (error) {
    console.error('❌ Erreur lors de l\'ajout des catégories:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addTestCategories(); 