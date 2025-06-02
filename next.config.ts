import type { NextConfig } from "next";


const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProduction? '/yeshiva_page' : '',
  basePath: isProduction ? '/yeshiva_page' : '',
  output: 'export',
};

export default nextConfig;
