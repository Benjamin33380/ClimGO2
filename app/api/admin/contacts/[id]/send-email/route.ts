import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyJWT } from '@/lib/auth'
import nodemailer from 'nodemailer'

// POST - Envoyer un email à un contact
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Vérifier l'authentification
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json({ error: 'Token d\'authentification manquant' }, { status: 401 })
    }

    const jwtPayload = verifyJWT(token)
    if (!jwtPayload) {
      return NextResponse.json({ error: 'Token invalide' }, { status: 401 })
    }

    const { subject, message } = await request.json()

    // Validation des données
    if (!subject || !message) {
      return NextResponse.json({ error: 'Sujet et message sont requis' }, { status: 400 })
    }

    // Récupérer le contact
    const resolvedParams = await params
    const contact = await prisma.contactRequest.findUnique({
      where: { id: resolvedParams.id }
    })

    if (!contact) {
      return NextResponse.json({ error: 'Contact non trouvé' }, { status: 404 })
    }

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
    console.log('🔧 Configuration SMTP Admin:', {
      host: process.env.SMTP_HOST || 'ssl0.ovh.net',
      port: process.env.SMTP_PORT || '465',
      user: process.env.SMTP_USER ? '✅ Configuré' : '❌ Manquant',
      pass: process.env.SMTP_PASS ? '✅ Configuré' : '❌ Manquant'
    })

    // Test de connexion
    await transporter.verify()
    console.log('✅ Connexion SMTP Admin réussie')

    // Formatage du message HTML
    const htmlMessage = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #03144a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">ClimGO - Réponse à votre demande</h1>
        </div>
        
        <div style="background-color: #f8f8f7; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="color: #03144a; font-size: 16px; margin-bottom: 20px;">
            Bonjour ${contact.prenom} ${contact.nom},
          </p>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #03144a; margin-top: 0;">Réponse à votre demande :</h3>
            <div style="background-color: #f8f8f7; padding: 15px; border-radius: 4px; border-left: 4px solid #03144a;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px;">
            <p style="margin: 0; color: #03144a; font-size: 14px;">
              <strong>Besoin d'aide supplémentaire ?</strong><br>
              N'hésitez pas à nous recontacter au 07 66 46 00 08 ou par email à contact@climgo.fr
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>ClimGO - Votre spécialiste en climatisation et chauffage</p>
          <p>Email envoyé le ${new Date().toLocaleDateString('fr-FR', { 
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
      from: `"ClimGO" <${process.env.SMTP_USER || 'contact@climgo.fr'}>`,
      to: contact.email,
      subject: subject,
      html: htmlMessage,
      text: `
ClimGO - Réponse à votre demande

Bonjour ${contact.prenom} ${contact.nom},

${message}

---
Besoin d'aide supplémentaire ? Contactez-nous au 05 56 00 00 00 ou par email à contact@climgo.fr

ClimGO - Votre spécialiste en climatisation et chauffage
Email envoyé le ${new Date().toLocaleDateString('fr-FR', { 
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

    // Mettre à jour le statut du contact
    await prisma.contactRequest.update({
      where: { id: resolvedParams.id },
      data: { status: 'traité' }
    })

    return NextResponse.json({ 
      message: 'Email envoyé avec succès',
      contact: { ...contact, status: 'traité' }
    })
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 })
  }
} 