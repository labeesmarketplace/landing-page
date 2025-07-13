import Link from 'next/link';
import brandsData from '@/data/brands.json';

export default function ExplorePage() {
  const brand = brandsData.brands.find(b => b.slug === 'qatar-fashion-house');
  if (!brand) return null;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="max-w-lg w-full mx-auto">
        <Link href={`/brands/${brand.slug}`} className="block group">
          <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center text-center transition-transform group-hover:scale-105 group-hover:shadow-2xl">
            <img
              src={brand.logoUrl}
              alt={`${brand.name} logo`}
              className="w-16 h-16 rounded-lg object-cover mb-6 shadow"
            />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              {brand.name}
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              {brand.tagline}
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
} 