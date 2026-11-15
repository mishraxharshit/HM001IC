"use client"

import { useState } from 'react'
import Link from 'next/link'
import HeroMedia from '@/components/HeroMedia'
import { ARTICLES, type Article } from '@/lib/articles'

const CATEGORIES = ['Tous', 'Défense', 'Renseignement', 'Ressources', 'Énergie', 'Logistique', 'Mines', 'Entreprise']
const wrap = 'mx-auto max-w-[1360px] px-6 lg:px-14'

const Meta = ({ a }: { a: Article }) => (
  <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
    <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#2b4f9c]" />{a.category}<span className="text-neutral-300">/</span><time>{a.date}</time>
  </p>
)

function Card({ a }: { a: Article }) {
  return (
    <Link href={`/newsroom/${a.slug}`} className="group flex flex-col border-t border-neutral-300 pt-6">
      <div className="aspect-[16/10] overflow-hidden bg-neutral-200">
        <img src={a.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <Meta a={a} />
        <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight underline-offset-4 group-hover:underline">{a.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-600">{a.excerpt}</p>
        <span className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">{a.readTime} · Lire &rarr;</span>
      </div>
    </Link>
  )
}

export default function NewsroomPage() {
  const [cat, setCat] = useState('Tous')
  const list = cat === 'Tous' ? ARTICLES : ARTICLES.filter((a) => a.category === cat)
  const lead = list.find((a) => a.featured) ?? list[0]
  const rest = list.filter((a) => a !== lead)

  return (
    <div className="bg-white text-[#05080c]">
      <section className="relative isolate overflow-hidden bg-[#05080c] pb-20 pt-40 text-white">
        <HeroMedia video="/media/forge.mp4" poster="/media/forge.jpg" dim={0.5} />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className={`relative ${wrap}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9db0c4]">Presse et actualités</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-7xl lg:text-[6rem]">Dernières <span className="text-[#9db0c4]">informations</span></h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-300">Points d’actualité opérationnels, annonces stratégiques et notes de renseignement d’USH Industries et de ses divisions.</p>
        </div>
      </section>

      <div className="sticky top-16 z-30 lg:top-20 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className={`${wrap} flex overflow-x-auto`} role="tablist" aria-label="Filtrer par division">
          {CATEGORIES.map((c) => {
            const n = c === 'Tous' ? ARTICLES.length : ARTICLES.filter((a) => a.category === c).length
            return (
              <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
                className={`shrink-0 border-b-2 px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${cat === c ? 'border-[#05080c] text-[#05080c]' : 'border-transparent text-neutral-500 hover:text-[#05080c]'}`}>
                {c} <span className="ml-1 text-neutral-400">{n}</span>
              </button>
            )
          })}
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className={wrap}>
          {lead && (
            <Link href={`/newsroom/${lead.slug}`} className="group grid gap-8 lg:grid-cols-[7fr_5fr] lg:gap-14">
              <div className="aspect-[16/10] overflow-hidden bg-neutral-200">
                <img src={lead.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center">
                <Meta a={lead} />
                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.025em] underline-offset-8 group-hover:underline md:text-5xl">{lead.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-neutral-600">{lead.excerpt}</p>
                <p className="mt-6 text-sm text-neutral-500">{lead.author} · {lead.readTime}</p>
              </div>
            </Link>
          )}
          {rest.length > 0 && <div className="mt-20 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">{rest.map((a) => <Card key={a.id} a={a} />)}</div>}
          {list.length === 0 && <p className="py-24 text-center text-neutral-500">Aucun article dans cette catégorie pour le moment.</p>}
        </div>
      </section>

      <section className="bg-[#05080c] py-24 text-white">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-8`}>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Demandes presse et médias</h2>
            <p className="mt-4 text-lg text-neutral-400">Pour les accréditations presse, les demandes d’entretien ou les déclarations officielles.</p>
          </div>
          <Link href="/contact" className="border border-white px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] transition-colors hover:bg-white hover:text-[#05080c]">Contact médias</Link>
        </div>
      </section>
    </div>
  )
}
