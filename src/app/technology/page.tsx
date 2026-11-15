'use client'

import Link from 'next/link'
import FilmBand from '@/components/FilmBand'
import HeroMedia from '@/components/HeroMedia'
import Section from '@/components/Section'

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
      <section className="isolate relative pt-32 pb-20 bg-[#05080c] overflow-hidden">
<HeroMedia video="/media/forge.mp4" poster="/media/forge.jpg" dim={0.5} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-red-700 mb-4 block">
            Technologie et R&D
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-8 tracking-tight">
            Concevoir la <span className="italic text-neutral-400">souveraineté</span>
          </h1>
          <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto">
            USH Industries développe des technologies à double usage, à la croisée de la défense, du renseignement et de la sécurité des ressources, conçues pour une ère de compétition stratégique.
          </p>
        </div>
      </section>


      {/* Technology Pillars */}
      <Section title="Piliers technologiques" subtitle="Un socle de capacités intégrées">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_PILLARS.map((pillar) => (
            <div key={pillar.title} className="group border border-neutral-100 p-8 hover:shadow-2xl hover:border-neutral-900 transition-all duration-500">
              <div className="w-14 h-14 bg-[#05080c] flex items-center justify-center mb-6 group-hover:bg-red-800 transition-colors">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pillar.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">{pillar.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">{pillar.desc}</p>
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-neutral-100 text-neutral-500 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
<FilmBand video="/media/tra.mp4" eyebrow="Technologie et R&D" title="Conçu, puis éprouvé." />
      {/* R&D Programs */}
      <Section background="dark" title="Programmes de R&D actifs" subtitle="Aperçu des projets classifiés">
        <div className="max-w-4xl mx-auto space-y-4">
          {RD_PROGRAMS.map((prog) => (
            <div key={prog.code} className="bg-neutral-800 border border-neutral-700 p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-neutral-500 transition-colors">
              <div className="shrink-0">
                <div className="text-[10px] font-black text-red-700 tracking-widest">{prog.code}</div>
                <div className="text-white font-bold mt-1">{prog.name}</div>
              </div>
              <div className="flex-1 md:border-l md:border-neutral-700 md:pl-6">
                <p className="text-neutral-400 text-sm">{prog.desc}</p>
              </div>
              <div className="shrink-0">
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 ${prog.status === 'Actif' ? 'bg-green-900 text-green-400' : 'bg-neutral-700 text-neutral-400'}`}>
                  {prog.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-neutral-600 text-xs mt-8 uppercase tracking-widest">D’autres programmes classifiés ne sont pas listés. Habilitation de sécurité requise.</p>
      </Section>

      {/* Fractalysium CTA */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] font-black text-red-700 uppercase tracking-[0.3em] block mb-4">Division Renseignement</span>
          <h2 className="text-4xl font-light text-neutral-900 mb-6">Propulsé par Fractalysium</h2>
          <p className="text-neutral-500 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Notre plateforme dédiée de renseignement par IA fournit une analyse géospatiale des menaces en temps réel, de la modélisation prédictive et du conseil stratégique, accessibles aux clients souverains et aux partenaires qualifiés.
          </p>
          <a
            href="https://fractalysium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-900 text-neutral-900 px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#05080c] hover:text-white transition-all duration-300"
          >
            Visiter Fractalysium →
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#05080c] text-center border-t border-neutral-800">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl text-white font-light mb-6 tracking-wide">Technology Partnerships</h2>
          <p className="text-neutral-500 mb-10 font-light">Interested in co-development programs, licensing, or sovereign technology access?</p>
          <Link href="/contact" className="inline-block border border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300">
            Initiate Discussion
          </Link>
        </div>
      </section>
    </div>
  )
}