import AboutClient from './AboutClient'

export const metadata = {
  title: 'About Pro-Tech Staffing | 30 Years in Industrial Staffing',
  description: 'Pro-Tech Staffing has 30 years of experience in electronics manufacturing, industrial, and warehouse staffing. Seven offices across TX, FL, CA, AZ, and OH.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Pro-Tech Staffing | 30 Years in Industrial Staffing',
    description: 'Pro-Tech Staffing has 30 years of experience in electronics manufacturing, industrial, and warehouse staffing.',
  },
}

export default function AboutPage() {
  return <AboutClient />
}
