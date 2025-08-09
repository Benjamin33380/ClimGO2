const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addTestCommentsAndRatings() {
  try {
    console.log('🌱 Ajout des commentaires et ratings de test...');

    // Récupérer tous les articles publiés
    const articles = await prisma.article.findMany({
      where: { published: true },
      select: { id: true, title: true },
    });

    if (articles.length === 0) {
      console.log('⚠️  Aucun article publié trouvé. Créez d\'abord des articles.');
      return;
    }

    const comments = [
      {
        content: 'Article très informatif ! J\'ai appris beaucoup de choses sur l\'entretien de ma climatisation.',
        author: 'Marie Dupont',
        email: 'marie.dupont@email.com',
      },
      {
        content: 'Conseils pratiques et faciles à appliquer. Merci pour ces informations utiles.',
        author: 'Jean Martin',
        email: 'jean.martin@email.com',
      },
      {
        content: 'Excellente explication des économies d\'énergie possibles. Je vais appliquer ces conseils.',
        author: 'Sophie Bernard',
        email: 'sophie.bernard@email.com',
      },
      {
        content: 'Très clair et bien structuré. Parfait pour un débutant comme moi.',
        author: 'Pierre Leroy',
        email: 'pierre.leroy@email.com',
      },
      {
        content: 'Article complet avec des conseils que je n\'avais jamais entendus. Très utile !',
        author: 'Claire Moreau',
        email: 'claire.moreau@email.com',
      },
    ];

    const ratings = [4, 5, 4, 5, 4]; // Notes de 1 à 5

    for (const article of articles) {
      console.log(`📝 Ajout de commentaires pour l'article: ${article.title}`);

      // Ajouter 2-3 commentaires par article
      for (let i = 0; i < Math.min(3, comments.length); i++) {
        const comment = comments[i];
        const rating = ratings[i];

        // Créer le commentaire
        await prisma.comment.create({
          data: {
            content: comment.content,
            author: comment.author,
            email: comment.email,
            articleId: article.id,
            approved: true, // Approuver automatiquement pour les tests
          },
        });

        // Créer le rating
        await prisma.rating.create({
          data: {
            rating: rating,
            articleId: article.id,
          },
        });

        console.log(`✅ Commentaire et rating ajoutés pour ${comment.author}`);
      }
    }

    console.log('🎉 Commentaires et ratings de test ajoutés avec succès !');
  } catch (error) {
    console.error('❌ Erreur lors de l\'ajout des commentaires et ratings:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addTestCommentsAndRatings(); 