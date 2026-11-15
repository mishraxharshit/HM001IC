/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/USH-web-deploy',      // ← koi trailing slash nahi
  assetPrefix: '/USH-web-deploy/',  // ← trailing slash zaroor
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;