import JobSeekersClient from './JobSeekersClient'

export const metadata = {
  title: 'Find Jobs | Pro-Tech Staffing — Manufacturing & Industrial Jobs',
  description: 'Find manufacturing, warehouse, and industrial jobs near you. Pro-Tech Staffing places workers in electronics, light industrial, warehouse, and supply chain roles across 6 US markets.',
  openGraph: {
    title: 'Find Jobs | Pro-Tech Staffing — Manufacturing & Industrial Jobs',
    description: 'Find manufacturing, warehouse, and industrial jobs near you with Pro-Tech Staffing.',
  },
}

export default function JobSeekersPage() {
  return <JobSeekersClient />
}
