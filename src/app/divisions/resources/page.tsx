'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import MediaHero from '@/components/MediaHero'
import FilmBand from '@/components/FilmBand'

// ── Design token  dark accent for white bg ──
const A = '#111111'

// ── Data ──
const criticalMaterials = [
  {
    name: 'Terres rares',
    abbr: 'REE',
    category: 'Minerais critiques',
    applications: ['Électronique', 'Systèmes de défense', 'Énergies renouvelables', 'Aérospatiale'],
    globalDemand: '280,000',
    demandUnit: 't / an',
    criticality: 'Extrême',
    criticalityShort: 'EXT',
    ourRole: 'Sécuriser des accords d’approvisionnement et des actifs miniers en Afrique et en Asie centrale.',
    keyElements: ['Néodyme', 'Dysprosium', 'Terbium', 'Europium', 'Yttrium'],
    projects: '3',
    projectsLabel: 'Partenariats miniers actifs',
    description: 'Essentielles à la fabrication de haute technologie, aux systèmes de défense et aux énergies renouvelables. La Chine contrôle 90 % de l’offre mondiale, ce qui crée un puissant levier géopolitique.',
    stat: '90%',
    statLabel: 'Contrôle chinois de l’offre',
  },
  {
    name: 'Lithium',
    abbr: 'Li',
    category: 'Transition énergétique',
    applications: ['Batteries de véhicules électriques', 'Stockage d’énergie', 'Céramiques', 'Pharmacie'],
    globalDemand: '500,000+',
    demandUnit: 't / an',
    criticality: 'Extrême',
    criticalityShort: 'EXT',
    ourRole: 'Structurer des projets d’extraction de lithium (saumures et roche dure) en Amérique du Sud et en Australie.',
    keyElements: ['Carbonate de lithium de qualité batterie', 'Hydroxyde de lithium'],
    projects: '2',
    projectsLabel: 'Sites d’extraction en développement',
    description: 'Pilier de la révolution du véhicule électrique et du stockage d’énergie à l’échelle des réseaux. La demande devrait tripler d’ici 2030 avec l’accélération mondiale de la transition vers l’électrique.',
    stat: '3×',
    statLabel: 'Croissance de la demande d’ici 2030',
  },
  {
    name: 'Cobalt',
    abbr: 'Co',
    category: 'Matériaux pour batteries',
    applications: ['Batteries lithium-ion', 'Superalliages', 'Catalyseurs', 'Aimants'],
    globalDemand: '170,000',
    demandUnit: 't / an',
    criticality: 'Élevée',
    criticalityShort: 'HIGH',
    ourRole: 'Approvisionnement éthique et sécurité physique des exploitations minières en RDC.',
    keyElements: ['Cobalt de qualité batterie', 'Sulfate de cobalt'],
    projects: '5',
    projectsLabel: 'Accords d’approvisionnement sécurisés',
    description: 'Critique pour les cathodes de batteries. Plus de 70 % de l’offre mondiale provient de la République démocratique du Congo, un territoire marqué par les conflits et l’instabilité.',
    stat: '70%',
    statLabel: 'Issu de la RDC, zone de conflit',
  },
  {
    name: 'Uranium',
    abbr: 'U',
    category: 'Sécurité énergétique',
    applications: ['Énergie nucléaire', 'Isotopes médicaux', 'Applications de défense'],
    globalDemand: '65,000',
    demandUnit: 't / an',
    criticality: 'Extrême',
    criticalityShort: 'EXT',
    ourRole: 'Constitution de stocks stratégiques et transport sécurisé pour les programmes nucléaires nationaux.',
    keyElements: ['Yellowcake (U₃O₈)', 'Uranium enrichi'],
    projects: 'Classified',
    projectsLabel: 'Contrats gouvernementaux',
    description: 'Essentiel à l’indépendance énergétique nucléaire. Très réglementé, stratégiquement sensible et soumis à des contrôles à l’exportation dans tous les grands pays producteurs.',
    stat: '10%',
    statLabel: 'De l’énergie mondiale d’origine nucléaire',
  },
  {
    name: 'Graphite',
    abbr: 'C',
    category: 'Matériaux industriels',
    applications: ['Anodes de batteries', 'Sidérurgie', 'Lubrifiants', 'Modérateurs nucléaires'],
    globalDemand: '1.3M',
    demandUnit: 't / an',
    criticality: 'Élevée',
    criticalityShort: 'HIGH',
    ourRole: 'Approvisionnement en graphite naturel et synthétique et partenariats de transformation en aval.',
    keyElements: ['Graphite en paillettes', 'Graphite sphérique'],
    projects: '2',
    projectsLabel: 'Sites de transformation',
    description: 'Chaque batterie de véhicule électrique requiert 50 à 100 kg de graphite. La Chine domine l’extraction comme la transformation, avec plus de 80 % de la capacité de production mondiale.',
    stat: '80%',
    statLabel: 'Domination chinoise de la transformation',
  },
  {
    name: 'Cuivre',
    abbr: 'Cu',
    category: 'Infrastructures',
    applications: ['Systèmes électriques', 'Construction', 'Énergies renouvelables', 'Véhicules électriques'],
    globalDemand: '25M',
    demandUnit: 't / an',
    criticality: 'Moyenne à élevée',
    criticalityShort: 'MED',
    ourRole: 'Partenariats miniers à grande échelle et sécurité logistique en Amérique du Sud et en Afrique centrale.',
    keyElements: ['Cuivre cathodique', 'Concentré de cuivre'],
    projects: '4',
    projectsLabel: 'Grandes mines sous protection',
    description: 'Fondamental pour l’électrification mondiale. Un déficit structurel croissant est attendu d’ici 2030 avec l’accélération des besoins des infrastructures d’énergies renouvelables.',
    stat: '2030',
    statLabel: 'Déficit d’offre projeté',
  },
]

const tradingDivisions = [
  {
    code: 'D-01',
    id: 'oil-gas',
    href: '/divisions/oil-gas',
    name: 'Pétrole et gaz',
    tag: 'Énergie · Hydrocarbures',
    description:
      'Sécuriser l’accès aux hydrocarbures pour les États et les industriels : brut, produits raffinés, GNL et gaz de pipeline, avec une exécution adossée à la logistique et à la protection physique du Groupe.',
    points: [
      'Approvisionnement en pétrole brut et produits raffinés',
      'GNL et gaz naturel : contrats à long terme et spot',
      'Stockage, affrètement et logistique maritime',
      'Sécurité des terminaux, pipelines et corridors',
    ],
    role: 'Structurer des accords d’approvisionnement directs entre producteurs et acheteurs finaux, en réduisant l’exposition aux perturbations géopolitiques.',
  },
  {
    code: 'D-02',
    id: 'multi-commodities',
    href: '/divisions/multi-commodities',
    name: 'Négoce multi-matières',
    tag: 'Négoce · Matières premières',
    description:
      'Une activité de négoce physique couvrant énergie, métaux et minerais, matières industrielles et agricoles, pensée pour offrir aux clients un guichet unique d’approvisionnement.',
    points: [
      'Négoce physique de métaux, minerais et concentrés',
      'Matières énergétiques et industrielles',
      'Financement du négoce et couverture des risques',
      'Contrôle qualité, inspection et conformité (KYC, sanctions)',
    ],
    role: 'Mettre en relation producteurs et acheteurs, structurer les flux et garantir l’exécution de bout en bout, de l’origine à la livraison.',
  },
]

const HERO_SLIDES = [
  {
    index: '01',
    tag: 'Sécurité de la chaîne d’approvisionnement',
    title: 'Sécuriser les matériaux qui font tourner le monde',
    sub: 'Les minerais critiques sont devenus des instruments de levier géopolitique. Nous sécurisons l’accès avant que l’approvisionnement ne devienne une crise.',
    image: '/media/forge.jpg',
  },
  {
    index: '02',
    tag: 'Approvisionnement piloté par le renseignement',
    title: 'Identifier les gisements avant qu’ils ne deviennent stratégiques',
    sub: 'L’IA géologique de Fractalysium révèle des actifs sous-évalués et des risques émergents dans 12 pays d’intervention.',
    image: '/media/walk.jpg',
  },
  {
    index: '03',
    tag: 'Protection physique',
    title: 'De la mine à l’industriel : sous protection',
    sub: 'Fortress Defense sécurise les sites d’extraction, les corridors de transport et les stocks stratégiques en zones à haut risque.',
    image: '/media/field.jpg',
  },
]

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? 1000 : -1000, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (d: number) => ({ zIndex: 0, x: d < 0 ? 1000 : -1000, opacity: 0 }),
}

// ── Section label shared component  black version ──
function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px w-10 bg-black" />
      <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-black/40">
        {children}
      </span>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black leading-none mb-16">
      {children}
    </h2>
  )
}

// ════════════════════════════════════════════════════════
//  HERO CAROUSEL  kept dark (full-bleed image hero)
// ════════════════════════════════════════════════════════
function HeroCarousel() {
  const [[page, direction], setPage] = useState([0, 0])
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const total = HERO_SLIDES.length
  const idx = Math.abs(page % total)

  const paginate = (d: number) => setPage(([p]) => [p + d, d])

  useEffect(() => {
    if (!isPaused) timerRef.current = setInterval(() => paginate(1), 7000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [isPaused, page])

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (!isPaused) timerRef.current = setInterval(() => paginate(1), 7000)
  }

  return (
    <section
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter" animate="center" exit="exit"
          transition={{ x: { type: 'spring', stiffness: 280, damping: 30 }, opacity: { duration: 0.5 } }}
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HERO_SLIDES[idx].image})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10 z-10" />
      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '44px 44px',
        }}
      />

      <div
        className="absolute right-0 bottom-0 z-10 font-black leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(160px, 22vw, 320px)', color: 'rgba(255,255,255,0.03)', lineHeight: 1, letterSpacing: '-0.05em' }}
      >
        {HERO_SLIDES[idx].index}
      </div>

      <div className="relative z-20 h-full flex items-center px-4 md:px-8 lg:px-24">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-white" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white">
                  {HERO_SLIDES[idx].tag}
                </span>
              </div>

              <h1 className="font-black uppercase tracking-tighter text-white leading-[0.9] mb-8"
                style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
                {HERO_SLIDES[idx].title.split(' ').map((w, i) => (
                  <span key={i} className={i % 3 === 1 ? 'text-white/30' : 'text-white'}>{w} </span>
                ))}
              </h1>

              <p className="text-white/50 font-light leading-relaxed mb-12 max-w-xl"
                style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}>
                {HERO_SLIDES[idx].sub}
              </p>

              <div className="flex flex-wrap gap-10 mb-12">
                {[
                  { val: '15+', label: 'Matériaux critiques' },
                  { val: '8', label: 'Projets miniers actifs' },
                  { val: '12', label: 'Pays d’intervention' },
                ].map((s) => (
                  <div key={s.label} className="pl-4" style={{ borderLeft: '2px solid rgba(255,255,255,0.2)' }}>
                    <div className="text-3xl font-black text-white tracking-tight">{s.val}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/30 mt-0.5">{s.label}</div>
                  </div>
                ))}


              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="px-4 md:px-8 lg:px-24 py-6 flex items-center justify-between gap-6">
          <div className="flex gap-3 items-center">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => { setPage([i, i > idx ? 1 : -1]); resetTimer() }}
                className="relative flex items-center gap-2 group"
              >
                <div className="relative h-px w-14 md:w-20 bg-white/10 overflow-hidden">
                  {i === idx && (
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: isPaused ? 0 : 7, ease: 'linear' }}
                    />
                  )}
                </div>
                <span className="text-[9px] text-white/20 group-hover:text-white/40 transition-colors hidden md:block">
                  {s.index}
                </span>
              </button>
            ))}
          </div>
          <div className="flex gap-1">
            <button onClick={() => { paginate(-1); resetTimer() }} className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/12 transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => { paginate(1); resetTimer() }} className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/12 transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════════════
//  CHALLENGE SECTION  white bg
// ════════════════════════════════════════════════════════
function ChallengeSection() {
  const challenges = [
    {
      code: 'C-01',
      title: 'Concentration de l’offre',
      body: 'La Chine contrôle 60 à 90 % de la transformation de la plupart des minerais critiques. Ces points de défaillance uniques menacent des industries entières et la sécurité nationale.',
    },
    {
      code: 'C-02',
      title: 'Armes géopolitiques',
      body: 'Les restrictions d’exportation sur les terres rares, le lithium et d’autres matériaux sont désormais des instruments actifs de guerre économique entre grandes puissances.',
    },
    {
      code: 'C-03',
      title: 'Explosion de la demande',
      body: 'Les véhicules électriques et les infrastructures d’énergies renouvelables vont tripler la demande de matériaux clés d’ici 2030. Les chaînes d’approvisionnement ne pourront pas suivre.',
    },
  ]

  return (
    <section className="bg-white py-28 overflow-hidden">
      {/* Ticker */}
      <div
        className="relative overflow-hidden mb-20 py-4"
        style={{ borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}
      >
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(2)].map((_, ri) =>
            ['TERRES RARES', 'LITHIUM', 'COBALT', 'URANIUM', 'GRAPHITE', 'COPPER', 'PÉTROLE ET GAZ', 'NÉGOCE MULTI-MATIÈRES', 'SÉCURITÉ D’APPROVISIONNEMENT', 'RÉSERVES STRATÉGIQUES'].map((item) => (
              <span key={`${ri}-${item}`} className="text-xs font-bold tracking-[0.35em] uppercase text-black/20">
                {item} <span className="text-black/30"></span>
              </span>
            ))
          )}
        </motion.div>
      </div>

      <div className="px-4 md:px-8 lg:px-24">
        <SectionLabel>Pourquoi c’est important</SectionLabel>
        <SectionTitle>
          Le défi de la <span className="text-black/15">sécurité</span> des ressources
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {challenges.map((c, i) => (
            <div
              key={c.code}
              className="py-8 px-6 md:px-8 group hover:bg-black/[0.02] transition-colors"
              style={{
                borderLeft: i === 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                borderRight: '1px solid rgba(0,0,0,0.08)',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-[10px] text-black/25 tracking-[0.3em]">{c.code}</span>
                <div className="w-6 h-6 flex items-center justify-center" style={{ border: '1px solid rgba(0,0,0,0.15)' }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                </div>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-black mb-4">{c.title}</h3>
              <p className="text-sm text-black/40 font-light leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════════════
//  APPROACH SECTION  white bg
// ════════════════════════════════════════════════════════
function ApproachSection() {
  const steps = [
    {
      num: '01',
      title: 'Approvisionnement piloté par le renseignement',
      body: 'Fractalysium identifie les gisements sous-évalués et les risques d’approvisionnement émergents avant qu’ils ne deviennent des crises. L’analyse géologique par IA, la modélisation des risques géopolitiques et la cartographie en temps réel de la chaîne d’approvisionnement offrent aux clients un avantage asymétrique.',
      points: ['Analyse géologique par IA', 'Modélisation des risques géopolitiques', 'Cartographie de la chaîne d’approvisionnement'],
      image: '/media/walk.jpg',
    },
    {
      num: '02',
      title: 'Partenariats stratégiques',
      body: 'Nous structurons des coentreprises minières, des accords d’enlèvement et des dispositifs d’approvisionnement souverains qui garantissent un accès sécurisé à long terme, et pas seulement un accès au marché spot.',
      points: ['Acquisition d’actifs miniers', 'Contrats d’approvisionnement à long terme', 'Partenariats de sites de transformation'],
      image: '/photos/p5.jpg',
    },
    {
      num: '03',
      title: 'Sécurité physique',
      body: 'Fortress Defense protège les exploitations minières, les corridors de transport et les stocks en zones à haut risque. Du site d’extraction au port, chaque maillon de la chaîne est couvert.',
      points: ['Sécurité des sites miniers', 'Protection des convois', 'Défense des stocks stratégiques'],
      image: '/photos/p4.jpg',
    },
  ]

  return (
    <section className="bg-white">
      <div className="px-4 md:px-8 lg:px-24 pt-16 md:pt-28 pb-8">
        <SectionLabel>Notre solution</SectionLabel>
        <SectionTitle>
          Notre approche <span className="text-black/15">intégrée</span>
        </SectionTitle>
      </div>

      {steps.map((step, i) => (
        <div
          key={step.num}
          className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
          style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
        >
          {/* Image */}
          <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-zinc-100 ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
            <img
              src={step.image}
              alt={step.title}
              className="absolute inset-0 w-full h-full object-cover opacity-70 hover:opacity-85 transition-opacity duration-700"
            />
            <div
              className="absolute bottom-6 right-8 font-black text-black/05 leading-none select-none pointer-events-none"
              style={{ fontSize: 'clamp(80px, 12vw, 160px)', letterSpacing: '-0.04em' }}
            >
              {step.num}
            </div>
          </div>

          {/* Text */}
          <div className={`flex flex-col justify-center px-6 md:px-10 lg:px-16 py-10 md:py-16 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] tracking-[0.3em] text-black/25">{step.num} /</span>
              <div className="h-px flex-1 max-w-[40px] bg-black" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black mb-6">
              {step.title}
            </h3>
            <p className="text-sm text-black/45 font-light leading-relaxed mb-8 max-w-md">
              {step.body}
            </p>
            <ul className="space-y-3">
              {step.points.map((pt) => (
                <li key={pt} className="flex items-center gap-4 text-xs text-black/35 font-light">
                  <div className="w-5 h-px flex-shrink-0 bg-black/30" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}

// ════════════════════════════════════════════════════════
//  TRADING DIVISIONS  white bg
// ════════════════════════════════════════════════════════
function TradingDivisionsSection() {
  return (
    <section id="divisions" className="bg-white py-16 md:py-28 px-4 md:px-8 lg:px-24" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
      <SectionLabel>Nouvelles divisions</SectionLabel>
      <SectionTitle>
        Énergie et <span className="text-black/15">négoce</span>
      </SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ borderTop: '1px solid rgba(0,0,0,0.08)', borderLeft: '1px solid rgba(0,0,0,0.08)' }}>
        {tradingDivisions.map((d) => (
          <div
            key={d.id}
            id={d.id}
            className="p-6 md:p-10 group hover:bg-zinc-50 transition-colors scroll-mt-24"
            style={{ borderRight: '1px solid rgba(0,0,0,0.08)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] tracking-[0.3em] text-black/25">{d.code}</span>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-black/40">{d.tag}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black mb-5">{d.name}</h3>
            <p className="text-sm text-black/45 font-light leading-relaxed mb-8">{d.description}</p>
            <ul className="space-y-3 mb-8">
              {d.points.map((pt) => (
                <li key={pt} className="flex items-center gap-4 text-xs text-black/40 font-light">
                  <div className="w-5 h-px shrink-0 bg-black/30" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="p-5 bg-zinc-50" style={{ borderLeft: '2px solid black' }}>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2 text-black">Notre rôle</div>
              <p className="text-sm text-black/45 font-light">{d.role}</p>
            </div>
            <Link
              href={d.href}
              className="mt-8 inline-flex items-center gap-3 bg-black px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-zinc-800 transition-colors"
            >
              Découvrir la division <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════════════
//  MATERIALS PORTFOLIO  white bg
// ════════════════════════════════════════════════════════
function MaterialsSection() {
  const [active, setActive] = useState(0)
  const m = criticalMaterials[active]

  return (
    <section id="materials" className="bg-white py-16 md:py-28 px-4 md:px-8 lg:px-24" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
      <SectionLabel>Ce que nous sécurisons</SectionLabel>
      <SectionTitle>
        Portefeuille de <span className="text-black/15">matériaux</span> critiques
      </SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left  material list */}
        <div className="lg:col-span-4">
          <div className="mb-3 grid grid-cols-3 px-4">
            <span className="text-[9px] text-black/25 tracking-[0.3em] uppercase">Symbole</span>
            <span className="text-[9px] text-black/25 tracking-[0.3em] uppercase col-span-2">Matériau</span>
          </div>
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
            {criticalMaterials.map((mat, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-full text-left transition-all"
                style={{
                  borderBottom: '1px solid rgba(0,0,0,0.07)',
                  background: active === i ? 'rgba(0,0,0,0.03)' : 'transparent',
                }}
              >
                <div className="grid grid-cols-3 items-center px-4 py-5 gap-2">
                  <div
                    className="font-black text-lg leading-none"
                    style={{ color: active === i ? '#111' : 'rgba(0,0,0,0.2)' }}
                  >
                    {mat.abbr}
                  </div>
                  <div className="col-span-2">
                    <div className={`text-sm font-semibold leading-tight ${active === i ? 'text-black' : 'text-black/40'}`}>
                      {mat.name}
                    </div>
                    <div className="text-[10px] text-black/25 mt-0.5">{mat.category}</div>
                  </div>
                </div>
                {active === i && (
                  <motion.div layoutId="activeBar" className="h-px bg-black" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right  detail panel */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="h-full"
            >
              {/* Top strip */}
              <div className="flex items-end justify-between mb-8 pb-6" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                <div>
                  <div
                    className="font-black leading-none mb-2 text-black/08"
                    style={{ fontSize: 'clamp(56px, 8vw, 96px)', letterSpacing: '-0.03em' }}
                  >
                    {m.abbr}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">{m.name}</h3>
                  <div className="text-xs text-black/30 mt-1 uppercase tracking-[0.2em]">{m.category}</div>
                </div>
                <div className="text-right">
                  <div
                    className="text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1.5 mb-2"
                    style={{
                      color: m.criticality === 'Extrême' ? '#dc2626' : m.criticality === 'Élevée' ? '#d97706' : '#111',
                      background: m.criticality === 'Extrême' ? 'rgba(220,38,38,0.08)' : m.criticality === 'Élevée' ? 'rgba(217,119,6,0.08)' : 'rgba(0,0,0,0.05)',
                    }}
                  >
                    {m.criticality}
                  </div>
                  <div className="text-3xl font-black text-black">{m.stat}</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-black/30">{m.statLabel}</div>
                </div>
              </div>

              <p className="text-sm text-black/45 font-light leading-relaxed mb-10">{m.description}</p>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/25 mb-4">Applications</div>
                  <div className="flex flex-wrap gap-2">
                    {m.applications.map((app) => (
                      <span key={app} className="text-xs text-black/45 px-3 py-1.5 bg-zinc-100">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/25 mb-4">Formes principales</div>
                  <ul className="space-y-2">
                    {m.keyElements.map((el) => (
                      <li key={el} className="flex items-center gap-3 text-xs text-black/40 font-light">
                        <div className="w-4 h-px shrink-0 bg-black/25" />
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-3 gap-0 mb-8" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                {[
                  { val: m.globalDemand, unit: m.demandUnit, label: 'Demande mondiale' },
                  { val: m.projects, unit: '', label: m.projectsLabel },
                  { val: m.criticalityShort, unit: '', label: 'Niveau de criticité' },
                ].map((s, si) => (
                  <div
                    key={s.label}
                    className="pt-6 pr-6"
                    style={{
                      borderRight: si < 2 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                      paddingLeft: si > 0 ? '24px' : '0',
                    }}
                  >
                    <div className="text-xl md:text-2xl font-black text-black tracking-tight">
                      {s.val}
                      {s.unit && <span className="text-xs text-black/25 font-normal ml-1">{s.unit}</span>}
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-black/25 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Our Role */}
              <div className="p-6 bg-zinc-50" style={{ borderLeft: '2px solid black' }}>
                <div className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2 text-black">
                  Notre rôle
                </div>
                <p className="text-sm text-black/45 font-light">{m.ourRole}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

// ════════════════════════════════════════════════════════
//  SERVICES  white bg
// ════════════════════════════════════════════════════════
function ServicesSection() {
  const services = [
    {
      code: 'S-01',
      title: 'Structuration de la chaîne d’approvisionnement',
      desc: 'Nous concevons et mettons en œuvre des chaînes d’approvisionnement sécurisées de la mine à l’industriel, y compris la transformation, la logistique et le stockage.',
    },
    {
      code: 'S-02',
      title: 'Stocks stratégiques',
      desc: 'Constituer et gérer des réserves stratégiques publiques ou privées, avec un stockage sécurisé et une livraison en flux tendu.',
    },
    {
      code: 'S-03',
      title: 'Acquisition d’actifs miniers',
      desc: 'Identifier, évaluer et acquérir des actifs miniers dans les zones cibles, avec l’appui du renseignement Fractalysium.',
    },
    {
      code: 'S-04',
      title: 'Accords d’enlèvement',
      desc: 'Structurer des accords d’achat à long terme avec les exploitants, en apportant financement et sécurité en échange d’un approvisionnement garanti.',
    },
    {
      code: 'S-05',
      title: 'Partenariats de transformation',
      desc: 'Développer des sites de transformation ou s’associer à ceux-ci pour réduire la dépendance à la capacité de raffinage chinoise.',
    },
    {
      code: 'S-06',
      title: 'Sécurité du transport',
      desc: 'Protection Fortress Defense pour le transport de matériaux sur des corridors à haut risque et des points de passage maritimes critiques.',
    },
  ]

  return (
    <section className="bg-white py-16 md:py-28 px-4 md:px-8 lg:px-24" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
      <SectionLabel>Comment nous aidons</SectionLabel>
      <SectionTitle>
        Nos <span className="text-black/15">services</span>
      </SectionTitle>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"
        style={{ borderTop: '1px solid rgba(0,0,0,0.08)', borderLeft: '1px solid rgba(0,0,0,0.08)' }}
      >
        {services.map((s) => (
          <div
            key={s.code}
            className="p-6 md:p-8 group hover:bg-zinc-50 transition-colors"
            style={{ borderRight: '1px solid rgba(0,0,0,0.08)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-[9px] tracking-[0.3em] text-black/25">{s.code}</span>
              <div
                className="w-6 h-px transition-all group-hover:w-10 bg-black/30"
              />
            </div>
            <h3 className="text-base font-black uppercase tracking-tight text-black mb-4">{s.title}</h3>
            <p className="text-xs text-black/40 font-light leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════════════
//  CTA  white bg
// ════════════════════════════════════════════════════════
function CtaSection() {
  return (
    <section className="bg-white py-28 px-8 lg:px-24" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Passer à l’action</SectionLabel>

        <div className="mb-16">
          <p
            className="font-black uppercase tracking-tighter text-black leading-[0.88]"
            style={{ fontSize: 'clamp(24px, 6vw, 80px)', overflowWrap: 'anywhere' }}
          >
            Sécurisez{' '}
            votre <span className="text-black/15">approvisionnement</span>{' '}
            en matériaux{' '}
            <span className="text-black/15">avant</span>{' '}
            qu’il ne devienne{' '}
            <span className="text-black">une crise.</span>
          </p>
        </div>

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
          style={{ borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '40px' }}
        >
          <p className="text-black/40 font-light text-base leading-relaxed max-w-lg">
            Que vous soyez un gouvernement qui constitue des réserves stratégiques ou un industriel en quête de sécurité d’approvisionnement,
            nous pouvons structurer une solution résiliente à long terme.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase bg-black text-white hover:bg-zinc-800 transition-colors shrink-0"
          >
            Discuter de vos besoins <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════════════
//  PAGE EXPORT
// ════════════════════════════════════════════════════════
export default function ResourcesPage() {
  return (
    <>
      <MediaHero slides={HERO_SLIDES.map((h, i) => ({ index: h.index, tag: h.tag, title: h.title, sub: h.sub, video: ['/media/sup.mp4', '/media/lance.mp4', '/media/field.mp4'][i], poster: h.image }))} cta={[{ label: 'Demander un échange', href: '/contact' }, { label: 'Pétrole, gaz et négoce', href: '#divisions' }, { label: 'Matériaux critiques', href: '#materials' }]} />
      <ChallengeSection />
      <ApproachSection />
      <FilmBand video="/media/forge.mp4" poster="/media/forge.jpg" eyebrow="Transformation" title="Du minerai à la spécification." />
      <TradingDivisionsSection />
      <MaterialsSection />
      <ServicesSection />
      <CtaSection />
    </>
  )
}