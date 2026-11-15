/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['three'],

  images: {
    unoptimized: true,
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      three: require.resolve('three'),
    };

    return config;
  },
};

module.exports = nextConfig;