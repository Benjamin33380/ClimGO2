import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const comment = await prisma.comment.findUnique({
      where: { id: resolvedParams.id },
      include: {
        article: {
          select: {
            title: true,
            slug: true
          }
        }
      }
    });

    if (!comment) {
      return NextResponse.json(
        { error: 'Commentaire non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json(comment);
  } catch (error) {
    console.error('Erreur lors de la récupération du commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération du commentaire' },
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

    // Vérifier si le commentaire existe
    const existingComment = await prisma.comment.findUnique({
      where: { id: resolvedParams.id },
    });

    if (!existingComment) {
      return NextResponse.json(
        { error: 'Commentaire non trouvé' },
        { status: 404 }
      );
    }

    // Mettre à jour le commentaire
    const updatedComment = await prisma.comment.update({
      where: { id: resolvedParams.id },
      data: {
        approved: body.approved !== undefined ? body.approved : existingComment.approved,
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

    return NextResponse.json(updatedComment);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du commentaire' },
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
    
    // Vérifier si le commentaire existe
    const existingComment = await prisma.comment.findUnique({
      where: { id: resolvedParams.id },
    });

    if (!existingComment) {
      return NextResponse.json(
        { error: 'Commentaire non trouvé' },
        { status: 404 }
      );
    }

    // Supprimer le commentaire
    await prisma.comment.delete({
      where: { id: resolvedParams.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la suppression du commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du commentaire' },
      { status: 500 }
    );
  }
} 