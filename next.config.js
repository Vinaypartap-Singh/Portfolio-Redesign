/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "vinaydev.netlify.app"
        }],
      }
}

module.exports = nextConfig
