/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      },
      {
        protocol: 'https',
        hostname: 'laptopmedia.com',
      },
      {
        protocol: 'https',
        hostname: 'top10smartfonov.ru',
      },
      {
        protocol: 'https',
        hostname: 'www.notebookcheck.net',
      },
      {
        protocol: 'https',
        hostname: 'images.samsung.com',
      },
      {
        protocol: 'https',
        hostname: 'images.frandroid.com',
      },
      {
        protocol: 'https',
        hostname: 'bgfnth3nm2pvfksn.public.blob.vercel-storage.com',
      },
    ],
  }
};

export default nextConfig;
