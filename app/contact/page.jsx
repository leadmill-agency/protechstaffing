import ContactClient from './ContactClient'

export const metadata = {
  title: 'Contact Us | Pro-Tech Staffing',
  description: 'Get in touch with Pro-Tech Staffing. Whether you\'re looking for work, want to hire, or have a general question — we respond within one business day.',
  openGraph: {
    title: 'Contact Us | Pro-Tech Staffing',
    description: 'Get in touch with Pro-Tech Staffing. We respond within one business day.',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
