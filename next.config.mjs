// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false, // Updated to fix Vercel build error
  // ... other configurations
};

module.exports = nextConfig;
