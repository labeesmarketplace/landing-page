import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-2xl mb-4">Labees</h3>
            <p className="mb-6 text-white/80">
              Curated fashion. Local heartbeat.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com/labees.qa" className="hover:text-white/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://tiktok.com/@labees.qa" className="hover:text-white/80 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Link>
              <Link href="mailto:info@labees.qa" className="hover:text-white/80 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#vision" className="text-white/80 hover:text-white transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-white/80 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="text-white/80 hover:text-white transition-colors">
                  Join
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/80">
                <a href="mailto:info@labees.qa" className="hover:text-white transition-colors">
                  info@labees.qa
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm">
            © 2025 Labees. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/80 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;