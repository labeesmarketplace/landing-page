import type { Metadata } from 'next';
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

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const brand = (brandsData as any).brands.find((b: any) => b.slug === params.slug);
  if (!brand) return {};
  const title = `${brand.name} — Labees`;
  const description = brand.tagline || brand.description || 'Discover local fashion on Labees.';
  const og = brand.bannerUrl || '/og.png';
  return {
    title,
    description,
    alternates: { canonical: `/brands/${brand.slug}` },
    openGraph: { title, description, images: [{ url: og }] },
    twitter: { card: 'summary_large_image', title, description, images: [og] },
  };
}
