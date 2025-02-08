/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {},  // Asegúrate de no tener configuraciones SSL aquí
  publicRuntimeConfig: {},
  images: {
    unoptimized: true,
  },
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /**
   * @param {import('webpack').Configuration} config
   * @param {{ isServer: boolean }} options
   */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false, // ✅ Solución para errores relacionados con 'fs' en el cliente
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
