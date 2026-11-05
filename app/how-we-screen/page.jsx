import HowWeScreenClient from './HowWeScreenClient'

export const metadata = {
  title: 'How We Screen Candidates | Pro-Tech Staffing',
  description: 'Every Pro-Tech worker is screened before placement: work eligibility, background check, drug screening, skills and attendance, and certifications.',
  alternates: { canonical: '/how-we-screen' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1920, height: 1012, alt: 'Pro-Tech Staffing Services' }],
    type: 'website',
    siteName: 'Pro-Tech Staffing Services',
    url: '/how-we-screen',
    title: 'How We Screen Candidates | Pro-Tech Staffing',
    description: 'Work eligibility, background, drug screening, skills, attendance, and certification — verified before any worker reaches your floor.',
  },
}

export default function HowWeScreenPage() {
  return <HowWeScreenClient />
}
