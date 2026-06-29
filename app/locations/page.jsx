import LocationsClient from './LocationsClient'

export const metadata = {
  title: 'Our Locations | Pro-Tech Staffing Services',
  description: 'Pro-Tech Staffing operates seven offices across Texas, Florida, California, Arizona, and Ohio. Local recruiters, real market knowledge, 48-hour fill time.',
  alternates: { canonical: '/locations' },
  openGraph: {
    title: 'Our Locations | Pro-Tech Staffing Services',
    description: 'Pro-Tech Staffing operates seven offices across Texas, Florida, California, Arizona, and Ohio.',
  },
}

export default function LocationsPage() {
  return <LocationsClient />
}
