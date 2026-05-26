'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const statusColor = property.status === 'FOR_SALE' ? 'bg-emerald-500' : 'bg-blue-500';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 flex flex-col group transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        <Image
          src={property.images[0] || '/images/hero.png'}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Status Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg tracking-wider uppercase">
          <span className={`w-1.5 h-1.5 rounded-full ${statusColor}`} />
          {property.status.replace('_', ' ')}
        </div>
        {/* Featured Badge */}
        {property.isFeatured && (
          <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-lg">
            ★ Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-amber-600 font-bold text-xl mb-1">
          ${property.price.toLocaleString()}
        </span>
        <h3 className="text-lg font-bold text-slate-900 line-clamp-1 mb-2">
          {property.title}
        </h3>
        <p className="text-slate-500 text-sm mb-4 flex items-center gap-1">
          <span aria-hidden="true">📍</span>
          <span>{property.location}, {property.city}</span>
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-slate-100 text-xs font-medium text-slate-600 mb-6">
          <div className="text-center">
            <span className="block text-base mb-0.5" aria-hidden="true">🛏️</span>
            {property.bedrooms} Beds
          </div>
          <div className="text-center">
            <span className="block text-base mb-0.5" aria-hidden="true">🛁</span>
            {property.bathrooms} Baths
          </div>
          <div className="text-center">
            <span className="block text-base mb-0.5" aria-hidden="true">📐</span>
            {property.areaSize.toLocaleString()} sqft
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/properties/${property.id}`}
          className="w-full text-center bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-amber-600 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none mt-auto"
          aria-label={`View details for ${property.title}`}
        >
          View Details
        </Link>
      </div>
    </motion.article>
  );
}
