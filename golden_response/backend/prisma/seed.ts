import 'dotenv/config';
import { PrismaClient, PropertyStatus, PropertyType } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL ?? 'postgresql://localhost:5432/realestate_db',
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  // Create Agents
  const agents = await Promise.all([
    prisma.agent.upsert({
      where: { email: 'sophia.chen@luxerealty.com' },
      update: {},
      create: {
        name: 'Sophia Chen',
        email: 'sophia.chen@luxerealty.com',
        phone: '+12125551001',
        image: 'https://picsum.photos/seed/agent1/200/200',
      },
    }),
    prisma.agent.upsert({
      where: { email: 'marcus.wellington@luxerealty.com' },
      update: {},
      create: {
        name: 'Marcus Wellington',
        email: 'marcus.wellington@luxerealty.com',
        phone: '+12125551002',
        image: 'https://picsum.photos/seed/agent2/200/200',
      },
    }),
    prisma.agent.upsert({
      where: { email: 'isabella.romano@luxerealty.com' },
      update: {},
      create: {
        name: 'Isabella Romano',
        email: 'isabella.romano@luxerealty.com',
        phone: '+12125551003',
        image: 'https://picsum.photos/seed/agent3/200/200',
      },
    }),
  ]);

  console.log(`✅ Created ${agents.length} agents`);

  // Create Properties
  const properties = [
    {
      title: 'Oceanfront Villa with Infinity Pool',
      description: 'A breathtaking oceanfront villa featuring 180-degree panoramic views, an infinity pool that merges with the horizon, and Italian marble throughout. This architectural masterpiece offers the ultimate in coastal luxury living with private beach access.',
      price: 12500000,
      location: '1200 Pacific Coast Hwy',
      city: 'Malibu',
      type: PropertyType.VILLA,
      status: PropertyStatus.FOR_SALE,
      bedrooms: 7,
      bathrooms: 6,
      areaSize: 8500,
      images: [
        'https://picsum.photos/seed/prop1a/800/600',
        'https://picsum.photos/seed/prop1b/800/600',
        'https://picsum.photos/seed/prop1c/800/600',
        'https://picsum.photos/seed/prop1d/800/600',
      ],
      amenities: ['Infinity Pool', 'Private Beach', 'Wine Cellar', 'Smart Home', 'Home Theater', 'Helicopter Pad'],
      lat: 34.0259,
      lng: -118.7798,
      isFeatured: true,
      agentId: agents[0].id,
    },
    {
      title: 'Manhattan Skyline Penthouse',
      description: 'Perched atop one of Manhattan\'s most prestigious towers, this penthouse offers unrivaled 360-degree views of the city skyline. Features include a private elevator, chef\'s kitchen, and a wraparound terrace perfect for entertaining.',
      price: 8750000,
      location: '432 Park Avenue, PH',
      city: 'Manhattan',
      type: PropertyType.PENTHOUSE,
      status: PropertyStatus.FOR_SALE,
      bedrooms: 5,
      bathrooms: 5,
      areaSize: 6200,
      images: [
        'https://picsum.photos/seed/prop2a/800/600',
        'https://picsum.photos/seed/prop2b/800/600',
        'https://picsum.photos/seed/prop2c/800/600',
      ],
      amenities: ['Private Elevator', 'Concierge', 'Rooftop Terrace', 'Gym', 'Spa', 'Doorman'],
      lat: 40.7614,
      lng: -73.9718,
      isFeatured: true,
      agentId: agents[1].id,
    },
    {
      title: 'Beverly Hills Modern Estate',
      description: 'A stunning contemporary estate in the heart of Beverly Hills featuring walls of glass, a resort-style pool, and impeccable landscaping. This home seamlessly blends indoor and outdoor living spaces.',
      price: 15800000,
      location: '900 N Beverly Dr',
      city: 'Beverly Hills',
      type: PropertyType.HOUSE,
      status: PropertyStatus.FOR_SALE,
      bedrooms: 8,
      bathrooms: 6,
      areaSize: 11000,
      images: [
        'https://picsum.photos/seed/prop3a/800/600',
        'https://picsum.photos/seed/prop3b/800/600',
        'https://picsum.photos/seed/prop3c/800/600',
      ],
      amenities: ['Pool', 'Guest House', 'Tennis Court', 'Wine Room', 'Smart Home', 'Security'],
      lat: 34.0736,
      lng: -118.4004,
      isFeatured: true,
      agentId: agents[2].id,
    },
    {
      title: 'South Beach Luxury Condo',
      description: 'Experience the vibrant lifestyle of South Beach from this exquisitely designed luxury condo. Floor-to-ceiling windows frame stunning ocean and city views, while world-class amenities await below.',
      price: 3200000,
      location: '300 S Pointe Dr',
      city: 'Miami',
      type: PropertyType.CONDO,
      status: PropertyStatus.FOR_SALE,
      bedrooms: 3,
      bathrooms: 3,
      areaSize: 2800,
      images: [
        'https://picsum.photos/seed/prop4a/800/600',
        'https://picsum.photos/seed/prop4b/800/600',
        'https://picsum.photos/seed/prop4c/800/600',
      ],
      amenities: ['Beach Access', 'Pool', 'Fitness Center', 'Valet Parking', 'Concierge'],
      lat: 25.7617,
      lng: -80.1918,
      isFeatured: false,
      agentId: agents[0].id,
    },
    {
      title: 'Dubai Marina Waterfront Apartment',
      description: 'A prestigious apartment in Dubai Marina offering breathtaking views of the Arabian Gulf. Features premium finishes, smart home technology, and access to world-class marina facilities.',
      price: 2100000,
      location: 'Marina Walk, Tower 8',
      city: 'Dubai',
      type: PropertyType.APARTMENT,
      status: PropertyStatus.FOR_SALE,
      bedrooms: 3,
      bathrooms: 2,
      areaSize: 2200,
      images: [
        'https://picsum.photos/seed/prop5a/800/600',
        'https://picsum.photos/seed/prop5b/800/600',
        'https://picsum.photos/seed/prop5c/800/600',
      ],
      amenities: ['Marina Views', 'Pool', 'Gym', 'Smart Home', 'Concierge', 'Parking'],
      lat: 25.0804,
      lng: 55.1403,
      isFeatured: true,
      agentId: agents[1].id,
    },
    {
      title: 'Knightsbridge Georgian Townhouse',
      description: 'A magnificent Georgian townhouse in London\'s most exclusive neighborhood. Meticulously restored with period details while incorporating modern luxury amenities across six floors.',
      price: 18500000,
      location: 'Brompton Square',
      city: 'London',
      type: PropertyType.HOUSE,
      status: PropertyStatus.FOR_SALE,
      bedrooms: 6,
      bathrooms: 5,
      areaSize: 7500,
      images: [
        'https://picsum.photos/seed/prop6a/800/600',
        'https://picsum.photos/seed/prop6b/800/600',
        'https://picsum.photos/seed/prop6c/800/600',
      ],
      amenities: ['Garden', 'Wine Cellar', 'Library', 'Staff Quarters', 'Garage', 'Lift'],
      lat: 51.4975,
      lng: -0.1657,
      isFeatured: true,
      agentId: agents[2].id,
    },
    {
      title: 'Aspen Mountain Retreat',
      description: 'A luxurious ski-in/ski-out retreat nestled in the mountains of Aspen. Featuring a grand stone fireplace, heated floors, and panoramic mountain views from every room.',
      price: 9200000,
      location: '100 E Cooper Ave',
      city: 'Aspen',
      type: PropertyType.VILLA,
      status: PropertyStatus.FOR_SALE,
      bedrooms: 5,
      bathrooms: 5,
      areaSize: 6800,
      images: [
        'https://picsum.photos/seed/prop7a/800/600',
        'https://picsum.photos/seed/prop7b/800/600',
        'https://picsum.photos/seed/prop7c/800/600',
      ],
      amenities: ['Ski-In/Ski-Out', 'Hot Tub', 'Fireplace', 'Wine Room', 'Home Theater', 'Sauna'],
      lat: 39.1911,
      lng: -106.8175,
      isFeatured: false,
      agentId: agents[0].id,
    },
    {
      title: 'Monaco Harbour View Apartment',
      description: 'An elegant apartment overlooking the iconic Monaco harbour. This residence offers the epitome of Mediterranean luxury with access to the principality\'s finest amenities.',
      price: 6400000,
      location: 'Avenue Princess Grace',
      city: 'Monaco',
      type: PropertyType.APARTMENT,
      status: PropertyStatus.FOR_RENT,
      bedrooms: 3,
      bathrooms: 2,
      areaSize: 2400,
      images: [
        'https://picsum.photos/seed/prop8a/800/600',
        'https://picsum.photos/seed/prop8b/800/600',
        'https://picsum.photos/seed/prop8c/800/600',
      ],
      amenities: ['Harbour Views', 'Concierge', 'Pool', 'Gym', 'Security', 'Parking'],
      lat: 43.7384,
      lng: 7.4246,
      isFeatured: false,
      agentId: agents[1].id,
    },
    {
      title: 'Santorini Cliffside Villa',
      description: 'A stunning whitewashed villa perched on the caldera cliffs of Santorini. Features a private infinity pool, outdoor dining terrace, and mesmerizing sunset views over the Aegean Sea.',
      price: 4800000,
      location: 'Oia Village, Caldera',
      city: 'Santorini',
      type: PropertyType.VILLA,
      status: PropertyStatus.FOR_SALE,
      bedrooms: 4,
      bathrooms: 3,
      areaSize: 3200,
      images: [
        'https://picsum.photos/seed/prop9a/800/600',
        'https://picsum.photos/seed/prop9b/800/600',
        'https://picsum.photos/seed/prop9c/800/600',
      ],
      amenities: ['Infinity Pool', 'Sunset Views', 'Outdoor Kitchen', 'Wine Cellar', 'Private Terrace'],
      lat: 36.4618,
      lng: 25.3753,
      isFeatured: true,
      agentId: agents[2].id,
    },
    {
      title: 'Tokyo Shibuya Modern Loft',
      description: 'A sleek, modern loft in the vibrant Shibuya district. Floor-to-ceiling windows provide stunning views of the Tokyo skyline, while high-end finishes and smart home technology create the ultimate urban retreat.',
      price: 1850000,
      location: 'Shibuya Crossing Tower',
      city: 'Tokyo',
      type: PropertyType.APARTMENT,
      status: PropertyStatus.FOR_RENT,
      bedrooms: 2,
      bathrooms: 2,
      areaSize: 1500,
      images: [
        'https://picsum.photos/seed/prop10a/800/600',
        'https://picsum.photos/seed/prop10b/800/600',
        'https://picsum.photos/seed/prop10c/800/600',
      ],
      amenities: ['City Views', 'Smart Home', 'Concierge', 'Gym', 'Rooftop Garden'],
      lat: 35.6595,
      lng: 139.7004,
      isFeatured: false,
      agentId: agents[0].id,
    },
    {
      title: 'Palm Jumeirah Signature Penthouse',
      description: 'The crown jewel of Palm Jumeirah, this signature penthouse offers unmatched luxury with private pool, butler service, and breathtaking views of the Arabian Gulf and Dubai skyline.',
      price: 22000000,
      location: 'The Royal Atlantis, Palm Jumeirah',
      city: 'Dubai',
      type: PropertyType.PENTHOUSE,
      status: PropertyStatus.FOR_SALE,
      bedrooms: 6,
      bathrooms: 7,
      areaSize: 12000,
      images: [
        'https://picsum.photos/seed/prop11a/800/600',
        'https://picsum.photos/seed/prop11b/800/600',
        'https://picsum.photos/seed/prop11c/800/600',
      ],
      amenities: ['Private Pool', 'Butler Service', 'Spa', 'Private Cinema', 'Wine Room', 'Helipad'],
      lat: 25.1124,
      lng: 55.1390,
      isFeatured: true,
      agentId: agents[1].id,
    },
    {
      title: 'Lake Como Waterfront Estate',
      description: 'A magnificent lakeside estate on the shores of Lake Como, once home to Italian nobility. Features include a private dock, terraced gardens, and a guest villa, all surrounded by breathtaking Alpine scenery.',
      price: 28000000,
      location: 'Via Regina, Bellagio',
      city: 'Lake Como',
      type: PropertyType.VILLA,
      status: PropertyStatus.FOR_SALE,
      bedrooms: 8,
      bathrooms: 6,
      areaSize: 14000,
      images: [
        'https://picsum.photos/seed/prop12a/800/600',
        'https://picsum.photos/seed/prop12b/800/600',
        'https://picsum.photos/seed/prop12c/800/600',
      ],
      amenities: ['Private Dock', 'Guest Villa', 'Terraced Gardens', 'Wine Cellar', 'Staff Quarters', 'Boathouse'],
      lat: 45.9853,
      lng: 9.2617,
      isFeatured: false,
      agentId: agents[2].id,
    },
  ];

  for (const property of properties) {
    await prisma.property.create({ data: property });
  }

  console.log(`✅ Created ${properties.length} properties`);
  console.log('🎉 Seeding complete!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
