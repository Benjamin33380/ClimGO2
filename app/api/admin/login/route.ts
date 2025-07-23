import { NextRequest, NextResponse } from 'next/server'
import { authenticateAdmin, generateJWT, createAdminSession } from '@/lib/auth'
import { checkBruteforceAdvanced, recordFailedAttemptAdvanced, recordSuccessfulAttemptAdvanced, setSessionCookie } from '@/lib/bruteforce'

export async function POST(request: NextRequest) {
  try {
    // Vérifier le bruteforce avant toute tentative
    const bruteforceCheck = await checkBruteforceAdvanced(request)
    
    if (bruteforceCheck.blocked) {
      return NextResponse.json(
        { 
          error: 'Trop de tentatives de connexion. Veuillez réessayer dans quelques minutes.',
          remainingTime: bruteforceCheck.remainingTime 
        },
        { status: 429 }
      )
    }

    const { email, password } = await request.json()

    // Validation des données
    if (!email || !password) {
      await recordFailedAttemptAdvanced(request)
      return NextResponse.json(
        { error: 'Email et mot de passe requis' },
        { status: 400 }
      )
    }

    // Authentification
    const admin = await authenticateAdmin(email, password)

    if (!admin) {
      const failedAttempt = await recordFailedAttemptAdvanced(request)
      
      if (failedAttempt.blocked) {
        return NextResponse.json(
          { 
            error: 'Trop de tentatives de connexion. Votre compte est temporairement bloqué.',
            remainingTime: failedAttempt.remainingTime 
          },
          { status: 429 }
        )
      }
      
      return NextResponse.json(
        { error: 'Email ou mot de passe incorrect' },
        { status: 401 }
      )
    }

    // Connexion réussie
    await recordSuccessfulAttemptAdvanced(request)

    // Générer le token JWT
    const token = generateJWT(admin)

    // Créer la session
    const userAgent = request.headers.get('user-agent') || undefined
    await createAdminSession(admin.id, token, undefined, userAgent)

    // Créer la réponse avec les cookies
    const response = NextResponse.json({
      success: true,
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role
      },
      token
    })

    // Définir le cookie de session
    setSessionCookie(response)

    return response

  } catch (error) {
    console.error('Erreur lors de la connexion admin:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
} 