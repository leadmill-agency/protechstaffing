import EmployersClient from './EmployersClient'

export const metadata = {
  title: 'Hire Industrial & Manufacturing Workers | Pro-Tech Staffing',
  description: 'Request industrial, electronics manufacturing, and warehouse workers. Temporary staffing, temp-to-hire, direct placement, payroll services, and PEO.',
  alternates: { canonical: '/employers' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1920, height: 1012, alt: 'Pro-Tech Staffing Services' }],
    type: 'website',
    siteName: 'Pro-Tech Staffing Services',
    url: '/employers',
    title: 'Hire Industrial & Manufacturing Workers | Pro-Tech Staffing',
    description: 'Request industrial, electronics manufacturing, and warehouse workers from Pro-Tech Staffing.',
  },
}

export default function EmployersPage() {
  return <EmployersClient />
}
