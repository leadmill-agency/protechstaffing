import LocationsClient from './LocationsClient'

export const metadata = {
  title: 'Pro-Tech Staffing Locations | Offices in 5 States',
  description: "Find your nearest Pro-Tech Staffing office in Richardson, Bedford, Austin, Tampa, San Jose, Phoenix, or Cincinnati, with addresses and phone numbers.",
  alternates: { canonical: '/locations' },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1920, height: 1012, alt: 'Pro-Tech Staffing Services' }],
    type: 'website',
    siteName: 'Pro-Tech Staffing Services',
    url: '/locations',
    title: 'Pro-Tech Staffing Locations | Offices in 5 States',
    description: 'Pro-Tech Staffing operates seven offices across Texas, Florida, California, Arizona, and Ohio.',
  },
}

export default function LocationsPage() {
  return <LocationsClient />
}
