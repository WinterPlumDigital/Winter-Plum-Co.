import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
}

export function SEO({
  title,
  description,
  keywords = "web design, branding, digital marketing, strategic growth, intentional design",
  url = "https://winterplumdigital.github.io/Winter-Plum-Co./",
  image = "https://winterplumdigital.github.io/Winter-Plum-Co./og-image.jpg",
  type = "website",
}: SEOProps) {
  const siteTitle = `${title} | Winter Plum Digital`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Winter Plum Digital",
    "url": "https://winterplumdigital.github.io/Winter-Plum-Co./",
    "description": "We partner with brands that value intentional design and strategic growth.",
    "publisher": {
      "@type": "Organization",
      "name": "Winter Plum Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://winterplumdigital.github.io/Winter-Plum-Co./logo.png"
      }
    }
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content="Winter Plum Digital" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data (JSON-LD) for Google */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
