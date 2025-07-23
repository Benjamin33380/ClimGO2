const nodemailer = require('nodemailer')
require('dotenv').config()

async function testSMTP() {
  try {
    console.log('🧪 Test de la configuration SMTP...')
    
    // Afficher la configuration (sans les mots de passe)
    console.log('\n📋 Configuration SMTP:')
    console.log('Host:', process.env.SMTP_HOST || 'ssl0.ovh.net')
    console.log('Port:', process.env.SMTP_PORT || '465')
    console.log('User:', process.env.SMTP_USER ? '✅ Configuré' : '❌ Manquant')
    console.log('Pass:', process.env.SMTP_PASS ? '✅ Configuré' : '❌ Manquant')
    console.log('Admin Email:', process.env.ADMIN_EMAIL || 'contact@climgo.fr')

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('\n❌ Erreur: SMTP_USER et SMTP_PASS sont requis dans les variables d\'environnement')
      console.log('💡 Ajoutez ces variables dans votre fichier .env:')
      console.log('SMTP_USER=contact@climgo.fr')
      console.log('SMTP_PASS=votre-mot-de-passe')
      return
    }

    // Créer le transporteur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'ssl0.ovh.net',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    console.log('\n🔧 Test de connexion SMTP...')
    
    // Tester la connexion
    await transporter.verify()
    console.log('✅ Connexion SMTP réussie !')

    // Tester l'envoi d'un email
    console.log('\n📧 Test d\'envoi d\'email...')
    
    const mailOptions = {
      from: `"Test ClimGO" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || 'contact@climgo.fr',
      subject: 'Test SMTP - ClimGO',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #03144a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Test SMTP - ClimGO</h1>
          </div>
          
          <div style="background-color: #f8f8f7; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #03144a; margin-bottom: 20px;">Configuration SMTP Testée</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Host:</strong> ${process.env.SMTP_HOST || 'ssl0.ovh.net'}</p>
              <p><strong>Port:</strong> ${process.env.SMTP_PORT || '465'}</p>
              <p><strong>User:</strong> ${process.env.SMTP_USER}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #03144a; font-size: 14px;">
                <strong>✅ Configuration SMTP fonctionnelle !</strong><br>
                Le système d'email ClimGO est prêt à être utilisé.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>Test automatique - ClimGO</p>
          </div>
        </div>
      `,
      text: `
Test SMTP - ClimGO

Configuration SMTP Testée:
- Host: ${process.env.SMTP_HOST || 'ssl0.ovh.net'}
- Port: ${process.env.SMTP_PORT || '465'}
- User: ${process.env.SMTP_USER}
- Date: ${new Date().toLocaleString('fr-FR')}

✅ Configuration SMTP fonctionnelle !
Le système d'email ClimGO est prêt à être utilisé.

---
Test automatique - ClimGO
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Email de test envoyé avec succès !')
    console.log('Message ID:', info.messageId)
    console.log('URL:', info.response)

  } catch (error) {
    console.error('❌ Erreur lors du test SMTP:', error.message)
    
    if (error.code === 'EAUTH') {
      console.log('\n💡 Problème d\'authentification:')
      console.log('- Vérifiez que SMTP_USER et SMTP_PASS sont corrects')
      console.log('- Vérifiez que le compte email autorise les connexions SMTP')
    } else if (error.code === 'ECONNECTION') {
      console.log('\n💡 Problème de connexion:')
      console.log('- Vérifiez que SMTP_HOST et SMTP_PORT sont corrects')
      console.log('- Vérifiez votre connexion internet')
    } else {
      console.log('\n💡 Autres solutions possibles:')
      console.log('- Vérifiez que les variables d\'environnement sont chargées')
      console.log('- Redémarrez le serveur après modification du .env')
    }
  }
}

testSMTP() 