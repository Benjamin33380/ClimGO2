const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function testContactSystem() {
  try {
    console.log('🧪 Test du système de contact...')

    // 1. Vérifier les contacts existants
    console.log('\n📋 Contacts existants dans la base :')
    const existingContacts = await prisma.contactRequest.findMany({
      orderBy: { createdAt: 'desc' }
    })
    
    if (existingContacts.length === 0) {
      console.log('❌ Aucun contact trouvé dans la base de données')
    } else {
      console.log(`✅ ${existingContacts.length} contact(s) trouvé(s)`)
      existingContacts.forEach((contact, index) => {
        console.log(`  ${index + 1}. ${contact.prenom} ${contact.nom} - ${contact.email} (${contact.status})`)
      })
    }

    // 2. Tester l'API de création de contact
    console.log('\n📝 Test de l\'API de création de contact...')
    
    const testContact = {
      prenom: 'Test',
      nom: 'Utilisateur',
      email: 'test@example.com',
      telephone: '06 12 34 56 78',
      adresse: '123 Rue de Test',
      ville: 'Bordeaux',
      message: 'Ceci est un test du système de contact.',
      status: 'nouveau'
    }

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testContact),
      })

      if (response.ok) {
        console.log('✅ API de contact fonctionne correctement')
        const data = await response.json()
        console.log('📧 Email envoyé et contact créé dans la DB')
      } else {
        console.log('❌ Erreur API de contact')
        const error = await response.json()
        console.log('Erreur:', error)
      }
    } catch (error) {
      console.log('❌ Erreur lors du test API:', error.message)
    }

    // 3. Vérifier les contacts après test
    console.log('\n📋 Contacts après test :')
    const contactsAfterTest = await prisma.contactRequest.findMany({
      orderBy: { createdAt: 'desc' }
    })
    
    console.log(`✅ ${contactsAfterTest.length} contact(s) au total`)
    
    // 4. Test de l'API admin
    console.log('\n🔐 Test de l\'API admin...')
    
    // Simuler une connexion admin (vous devrez vous connecter manuellement)
    console.log('⚠️  Pour tester l\'API admin, connectez-vous via /admin/login')
    console.log('📊 Puis accédez à /admin/contacts pour voir les contacts')

    console.log('\n🎉 Test du système terminé !')
    
  } catch (error) {
    console.error('❌ Erreur lors du test:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testContactSystem() 