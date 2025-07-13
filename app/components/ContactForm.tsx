'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    adresse: '',
    ville: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Réinitialiser le formulaire
        setFormData({
          prenom: '',
          nom: '',
          adresse: '',
          ville: '',
          email: '',
          telephone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Erreur:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Prénom et Nom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Prénom"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f8f8f4] text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f8f8f4] text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>
      </div>

      {/* Adresse */}
      <div>
        <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-2">
          Adresse
        </label>
        <input
          type="text"
          id="adresse"
          name="adresse"
          value={formData.adresse}
          onChange={handleChange}
          placeholder="Adresse"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f8f8f4] text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      {/* Ville */}
      <div>
        <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-2">
          Ville ou code postal
        </label>
        <input
          type="text"
          id="ville"
          name="ville"
          value={formData.ville}
          onChange={handleChange}
          placeholder="Ville ou code postal"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f8f8f4] text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      {/* Email et Téléphone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f8f8f4] text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Téléphone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f8f8f4] text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez votre projet ou votre question..."
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f8f8f4] text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
          required
        />
      </div>

      {/* Messages de statut */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-800">Merci pour votre message ! Nous vous recontacterons rapidement.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <span className="text-red-800">Une erreur s&apos;est produite. Veuillez réessayer.</span>
        </div>
      )}

      {/* Bouton d'envoi */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#03144a] text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4m10-10h-4M6 12H2" />
              </svg>
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Envoyer</span>
            </>
          )}
        </button>
      </div>

      {/* Note de confidentialité */}
      <div className="text-sm text-gray-500 text-center pt-4">
        <p>
          Vos données personnelles sont traitées dans le respect de la réglementation en vigueur. 
          Elles ne seront utilisées que pour répondre à votre demande.
        </p>
      </div>
    </form>
  );
} 