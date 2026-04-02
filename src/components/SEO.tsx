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
  image,
  type,
  schema,
  noindex,
}: SEOProps) {
  const siteTitle = title === "Home" ? "Winter Plum & Co | Premium Web Design Studio" : `${title} | Winter Plum & Co`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />

      {/* Favicon links */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
    </Helmet>
  );
}
