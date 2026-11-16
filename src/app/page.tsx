'use client'

import Link from 'next/link'
import EngineeringBand from '@/components/EngineeringBand'
import HeroMedia from '@/components/HeroMedia'
import Section from '@/components/Section'

const PILLARS = [
  {
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
    title: 'Extraction responsable des ressources',
    desc: 'USH applique des protocoles environnementaux stricts dans toutes ses opérations minières et de ressources. Nous travaillons avec des opérateurs certifiés et appliquons les référentiels ISO 14001 pour réduire l’impact écologique sur tous les sites actifs.',
    metrics: [{ label: 'Sites certifiés ISO', value: '100%' }, { label: 'Taux de remise en état', value: '94%' }],
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Intégration des énergies propres',
    desc: 'Notre division infrastructures énergétiques privilégie l’intégration des énergies renouvelables (solaire, éolien et micro-réseaux hybrides) afin de réduire l’intensité carbone des actifs que nous sécurisons et exploitons.',
    metrics: [{ label: 'Objectif de mix renouvelable', value: '60%' }, { label: 'Objectif de réduction carbone', value: '2030' }],
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Communautés et acceptabilité sociale',
    desc: 'Des opérations durables exigent la confiance des communautés locales. USH investit dans le développement des compétences, les achats locaux et des programmes transparents de liaison avec les communautés dans chaque région où nous opérons.',
    metrics: [{ label: 'Emploi local', value: '70%+' }, { label: 'Communautés impliquées', value: '18' }],
  },
  {
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    title: 'Gouvernance et conformité',
    desc: 'Le reporting ESG, les dispositifs anticorruption (FCPA, UK Bribery Act) et la diligence raisonnable de la chaîne d’approvisionnement sont intégrés à chaque unité. Nous appliquons une tolérance zéro en cas de violation des sanctions.',
    metrics: [{ label: 'Audits de conformité/an', value: '4' }, { label: 'Note ESG', value: 'A-' }],
  },
]


export default function SustainabilityPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="isolate relative pt-32 pb-20 bg-[#05080c] overflow-hidden">
<HeroMedia video="/media/walk.mp4" poster="/media/walk.jpg" dim={0.5} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-green-500 mb-4 block">
            Développement durable et ESG
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-8 tracking-tight">
            Sécuriser l’avenir,{' '}
            <span className="italic text-neutral-400">de façon responsable</span>
          </h1>
          <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto">
            Protéger les ressources stratégiques et les infrastructures critiques est indissociable de la protection de l’environnement et des sociétés dans lesquelles nous opérons. Le développement durable n’est pas une option : c’est l’intégrité opérationnelle.
          </p>
        </div>
      </section>
<EngineeringBand variant="flow" eyebrow="Développement durable" title="Sécuriser l’avenir." />

      {/* ESG Pillars */}
      <Section title="Notre cadre ESG" subtitle="Quatre piliers d’opérations responsables">
        <div className="grid md:grid-cols-2 gap-8">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="group border border-neutral-100 p-10 hover:shadow-2xl hover:border-neutral-900 transition-all duration-500">
              <div className="w-14 h-14 bg-[#05080c] flex items-center justify-center mb-6 group-hover:bg-green-800 transition-colors">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pillar.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">{pillar.title}</h3>
              <p className="text-neutral-600 leading-relaxed text-sm mb-8">{pillar.desc}</p>
              <div className="flex gap-6 pt-6 border-t border-neutral-100">
                {pillar.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl font-black text-neutral-900">{m.value}</div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* Statement */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-28">
  <div className="mx-auto max-w-5xl px-6">
    <figure className="mx-auto max-w-4xl text-center">
      <span
        aria-hidden="true"
        className="mb-6 block text-7xl font-semibold leading-none text-[#2b4f9c]"
      >
        &ldquo;
      </span>

      <blockquote className="text-3xl font-medium leading-[1.2] tracking-[-0.025em] text-[#05080c] [text-wrap:balance] md:text-5xl">
        La véritable sécurité stratégique consiste à laisser les environnements, les communautés et les institutions plus solides que nous ne les avons trouvés.
      </blockquote>

      <div className="mx-auto mt-10 h-px w-16 bg-[#2b4f9c]" />

      <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
        Direction d’USH Industries
      </figcaption>
    </figure>
  </div>
</section>

      {/* CTA */}
      <section className="py-24 bg-[#05080c] text-center border-t border-neutral-800">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl text-white font-light mb-6 tracking-wide">Reporting ESG et partenariats</h2>
          <p className="text-neutral-500 mb-10 font-light">Pour toute demande de données ESG ou discussion de partenariat en matière de développement durable.</p>
          <Link href="/contact" className="inline-block border border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300">
            Prendre contact
          </Link>
        </div>
      </section>
    </div>
  )
}