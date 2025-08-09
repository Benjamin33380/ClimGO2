import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Lister toutes les catégories
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        color: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            articles: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des catégories' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// POST - Créer une nouvelle catégorie
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation des champs requis
    if (!body.name || !body.slug) {
      return NextResponse.json(
        { error: 'Le nom et le slug sont requis' },
        { status: 400 }
      );
    }

    // Vérifier si le slug existe déjà
    const existingCategory = await prisma.category.findUnique({
      where: { slug: body.slug },
    });

    if (existingCategory) {
      return NextResponse.json(
        { error: 'Une catégorie avec ce slug existe déjà' },
        { status: 400 }
      );
    }

    // Créer la nouvelle catégorie
    const newCategory = await prisma.category.create({
      data: {
        name: body.name,
        slug: body.slug,
        description: body.description || '',
        color: body.color || '#3B82F6',
        isActive: body.isActive !== undefined ? body.isActive : true,
      },
    });

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de la catégorie:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de la catégorie' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 