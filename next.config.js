/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      
    },
    webpack: (config) => {
      config.resolve.fallback = { fs: false }; // Evita errores con ciertos módulos
      return config;
    },
  };
  
  module.exports = nextConfig;
  
  
  
  