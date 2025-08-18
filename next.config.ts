import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // remote image access like this ( define in next.config.ts)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui.aceternity.com",
        pathname: "/**", // ye optional hai — agar images ka path specify karna ho
      },
    ],
  },
};

export default nextConfig;
