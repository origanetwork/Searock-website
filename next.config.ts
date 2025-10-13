import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost", "127.0.0.1", "::1", "picsum.photos"], 
    formats: ["image/avif", "image/webp"],
    qualities : [ 85,90,100]
  },
};

export default nextConfig;
