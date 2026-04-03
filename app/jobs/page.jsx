import ExploreJobsClient from './ExploreJobsClient'

export const metadata = {
  title: 'Explore Jobs | Pro-Tech Staffing',
  description: 'Browse open manufacturing, electronics, warehouse, and industrial positions across Texas, Florida, Arizona, and California. Apply today with Pro-Tech Staffing.',
  openGraph: {
    title: 'Explore Jobs | Pro-Tech Staffing',
    description: 'Browse open manufacturing, electronics, warehouse, and industrial positions. Apply today with Pro-Tech Staffing.',
  },
}

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Open Positions at Pro-Tech Staffing',
  description: 'Browse manufacturing, electronics, warehouse, and industrial job openings across Texas, Florida, Arizona, and California.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'JobPosting',
        title: 'Electronics Manufacturing Assembler',
        description: 'PCB assembly, SMT operation, soldering, and quality inspection roles. IPC certification training available.',
        hiringOrganization: {
          '@type': 'Organization',
          name: 'Pro-Tech Staffing Services',
          sameAs: 'https://www.protechstaffing.com',
        },
        jobLocation: {
          '@type': 'Place',
          address: { '@type': 'PostalAddress', addressRegion: 'TX', addressCountry: 'US' },
        },
        employmentType: ['TEMPORARY', 'CONTRACTOR'],
        industry: 'Electronics Manufacturing',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'JobPosting',
        title: 'Warehouse Associate',
        description: 'Picking, packing, shipping, receiving, forklift operation, and inventory management in warehouse and 3PL facilities.',
        hiringOrganization: {
          '@type': 'Organization',
          name: 'Pro-Tech Staffing Services',
          sameAs: 'https://www.protechstaffing.com',
        },
        jobLocation: {
          '@type': 'Place',
          address: { '@type': 'PostalAddress', addressRegion: 'TX', addressCountry: 'US' },
        },
        employmentType: ['TEMPORARY', 'CONTRACTOR'],
        industry: 'Warehousing',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'JobPosting',
        title: 'Light Industrial Worker',
        description: 'Assembly, machine operation, production line, quality control, and packaging roles in light industrial facilities.',
        hiringOrganization: {
          '@type': 'Organization',
          name: 'Pro-Tech Staffing Services',
          sameAs: 'https://www.protechstaffing.com',
        },
        jobLocation: {
          '@type': 'Place',
          address: { '@type': 'PostalAddress', addressRegion: 'TX', addressCountry: 'US' },
        },
        employmentType: ['TEMPORARY', 'FULL_TIME'],
        industry: 'Light Industrial',
      },
    },
  ],
}

export default function ExploreJobsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <ExploreJobsClient />
    </>
  )
}
