import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import nodemailer from 'nodemailer'

// GET - Récupérer toutes les demandes de contact
export async function GET() {
  try {
    const contacts = await prisma.contactRequest.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ contacts })
  } catch (error) {
    console.error('Erreur lors de la récupération des contacts:', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
}

// POST - Créer une nouvelle demande de contact ET envoyer l'email
export async function POST(request: NextRequest) {
  try {
    const { prenom, nom, email, telephone, adresse, ville, message } = await request.json()

    // Validation des données
    if (!prenom || !nom || !email || !message) {
      return NextResponse.json({ error: 'Prénom, nom, email et message sont requis' }, { status: 400 })
    }

    // 1. Créer la demande de contact dans la base de données
    const contact = await prisma.contactRequest.create({
      data: {
        prenom,
        nom,
        email,
        telephone,
        adresse,
        ville,
        message,
        status: 'nouveau'
      }
    })

    // 2. Envoyer l'email de notification
    try {
      // Configuration du transporteur SMTP
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'ssl0.ovh.net',
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false
        }
      })

      // Vérifier la configuration
      console.log('🔧 Configuration SMTP:', {
        host: process.env.SMTP_HOST || 'ssl0.ovh.net',
        port: process.env.SMTP_PORT || '465',
        user: process.env.SMTP_USER ? '✅ Configuré' : '❌ Manquant',
        pass: process.env.SMTP_PASS ? '✅ Configuré' : '❌ Manquant'
      })

      // Test de connexion
      await transporter.verify()
      console.log('✅ Connexion SMTP réussie')

      // Formatage du message HTML
      const htmlMessage = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #03144a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Nouveau message de contact - ClimGO</h1>
          </div>
          
          <div style="background-color: #f8f8f7; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #03144a; margin-bottom: 20px;">Informations du contact</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #03144a; width: 30%;">Prénom :</td>
                  <td style="padding: 8px 0;">${prenom}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #03144a;">Nom :</td>
                  <td style="padding: 8px 0;">${nom}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #03144a;">Email :</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0066cc;">${email}</a></td>
                </tr>
                ${telephone ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #03144a;">Téléphone :</td>
                  <td style="padding: 8px 0;"><a href="tel:${telephone}" style="color: #0066cc;">${telephone}</a></td>
                </tr>
                ` : ''}
                ${adresse ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #03144a;">Adresse :</td>
                  <td style="padding: 8px 0;">${adresse}</td>
                </tr>
                ` : ''}
                ${ville ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #03144a;">Ville :</td>
                  <td style="padding: 8px 0;">${ville}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #03144a; margin-top: 0;">Message :</h3>
              <div style="background-color: #f8f8f7; padding: 15px; border-radius: 4px; border-left: 4px solid #03144a;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #03144a; font-size: 14px;">
                <strong>Répondez rapidement à ce prospect !</strong><br>
                Cliquez sur l'email ci-dessus pour répondre directement.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>Message envoyé automatiquement depuis le site web ClimGO</p>
            <p>Date : ${new Date().toLocaleDateString('fr-FR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
        </div>
      `

      // Options de l'email
      const mailOptions = {
        from: `"Site Web ClimGO" <${process.env.SMTP_USER || 'contact@climgo.fr'}>`,
        to: process.env.ADMIN_EMAIL || 'contact@climgo.fr',
        replyTo: email,
        subject: `Nouveau contact : ${prenom} ${nom} - ${new Date().toLocaleDateString('fr-FR')}`,
        html: htmlMessage,
        text: `
Nouveau message de contact - ClimGO

Informations du contact :
- Prénom : ${prenom}
- Nom : ${nom}
- Email : ${email}
${telephone ? `- Téléphone : ${telephone}` : ''}
${adresse ? `- Adresse : ${adresse}` : ''}
${ville ? `- Ville : ${ville}` : ''}

Message :
${message}

---
Message envoyé le ${new Date().toLocaleDateString('fr-FR', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}
        `,
      }

      // Envoi de l'email
      await transporter.sendMail(mailOptions)
      console.log('✅ Email envoyé avec succès')
    } catch (emailError) {
      console.error('❌ Erreur lors de l\'envoi de l\'email:', emailError)
      // On continue même si l'email échoue, car la demande est déjà enregistrée
    }

    return NextResponse.json({ 
      contact, 
      message: 'Demande de contact envoyée avec succès' 
    })
  } catch (error) {
    console.error('Erreur lors de la création du contact:', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
}
