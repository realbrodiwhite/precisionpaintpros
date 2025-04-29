import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Enables blurDataURL automatic generation
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
