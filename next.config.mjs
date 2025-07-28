/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure the output to be a static export
  output: 'export',

  // The two settings below are needed for the site to work on GitHub Pages
  // Your repository name is 'tour-website'
  basePath: '/enzoy_tours', 
  assetPrefix: '/enzoy_tours/',

  // Disable image optimization, as it's not supported with static export on GitHub Pages
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;