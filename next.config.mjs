/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.legendholding.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
