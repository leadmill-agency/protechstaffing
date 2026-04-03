import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      { source: '/careers', destination: '/jobs', permanent: true },
      { source: '/staffing-agency-bedford-tx', destination: '/locations/bedford-tx', permanent: true },
      { source: '/staffing-agency-dallas-fort-worth', destination: '/locations/richardson-tx', permanent: true },
      { source: '/staffing-agency-arlington-tx', destination: '/locations/richardson-tx', permanent: true },
      { source: '/staffing-agency-irving-tx', destination: '/locations/richardson-tx', permanent: true },
      { source: '/staffing-agency-garland-tx', destination: '/locations/richardson-tx', permanent: true },
    ]
  },
};

export default nextConfig;
