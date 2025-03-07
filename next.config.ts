import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
      turbo: {
        rules: {
          "*.svg": {
            loaders: ["@svgr/webpack"],
            as: "react",
          },
        },
      },
    },
    reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http', 
        hostname: 'czestochowaptecmspl.local/',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
};

export default nextConfig;
