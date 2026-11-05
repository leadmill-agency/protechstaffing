import ContactClient from './ContactClient'

export const metadata = {
  title: 'Contact Us | Pro-Tech Staffing',
  description: 'Get in touch with Pro-Tech Staffing. Whether you\'re looking for work, want to hire, or have a general question — we respond within one business day.',
  alternates: { canonical: '/contact' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1920, height: 1012, alt: 'Pro-Tech Staffing Services' }],
    type: 'website',
    siteName: 'Pro-Tech Staffing Services',
    url: '/contact',
    title: 'Contact Us | Pro-Tech Staffing',
    description: 'Get in touch with Pro-Tech Staffing. We respond within one business day.',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
