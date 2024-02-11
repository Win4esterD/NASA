/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    images: {
      unoptimized: true,
    },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig
