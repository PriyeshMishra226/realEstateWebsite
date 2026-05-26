'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}>
              LUXE
            </span>
            <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-125 transition-transform" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 py-1 ${
                  scrolled
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full hover:w-full" style={{ transition: 'width 0.3s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.width = '100%')}
                  onMouseLeave={(e) => (e.currentTarget.style.width = '0')}
                />
              </Link>
            ))}
            <Link
              href="/properties"
              className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Explore
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-slate-900' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-slate-900' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-slate-900' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-xl font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/properties"
                onClick={() => setMenuOpen(false)}
                className="block mt-4 text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-3 rounded-xl transition-all"
              >
                Explore Properties
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
