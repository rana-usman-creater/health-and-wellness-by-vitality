import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
  author?: string;
  publishDate?: string;
}

export function SEO({
  title,
  description,
  canonical,
  type = 'website',
  image = 'https://www.example.com/og-image.jpg',
  author,
  publishDate
}: SEOProps) {
  const siteUrl = 'https://www.example.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  const schema = type === 'article' 
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "image": [image],
        "datePublished": publishDate,
        "author": [{
            "@type": "Person",
            "name": author
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Health & Wellness Portal",
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.png`
            }
        }
      }
    : {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Health & Wellness Portal",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`
      };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{`${title} | Health & Wellness Portal`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullCanonical} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
