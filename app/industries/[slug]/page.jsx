import IndustryClient from './IndustryClient'

import industriesEN from '@/locales/en/industries.json'

const META = {}
for (const slug of ['electronics-manufacturing', 'light-industrial', 'warehouse-distribution', 'supply-chain-logistics', 'administrative-clerical', 'general-labor']) {
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
  ]
}

export default function IndustryPage({ params }) {
  return <IndustryClient params={params} />
}
