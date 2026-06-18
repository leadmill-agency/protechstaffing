import EmployersClient from './EmployersClient'

export const metadata = {
  title: 'Employers | Pro-Tech Staffing — Industrial & Manufacturing Staffing',
  description: 'Request industrial, electronics manufacturing, and warehouse workers from Pro-Tech Staffing. Temporary staffing, temp-to-hire, direct placement, payroll services, PEO, and consulting.',
  alternates: { canonical: '/employers' },
  openGraph: {
    title: 'Employers | Pro-Tech Staffing — Industrial & Manufacturing Staffing',
    description: 'Request industrial, electronics manufacturing, and warehouse workers from Pro-Tech Staffing.',
  },
}

export default function EmployersPage() {
  return <EmployersClient />
}
