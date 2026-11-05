import Request1095CClient from './Request1095CClient'

export const metadata = {
  title: 'Request Your 1095-C Tax Form | Pro-Tech Staffing',
  description: "Current and former Pro-Tech employees can request a copy of their 1095-C tax form by phone or email. Identity is verified by phone, not online.",
  alternates: { canonical: '/request-1095c' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1920, height: 1012, alt: 'Pro-Tech Staffing Services' }],
    type: 'website',
    siteName: 'Pro-Tech Staffing Services',
    url: '/request-1095c',
    title: 'Request Your 1095-C Tax Form | Pro-Tech Staffing',
    description: 'Current and former Pro-Tech Staffing employees can request a copy of their 1095-C tax form by phone or email.',
  },
}

export default function Request1095CPage() {
  return <Request1095CClient />
}
