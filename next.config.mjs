/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.imgur.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://api.escuelajs.co/api/v1/:path*', // Proxy to the API
        },
      ];
    },
};


export default nextConfig;
