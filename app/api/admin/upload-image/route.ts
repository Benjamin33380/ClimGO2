import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'Aucune image fournie' },
        { status: 400 }
      );
    }

    // Vérifier le type de fichier
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Le fichier doit être une image' },
        { status: 400 }
      );
    }

    // Vérifier la taille (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'L\'image ne doit pas dépasser 5MB' },
        { status: 400 }
      );
    }

    // Convertir le fichier en base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = buffer.toString('base64');
    const dataURI = `data:${file.type};base64,${base64Image}`;

    // Upload vers Cloudinary avec signature
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = require('crypto').createHash('sha1')
      .update(`folder=climgo-cities&timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`)
      .digest('hex');
    
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`;
    
    const uploadFormData = new FormData();
    uploadFormData.append('file', dataURI);
    uploadFormData.append('folder', 'climgo-cities');
    uploadFormData.append('timestamp', timestamp.toString());
    uploadFormData.append('signature', signature);
    uploadFormData.append('api_key', process.env.CLOUDINARY_API_KEY || '');

    const uploadResponse = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: uploadFormData,
    });

    if (!uploadResponse.ok) {
      const errorData = await uploadResponse.text();
      console.error('Erreur Cloudinary:', errorData);
      return NextResponse.json(
        { error: 'Erreur lors de l\'upload vers Cloudinary' },
        { status: 500 }
      );
    }

    const uploadResult = await uploadResponse.json();

    return NextResponse.json({
      success: true,
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    });

  } catch (error) {
    console.error('Erreur lors de l\'upload:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'upload de l\'image' },
      { status: 500 }
    );
  }
} 