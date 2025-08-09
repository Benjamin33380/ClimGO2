import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const article = await prisma.article.findUnique({
      where: { id: resolvedParams.id },
      include: {
        category: {
          select: {
            name: true,
            color: true,
            slug: true,
          }
        },
        admin: {
          select: {
            name: true,
            email: true,
          }
        },
        _count: {
          select: {
            comments: true,
            ratings: true,
          }
        }
      }
    });

    if (!article) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de l\'article' },
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

    // Vérifier si l'article existe
    const existingArticle = await prisma.article.findUnique({
      where: { id: resolvedParams.id },
    });

    if (!existingArticle) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Vérifier l'unicité du slug si modifié
    if (body.slug && body.slug !== existingArticle.slug) {
      const slugExists = await prisma.article.findUnique({
        where: { slug: body.slug },
      });

      if (slugExists) {
        return NextResponse.json(
          { error: 'Ce slug existe déjà' },
          { status: 400 }
        );
      }
    }

    // Mettre à jour l'article
    const updatedArticle = await prisma.article.update({
      where: { id: resolvedParams.id },
      data: {
        title: body.title || existingArticle.title,
        content: body.content || existingArticle.content,
        slug: body.slug || existingArticle.slug,
        imageUrl: body.imageUrl || existingArticle.imageUrl,
        excerpt: body.excerpt || existingArticle.excerpt,
        published: body.published !== undefined ? body.published : existingArticle.published,
        metaTitle: body.metaTitle || existingArticle.metaTitle,
        metaDesc: body.metaDesc || existingArticle.metaDesc,
        metaKeywords: body.metaKeywords || existingArticle.metaKeywords,
        categoryId: body.categoryId || existingArticle.categoryId,
      },
      include: {
        category: {
          select: {
            name: true,
            color: true,
            slug: true,
          }
        },
        admin: {
          select: {
            name: true,
            email: true,
          }
        },
        _count: {
          select: {
            comments: true,
            ratings: true,
          }
        }
      }
    });

    return NextResponse.json(updatedArticle);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de l\'article' },
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
    
    // Vérifier si l'article existe
    const existingArticle = await prisma.article.findUnique({
      where: { id: resolvedParams.id },
    });

    if (!existingArticle) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    // Supprimer l'article
    await prisma.article.delete({
      where: { id: resolvedParams.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de l\'article' },
      { status: 500 }
    );
  }
} 