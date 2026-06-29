import IndustriesClient from './IndustriesClient'

export const metadata = {
  title: 'Industries We Staff | Pro-Tech Staffing Services',
  description: 'Pro-Tech Staffing serves electronics manufacturing, light industrial, warehouse, supply chain, administrative, and general labor industries across seven US markets.',
  alternates: { canonical: '/industries' },
  openGraph: {
    title: 'Industries We Staff | Pro-Tech Staffing Services',
    description: 'Pro-Tech Staffing serves electronics manufacturing, light industrial, warehouse, supply chain, administrative, and general labor industries.',
  },
}

export default function IndustriesPage() {
  return <IndustriesClient />
}
