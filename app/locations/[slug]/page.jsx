import LocationClient from './LocationClient'

import locationsEN from '@/locales/en/locations.json'

const SLUG_TO_MARKET = {
  'richardson-tx': 'richardson',
  'bedford-tx': 'bedford',
  'austin-tx': 'austin',
  'tampa-fl': 'tampa',
  'san-jose-ca': 'sanjose',
  'phoenix-az': 'phoenix',
}

const META = {}
for (const [slug, market] of Object.entries(SLUG_TO_MARKET)) {
  const d = locationsEN[market]
  if (d) {
    META[slug] = { title: d.title, description: d.metaDesc }
  }
}

// Build FAQ schema for each location
const FAQ_SCHEMA = {}
for (const [slug, market] of Object.entries(SLUG_TO_MARKET)) {
  const d = locationsEN[market]
  if (d && d.faq && Array.isArray(d.faq) && d.faq.length > 0) {
    FAQ_SCHEMA[slug] = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: d.faq.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    }
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const m = META[slug]
  if (!m) return {}
  return {
    title: m.title,
    description: m.description,
    openGraph: { title: m.title, description: m.description },
  }
}

export function generateStaticParams() {
  return Object.keys(SLUG_TO_MARKET).map(slug => ({ slug }))
}

export default async function LocationPage({ params }) {
  const { slug } = await params
  const faqSchema = FAQ_SCHEMA[slug]

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <LocationClient params={params} />
    </>
  )
}
