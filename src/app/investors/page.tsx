'use client'

import PageHero from '@/components/PageHero'
import Link from 'next/link'
import Section from '@/components/Section'

const INVESTMENT_THESIS = [
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Un secteur de la défense porteur',
    desc: 'Les budgets de défense des pays européens membres de l’OTAN augmentent nettement, sous l’effet du réalignement géopolitique. USH est positionné au cœur de cette évolution structurelle des dépenses.',
  },
  {
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064',
    title: 'Maîtrise des ressources critiques',
    desc: 'La demande en terres rares et en minerais stratégiques s’accélère à l’échelle mondiale. Notre approche verticalement intégrée crée de la valeur depuis l’extraction jusqu’à la sécurité de l’approvisionnement.',
  },
  {
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Plateforme d’IA propriétaire',
    desc: 'Fractalysium est un actif SaaS de renseignement à forte marge et évolutif, avec des revenus récurrents auprès de clients souverains : un avantage distinctif dans le paysage des technologies de défense.',
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Modèle de revenus à double usage',
    desc: 'Nos technologies servent à la fois les secteurs commercial et gouvernemental, ce qui diversifie les revenus et renforce la résilience au fil des cycles de marché, en réduisant le risque de concentration.',
  },
]

const HIGHLIGHTS = [
  { value: '3', label: 'Continents d’opération' },
  { value: '€120M+', label: 'Portefeuille de projets cumulé' },
  { value: '8', label: 'Contrats souverains actifs' },
  { value: '3', label: 'Divisions opérationnelles' },
]

const DOCUMENTS = [
  { name: 'Présentation du Groupe', type: 'PDF', access: 'NDA requis', desc: 'Structure du Groupe, répartition par division et synthèse du positionnement stratégique.' },
  { name: 'Synthèse financière exercice 2024', type: 'PDF', access: 'NDA requis', desc: 'Vue d’ensemble du chiffre d’affaires, marges d’EBITDA et performance par segment.' },
  { name: 'Cadre ESG et gouvernance', type: 'PDF', access: 'Public', desc: 'Notre approche de la conformité environnementale, sociale et de gouvernance.' },
  { name: 'Technologies et propriété intellectuelle', type: 'PDF', access: 'NDA requis', desc: 'Synthèse des technologies propriétaires, des brevets en cours et du portefeuille de R&D.' },
]

export default function InvestorsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <PageHero
      eyebrow="Relations investisseurs"
      title={<>Un capital <span className="text-[#9db0c4]">stratégique.</span></>}
      intro="USH Industries s’associe de manière sélective à des investisseurs institutionnels, des family offices et des fonds souverains qui partagent notre vision stratégique de long terme."
      video="/media/armour.mp4"
      poster="/media/armour.jpg"
    />

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
      <Section title="Thèse d’investissement" subtitle="Pourquoi USH Industries">
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
      <Section background="dark" title="Documents investisseurs" subtitle="Éléments de due diligence">
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
                  Demander →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-neutral-600 text-xs mt-8 uppercase tracking-widest">Tout document soumis à NDA exige la signature préalable d’un accord de confidentialité.</p>
      </Section>

      {/* Governance */}
      <Section title="Structure de gouvernance" subtitle="Architecture du Groupe">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-50 border border-neutral-200 p-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-4">Structure juridique</h3>
                <ul className="space-y-3 text-sm text-neutral-700">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Immatriculée sous le nom USH Industries, Paris, France</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Structure de holding avec des divisions opérationnelles constituées en sociétés distinctes</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Conforme aux normes de gouvernance d’entreprise de l’UE et de la France</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Comité consultatif indépendant avec un mandat de supervision trimestriel</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-4">Conformité et contrôles</h3>
                <ul className="space-y-3 text-sm text-neutral-700">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Audit financier indépendant annuel</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Revue semestrielle de la conformité anticorruption et sanctions</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Cadre de sécurité de l’information ISO 27001 en cours de mise en place</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#05080c] mt-2 shrink-0" />Programme de conformité FCPA, UK Bribery Act et directive européenne LCB-FT</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 bg-[#05080c] text-center border-t border-neutral-800">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl text-white font-light mb-6 tracking-wide">Demandes des investisseurs</h2>
          <p className="text-neutral-500 mb-4 font-light">
            Nous échangeons de manière sélective avec des investisseurs institutionnels et stratégiques qualifiés. Les premières discussions se tiennent sous NDA.
          </p>
          <p className="text-neutral-600 text-sm mb-10 uppercase tracking-widest">investor.relations@USHindustries.com</p>
          <Link href="/contact" className="inline-block border border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300">
            Demander un rendez-vous investisseur
          </Link>
        </div>
      </section>
    </div>
  )
}