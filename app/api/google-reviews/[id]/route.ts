import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { fullName, content, rating, publishedDate } = body;

    const review = await prisma.googleAdvice.update({
      where: {
        id: id
      },
      data: {
        fullName,
        content,
        rating,
        publishedDate: new Date(publishedDate)
      }
    });

    return NextResponse.json(review);
  } catch (error) {
    console.error('Erreur lors de la modification de l\'avis Google:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la modification de l\'avis' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    await prisma.googleAdvice.delete({
      where: {
        id: id
      }
    });

    return NextResponse.json({ message: 'Avis supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'avis Google:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de l\'avis' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 