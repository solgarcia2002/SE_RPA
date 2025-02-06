/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    unoptimized: true, // Útil si no usas el servicio de optimización de imágenes de Next.js en Amplify
  }
};

module.exports = nextConfig;
