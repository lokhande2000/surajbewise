import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_BASE_URL:
      process.env.NODE_ENV === 'production' ? 'https://collegeconnect.bewsie.in' : 'http://localhost:8080',
    PORT: '8080',
  },
  output: 'standalone',
};

export default nextConfig;
