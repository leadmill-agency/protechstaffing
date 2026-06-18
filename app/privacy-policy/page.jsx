import PrivacyClient from './PrivacyClient'

export const metadata = {
  title: 'Privacy Policy | Pro-Tech Staffing',
  description: 'Pro-Tech Staffing privacy policy — how we collect, use, store, and protect your information.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Pro-Tech Staffing',
    description: 'Pro-Tech Staffing privacy policy — how we collect, use, store, and protect your information.',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyClient />
}
