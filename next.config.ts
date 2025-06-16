import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{hostname: "media.geeksforgeeks.org"},{hostname:"media.geeksforgeeks.org"}],
    },
  };

export default nextConfig;
