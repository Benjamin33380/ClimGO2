'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface BruteforceAttempt {
  id: string
  ip: string
  userAgent: string
  fingerprint: string
  attempts: number
  isBlocked: boolean
  blockedUntil: string | null
  lastAttempt: string
  browser: string | null
  os: string | null
  device: string | null
  createdAt: string
}

export default function AdminSecurityPage() {
  const [attempts, setAttempts] = useState<BruteforceAttempt[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedAttempt, setSelectedAttempt] = useState<BruteforceAttempt | null>(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    loadAttempts()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const checkAuth = async () => {
    const token = localStorage.getItem('admin_token')
    if (!token) {
      router.push('/admin/login')
      return
    }

    try {
      const response = await fetch('/api/admin/verify', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (!response.ok) {
        localStorage.removeItem('admin_token')
        localStorage.removeItem('admin_data')
        router.push('/admin/login')
      }
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'authentification:', error)
      router.push('/admin/login')
    }
  }

  const loadAttempts = async () => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch('/api/admin/security/attempts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setAttempts(data.attempts)
      }
    } catch (error) {
      console.error('Erreur lors du chargement des tentatives:', error)
    } finally {
      setLoading(false)
    }
  }

  const unblockAttempt = async (id: string) => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/admin/security/attempts/${id}/unblock`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        setSuccess('Tentative débloquée avec succès')
        loadAttempts()
      } else {
        const data = await response.json()
        setError(data.error)
      }
    } catch (error) {
      console.error('Erreur lors du déblocage:', error)
      setError('Erreur lors du déblocage')
    }
  }

  const deleteAttempt = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette tentative ?')) {
      return
    }

    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/admin/security/attempts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        setSuccess('Tentative supprimée avec succès')
        loadAttempts()
      } else {
        const data = await response.json()
        setError(data.error)
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error)
      setError('Erreur lors de la suppression')
    }
  }

  const isCurrentlyBlocked = (attempt: BruteforceAttempt) => {
    if (!attempt.isBlocked || !attempt.blockedUntil) return false
    return new Date(attempt.blockedUntil) > new Date()
  }

  const getRemainingTime = (blockedUntil: string) => {
    const now = new Date()
    const blocked = new Date(blockedUntil)
    const diff = blocked.getTime() - now.getTime()
    
    if (diff <= 0) return 'Expiré'
    
    const minutes = Math.floor(diff / 60000)
    const seconds = Math.floor((diff % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F9F4] my-48">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/admin/dashboard" className="text-blue-600 hover:text-blue-800 mr-4">
                ← Retour au dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Sécurité - Tentatives de Bruteforce</h1>
            </div>
            <div className="text-sm text-gray-500">
              {attempts.length} tentative(s) détectée(s)
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Messages */}
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
              {success}
            </div>
          )}

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Total</h3>
              <p className="text-2xl font-bold text-blue-600">{attempts.length}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Bloqués</h3>
              <p className="text-2xl font-bold text-red-600">
                {attempts.filter(a => isCurrentlyBlocked(a)).length}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Aujourd&apos;hui</h3>
              <p className="text-2xl font-bold text-yellow-600">
                {attempts.filter(a => {
                  const today = new Date()
                  const attemptDate = new Date(a.createdAt)
                  return attemptDate.toDateString() === today.toDateString()
                }).length}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Cette semaine</h3>
              <p className="text-2xl font-bold text-green-600">
                {attempts.filter(a => {
                  const weekAgo = new Date()
                  weekAgo.setDate(weekAgo.getDate() - 7)
                  const attemptDate = new Date(a.createdAt)
                  return attemptDate > weekAgo
                }).length}
              </p>
            </div>
          </div>

          {/* Liste des tentatives */}
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {attempts.map((attempt) => (
                <li key={attempt.id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">
                          {attempt.ip}
                        </h3>
                        {isCurrentlyBlocked(attempt) ? (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Bloqué ({attempt.blockedUntil && getRemainingTime(attempt.blockedUntil)})
                          </span>
                        ) : (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Actif
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {attempt.browser || 'Navigateur inconnu'} • {attempt.os || 'OS inconnu'} • {attempt.device || 'Device inconnu'}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        <strong>Tentatives :</strong> {attempt.attempts} • <strong>Fingerprint :</strong> {attempt.fingerprint.substring(0, 16)}...
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        Dernière tentative : {new Date(attempt.lastAttempt).toLocaleString('fr-FR')}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedAttempt(attempt)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Détails
                      </button>
                      {isCurrentlyBlocked(attempt) && (
                        <button
                          onClick={() => unblockAttempt(attempt.id)}
                          className="text-green-600 hover:text-green-800 text-sm font-medium"
                        >
                          Débloquer
                        </button>
                      )}
                      <button
                        onClick={() => deleteAttempt(attempt.id)}
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {attempts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucune tentative de bruteforce détectée.</p>
            </div>
          )}
        </div>
      </main>

      {/* Modal de détails */}
      {selectedAttempt && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Détails de la tentative
                </h3>
                <button
                  onClick={() => setSelectedAttempt(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Informations de base</h4>
                  <p className="text-sm text-gray-600">
                    <strong>IP :</strong> {selectedAttempt.ip}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Fingerprint :</strong> {selectedAttempt.fingerprint}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Tentatives :</strong> {selectedAttempt.attempts}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Statut :</strong> {isCurrentlyBlocked(selectedAttempt) ? 'Bloqué' : 'Actif'}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900">Informations techniques</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Navigateur :</strong> {selectedAttempt.browser || 'Inconnu'}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Système :</strong> {selectedAttempt.os || 'Inconnu'}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Appareil :</strong> {selectedAttempt.device || 'Inconnu'}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>User-Agent :</strong> {selectedAttempt.userAgent}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900">Horodatage</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Créé le :</strong> {new Date(selectedAttempt.createdAt).toLocaleString('fr-FR')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Dernière tentative :</strong> {new Date(selectedAttempt.lastAttempt).toLocaleString('fr-FR')}
                  </p>
                  {selectedAttempt.blockedUntil && (
                    <p className="text-sm text-gray-600">
                      <strong>Bloqué jusqu&apos;au :</strong> {new Date(selectedAttempt.blockedUntil).toLocaleString('fr-FR')}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedAttempt(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Fermer
                </button>
                {isCurrentlyBlocked(selectedAttempt) && (
                  <button
                    onClick={() => {
                      unblockAttempt(selectedAttempt.id)
                      setSelectedAttempt(null)
                    }}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium"
                  >
                    Débloquer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 