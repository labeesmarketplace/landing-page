'use client';

import { Brand } from '@/types';
import { Instagram, ExternalLink, MapPin, Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BrandShowcaseProps {
  brand: Brand;
}

export default function BrandShowcase({ brand }: BrandShowcaseProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
      
      {/* Header */}
      <div className="container mx-auto px-4 py-12 relative">
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-fade-up ${
            headerVisible ? 'visible' : ''
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200/30 rounded-2xl blur-xl scale-110"></div>
              <img
                src={brand.logoUrl}
                alt={`${brand.name} logo`}
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-xl object-cover border-2 border-white/50"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                {brand.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
                {brand.tagline}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-blue-600">
                <MapPin className="h-5 w-5" />
                <span className="text-lg font-medium">{brand.location}</span>
              </div>
            </div>
          </div>
          
          {/* Instagram Link */}
          {brand.socials.instagram && (
            <a
              href={brand.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg font-semibold"
            >
              <Instagram className="w-6 h-6" />
              <span>Visit Instagram</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Brand Story Section */}
        <div 
          ref={aboutRef}
          className={`max-w-4xl mx-auto mb-20 scroll-fade-up ${
            aboutVisible ? 'visible' : ''
          }`}
        >
          <div className="bg-white/70 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="h-4 w-4" />
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                About {brand.name}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {brand.description}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {brand.values}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div 
          ref={productsRef}
          className={`max-w-6xl mx-auto scroll-fade-up ${
            productsVisible ? 'visible' : ''
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              Our Collection
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Some of the Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our carefully curated selection of premium fashion pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brand.products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white/70 backdrop-blur-sm border border-blue-200/50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:bg-white/90"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image Carousel */}
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                  {product.images && product.images.length > 0 ? (
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {product.images.map((image, imageIndex) => (
                          <CarouselItem key={imageIndex} className="h-full">
                            <div className="relative h-full">
                              <img
                                src={image}
                                alt={`${product.name} - Image ${imageIndex + 1}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {product.images.length > 1 && (
                        <>
                          <CarouselPrevious className="left-4 bg-white/90 hover:bg-white shadow-lg border-blue-200/50" />
                          <CarouselNext className="right-4 bg-white/90 hover:bg-white shadow-lg border-blue-200/50" />
                        </>
                      )}
                    </Carousel>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-50">
                      <span className="text-blue-400">No images available</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                  </div>
                  {product.status === 'sold_out' && (
                    <span className="inline-block bg-red-100 text-red-800 text-sm px-4 py-2 rounded-full font-medium">
                      Sold Out
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl border border-blue-200">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="h-6 w-6 text-blue-600" />
            <span className="text-blue-700 font-semibold text-lg">Stay Connected</span>
          </div>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Follow us on Instagram for the latest updates, behind-the-scenes content, and exclusive previews.
          </p>
          {brand.socials.instagram && (
            <a
              href={brand.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Instagram className="h-5 w-5" />
              Follow @{brand.socials.instagram.split('/').pop()}
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
