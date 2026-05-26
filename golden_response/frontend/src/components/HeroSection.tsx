'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { value: '15K+', label: 'Premium Properties' },
  { value: '200+', label: 'Global Cities' },
  { value: '98%', label: 'Client Satisfaction' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Luxury villa at sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-block text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-6 border border-amber-400/30 rounded-full px-4 py-1.5 bg-amber-400/5 backdrop-blur-sm">
              The Pinnacle of Luxury Living
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6"
          >
            Discover Your{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Dream
            </span>{' '}
            Property
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
          >
            Curated portfolio of the world&apos;s most exceptional properties.
            From oceanfront villas to sky-high penthouses, find your
            extraordinary home.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link
              href="/properties"
              className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="#contact"
              className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white hover:text-slate-900 hover:border-white backdrop-blur-sm"
            >
              Schedule Viewing
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-6 sm:px-10 sm:py-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/50 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
