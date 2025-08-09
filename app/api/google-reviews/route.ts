import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const reviews = await prisma.googleAdvice.findMany({
      orderBy: {
        publishedDate: 'desc'
      },
      select: {
        id: true,
        fullName: true,
        content: true,
        rating: true,
        publishedDate: true
      }
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Erreur lors de la récupération des avis Google:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des avis' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, content, rating, publishedDate } = body;

    const review = await prisma.googleAdvice.create({
      data: {
        fullName,
        content,
        rating,
        publishedDate: new Date(publishedDate)
      }
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'avis Google:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'ajout de l\'avis' },
      { status: 500 }
    );
  }
} 