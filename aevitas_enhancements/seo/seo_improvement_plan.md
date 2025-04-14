# SEO Improvement Plan for Aevitas Website

## Current State Analysis

Based on the review of the website code and structure, the following SEO issues have been identified:

1. Lack of structured data/schema markup
2. Limited keyword optimization in page titles and meta descriptions
3. Missing alt text on some images
4. Insufficient content depth on key service pages
5. No blog or content marketing strategy evident
6. Missing sitemap.xml and robots.txt
7. Incomplete meta tags for social sharing

## SEO Improvement Strategy

### 1. Technical SEO Enhancements

#### Schema Markup Implementation

Add structured data to help search engines understand the content and context:

```tsx
// Create a schema component for consistent implementation
// src/components/SEO/SchemaMarkup.tsx

import React from 'react';
import Head from 'next/head';

type SchemaOrgProps = {
  type: string;
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  publisherName?: string;
  publisherLogo?: string;
};

const SchemaMarkup = ({
  type,
  name,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
  publisherName,
  publisherLogo
}: SchemaOrgProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url,
    ...(imageUrl && { image: imageUrl }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(authorName && {
      author: {
        '@type': 'Person',
        name: authorName
      }
    }),
    ...(publisherName && {
      publisher: {
        '@type': 'Organization',
        name: publisherName,
        logo: {
          '@type': 'ImageObject',
          url: publisherLogo
        }
      }
    })
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export default SchemaMarkup;
```

#### Sitemap Generation

Create a dynamic sitemap.xml:

1. Install the required package:
```bash
npm install next-sitemap
```

2. Create `next-sitemap.config.js` in the project root:
```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://aevitas.ai',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://aevitas.ai/server-sitemap.xml', // Optional: for dynamic routes
    ],
  },
  exclude: ['/admin', '/thank-you'],
};
```

3. Add to `package.json` scripts:
```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

#### Canonical URLs

Implement canonical URLs to prevent duplicate content issues:

```tsx
// src/components/SEO/SEOHead.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';

type SEOHeadProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
};

const SEOHead = ({ title, description, canonical, ogImage, ogType = 'website' }: SEOHeadProps) => {
  const router = useRouter();
  const siteUrl = process.env.SITE_URL || 'https://aevitas.ai';
  const canonicalUrl = canonical ? canonical : `${siteUrl}${router.asPath}`;
  const ogImageUrl = ogImage ? ogImage : `${siteUrl}/images/og-default.jpg`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImageUrl} />
    </Head>
  );
};

export default SEOHead;
```

### 2. Content Strategy & Keyword Optimization

#### Target Keyword Research

Focus on the following primary keyword categories:

1. **AI Video Production**
   - "AI video production service"
   - "Automated video content creation"
   - "AI YouTube channel management"
   - "AI generated video content"

2. **YouTube Growth**
   - "YouTube channel growth service"
   - "Increase YouTube subscribers"
   - "YouTube content strategy"
   - "YouTube automation services"

3. **Multi-Platform Video**
   - "Multi-platform video marketing"
   - "Cross-platform video content"
   - "Video content for social media"
   - "TikTok and YouTube content creation"

#### Page Title & Meta Description Optimization

Update all key pages with optimized titles and descriptions:

```tsx
// Example implementation for the homepage
<SEOHead 
  title="Aevitas | AI-Powered YouTube Video Production & Channel Growth"
  description="Leverage cutting-edge AI to automate video content creation for YouTube, TikTok, and social media. Build passive income with high-quality videos created 24/7."
/>

// Example for Services page
<SEOHead 
  title="AI Video Production Services | Automated Content Creation | Aevitas"
  description="Our AI-powered video production services create high-converting content for YouTube, TikTok, Instagram, and more. Full-service management from script to publishing."
/>
```

#### Content Gap Analysis & Expansion

For each service page, expand content to include:

1. Detailed service descriptions (500+ words)
2. FAQ sections with common questions
3. Process explanations with step-by-step details
4. Case studies with specific results
5. Testimonials relevant to each service

### 3. Blog & Content Marketing Implementation

#### Blog Section Creation

Create a blog section with initial content focused on high-value keywords:

```tsx
// src/pages/blog/index.tsx (Blog listing page)
// src/pages/blog/[slug].tsx (Blog post template)
```

#### Initial Blog Content Plan

Develop 8-10 initial blog posts targeting key search terms:

1. "How AI is Revolutionizing YouTube Content Creation"
2. "The Complete Guide to Building an Automated YouTube Channel"
3. "5 Ways AI-Generated Videos Outperform Traditional Production"
4. "Case Study: How We Grew a YouTube Channel to 100K Subscribers with AI"
5. "The Future of Video Marketing: AI's Growing Role"
6. "AI vs. Human Video Production: A Cost Comparison"
7. "Multi-Platform Video Strategy: Repurposing Content Across Channels"
8. "YouTube Algorithm 2023: How to Optimize AI-Generated Content"

### 4. Local SEO (if applicable)

If the business has a physical location or serves specific geographic areas:

1. Create a Google Business Profile
2. Add location schema markup
3. Create location-specific landing pages
4. Implement local keywords in metadata

### 5. Internal Linking Strategy

Improve site architecture with strategic internal linking:

1. Create cornerstone content pages for main services
2. Link from blog posts to relevant service pages
3. Implement related services sections
4. Use descriptive anchor text for internal links

### 6. Image Optimization

Enhance all images for SEO:

1. Add descriptive alt text to all images
2. Use descriptive filenames (e.g., "ai-video-production-process.webp")
3. Implement proper image sizing and compression
4. Add image schema where appropriate

Example implementation:

```tsx
<Image 
  src="/images/ai-video-production-process.webp" 
  alt="Aevitas AI video production process showing script generation, avatar creation, and editing stages" 
  width={800} 
  height={500}
  priority={isAboveFold}
/>
```

### 7. Mobile Optimization

Ensure mobile-friendliness:

1. Test responsive design on multiple devices
2. Optimize for mobile Core Web Vitals
3. Ensure tap targets are properly sized
4. Maintain readable text without zooming

### 8. Speed Optimization

Improve page load times:

1. Optimize image delivery (already covered in performance plan)
2. Implement lazy loading for below-fold content
3. Minimize JavaScript and CSS
4. Utilize proper caching strategies
5. Consider implementing a CDN if not already using one

## Implementation Timeline

### Week 1: Technical SEO Foundation

- [ ] Create SEOHead and SchemaMarkup components
- [ ] Implement canonical URLs across all pages
- [ ] Set up sitemap generation
- [ ] Create robots.txt with proper directives
- [ ] Implement basic schema markup on all core pages

### Week 2: On-Page SEO Optimization

- [ ] Update all page titles and meta descriptions
- [ ] Optimize header tags (H1, H2, etc.) across the site
- [ ] Enhance alt text for all images
- [ ] Implement internal linking strategy
- [ ] Add FAQ schema where applicable

### Week 3: Content Expansion

- [ ] Expand content on key service pages
- [ ] Create FAQ sections for main services
- [ ] Develop case studies with proper schema
- [ ] Set up blog infrastructure
- [ ] Create initial blog posts (at least 3)

### Week 4: Local SEO & Testing

- [ ] Set up Google Business Profile (if applicable)
- [ ] Create location pages (if applicable)
- [ ] Perform comprehensive SEO audit
- [ ] Test site on multiple devices and browsers
- [ ] Fix any issues identified during testing

## Tracking & Measurement

### Key SEO Metrics to Track

1. **Organic Traffic**
   - Overall organic sessions
   - Organic traffic by landing page
   - Organic traffic by device type

2. **Keyword Rankings**
   - Primary keyword positions
   - Featured snippet appearances
   - Local pack inclusions (if applicable)

3. **Engagement Metrics**
   - Bounce rate
   - Time on page
   - Pages per session
   - Scroll depth

4. **Conversion Metrics**
   - Organic conversion rate
   - Leads from organic search
   - Form completions from organic traffic

### Recommended Tracking Tools

1. **Google Search Console**
   - Monitor indexing status
   - Track click-through rates
   - Identify search query opportunities
   - Detect and fix technical issues

2. **Google Analytics**
   - Track organic traffic metrics
   - Monitor user behavior
   - Measure conversion goals
   - Analyze landing page performance

3. **SEO Software (Optional)**
   - Ahrefs, SEMrush, or Moz for keyword tracking
   - Regular site audits
   - Competitor analysis
   - Backlink monitoring

## Ongoing SEO Maintenance

### Monthly Tasks

1. Review Google Search Console data for issues
2. Track keyword positions for primary terms
3. Analyze top-performing content
4. Monitor competitor positioning
5. Publish new blog content (1-2 posts)

### Quarterly Tasks

1. Comprehensive technical SEO audit
2. Update content on key service pages
3. Refresh metadata for underperforming pages
4. Review and update schema implementation
5. Analyze conversion paths from organic traffic

### Annual Tasks

1. Complete keyword research refresh
2. Comprehensive content gap analysis
3. Update all cornerstone content
4. Review and update technical SEO setup
5. Analyze year-over-year SEO performance 