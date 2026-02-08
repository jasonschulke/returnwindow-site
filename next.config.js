/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages - set to '' if using custom domain
  basePath: '',
  trailingSlash: true,
}

module.exports = nextConfig
