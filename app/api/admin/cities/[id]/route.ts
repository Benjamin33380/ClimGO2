import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Récupérer une page de ville spécifique
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const city = await prisma.cityPage.findUnique({
      where: { id: params.id },
    });

    if (!city) {
      return NextResponse.json(
        { error: 'Page de ville non trouvée' },
        { status: 404 }
      );
    }

    return NextResponse.json(city);
  } catch (error) {
    console.error('Erreur lors de la récupération de la ville:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de la ville' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// PUT - Modifier une page de ville
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    // Vérifier si la ville existe
    const existingCity = await prisma.cityPage.findUnique({
      where: { id: params.id },
    });

    if (!existingCity) {
      return NextResponse.json(
        { error: 'Page de ville non trouvée' },
        { status: 404 }
      );
    }

    // Vérifier si le slug existe déjà (sauf pour cette ville)
    if (body.slug && body.slug !== existingCity.slug) {
      const slugExists = await prisma.cityPage.findUnique({
        where: { slug: body.slug },
      });

      if (slugExists) {
        return NextResponse.json(
          { error: 'Une page avec ce slug existe déjà' },
          { status: 400 }
        );
      }
    }

    // Mettre à jour la ville
    const updatedCity = await prisma.cityPage.update({
      where: { id: params.id },
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

    return NextResponse.json(updatedCity);
  } catch (error) {
    console.error('Erreur lors de la modification de la ville:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la modification de la ville' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE - Supprimer une page de ville
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Vérifier si la ville existe
    const existingCity = await prisma.cityPage.findUnique({
      where: { id: params.id },
    });

    if (!existingCity) {
      return NextResponse.json(
        { error: 'Page de ville non trouvée' },
        { status: 404 }
      );
    }

    // Supprimer la ville
    await prisma.cityPage.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Page de ville supprimée avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de la ville:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de la ville' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 