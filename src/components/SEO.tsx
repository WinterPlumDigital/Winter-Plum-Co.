import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  schema?: Record<string, any>[];
  noindex?: boolean;
}

export function SEO({
  title,
  description = "We create SEO-powered websites that look professional, attract customers, stay visible on Google, and turn visitors into customers.",
  keywords,
  url = "https://winterplum.co",
  image = "https://winterplum.co/og-image.png",
  type = "website",
  schema,
  noindex,
}: SEOProps) {
  const siteTitle = title === "Home" ? "Winter Plum & Co | Premium Web Design Studio" : `${title} | Winter Plum & Co`;
  const canonicalUrl = url.replace('/#', '');

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Favicon links */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      {/* JSON-LD Schema */}
      {schema && schema.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
