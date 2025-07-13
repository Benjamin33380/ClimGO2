'use client';

import { useState } from 'react';
import Image from 'next/image';

// Effet zoom au hover sur le bouton


export default function AidesEtatPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "Toutes les PAC sont-elles éligibles ?",
      answer: "Non, seules certaines pompes à chaleur sont éligibles aux aides de l'État. Il faut qu'elles répondent à des critères de performance (COP, étiquette énergie, etc.) et qu'elles soient installées par une entreprise RGE comme ClimGO."
    },
    {
      question: "Mon Projet est-il éligible ?",
      answer: "La plupart des projets de rénovation énergétique le sont, mais cela dépend de plusieurs critères : type de travaux, situation du logement, revenus, etc. ClimGO vous accompagne pour vérifier votre éligibilité avant même le devis."
    },
    {
      question: "Des aides pour foyers modestes ?",
      answer: "Oui, certaines aides sont renforcées pour les ménages aux revenus modestes ou très modestes (MaPrimeRénov&apos;, CEE bonifiés…). Les montants sont plus élevés et le reste à charge réduit."
    },
    {
      question: "L'éco-PTZ est-il cumulable ?",
      answer: "Oui. L'éco-prêt à taux zéro peut se cumuler avec MaPrimeRénov', les CEE ou encore la TVA à taux réduit. C'est un excellent moyen de financer un reste à charge sans intérêts."
    }
  ];

  return (
    <div className="min-h-screen bgPage my-24">
      {/* Hero Section */}
      <section
        className="py-20 bgPage bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/aides.png')`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
          marginTop: '-100px',
          paddingBottom: '150px', // augmenter la hauteur en bas pour agrandir visuellement
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="blur-box mx-auto max-w-3xl p-8 rounded-xl mt-28" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(12px)', color: '#f8f8f9' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#03144a]">Aides & Subventions</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#03144a]">Simplifiez vos démarches avec ClimGO</h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed text-[#03144a]">
              <strong>Aides & Subventions</strong> : plusieurs dispositifs existent pour alléger le coût de vos travaux de chauffage, climatisation ou rénovation énergétique. Chez ClimGO, nous vous aidons à chaque étape pour bénéficier sereinement des aides de l&apos;État.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bgPage">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <h2
              className="text-3xl font-bold text-center mb-12 text-[#03144a]"
              style={{ color: '#03144a' }}
            >
              Quelles aides & subventions pour vos travaux en 2025 ?
            </h2>

            {/* CEE */}
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1">
                  <div className="p-2 rounded-md flex justify-center items-center max-w-[180px] mx-auto">
                    <Image
                      src="/LogoCEE.webp"
                      alt="Certificats d'économie d'énergie CEE"
                      width={120}
                      height={90}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <h3
                    className="text-2xl font-bold mb-4 text-[#03144a]"
                    style={{ color: '#03144a' }}
                  >
                    Aides & Subventions CEE
                  </h3>
                  <h4
                    className="text-xl font-semibold mb-4 text-[#03144a]"
                    style={{ color: '#03144a' }}
                  >
                    Certificats d&apos;économies d&apos;énergie (CEE)
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">À quoi correspond cette aide ?</h5>
                      <p className="text-gray-600">Le CEE est une aide proposée par les fournisseurs d&apos;énergie pour financer vos travaux de rénovation énergétique. Elle permet de réduire directement le montant de votre facture, sans avance de trésorerie.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Qui peut en profiter ?</h5>
                      <p className="text-gray-600">Propriétaires ou locataires, occupants ou bailleurs, tous peuvent en bénéficier. Il suffit que les travaux soient réalisés par une entreprise RGE comme ClimGO.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Quels travaux sont pris en charge ?</h5>
                      <p className="text-gray-600 mb-2">Les CEE couvrent une large gamme de travaux comme :</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>– Installation de pompes à chaleur</li>
                        <li>– Chauffe-eaux thermodynamiques</li>
                        <li>– Travaux d&apos;isolation thermique</li>
                        <li>– Systèmes de chauffage performants</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TVA 5,5% */}
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="p-2 rounded-md flex justify-center items-center max-w-[180px] mx-auto">
                    <Image
                      src="/LogoTvA55.webp"
                      alt="TVA à taux réduit 5,5%"
                      width={120}
                      height={90}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold mb-4 text-[#03144a]"
                    style={{ color: '#03144a' }}
                  >
                    Aides & Subventions TVA 5,5%
                  </h3>
                  <h4
                    className="text-xl font-semibold mb-4 text-[#03144a]"
                    style={{ color: '#03144a' }}
                  >
                    TVA à taux réduit (5,5&quot;)
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Quel est ce taux réduit ?</h5>
                      <p className="text-gray-600">Il s&apos;agit d&apos;un taux de TVA abaissé à 5,5 % au lieu de 20 %, applicable sur les travaux de rénovation énergétique. Il est directement appliqué sur la facture.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Suis-je éligible ?</h5>
                      <p className="text-gray-600">Oui, si votre logement a plus de 2 ans, que vous êtes propriétaire, locataire ou occupant, et que les travaux sont réalisés par une entreprise certifiée comme ClimGO.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Quels travaux bénéficient du 5,5% ?</h5>
                      <p className="text-gray-600 mb-2">Le taux réduit s&apos;applique aux travaux visant à améliorer la performance énergétique :</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>– Pompes à chaleur</li>
                        <li>– Chauffe-eaux thermodynamiques</li>
                        <li>– Travaux d&apos;isolation</li>
                        <li>– Systèmes de régulation du chauffage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MaPrimeRénov' */}
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1">
                  <div className="p-2 rounded-md flex justify-center items-center max-w-[180px] mx-auto">
                    <Image
                      src="/LogoMaPrimRenov.webp"
                      alt="MaPrimeRénov'"
                      width={120}
                      height={90}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <h3
                    className="text-2xl font-bold mb-4 text-[#03144a]"
                    style={{ color: '#03144a' }}
                  >
                    Aides & Subventions MaPrimeRenov&apos;
                  </h3>
                  <h4
                    className="text-xl font-semibold mb-4 text-[#03144a]"
                    style={{ color: '#03144a' }}
                  >
                    MaPrimeRénov&apos;
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Qu&apos;est-ce que MaPrimeRénov&apos; ?</h5>
                      <p className="text-gray-600">C&apos;est une aide directe de l&apos;État pour financer vos travaux. Elle est versée après les travaux, sur votre compte, sans avance de frais.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Quels profils sont concernés ?</h5>
                      <p className="text-gray-600">Tous les propriétaires, selon leurs revenus. Le montant de l&apos;aide dépend d&apos;un barème national, mais ClimGO vous aide à estimer ce à quoi vous avez droit.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Comment faire une demande ?</h5>
                      <p className="text-gray-600">Elle se fait en ligne sur maprimerenov.gouv.fr. Nous vous assistons dans toutes les démarches.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Éco-PTZ */}
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="p-2 rounded-md flex justify-center items-center max-w-[180px] mx-auto">
                    <Image
                      src="/LogoEcoPret0Pourcent.webp"
                      alt="Éco-PTZ prêt à taux zéro"
                      width={120}
                      height={90}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold mb-4 text-[#03144a]"
                    style={{ color: '#03144a' }}
                  >
                    Aides & Subventions eco-PTZ
                  </h3>
                  <h4
                    className="text-xl font-semibold mb-4 text-[#03144a]"
                    style={{ color: '#03144a' }}
                  >
                    Éco-PTZ (prêt à taux zéro)
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Comment fonctionne ce prêt ?</h5>
                      <p className="text-gray-600">L&apos;éco-PTZ est un prêt à 0 % d&apos;intérêt pour financer vos travaux énergétiques. Il peut atteindre 50 000 €, remboursable sur 20 ans.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Qui peut l&apos;obtenir ?</h5>
                      <p className="text-gray-600">Tous les propriétaires de logements de plus de 2 ans, qu&apos;ils soient occupants ou bailleurs, sans condition de revenus.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Quels types de travaux sont concernés ?</h5>
                      <ul className="text-gray-600 space-y-1">
                        <li>– Isolation</li>
                        <li>– Chauffe-eaux</li>
                        <li>– Pompes à chaleur</li>
                        <li>– Ventilation</li>
                      </ul>
                      <p className="text-gray-600 mt-2">(Travaux réalisés par une entreprise RGE uniquement.)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ANIL */}
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1">
                  <div className="p-2 rounded-md flex justify-center items-center max-w-[180px] mx-auto">
                    <Image
                      src="/LogoAnil.webp"
                      alt="ANIL Agence National Information Logement"
                      width={120}
                      height={90}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <h3
                    className="text-2xl font-bold mb-4 text-[#03144a]"
                    style={{ color: '#03144a' }}
                  >
                    ANIL
                  </h3>
                  <h4
                    className="text-xl font-semibold mb-4 text-[#03144a]"
                    style={{ color: '#03144a' }}
                  >
                    Agence National Information Logement
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">De quoi s&apos;agit-il ?</h5>
                      <p className="text-gray-600">En plus des aides de l&apos;État, certaines collectivités (mairies, départements, régions) proposent des aides locales supplémentaires.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Où les trouver ?</h5>
                      <p className="text-gray-600">L&apos;ANIL (Agence Nationale pour l&apos;Information sur le Logement) recense toutes les aides disponibles selon votre commune.</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Comment en bénéficier ?</h5>
                      <p className="text-gray-600">Consultez www.anil.org pour voir les aides locales disponibles. ClimGO peut également vous orienter et monter les dossiers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-24">
              <h2
                className="text-3xl font-bold text-center mb-12 text-[#03144a]"
                style={{ color: '#03144a' }}
              >
                Mini FAQ - Aides & Subventions
              </h2>
              
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800">{item.question}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Comment ça se passe avec ClimGO */}
            <div
              className="mb-24 w-full h-[600px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white px-4"
              style={{
                backgroundImage: "url('/opti1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <h2
                className="text-3xl font-bold mb-8"
              >
                Comment ça se passe avec ClimGO ?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
                <div className="text-center">
                  <div className="bg-[#03144a] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3
                    className="font-semibold mb-2 text-white"
                  >
                    Analyse de votre projet
                  </h3>
                  <p className="text-sm text-white/90">On évalue vos besoins, votre logement et votre éligibilité aux aides.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#03144a] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3
                    className="font-semibold mb-2 text-white"
                  >
                    Devis & estimation des aides
                  </h3>
                  <p className="text-sm text-white/90">Vous recevez un devis clair avec les aides estimées, sans mauvaise surprise.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#03144a] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3
                    className="font-semibold mb-2 text-white"
                  >
                    Constitution du dossier
                  </h3>
                  <p className="text-sm text-white/90">On gère toute la paperasse : dossier, justificatifs, formulaires… vous soufflez.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#03144a] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3
                    className="font-semibold mb-2 text-white"
                  >
                    Installation & aides appliquées
                  </h3>
                  <p className="text-sm text-white/90">On installe, les aides sont directement déduites ou versées.</p>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: '#03144a' }}
              >
                Profitez des aides avec ClimGO
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Bénéficiez d&apos;un accompagnement complet pour optimiser vos aides, sans stress ni paperasse.
              </p>
              <p className="text-gray-600 mb-8">
                ClimGO s&apos;occupe de tout, vous profitez des économies.
              </p>
              <a
                href="/contact"
                className="climBg px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center space-x-2 zoom-hover"
                style={{ color: '#03144a', backgroundColor: '#03144a', border: '2px solid #03144a' }}
              >
                <span style={{ color: '#fff' }}>Demander mon devis</span>
              </a>
            </div>

          </div>
        </div>
      </section>
      {/* Style pour le zoom-hover */}
      <style jsx>{`
        .zoom-hover {
          transition: transform 0.3s ease;
        }
        .zoom-hover:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}