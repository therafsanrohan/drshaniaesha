import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/drshaniaesha' : '',
  assetPrefix: isProd ? '/drshaniaesha/' : '',
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  // Note: Security headers and Middleware are not supported in static exports (GitHub Pages)
};

export default nextConfig;
