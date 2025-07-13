'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Brand } from '@/types';
import Link from 'next/link';

interface BrandCarouselProps {
  brands: Brand[];
}

export default function BrandCarousel({ brands }: BrandCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
  }, [brands.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length);
  }, [brands.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-scroll every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {brands.map((brand) => (
                <div 
                  key={brand.slug}
                  className="w-full flex-shrink-0"
                >
                  <Link href={`/brands/${brand.slug}`} className="block">
                    <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 p-8">
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center max-w-md">
                          {/* Brand Logo */}
                          <div className="mb-6">
                            <img
                              src={brand.logoUrl}
                              alt={`${brand.name} logo`}
                              className="w-24 h-24 mx-auto object-contain rounded-lg shadow-lg"
                            />
                          </div>
                          
                          {/* Brand Name */}
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {brand.name}
                          </h3>
                          
                          {/* Tagline */}
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {brand.tagline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous brand"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next brand"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-white/70 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>

        {/* Brand Grid for Mobile */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Link 
              key={brand.slug} 
              href={`/brands/${brand.slug}`}
              className="group block"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group-hover:scale-105">
                <img
                  src={brand.logoUrl}
                  alt={`${brand.name} logo`}
                  className="w-16 h-16 mx-auto mb-4 object-contain rounded-lg"
                />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {brand.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 