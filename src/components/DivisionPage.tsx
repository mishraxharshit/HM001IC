'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MediaHero, { type HeroSlide } from '@/components/MediaHero'
import FilmBand from '@/components/FilmBand'

export interface DivisionSlide { image: string; category: string; title: string; stat: string; statLabel: string; description: string }
export interface DivisionOffer { tag: string; name: string; desc: string; specs: { label: string; val: string }[]; image: string }
export interface DivisionControl { name: string; desc: string; image: string }
export interface DivisionStandard { code: string; label: string }
export interface DivisionShot { src: string; alt: string }

export interface DivisionData {
  hero: HeroSlide[]
  heroCta: { label: string; href: string }[]
  slides: DivisionSlide[]
  offersTag: string
  offersTitle: string
  offers: DivisionOffer[]
  film: { video: string; poster: string; eyebrow: string; title: string }
  controlsTag: string
  controlsTitle: string
  controls: DivisionControl[]
  galleryTag: string
  galleryTitle: string
  gallery: DivisionShot[]
  standardsTag: string
  standards: DivisionStandard[]
  ctaTitle: string
  ctaLabel: string
}

const Rv = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>
)
const Tag = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <p className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${dark ? 'text-[#9db0c4]' : 'text-[#2b4f9c]'}`}>{children}</p>
)

// Full division page, same layout as Fortress Defense: hero, chapters, offers, film band, controls, standards, CTA.
export default function DivisionPage({ d }: { d: DivisionData }) {
  return (
    <>
      <MediaHero slides={d.hero} cta={d.heroCta} />

      <section className="bg-white">
        {d.slides.map((s, i) => (
          <div key={s.title} className="grid md:grid-cols-2">
            <div className={`relative min-h-[380px] overflow-hidden bg-[#05080c] md:min-h-[560px] ${i % 2 ? 'md:order-2' : ''}`}>
              <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700" />
            </div>
            <Rv className="flex flex-col justify-center gap-5 px-6 py-14 md:px-16">
              <Tag>{`0${i + 1} ${s.category}`}</Tag>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{s.title}</h2>
              <p className="max-w-lg text-neutral-600">{s.description}</p>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-neutral-300 pt-5">
                <b className="text-3xl font-semibold tracking-tight md:text-4xl">{s.stat}</b>
                <span className="text-sm text-neutral-500">{s.statLabel}</span>
              </div>
            </Rv>
          </div>
        ))}
      </section>

      <section id="offers" className="scroll-mt-24 bg-neutral-100 py-24"><div className="mx-auto max-w-[1360px] px-6 lg:px-14">
        <Tag>{d.offersTag}</Tag>
        <h2 className="mb-14 mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{d.offersTitle}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {d.offers.map((p) => (
            <Rv key={p.name} className="grid bg-white sm:grid-cols-[2fr_3fr]">
              <div className="relative min-h-[240px] overflow-hidden bg-[#05080c]"><img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700" /></div>
              <div className="p-7">
                <Tag>{p.tag}</Tag>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-3 text-sm text-neutral-600">{p.desc}</p>
                <dl className="mt-5 border-t border-neutral-300">
                  {p.specs.map((x) => (
                    <div key={x.label} className="flex justify-between gap-4 border-b border-neutral-200 py-2 text-sm">
                      <dt className="text-neutral-500">{x.label}</dt>
                      <dd className="text-right font-medium">{x.val}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Rv>
          ))}
        </div>
      </div></section>

      <FilmBand video={d.film.video} poster={d.film.poster} eyebrow={d.film.eyebrow} title={d.film.title} />

      <section className="bg-white py-24"><div className="mx-auto max-w-[1360px] px-6 lg:px-14">
        <Tag>{d.controlsTag}</Tag>
        <h2 className="mb-14 mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">{d.controlsTitle}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {d.controls.map((q, i) => (
            <Rv key={q.name} className="group relative min-h-[420px] overflow-hidden bg-[#05080c] text-white">
              <img src={q.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-xs tracking-widest text-[#9db0c4]">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{q.name}</h3>
                <p className="mt-2 text-sm text-neutral-300">{q.desc}</p>
              </div>
            </Rv>
          ))}
        </div>
      </div></section>

      <section className="bg-neutral-100 py-24"><div className="mx-auto max-w-[1360px] px-6 lg:px-14">
        <Tag>{d.galleryTag}</Tag>
        <h2 className="mb-14 mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">{d.galleryTitle}</h2>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-2 md:auto-rows-[240px] md:grid-cols-4">
          {d.gallery.map((g, i) => (
            <div key={g.src} className={`group relative overflow-hidden bg-[#05080c] ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10 text-xs text-white">{g.alt}</span>
            </div>
          ))}
        </div>
      </div></section>

      <section className="bg-[#05080c] py-16 text-white"><div className="mx-auto max-w-[1360px] px-6 lg:px-14">
        <Tag dark>{d.standardsTag}</Tag>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {d.standards.map((c) => (
            <div key={c.code} className="border-t border-white/30 pt-4"><b className="text-xl font-semibold">{c.code}</b><p className="mt-1 text-sm text-neutral-400">{c.label}</p></div>
          ))}
        </div>
      </div></section>

      <section className="bg-white py-24"><div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-8 px-6 lg:px-14">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">{d.ctaTitle}</h2>
        <Link href="/contact" className="bg-black px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-neutral-700">{d.ctaLabel}</Link>
      </div></section>
    </>
  )
}
