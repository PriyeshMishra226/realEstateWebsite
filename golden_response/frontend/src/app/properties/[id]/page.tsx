import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMockPropertyById, mockProperties } from '@/lib/mock-data';
import PropertyDetailClient from './PropertyDetailClient';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return mockProperties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const property = getMockPropertyById(id);

  if (!property) {
    return { title: 'Property Not Found' };
  }

  return {
    title: `${property.title} | Premium Real Estate`,
    description: `${property.description.substring(0, 155)}... Located in ${property.city}.`,
    openGraph: {
      title: property.title,
      description: property.description.substring(0, 200),
      images: property.images[0] ? [{ url: property.images[0], width: 800, height: 600 }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: property.title,
      description: property.description.substring(0, 200),
      images: property.images[0] ? [property.images[0]] : [],
    },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  const property = getMockPropertyById(id);

  if (!property) {
    notFound();
  }

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description,
    url: `https://luxe-realestate.com/properties/${property.id}`,
    image: property.images,
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'USD',
      availability:
        property.status === 'FOR_SALE'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/PreOrder',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.location,
      addressLocality: property.city,
    },
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.areaSize,
      unitCode: 'FTK',
    },
    amenityFeature: property.amenities.map((a) => ({
      '@type': 'LocationFeatureSpecification',
      name: a,
      value: true,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PropertyDetailClient property={property} />
    </>
  );
}
