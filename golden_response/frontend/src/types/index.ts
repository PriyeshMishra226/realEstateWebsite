export type PropertyStatus = 'FOR_SALE' | 'FOR_RENT';
export type PropertyType = 'HOUSE' | 'APARTMENT' | 'CONDO' | 'VILLA' | 'PENTHOUSE';

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  city: string;
  type: PropertyType;
  status: PropertyStatus;
  bedrooms: number;
  bathrooms: number;
  areaSize: number;
  images: string[];
  amenities: string[];
  lat: number | null;
  lng: number | null;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  agentId: string;
  agent?: Agent;
}

export interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  propertyId: string;
  createdAt: string;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  pagination?: PaginationMeta;
  error?: string;
  errors?: Record<string, string[]>;
  message?: string;
}

export interface FilterParams {
  search: string;
  city: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
}
