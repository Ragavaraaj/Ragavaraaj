import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  assetPrefix: process.env.PAGES_BASE_PATH, // assetPrefix requires the trailing slash
  images: {
    unoptimized: true, // Disable image optimization for static exports if needed
  },
};

export default nextConfig;
