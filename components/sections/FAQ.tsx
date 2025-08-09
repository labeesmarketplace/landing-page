"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { HelpCircle, Sparkles } from 'lucide-react';

export default function FAQ() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation();

  return (
    <section id="faq" className="section relative overflow-hidden py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
      
      <div className="container relative">
        <div 
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-16 scroll-fade-up ${
            headerVisible ? 'visible' : ''
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <HelpCircle className="h-4 w-4" />
            Got Questions? We've Got Answers
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about Labees and how our platform works to revolutionize fashion discovery.
          </p>
        </div>
        
        <div 
          ref={accordionRef}
          className={`max-w-4xl mx-auto scroll-fade-up ${
            accordionVisible ? 'visible' : ''
          }`}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem 
              value="item-1" 
              className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/90"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-700 transition-colors py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  What is Labees and how does it work?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-6 pt-2 text-base">
                Labees is a curated fashion marketplace that connects you with bold, culture-first designers from Qatar and the region. Browse collections, try on outfits virtually, and shop directly from local brands with confidence.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-2" 
              className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/90"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-700 transition-colors py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Who can use Labees and how do I get started?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-6 pt-2 text-base">
                Anyone who loves fashion can use Labees — from shoppers looking for unique styles to designers wanting to reach a wider audience. Simply sign up, explore our catalog, and start trying on pieces virtually or in-store.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-3" 
              className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/90"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-700 transition-colors py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                  Why should I choose Labees?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-6 pt-2 text-base">
                We make discovering local fashion easy, immersive, and inspiring. Every purchase supports independent designers, while our AI try-on tools let you see how outfits look on you before you buy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-4" 
              className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/90"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-700 transition-colors py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                  How does the virtual try-on feature work?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-6 pt-2 text-base">
                Upload your photo or use our AI-powered avatar creator. Labees matches clothing items to your size and style, generating a realistic preview so you can shop with confidence.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-5" 
              className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/90"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-700 transition-colors py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  How do I know if an item will fit me?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-6 pt-2 text-base">
                Each brand provides detailed size charts and measurements. Our try-on technology also adjusts fit based on your body dimensions for better accuracy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-6" 
              className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/90"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-700 transition-colors py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  Can designers sell directly on Labees?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-6 pt-2 text-base">
                Yes! We offer vendor tools to upload products, manage inventory, and receive orders. Designers can also get insights into trends and shopper behavior through our dashboard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-7" 
              className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/90"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-700 transition-colors py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  Is my data and payment information secure?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-6 pt-2 text-base">
                Absolutely. We use encrypted payment gateways and strict privacy measures to protect your information. Your security is our top priority.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
        </div>
      </div>
    </section>
  );
}
