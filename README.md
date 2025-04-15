# Aevitas - AI-Powered Video Production Platform

Aevitas is a modern web platform showcasing AI-powered video production services and automated YouTube channel management.

## Features

- Automated YouTube channel creation and management
- AI-powered video production services
- End-to-end content creation pipeline
- Multi-platform distribution capabilities

## Technology Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, SCSS
- **Animation**: Framer Motion
- **Deployment**: Netlify

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment to Netlify

This site is configured for easy deployment to Netlify:

1. Connect your GitHub repository to Netlify
2. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Add the following environment variables:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL

The `netlify.toml` file in this repository handles most configuration automatically.

## Project Structure

- `src/pages`: Next.js pages
- `src/components`: Reusable React components
- `src/styles`: Global styles and Tailwind configuration
- `src/utils`: Utility functions and data files
- `public`: Static assets

## Version History

- 1.1.0: Updated footer layout, contact form enhancements, Netlify deployment configuration
- 1.0.0: Initial release with core pages and functionality

## License

MIT 