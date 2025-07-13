"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed w-full top-0 left-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center gap-2">
          <Image src="/icon.png" alt="Labees Icon" width={36} height={36} className="rounded-full shadow" />
          <Image src="/logo.png" alt="Labees Logo" width={120} height={40} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#home" className="text-black hover:text-primary transition-colors">Home</Link>
          <Link href="/#vision" className="text-black hover:text-primary transition-colors">Vision</Link>
          <Link href="/#features" className="text-black hover:text-primary transition-colors">Features</Link>
          <Link href="/waitlist" className="text-black hover:text-primary transition-colors">Join</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/waitlist" className="btn-primary">
            Join Waitlist
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <button className="btn-ghost">
                For Vendors
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white flex flex-col items-center justify-center md:hidden transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col items-center space-y-8 mb-12">
            <Link 
              href="/#home" 
              className="text-xl text-black hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#vision" 
              className="text-xl text-black hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Vision
            </Link>
            <Link 
              href="/#features" 
              className="text-xl text-black hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/waitlist" 
              className="text-xl text-black hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Join
            </Link>
          </nav>

          <div className="flex flex-col items-center space-y-4">
            <Link href="/waitlist" className="btn-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>
              Join Waitlist
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <button className="btn-ghost w-full text-center" onClick={() => setIsMenuOpen(false)}>
                  For Vendors
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;