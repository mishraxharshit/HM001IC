'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export type HeroSlide = { index: string; tag: string; title: string; sub: string; video: string; poster: string }

// Chaptered cinematic hero: cycles the division's own footage.
export default function MediaHero({ slides, cta = [{ label: 'Demander un devis', href: '/contact' }] }: { slides: HeroSlide[]; cta?: { label: string; href: string }[] }) {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI(v => (v + 1) % slides.length), 7000); return () => clearInterval(t) }, [slides.length])
  const s = slides[i]
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-black text-white">
      <AnimatePresence>
        <motion.video key={s.video} src={s.video} ref={(el: HTMLVideoElement | null) => { if (el) el.play?.().catch(() => {}) }} autoPlay muted loop playsInline preload="auto"
          initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }}
          className="absolute inset-0 h-full w-full object-cover" />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/50" />
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 pb-36 pt-40 lg:px-14">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.6 }}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9db0c4]">{s.index} {s.tag}</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-[6.5rem]">{s.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-300">{s.sub}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-10 flex flex-wrap gap-4">
          {cta.map((c, k) => <Link key={c.href} href={c.href} className={k === 0 ? 'bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition hover:bg-neutral-300' : 'border border-white/50 px-8 py-4 text-xs font-bold uppercase tracking-widest transition hover:bg-white hover:text-black'}>{c.label}</Link>)}
        </div>
      </div>
      <div className="absolute inset-x-6 bottom-8 z-10 grid gap-3 lg:inset-x-14" style={{ gridTemplateColumns: `repeat(${slides.length},1fr)` }}>
        {slides.map((x, j) => (
          <button key={x.index} onClick={() => setI(j)} className={`relative pt-3 text-left text-[10px] uppercase tracking-[0.16em] ${j === i ? 'text-white' : 'text-neutral-400'}`}>
            <span className="absolute left-0 right-0 top-0 h-[2px] bg-white/25" />
            {j === i && <motion.span key={i} className="absolute left-0 top-0 h-[2px] bg-[#9db0c4]" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 7, ease: 'linear' }} />}
            <span className="hidden sm:inline">{x.index} {x.tag}</span><span className="sm:hidden">{x.index}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
