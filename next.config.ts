import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      // Job Seekers consolidation: /jobs + /apply merged into /job-seekers
      { source: '/jobs', destination: '/job-seekers#open-positions', permanent: true },
      { source: '/apply', destination: '/job-seekers#submit-application', permanent: true },
      { source: '/careers', destination: '/job-seekers', permanent: true },
      // Legacy Wix URLs
      { source: '/staffing-agency-bedford-tx', destination: '/locations/bedford-tx', permanent: true },
      { source: '/staffing-agency-dallas-fort-worth', destination: '/locations/richardson-tx', permanent: true },
      { source: '/staffing-agency-arlington-tx', destination: '/locations/richardson-tx', permanent: true },
      { source: '/staffing-agency-irving-tx', destination: '/locations/richardson-tx', permanent: true },
      { source: '/staffing-agency-garland-tx', destination: '/locations/richardson-tx', permanent: true },
      { source: '/staffing-agency-carrollton-tx', destination: '/locations/richardson-tx', permanent: true },
    ]
  },
};

export default nextConfig;
