// app/robots.ts
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://labees.qa/sitemap.xml',
  };
}
