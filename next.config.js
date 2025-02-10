/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', 
  reactStrictMode: false,
  serverRuntimeConfig: {}, 
  publicRuntimeConfig: {},
  images: {
    unoptimized: true,
  },
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: false, // Desactiva el minificador SWC
};

module.exports = nextConfig;
