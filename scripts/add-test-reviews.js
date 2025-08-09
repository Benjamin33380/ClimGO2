const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addTestReviews() {
  try {
    const testReviews = [
      {
        fullName: "Marie Dubois",
        content: "Service exceptionnel ! L'équipe ClimGO a installé ma pompe à chaleur en une journée. Professionnels, ponctuels et très compétents. Je recommande vivement !",
        rating: 5,
        publishedDate: new Date('2024-01-15')
      },
      {
        fullName: "Pierre Martin",
        content: "Installation de climatisation parfaite. L'équipe est très professionnelle et le travail est soigné. Prix corrects et devis respecté. Très satisfait !",
        rating: 5,
        publishedDate: new Date('2024-01-10')
      },
      {
        fullName: "Sophie Bernard",
        content: "Excellent service client et intervention rapide pour la maintenance de mon chauffage. Techniciens compétents et sympathiques. Je recommande !",
        rating: 5,
        publishedDate: new Date('2024-01-08')
      },
      {
        fullName: "Jean Dupont",
        content: "Installation de ballon thermodynamique impeccable. L'équipe ClimGO est très professionnelle et le résultat dépasse mes attentes. Très satisfait !",
        rating: 5,
        publishedDate: new Date('2024-01-05')
      },
      {
        fullName: "Claire Moreau",
        content: "Service de qualité et équipe très compétente. Installation de chauffage parfaitement réalisée. Je recommande sans hésitation !",
        rating: 5,
        publishedDate: new Date('2024-01-03')
      },
      {
        fullName: "Michel Leroy",
        content: "Intervention rapide et efficace pour la réparation de ma climatisation. Techniciens professionnels et prix corrects. Très satisfait du service !",
        rating: 5,
        publishedDate: new Date('2024-01-01')
      }
    ];

    for (const review of testReviews) {
      await prisma.googleAdvice.create({
        data: review
      });
      console.log(`Avis ajouté pour ${review.fullName}`);
    }

    console.log('Tous les avis de test ont été ajoutés avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'ajout des avis:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addTestReviews(); 