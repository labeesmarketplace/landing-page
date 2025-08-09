export interface Product {
  id: string;
  name: string;
  price: string;
  currency: string;
  status?: 'sold_out';
  images: string[];
}

export interface Post {
  id: string;
  image: string;
  caption: string;
  date?: string;
}

export interface SocialLinks {
  instagram?: string;
  website?: string;
  facebook?: string;
  twitter?: string;
}

export interface Brand {
  identifier: string;
  slug: string;
  name: string;
  logoUrl: string;
  bannerUrl: string;
  tagline: string;
  description: string;
  location: string;
  values: string;
  socials: SocialLinks;
  products: Product[];
  posts: Post[];
} 