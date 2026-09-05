import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? '/drshaniaesha' : '',
  // Note: Security headers and Middleware are not supported in static exports (GitHub Pages)
};

export default nextConfig;
