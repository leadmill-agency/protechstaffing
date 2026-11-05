import PrivacyClient from './PrivacyClient'

export const metadata = {
  title: 'Privacy Policy | Pro-Tech Staffing',
  description: 'Pro-Tech Staffing privacy policy: how we collect, use, store, and protect your information, and how to ask us to correct or delete it.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1920, height: 1012, alt: 'Pro-Tech Staffing Services' }],
    type: 'website',
    siteName: 'Pro-Tech Staffing Services',
    url: '/privacy-policy',
    title: 'Privacy Policy | Pro-Tech Staffing',
    description: 'Pro-Tech Staffing privacy policy — how we collect, use, store, and protect your information.',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyClient />
}
