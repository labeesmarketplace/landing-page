"use client";

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Suspense } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';

const PressStrip = () => {
  const { ref: containerRef, isVisible: containerVisible } = useScrollAnimation();

  return (
    <Suspense fallback={<div className="py-12 bg-grayLight">Loading...</div>}>
      <ErrorBoundary>
        <section className="py-12 bg-grayLight relative overflow-hidden">
          <div className="container relative">
            <div 
              ref={containerRef}
              className={`flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 scroll-fade-up ${
                containerVisible ? 'visible' : ''
              }`}
            >
              {/* Add some default content */}
              <div className="w-full">
                Press content will appear here
              </div>
            </div>
          </div>
        </section>
      </ErrorBoundary>
    </Suspense>
  );
};

export default PressStrip;