import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  schema?: Record<string, any>[];
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  keywords = "custom website design, website redesign services, modern business websites, conversion-focused web design, digital agency for growing brands, San Jose web design, Silicon Valley digital agency",
  url = "https://winterplum.co",
  image = "https://winterplum.co/og-image.jpg",
  type = "website",
  schema = [],
  noindex = false,
}: SEOProps) {
  const siteTitle = title === "Home" ? "Winter Plum & Co | Premium Web Design Studio" : `${title} | Winter Plum & Co`;

  const baseStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Winter Plum & Co",
      "url": "https://winterplum.co",
      "logo": "https://winterplum.co/logo.png",
      "description": "Premium web design studio and digital agency specializing in custom website design, redesigns, and conversion-focused digital experiences for growing brands.",
      "image": "https://winterplum.co/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Jose",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.3382,
        "longitude": -121.8863
      },
      "priceRange": "$$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.linkedin.com/company/winter-plum-co"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Winter Plum & Co",
      "url": "https://winterplum.co",
      "publisher": {
        "@type": "Organization",
        "name": "Winter Plum & Co",
        "logo": {
          "@type": "ImageObject",
          "url": "https://winterplum.co/logo.png"
        }
      }
    }
  ];

  const finalSchema = [...baseStructuredData, ...schema];

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Winter Plum & Co" />
      <meta name="theme-color" content="#f7f4ef" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}
      <meta property="og:site_name" content="Winter Plum & Co" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data (JSON-LD) for Google */}
      {finalSchema.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
