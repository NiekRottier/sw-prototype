/** @type {import('next').NextConfig} */
const withSerwist = require("@serwist/next").default({
  swSrc: "src/app/service-worker.js",
  swDest: "public/sw.js",
  cacheOnFrontEndNav: true,
});

const nextConfig = withSerwist({})

module.exports = nextConfig
