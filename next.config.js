/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // basePath: process.env.NODE_ENV === "development" ? "" : "/portfolio",
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/projects": { page: "/projects" },
    }
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
