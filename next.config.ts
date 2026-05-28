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
      // Legacy Wix URLs — city-slug pages
      { source: '/staffing-agency-bedford-tx', destination: '/locations/bedford-tx', permanent: true },
      { source: '/staffing-agency-dallas-fort-worth', destination: '/locations/richardson-tx', permanent: true },
      { source: '/staffing-agency-arlington-tx', destination: '/locations/richardson-tx', permanent: true },
      { source: '/staffing-agency-irving-tx', destination: '/locations/richardson-tx', permanent: true },
      { source: '/staffing-agency-garland-tx', destination: '/locations/richardson-tx', permanent: true },
      { source: '/staffing-agency-carrollton-tx', destination: '/locations/richardson-tx', permanent: true },
      // Legacy Wix URLs — primary navigation pages still indexed by Google.
      // Discovered May 26 via site:protechstaffing.com — 8 of 10 indexed Wix
      // pages were 404ing. Top suspect for Richardson's May GBP click drop:
      // lost backlink and ranking signal from these pages 404ing after the
      // Wix → Next.js migration.
      { source: '/our-services-1', destination: '/employers', permanent: true },
      { source: '/request-an-employee', destination: '/employers#contact', permanent: true },
      { source: '/administrative-1', destination: '/industries/administrative-clerical', permanent: true },
      { source: '/light-industrial', destination: '/industries/light-industrial', permanent: true },
      { source: '/about-5', destination: '/contact', permanent: true }, // Wix 1095 tax form page → contact
      { source: '/refer-a-friend', destination: '/job-seekers', permanent: true },
      { source: '/apply-online', destination: '/job-seekers#submit-application', permanent: true },
      { source: '/legal-privacy', destination: '/privacy-policy', permanent: true },
    ]
  },
};

export default nextConfig;
