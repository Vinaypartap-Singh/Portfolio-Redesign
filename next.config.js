/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vinaydev.netlify.app",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
    ],
  },
};

module.exports = nextConfig;
