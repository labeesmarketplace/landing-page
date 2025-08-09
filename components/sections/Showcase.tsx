"use client";

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Lock, Sparkles } from 'lucide-react';

const Showcase = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="showcase" className="section relative overflow-hidden py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
      
      <div className="container relative">
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-fade-up ${
            headerVisible ? 'visible' : ''
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Lock className="h-4 w-4" />
            Top Secret — Early Access Only
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
            Shhh... Not Ready to Be Seen (Yet)
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We could show you what Labees looks like… But some things are better kept behind the curtain — for now.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`max-w-6xl mx-auto scroll-fade-up ${
            contentVisible ? 'visible' : ''
          }`}
        >
          {/* Enhanced side-by-side layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text content on the left */}
            <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <blockquote className="text-2xl md:text-3xl text-gray-700 italic font-light leading-relaxed">
                  "Can't leak this yet. Our devs will kill us."
                </blockquote>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto lg:mx-0 rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed">
                  What's coming isn't "inspired by trends." It's built to start them.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Revolutionary features are being crafted behind the scenes. Join our exclusive waitlist to be among the first to experience the future of fashion.
                </p>
                <a 
                  href="/waitlist"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                >
                  Be First to See It – Join the Waitlist
                  <Lock className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            </div>
            
            {/* Enhanced phone mockup on the right */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow effect behind phone */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-[3rem] blur-3xl scale-110"></div>
                
                {/* Phone frame */}
                <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[660px] rounded-[2.5rem] bg-gradient-to-b from-gray-900 to-black shadow-2xl border-4 border-gray-800 overflow-hidden">
                  {/* Screen bezel */}
                  <div className="absolute inset-2 bg-black rounded-[2rem] overflow-hidden">
                    {/* Screen content area */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center relative">
                      {/* Subtle grid pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full" style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                          backgroundSize: '40px 40px'
                        }}></div>
                      </div>
                      
                      {/* Lock icon with animation */}
                      <div className="relative z-10 flex flex-col items-center space-y-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150"></div>
                          <Lock className="relative w-20 h-20 md:w-24 md:h-24 text-gray-300 animate-pulse" />
                        </div>
                        <div className="text-center space-y-2">
                          <div className="w-32 h-2 bg-gray-600 rounded-full animate-pulse"></div>
                          <div className="w-24 h-2 bg-gray-700 rounded-full animate-pulse delay-150"></div>
                          <div className="w-28 h-2 bg-gray-600 rounded-full animate-pulse delay-300"></div>
                        </div>
                      </div>
                      
                      {/* Floating particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float" style={{'--rotation': '45deg'} as any}></div>
                        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500/40 rounded-full animate-float delay-1000" style={{'--rotation': '-30deg'} as any}></div>
                        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-300/20 rounded-full animate-float delay-500" style={{'--rotation': '60deg'} as any}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone details */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
