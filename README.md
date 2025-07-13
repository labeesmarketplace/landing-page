# Labees.com - Local Brands Showcase

A Next.js 14 application showcasing local Qatari brands with an interactive carousel and detailed brand pages.

## Features

- **Brand Carousel**: Auto-scrolling carousel with swipe controls and keyboard navigation
- **Brand Showcase Pages**: Detailed pages with products, posts, and brand information
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Accessibility**: Full ARIA compliance and keyboard navigation
- **TypeScript**: Fully typed codebase with interfaces
- **Performance**: Optimized with Next.js App Router and static generation

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd labees
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── brands/[slug]/     # Dynamic brand pages
│   ├── explore/           # Brand exploration page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── BrandCarousel.tsx  # Main carousel component
│   ├── BrandShowcase.tsx  # Brand detail page component
│   └── ui/               # Reusable UI components
├── data/                 # Static data
│   └── brands.json       # Brand data
├── types/                # TypeScript interfaces
│   └── index.ts          # Brand, Product, Post interfaces
└── public/               # Static assets
```

## Data Structure

### Adding New Brands

1. Edit `/data/brands.json`
2. Add a new brand object with the following structure:

```json
{
  "identifier": "unique-identifier",
  "slug": "url-friendly-slug",
  "name": "Brand Name",
  "logoUrl": "https://picsum.photos/200/200?random=X",
  "bannerUrl": "https://picsum.photos/1200/400?random=X",
  "tagline": "Brand tagline (max 70 characters)",
  "description": "Detailed brand description",
  "location": "City, Country",
  "values": "Mission and values description",
  "socials": {
    "instagram": "https://instagram.com/brand",
    "website": "https://brand.qa",
    "facebook": "https://facebook.com/brand",
    "twitter": "https://twitter.com/brand"
  },
  "products": [
    {
      "id": "product-id",
      "name": "Product Name",
      "price": 1000,
      "image": "https://picsum.photos/300/400?random=X",
      "description": "Product description"
    }
  ],
  "posts": [
    {
      "id": "post-id",
      "image": "https://picsum.photos/400/500?random=X",
      "caption": "Post caption",
      "date": "2024-03-15"
    }
  ]
}
```

### Image Guidelines

- **Logo**: 200x200px square images
- **Banner**: 1200x400px landscape images
- **Products**: 300x400px portrait images
- **Posts**: 400x500px or 400x600px portrait images

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- ESLint configuration included
- Prettier formatting
- TypeScript strict mode enabled

## Accessibility Features

- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## Performance Optimizations

- Static generation for brand pages
- Image optimization with Next.js
- Lazy loading for images
- Efficient carousel implementation
- Minimal bundle size

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License. 
