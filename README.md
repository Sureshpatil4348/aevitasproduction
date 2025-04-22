# Aevitas - AI-Powered Video Content Creation

This is the website for Aevitas, a company that leverages cutting-edge AI to automate and simplify video content creation for multiple platforms.

## Project Overview

Aevitas harnesses AI to build automated YouTube channels and engaging digital videos, offering end-to-end service to clients. The website showcases five unique YouTube channels (Ridiculously Rich, ConBuster, Whodunit Files, Showdown Central, RankItUp) and presents clear service packages for potential clients.

## Features

- Modern, tech-savvy design with AI-inspired visual elements
- Responsive layout for all devices
- Showcase of 5 unique YouTube channels
- Detailed service offerings
- Pricing packages
- Team and testimonial sections
- Contact form and information

## Tech Stack

- Next.js - React framework
- TypeScript - Type-safe JavaScript
- TailwindCSS - Utility-first CSS framework
- Framer Motion - Animation library
- React Icons - Icon library

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sureshpatil4348/aevitasproduction.git
cd aevitasproduction
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/src/components` - React components
  - `/Layout` - Layout components like Navbar and Footer
  - `/Home` - Homepage sections
- `/src/pages` - Next.js pages
- `/src/styles` - Global styles
- `/src/utils` - Utility functions and data
- `/public` - Static assets
  - `/images/channels` - Channel logos and images

## Deployment

The website can be deployed to any static hosting service or Node.js hosting platform that supports Next.js applications, such as Vercel, Netlify, or AWS Amplify.

### Deployment to Netlify (Recommended)

This project is configured for easy deployment on Netlify:

1. **Option 1: Direct Deploy from GitHub**
   - Fork/clone this repository to your GitHub account
   - Log in to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and the repository
   - Select the main branch
   - Netlify will automatically detect the correct build settings from netlify.toml
   - Click "Deploy site"

2. **Option 2: Deploy via Netlify CLI**
   - Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
   - Authenticate with Netlify:
   ```bash
   netlify login
   ```
   - Initialize the project (if not already connected):
   ```bash
   netlify init
   ```
   - Deploy to production:
   ```bash
   netlify deploy --prod
   ```

3. **Netlify Configuration**
   This project includes a `netlify.toml` file with all the necessary configuration:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugin: `@netlify/plugin-nextjs`
   - Redirects configured for client-side routing

### Environment Variables

For production deployment, you may need to set the following environment variables in Netlify:

- `NEXT_PUBLIC_SITE_URL` - The URL of your website
- `NEXT_PUBLIC_API_URL` - The URL of your API (if applicable)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Channel Data Sources

The channel data is stored in the `/src/utils/channelData.ts` file and can be updated as needed. The actual channel logos and images are located in the `/public/images/channels` directory.

## Customization

### Theme Colors

The theme colors can be customized in the `tailwind.config.js` file. The current theme uses:

- Primary: `#4361ee` (blue)
- Secondary: `#7209b7` (purple)
- Accent: `#f72585` (pink)

Each channel also has its own color scheme defined in the configuration. 