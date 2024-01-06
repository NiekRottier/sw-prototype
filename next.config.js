/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheStartUrl: true,
  cacheOnFrontendNav: true,
  workboxOptions: {
    additionalManifestEntries: [
      '/',
      '/new-page',
      '/new-page/deeper-page',
      '/manifest.webmanifest',
    ]
  }
});

const nextConfig = withPWA({})

module.exports = nextConfig
