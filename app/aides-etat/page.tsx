'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Effet zoom au hover sur le bouton


export default function AidesEtatPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
          paddingBottom: '200px',
          boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,0.3)',
        }}
      >
        <div className="pt-36">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Aides & Subventions</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">Simplifiez vos démarches avec ClimGO</h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed text-white">
              <strong>Aides & Subventions</strong> : plusieurs dispositifs existent pour alléger le coût de vos travaux de chauffage, climatisation ou rénovation énergétique. Chez ClimGO, nous vous aidons à chaque étape pour bénéficier sereinement des aides de l&apos;État.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Introduction */}
      <section className="py-16 bg-[#f8f9f4] mb-24">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-center relative inline-block"
            style={{ color: '#000000' }}
          >
            Quelles aides & subventions pour vos travaux en 2025 ?
          </h2>
        </div>
      </section>

      {/* Section 3 - Accordéons Aides */}
      <section className="py-16 bg-[#f8f9f4] mb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Accordéons */}
            <div className="space-y-8">
              {/* Bloc 1 - CEE */}
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-xl">
                <button
                  onClick={() => toggleFaq(0)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#F8F9F4] hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-3 font-semibold text-[#03144a] text-xl">
                    <Image src="/LogoCEE.webp" alt="CEE" width={40} height={30} className="rounded-md" />
                    Certificats d’économies d’énergie (CEE)
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform text-[#03144a] opacity-80 group-hover:opacity-100 ${openFaq === 0 ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 0 && (
                  <div className="px-6 pb-6 pt-2 bg-[#F8F9F4]">
                    <div className="grid md:grid-cols-2 gap-8 items-center mb-2">
                      <div className="order-1">
                        <div className="bg-[#F8F9F4] rounded-xl p-6 flex justify-center items-center">
                          <div className="p-2 rounded-xl bg-[#F8F9F4]">
                            <Image
                              src="/LogoCEE.webp"
                              alt="Logo CEE"
                              width={120}
                              height={90}
                              className="rounded-xl shadow-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="order-2">
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
                )}
              </div>
              {/* Bloc 2 - TVA 5,5% */}
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-xl">
                <button
                  onClick={() => toggleFaq(1)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#F8F9F4] hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-3 font-semibold text-[#03144a] text-xl">
                    <Image src="/LogoTvA55.webp" alt="TVA 5,5%" width={40} height={30} className="rounded-md" />
                    TVA à taux réduit 5,5%
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform text-[#03144a] opacity-80 group-hover:opacity-100 ${openFaq === 1 ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-6 pt-2 bg-[#F8F9F4]">
                    <div className="grid md:grid-cols-2 gap-8 items-center mb-2">
                      <div>
                        <div className="flex justify-center items-center max-w-[180px] mx-auto">
                          <Image
                            src="/LogoTvA55.webp"
                            alt="TVA à taux réduit 5,5%"
                            width={120}
                            height={90}
                            className="bg-transparent! shadow-none! rounded-none!"
                          />
                        </div>
                      </div>
                      <div>
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
                )}
              </div>
              {/* Bloc 3 - MaPrimeRénov' */}
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-xl">
                <button
                  onClick={() => toggleFaq(2)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#F8F9F4] hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-3 font-semibold text-[#03144a] text-xl">
                    <Image src="/LogoMaPrimRenov.webp" alt="MaPrimeRénov’" width={40} height={30} className="rounded-md" />
                    MaPrimeRénov’
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform text-[#03144a] opacity-80 group-hover:opacity-100 ${openFaq === 2 ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-6 pt-2 bg-[#F8F9F4]">
                    <div className="grid md:grid-cols-2 gap-8 items-center mb-2">
                      <div className="order-1">
                        <div className="flex justify-center items-center max-w-[180px] mx-auto">
                          <Image
                            src="/LogoMaPrimRenov.webp"
                            alt="MaPrimeRénov'"
                            width={120}
                            height={90}
                            className="bg-transparent! shadow-none! rounded-none!"
                          />
                        </div>
                      </div>
                      <div className="order-2">
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
                )}
              </div>
              {/* Bloc 4 - Éco-PTZ */}
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-xl">
                <button
                  onClick={() => toggleFaq(3)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#F8F9F4] hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-3 font-semibold text-[#03144a] text-xl">
                    <Image src="/LogoEcoPret0Pourcent.webp" alt="Éco-PTZ" width={40} height={30} className="rounded-md" />
                    Éco-PTZ (Prêt à taux zéro)
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform text-[#03144a] opacity-80 group-hover:opacity-100 ${openFaq === 3 ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-6 pt-2 bg-[#F8F9F4]">
                    <div className="grid md:grid-cols-2 gap-8 items-center mb-2">
                      <div>
                        <div className="flex justify-center items-center max-w-[180px] mx-auto">
                          <Image
                            src="/LogoEcoPret0Pourcent.webp"
                            alt="Éco-PTZ prêt à taux zéro"
                            width={120}
                            height={90}
                            className="bg-transparent! shadow-none! rounded-none!"
                          />
                        </div>
                      </div>
                      <div>
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
                )}
              </div>
              {/* Bloc 5 - ANIL */}
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-xl">
                <button
                  onClick={() => toggleFaq(4)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#F8F9F4] hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-3 font-semibold text-[#03144a] text-xl">
                    <Image src="/LogoAnil.webp" alt="ANIL" width={40} height={30} className="rounded-md" />
                    Aides locales ANIL
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform text-[#03144a] opacity-80 group-hover:opacity-100 ${openFaq === 4 ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === 4 && (
                  <div className="px-6 pb-6 pt-2 bg-[#F8F9F4]">
                    <div className="grid md:grid-cols-2 gap-8 items-center mb-2">
                      <div className="order-1">
                        <div className="flex justify-center items-center max-w-[180px] mx-auto">
                          <Image
                            src="/LogoAnil.webp"
                            alt="ANIL Agence National Information Logement"
                            width={120}
                            height={90}
                            className="bg-transparent! shadow-none! rounded-none!"
                          />
                        </div>
                      </div>
                      <div className="order-2">
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Comment ça se passe avec ClimGO */}
      <section
        className="relative mb-24 w-full min-h-[650px] text-white px-4 climgo-section-container parallax"
        style={{
          backgroundImage: "url('/opti1.png')",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h2 className="text-3xl font-bold mb-8">
            Comment ça se passe avec ClimGO ?
          </h2>
          {/* Empilement vertical des blocs étapes */}
          <div className="climgo-steps-vertical flex flex-col items-center w-full max-w-3xl gap-8">
            {/* Step 1 */}
            <div className="climgo-step-container flex flex-col items-center justify-center text-center">
              <div className="climgo-step-badge flex items-center justify-center mb-4">
                <span className="climgo-step-number">1</span>
              </div>
              <h3 className="font-semibold climgo-step-title mb-2">
                Analyse de votre projet
              </h3>
              <p className="climgo-step-desc mb-0">On évalue vos besoins, votre logement et votre éligibilité aux aides.</p>
            </div>
            {/* Step 2 */}
            <div className="climgo-step-container flex flex-col items-center justify-center text-center">
              <div className="climgo-step-badge flex items-center justify-center mb-4">
                <span className="climgo-step-number">2</span>
              </div>
              <h3 className="font-semibold climgo-step-title mb-2">
                Devis & estimation des aides
              </h3>
              <p className="climgo-step-desc mb-0">Vous recevez un devis clair avec les aides estimées, sans mauvaise surprise.</p>
            </div>
            {/* Step 3 */}
            <div className="climgo-step-container flex flex-col items-center justify-center text-center">
              <div className="climgo-step-badge flex items-center justify-center mb-4">
                <span className="climgo-step-number">3</span>
              </div>
              <h3 className="font-semibold climgo-step-title mb-2">
                Constitution du dossier
              </h3>
              <p className="climgo-step-desc mb-0">On gère toute la paperasse : dossier, justificatifs, formulaires… vous soufflez.</p>
            </div>
            {/* Step 4 */}
            <div className="climgo-step-container flex flex-col items-center justify-center text-center">
              <div className="climgo-step-badge flex items-center justify-center mb-4">
                <span className="climgo-step-number">4</span>
              </div>
              <h3 className="font-semibold climgo-step-title mb-2">
                Installation & aides appliquées
              </h3>
              <p className="climgo-step-desc mb-0">On installe, les aides sont directement déduites ou versées.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - CTA Final */}
      <div className="text-center mb-24">
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
        <Link
          href="/contact"
          className="climBg px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center space-x-2 zoom-hover"
          style={{ color: '#03144a', backgroundColor: '#03144a', border: '2px solid #03144a' }}
        >
          <span style={{ color: '#fff' }}>Demander mon devis</span>
        </Link>
      </div>

      {/* Style pour le zoom-hover, pastilles étapes ClimGO, logos, effet parallax, et disposition verticale des étapes */}
      <style jsx>{`
        .parallax {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .zoom-hover {
          transition: transform 0.3s ease;
        }
        .zoom-hover:hover {
          transform: scale(1.05);
        }
        /* Suppression fond, bordure, ombre autour des logos */
        .bg-transparent! {
          background: transparent !important;
        }
        .shadow-none! {
          box-shadow: none !important;
        }
        .rounded-none! {
          border-radius: 0 !important;
        }
        /* Container section "Comment ça se passe avec ClimGO" pour padding top mobile */
        .climgo-section-container {
          padding-top: 4rem;
        }
        @media screen and (max-width: 768px) {
          .climgo-section-container {
            padding-top: 6rem;
          }
        }
        /* Étapes ClimGO en colonne et centrées */
        .climgo-steps-vertical {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
        }
        /* Step container: vertical layout, centered, spacing between elements */
        .climgo-step-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 170px;
          padding-bottom: 1.5rem;
          text-align: center;
          width: 100%;
        }
        @media screen and (max-width: 768px) {
          .climgo-step-container {
            margin-top: 2rem;
            min-height: 130px;
            padding-bottom: 2.5rem;
          }
        }
        /* Pastilles étapes ClimGO */
        .climgo-step-badge {
          background: #fff;
          border-radius: 9999px;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          z-index: 1;
          position: relative;
        }
        .climgo-step-number {
          color: #d4af37;
          font-weight: bold;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media screen and (max-width: 768px) {
          .climgo-step-badge {
            width: 40px;
            height: 40px;
            margin-top: 2.5rem;
            z-index: 1;
            position: relative;
          }
          .climgo-step-number {
            font-size: 1rem;
          }
          /* Step 3 extra margin for mobile to avoid overlap with step 4 */
          .climgo-step-container:nth-child(3) {
            margin-bottom: 2.5rem !important;
          }
        }
        .climgo-step-title {
          color: #fff;
          text-align: center;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        .climgo-step-desc {
          color: #fff;
          text-align: center;
          font-size: 15px;
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
}