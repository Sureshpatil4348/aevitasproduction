# Image Optimization Guide for Aevitas Website

## Current Issues

- Missing images causing loading errors (e.g., `/images/demo-thumbnail.jpg`)
- Unoptimized image formats increasing page load time
- Lack of responsive image sizes for different viewports
- Insufficient image loading prioritization

## Optimization Plan

### 1. Convert Images to Modern Formats

#### WebP Conversion

Convert all JPG/PNG images to WebP format for better compression:

```bash
# Install required tools
npm install -g sharp-cli

# Example conversion
sharp -i public/images/demo-thumbnail.jpg -o public/images/demo-thumbnail.webp -f webp

# Batch conversion
find public/images -type f \( -name "*.jpg" -o -name "*.png" \) -exec sharp -i {} -o {}.webp -f webp \;
```

#### AVIF Support (Optional)

For even better compression, consider adding AVIF format as well:

```bash
sharp -i public/images/demo-thumbnail.jpg -o public/images/demo-thumbnail.avif -f avif
```

### 2. Create Responsive Image Sets

Generate multiple sizes of each image for different viewport sizes:

```bash
# Example for a single image
sharp -i public/images/demo-thumbnail.jpg -o public/images/demo-thumbnail-sm.webp -f webp -w 640
sharp -i public/images/demo-thumbnail.jpg -o public/images/demo-thumbnail-md.webp -f webp -w 1024
sharp -i public/images/demo-thumbnail.jpg -o public/images/demo-thumbnail-lg.webp -f webp -w 1920
```

### 3. Implement Proper Next.js Image Component Usage

Update all image components to use proper Next.js Image optimization:

```tsx
// Before
<Image 
  src="/images/demo-thumbnail.jpg" 
  alt="Aevitas AI in action" 
  fill 
  className="object-cover"
/>

// After
<Image 
  src="/images/demo-thumbnail.webp" 
  alt="Aevitas AI in action" 
  fill 
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
  priority={isImportantImage}
  loading={isAboveFold ? "eager" : "lazy"}
  placeholder="blur"
  blurDataURL="data:image/svg+xml,%3Csvg..."
/>
```

### 4. Lazy Loading Implementation

Implement proper lazy loading for below-fold images:

```tsx
<Image 
  src="/images/below-fold-image.webp" 
  alt="Description" 
  width={800}
  height={600}
  loading="lazy"
/>
```

### 5. Fix Missing Images

Create a systematic inventory of all required images and ensure they exist:

1. Audit all image references in the codebase:
```bash
grep -r "\/images\/" --include="*.tsx" --include="*.jsx" --include="*.js" src/
```

2. Compare with actual images in the public directory:
```bash
find public/images -type f | sort
```

3. Create any missing images or update references.

### 6. Image Dimensions Specification

Explicitly set width and height for all images where possible to prevent layout shifts:

```tsx
<Image 
  src="/images/team-member.webp" 
  alt="Team Member" 
  width={300}
  height={400}
  className="rounded-xl"
/>
```

### 7. Image Component Best Practices

#### Use `next/image` for All Images

```tsx
import Image from 'next/image';

// Use this component for all images
<Image 
  src="/path/to/image.webp" 
  alt="Description"
  width={width}
  height={height}
/>
```

#### Proper Alt Text

Ensure all images have descriptive and meaningful alt text:

```tsx
// Bad
<Image src="/images/logo.webp" alt="" />

// Good
<Image src="/images/logo.webp" alt="Aevitas AI Video Production Logo" />
```

#### Priority Loading for LCP Images

Add the `priority` attribute to Largest Contentful Paint images:

```tsx
<Image 
  src="/images/hero-image.webp" 
  alt="AI Video Production" 
  priority
  width={1200}
  height={600}
/>
```

### 8. Background Images Optimization

For CSS background images:

```css
/* Before */
.hero-background {
  background-image: url('/images/background.jpg');
}

/* After */
.hero-background {
  background-image: url('/images/background.webp');
}

/* With fallback */
.hero-background {
  background-image: url('/images/background.jpg');
  background-image: -webkit-image-set(
    url('/images/background.webp') type('image/webp')
  );
  background-image: image-set(
    url('/images/background.webp') type('image/webp')
  );
}
```

## Implementation Checklist

- [ ] Install necessary tools (sharp, imagemin)
- [ ] Create inventory of all images used in the website
- [ ] Convert all images to WebP format
- [ ] Generate responsive image sizes
- [ ] Update all `<Image>` component implementations
- [ ] Fix missing images
- [ ] Set proper width and height attributes
- [ ] Implement lazy loading for below-fold images
- [ ] Add priority loading for LCP images
- [ ] Update background images in CSS
- [ ] Test performance improvements

## Testing

After implementing these optimizations, test performance using:

1. Lighthouse in Chrome DevTools
2. PageSpeed Insights
3. WebPageTest
4. Chrome DevTools Network tab

## Expected Improvements

- 30-50% reduction in image payload size
- Improved LCP (Largest Contentful Paint) metrics
- Reduced CLS (Cumulative Layout Shift)
- Better PageSpeed scores
- Improved user experience on slower connections 