/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.NODE_ENV === "production" ? "/finalProj" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/finalProj" : "",
};

module.exports = nextConfig;
