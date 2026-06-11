import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "thumbs.dreamstime.com",
      "lovely-flamingo-139.convex.cloud",
      "gallant-ram-439.convex.cloud",
      "img.clerk.com",
    ],
  },
};

export default nextConfig;
