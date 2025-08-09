import { Metadata } from 'next';
import { PrismaClient } from '@prisma/client';
import CityPageTemplate from '../../components/CityPageTemplate';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Génération des métadonnées dynamiques
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const cityPage = await prisma.cityPage.findUnique({
      where: { slug: resolvedParams.slug },
      select: {
        title: true,
        description: true,
        keywords: true,
        cityName: true,
      },
    });

    if (!cityPage) {
      return {
        title: 'Page non trouvée',
        description: 'La page demandée n\'existe pas.',
      };
    }

    return {
      title: cityPage.title,
      description: cityPage.description,
      keywords: cityPage.keywords,
      openGraph: {
        title: cityPage.title,
        description: cityPage.description,
        type: 'website',
      },
    };
  } catch (error) {
    console.error('Erreur lors de la génération des métadonnées:', error);
    return {
      title: 'ClimGO - Chauffage et Climatisation',
      description: 'Expert en chauffage et climatisation dans votre région.',
    };
  }
}

export default async function CityPage({ params }: PageProps) {
  try {
    const resolvedParams = await params;
    const cityPage = await prisma.cityPage.findUnique({
      where: { slug: resolvedParams.slug },
    });

    if (!cityPage) {
      notFound();
    }

    // Conversion des données JSON
    const faqQuestions = Array.isArray(cityPage.faqQuestions) 
      ? (cityPage.faqQuestions.filter((item: any) => item && typeof item === 'object' && 'question' in item && 'answer' in item) as { question: string; answer: string; }[]) // eslint-disable-line @typescript-eslint/no-explicit-any
      : [];

    const section1Content = Array.isArray(cityPage.section1Content) 
      ? (cityPage.section1Content.filter((item: any) => typeof item === 'string') as string[]) // eslint-disable-line @typescript-eslint/no-explicit-any
      : [];
    const section2Content = Array.isArray(cityPage.section2Content) 
      ? (cityPage.section2Content.filter((item: any) => typeof item === 'string') as string[]) // eslint-disable-line @typescript-eslint/no-explicit-any
      : [];
    const section3Content = Array.isArray(cityPage.section3Content) 
      ? (cityPage.section3Content.filter((item: any) => typeof item === 'string') as string[]) // eslint-disable-line @typescript-eslint/no-explicit-any
      : [];
    const section4Content = Array.isArray(cityPage.section4Content) 
      ? (cityPage.section4Content.filter((item: any) => typeof item === 'string') as string[]) // eslint-disable-line @typescript-eslint/no-explicit-any
      : [];

    return (
      <CityPageTemplate
        cityName={cityPage.cityName}
        backgroundImage={cityPage.backgroundImage}
        
        // Section principale
        mainTitle={cityPage.mainTitle}
        mainDescription={cityPage.mainDescription}
        
        // Section interventions
        interventionsTitle={cityPage.interventionsTitle}
        interventionsDescription={cityPage.interventionsDescription}
        
        // Section pourquoi choisir
        whyChooseTitle={cityPage.whyChooseTitle}
        whyChooseDescription1={cityPage.whyChooseDescription1}
        whyChooseDescription2={cityPage.whyChooseDescription2}
        whyChooseDescription3={cityPage.whyChooseDescription3}
        
        // Cartes d'information
        card1={{
          title: cityPage.card1Title,
          description: cityPage.card1Description,
        }}
        card2={{
          title: cityPage.card2Title,
          description: cityPage.card2Description,
        }}
        card3={{
          title: cityPage.card3Title,
          description: cityPage.card3Description,
        }}
        card4={{
          title: cityPage.card4Title,
          description: cityPage.card4Description,
        }}
        
        // FAQ
        faqQuestions={faqQuestions}
        
        // Sections enrichies
        section1={{
          title: cityPage.section1Title,
          content: section1Content,
        }}
        section2={{
          title: cityPage.section2Title,
          content: section2Content,
        }}
        section3={{
          title: cityPage.section3Title,
          content: section3Content,
        }}
        section4={{
          title: cityPage.section4Title,
          content: section4Content,
        }}
        
        // CTA final
        ctaTitle={cityPage.ctaTitle}
        ctaDescription={cityPage.ctaDescription}
        ctaButtonText={cityPage.ctaButtonText}
      />
    );
  } catch (error) {
    console.error('Erreur lors du chargement de la page:', error);
    notFound();
  }
} 