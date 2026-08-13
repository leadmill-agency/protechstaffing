export const metadata = {
  title: 'Editorial Policy | Pro-Tech Staffing',
  description:
    'How Pro-Tech Staffing produces, reviews, and updates the content on this site — our standards for accuracy, sourcing, and experience-based guidance.',
  alternates: { canonical: '/editorial-policy' },
  openGraph: {
    title: 'Editorial Policy | Pro-Tech Staffing',
    description:
      'How Pro-Tech Staffing produces, reviews, and updates the content on this site.',
  },
}

const SECTIONS = [
  {
    heading: 'Who writes our content',
    body: [
      'The guides, market pages, and articles on this site are produced by the Pro-Tech Staffing team — recruiters and staffing specialists who place industrial, electronics manufacturing, warehouse, and administrative workers every week. The guidance we publish reflects how we actually screen, place, and support workers across our markets.',
      'We have provided staffing services for more than 30 years, including in-house IPC training for electronics manufacturing roles. Where an article describes screening steps, fill-time expectations, or certification requirements, it is describing our working practice, not secondhand summaries.',
    ],
  },
  {
    heading: 'Our standards for accuracy',
    body: [
      'We only publish figures we can stand behind. Statistics about our own performance (such as placement counts or fill times) are confirmed internally before publication. Claims about standards, regulations, or certifications — such as OSHA forklift requirements or IPC certification terms — link to the responsible organization wherever practical.',
      'We write in plain language, lead with the direct answer, and avoid exaggerated claims. If a topic depends on a reader’s specific situation (contract terms, certification requirements for a particular production line), we say so rather than overgeneralize.',
    ],
  },
  {
    heading: 'How content is reviewed and updated',
    body: [
      'Articles show their original publication date and, when substantively revised, an updated date. We review published content periodically and when standards, market conditions, or our own processes change. If you spot something out of date, we want to know.',
    ],
  },
  {
    heading: 'What this site is — and is not',
    body: [
      'Our content is general staffing and hiring guidance for employers and job seekers. It is not legal, tax, or compliance advice. Employment regulations vary by state and situation; consult the relevant agency or a qualified professional for decisions that depend on them.',
    ],
  },
  {
    heading: 'Contact',
    body: [
      'Questions or corrections: email info@protechstaffing.com or call our Richardson, TX headquarters at (972) 234-0505.',
    ],
  },
]

export default function EditorialPolicyPage() {
  return (
    <>
      <section className="bg-bone pt-20 border-b border-fog">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-3">
            About Our Content
          </p>
          <h1 className="font-sans font-semibold text-sig-blue text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
            Editorial Policy
          </h1>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          {SECTIONS.map(({ heading, body }) => (
            <div key={heading}>
              <h2 className="text-sig-blue font-semibold text-xl mb-3">{heading}</h2>
              <div className="space-y-4">
                {body.map((p, i) => (
                  <p key={i} className="text-steel text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
