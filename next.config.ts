import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["media.geeksforgeeks.org"],
    remotePatterns: [{hostname: "media.geeksforgeeks.org"}],
    },
  };

export default nextConfig;
