import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import FeaturedListings from '@/components/FeaturedListings';
import { getMockFeatured } from '@/lib/mock-data';
import type { Property } from '@/types';

export const metadata: Metadata = {
  title: 'Premium Real Estate — Luxury Homes Worldwide',
  description:
    'Browse our curated portfolio of the world\'s most exceptional luxury properties — oceanfront villas, sky-high penthouses, and prestigious estates.',
};

function getFeaturedProperties(): Property[] {
  return getMockFeatured(6);
}

const stats = [
  { icon: '🏆', value: '$2.4B+', label: 'Properties Sold' },
  { icon: '🌍', value: '42+', label: 'Countries' },
  { icon: '⭐', label: 'Average Rating', value: '4.9/5' },
  { icon: '👥', label: 'Happy Clients', value: '12,000+' },
];

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Featured Listings */}
      {featuredProperties.length > 0 && (
        <FeaturedListings properties={featuredProperties} />
      )}

      {/* Stats Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900"
        aria-label="Company statistics"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center scroll-reveal"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LUXE Section */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="why-luxe-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Why Choose Us
            </span>
            <h2
              id="why-luxe-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4"
            >
              The LUXE Difference
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Curated Excellence',
                desc: 'Every property in our portfolio is personally vetted by our team of luxury real estate experts.',
              },
              {
                icon: '🔐',
                title: 'Trusted & Secure',
                desc: 'End-to-end encrypted inquiries and secure transactions with complete discretion guaranteed.',
              },
              {
                icon: '🌐',
                title: 'Global Reach',
                desc: 'Access to exclusive off-market listings across 42 countries and 200+ premier cities worldwide.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="scroll-reveal p-8 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-5" aria-hidden="true">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950"
        aria-label="Call to action"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Find Your{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Perfect
            </span>{' '}
            Home?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Our expert agents are ready to guide you to the property of your
            dreams. Start your journey today.
          </p>
          <a
            href="/properties"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold px-10 py-4 rounded-xl hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore All Properties
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
