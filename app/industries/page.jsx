import IndustriesClient from './IndustriesClient'

export const metadata = {
  title: 'Industries We Staff | Pro-Tech Staffing Services',
  description: 'Pro-Tech staffs electronics manufacturing, light industrial, warehouse, supply chain, data center, administrative, and general labor roles in 7 US markets.',
  alternates: { canonical: '/industries' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1920, height: 1012, alt: 'Pro-Tech Staffing Services' }],
    type: 'website',
    siteName: 'Pro-Tech Staffing Services',
    url: '/industries',
    title: 'Industries We Staff | Pro-Tech Staffing Services',
    description: 'Pro-Tech Staffing serves electronics manufacturing, light industrial, warehouse, supply chain, administrative, and general labor industries.',
  },
}

export default function IndustriesPage() {
  return <IndustriesClient />
}
