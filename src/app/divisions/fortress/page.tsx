'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MediaHero from '@/components/MediaHero'
import FilmBand from '@/components/FilmBand'
import { SLIDES, PRODUCTS, QUALITY_TYPES, CERTS } from '@/lib/fortress-data'

const HERO = [
  { index: '01', tag: 'Savoir-faire', title: 'Forger le bouclier ultime.', sub: 'Des systèmes de protection balistique et de sécurité pour les forces armées, les institutions et les sites critiques.', video: '/media/forge.mp4', poster: '/media/forge.jpg' },
  { index: '02', tag: 'Matériaux', title: 'Conçu dès la fibre.', sub: 'Composites PEUHMM, Dyneema et céramique, vérifiés avant le début de la production.', video: '/media/armour.mp4', poster: '/media/armour.jpg' },
  { index: '03', tag: 'Protection', title: 'Éprouvé là où cela compte.', sub: 'Testé en tir réel et audité de manière indépendante.', video: '/media/helmet.mp4', poster: '/media/helmet.jpg' },
]
const Rv = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>
)
const Tag = ({ children }: { children: React.ReactNode }) => <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2b4f9c]">{children}</p>

export default function FortressPage() {
  return (
    <>
      <MediaHero slides={HERO} cta={[{ label: 'Demander un devis', href: '/contact' }, { label: 'Voir les produits', href: '#products' }]} />

      <section className="bg-white">
        {SLIDES.map((s, i) => (
          <div key={s.title} className="grid md:grid-cols-2">
            <div className={`relative min-h-[380px] overflow-hidden bg-black md:min-h-[560px] ${i % 2 ? 'md:order-2' : ''}`}>
              <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700" />
            </div>
            <Rv className="flex flex-col justify-center gap-5 px-6 py-14 md:px-16">
              <Tag>{`0${i + 1} ${s.category}`}</Tag>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{s.title}</h2>
              <p className="max-w-lg text-neutral-600">{s.description}</p>
              <div className="mt-2 flex items-baseline gap-4 border-t border-neutral-300 pt-5"><b className="text-3xl font-semibold tracking-tight md:text-4xl">{s.stat}</b><span className="text-sm text-neutral-500">{s.statLabel}</span></div>
            </Rv>
          </div>
        ))}
      </section>

      <section id="products" className="bg-neutral-100 py-24"><div className="mx-auto max-w-[1360px] px-6 lg:px-14">
        <Tag>Gamme de produits</Tag><h2 className="mt-3 mb-14 text-4xl font-semibold tracking-tight md:text-6xl">Systèmes et spécifications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {PRODUCTS.map(p => (
            <Rv key={p.name} className="grid bg-white sm:grid-cols-[2fr_3fr]">
              <div className="relative min-h-[240px] overflow-hidden bg-black"><img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700" /></div>
              <div className="p-7"><Tag>{p.tag}</Tag><h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.name}</h3><p className="mt-3 text-sm text-neutral-600">{p.desc}</p>
                <dl className="mt-5 border-t border-neutral-300">{p.specs.map(x => <div key={x.label} className="flex justify-between gap-4 border-b border-neutral-200 py-2 text-sm"><dt className="text-neutral-500">{x.label}</dt><dd className="text-right font-medium">{x.val}</dd></div>)}</dl></div>
            </Rv>
          ))}
        </div>
      </div></section>

      <FilmBand video="/media/walk.mp4" poster="/media/walk.jpg" eyebrow="En service" title="Conçu pour protéger." />

      <section className="bg-white py-24"><div className="mx-auto max-w-[1360px] px-6 lg:px-14">
        <Tag>Assurance qualité</Tag><h2 className="mt-3 mb-14 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">Quatre contrôles derrière chaque commande.</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUALITY_TYPES.map((q, i) => (
            <Rv key={q.name} className="group relative min-h-[420px] overflow-hidden bg-black text-white">
              <img src={q.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6"><span className="text-xs tracking-widest text-[#9db0c4]">0{i + 1}</span><h3 className="mt-2 text-xl font-semibold">{q.name}</h3><p className="mt-2 text-sm text-neutral-300">{q.desc}</p></div>
            </Rv>
          ))}
        </div>
      </div></section>

      <section className="bg-[#05080c] py-16 text-white"><div className="mx-auto grid max-w-[1360px] gap-8 px-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-14">
        {CERTS.map(c => <div key={c.code} className="border-t border-white/30 pt-4"><b className="text-xl font-semibold">{c.code}</b><p className="mt-1 text-sm text-neutral-400">{c.label}</p></div>)}
      </div></section>

      <section className="bg-white py-24"><div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-8 px-6 lg:px-14">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">Spécifiez preuves à l’appui.</h2>
        <Link href="/contact" className="bg-black px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-neutral-700">Demander un devis</Link>
      </div></section>
    </>
  )
}
