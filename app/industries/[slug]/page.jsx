import IndustryClient from './IndustryClient'

import industriesEN from '@/locales/en/industries.json'

const META = {}
// TODO: 'engineering' uses placeholder roles/copy — confirm final list with client.
for (const slug of ['electronics-manufacturing', 'light-industrial', 'warehouse-distribution', 'supply-chain-logistics', 'administrative-clerical', 'general-labor', 'engineering']) {
  const d = industriesEN[slug]
  if (d) {
    META[slug] = { title: d.title, description: d.metaDesc }
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const m = META[slug]
  if (!m) return {}
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `/industries/${slug}` },
    openGraph: { title: m.title, description: m.description },
  }
}

export function generateStaticParams() {
  return [
    { slug: 'electronics-manufacturing' },
    { slug: 'light-industrial' },
    { slug: 'warehouse-distribution' },
    { slug: 'supply-chain-logistics' },
    { slug: 'administrative-clerical' },
    { slug: 'general-labor' },
    { slug: 'engineering' },
  ]
}

// FAQPage schema per industry (only for industries that have a faq array).
const FAQ_SCHEMA = {}
for (const [slug, d] of Object.entries(industriesEN)) {
  if (d && Array.isArray(d.faq) && d.faq.length > 0) {
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

export default async function IndustryPage({ params }) {
  const { slug } = await params
  const faqSchema = FAQ_SCHEMA[slug]
  return (
    <>
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <IndustryClient params={params} />
    </>
  )
}
