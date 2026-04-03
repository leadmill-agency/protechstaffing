import ApplyClient from './ApplyClient'

export const metadata = {
  title: 'Apply Now | Pro-Tech Staffing',
  description: 'Submit your application to Pro-Tech Staffing and join our talent pool. Our recruiters will match you with manufacturing, warehouse, and industrial opportunities.',
  openGraph: {
    title: 'Apply Now | Pro-Tech Staffing',
    description: 'Submit your application to Pro-Tech Staffing and join our talent pool.',
  },
}

export default function ApplyNowPage() {
  return <ApplyClient />
}
