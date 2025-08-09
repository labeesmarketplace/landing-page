import brandsData from '@/data/brands.json';

export default function sitemap() {
  const base = 'https://labees.qa';

  const staticRoutes = ['/', '/explore', '/waitlist'].map((p) => ({
    url: `${base}${p === '/' ? '/' : p}`,
    changeFrequency: 'weekly' as const,
    priority: p === '/' ? 1 : 0.7,
  }));

  const brandRoutes = (brandsData.brands ?? []).map((b: { slug: string }) => ({
    url: `${base}/brands/${b.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...brandRoutes];
}
