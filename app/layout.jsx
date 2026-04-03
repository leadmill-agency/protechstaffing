import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import I18nProvider from '@/components/I18nProvider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata = {
  title: {
    default: 'Industrial Staffing Agency in Dallas TX | Pro-Tech Staffing Services',
    template: '%s | Pro-Tech Staffing',
  },
  description: 'Pro-Tech Staffing is a light industrial staffing agency serving Dallas-Fort Worth, Tampa FL, San Jose CA, and Phoenix AZ. Vetted workers placed in 48 hours. Temp, temp-to-hire, and direct placement.',
  robots: 'index, follow',
  metadataBase: new URL('https://www.protechstaffing.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'Industrial Staffing Agency in Dallas TX | Pro-Tech Staffing Services',
    description: 'Light industrial, warehouse, electronic manufacturing, and supply chain staffing across Dallas-Fort Worth and five additional US markets. Vetted workers in 48 hours.',
    url: 'https://www.protechstaffing.com/',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EmploymentAgency'],
    name: 'Pro-Tech Staffing Services',
    url: 'https://www.protechstaffing.com',
    logo: 'https://www.protechstaffing.com/logo.png',
    description: 'Light industrial, electronic manufacturing, warehouse, and supply chain staffing agency serving Dallas-Fort Worth, Tampa FL, San Jose CA, and Phoenix AZ.',
    telephone: '+1-000-000-0000',
    email: 'info@protechstaffing.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'TBD',
      addressLocality: 'Richardson',
      addressRegion: 'TX',
      postalCode: '75080',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 32.9483, longitude: -96.7299 },
    areaServed: [
      'Richardson TX', 'Bedford TX', 'Dallas TX', 'Fort Worth TX',
      'Arlington TX', 'Plano TX', 'Irving TX', 'Garland TX',
      'Carrollton TX', 'Austin TX', 'Tampa FL',
      'San Jose CA', 'Phoenix AZ', 'Scottsdale AZ', 'Mesa AZ', 'Tempe AZ', 'Chandler AZ',
    ],
    knowsAbout: [
      'Light Industrial Staffing', 'Electronic Manufacturing Staffing',
      'Warehouse Staffing', '3PL Staffing', 'Supply Chain Staffing',
      'Administrative Staffing', 'Temp-to-Hire', 'Direct Placement',
    ],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '120', bestRating: '5' },
    sameAs: [
      'https://www.linkedin.com/company/pro-tech-staffing',
      'https://www.google.com/maps?cid=PLACEHOLDER',
    ],
  }

  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <I18nProvider>
          <Nav />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  )
}
