import type { Property, Agent } from '@/types';

const agents: Agent[] = [
  {
    id: 'agent-001',
    name: 'Sophia Chen',
    email: 'sophia.chen@luxerealty.com',
    phone: '+1 (212) 555-1001',
    image: 'https://picsum.photos/seed/agent1/200/200',
  },
  {
    id: 'agent-002',
    name: 'Marcus Wellington',
    email: 'marcus.wellington@luxerealty.com',
    phone: '+1 (212) 555-1002',
    image: 'https://picsum.photos/seed/agent2/200/200',
  },
  {
    id: 'agent-003',
    name: 'Isabella Romano',
    email: 'isabella.romano@luxerealty.com',
    phone: '+1 (212) 555-1003',
    image: 'https://picsum.photos/seed/agent3/200/200',
  },
];

export const mockProperties: Property[] = [
  {
    id: 'prop-001',
    title: 'Oceanfront Villa with Infinity Pool',
    description:
      'A breathtaking oceanfront villa featuring 180-degree panoramic views, an infinity pool that merges with the horizon, and Italian marble throughout. This architectural masterpiece offers the ultimate in coastal luxury living with private beach access, a state-of-the-art chef\'s kitchen, and a wine cellar housing over 2,000 bottles.',
    price: 12500000,
    location: '1200 Pacific Coast Hwy',
    city: 'Malibu',
    type: 'VILLA',
    status: 'FOR_SALE',
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
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
    agentId: agents[0].id,
    agent: agents[0],
  },
  {
    id: 'prop-002',
    title: 'Manhattan Skyline Penthouse',
    description:
      'Perched atop one of Manhattan\'s most prestigious towers, this penthouse offers unrivaled 360-degree views of the city skyline. Features include a private elevator, chef\'s kitchen with Gaggenau appliances, and a wraparound terrace perfect for entertaining against the backdrop of Central Park.',
    price: 8750000,
    location: '432 Park Avenue, PH',
    city: 'Manhattan',
    type: 'PENTHOUSE',
    status: 'FOR_SALE',
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
    createdAt: '2025-02-10T10:00:00Z',
    updatedAt: '2025-02-10T10:00:00Z',
    agentId: agents[1].id,
    agent: agents[1],
  },
  {
    id: 'prop-003',
    title: 'Beverly Hills Modern Estate',
    description:
      'A stunning contemporary estate in the heart of Beverly Hills featuring walls of glass, a resort-style pool, and impeccable landscaping. This home seamlessly blends indoor and outdoor living spaces with over 11,000 sq ft of refined luxury.',
    price: 15800000,
    location: '900 N Beverly Dr',
    city: 'Beverly Hills',
    type: 'HOUSE',
    status: 'FOR_SALE',
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
    createdAt: '2025-03-05T10:00:00Z',
    updatedAt: '2025-03-05T10:00:00Z',
    agentId: agents[2].id,
    agent: agents[2],
  },
  {
    id: 'prop-004',
    title: 'South Beach Luxury Condo',
    description:
      'Experience the vibrant lifestyle of South Beach from this exquisitely designed luxury condo. Floor-to-ceiling windows frame stunning ocean and city views, while world-class amenities await below including a private beach club and infinity pool.',
    price: 3200000,
    location: '300 S Pointe Dr',
    city: 'Miami',
    type: 'CONDO',
    status: 'FOR_SALE',
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
    createdAt: '2025-04-12T10:00:00Z',
    updatedAt: '2025-04-12T10:00:00Z',
    agentId: agents[0].id,
    agent: agents[0],
  },
  {
    id: 'prop-005',
    title: 'Dubai Marina Waterfront Apartment',
    description:
      'A prestigious apartment in Dubai Marina offering breathtaking views of the Arabian Gulf. Features premium finishes, smart home technology, and access to world-class marina facilities with direct water access.',
    price: 2100000,
    location: 'Marina Walk, Tower 8',
    city: 'Dubai',
    type: 'APARTMENT',
    status: 'FOR_SALE',
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
    createdAt: '2025-05-01T10:00:00Z',
    updatedAt: '2025-05-01T10:00:00Z',
    agentId: agents[1].id,
    agent: agents[1],
  },
  {
    id: 'prop-006',
    title: 'Knightsbridge Georgian Townhouse',
    description:
      'A magnificent Georgian townhouse in London\'s most exclusive neighborhood. Meticulously restored with period details while incorporating modern luxury amenities across six floors of grandeur.',
    price: 18500000,
    location: 'Brompton Square',
    city: 'London',
    type: 'HOUSE',
    status: 'FOR_SALE',
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
    createdAt: '2025-06-20T10:00:00Z',
    updatedAt: '2025-06-20T10:00:00Z',
    agentId: agents[2].id,
    agent: agents[2],
  },
  {
    id: 'prop-007',
    title: 'Aspen Mountain Retreat',
    description:
      'A luxurious ski-in/ski-out retreat nestled in the mountains of Aspen. Featuring a grand stone fireplace, heated floors, and panoramic mountain views from every room. The perfect blend of rustic charm and modern sophistication.',
    price: 9200000,
    location: '100 E Cooper Ave',
    city: 'Aspen',
    type: 'VILLA',
    status: 'FOR_SALE',
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
    createdAt: '2025-07-15T10:00:00Z',
    updatedAt: '2025-07-15T10:00:00Z',
    agentId: agents[0].id,
    agent: agents[0],
  },
  {
    id: 'prop-008',
    title: 'Monaco Harbour View Apartment',
    description:
      'An elegant apartment overlooking the iconic Monaco harbour. This residence offers the epitome of Mediterranean luxury with access to the principality\'s finest dining, shopping, and cultural venues.',
    price: 6400000,
    location: 'Avenue Princess Grace',
    city: 'Monaco',
    type: 'APARTMENT',
    status: 'FOR_RENT',
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
    createdAt: '2025-08-10T10:00:00Z',
    updatedAt: '2025-08-10T10:00:00Z',
    agentId: agents[1].id,
    agent: agents[1],
  },
  {
    id: 'prop-009',
    title: 'Santorini Cliffside Villa',
    description:
      'A stunning whitewashed villa perched on the caldera cliffs of Santorini. Features a private infinity pool, outdoor dining terrace, and mesmerizing sunset views over the Aegean Sea. Authentic Greek architecture meets modern luxury.',
    price: 4800000,
    location: 'Oia Village, Caldera',
    city: 'Santorini',
    type: 'VILLA',
    status: 'FOR_SALE',
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
    createdAt: '2025-09-01T10:00:00Z',
    updatedAt: '2025-09-01T10:00:00Z',
    agentId: agents[2].id,
    agent: agents[2],
  },
  {
    id: 'prop-010',
    title: 'Tokyo Shibuya Modern Loft',
    description:
      'A sleek, modern loft in the vibrant Shibuya district. Floor-to-ceiling windows provide stunning views of the Tokyo skyline, while high-end finishes and smart home technology create the ultimate urban retreat.',
    price: 1850000,
    location: 'Shibuya Crossing Tower',
    city: 'Tokyo',
    type: 'APARTMENT',
    status: 'FOR_RENT',
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
    createdAt: '2025-10-05T10:00:00Z',
    updatedAt: '2025-10-05T10:00:00Z',
    agentId: agents[0].id,
    agent: agents[0],
  },
  {
    id: 'prop-011',
    title: 'Palm Jumeirah Signature Penthouse',
    description:
      'The crown jewel of Palm Jumeirah, this signature penthouse offers unmatched luxury with a private pool, butler service, and breathtaking views of the Arabian Gulf and the iconic Dubai skyline.',
    price: 22000000,
    location: 'The Royal Atlantis, Palm Jumeirah',
    city: 'Dubai',
    type: 'PENTHOUSE',
    status: 'FOR_SALE',
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
    lng: 55.139,
    isFeatured: true,
    createdAt: '2025-11-15T10:00:00Z',
    updatedAt: '2025-11-15T10:00:00Z',
    agentId: agents[1].id,
    agent: agents[1],
  },
  {
    id: 'prop-012',
    title: 'Lake Como Waterfront Estate',
    description:
      'A magnificent lakeside estate on the shores of Lake Como, once home to Italian nobility. Features include a private dock, terraced gardens, a guest villa, and breathtaking Alpine scenery in every direction.',
    price: 28000000,
    location: 'Via Regina, Bellagio',
    city: 'Lake Como',
    type: 'VILLA',
    status: 'FOR_SALE',
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
    createdAt: '2025-12-01T10:00:00Z',
    updatedAt: '2025-12-01T10:00:00Z',
    agentId: agents[2].id,
    agent: agents[2],
  },
];

// ────────── Query helpers (mirror Prisma API behaviour) ──────────

export function getMockFeatured(limit = 6): Property[] {
  return mockProperties.filter((p) => p.isFeatured).slice(0, limit);
}

export function getMockPropertyById(id: string): Property | undefined {
  return mockProperties.find((p) => p.id === id);
}

export interface MockQueryParams {
  search?: string;
  city?: string;
  type?: string;
  status?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  featured?: boolean;
  sortBy?: string;
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export function queryMockProperties(params: MockQueryParams) {
  let filtered = [...mockProperties];

  if (params.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter((p) => p.title.toLowerCase().includes(q));
  }
  if (params.city) {
    const c = params.city.toLowerCase();
    filtered = filtered.filter((p) => p.city.toLowerCase().includes(c));
  }
  if (params.type) {
    filtered = filtered.filter((p) => p.type === params.type);
  }
  if (params.status) {
    filtered = filtered.filter((p) => p.status === params.status);
  }
  if (params.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= params.minPrice!);
  }
  if (params.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= params.maxPrice!);
  }
  if (params.bedrooms !== undefined) {
    filtered = filtered.filter((p) => p.bedrooms >= params.bedrooms!);
  }
  if (params.featured) {
    filtered = filtered.filter((p) => p.isFeatured);
  }

  // Sort
  const sortBy = params.sortBy || 'createdAt';
  const order = params.order || 'desc';
  filtered.sort((a, b) => {
    const aVal = a[sortBy as keyof Property];
    const bVal = b[sortBy as keyof Property];
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return order === 'asc' ? aVal - bVal : bVal - aVal;
    }
    const aStr = String(aVal);
    const bStr = String(bVal);
    return order === 'asc' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
  });

  // Paginate
  const page = params.page || 1;
  const limit = params.limit || 9;
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);
  const skip = (page - 1) * limit;
  const data = filtered.slice(skip, skip + limit);

  return {
    data,
    pagination: { total, page, limit, totalPages },
  };
}
