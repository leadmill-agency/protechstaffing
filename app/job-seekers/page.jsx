import JobSeekersClient from './JobSeekersClient'

export const metadata = {
  title: 'Manufacturing & Warehouse Jobs Near You | Pro-Tech Staffing',
  description: 'Find manufacturing, warehouse, and industrial jobs near you. Pro-Tech places workers in electronics, light industrial, and warehouse roles in 7 US markets.',
  alternates: { canonical: '/job-seekers' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1920, height: 1012, alt: 'Pro-Tech Staffing Services' }],
    type: 'website',
    siteName: 'Pro-Tech Staffing Services',
    url: '/job-seekers',
    title: 'Manufacturing & Warehouse Jobs Near You | Pro-Tech Staffing',
    description: 'Find manufacturing, warehouse, and industrial jobs near you with Pro-Tech Staffing.',
  },
}

// NOTE: We intentionally do NOT emit JobPosting structured data here.
// This page describes role *categories* Pro-Tech staffs for — it is not a
// listing of real job postings. JobPosting schema requires datePosted plus
// concrete posting metadata, and using it for non-postings is the kind of
// over-claim that triggers Search Console warnings (and at the limit, a
// "spammy structured markup" manual penalty).
//
// Actual job listings live on ZipRecruiter, which emits its own JobPosting
// schema on its own pages. The site's EmploymentAgency schema (in
// app/layout.jsx) already declares Pro-Tech as a staffing agency with its
// services — that's the correct schema for this page.

export default function JobSeekersPage() {
  return <JobSeekersClient />
}
