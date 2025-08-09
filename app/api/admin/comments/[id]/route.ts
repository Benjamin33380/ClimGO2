import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// PUT - Modifier un commentaire (approuver/rejeter)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    // Vérifier si le commentaire existe
    const existingComment = await prisma.comment.findUnique({
      where: { id: params.id },
    });

    if (!existingComment) {
      return NextResponse.json(
        { error: 'Commentaire non trouvé' },
        { status: 404 }
      );
    }

    // Mettre à jour le commentaire
    const updatedComment = await prisma.comment.update({
      where: { id: params.id },
      data: {
        approved: body.approved !== undefined ? body.approved : existingComment.approved,
      },
    });

    return NextResponse.json(updatedComment);
  } catch (error) {
    console.error('Erreur lors de la modification du commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la modification du commentaire' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE - Supprimer un commentaire
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Vérifier si le commentaire existe
    const existingComment = await prisma.comment.findUnique({
      where: { id: params.id },
    });

    if (!existingComment) {
      return NextResponse.json(
        { error: 'Commentaire non trouvé' },
        { status: 404 }
      );
    }

    // Supprimer le commentaire
    await prisma.comment.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Commentaire supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du commentaire' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 