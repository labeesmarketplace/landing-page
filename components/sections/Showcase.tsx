"use client";

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Lock } from 'lucide-react';

const Showcase = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="showcase" className="section relative overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(11,60,93,0.1),transparent_70%)]" />
      
      <div className="container relative">
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-fade-up ${
            headerVisible ? 'visible' : ''
          }`}
        >
          <span className="inline-flex items-center gap-2 text-primary/80 font-medium mb-4">
            <Lock className="h-4 w-4" />
            Top Secret — Early Access Only
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Shhh... Not Ready to Be Seen (Yet)
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            We could show you what Labees looks like…<br/>
            But some things are better kept behind the curtain — for now.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`max-w-4xl mx-auto scroll-fade-up ${
            contentVisible ? 'visible' : ''
          }`}
        >
          {/* Side-by-side layout for phone and text */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            {/* Text and button on the left */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 px-2 md:px-0">
              <p className="text-xl text-gray-600 italic">
                "Can't leak this yet. Our devs will kill us."
              </p>
              <p className="text-lg text-gray-800 font-medium">
                What's coming isn't "inspired by trends." It's built to start them.
              </p>
              <a 
                href="/waitlist"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 mt-2"
              >
                Be First to See It – Join the Waitlist
                <Lock className="h-5 w-5" />
              </a>
            </div>
            {/* Phone Frame on the right */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-[320px] h-[660px] rounded-[2.5rem] bg-black shadow-2xl border-4 border-gray-900 overflow-hidden flex items-center justify-center">
                {/* Large lock icon instead of image */}
                <Lock className="w-24 h-24 text-gray-300 opacity-80" />
                <div className="absolute inset-0 bg-white/10" style={{ zIndex: 2 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;