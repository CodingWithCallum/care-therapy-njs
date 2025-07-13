import type { NextConfig } from "next";

module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  // Add config export
  sitemap: require('./next-sitemap.config'),
}

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{hostname: "media.geeksforgeeks.org"},{hostname:"media.geeksforgeeks.org"},{hostname: "images.unsplash.com"}],
    },
  };

export default nextConfig;
