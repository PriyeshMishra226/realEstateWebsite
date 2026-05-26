'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const safeImages = images.length > 0 ? images : ['/images/hero.png'];

  const navigate = useCallback(
    (direction: 'prev' | 'next') => {
      setActiveIndex((prev) => {
        if (direction === 'prev') return prev === 0 ? safeImages.length - 1 : prev - 1;
        return prev === safeImages.length - 1 ? 0 : prev + 1;
      });
    },
    [safeImages.length]
  );

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') navigate('prev');
      if (e.key === 'ArrowRight') navigate('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, navigate]);

  return (
    <>
      {/* Main Image */}
      <div className="space-y-4">
        <div
          className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 cursor-pointer group"
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Open image gallery"
          onKeyDown={(e) => e.key === 'Enter' && setLightboxOpen(true)}
        >
          <Image
            src={safeImages[activeIndex]}
            alt={`${title} - Image ${activeIndex + 1}`}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={activeIndex === 0}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <span className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
              Click to expand
            </span>
          </div>
          {/* Image counter */}
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg">
            {activeIndex + 1} / {safeImages.length}
          </div>
        </div>

        {/* Thumbnails */}
        {safeImages.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {safeImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative shrink-0 w-20 h-16 rounded-xl overflow-hidden transition-all duration-200 ${
                  idx === activeIndex
                    ? 'ring-2 ring-amber-500 ring-offset-2'
                    : 'opacity-60 hover:opacity-100'
                }`}
                aria-label={`View image ${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={`${title} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={() => navigate('prev')}
            className="absolute left-4 sm:left-8 text-white/70 hover:text-white text-3xl z-10 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image */}
          <div className="relative w-full max-w-5xl aspect-[16/10]">
            <Image
              src={safeImages[activeIndex]}
              alt={`${title} - Image ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Next */}
          <button
            onClick={() => navigate('next')}
            className="absolute right-4 sm:right-8 text-white/70 hover:text-white text-3xl z-10 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {activeIndex + 1} / {safeImages.length}
          </div>
        </div>
      )}
    </>
  );
}
