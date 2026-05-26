'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageGallery from '@/components/ImageGallery';
import ContactAgentForm from '@/components/ContactAgentForm';
import type { Property } from '@/types';

interface PropertyDetailClientProps {
  property: Property;
}

export default function PropertyDetailClient({ property }: PropertyDetailClientProps) {
  const [contactOpen, setContactOpen] = useState(false);

  const statusColor = property.status === 'FOR_SALE'
    ? 'bg-emerald-100 text-emerald-700'
    : 'bg-blue-100 text-blue-700';

  return (
    <>
      <div className="min-h-screen bg-white pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/properties" className="hover:text-amber-600 transition-colors">Properties</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-900 font-medium line-clamp-1">{property.title}</li>
            </ol>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column — Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Gallery */}
              <ImageGallery images={property.images} title={property.title} />

              {/* Header */}
              <div>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`badge text-xs font-semibold px-3 py-1 rounded-lg ${statusColor}`}>
                        {property.status.replace('_', ' ')}
                      </span>
                      <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                        {property.type}
                      </span>
                      {property.isFeatured && (
                        <span className="text-xs bg-amber-100 text-amber-700 font-bold px-2.5 py-1 rounded-lg">
                          ★ Featured
                        </span>
                      )}
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                      {property.title}
                    </h1>
                    <p className="text-slate-500 mt-2 flex items-center gap-1.5">
                      <span aria-hidden="true">📍</span>
                      {property.location}, {property.city}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-black text-amber-600">
                      ${property.price.toLocaleString()}
                    </div>
                    {property.status === 'FOR_RENT' && (
                      <span className="text-slate-400 text-sm">/month</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: '🛏️', label: 'Bedrooms', value: property.bedrooms },
                  { icon: '🛁', label: 'Bathrooms', value: property.bathrooms },
                  { icon: '📐', label: 'Area', value: `${property.areaSize.toLocaleString()} sqft` },
                  { icon: '🏠', label: 'Type', value: property.type },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100"
                  >
                    <div className="text-2xl mb-1" aria-hidden="true">{spec.icon}</div>
                    <div className="text-sm text-slate-500 font-medium mb-1">{spec.label}</div>
                    <div className="text-slate-900 font-bold">{spec.value}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">About This Property</h2>
                <p className="text-slate-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              {property.amenities.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">Amenities</h2>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="bg-amber-50 text-amber-700 border border-amber-200 text-sm font-medium px-3.5 py-1.5 rounded-xl"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column — Agent Card + CTA */}
            <div className="space-y-6">
              <div className="sticky top-24">
                {/* Agent Card */}
                {property.agent && (
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-6">
                    <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                      Listing Agent
                    </h2>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-100 shrink-0">
                        <Image
                          src={property.agent.image}
                          alt={property.agent.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{property.agent.name}</div>
                        <div className="text-sm text-slate-500">{property.agent.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-5">
                      <span aria-hidden="true">📞</span>
                      <a href={`tel:${property.agent.phone}`} className="hover:text-amber-600 transition-colors">
                        {property.agent.phone}
                      </a>
                    </div>
                    <button
                      id="contact-agent-btn"
                      onClick={() => setContactOpen(true)}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                    >
                      Contact Agent
                    </button>
                  </div>
                )}

                {/* Quick Info */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                    Property Details
                  </h3>
                  <dl className="space-y-3">
                    {[
                      { term: 'City', detail: property.city },
                      { term: 'Status', detail: property.status.replace('_', ' ') },
                      { term: 'Type', detail: property.type },
                      {
                        term: 'Listed',
                        detail: new Date(property.createdAt).toLocaleDateString('en-US', {
                          month: 'long', year: 'numeric',
                        }),
                      },
                    ].map(({ term, detail }) => (
                      <div key={term} className="flex justify-between items-center text-sm">
                        <dt className="text-slate-500">{term}</dt>
                        <dd className="font-semibold text-slate-800">{detail}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {contactOpen && property.agent && (
        <ContactAgentForm
          propertyId={property.id}
          agentName={property.agent.name}
          onClose={() => setContactOpen(false)}
        />
      )}
    </>
  );
}
