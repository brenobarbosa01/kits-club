import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client'],
  images: {
    domains: ['nyc3.digitaloceanspaces.com', 's3.amazonaws.com'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
