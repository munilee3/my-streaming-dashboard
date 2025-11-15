import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY || "e7843e5d3e8d4494c916b2626b6cb449",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  }
};

export default nextConfig;