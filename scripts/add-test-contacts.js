const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function addTestContacts() {
  try {
    console.log('Ajout des demandes de contact de test...')

    const testContacts = [
      {
        prenom: 'Jean',
        nom: 'Dupont',
        email: 'jean.dupont@email.com',
        telephone: '06 12 34 56 78',
        adresse: '123 Rue de la Paix',
        ville: 'Bordeaux',
        message: 'Bonjour, je souhaite installer une climatisation dans mon salon de 25m². Pouvez-vous me faire un devis ?',
        status: 'nouveau'
      },
      {
        prenom: 'Marie',
        nom: 'Martin',
        email: 'marie.martin@email.com',
        telephone: '05 56 78 90 12',
        adresse: '456 Avenue des Champs',
        ville: 'Pessac',
        message: 'J\'ai besoin d\'un entretien de ma pompe à chaleur. Elle fait du bruit depuis quelques jours. Merci de me recontacter.',
        status: 'lu'
      },
      {
        prenom: 'Pierre',
        nom: 'Bernard',
        email: 'pierre.bernard@email.com',
        telephone: '07 89 01 23 45',
        adresse: '789 Boulevard de la République',
        ville: 'Talence',
        message: 'Bonjour, je voudrais remplacer mon ancien système de chauffage par une pompe à chaleur air/eau. Ma maison fait 120m². Pouvez-vous me conseiller ?',
        status: 'traité'
      },
      {
        prenom: 'Sophie',
        nom: 'Petit',
        email: 'sophie.petit@email.com',
        telephone: '06 34 56 78 90',
        adresse: '321 Rue du Commerce',
        ville: 'Mérignac',
        message: 'Ma climatisation ne fonctionne plus depuis hier. Il fait très chaud et j\'ai des enfants. Pouvez-vous intervenir rapidement ?',
        status: 'nouveau'
      },
      {
        prenom: 'Lucas',
        nom: 'Robert',
        email: 'lucas.robert@email.com',
        telephone: '05 67 89 01 23',
        adresse: '654 Chemin des Fleurs',
        ville: 'Gradignan',
        message: 'Je souhaite installer un plancher chauffant dans ma nouvelle maison. Pouvez-vous me faire un devis détaillé ?',
        status: 'lu'
      }
    ]

    for (const contact of testContacts) {
      await prisma.contactRequest.create({
        data: contact
      })
      console.log(`✅ Contact ajouté : ${contact.prenom} ${contact.nom}`)
    }

    console.log('🎉 Toutes les demandes de contact de test ont été ajoutées !')
  } catch (error) {
    console.error('❌ Erreur lors de l\'ajout des contacts:', error)
  } finally {
    await prisma.$disconnect()
  }
}

addTestContacts() 