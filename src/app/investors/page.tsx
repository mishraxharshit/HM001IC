'use client'

import Link from 'next/link'
import HeroMedia from '@/components/HeroMedia'
import Section from '@/components/Section'

const INVESTMENT_THESIS = [
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Defense Sector Tailwinds',
    desc: 'European NATO member defense budgets are increasing significantly, driven by geopolitical realignment. USH is positioned at the intersection of this structural spending shift.',
  },
  {
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064',
    title: 'Critical Resource Control',
    desc: 'Demand for rare earth elements and strategic minerals is accelerating globally. Our vertically integrated approach captures value from extraction through to security of supply.',
  },
  {
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Proprietary AI Platform',
    desc: 'Fractalysium represents a high-margin, scalable intelligence SaaS asset with recurring sovereign client revenue  a differentiated moat within the defense-tech landscape.',
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Dual-Use Revenue Model',
    desc: 'Our technologies serve both commercial and government sectors, providing revenue diversification and resilience across market cycles  reducing concentration risk.',
  },
]

const HIGHLIGHTS = [
  { value: '3', label: 'Continents of Operation' },
  { value: '€120M+', label: 'Combined Project Pipeline' },
  { value: '8', label: 'Active Sovereign Contracts' },
  { value: '3', label: 'Operating Divisions' },
]

const DOCUMENTS = [
  { name: 'Corporate Overview Deck', type: 'PDF', access: 'NDA Required', desc: 'Group structure, division breakdown, and strategic positioning summary.' },
  { name: 'Financial Summary FY2024', type: 'PDF', access: 'NDA Required', desc: 'Revenue overview, EBITDA margins, and segment performance.' },
  { name: 'ESG & Governance Framework', type: 'PDF', access: 'Public', desc: 'Our approach to environmental, social, and governance compliance.' },
  { name: 'Technology & IP Overview', type: 'PDF', access: 'NDA Required', desc: 'Summary of proprietary technologies, patents pending, and R&D pipeline.' },
]

export default function InvestorsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="isolate relative pt-32 pb-20 bg-[#05080c] overflow-hidden">
<HeroMedia video="/media/armour.mp4" poster="/media/armour.jpg" dim={0.5} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-neutral-500 mb-4 block">
            Investor Relations
          </span>
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 tracking-tight">
            Strategic <span className="italic text-neutral-400">Capital</span>
          </h1>
          <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto">
            USH Industries selectively partners with institutional investors, family offices, and sovereign wealth funds that share our long-term orientation and strategic vision.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <div className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="text-center">
              <div className="text-4xl font-black text-neutral-900 mb-2">{h.value}</div>
              <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Thesis */}
      <Section title="Investment Thesis" subtitle="Why USH Industries">
        <div className="grid md:grid-cols-2 gap-8">
          {INVESTMENT_THESIS.map((item) => (
            <div key={item.title} className="group border border-neutral-100 p-10 hover:shadow-2xl hover:border-neutral-900 transition-all duration-500">
              <div className="w-14 h-14 bg-[#05080c] flex items-center justify-center mb-6 group-hover:bg-red-800 transition-colors">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">{item.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Documents */}
      <Section background="dark" title="Investor Documents" subtitle="Due Diligence Materials">
        <div className="max-w-4xl mx-auto space-y-4">
          {DOCUMENTS.map((doc) => (
            <div key={doc.name} className="bg-neutral-800 border border-neutral-700 p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-neutral-500 transition-colors">
              <div className="w-10 h-10 bg-neutral-700 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-bold text-white mb-1">{doc.name}</div>
                <div className="text-neutral-400 text-sm">{doc.desc}</div>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 ${doc.access === 'Public' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'}`}>
                  {doc.access}
                </span>
                <Link
                  href="/contact"
                  className="text-[11px] font-black text-neutral-300 uppercase tracking-widest hover:text-white transition-colors"
                >
                  Request →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-neutral-600 text-xs mt-8 uppercase tracking-widest">All NDA-protected documents require executed confidentiality agreement prior to access.</p>
      </Section>

      {/* Governance */}
      <Section title="Governance Structure" subtitle="Corporate Architecture">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-50 border border-neutral-200 p-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-4">Legal Structure</h3>
                <ul className="space-y-3 text-sm text-neutral-700">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Registered as USH Industries, Paris, France</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Holding structure with separately incorporated operating divisions</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Compliant with EU and French corporate governance standards</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Independent Advisory Board with quarterly oversight mandate</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-4">Compliance & Controls</h3>
                <ul className="space-y-3 text-sm text-neutral-700">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Annual independent financial audit</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Bi-annual anti-corruption and sanctions compliance review</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />ISO 27001 information security framework in implementation</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />FCPA, UK Bribery Act, and EU AML directive compliance program</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 bg-[#05080c] text-center border-t border-neutral-800">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl text-white font-light mb-6 tracking-wide">Investor Inquiries</h2>
          <p className="text-neutral-500 mb-4 font-light">
            We engage selectively with qualified institutional and strategic investors. Initial discussions are conducted under NDA.
          </p>
          <p className="text-neutral-600 text-sm mb-10 uppercase tracking-widest">investor.relations@USHindustries.com</p>
          <Link href="/contact" className="inline-block border border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300">
            Request Investor Meeting
          </Link>
        </div>
      </section>
    </div>
  )
}