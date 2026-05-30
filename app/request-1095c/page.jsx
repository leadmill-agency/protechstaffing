import Request1095CClient from './Request1095CClient'

export const metadata = {
  title: 'Request Your 1095-C Tax Form | Pro-Tech Staffing',
  description: 'Current and former Pro-Tech Staffing employees can request a copy of their 1095-C tax form by phone or email. Identity is verified by phone — no sensitive information is collected online.',
  alternates: { canonical: '/request-1095c' },
  openGraph: {
    title: 'Request Your 1095-C Tax Form | Pro-Tech Staffing',
    description: 'Current and former Pro-Tech Staffing employees can request a copy of their 1095-C tax form by phone or email.',
  },
}

export default function Request1095CPage() {
  return <Request1095CClient />
}
