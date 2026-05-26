'use client';

import { useState, useEffect, useCallback } from 'react';
import type { FilterParams } from '@/types';

interface SearchFiltersProps {
  onFilterChange: (filters: FilterParams) => void;
}

export default function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [filters, setFilters] = useState<FilterParams>({
    search: '',
    city: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
  });

  const updateFilter = useCallback((key: keyof FilterParams, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const inputClasses =
    'w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200';

  return (
    <section
      aria-label="Search filters"
      className="bg-white/90 backdrop-blur-lg border border-slate-200/60 shadow-lg shadow-black/5 rounded-2xl p-6 mb-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* Search */}
        <div className="xl:col-span-2">
          <label htmlFor="filter-search" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Search
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true">🔍</span>
            <input
              id="filter-search"
              type="text"
              placeholder="Search properties..."
              className={`${inputClasses} pl-9`}
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
            />
          </div>
        </div>

        {/* City */}
        <div>
          <label htmlFor="filter-city" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Location
          </label>
          <input
            id="filter-city"
            type="text"
            placeholder="City or location..."
            className={inputClasses}
            value={filters.city}
            onChange={(e) => updateFilter('city', e.target.value)}
          />
        </div>

        {/* Type */}
        <div>
          <label htmlFor="filter-type" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Property Type
          </label>
          <select
            id="filter-type"
            className={inputClasses}
            value={filters.type}
            onChange={(e) => updateFilter('type', e.target.value)}
          >
            <option value="">All Types</option>
            <option value="VILLA">Villa</option>
            <option value="APARTMENT">Apartment</option>
            <option value="PENTHOUSE">Penthouse</option>
            <option value="CONDO">Condo</option>
            <option value="HOUSE">House</option>
          </select>
        </div>

        {/* Min Price */}
        <div>
          <label htmlFor="filter-minprice" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Min Price
          </label>
          <input
            id="filter-minprice"
            type="number"
            placeholder="$ Min"
            className={inputClasses}
            value={filters.minPrice}
            onChange={(e) => updateFilter('minPrice', e.target.value)}
          />
        </div>

        {/* Max Price */}
        <div>
          <label htmlFor="filter-maxprice" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Max Price
          </label>
          <input
            id="filter-maxprice"
            type="number"
            placeholder="$ Max"
            className={inputClasses}
            value={filters.maxPrice}
            onChange={(e) => updateFilter('maxPrice', e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
