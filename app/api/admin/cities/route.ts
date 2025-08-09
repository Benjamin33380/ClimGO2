import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Lister toutes les pages de villes
export async function GET() {
  try {
    const cities = await prisma.cityPage.findMany({
      select: {
        id: true,
        slug: true,
        cityName: true,
        title: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(cities);
  } catch (error) {
    console.error('Erreur lors de la récupération des villes:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des villes' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// POST - Créer une nouvelle page de ville
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation des champs requis
    const requiredFields = [
      'slug', 'title', 'description', 'cityName', 'backgroundImage',
      'mainTitle', 'mainDescription', 'interventionsTitle', 'interventionsDescription',
      'whyChooseTitle', 'whyChooseDescription1', 'whyChooseDescription2', 'whyChooseDescription3',
      'card1Title', 'card1Description', 'card2Title', 'card2Description',
      'card3Title', 'card3Description', 'card4Title', 'card4Description',
      'ctaTitle', 'ctaDescription', 'ctaButtonText'
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Le champ ${field} est requis` },
          { status: 400 }
        );
      }
    }

    // Vérifier si le slug existe déjà
    const existingCity = await prisma.cityPage.findUnique({
      where: { slug: body.slug },
    });

    if (existingCity) {
      return NextResponse.json(
        { error: 'Une page avec ce slug existe déjà' },
        { status: 400 }
      );
    }

    // Créer la nouvelle page de ville
    const newCity = await prisma.cityPage.create({
      data: {
        slug: body.slug,
        title: body.title,
        description: body.description,
        keywords: body.keywords || '',
        cityName: body.cityName,
        backgroundImage: body.backgroundImage,
        mainTitle: body.mainTitle,
        mainDescription: body.mainDescription,
        interventionsTitle: body.interventionsTitle,
        interventionsDescription: body.interventionsDescription,
        whyChooseTitle: body.whyChooseTitle,
        whyChooseDescription1: body.whyChooseDescription1,
        whyChooseDescription2: body.whyChooseDescription2,
        whyChooseDescription3: body.whyChooseDescription3,
        card1Title: body.card1Title,
        card1Description: body.card1Description,
        card2Title: body.card2Title,
        card2Description: body.card2Description,
        card3Title: body.card3Title,
        card3Description: body.card3Description,
        card4Title: body.card4Title,
        card4Description: body.card4Description,
        faqQuestions: body.faqQuestions || [],
        section1Title: body.section1Title || '',
        section1Content: body.section1Content || [],
        section2Title: body.section2Title || '',
        section2Content: body.section2Content || [],
        section3Title: body.section3Title || '',
        section3Content: body.section3Content || [],
        section4Title: body.section4Title || '',
        section4Content: body.section4Content || [],
        ctaTitle: body.ctaTitle,
        ctaDescription: body.ctaDescription,
        ctaButtonText: body.ctaButtonText,
      },
    });

    return NextResponse.json(newCity, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de la ville:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de la ville' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 