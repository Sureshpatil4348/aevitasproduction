/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  swcMinify: true,
  // Change from 'standalone' to 'export' for static site generation
  // This works better with Netlify
  output: 'export',
  // Disable image optimization as it's not compatible with 'export'
  distDir: 'out',
  // Ensure trailing slashes for consistent paths
  trailingSlash: true,
};

module.exports = nextConfig;