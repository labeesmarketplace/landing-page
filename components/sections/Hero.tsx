"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

const mockups = [
  "/women2.jpg",
  "/men2.png",
  "/2 girls.png",
  "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "/guy1.jpg"
];

const phrases = [
  "You were meant to find",
  "You own from day one",
  "Crafted For Your Vibe Only",
  "Designed For Your Body",
  "Confident Wears"
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const maxLength = Math.min(phrases.length, mockups.length);
    
    const interval = setInterval(() => {
      setIsTextVisible(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % maxLength);
        setIsTextVisible(true);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-24 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(11,60,93,0.1),transparent_70%)]" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            {/* Highlight Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Not Fast Fashion. Curated Fashion.</span>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1]">
                <span className="block transform transition-transform duration-700 ease-out">The Style</span>
                <span 
                  className={`block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 
                    transform transition-all duration-700 ease-out
                    ${isTextVisible 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-8 opacity-0 scale-95'
                    }`}
                >
                  {phrases[currentPhrase]}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg flex flex-col gap-1">
                <span>
                  Your central hub for{' '}
                  <span className="text-primary font-bold">
                    bold designers • local drops
                  </span>
                </span>
                <span>
                  <span className="text-primary font-bold">AI styling</span>
                  {' '}in Qatar and beyond.
                </span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/waitlist" 
                className="btn-primary group inline-flex items-center justify-center"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="btn-ghost group inline-flex items-center justify-center">
                    Vendor Application
                    <ArrowRight className="ml-2 h-5 w-5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl w-full">
                  <DialogHeader>
                    <DialogTitle>Vendor Application</DialogTitle>
                  </DialogHeader>
                  <div className="rounded-lg overflow-hidden bg-white/80 p-2 shadow-lg">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSd8mB2GuRfesLo2ggTtvqRBJvrQ63LI2Tvq7PzP-x0eT5exdg/viewform?embedded=true"
                      width="100%"
                      height="700"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      title="Vendor Application Form"
                      className="w-full rounded-lg border"
                      style={{ minHeight: 500 }}
                    >
                      Loading…
                    </iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-gray-600">Waitlist Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-gray-600">Local Brands</div>
              </div>
            </div>
          </div>

          {/* Right Image Gallery */}
          <div className={`relative h-[600px] transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="absolute inset-0 bg-hero-grad rounded-2xl z-10 opacity-5" />
            
            {mockups.map((src, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === currentPhrase ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <Image
                  src={src}
                  alt={`Labees Fashion ${index + 1}`}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={true}
                />
              </div>
            ))}

            {/* Image Navigation */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
              {mockups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhrase(index)}
                  className={`h-2 rounded-full ${
                    index === currentPhrase ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;