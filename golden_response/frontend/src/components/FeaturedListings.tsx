'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import type { Property } from '@/types';

interface FeaturedListingsProps {
  properties: Property[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturedListings({ properties }: FeaturedListingsProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Handpicked Selections
          </span>
          <h2 id="featured-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Featured Properties
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-6" />
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Curated selections from our premium portfolio — each property
            vetted for exceptional quality and lifestyle potential.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {properties.map((property) => (
            <motion.div key={property.id} variants={cardVariants}>
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <div className="text-center mt-14">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
          >
            View All Properties
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
