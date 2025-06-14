/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    VENDURE_API_URL: process.env.VENDURE_API_URL || 'http://localhost:3000/shop-api',
  },
};
module.exports = nextConfig;
