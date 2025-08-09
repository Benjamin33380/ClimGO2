import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ articleId: string }> }
) {
  try {
    const resolvedParams = await params;
    const comments = await prisma.comment.findMany({
      where: {
        articleId: resolvedParams.articleId,
        approved: true // Seulement les commentaires approuvés
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        article: {
          select: {
            title: true,
            slug: true
          }
        }
      }
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error('Erreur lors de la récupération des commentaires:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des commentaires' },
      { status: 500 }
    );
  }
} 