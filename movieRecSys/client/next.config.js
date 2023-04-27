const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? '/finalProj' : '',
  assetPrefix: isProd ? '/finalProj/' : '',
};

module.exports = nextConfig;
