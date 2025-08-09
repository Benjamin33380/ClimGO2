import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const category = await prisma.category.findUnique({
      where: { id: resolvedParams.id },
      include: {
        _count: {
          select: {
            articles: true
          }
        }
      }
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
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const body = await request.json();

    // Vérifier si la catégorie existe
    const existingCategory = await prisma.category.findUnique({
      where: { id: resolvedParams.id },
    });

    if (!existingCategory) {
      return NextResponse.json(
        { error: 'Catégorie non trouvée' },
        { status: 404 }
      );
    }

    // Vérifier l'unicité du slug si modifié
    if (body.slug && body.slug !== existingCategory.slug) {
      const slugExists = await prisma.category.findUnique({
        where: { slug: body.slug },
      });

      if (slugExists) {
        return NextResponse.json(
          { error: 'Ce slug existe déjà' },
          { status: 400 }
        );
      }
    }

    // Vérifier l'unicité du nom si modifié
    if (body.name && body.name !== existingCategory.name) {
      const nameExists = await prisma.category.findUnique({
        where: { name: body.name },
      });

      if (nameExists) {
        return NextResponse.json(
          { error: 'Ce nom existe déjà' },
          { status: 400 }
        );
      }
    }

    // Mettre à jour la catégorie
    const updatedCategory = await prisma.category.update({
      where: { id: resolvedParams.id },
      data: {
        name: body.name || existingCategory.name,
        slug: body.slug || existingCategory.slug,
        description: body.description || existingCategory.description,
        color: body.color || existingCategory.color,
        isActive: body.isActive !== undefined ? body.isActive : existingCategory.isActive,
      },
      include: {
        _count: {
          select: {
            articles: true
          }
        }
      }
    });

    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la catégorie:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de la catégorie' },
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
    
    // Vérifier si la catégorie existe
    const existingCategory = await prisma.category.findUnique({
      where: { id: resolvedParams.id },
      include: {
        _count: {
          select: {
            articles: true
          }
        }
      }
    });

    if (!existingCategory) {
      return NextResponse.json(
        { error: 'Catégorie non trouvée' },
        { status: 404 }
      );
    }

    // Vérifier s'il y a des articles liés
    if (existingCategory._count.articles > 0) {
      return NextResponse.json(
        { error: 'Impossible de supprimer une catégorie qui contient des articles' },
        { status: 400 }
      );
    }

    // Supprimer la catégorie
    await prisma.category.delete({
      where: { id: resolvedParams.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la suppression de la catégorie:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de la catégorie' },
      { status: 500 }
    );
  }
} 