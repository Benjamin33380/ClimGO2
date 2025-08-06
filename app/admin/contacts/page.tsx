'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface ContactRequest {
  id: string
  prenom: string
  nom: string
  email: string
  telephone: string | null
  adresse: string | null
  ville: string | null
  message: string
  status: string
  createdAt: string
  updatedAt: string
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<ContactRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState<ContactRequest | null>(null)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [emailForm, setEmailForm] = useState({
    subject: '',
    message: ''
  })
  const [sendingEmail, setSendingEmail] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    loadContacts()
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

  const loadContacts = async () => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch('/api/admin/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setContacts(data.contacts)
      }
    } catch (error) {
      console.error('Erreur lors du chargement des contacts:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      })

      if (response.ok) {
        setSuccess('Statut mis à jour avec succès')
        loadContacts()
      } else {
        const data = await response.json()
        setError(data.error)
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error)
      setError('Erreur lors de la mise à jour')
    }
  }

  const deleteContact = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette demande de contact ?')) {
      return
    }

    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        setSuccess('Demande supprimée avec succès')
        loadContacts()
      } else {
        const data = await response.json()
        setError(data.error)
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error)
      setError('Erreur lors de la suppression')
    }
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setSendingEmail(true)
    setError('')
    setSuccess('')

    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/admin/contacts/${selectedContact?.id}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(emailForm)
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess('Email envoyé avec succès')
        setShowEmailForm(false)
        setEmailForm({ subject: '', message: '' })
        loadContacts()
      } else {
        setError(data.error)
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error)
      setError('Erreur lors de l\'envoi de l\'email')
    } finally {
      setSendingEmail(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'nouveau':
        return 'bg-blue-100 text-blue-800'
      case 'lu':
        return 'bg-yellow-100 text-yellow-800'
      case 'traité':
        return 'bg-green-100 text-green-800'
      case 'fermé':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'nouveau':
        return 'Nouveau'
      case 'lu':
        return 'Lu'
      case 'traité':
        return 'Traité'
      case 'fermé':
        return 'Fermé'
      default:
        return status
    }
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
              <h1 className="text-2xl font-medium text-gray-900">Demandes de Contact</h1>
            </div>
            <div className="text-sm text-gray-500">
              {contacts.length} demande(s)
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

          {/* Table des contacts */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Liste des demandes de contact
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Coordonnées
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {contact.prenom} {contact.nom}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          <div>{contact.email}</div>
                          {contact.telephone && (
                            <div className="text-gray-500">{contact.telephone}</div>
                          )}
                          {contact.adresse && contact.ville && (
                            <div className="text-gray-500">{contact.adresse}, {contact.ville}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {contact.message}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={contact.status}
                          onChange={(e) => updateStatus(contact.id, e.target.value)}
                          className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(contact.status)}`}
                        >
                          <option value="nouveau">Nouveau</option>
                          <option value="lu">Lu</option>
                          <option value="traité">Traité</option>
                          <option value="fermé">Fermé</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(contact.createdAt).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedContact(contact)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Détails
                          </button>
                          <button
                            onClick={() => {
                              setSelectedContact(contact)
                              setShowEmailForm(true)
                              setEmailForm({
                                subject: `Réponse à votre demande - ClimGO`,
                                message: ''
                              })
                            }}
                            className="text-green-600 hover:text-green-900"
                          >
                            Répondre
                          </button>
                          <button
                            onClick={() => deleteContact(contact.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Supprimer
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {contacts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucune demande de contact trouvée.</p>
            </div>
          )}
        </div>
      </main>

      {/* Modal de détails */}
      {selectedContact && !showEmailForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Détails de la demande
                </h3>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Informations personnelles</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Nom :</strong> {selectedContact.prenom} {selectedContact.nom}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Email :</strong> {selectedContact.email}
                  </p>
                  {selectedContact.telephone && (
                    <p className="text-sm text-gray-600">
                      <strong>Téléphone :</strong> {selectedContact.telephone}
                    </p>
                  )}
                  {selectedContact.adresse && (
                    <p className="text-sm text-gray-600">
                      <strong>Adresse :</strong> {selectedContact.adresse}
                    </p>
                  )}
                  {selectedContact.ville && (
                    <p className="text-sm text-gray-600">
                      <strong>Ville :</strong> {selectedContact.ville}
                    </p>
                  )}
                </div>

                <div>
                  <h4 className="font-medium text-gray-900">Message</h4>
                  <div className="mt-2 p-3 bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">
                      {selectedContact.message}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900">Informations techniques</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Statut :</strong> {getStatusLabel(selectedContact.status)}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Reçu le :</strong> {new Date(selectedContact.createdAt).toLocaleString('fr-FR')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Modifié le :</strong> {new Date(selectedContact.updatedAt).toLocaleString('fr-FR')}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedContact(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Fermer
                </button>
                <button
                  onClick={() => {
                    setShowEmailForm(true)
                    setEmailForm({
                      subject: `Réponse à votre demande - ClimGO`,
                      message: ''
                    })
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium"
                >
                  Répondre par email
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal d'envoi d'email */}
      {showEmailForm && selectedContact && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Envoyer un email à {selectedContact.prenom} {selectedContact.nom}
                </h3>
                <button
                  onClick={() => {
                    setShowEmailForm(false)
                    setSelectedContact(null)
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destinataire
                  </label>
                  <input
                    type="email"
                    value={selectedContact.email}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    value={emailForm.subject}
                    onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    value={emailForm.message}
                    onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                    rows={8}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tapez votre message ici..."
                    required
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowEmailForm(false)
                      setSelectedContact(null)
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={sendingEmail}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-md text-sm font-medium"
                  >
                    {sendingEmail ? 'Envoi...' : 'Envoyer l\'email'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 