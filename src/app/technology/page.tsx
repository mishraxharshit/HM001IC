'use client'

import PageHero from '@/components/PageHero'
import Link from 'next/link'
import FilmBand from '@/components/FilmBand'
import { wrap, Eyebrow } from '@/components/PageHero'

const TECH_PILLARS = [
  {
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'IA et analyse prédictive',
    desc: 'Notre plateforme de renseignement Fractalysium s’appuie sur l’apprentissage automatique et la modélisation géospatiale pour anticiper les menaces, les ruptures de ressources et l’instabilité géopolitique avant qu’elles ne se matérialisent.',
    tags: ['Apprentissage automatique', 'Modélisation des menaces', 'IA géospatiale'],
  },
  {
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    title: 'Systèmes de protection balistique',
    desc: 'USH Fortress conçoit des solutions de blindage de nouvelle génération pour le personnel, les véhicules et les infrastructures critiques. Notre division science des matériaux développe des stratifiés composites propriétaires testés selon les normes OTAN STANAG.',
    tags: ['Blindage composite', 'Normes OTAN', 'Protection des véhicules'],
  },
  {
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
    title: 'Cartographie des ressources critiques',
    desc: 'Des réseaux propriétaires de satellites et de capteurs au sol assurent un suivi en temps réel des exploitations minières, des corridors logistiques et des réseaux énergétiques sur plusieurs continents.',
    tags: ['Imagerie satellitaire', 'Capteurs IoT', 'Suivi en temps réel'],
  },
  {
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    title: 'Communications sécurisées',
    desc: 'Des plateformes de commandement et de contrôle chiffrées de bout en bout, conçues pour les clients souverains, permettant des échanges de données sécurisés en environnement contesté sans dépendance à des serveurs étrangers.',
    tags: ['Chiffrement de bout en bout', 'Zero Trust', 'Cloud souverain'],
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Technologies pour infrastructures énergétiques',
    desc: 'Des systèmes de gestion de réseaux intelligents et de résilience qui protègent les actifs énergétiques contre les menaces physiques et cyber, et garantissent la continuité des réseaux de production et de stockage distribués.',
    tags: ['Réseau intelligent', 'Cyber-résilience', 'Énergie distribuée'],
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Fusion du renseignement humain',
    desc: 'Intégration du renseignement de sources ouvertes (OSINT), des réseaux humains et de l’analyse des signaux dans des tableaux de bord opérationnels unifiés pour les décideurs et les commandants sur le terrain.',
    tags: ['OSINT', 'HUMINT', 'Centres de fusion'],
  },
]

const RD_PROGRAMS = [
  { code: 'USH-R01', name: 'Project IRONVEIL', status: 'Actif', desc: 'Programme de stratifié de blindage passif de nouvelle génération visant une réduction de poids de 40 % à classe de protection équivalente.' },
  { code: 'USH-R02', name: 'Project TERRASCOPE', status: 'Actif', desc: 'Fusion de renseignement satellitaire multispectral pour l’évaluation des menaces sur les corridors de ressources.' },
  { code: 'USH-R03', name: 'Project AUTONEX', status: 'En développement', desc: 'Systèmes autonomes de protection de convois logistiques pour les routes d’approvisionnement à haut risque.' },
  { code: 'USH-R04', name: 'Project GRIDLOCK', status: 'En développement', desc: 'Couche de défense cyber-physique pilotée par l’IA pour les infrastructures énergétiques critiques.' },
]

export default function TechnologyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <PageHero
      eyebrow="Technologie et R&D"
      title={<>Concevoir la <span className="text-[#9db0c4]">souveraineté</span></>}
      intro="USH Industries développe des technologies à double usage, à la croisée de la défense, du renseignement et de la sécurité des ressources, conçues pour une ère de compétition stratégique."
      video="/media/forge.mp4"
      poster="/media/forge.jpg"
    />


      {/* Capability index */}
      <section className="py-24 md:py-32">
        <div className={`${wrap} grid gap-14 lg:grid-cols-[4fr_8fr] lg:gap-20`}>
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Piliers technologiques</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Six capacités, une seule plateforme.</h2>
            <p className="mt-6 max-w-sm leading-relaxed text-neutral-600">Chaque pilier est conçu pour fonctionner seul, et gagne en puissance lorsqu’il est relié aux cinq autres.</p>
          </div>
          <ol className="border-t border-neutral-900">
            {TECH_PILLARS.map((pillar, i) => (
              <li key={pillar.title} className="group grid gap-4 border-b border-neutral-200 py-9 transition-colors duration-300 hover:bg-neutral-50 sm:grid-cols-[4rem_1fr] sm:px-4 md:py-10">
                <span className="text-sm font-bold tracking-[0.25em] text-[#2b4f9c]">{String(i + 1).padStart(2, '0')}</span>
                <div className="min-w-0">
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight transition-transform duration-300 group-hover:translate-x-1">{pillar.title}</h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">{pillar.desc}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {pillar.tags.map((tag) => (
                      <li key={tag} className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        <span aria-hidden className="h-1 w-1 bg-[#2b4f9c]" />{tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FilmBand video="/media/tra.mp4" eyebrow="Technologie et R&D" title="Conçu, puis éprouvé." />

      {/* R&D programmes */}
      <section className="bg-[#05080c] py-24 text-white md:py-32">
        <div className={wrap}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow dark>Programmes de R&D</Eyebrow>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Quatre programmes, du laboratoire au terrain.</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-400">Aperçu des projets non classifiés. Les autres programmes ne sont pas listés.</p>
          </div>
          <ul className="mt-14 grid gap-px bg-white/10 md:grid-cols-2">
            {RD_PROGRAMS.map((prog) => {
              const live = prog.status === 'Actif'
              return (
                <li key={prog.code} className="group flex min-w-0 flex-col bg-[#05080c] p-8 transition-colors duration-300 hover:bg-[#0b1220] md:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-bold tracking-[0.25em] text-[#9db0c4]">{prog.code}</span>
                    <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-300">
                      <span aria-hidden className={`h-2 w-2 rounded-full ${live ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                      {prog.status}
                    </span>
                  </div>
                  <h3 className="mt-10 text-3xl font-semibold tracking-tight">{prog.name.replace('Project ', '')}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-neutral-400">{prog.desc}</p>
                  <span aria-hidden className="mt-8 h-px w-10 bg-[#2b4f9c] transition-all duration-500 group-hover:w-24" />
                </li>
              )
            })}
          </ul>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-neutral-500">Habilitation de sécurité requise pour les programmes classifiés.</p>
        </div>
      </section>

      {/* Fractalysium */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-24 md:py-28">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[7fr_5fr] lg:gap-20`}>
          <div>
            <Eyebrow>Division Renseignement</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Propulsé par Fractalysium.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">Notre plateforme de renseignement par IA fournit une analyse géospatiale des menaces en temps réel, de la modélisation prédictive et du conseil stratégique, pour les clients souverains et les partenaires qualifiés.</p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <a href="https://fractalysium.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#05080c] px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#2b4f9c]">Visiter Fractalysium <span aria-hidden>↗</span></a>
            <Link href="/divisions/fractalysium" className="px-2 py-2 text-sm text-neutral-600 underline-offset-4 hover:text-black hover:underline">Voir la division →</Link>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="bg-[#05080c] py-24 text-white">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-8`}>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Partenariats technologiques</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-400">Programmes de co-développement, licences ou accès à des technologies souveraines : parlons-en.</p>
          </div>
          <Link href="/contact" className="bg-white px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#05080c] transition-colors hover:bg-neutral-300">Engager la discussion</Link>
        </div>
      </section>
    </div>
  )
}