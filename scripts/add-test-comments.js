const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addTestComments() {
  try {
    // Récupérer le premier article publié
    const article = await prisma.article.findFirst({
      where: {
        published: true
      }
    });

    if (!article) {
      console.log('Aucun article publié trouvé');
      return;
    }

    const testComments = [
      {
        content: 'Article très informatif ! J\'ai appris beaucoup de choses sur les pompes à chaleur.',
        author: 'Marie Dupont',
        email: 'marie.dupont@email.com',
        articleId: article.id,
        approved: true
      },
      {
        content: 'Merci pour ces conseils pratiques. Je vais contacter ClimGO pour un devis.',
        author: 'Jean Martin',
        email: 'jean.martin@email.com',
        articleId: article.id,
        approved: true
      },
      {
        content: 'Excellente explication des avantages de la climatisation réversible.',
        author: 'Sophie Bernard',
        email: 'sophie.bernard@email.com',
        articleId: article.id,
        approved: true
      },
      {
        content: 'J\'ai une question : quel est le coût moyen d\'une installation ?',
        author: 'Pierre Leroy',
        email: 'pierre.leroy@email.com',
        articleId: article.id,
        approved: true
      },
      {
        content: 'Très bon article, j\'ai partagé sur les réseaux sociaux !',
        author: 'Lucie Moreau',
        email: 'lucie.moreau@email.com',
        articleId: article.id,
        approved: true
      }
    ];

    for (const comment of testComments) {
      await prisma.comment.create({
        data: comment
      });
      console.log(`Commentaire ajouté : ${comment.author}`);
    }

    console.log('Tous les commentaires de test ont été ajoutés avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'ajout des commentaires de test:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addTestComments(); 