import { NextRequest, NextResponse } from 'next/server'
import { deleteAdminSession } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (token) {
      await deleteAdminSession(token)
    }

    const response = NextResponse.json({ success: true })
    
    // Supprimer les cookies de session
    response.cookies.delete('session_id')
    response.cookies.delete('admin_token')
    
    return response

  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
} 