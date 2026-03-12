import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

// ─── ICONS (line SVG only, per brand guidelines) ─────────────────────────────
const icons = {
  menu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  arrowRight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  mapPin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  circuit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <rect x="2" y="8" width="4" height="8" rx="1" />
      <rect x="18" y="8" width="4" height="8" rx="1" />
      <rect x="9" y="4" width="6" height="6" rx="1" />
      <rect x="9" y="14" width="6" height="6" rx="1" />
      <path d="M6 12h3M15 12h3M12 10v4" />
    </svg>
  ),
  box: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  ),
  hardhat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <path d="M2 18h20M12 3C8 3 5 6.686 5 11v1h14v-1c0-4.314-3-8-7-8z" />
      <path d="M12 3v9" />
    </svg>
  ),
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white border-b border-fog shadow-sm' : 'bg-bone border-b border-fog'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-carbon flex items-center justify-center flex-shrink-0">
            <span className="text-bone font-bold text-xs tracking-tight">PT</span>
          </div>
          <span className="font-semibold text-carbon text-sm tracking-tight hidden sm:block">Pro-Tech Staffing</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {['Employers', 'Job Seekers', 'Industries', 'Locations', 'About'].map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-steel hover:text-carbon text-sm font-medium transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#job-seekers" className="text-sm font-medium text-steel hover:text-carbon transition-colors px-3 py-1.5">
            Find Jobs
          </a>
          <a href="#employers" className="text-sm font-semibold bg-carbon hover:bg-graphite text-bone px-4 py-2 transition-colors">
            Hire Workers
          </a>
        </div>

        <button className="md:hidden w-5 h-5 text-carbon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? icons.close : icons.menu}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-fog px-6 py-5 flex flex-col gap-4">
          {['Employers', 'Job Seekers', 'Industries', 'Locations', 'About'].map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-carbon text-sm font-medium" onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-3 border-t border-fog">
            <a href="#job-seekers" className="text-sm text-center text-steel border border-fog py-2">Find Jobs</a>
            <a href="#employers" className="text-sm text-center bg-carbon text-bone py-2 font-semibold">Hire Workers</a>
          </div>
        </div>
      )}
    </nav>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-bone pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p className="font-mono text-xs text-steel tracking-widest uppercase mb-6">
              Industrial Staffing for Electronics, Warehouse, Supply Chain, and Light Industrial Teams
            </p>
            <h1 className="font-sans font-semibold text-carbon text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6">
              Staffing that keeps your
              <br />operation running.
            </h1>
            <p className="text-steel text-lg leading-relaxed mb-4 max-w-lg">
              When a worker doesn't show, production slips, overtime climbs, and supervisors start scrambling. We help industrial teams fill roles fast with vetted workers who are ready to show up, work safely, and contribute from day one.
            </p>
            <p className="text-steel text-base leading-relaxed mb-10 max-w-lg">
              Fast response. Role-specific screening. Local recruiters who know your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#employers" className="inline-flex items-center justify-center gap-2 bg-carbon hover:bg-graphite text-bone font-semibold text-sm px-6 py-3 transition-colors">
                Request Workers
                <span className="w-4 h-4">{icons.arrowRight}</span>
              </a>
              <a href="#job-seekers" className="inline-flex items-center justify-center gap-2 border border-fog hover:border-steel text-carbon font-medium text-sm px-6 py-3 transition-colors">
                Find Jobs
              </a>
            </div>
          </div>

          {/* Right: Industrial image with muted overlay */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=75"
                alt="Industrial worker at light manufacturing facility"
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
                style={{ filter: 'grayscale(40%) brightness(0.85)' }}
              />
              <div className="absolute inset-0 bg-bone/20" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-fog px-5 py-4 shadow-sm">
              <p className="font-mono text-2xl font-medium text-carbon">48hrs</p>
              <p className="text-xs text-steel mt-0.5">avg. fill time</p>
            </div>
          </div>
        </div>

        {/* Trust strip below */}
        <div className="mt-20 pt-8 border-t border-fog flex flex-wrap gap-8 items-center">
          <p className="font-mono text-xs text-steel tracking-widest uppercase">Operating in</p>
          {['Richardson TX', 'Bedford TX', 'Austin TX', 'Clearwater FL', 'San Jose CA', 'Atlanta GA'].map(city => (
            <span key={city} className="font-mono text-xs text-carbon">{city}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── STATS BAR ────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { number: '500+', label: 'Companies served' },
    { number: '10K+', label: 'Workers placed' },
    { number: '6',    label: 'Active markets' },
    { number: '94%',  label: 'Clients who reorder' },
    { number: '15+',  label: 'Years operating' },
    { number: '48h',  label: 'Avg. fill time' },
  ]
  return (
    <section className="bg-white border-y border-fog">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map(({ number, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-mono text-2xl font-medium text-carbon">{number}</span>
              <span className="text-xs text-steel leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── EMPLOYERS ────────────────────────────────────────────────────────────────
function Employers() {
  return (
    <section id="employers" className="bg-bone py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="font-mono text-xs text-ind-green tracking-widest uppercase mb-5">For Employers</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              If a shift goes uncovered,
              <br />you pay for it.
            </h2>
            <p className="text-steel leading-relaxed mb-3">
              We help you avoid the real cost of bad staffing: no-shows, weak fits, constant retraining, and overtime that eats margin.
            </p>
            <p className="text-steel leading-relaxed mb-2">
              Most staffing vendors sell resumes. That's not the problem you're trying to solve. You need workers who can show up on time, fit the role, work safely, and stay long enough to reduce churn. That's how we staff. We support light industrial, electronics manufacturing, warehouse, supply chain, and administrative operations across key US markets.
            </p>
            <p className="font-mono text-xs text-steel tracking-wide mb-8">
              Temporary · Temp-to-Hire · Direct Placement · Contract Staffing
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {[
                { title: 'Role-specific screening', desc: 'Every candidate is screened for the job, shift, and site environment before they reach your floor.' },
                { title: 'Fast response when you need coverage', desc: 'Send the role, shift, start date, and pay range. We move quickly and keep communication tight.' },
                { title: 'Local market recruiting', desc: 'Your team works with recruiters who understand your labor market, not a remote call center guessing at it.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-4 h-4 text-ind-green mt-0.5 flex-shrink-0">{icons.check}</div>
                  <div>
                    <p className="font-semibold text-carbon text-sm mb-0.5">{title}</p>
                    <p className="text-steel text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 bg-carbon hover:bg-graphite text-bone font-semibold text-sm px-6 py-3 transition-colors">
              Submit a Staffing Request
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </a>
          </div>

          {/* Right: Image stack */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=75"
                alt="Electronics manufacturing facility worker performing quality control inspection"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(30%) brightness(0.9)' }}
              />
            </div>
            {/* Stat card */}
            <div className="absolute -bottom-4 -right-4 bg-white border border-fog px-5 py-4 shadow-sm max-w-[180px]">
              <p className="font-mono text-2xl font-medium text-carbon">94%</p>
              <p className="text-xs text-steel mt-0.5 leading-snug">of clients re-order within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── INDUSTRIES ───────────────────────────────────────────────────────────────
function Industries() {
  const list = [
    { icon: icons.gear,      title: 'Light Industrial Staffing',          desc: 'Assemblers, machine operators, production workers, quality control, packaging, and line support.' },
    { icon: icons.circuit,   title: 'Electronics Manufacturing Staffing',  desc: 'PCB assembly, soldering, SMT support, inspection, testing, and detail-oriented production roles.' },
    { icon: icons.box,       title: 'Warehouse Staffing',                  desc: 'Picking, packing, receiving, forklift operators, shipping, inventory, and 3PL support.' },
    { icon: icons.truck,     title: 'Supply Chain Staffing',               desc: 'Logistics coordinators, inventory control, shipping and receiving, and warehouse support staff.' },
    { icon: icons.clipboard, title: 'Administrative Staffing',             desc: 'Data entry, customer support, clerical help, and back-office operational support.' },
    { icon: icons.hardhat,   title: 'General Labor',                       desc: 'Short-term, temp-to-hire, and project-based labor when you need coverage without delay.' },
  ]

  return (
    <section id="industries" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs text-steel tracking-widest uppercase mb-4">Industries We Serve</p>
          <h2 className="font-semibold text-carbon text-3xl md:text-4xl leading-tight tracking-tight max-w-xl mb-4">
            We don't try to staff everything.
            <br />We staff industrial — and we know the difference.
          </h2>
          <p className="text-steel max-w-2xl leading-relaxed">
            Different floors need different workers. A warehouse role is not an electronics role. A machine operator is not an admin temp. We recruit by environment, shift, and role requirement so you get workers who fit the job you actually need filled.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-fog">
          {list.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white p-8 hover:bg-bone transition-colors group cursor-pointer">
              <div className="w-5 h-5 text-ind-green mb-5">{icon}</div>
              <h3 className="font-semibold text-carbon text-base mb-2 group-hover:text-ind-green transition-colors">{title}</h3>
              <p className="text-steel text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Tell us what you need',
      desc: 'Send the role, shift, location, start date, pay range, and any must-have requirements.',
    },
    {
      n: '02',
      title: 'We source and screen',
      desc: 'Our recruiters pull from active local pipelines and screen for fit, reliability, and readiness.',
    },
    {
      n: '03',
      title: 'Workers arrive ready',
      desc: 'Candidates show up prepared for the role, and we stay involved so issues get solved fast.',
    },
  ]

  return (
    <section className="bg-bone py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="font-mono text-xs text-steel tracking-widest uppercase mb-5">How It Works</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              Three steps.
              <br />Fast fills.
              <br />Less scrambling.
            </h2>
            <p className="text-steel leading-relaxed mb-4">
              You do not need a bloated intake process. Tell us what you need, and we get to work.
            </p>
            <p className="text-steel text-sm leading-relaxed">
              Need temp, temp-to-hire, or direct placement? We handle all three.
            </p>
          </div>

          <div className="flex flex-col gap-0 border-l border-fog">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="pl-8 pb-10 last:pb-0 relative">
                <div className="absolute -left-px top-0 w-px h-full bg-fog" />
                <p className="font-mono text-xs text-ind-green tracking-widest mb-2">{n}</p>
                <h3 className="font-semibold text-carbon text-base mb-1.5">{title}</h3>
                <p className="text-steel text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── LOCATIONS ────────────────────────────────────────────────────────────────
function Locations() {
  const markets = [
    {
      city: 'Richardson', state: 'TX', label: 'Headquarters',
      roles: 'Light industrial, electronics manufacturing, warehouse',
      serving: 'Dallas · Plano · Garland · Carrollton · Richardson',
      href: '/staffing-agency-dallas-fort-worth',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70',
    },
    {
      city: 'Bedford', state: 'TX', label: 'DFW Metro',
      roles: 'Industrial, warehouse, supply chain, general labor',
      serving: 'Fort Worth · Arlington · Irving · Grand Prairie · Bedford',
      href: '/staffing-agency-bedford-tx',
      img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=70',
    },
    {
      city: 'Austin', state: 'TX', label: 'Central TX',
      roles: 'Light industrial, electronics, administrative',
      serving: 'Austin · Round Rock · Cedar Park · Pflugerville',
      href: null,
      img: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&q=70',
    },
    {
      city: 'Clearwater', state: 'FL', label: 'Tampa Bay',
      roles: 'Electronics manufacturing, light industrial, warehouse',
      serving: 'Clearwater · Tampa · St. Petersburg · Largo',
      href: null,
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=70',
    },
    {
      city: 'San Jose', state: 'CA', label: 'Silicon Valley',
      roles: 'PCB assembly, SMT, electronics manufacturing, QC',
      serving: 'San Jose · Santa Clara · Milpitas · Fremont',
      href: null,
      img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=70',
    },
    {
      city: 'Atlanta', state: 'GA', label: 'Southeast',
      roles: 'Warehouse, 3PL, supply chain, light industrial',
      serving: 'Atlanta · Marietta · Smyrna · College Park',
      href: null,
      img: 'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=600&q=70',
    },
  ]

  return (
    <section id="locations" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs text-steel tracking-widest uppercase mb-4">Locations</p>
          <h2 className="font-semibold text-carbon text-3xl md:text-4xl leading-tight tracking-tight max-w-xl mb-4">
            Local recruiters.
            <br />Real market knowledge.
          </h2>
          <p className="text-steel max-w-lg leading-relaxed mb-3">
            Industrial hiring is local. Pay expectations, shift preferences, commute range, and labor competition all change by market. That's why each location is supported by a local team that understands the roles, the employers, and the labor pool.
          </p>
          <p className="text-steel text-sm max-w-lg leading-relaxed">
            We recruit in-market so you get faster fills, better attendance, and fewer surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-fog">
          {markets.map(({ city, state, label, roles, serving, href, img }) => {
            const inner = (
              <>
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={img}
                    alt={`${city} ${state} industrial staffing office`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'grayscale(40%) brightness(0.9)' }}
                  />
                </div>
                <div className="p-5 bg-white group-hover:bg-bone transition-colors">
                  <p className="font-mono text-[10px] text-ind-green tracking-widest uppercase mb-1">{label}</p>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <h3 className="font-semibold text-carbon text-lg">{city}</h3>
                    <span className="text-steel text-sm font-mono">{state}</span>
                  </div>
                  <p className="text-steel text-xs leading-snug mb-1">{roles}</p>
                  <p className="font-mono text-[10px] text-steel opacity-70">{serving}</p>
                  {href && <p className="font-mono text-[10px] text-ind-green mt-2 tracking-wide">View market →</p>}
                </div>
              </>
            )
            return href
              ? <Link key={city} to={href} className="bg-white group overflow-hidden block">{inner}</Link>
              : <div key={city} className="bg-white group overflow-hidden">{inner}</div>
          })}
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    {
      quote: "Pro-Tech filled 14 positions for us in under 48 hours during peak season. More important, the workers showed up and 9 converted full-time. That kind of consistency matters more than promises.",
      name: 'Operations Director',
      co: 'Electronics Manufacturer · Richardson, TX',
    },
    {
      quote: "We'd been through agencies that kept sending unvetted workers. Pro-Tech was different. They understood the job, the shift, and what kind of person would actually work on our floor.",
      name: 'HR Manager',
      co: 'Warehouse & 3PL · Atlanta, GA',
    },
    {
      quote: "The biggest difference is responsiveness. When something changes, I can call them and get a real answer fast. That saves my supervisors time and keeps production moving.",
      name: 'Plant Manager',
      co: 'Light Manufacturing · Clearwater, FL',
    },
  ]

  return (
    <section className="bg-bone py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs text-steel tracking-widest uppercase mb-4">Client Results</p>
          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="w-4 h-4 text-safe-amber">{icons.star}</span>
            ))}
            <span className="font-mono text-xs text-steel ml-2">4.8 · 120+ verified reviews</span>
          </div>
          <h2 className="font-semibold text-carbon text-3xl md:text-4xl leading-tight tracking-tight max-w-xl mb-3">
            What operations teams say.
          </h2>
          <p className="text-steel max-w-lg leading-relaxed">
            The right staffing partner reduces friction. The wrong one creates more of it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-fog">
          {reviews.map(({ quote, name, co }) => (
            <div key={name} className="bg-white p-8 flex flex-col">
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-3.5 h-3.5 text-safe-amber">{icons.star}</span>
                ))}
              </div>
              <p className="text-carbon text-sm leading-relaxed flex-1 mb-8">"{quote}"</p>
              <div className="pt-5 border-t border-fog">
                <p className="font-semibold text-carbon text-sm">{name}</p>
                <p className="font-mono text-[10px] text-steel mt-0.5 tracking-wide">{co}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── JOB SEEKERS ──────────────────────────────────────────────────────────────
function JobSeekers() {
  return (
    <section id="job-seekers" className="bg-carbon py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs text-ind-green tracking-widest uppercase mb-5">For Job Seekers</p>
            <h2 className="font-semibold text-bone text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              Looking for work?
              <br />We place people fast.
            </h2>
            <p className="text-fog leading-relaxed mb-8">
              We work with companies across light industrial, electronics, warehouse, supply chain, and administrative environments. If you want steady work, weekly pay, and real opportunities to move into temp-to-hire or long-term roles, we can help.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {['Weekly pay', 'Active openings', 'Temp-to-hire paths', 'Day and night shifts', 'Entry-level to experienced roles', 'Recruiter support'].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <div className="w-3.5 h-3.5 text-ind-green mt-0.5 flex-shrink-0">{icons.check}</div>
                  <span className="text-fog text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <a href="#apply" className="inline-flex items-center gap-2 bg-bone hover:bg-white text-carbon font-semibold text-sm px-6 py-3 transition-colors">
              View Open Positions
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </a>
          </div>

          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=75"
              alt="Warehouse worker in Dallas Fort Worth distribution center ready for temp-to-hire placement"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(30%) brightness(0.8)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA BAND ─────────────────────────────────────────────────────────────────
function CTABand() {
  return (
    <section id="contact" className="bg-graphite py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-mono text-xs text-fog tracking-widest uppercase mb-6">Get Started</p>
        <h2 className="font-semibold text-bone text-3xl md:text-4xl leading-tight tracking-tight mb-4">
          Need workers fast?
          <br />Let's fill the role.
        </h2>
        <p className="text-fog mb-3">
          Send us the role, shift, location, and start date. We'll move quickly and tell you what happens next.
        </p>
        <p className="text-steel text-sm mb-10">
          Industrial, electronics, warehouse, and supply chain staffing across six active markets.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+10000000000" className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm transition-colors">
            <span className="w-4 h-4">{icons.phone}</span>
            Call Us Now
          </a>
          <a href="#request" className="inline-flex items-center justify-center gap-2 border border-fog hover:border-bone text-bone font-medium px-7 py-3 text-sm transition-colors">
            Submit a Staffing Request
            <span className="w-4 h-4">{icons.arrowRight}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-carbon border-t border-graphite">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-bone flex items-center justify-center flex-shrink-0">
                <span className="text-carbon font-bold text-xs tracking-tight">PT</span>
              </div>
              <span className="font-semibold text-bone text-sm tracking-tight">Pro-Tech Staffing</span>
            </div>
            <p className="text-steel text-xs leading-relaxed mb-5">
              Operational staffing with discipline. Industrial, electronics, warehouse, and supply chain placements across 6 US markets.
            </p>
            <div className="flex gap-2">
              {['LinkedIn', 'Google', 'Indeed'].map(s => (
                <a key={s} href="#" className="font-mono text-[10px] text-steel hover:text-fog border border-graphite hover:border-steel px-2.5 py-1 transition-colors">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] text-steel tracking-widest uppercase mb-4">Services</p>
            <ul className="flex flex-col gap-2">
              {['Temporary Staffing', 'Temp-to-Hire', 'Direct Placement', 'Contract Staffing', 'On-Site Management'].map(s => (
                <li key={s}><a href="#" className="text-xs text-steel hover:text-fog transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] text-steel tracking-widest uppercase mb-4">Industries</p>
            <ul className="flex flex-col gap-2">
              {['Light Industrial', 'Electronic Manufacturing', 'Warehouse & 3PL', 'Supply Chain', 'Administrative', 'General Labor'].map(s => (
                <li key={s}><a href="#" className="text-xs text-steel hover:text-fog transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] text-steel tracking-widest uppercase mb-4">Offices</p>
            <ul className="flex flex-col gap-2">
              {['Richardson, TX (HQ)', 'Bedford, TX', 'Austin, TX', 'Clearwater, FL', 'San Jose, CA', 'Atlanta, GA'].map(loc => (
                <li key={loc} className="flex items-center gap-1.5">
                  <span className="w-3 h-3 text-steel flex-shrink-0">{icons.mapPin}</span>
                  <a href="#" className="text-xs text-steel hover:text-fog transition-colors">{loc}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-graphite pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-steel">© 2025 Pro-Tech Staffing Services. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map(l => (
              <a key={l} href="#" className="font-mono text-[10px] text-steel hover:text-fog transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── LOCATION PAGE DATA ───────────────────────────────────────────────────────
const MARKET_DATA = {
  dfw: {
    slug: 'staffing-agency-dallas-fort-worth',
    title: 'Industrial Staffing Agency in Dallas–Fort Worth TX | Pro-Tech Staffing',
    metaDesc: 'Pro-Tech Staffing is a light industrial staffing agency serving Dallas TX, Fort Worth TX, Arlington, Irving, Garland, Grand Prairie, and Plano. Vetted workers placed in 48 hours.',
    h1: 'Industrial staffing agency in Dallas–Fort Worth, TX.',
    subhead: 'Serving Dallas, Fort Worth, Arlington, Irving, Garland, Grand Prairie, Plano, Richardson, and Carrollton.',
    intro: 'Pro-Tech Staffing operates two offices in the DFW metroplex — Richardson (HQ) and Bedford. We staff light industrial, electronics manufacturing, warehouse, and supply chain roles across the entire DFW corridor.',
    label: 'Dallas–Fort Worth',
    cities: ['Dallas TX', 'Fort Worth TX', 'Arlington TX', 'Irving TX', 'Garland TX', 'Grand Prairie TX', 'Plano TX', 'Richardson TX', 'Carrollton TX', 'Bedford TX'],
    industries: ['Light Industrial Staffing', 'Electronics Manufacturing Staffing', 'Warehouse & 3PL Staffing', 'Supply Chain Staffing', 'Administrative Staffing', 'General Labor'],
    roles: ['Assembly line workers', 'PCB assembly technicians', 'Forklift operators', 'Machine operators', 'Warehouse pickers and packers', 'Quality control inspectors', 'Shipping and receiving clerks', 'Production line leads'],
    proof: [
      { n: '2', label: 'DFW offices' },
      { n: '48h', label: 'Avg. fill time' },
      { n: '500+', label: 'DFW companies served' },
      { n: '94%', label: 'Client retention' },
    ],
    whyUs: [
      { title: 'Two offices in the metroplex', desc: 'Richardson HQ covers east DFW and the Plano/Garland corridor. Our Bedford office covers Tarrant County — Fort Worth, Arlington, Irving, and the mid-cities.' },
      { title: 'Deep DFW industrial network', desc: 'We\'ve been placing workers in North Texas for over 15 years. Our recruiters know the major employers, the industrial parks, and the talent pools in each submarket.' },
      { title: 'Fast response, local support', desc: 'Submit a request and you\'re talking to a recruiter who actually works your market — not a national call center. Same-day callbacks. 48-hour fill time on most orders.' },
    ],
    testimonial: {
      quote: 'ProTech filled 14 positions in under 48 hours during peak season. Every worker showed up, and 9 converted to full-time. I\'ve never had that fill rate with any other agency.',
      name: 'Operations Director',
      co: 'Electronics Manufacturer · Richardson, TX',
    },
    relatedCities: [
      { label: 'Arlington TX', href: '/staffing-agency-arlington-tx' },
      { label: 'Irving TX', href: '/staffing-agency-irving-tx' },
      { label: 'Garland TX', href: '/staffing-agency-garland-tx' },
      { label: 'Bedford TX', href: '/staffing-agency-bedford-tx' },
    ],
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1000&q=75',
    imgAlt: 'Light industrial worker at Dallas Fort Worth manufacturing facility',
  },
  bedford: {
    slug: 'staffing-agency-bedford-tx',
    title: 'Staffing Agency in Bedford TX | Industrial & Warehouse | Pro-Tech Staffing',
    metaDesc: 'Pro-Tech Staffing Bedford TX serves Fort Worth, Arlington, Irving, Grand Prairie, and the mid-cities. Light industrial, warehouse, and supply chain staffing. Workers placed in 48 hours.',
    h1: 'Industrial staffing agency in Bedford, TX.',
    subhead: 'Serving Fort Worth, Arlington, Irving, Grand Prairie, Hurst, Euless, and the DFW mid-cities.',
    intro: 'Our Bedford office is the western anchor of Pro-Tech\'s DFW operation. We specialize in industrial, warehouse, and supply chain placements for manufacturers and distributors across Tarrant County and the mid-cities corridor.',
    label: 'Bedford TX',
    cities: ['Bedford TX', 'Fort Worth TX', 'Arlington TX', 'Irving TX', 'Grand Prairie TX', 'Hurst TX', 'Euless TX', 'North Richland Hills TX', 'Grapevine TX'],
    industries: ['Light Industrial Staffing', 'Warehouse & 3PL Staffing', 'Supply Chain Staffing', 'General Labor', 'Administrative Staffing'],
    roles: ['Assembly and production workers', 'Forklift operators', 'Warehouse pickers and packers', 'Machine operators', 'Shipping and receiving clerks', 'General labor', 'Inventory control clerks', 'Production supervisors'],
    proof: [
      { n: 'Tarrant Co.', label: 'Primary market' },
      { n: '48h', label: 'Avg. fill time' },
      { n: 'Mid-Cities', label: 'Coverage area' },
      { n: '94%', label: 'Client retention' },
    ],
    whyUs: [
      { title: 'Local office, Tarrant County focus', desc: 'Our Bedford office is physically located in the mid-cities corridor — not a satellite account managed remotely. Your recruiter is local, knows the market, and responds fast.' },
      { title: 'Warehouse and industrial specialists', desc: 'We staff the kinds of roles that keep Tarrant County operations running: forklift operators, production workers, shipping and receiving teams, and general labor.' },
      { title: 'Temp, temp-to-hire, and direct placement', desc: 'Whether you need coverage for a surge week or want to build a permanent production team, we work with your hiring model.' },
    ],
    testimonial: {
      quote: 'Their Bedford recruiter knows our facility by name. When I call, I\'m not explaining from scratch every time. That relationship is worth more than any rate card another agency could offer.',
      name: 'Plant Manager',
      co: 'Light Manufacturing · Fort Worth, TX',
    },
    relatedCities: [
      { label: 'Arlington TX', href: '/staffing-agency-arlington-tx' },
      { label: 'Irving TX', href: '/staffing-agency-irving-tx' },
      { label: 'DFW Overview', href: '/staffing-agency-dallas-fort-worth' },
    ],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=75',
    imgAlt: 'Warehouse and industrial workers at Bedford Fort Worth Texas facility',
  },
  arlington: {
    slug: 'staffing-agency-arlington-tx',
    title: 'Staffing Agency in Arlington TX | Light Industrial & Warehouse | Pro-Tech',
    metaDesc: 'Pro-Tech Staffing serves Arlington TX with light industrial, warehouse, manufacturing, and supply chain workers. Vetted candidates placed in 48 hours. Temp, temp-to-hire, direct placement.',
    h1: 'Industrial staffing agency in Arlington, TX.',
    subhead: 'Serving Arlington, Grand Prairie, Mansfield, Kennedale, and surrounding Tarrant County areas.',
    intro: 'Arlington is one of the DFW metro\'s most active industrial and logistics corridors. Pro-Tech staffs light industrial, warehouse, and supply chain roles for manufacturers, distributors, and 3PLs operating in and around Arlington TX.',
    label: 'Arlington TX',
    cities: ['Arlington TX', 'Grand Prairie TX', 'Mansfield TX', 'Kennedale TX', 'Euless TX', 'Bedford TX', 'Fort Worth TX'],
    industries: ['Light Industrial Staffing', 'Warehouse & 3PL Staffing', 'Supply Chain Staffing', 'General Labor', 'Manufacturing Staffing'],
    roles: ['Assembly workers', 'Forklift operators', 'Warehouse pickers and packers', 'Production line workers', 'Machine operators', 'Shipping and receiving clerks', 'General labor', 'Quality control inspectors'],
    proof: [
      { n: '48h', label: 'Avg. fill time' },
      { n: 'Temp & perm', label: 'Placement types' },
      { n: 'Tarrant Co.', label: 'Local coverage' },
      { n: '94%', label: 'Client retention' },
    ],
    whyUs: [
      { title: 'Tarrant County expertise', desc: 'Pro-Tech\'s Bedford office covers the Arlington corridor directly. We know the industrial parks, the major employers, and where to find reliable workers in this market.' },
      { title: 'Warehouse and manufacturing focus', desc: 'Arlington has a dense concentration of warehouse, distribution, and light manufacturing operations. These are the roles we staff every day.' },
      { title: 'Workers who show up', desc: 'We pre-screen for attendance reliability — not just skills. Every candidate is interviewed, background checked, and drug screened before placement.' },
    ],
    testimonial: {
      quote: 'We\'d been burned by agencies sending unvetted workers. Pro-Tech was different from day one. They understand what light industrial staffing looks like on the floor, not just on a job description.',
      name: 'HR Manager',
      co: 'Warehouse & Distribution · Arlington, TX',
    },
    relatedCities: [
      { label: 'Bedford TX', href: '/staffing-agency-bedford-tx' },
      { label: 'Irving TX', href: '/staffing-agency-irving-tx' },
      { label: 'DFW Overview', href: '/staffing-agency-dallas-fort-worth' },
    ],
    img: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=1000&q=75',
    imgAlt: 'Industrial warehouse worker in Arlington Texas distribution center',
  },
  irving: {
    slug: 'staffing-agency-irving-tx',
    title: 'Staffing Agency in Irving TX | Industrial & Warehouse Workers | Pro-Tech',
    metaDesc: 'Pro-Tech Staffing serves Irving TX with light industrial, warehouse, electronics, and supply chain workers. Vetted candidates in 48 hours. Serving Las Colinas, Coppell, and DFW Airport corridor.',
    h1: 'Industrial staffing agency in Irving, TX.',
    subhead: 'Serving Irving, Las Colinas, Coppell, Carrollton, and the DFW Airport industrial corridor.',
    intro: 'Irving and the Las Colinas corridor house a dense concentration of logistics, manufacturing, and distribution operations. Pro-Tech places vetted industrial and warehouse workers in Irving TX and surrounding markets from our Richardson and Bedford DFW offices.',
    label: 'Irving TX',
    cities: ['Irving TX', 'Las Colinas TX', 'Coppell TX', 'Carrollton TX', 'Farmers Branch TX', 'Grand Prairie TX', 'Dallas TX'],
    industries: ['Light Industrial Staffing', 'Warehouse & 3PL Staffing', 'Supply Chain Staffing', 'Electronics Manufacturing Staffing', 'Administrative Staffing'],
    roles: ['Warehouse pickers and packers', 'Forklift operators', 'Shipping and receiving clerks', 'Assembly workers', 'Inventory control clerks', 'Electronics technicians', 'General labor', 'Production workers'],
    proof: [
      { n: '48h', label: 'Avg. fill time' },
      { n: 'DFW corridor', label: 'Coverage area' },
      { n: 'Temp & perm', label: 'Placement types' },
      { n: '94%', label: 'Client retention' },
    ],
    whyUs: [
      { title: 'DFW Airport corridor coverage', desc: 'The Irving and Las Colinas area is one of DFW\'s busiest logistics zones. We staff warehouse, distribution, and light industrial roles for operations along the entire DFW Airport corridor.' },
      { title: 'Covered from two offices', desc: 'Irving sits between our Richardson HQ and Bedford office. We draw from both talent pools to fill Irving orders faster.' },
      { title: 'Electronics and logistics specialty', desc: 'Irving attracts both electronics and logistics employers. Our recruiters source for both — from PCB assembly technicians to warehouse leads.' },
    ],
    testimonial: {
      quote: 'Fast placements and workers who actually showed up. Pro-Tech filled our peak-season headcount in 72 hours and the retention rate was the best we\'d seen.',
      name: 'Logistics Manager',
      co: 'Distribution & 3PL · Irving, TX',
    },
    relatedCities: [
      { label: 'Arlington TX', href: '/staffing-agency-arlington-tx' },
      { label: 'Garland TX', href: '/staffing-agency-garland-tx' },
      { label: 'DFW Overview', href: '/staffing-agency-dallas-fort-worth' },
    ],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=75',
    imgAlt: 'Supply chain and warehouse workers in Irving Texas logistics facility',
  },
  garland: {
    slug: 'staffing-agency-garland-tx',
    title: 'Staffing Agency in Garland TX | Industrial & Manufacturing Workers | Pro-Tech',
    metaDesc: 'Pro-Tech Staffing serves Garland TX with light industrial, electronics manufacturing, warehouse, and assembly workers. Vetted candidates placed in 48 hours. Temp, temp-to-hire, direct placement.',
    h1: 'Industrial staffing agency in Garland, TX.',
    subhead: 'Serving Garland, Rowlett, Sachse, Mesquite, Plano, and the northeast Dallas industrial corridor.',
    intro: 'Garland is home to one of North Texas\'s most concentrated industrial manufacturing zones. Pro-Tech Staffing places light industrial, electronics manufacturing, and assembly workers for Garland TX manufacturers and distributors from our Richardson headquarters.',
    label: 'Garland TX',
    cities: ['Garland TX', 'Rowlett TX', 'Sachse TX', 'Mesquite TX', 'Plano TX', 'Richardson TX', 'Dallas TX'],
    industries: ['Light Industrial Staffing', 'Electronics Manufacturing Staffing', 'Warehouse Staffing', 'Assembly Staffing', 'General Labor'],
    roles: ['Assembly line workers', 'Electronics technicians', 'PCB assembly workers', 'Machine operators', 'Quality control inspectors', 'Forklift operators', 'Warehouse pickers', 'Production workers'],
    proof: [
      { n: '48h', label: 'Avg. fill time' },
      { n: 'NE Dallas', label: 'Coverage area' },
      { n: 'Electronics', label: 'Specialty' },
      { n: '94%', label: 'Client retention' },
    ],
    whyUs: [
      { title: 'Headquartered in Richardson — next door', desc: 'Our Richardson HQ is minutes from Garland\'s industrial zone. We know the employers, the talent, and the specific roles that Garland manufacturers need filled.' },
      { title: 'Electronics manufacturing depth', desc: 'Garland has one of the highest concentrations of electronics manufacturers in North Texas. PCB assembly, SMT, soldering, QC inspection — these are roles our recruiters source every week.' },
      { title: 'Screened workers, fast delivery', desc: 'Every candidate is background checked, drug screened, and skills-assessed before placement. We don\'t send warm bodies. We send workers who are ready to contribute.' },
    ],
    testimonial: {
      quote: 'They placed 8 electronics assembly workers in under 48 hours. All showed up on day one. Three months later, six are still with us full-time.',
      name: 'Production Manager',
      co: 'Electronics Manufacturing · Garland, TX',
    },
    relatedCities: [
      { label: 'Irving TX', href: '/staffing-agency-irving-tx' },
      { label: 'DFW Overview', href: '/staffing-agency-dallas-fort-worth' },
      { label: 'Bedford TX', href: '/staffing-agency-bedford-tx' },
    ],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=75',
    imgAlt: 'Electronics manufacturing and assembly workers at Garland Texas industrial facility',
  },
}

// ─── LOCATION PAGE ─────────────────────────────────────────────────────────────
function LocationPage({ market }) {
  const d = MARKET_DATA[market]
  useEffect(() => {
    document.title = d.title
    let meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', d.metaDesc)
    window.scrollTo(0, 0)
  }, [market, d.title, d.metaDesc])

  return (
    <>
      {/* Hero */}
      <section className="bg-bone pt-16">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs text-steel tracking-widest uppercase mb-6">
                Pro-Tech Staffing · {d.label}
              </p>
              <h1 className="font-sans font-semibold text-carbon text-4xl md:text-5xl leading-[1.1] tracking-tight mb-4">
                {d.h1}
              </h1>
              <p className="font-mono text-xs text-ind-green tracking-wide mb-6">{d.subhead}</p>
              <p className="text-steel text-lg leading-relaxed mb-4 max-w-lg">{d.intro}</p>
              <p className="text-steel text-base leading-relaxed mb-10 max-w-lg">
                Temp, temp-to-hire, and direct placement. Vetted candidates in 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-carbon hover:bg-graphite text-bone font-semibold text-sm px-6 py-3 transition-colors">
                  Request Workers
                  <span className="w-4 h-4">{icons.arrowRight}</span>
                </a>
                <Link to="/" className="inline-flex items-center justify-center gap-2 border border-fog hover:border-steel text-carbon font-medium text-sm px-6 py-3 transition-colors">
                  ← All Locations
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.imgAlt}
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(35%) brightness(0.88)' }}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-fog px-5 py-4 shadow-sm">
                <p className="font-mono text-2xl font-medium text-carbon">48hrs</p>
                <p className="text-xs text-steel mt-0.5">avg. fill time</p>
              </div>
            </div>
          </div>

          {/* City coverage strip */}
          <div className="mt-20 pt-8 border-t border-fog flex flex-wrap gap-6 items-center">
            <p className="font-mono text-xs text-steel tracking-widest uppercase">Coverage area</p>
            {d.cities.map(city => (
              <span key={city} className="font-mono text-xs text-carbon">{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-fog">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {d.proof.map(({ n, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-mono text-2xl font-medium text-carbon">{n}</span>
                <span className="text-xs text-steel leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries + Roles */}
      <section className="bg-bone py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <p className="font-mono text-xs text-steel tracking-widest uppercase mb-5">Industries We Staff</p>
              <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-8">
                Specialized in industrial.<br />Not a generalist.
              </h2>
              <div className="flex flex-col gap-3">
                {d.industries.map(ind => (
                  <div key={ind} className="flex items-center gap-3 border-b border-fog pb-3">
                    <div className="w-3.5 h-3.5 text-ind-green flex-shrink-0">{icons.check}</div>
                    <span className="text-carbon text-sm font-medium">{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-xs text-steel tracking-widest uppercase mb-5">Roles We Place</p>
              <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-8">
                Common positions<br />filled in this market.
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {d.roles.map(role => (
                  <div key={role} className="flex items-center gap-3 border-b border-fog pb-3">
                    <div className="w-3.5 h-3.5 text-steel flex-shrink-0">{icons.arrowRight}</div>
                    <span className="text-steel text-sm">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — condensed */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="font-mono text-xs text-steel tracking-widest uppercase mb-5">How It Works</p>
              <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-4">
                Three steps.<br />48 hours.<br />Workers on your floor.
              </h2>
              <p className="text-steel leading-relaxed mb-8">
                Submit a request, we source and screen locally, and vetted candidates arrive ready to work. Temp, temp-to-hire, and direct placement available.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-carbon hover:bg-graphite text-bone font-semibold text-sm px-6 py-3 transition-colors">
                Submit a Staffing Request
                <span className="w-4 h-4">{icons.arrowRight}</span>
              </a>
            </div>
            <div className="flex flex-col gap-0 border-l border-fog">
              {[
                { n: '01', title: 'Tell us what you need', desc: 'Role, headcount, start date, required skills. No lengthy intake forms.' },
                { n: '02', title: 'We source and screen locally', desc: `Our ${d.label} recruiters draw from an active local talent pool. Background checked, drug screened, and interviewed.` },
                { n: '03', title: 'Workers arrive ready', desc: 'Vetted candidates show up on time, ready to contribute from day one. We follow up to confirm.' },
              ].map(({ n, title, desc }) => (
                <div key={n} className="pl-8 pb-10 last:pb-0 relative">
                  <p className="font-mono text-xs text-ind-green tracking-widest mb-2">{n}</p>
                  <h3 className="font-semibold text-carbon text-base mb-1.5">{title}</h3>
                  <p className="text-steel text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Pro-Tech */}
      <section className="bg-bone py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-steel tracking-widest uppercase mb-5">Why Pro-Tech</p>
          <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-12">
            Why employers choose us<br />in {d.label}.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {d.whyUs.map(({ title, desc }) => (
              <div key={title} className="border-t-2 border-ind-green pt-6">
                <h3 className="font-semibold text-carbon text-base mb-3">{title}</h3>
                <p className="text-steel text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-carbon py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6 gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="w-4 h-4 text-ind-green inline-block">{icons.star}</span>
            ))}
          </div>
          <blockquote className="font-semibold text-bone text-xl md:text-2xl leading-relaxed tracking-tight mb-8">
            "{d.testimonial.quote}"
          </blockquote>
          <p className="font-mono text-xs text-fog tracking-widest uppercase">{d.testimonial.name}</p>
          <p className="font-mono text-xs text-steel tracking-widest mt-1">{d.testimonial.co}</p>
        </div>
      </section>

      {/* DFW Sub-Markets (DFW page only) */}
      {market === 'dfw' && (
        <section className="bg-bone py-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="font-mono text-xs text-steel tracking-widest uppercase mb-5">DFW Sub-Markets</p>
            <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-3">
              Need staffing in a specific<br />DFW city?
            </h2>
            <p className="text-steel mb-12 max-w-lg leading-relaxed">
              Our DFW team covers the entire metroplex. These pages are built specifically for each corridor — with roles, employers, and local market context.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: 'Arlington, TX', desc: 'Major warehouse, distribution, and manufacturing corridor in Tarrant County.', href: '/staffing-agency-arlington-tx' },
                { label: 'Irving, TX', desc: 'Las Colinas and DFW Airport corridor — electronics, logistics, and light industrial.', href: '/staffing-agency-irving-tx' },
                { label: 'Garland, TX', desc: 'Dense light industrial zone east of Dallas. Electronics and light mfg focus.', href: '/staffing-agency-garland-tx' },
              ].map(({ label, desc, href }) => (
                <Link key={href} to={href} className="group block border border-fog hover:border-carbon bg-white p-6 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <span className="w-5 h-5 text-ind-green">{icons.mapPin}</span>
                    <span className="w-4 h-4 text-steel group-hover:text-carbon transition-colors">{icons.arrowRight}</span>
                  </div>
                  <h3 className="font-semibold text-carbon text-base mb-2">{label}</h3>
                  <p className="text-steel text-sm leading-relaxed">{desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Cities */}
      <section className="bg-white py-16 border-t border-fog">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-steel tracking-widest uppercase mb-6">Also Serving Nearby</p>
          <div className="flex flex-wrap gap-3">
            {d.relatedCities.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className="inline-flex items-center gap-2 border border-fog hover:border-carbon text-steel hover:text-carbon text-sm font-medium px-5 py-2.5 transition-colors"
              >
                <span className="w-3.5 h-3.5">{icons.mapPin}</span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-graphite py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-fog tracking-widest uppercase mb-6">{d.label} · Get Started</p>
          <h2 className="font-semibold text-bone text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Need workers in {d.label.split('–')[0].trim()}?<br />We can help.
          </h2>
          <p className="text-fog mb-10">
            Submit a request and we'll have screened, local candidates ready within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+10000000000" className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm transition-colors">
              <span className="w-4 h-4">{icons.phone}</span>
              Call Us Now
            </a>
            <a href="#request" className="inline-flex items-center justify-center gap-2 border border-fog hover:border-bone text-bone font-medium px-7 py-3 text-sm transition-colors">
              Submit a Staffing Request
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Employers />
      <Industries />
      <HowItWorks />
      <Locations />
      <Testimonials />
      <JobSeekers />
      <CTABand />
    </>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="font-sans">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/staffing-agency-dallas-fort-worth" element={<LocationPage market="dfw" />} />
        <Route path="/staffing-agency-bedford-tx" element={<LocationPage market="bedford" />} />
        <Route path="/staffing-agency-arlington-tx" element={<LocationPage market="arlington" />} />
        <Route path="/staffing-agency-irving-tx" element={<LocationPage market="irving" />} />
        <Route path="/staffing-agency-garland-tx" element={<LocationPage market="garland" />} />
      </Routes>
      <Footer />
    </div>
  )
}
