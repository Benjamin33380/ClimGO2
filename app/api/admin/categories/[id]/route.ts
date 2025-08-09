import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Récupérer une catégorie spécifique
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const category = await prisma.category.findUnique({
      where: { id: params.id },
      include: {
        articles: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
    });

    if (!category) {
      return NextResponse.json(
        { error: 'Catégorie non trouvée' },
        { status: 404 }
      );
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error('Erreur lors de la récupération de la catégorie:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de la catégorie' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// PUT - Modifier une catégorie
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    // Vérifier si la catégorie existe
    const existingCategory = await prisma.category.findUnique({
      where: { id: params.id },
    });

    if (!existingCategory) {
      return NextResponse.json(
        { error: 'Catégorie non trouvée' },
        { status: 404 }
      );
    }

    // Vérifier si le slug existe déjà (sauf pour cette catégorie)
    if (body.slug && body.slug !== existingCategory.slug) {
      const slugExists = await prisma.category.findUnique({
        where: { slug: body.slug },
      });

      if (slugExists) {
        return NextResponse.json(
          { error: 'Une catégorie avec ce slug existe déjà' },
          { status: 400 }
        );
      }
    }

    // Mettre à jour la catégorie
    const updatedCategory = await prisma.category.update({
      where: { id: params.id },
      data: {
        name: body.name,
        slug: body.slug,
        description: body.description || '',
        color: body.color || '#3B82F6',
        isActive: body.isActive !== undefined ? body.isActive : true,
      },
    });

    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.error('Erreur lors de la modification de la catégorie:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la modification de la catégorie' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE - Supprimer une catégorie
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Vérifier si la catégorie existe
    const existingCategory = await prisma.category.findUnique({
      where: { id: params.id },
      include: {
        articles: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!existingCategory) {
      return NextResponse.json(
        { error: 'Catégorie non trouvée' },
        { status: 404 }
      );
    }

    // Vérifier s'il y a des articles liés
    if (existingCategory.articles.length > 0) {
      return NextResponse.json(
        { error: 'Impossible de supprimer une catégorie qui contient des articles' },
        { status: 400 }
      );
    }

    // Supprimer la catégorie
    await prisma.category.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Catégorie supprimée avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de la catégorie:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de la catégorie' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 