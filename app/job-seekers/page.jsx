import JobSeekersClient from './JobSeekersClient'

export const metadata = {
  title: 'Find Jobs | Pro-Tech Staffing — Manufacturing & Industrial Jobs',
  description: 'Find manufacturing, warehouse, and industrial jobs near you. Pro-Tech Staffing places workers in electronics, light industrial, warehouse, and supply chain roles across 7 US markets.',
  alternates: { canonical: '/job-seekers' },
  openGraph: {
    title: 'Find Jobs | Pro-Tech Staffing — Manufacturing & Industrial Jobs',
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
