'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageUpload from '../../../components/ImageUpload';
import CityPageTemplate from '../../../components/CityPageTemplate';

interface CityPageForm {
  // SEO
  slug: string;
  title: string;
  description: string;
  keywords: string;
  
  // Basic Info
  cityName: string;
  backgroundImage: string;
  
  // Main Section
  mainTitle: string;
  mainDescription: string;
  
  // Interventions Section
  interventionsTitle: string;
  interventionsDescription: string;
  
  // Why Choose Section
  whyChooseTitle: string;
  whyChooseDescription1: string;
  whyChooseDescription2: string;
  whyChooseDescription3: string;
  
  // Cards
  card1Title: string;
  card1Description: string;
  card2Title: string;
  card2Description: string;
  card3Title: string;
  card3Description: string;
  card4Title: string;
  card4Description: string;
  
  // FAQ
  faqQuestions: Array<{ question: string; answer: string }>;
  
  // Enriched Sections
  section1Title: string;
  section1Content: string[];
  section2Title: string;
  section2Content: string[];
  section3Title: string;
  section3Content: string[];
  section4Title: string;
  section4Content: string[];
  
  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

export default function NewCityPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('seo');
  const [formData, setFormData] = useState<CityPageForm>({
    slug: '',
    title: '',
    description: '',
    keywords: '',
    cityName: '',
    backgroundImage: '',
    mainTitle: '',
    mainDescription: '',
    interventionsTitle: '',
    interventionsDescription: '',
    whyChooseTitle: '',
    whyChooseDescription1: '',
    whyChooseDescription2: '',
    whyChooseDescription3: '',
    card1Title: '',
    card1Description: '',
    card2Title: '',
    card2Description: '',
    card3Title: '',
    card3Description: '',
    card4Title: '',
    card4Description: '',
    faqQuestions: [{ question: '', answer: '' }],
    section1Title: '',
    section1Content: [''],
    section2Title: '',
    section2Content: [''],
    section3Title: '',
    section3Content: [''],
    section4Title: '',
    section4Content: [''],
    ctaTitle: '',
    ctaDescription: '',
    ctaButtonText: '',
  });

  const handleInputChange = (field: keyof CityPageForm, value: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    const newFaq = [...formData.faqQuestions];
    newFaq[index] = { ...newFaq[index], [field]: value };
    setFormData(prev => ({ ...prev, faqQuestions: newFaq }));
  };

  const addFaqQuestion = () => {
    setFormData(prev => ({
      ...prev,
      faqQuestions: [...prev.faqQuestions, { question: '', answer: '' }]
    }));
  };

  const removeFaqQuestion = (index: number) => {
    if (formData.faqQuestions.length > 1) {
      const newFaq = formData.faqQuestions.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, faqQuestions: newFaq }));
    }
  };

  const handleSectionContentChange = (section: 'section1Content' | 'section2Content' | 'section3Content' | 'section4Content', index: number, value: string) => {
    const newContent = [...formData[section]];
    newContent[index] = value;
    setFormData(prev => ({ ...prev, [section]: newContent }));
  };

  const addSectionContent = (section: 'section1Content' | 'section2Content' | 'section3Content' | 'section4Content') => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], '']
    }));
  };

  const removeSectionContent = (section: 'section1Content' | 'section2Content' | 'section3Content' | 'section4Content', index: number) => {
    if (formData[section].length > 1) {
      const newContent = formData[section].filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, [section]: newContent }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/admin/cities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        router.push(`/admin/cities/${data.id}/view`);
      } else {
        const error = await response.json();
        alert(`Erreur: ${error.message || 'Erreur lors de la création'}`);
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la création');
    } finally {
      setLoading(false);
    }
  };

  const sections = [
    { id: 'seo', name: 'SEO', icon: '🔍' },
    { id: 'basic', name: 'Infos de base', icon: '🏙️' },
    { id: 'main', name: 'Section principale', icon: '📝' },
    { id: 'interventions', name: 'Interventions', icon: '🔧' },
    { id: 'why-choose', name: 'Pourquoi nous choisir', icon: '⭐' },
    { id: 'cards', name: 'Cartes', icon: '🃏' },
    { id: 'faq', name: 'FAQ', icon: '❓' },
    { id: 'sections', name: 'Sections enrichies', icon: '📄' },
    { id: 'cta', name: 'CTA', icon: '📞' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 my-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/cities" className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 shadow-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Créer une nouvelle page de ville</h1>
            </div>
            <div className="flex gap-2">
              <Link
                href="/admin/cities"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Annuler
              </Link>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Création...
                  </>
                ) : (
                  'Créer la page'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar - Formulaire */}
        <div className="w-1/2 bg-white border-r border-gray-200 overflow-y-auto">
          {/* Navigation des sections */}
          <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
            <div className="flex overflow-x-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
                    activeSection === section.id
                      ? 'border-blue-500 text-blue-600 bg-blue-50'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span>{section.icon}</span>
                  <span className="text-sm font-medium">{section.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contenu des sections */}
          <div className="p-6">
            {/* SEO Section */}
            {activeSection === 'seo' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Informations SEO</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Slug *</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => handleInputChange('slug', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="bordeaux-chauffage-climatisation"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom de la ville *</label>
                    <input
                      type="text"
                      value={formData.cityName}
                      onChange={(e) => handleInputChange('cityName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Bordeaux"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Titre SEO *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Chauffage et Climatisation à Bordeaux - ClimGO"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description SEO *</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Expert en chauffage et climatisation à Bordeaux. Installation, réparation, maintenance. Devis gratuit."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mots-clés SEO</label>
                    <input
                      type="text"
                      value={formData.keywords}
                      onChange={(e) => handleInputChange('keywords', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="chauffage bordeaux, climatisation bordeaux, pompe à chaleur bordeaux"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Basic Info */}
            {activeSection === 'basic' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Informations de base</h2>
                <ImageUpload
                  value={formData.backgroundImage}
                  onChange={(url) => handleInputChange('backgroundImage', url)}
                  label="Image de fond"
                  required
                />
              </div>
            )}

            {/* Main Section */}
            {activeSection === 'main' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Section principale</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Titre principal *</label>
                    <input
                      type="text"
                      value={formData.mainTitle}
                      onChange={(e) => handleInputChange('mainTitle', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Chauffage et Climatisation à Bordeaux"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description principale *</label>
                    <textarea
                      value={formData.mainDescription}
                      onChange={(e) => handleInputChange('mainDescription', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      placeholder="Expert en installation, réparation et maintenance de systèmes de chauffage et climatisation à Bordeaux et ses environs."
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Interventions Section */}
            {activeSection === 'interventions' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Section Interventions</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Titre des interventions *</label>
                    <input
                      type="text"
                      value={formData.interventionsTitle}
                      onChange={(e) => handleInputChange('interventionsTitle', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Nos interventions à Bordeaux"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description des interventions *</label>
                    <textarea
                      value={formData.interventionsDescription}
                      onChange={(e) => handleInputChange('interventionsDescription', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      placeholder="Nous intervenons dans toute la région de Bordeaux pour tous vos besoins en chauffage et climatisation."
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Why Choose Section */}
            {activeSection === 'why-choose' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Section Pourquoi nous choisir</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Titre *</label>
                    <input
                      type="text"
                      value={formData.whyChooseTitle}
                      onChange={(e) => handleInputChange('whyChooseTitle', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Pourquoi choisir ClimGO à Bordeaux ?"
                      required
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description 1 *</label>
                      <textarea
                        value={formData.whyChooseDescription1}
                        onChange={(e) => handleInputChange('whyChooseDescription1', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description 2 *</label>
                      <textarea
                        value={formData.whyChooseDescription2}
                        onChange={(e) => handleInputChange('whyChooseDescription2', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description 3 *</label>
                      <textarea
                        value={formData.whyChooseDescription3}
                        onChange={(e) => handleInputChange('whyChooseDescription3', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Cards Section */}
            {activeSection === 'cards' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Cartes d&apos;information</h2>
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-3">Carte {num}</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Titre *</label>
                          <input
                            type="text"
                            value={formData[`card${num}Title` as keyof CityPageForm] as string}
                            onChange={(e) => handleInputChange(`card${num}Title` as keyof CityPageForm, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                          <textarea
                            value={formData[`card${num}Description` as keyof CityPageForm] as string}
                            onChange={(e) => handleInputChange(`card${num}Description` as keyof CityPageForm, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={3}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Section */}
            {activeSection === 'faq' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">FAQ</h2>
                <div className="space-y-4">
                  {formData.faqQuestions.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-medium text-gray-900">Question {index + 1}</h3>
                        {formData.faqQuestions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeFaqQuestion(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Supprimer
                          </button>
                        )}
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Question *</label>
                          <input
                            type="text"
                            value={faq.question}
                            onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Réponse *</label>
                          <textarea
                            value={faq.answer}
                            onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={3}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addFaqQuestion}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Ajouter une question
                  </button>
                </div>
              </div>
            )}

            {/* Enriched Sections */}
            {activeSection === 'sections' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Sections enrichies</h2>
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-3">Section {num}</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Titre *</label>
                        <input
                          type="text"
                          value={formData[`section${num}Title` as keyof CityPageForm] as string}
                          onChange={(e) => handleInputChange(`section${num}Title` as keyof CityPageForm, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contenu *</label>
                        <div className="space-y-2">
                          {(formData[`section${num}Content` as keyof CityPageForm] as string[]).map((content, index) => (
                            <div key={index} className="flex gap-2">
                              <textarea
                                value={content}
                                onChange={(e) => handleSectionContentChange(`section${num}Content` as any, index, e.target.value)} // eslint-disable-line @typescript-eslint/no-explicit-any
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={2}
                                required
                              />
                              {(formData[`section${num}Content` as keyof CityPageForm] as string[]).length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeSectionContent(`section${num}Content` as any, index)} // eslint-disable-line @typescript-eslint/no-explicit-any
                                  className="text-red-600 hover:text-red-800 px-2"
                                >
                                  ×
                                </button>
                              )}
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => addSectionContent(`section${num}Content` as any)} // eslint-disable-line @typescript-eslint/no-explicit-any
                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors text-sm"
                          >
                            Ajouter un paragraphe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Section */}
            {activeSection === 'cta' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Section CTA</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Titre CTA *</label>
                    <input
                      type="text"
                      value={formData.ctaTitle}
                      onChange={(e) => handleInputChange('ctaTitle', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Besoin d'un devis gratuit ?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description CTA *</label>
                    <textarea
                      value={formData.ctaDescription}
                      onChange={(e) => handleInputChange('ctaDescription', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Contactez-nous pour un devis personnalisé et gratuit."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Texte du bouton *</label>
                    <input
                      type="text"
                      value={formData.ctaButtonText}
                      onChange={(e) => handleInputChange('ctaButtonText', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Demander un devis"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Aperçu en temps réel */}
        <div className="w-1/2 bg-gray-100 overflow-y-auto">
          <div className="sticky top-0 bg-gray-100 border-b border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-900">Aperçu en temps réel</h2>
            <p className="text-sm text-gray-600">Votre page apparaîtra exactement comme ci-dessous</p>
          </div>
          <div className="p-4">
            {formData.cityName && formData.backgroundImage ? (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <CityPageTemplate
                  cityName={formData.cityName}
                  backgroundImage={formData.backgroundImage}
                  mainTitle={formData.mainTitle || 'Titre principal'}
                  mainDescription={formData.mainDescription || 'Description principale'}
                  interventionsTitle={formData.interventionsTitle || 'Nos interventions'}
                  interventionsDescription={formData.interventionsDescription || 'Description des interventions'}
                  whyChooseTitle={formData.whyChooseTitle || 'Pourquoi nous choisir'}
                  whyChooseDescription1={formData.whyChooseDescription1 || 'Description 1'}
                  whyChooseDescription2={formData.whyChooseDescription2 || 'Description 2'}
                  whyChooseDescription3={formData.whyChooseDescription3 || 'Description 3'}
                  card1={{
                    title: formData.card1Title || 'Carte 1',
                    description: formData.card1Description || 'Description carte 1',
                  }}
                  card2={{
                    title: formData.card2Title || 'Carte 2',
                    description: formData.card2Description || 'Description carte 2',
                  }}
                  card3={{
                    title: formData.card3Title || 'Carte 3',
                    description: formData.card3Description || 'Description carte 3',
                  }}
                  card4={{
                    title: formData.card4Title || 'Carte 4',
                    description: formData.card4Description || 'Description carte 4',
                  }}
                  faqQuestions={formData.faqQuestions.filter(q => q.question && q.answer)}
                  section1={{
                    title: formData.section1Title || 'Section 1',
                    content: formData.section1Content.filter(c => c.trim()),
                  }}
                  section2={{
                    title: formData.section2Title || 'Section 2',
                    content: formData.section2Content.filter(c => c.trim()),
                  }}
                  section3={{
                    title: formData.section3Title || 'Section 3',
                    content: formData.section3Content.filter(c => c.trim()),
                  }}
                  section4={{
                    title: formData.section4Title || 'Section 4',
                    content: formData.section4Content.filter(c => c.trim()),
                  }}
                  ctaTitle={formData.ctaTitle || 'Titre CTA'}
                  ctaDescription={formData.ctaDescription || 'Description CTA'}
                  ctaButtonText={formData.ctaButtonText || 'Bouton CTA'}
                />
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-gray-400 text-6xl mb-4">🏙️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aperçu de la page</h3>
                <p className="text-gray-600">
                  Commencez par remplir les informations de base (nom de la ville et image de fond) pour voir l&apos;aperçu de votre page.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 