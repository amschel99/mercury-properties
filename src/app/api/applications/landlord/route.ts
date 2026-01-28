import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const application = await prisma.landlordApplication.create({
      data: {
        fullName: body.fullName,
        phone: body.phone,
        propertyType: body.propertyType,
        location: body.location,
        message: body.message || null,
      },
    });

    return NextResponse.json({ success: true, id: application.id }, { status: 201 });
  } catch (error) {
    console.error('Error creating landlord application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const applications = await prisma.landlordApplication.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(applications);
  } catch (error) {
    console.error('Error fetching landlord applications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}
