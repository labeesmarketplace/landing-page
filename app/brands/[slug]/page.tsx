import { notFound } from 'next/navigation';
import { Brand } from '@/types';
import BrandShowcase from '@/components/BrandShowcase';
import brandsData from '@/data/brands.json';

interface BrandPageProps {
  params: {
    slug: string;
  };
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = brandsData.brands.find((b) => b.slug === params.slug);

  if (!brand) {
    notFound();
  }

  return <BrandShowcase brand={brand} />;
}

// Generate static params for all brands
export async function generateStaticParams() {
  return brandsData.brands.map((brand) => ({
    slug: brand.slug,
  }));
} 