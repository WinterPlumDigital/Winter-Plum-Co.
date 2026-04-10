# Winter Plum & Co

Winter Plum & Co is a premium web design studio creating custom, conversion-focused websites for small businesses and growing brands.

## Development

This project is built with React, Vite, Tailwind CSS, and Framer Motion.

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

This site is configured for deployment on GitHub Pages. The build output is configured to use relative paths for assets, ensuring compatibility with subfolder deployments.

## SEO & Performance

- **Semantic HTML**: Proper use of `<main>`, `<section>`, `<nav>`, `<header>`, `<footer>`, and heading hierarchy (`<h1>` - `<h6>`).
- **Structured Data**: JSON-LD schema markup (`Organization`, `WebSite`, `ProfessionalService`, `Service`, `ContactPage`) is injected dynamically per page.
- **Metadata**: Unique `<title>`, `<meta name="description">`, canonical URLs, and Open Graph/Twitter tags for every page.
- **Accessibility**: ARIA labels on interactive elements, `aria-hidden` on decorative SVGs, and sufficient color contrast.
- **Performance**: Optimized animations using Framer Motion, lazy loading where appropriate, and lightweight SVG assets.
