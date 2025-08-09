'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface CityPage {
  id: string;
  slug: string;
  cityName: string;
  title: string;
  description: string;
  keywords: string;
  backgroundImage: string;
  mainTitle: string;
  mainDescription: string;
  interventionsTitle: string;
  interventionsDescription: string;
  whyChooseTitle: string;
  whyChooseDescription1: string;
  whyChooseDescription2: string;
  whyChooseDescription3: string;
  card1Title: string;
  card1Description: string;
  card2Title: string;
  card2Description: string;
  card3Title: string;
  card3Description: string;
  card4Title: string;
  card4Description: string;
  faqQuestions: Array<{ question: string; answer: string }>;
  section1Title: string;
  section1Content: string[];
  section2Title: string;
  section2Content: string[];
  section3Title: string;
  section3Content: string[];
  section4Title: string;
  section4Content: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  createdAt: string;
  updatedAt: string;
}

export default function ViewCityPage() {
  const params = useParams();
  const [city, setCity] = useState<CityPage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    if (params.id) {
      fetchCity();
    }
  }, [params.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchCity = async () => {
    try {
      const response = await fetch(`/api/admin/cities/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setCity(data);
      } else {
        console.error('Erreur lors du chargement de la ville');
      }
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!city) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Page de ville non trouvée</h1>
            <Link href="/admin/cities" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Retour à la liste
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 my-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Link href="/admin/cities" className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 shadow-md">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Voir la page : {city.cityName}</h1>
          </div>
          <div className="flex gap-2">
            <Link
              href={`/admin/cities/${city.id}/edit`}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Modifier
            </Link>
            <Link
              href={`/villes/${city.slug}`}
              target="_blank"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir en ligne
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Informations SEO */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Informations SEO</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Slug</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.slug}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Titre SEO</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.title}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description SEO</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.description}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mots-clés</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.keywords || 'Non spécifié'}</p>
              </div>
            </div>
          </div>

          {/* Informations de base */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Informations de base</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Ville</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.cityName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image de fond</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded break-all">{city.backgroundImage}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Créée le</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                  {new Date(city.createdAt).toLocaleDateString('fr-FR')}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Modifiée le</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                  {new Date(city.updatedAt).toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
          </div>

          {/* Section principale */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Section principale</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Titre principal</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.mainTitle}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description principale</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.mainDescription}</p>
              </div>
            </div>
          </div>

          {/* Section interventions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Section interventions</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Titre</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.interventionsTitle}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.interventionsDescription}</p>
              </div>
            </div>
          </div>

          {/* Section pourquoi choisir */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Section pourquoi choisir</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Titre</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.whyChooseTitle}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description 1</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.whyChooseDescription1}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description 2</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.whyChooseDescription2}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description 3</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.whyChooseDescription3}</p>
              </div>
            </div>
          </div>

          {/* Cartes d'information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Cartes d&apos;information</h2>
            <div className="space-y-4">
              {[
                { title: city.card1Title, description: city.card1Description },
                { title: city.card2Title, description: city.card2Description },
                { title: city.card3Title, description: city.card3Description },
                { title: city.card4Title, description: city.card4Description },
              ].map((card, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <h3 className="font-medium text-gray-900 mb-2">Carte {index + 1}</h3>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Titre</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{card.title}</p>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Description</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">FAQ</h2>
            <div className="space-y-3">
              {city.faqQuestions.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <h3 className="font-medium text-gray-900 mb-2">Question {index + 1}</h3>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Question</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{faq.question}</p>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700">Réponse</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sections enrichies */}
          {[
            { title: city.section1Title, content: city.section1Content },
            { title: city.section2Title, content: city.section2Content },
            { title: city.section3Title, content: city.section3Content },
            { title: city.section4Title, content: city.section4Content },
          ].map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Section enrichie {index + 1}</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Titre</label>
                  <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{section.title}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contenu</label>
                  <div className="space-y-2">
                    {section.content.map((content, contentIndex) => (
                      <p key={contentIndex} className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                        {content}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Section CTA</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Titre</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.ctaTitle}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.ctaDescription}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Texte du bouton</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{city.ctaButtonText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 