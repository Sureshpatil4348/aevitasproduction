/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  output: 'standalone',
};

module.exports = nextConfig; 