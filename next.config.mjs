/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      use: 'html-loader',
    });
    return config;
  },
  images: {
     remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.r2.dev',
            port: '',
            pathname: '/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
