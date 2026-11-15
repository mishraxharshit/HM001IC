import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero, { Eyebrow, wrap } from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Notre vision | USH Industries',
  description: 'Notre mission, notre vision et nos principes : la souveraineté par l’intégration du renseignement, du contrôle des ressources et de la protection.',
}

const PRINCIPLES = [
  { n: '01', title: 'Souveraineté', desc: 'Nos technologies renforcent l’autonomie stratégique et la sécurité nationale.' },
  { n: '02', title: 'Sécurité', desc: 'La protection des personnes, des données et des infrastructures est primordiale.' },
  { n: '03', title: 'Responsabilité', desc: 'La conformité, la transparence et l’éthique guident nos opérations.' },
]

const PRIORITIES = [
  { title: 'Renseignement', desc: 'Voir les menaces et les opportunités avant qu’elles ne se concrétisent.', href: '/divisions/fractalysium', cta: 'Fractalysium Intelligence' },
  { title: 'Contrôle des ressources', desc: 'Sécuriser l’accès aux matériaux dont dépendent les nations.', href: '/divisions/resources', cta: 'Ressources stratégiques' },
  { title: 'Énergie', desc: 'Garantir l’approvisionnement en pétrole et en gaz, de la source jusqu’à la livraison.', href: '/divisions/oil-gas', cta: 'Pétrole et gaz' },
  { title: 'Négoce de matières premières', desc: 'Relier producteurs et acheteurs par un négoce physique financé, contrôlé et conforme.', href: '/divisions/multi-commodities', cta: 'Négoce multi-matières' },
  { title: 'Protection physique', desc: 'Défendre les personnes, les sites et les routes d’approvisionnement dans les environnements les plus hostiles.', href: '/divisions/fortress', cta: 'Fortress Defense' },
]

export default function VisionPage() {
  return (
    <div className="bg-white text-[#05080c]">
      <PageHero
        eyebrow="Notre vision"
        title={<>Bâtir la <span className="text-[#9db0c4]">souveraineté mondiale.</span></>}
        intro="Au XXIe siècle, la souveraineté exige l’intégration du renseignement, du contrôle des ressources et de la protection physique. C’est cette conviction qui fonde USH."
        video="/media/walk.mp4"
        poster="/media/walk.jpg"
      />

      {/* Mission / Vision */}
      <section className="py-24 md:py-32">
        <div className={`${wrap} grid gap-14 md:grid-cols-2 md:gap-20`}>
          {[
            ['01', 'Notre mission', 'Permettre aux États, aux industriels et aux partenaires souverains de contrôler, protéger et sécuriser leurs actifs stratégiques grâce à l’intégration du renseignement, de la gestion des ressources et des systèmes de défense.'],
            ['02', 'Notre vision', 'Devenir le premier groupe de sécurité intégré au monde, reconnu pour sa capacité à fournir des solutions de souveraineté complètes dans les environnements les plus exigeants.'],
          ].map(([n, t, d]) => (
            <div key={n} className="border-t border-[#05080c] pt-8">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#2b4f9c]">{n}</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{t}</h2>
              <p className="mt-5 text-lg leading-relaxed text-neutral-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic priorities */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-24 md:py-32">
        <div className={wrap}>
          <Eyebrow>Notre façon d’agir</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Cinq expertises, un seul groupe intégré.</h2>
          <div className="mt-14 grid gap-px border border-neutral-200 bg-neutral-200 md:grid-cols-2 lg:grid-cols-6">
            {PRIORITIES.map((p, i) => (
              <Link key={p.title} href={p.href} className={`group flex flex-col bg-white p-10 transition-colors hover:bg-neutral-50 ${i < 3 ? 'lg:col-span-2' : i === 4 ? 'md:col-span-2 lg:col-span-3' : 'lg:col-span-3'}`}>
                <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-neutral-600">{p.desc}</p>
                <span className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2b4f9c] group-hover:underline">{p.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 md:py-32">
        <div className={wrap}>
          <Eyebrow>Nos principes</Eyebrow>
          <ul className="mt-10 grid gap-10 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <li key={p.n} className="border-t-2 border-[#2b4f9c] pt-6">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#2b4f9c]">{p.n}</span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-600">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#05080c] py-24 text-white">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-8`}>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Découvrez notre gouvernance</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-400">Une vision exige de la responsabilité. Découvrez comment nous encadrons nos opérations.</p>
          </div>
          <Link href="/governance" className="bg-white px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#05080c] transition-colors hover:bg-neutral-300">Gouvernance</Link>
        </div>
      </section>
    </div>
  )
}
