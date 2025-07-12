"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Page = () => {
  const { ref: containerRef, isVisible: containerVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,60,93,0.05),transparent_70%)]" />
      
      <div className="container max-w-4xl relative">
        <div 
          ref={containerRef}
          className={`bg-grayLight rounded-2xl p-8 md:p-12 scroll-scale-up ${
            containerVisible ? 'visible' : ''
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Our Community</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join us to receive the latest news, updates, and exclusive offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;