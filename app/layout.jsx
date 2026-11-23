import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SiteBanner from '@/components/SiteBanner'
import I18nProvider from '@/components/I18nProvider'
import WebVitals from '@/app/_components/WebVitals'

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
    default: 'Pro-Tech Staffing Services | Industrial Staffing Since 1996',
    template: '%s',
  },
  description: 'Pro-Tech Staffing Services places industrial, electronics manufacturing, and warehouse workers in Texas, Florida, California, Arizona, and Ohio since 1996.',
  robots: 'index, follow',
  metadataBase: new URL('https://www.protechstaffing.com'),
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1920, height: 1012, alt: 'Pro-Tech Staffing Services' }],
    type: 'website',
    siteName: 'Pro-Tech Staffing Services',
    title: 'Pro-Tech Staffing Services | Industrial Staffing Since 1996',
    description: 'Light industrial, warehouse, electronic manufacturing, and supply chain staffing across Dallas-Fort Worth and five additional US markets. Vetted workers in 48 hours.',
    url: 'https://www.protechstaffing.com/',
  },
  // Favicon + apple-icon are auto-injected from app/icon.png and app/apple-icon.png
  verification: {
    // Read from env so the token can be rotated/scoped per environment in Vercel
    // without committing it. Resolves to undefined if not set → no meta tag rendered.
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EmploymentAgency'],
    name: 'Pro-Tech Staffing Services',
    // Other firms share the "ProTech Staffing" name (protechjobs.com, a Channelview TX agency).
    // These variants tie every spelling people search back to this business.
    alternateName: ['Pro-Tech Staffing', 'ProTech Staffing', 'Pro Tech Staffing', 'Protech Staffing Services'],
    foundingDate: '1996',
    url: 'https://www.protechstaffing.com',
    logo: 'https://www.protechstaffing.com/logo.png',
    description: 'Light industrial, electronic manufacturing, warehouse, and supply chain staffing agency serving Dallas-Fort Worth, Tampa FL, San Jose CA, Phoenix AZ, and Cincinnati OH.',
    telephone: '+1-972-234-0505',
    email: 'info@protechstaffing.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2150 E Arapaho Rd, Ste 100',
      addressLocality: 'Richardson',
      addressRegion: 'TX',
      postalCode: '75081',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 32.9601416, longitude: -96.6843152 },
    areaServed: [
      'Richardson TX', 'Bedford TX', 'Dallas TX', 'Fort Worth TX',
      'Arlington TX', 'Plano TX', 'Irving TX', 'Garland TX',
      'Carrollton TX', 'Austin TX', 'Tampa FL',
      'San Jose CA', 'Phoenix AZ', 'Scottsdale AZ', 'Mesa AZ', 'Tempe AZ', 'Chandler AZ',
      'Cincinnati OH', 'Covington KY', 'Florence KY', 'Hebron KY', 'Erlanger KY', 'Hamilton OH', 'West Chester OH',
    ],
    knowsAbout: [
      'Light Industrial Staffing', 'Electronic Manufacturing Staffing',
      'Warehouse Staffing', '3PL Staffing', 'Supply Chain Staffing',
      'Administrative Staffing', 'Temp-to-Hire', 'Direct Placement',
    ],
    // NOTE: no aggregateRating here on purpose — marking up third-party (Google)
    // review scores as self-serving LocalBusiness rating violates Google's
    // structured-data guidelines, and hardcoded counts go stale.
    sameAs: [
      'https://www.linkedin.com/company/pro-tech-staffing',
      'https://www.indeed.com/cmp/Pro-Tech-Staffing-Services',
      'https://www.google.com/maps/place/?q=place_id:ChIJedTRPJMeTIYRPZiyZc1G9xE',
      'https://www.google.com/maps/place/?q=place_id:ChIJI_nqaOApTIYR7v-4s5nSsZI',
    ],
  }
  // WebSite node: tells Google which site name to show above the result
  const siteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pro-Tech Staffing Services',
    alternateName: ['Pro-Tech Staffing', 'ProTech Staffing'],
    url: 'https://www.protechstaffing.com/',
  }

  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
        />
      </head>
      <body className="font-sans">
        <WebVitals />
        <I18nProvider>
          <SiteBanner />
          <Nav />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  )
}
