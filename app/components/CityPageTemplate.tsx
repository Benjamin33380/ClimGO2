import GoogleReviews from "../zones-desservies/component/GoogleReviews";
import Testimonials from "../zones-desservies/component/Testimonials";
import Faq from "../zones-desservies/component/Faq";
import Hero from "../zones-desservies/component/Hero";
import Partenaires from "../zones-desservies/component/Partenaires";
import Tableau from "../zones-desservies/component/Tableau";
import Link from "next/link";

interface CityPageTemplateProps {
  // Informations de base
  cityName: string;
  backgroundImage: string;
  
  // Section principale
  mainTitle: string;
  mainDescription: string;
  
  // Section interventions
  interventionsTitle: string;
  interventionsDescription: string;
  
  // Section pourquoi choisir
  whyChooseTitle: string;
  whyChooseDescription1: string;
  whyChooseDescription2: string;
  whyChooseDescription3: string;
  
  // Cartes d'information
  card1: {
    title: string;
    description: string;
  };
  card2: {
    title: string;
    description: string;
  };
  card3: {
    title: string;
    description: string;
  };
  card4: {
    title: string;
    description: string;
  };
  
  // Section FAQ
  faqQuestions: Array<{
    question: string;
    answer: string;
  }>;
  
  // Section enrichie
  section1: {
    title: string;
    content: string[];
  };
  section2: {
    title: string;
    content: string[];
  };
  section3: {
    title: string;
    content: string[];
  };
  section4: {
    title: string;
    content: string[];
  };
  
  // CTA final
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

export default function CityPageTemplate({
  cityName,
  backgroundImage,
  mainTitle,
  mainDescription,
  interventionsTitle,
  interventionsDescription,
  whyChooseTitle,
  whyChooseDescription1,
  whyChooseDescription2,
  whyChooseDescription3,
  card1,
  card2,
  card3,
  card4,
  faqQuestions,
  section1,
  section2,
  section3,
  section4,
  ctaTitle,
  ctaDescription,
  ctaButtonText
}: CityPageTemplateProps) {
  return (
    <main className="px-0">
      {/* Hero Section */}
      <section className="w-full">
        <Hero ville={cityName} backgroundImage={backgroundImage} />
      </section>
      
      {/* Fil d'Ariane */}
      <nav className="max-w-7xl mx-auto px-4 text-sm text-gray-600 my-6" aria-label="Fil d'Ariane">
        <ol className="list-reset flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:underline text-[#03144a]">Accueil</Link>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link href="/zones-desservies" className="hover:underline text-[#03144a]">Zones desservies</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-500">{cityName}</li>
        </ol>
      </nav>
      
      {/* Section principale */}
      <section className="my-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">{mainTitle}</h2>
          <p className="text-gray-800 leading-relaxed text-center">{mainDescription}</p>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="my-20">
        <GoogleReviews ville={cityName} />
      </section>

      {/* Section interventions */}
      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/handshake.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#03144a]/80 via-[#03144a]/60 to-[#03144a]/80 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#03144a] rounded-full mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#03144a] mb-6 leading-tight">{interventionsTitle}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#03144a] to-blue-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">{interventionsDescription}</p>
            </div>
            
            {/* Points clés */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#03144a] mb-2">Intervention rapide</h3>
                <p className="text-sm text-gray-600">Réponse sous 24h</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-white border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#03144a] mb-2">Devis gratuit</h3>
                <p className="text-sm text-gray-600">Sans engagement</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-white border border-purple-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#03144a] mb-2">Garantie</h3>
                <p className="text-sm text-gray-600">10 ans d&apos;expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <Testimonials />
      </section>

      {/* Section pourquoi choisir */}
      <div
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 bg-white p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#03144a] mb-4 text-center">{whyChooseTitle}</h2>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">{whyChooseDescription1}</p>
            <p className="text-gray-800 leading-relaxed mb-4 text-center">{whyChooseDescription2}</p>
            <p className="text-gray-800 leading-relaxed text-center">{whyChooseDescription3}</p>
          </section>
        </div>
      </div>

      {/* Cartes d'information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
        <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <h2 className="text-xl font-semibold text-white mb-4 text-center">{card1.title}</h2>
          <p className="text-white leading-relaxed text-center">{card1.description}</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-[#03144a] mx-auto mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">{card2.title}</h2>
          <p className="text-gray-800 leading-relaxed text-center">{card2.description}</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-[#03144a] mx-auto mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
          </svg>
          <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">{card3.title}</h2>
          <p className="text-gray-800 leading-relaxed text-center">{card3.description}</p>
        </div>

        <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white mx-auto mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
          </svg>
          <h2 className="text-xl font-semibold text-white mb-4 text-center">{card4.title}</h2>
          <p className="text-white leading-relaxed text-center">{card4.description}</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 mb-12"
        style={{ backgroundImage: "url('/FAQIMG.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#03144a]/80 via-[#03144a]/60 to-[#03144a]/80 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">FAQ</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
            <Faq questions={faqQuestions} />
          </div>
        </div>
      </div>

      {/* Sections enrichies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">{section1.title}</h2>
          {section1.content.map((paragraph, index) => (
            <p key={index} className="text-[#03144a] leading-relaxed text-center mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">{section2.title}</h2>
          {section2.content.map((paragraph, index) => (
            <p key={index} className="text-white leading-relaxed text-center mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="bg-[#03144a]/90 backdrop-blur-md rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">{section3.title}</h2>
          {section3.content.map((paragraph, index) => (
            <p key={index} className="text-white leading-relaxed text-center mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-[#03144a] mb-4 text-center">{section4.title}</h2>
          {section4.content.map((paragraph, index) => (
            <p key={index} className="text-[#03144a] leading-relaxed text-center mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="text-center my-20">
        <h2 className="text-2xl font-semibold text-[#03144a] mb-6 text-center">{ctaTitle}</h2>
        <p className="text-gray-800 leading-relaxed mb-6 text-center">{ctaDescription}</p>
        <Link
          href="/contact"
          className="inline-block bg-[#03144a] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#021037] transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          {ctaButtonText}
        </Link>
      </section>

      {/* Partenaires et Tableau */}
      <section className="my-20">
        <Partenaires />
      </section>
      <section className="my-20">
        <Tableau />
      </section>
    </main>
  );
} 