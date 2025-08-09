'use client';

import Link from 'next/link';
import brandsData from '@/data/brands.json';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Store, MapPin, ExternalLink } from 'lucide-react';

export default function ExplorePage() {
  const brands = brandsData.brands;
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: brandsRef, isVisible: brandsVisible } = useScrollAnimation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-fade-up ${
            headerVisible ? 'visible' : ''
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Store className="h-4 w-4" />
            Discover Amazing Brands
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
            Explore Brands
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover amazing fashion brands and their unique collections from across the region
          </p>
        </div>
        
        <div 
          ref={brandsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto scroll-fade-up ${
            brandsVisible ? 'visible' : ''
          }`}
        >
          {brands.map((brand, index) => (
            <Link key={brand.slug} href={`/brands/${brand.slug}`} className="block group">
              <div 
                className="bg-white/70 backdrop-blur-sm border border-blue-200/50 rounded-3xl shadow-lg hover:shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 group-hover:scale-105 hover:bg-white/90"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-200/30 rounded-2xl blur-xl scale-110"></div>
                  <img
                    src={brand.logoUrl}
                    alt={`${brand.name} logo`}
                    className="relative w-20 h-20 rounded-2xl object-cover shadow-xl border-2 border-white/50"
                  />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {brand.name}
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  {brand.tagline}
                </p>
                
                <div className="flex items-center gap-2 text-blue-600 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">{brand.location}</span>
                </div>

                <div className="mt-auto pt-4">
                  <div className="inline-flex items-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors font-medium">
                    <span>View Collection</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl border border-blue-200 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Store className="h-6 w-6 text-blue-600" />
            <span className="text-blue-700 font-semibold text-lg">Join Our Platform</span>
          </div>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Are you a fashion brand looking to showcase your collection? Join Labees and reach customers across the region.
          </p>
          <a 
            href="/waitlist" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Join Our Community
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
