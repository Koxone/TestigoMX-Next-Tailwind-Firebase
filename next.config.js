/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow loading of images from the public folder only; external sources are not permitted
    domains: [],
  },
};

module.exports = nextConfig;