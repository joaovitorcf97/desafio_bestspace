/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'teste.joaovitor.tech',
      },
    ],
  },
};

export default nextConfig;
