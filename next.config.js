/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
    domains: ['localhost'],
  },
  // Netlify requires target to be set to serverless for versions before Next.js 12
  // For Next.js 12+ this is handled automatically by @netlify/plugin-nextjs
  output: 'standalone',
}

module.exports = nextConfig; 