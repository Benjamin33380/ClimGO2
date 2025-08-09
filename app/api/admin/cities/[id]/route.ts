import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const city = await prisma.cityPage.findUnique({
      where: { id: resolvedParams.id },
    });

    if (!city) {
      return NextResponse.json(
        { error: 'Page de ville non trouvée' },
        { status: 404 }
      );
    }

    return NextResponse.json(city);
  } catch (error) {
    console.error('Erreur lors de la récupération de la page de ville:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de la page de ville' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const body = await request.json();

    // Vérifier si la page de ville existe
    const existingCity = await prisma.cityPage.findUnique({
      where: { id: resolvedParams.id },
    });

    if (!existingCity) {
      return NextResponse.json(
        { error: 'Page de ville non trouvée' },
        { status: 404 }
      );
    }

    // Vérifier l'unicité du slug si modifié
    if (body.slug && body.slug !== existingCity.slug) {
      const slugExists = await prisma.cityPage.findUnique({
        where: { slug: body.slug },
      });

      if (slugExists) {
        return NextResponse.json(
          { error: 'Ce slug existe déjà' },
          { status: 400 }
        );
      }
    }

    // Mettre à jour la page de ville
    const updatedCity = await prisma.cityPage.update({
      where: { id: resolvedParams.id },
      data: {
        slug: body.slug || existingCity.slug,
        title: body.title || existingCity.title,
        description: body.description || existingCity.description,
        keywords: body.keywords || existingCity.keywords,
        cityName: body.cityName || existingCity.cityName,
        backgroundImage: body.backgroundImage || existingCity.backgroundImage,
        mainTitle: body.mainTitle || existingCity.mainTitle,
        mainDescription: body.mainDescription || existingCity.mainDescription,
        interventionsTitle: body.interventionsTitle || existingCity.interventionsTitle,
        interventionsDescription: body.interventionsDescription || existingCity.interventionsDescription,
        whyChooseTitle: body.whyChooseTitle || existingCity.whyChooseTitle,
        whyChooseDescription1: body.whyChooseDescription1 || existingCity.whyChooseDescription1,
        whyChooseDescription2: body.whyChooseDescription2 || existingCity.whyChooseDescription2,
        whyChooseDescription3: body.whyChooseDescription3 || existingCity.whyChooseDescription3,
        card1Title: body.card1Title || existingCity.card1Title,
        card1Description: body.card1Description || existingCity.card1Description,
        card2Title: body.card2Title || existingCity.card2Title,
        card2Description: body.card2Description || existingCity.card2Description,
        card3Title: body.card3Title || existingCity.card3Title,
        card3Description: body.card3Description || existingCity.card3Description,
        card4Title: body.card4Title || existingCity.card4Title,
        card4Description: body.card4Description || existingCity.card4Description,
        faqQuestions: body.faqQuestions || existingCity.faqQuestions,
        section1Title: body.section1Title || existingCity.section1Title,
        section1Content: body.section1Content || existingCity.section1Content,
        section2Title: body.section2Title || existingCity.section2Title,
        section2Content: body.section2Content || existingCity.section2Content,
        section3Title: body.section3Title || existingCity.section3Title,
        section3Content: body.section3Content || existingCity.section3Content,
        section4Title: body.section4Title || existingCity.section4Title,
        section4Content: body.section4Content || existingCity.section4Content,
        ctaTitle: body.ctaTitle || existingCity.ctaTitle,
        ctaDescription: body.ctaDescription || existingCity.ctaDescription,
        ctaButtonText: body.ctaButtonText || existingCity.ctaButtonText,
      },
    });

    return NextResponse.json(updatedCity);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la page de ville:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de la page de ville' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    
    // Vérifier si la page de ville existe
    const existingCity = await prisma.cityPage.findUnique({
      where: { id: resolvedParams.id },
    });

    if (!existingCity) {
      return NextResponse.json(
        { error: 'Page de ville non trouvée' },
        { status: 404 }
      );
    }

    // Supprimer la page de ville
    await prisma.cityPage.delete({
      where: { id: resolvedParams.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la suppression de la page de ville:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de la page de ville' },
      { status: 500 }
    );
  }
} 