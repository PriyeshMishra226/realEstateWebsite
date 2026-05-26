'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropertyCard from '@/components/PropertyCard';
import SearchFilters from '@/components/SearchFilters';
import useDebounce from '@/hooks/useDebounce';
import type { Property, FilterParams, PaginationMeta } from '@/types';

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [pagination, setPagination] = useState<PaginationMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<FilterParams>({
    search: '',
    city: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
  });

  const debouncedSearch = useDebounce(filters.search, 400);
  const debouncedCity = useDebounce(filters.city, 400);

  const fetchProperties = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (debouncedSearch) params.set('search', debouncedSearch);
      if (debouncedCity) params.set('city', debouncedCity);
      if (filters.type) params.set('type', filters.type);
      if (filters.minPrice) params.set('minPrice', filters.minPrice);
      if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);
      if (filters.bedrooms) params.set('bedrooms', filters.bedrooms);
      params.set('page', String(page));
      params.set('limit', '9');

      const res = await fetch(`/api/properties?${params.toString()}`);
      const json = await res.json();
      if (json.success) {
        setProperties(json.data);
        setPagination(json.pagination);
      }
    } catch (err) {
      console.error('Failed to fetch properties:', err);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, debouncedCity, filters.type, filters.minPrice, filters.maxPrice, filters.bedrooms, page]);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, debouncedCity, filters.type, filters.minPrice, filters.maxPrice, filters.bedrooms]);

  const handleFilterChange = useCallback((newFilters: FilterParams) => {
    setFilters(newFilters);
  }, []);

  const totalPages = pagination?.totalPages ?? 1;

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Premium Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
            Browse Properties
          </h1>
          <p className="text-slate-400 text-lg">
            {pagination ? (
              <>{pagination.total} exceptional properties across the globe</>
            ) : (
              'Discovering exceptional properties…'
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <SearchFilters onFilterChange={handleFilterChange} />

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-96 skeleton" />
            ))}
          </div>
        ) : properties.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-5xl mb-4" aria-hidden="true">🏡</div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">No Properties Found</h2>
            <p className="text-slate-500">Try adjusting your filters to see more results.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <nav
            className="flex items-center justify-center gap-2 mt-12"
            aria-label="Pagination"
          >
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous page"
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                aria-current={page === pageNum ? 'page' : undefined}
                className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all ${
                  page === pageNum
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
                    : 'border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page"
            >
              Next →
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
