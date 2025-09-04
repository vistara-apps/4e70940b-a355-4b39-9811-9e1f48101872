/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['warpcast.com', 'imagedelivery.net'],
  },
};

export default nextConfig;
