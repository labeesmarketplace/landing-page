'use client';

import { useState } from 'react';
import { Brand } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { ExternalLink, MapPin, Instagram, Globe } from 'lucide-react';

interface BrandShowcaseProps {
  brand: Brand;
}

export default function BrandShowcase({ brand }: BrandShowcaseProps) {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={brand.bannerUrl}
          alt={`${brand.name} banner`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex items-center space-x-4">
            <img
              src={brand.logoUrl}
              alt={`${brand.name} logo`}
              className="w-20 h-20 rounded-lg shadow-lg bg-white p-2"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {brand.name}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {brand.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Description */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            {brand.description}
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-4 pb-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="products" className="text-lg font-medium">
              Products
            </TabsTrigger>
            <TabsTrigger value="posts" className="text-lg font-medium">
              Posts
            </TabsTrigger>
            <TabsTrigger value="about" className="text-lg font-medium">
              About
            </TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brand.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="text-gray-600 text-sm mb-3">
                        {product.description}
                      </p>
                    )}
                    <p className="text-2xl font-bold text-blue-600">
                      QAR {product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Posts Tab */}
          <TabsContent value="posts" className="space-y-6">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {brand.posts.map((post) => (
                <div
                  key={post.id}
                  className="break-inside-avoid bg-white rounded-xl shadow-lg overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.caption}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-800 font-medium">
                      {post.caption}
                    </p>
                    {post.date && (
                      <p className="text-sm text-gray-500 mt-2">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Location */}
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Location
                  </h3>
                  <p className="text-gray-700">{brand.location}</p>
                </div>
              </div>

              {/* Mission & Values */}
              <div className="mb-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Mission & Values
                </h3>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {brand.values}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Connect With Us
                </h3>
                <div className="flex flex-wrap gap-4">
                  {brand.socials.instagram && (
                    <a
                      href={brand.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>Instagram</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {brand.socials.website && (
                    <a
                      href={brand.socials.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {brand.socials.facebook && (
                    <a
                      href={brand.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span>Facebook</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {brand.socials.twitter && (
                    <a
                      href={brand.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span>Twitter</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 