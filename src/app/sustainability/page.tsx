'use client'

import PageHero from '@/components/PageHero'
import Link from 'next/link'
import EngineeringBand from '@/components/EngineeringBand'
import { wrap, Eyebrow } from '@/components/PageHero'

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
      <PageHero
      eyebrow="Développement durable et ESG"
      title={<>Sécuriser l’avenir,{' '} <span className="text-[#9db0c4]">de façon responsable</span></>}
      intro="Protéger les ressources stratégiques et les infrastructures critiques est indissociable de la protection de l’environnement et des sociétés dans lesquelles nous opérons. Le développement durable n’est pas une option : c’est l’intégrité opérationnelle."
      video="/media/walk.mp4"
      poster="/media/walk.jpg"
    />
<EngineeringBand variant="flow" eyebrow="Développement durable" title="Sécuriser l’avenir." />

      {/* ESG framework */}
      <section className="py-24 md:py-32">
        <div className={wrap}>
          <div className="max-w-3xl">
            <Eyebrow>Notre cadre ESG</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Quatre engagements, chacun mesuré.</h2>
          </div>
          <ol className="mt-14 border-t border-neutral-900">
            {PILLARS.map((pillar, i) => (
              <li key={pillar.title} className="grid gap-8 border-b border-neutral-200 py-12 md:py-14 lg:grid-cols-[5rem_5fr_4fr] lg:gap-12">
                <span className="text-sm font-bold tracking-[0.25em] text-[#2b4f9c]">{String(i + 1).padStart(2, '0')}</span>
                <div className="min-w-0">
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{pillar.title}</h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-neutral-600">{pillar.desc}</p>
                </div>
                <dl className="grid grid-cols-2 gap-6 self-start">
                  {pillar.metrics.map((m) => (
                    <div key={m.label} className="border-l-2 border-[#2b4f9c] pl-4">
                      <dd className="text-4xl font-semibold tracking-tight md:text-5xl">{m.value}</dd>
                      <dt className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">{m.label}</dt>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-[#05080c] py-24 text-white md:py-32">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[3fr_9fr]`}>
          <Eyebrow dark>Notre position</Eyebrow>
          <figure>
            <blockquote className="text-3xl font-medium leading-[1.15] tracking-[-0.025em] [text-wrap:balance] md:text-5xl">
              La véritable sécurité stratégique consiste à laisser les environnements, les communautés et les institutions plus solides que nous ne les avons trouvés.
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
              <span aria-hidden className="h-px w-12 bg-[#2b4f9c]" />Direction d’USH Industries
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-24">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-8`}>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Reporting ESG et partenariats</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">Pour toute demande de données ESG ou discussion de partenariat en matière de développement durable.</p>
          </div>
          <Link href="/contact" className="bg-[#05080c] px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#2b4f9c]">Prendre contact</Link>
        </div>
      </section>
    </div>
  )
}