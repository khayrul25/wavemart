import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
