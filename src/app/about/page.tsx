import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero, { Eyebrow, wrap } from '@/components/PageHero'
import EngineeringBand from '@/components/EngineeringBand'
import { CHAIRMAN } from '@/lib/leadership'

export const metadata: Metadata = {
  title: 'À propos | USH Industries',
  description:
    'USH Industries intègre renseignement, contrôle des ressources et protection physique pour offrir des solutions de souveraineté.',
}

const FACTS: [string, string][] = [['15+', 'Matériaux stratégiques'], ['50+', 'Pays'], ['30+', 'Sites protégés'], ['100%', 'Capital souverain']]

const MODEL = [
  { n: '01', title: 'Renseignement', desc: 'Une analyse géospatiale pilotée par l’IA qui identifie ressources stratégiques et menaces avant qu’elles ne se concrétisent.', href: '/divisions/fractalysium', cta: 'Fractalysium' },
  { n: '02', title: 'Contrôle des ressources', desc: 'Actifs miniers, réseaux logistiques et chaînes d’approvisionnement structurés pour le contrôle souverain des matériaux critiques.', href: '/divisions/resources', cta: 'Ressources stratégiques' },
  { n: '03', title: 'Énergie', desc: 'Approvisionnement en pétrole brut, produits raffinés, GNL et gaz naturel, de la source jusqu’au terminal de livraison.', href: '/divisions/oil-gas', cta: 'Pétrole et gaz' },
  { n: '04', title: 'Négoce de matières premières', desc: 'Négoce physique de métaux, de minerais et de matières industrielles, avec financement et contrôle indépendant.', href: '/divisions/multi-commodities', cta: 'Négoce multi-matières' },
  { n: '05', title: 'Protection physique', desc: 'Protection balistique, systèmes de blindage et sécurité des infrastructures, de la R&D au déploiement.', href: '/divisions/fortress', cta: 'Fortress Defense' },
]

const EXPLORE = [
  { title: 'Direction', desc: 'Les dirigeants et conseillers responsables du Groupe.', href: '/leadership' },
  { title: 'Notre vision', desc: 'Notre mission, notre vision et les principes qui guident chaque programme.', href: '/vision' },
  { title: 'Gouvernance', desc: 'Comment nous encadrons les risques, la conformité, l’éthique et les opérations responsables.', href: '/governance' },
]

export default function AboutPage() {
  return (
    <div className="bg-white text-[#05080c]">
      <PageHero
        eyebrow="À propos d’USH Industries"
        title={<>Un groupe. <span className="text-[#9db0c4]">Une souveraineté totale.</span></>}
        intro="USH Industries est un groupe industriel européen qui sécurise les ressources stratégiques, protège les infrastructures critiques et développe des systèmes de défense tactiques."
        video="/media/helmet.mp4"
        poster="/media/helmet.jpg"
        facts={FACTS}
      />

      <EngineeringBand variant="radar" eyebrow="Le Groupe" title="Souveraineté. Sécurité. Responsabilité." />

      {/* Who we are */}
      <section className="py-24 md:py-32">
        <div className={`${wrap} grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
          <div>
            <Eyebrow>Qui sommes-nous</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Fondé sur une conviction simple.</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-neutral-600">
            <p>Au XXIe siècle, la souveraineté exige l’intégration du renseignement, du contrôle des ressources et de la protection physique. Peu de groupes réunissent les trois. USH a été créé pour cela.</p>
            <p>Basés à Paris, nous travaillons avec les États, les industriels et les partenaires souverains pour contrôler, protéger et sécuriser des actifs stratégiques dans les environnements les plus exigeants au monde.</p>
          </div>
        </div>
      </section>

      {/* Integrated model */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-24 md:py-32">
        <div className={wrap}>
          <Eyebrow>Modèle intégré</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Cinq expertises, un seul partenaire responsable.</h2>
          <div className="mt-14 grid gap-px border border-neutral-200 bg-neutral-200 md:grid-cols-2 lg:grid-cols-6">
            {MODEL.map((m, i) => (
              <Link key={m.n} href={m.href} className={`group flex flex-col bg-white p-10 transition-colors hover:bg-neutral-50 ${i < 3 ? 'lg:col-span-2' : i === 4 ? 'md:col-span-2 lg:col-span-3' : 'lg:col-span-3'}`}>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#2b4f9c]">{m.n}</span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{m.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-neutral-600">{m.desc}</p>
                <span className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2b4f9c] group-hover:underline">{m.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman statement */}
      <section className="bg-[#05080c] py-24 text-white md:py-32">
        <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[3fr_9fr] lg:gap-20`}>
          <div className="max-w-xs">
            <img src={CHAIRMAN.image} alt={`Portrait de ${CHAIRMAN.name}`} loading="lazy" className="aspect-[4/5] w-full object-cover object-[50%_25%]" />
          </div>
          <div>
            <Eyebrow dark>{CHAIRMAN.role}</Eyebrow>
            <blockquote className="mt-6 text-2xl font-medium leading-snug tracking-[-0.01em] [text-wrap:balance] md:text-4xl">{CHAIRMAN.quote}</blockquote>
            <p className="mt-8 text-lg font-semibold">{CHAIRMAN.name}</p>
          </div>
        </div>
      </section>

      {/* Explore the Group */}
      <section className="py-24 md:py-32">
        <div className={wrap}>
          <Eyebrow>Découvrir le Groupe</Eyebrow>
          <ul className="mt-10 border-t border-[#05080c]">
            {EXPLORE.map((e) => (
              <li key={e.href} className="border-b border-neutral-200">
                <Link href={e.href} className="group grid items-center gap-2 py-10 transition-colors hover:bg-neutral-50 md:grid-cols-[4fr_6fr_auto] md:gap-10 md:px-4">
                  <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">{e.title}</h3>
                  <p className="text-lg leading-relaxed text-neutral-600">{e.desc}</p>
                  <span aria-hidden="true" className="text-2xl text-[#2b4f9c] transition-transform group-hover:translate-x-2">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-24">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-8`}>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Rejoignez notre réseau stratégique</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">Nous recherchons des talents d’exception en renseignement, ingénierie de défense et analyse géopolitique.</p>
          </div>
          <Link href="/careers" className="bg-[#05080c] px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#2b4f9c]">Voir les opportunités</Link>
        </div>
      </section>
    </div>
  )
}
