import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://labees.qa'),
  title: "Labees — AI Virtual Try-On for Local Designers in Qatar",
  description:
    "Discover Qatar's culture-first fashion. Try outfits with AI and shop local designers.",
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://labees.qa',
    images: ['/og.png'],
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        {/* Skip link for keyboard/screen reader users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded"
        >
          Skip to content
        </a>
        <div className="w-full">
          <Navbar />
          <main id="main" className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
