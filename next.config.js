/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    // domains: ["images.unsplash.com", "source.unsplash.com"],
  },
};

module.exports = nextConfig;
