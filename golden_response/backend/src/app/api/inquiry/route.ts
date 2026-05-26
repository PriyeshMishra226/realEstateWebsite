import { NextResponse } from 'next/server';
import { getMockPropertyById } from '@/lib/mock-data';
import { z } from 'zod';

const inquirySchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(50).trim(),
  email: z.string().email('Invalid email format').trim(),
  phone: z.string().min(5, 'Phone number is required'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000).trim(),
  propertyId: z.string().min(1, 'Property ID is required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = inquirySchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { propertyId } = validation.data;

    const property = getMockPropertyById(propertyId);

    if (!property) {
      return NextResponse.json(
        { success: false, error: 'Property not found' },
        { status: 404 }
      );
    }

    // In production, this would save to DB + send email
    console.log('📩 Inquiry received:', {
      from: validation.data.fullName,
      email: validation.data.email,
      property: property.title,
      agent: property.agent?.name,
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully',
    });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
