import LocationsClient from './LocationsClient'

export const metadata = {
  title: 'Our Locations | Pro-Tech Staffing Services',
  description: 'Pro-Tech Staffing operates six offices across Texas, Florida, California, and Arizona. Local recruiters, real market knowledge, 48-hour fill time.',
  openGraph: {
    title: 'Our Locations | Pro-Tech Staffing Services',
    description: 'Pro-Tech Staffing operates six offices across Texas, Florida, California, and Arizona.',
  },
}

export default function LocationsPage() {
  return <LocationsClient />
}
