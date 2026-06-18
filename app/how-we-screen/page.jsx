import HowWeScreenClient from './HowWeScreenClient'

export const metadata = {
  title: 'How We Screen Candidates | Pro-Tech Staffing',
  description: 'Every Pro-Tech worker is screened before placement: work eligibility & E-Verify, background checks, drug screening, skills and attendance verification, and certification (IPC, forklift, OSHA).',
  alternates: { canonical: '/how-we-screen' },
  openGraph: {
    title: 'How We Screen Candidates | Pro-Tech Staffing',
    description: 'Work eligibility, background, drug screening, skills, attendance, and certification — verified before any worker reaches your floor.',
  },
}

export default function HowWeScreenPage() {
  return <HowWeScreenClient />
}
