'use client'

import { useEffect, useState, useRef } from 'react'

// Counts up from 0 once the number scrolls into view. Keeps the suffix (+, %) and honours reduced-motion.
function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
  const target = parseInt(value, 10)
  const suffix = value.replace(/^\d+/, '')
  // Start at the FINAL value so the server HTML / first paint / slow JS never shows "0+".
  const [n, setN] = useState(target)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || Number.isNaN(target)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Already on screen when the page opens: just show the real number, no animation.
    const r = el.getBoundingClientRect()
    if (r.bottom > 0 && r.top < window.innerHeight) return
    if (typeof IntersectionObserver === 'undefined') return

    // Below the fold: safe to reset to 0 and count up when it scrolls into view.
    setN(0)
    let raf = 0
    let timer: ReturnType<typeof setTimeout>
    const fallback = setTimeout(() => setN(target), 8000) // never stay stuck at 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      clearTimeout(fallback)
      timer = setTimeout(() => {
        const t0 = performance.now()
        const D = 1800
        const tick = (t: number) => {
          const p = Math.min((t - t0) / D, 1)
          setN(Math.round(target * (1 - Math.pow(1 - p, 3)))) // ease-out
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      }, delay)
    }, { threshold: 0.1 })
    io.observe(el)
    return () => { io.disconnect(); clearTimeout(timer); clearTimeout(fallback); cancelAnimationFrame(raf); setN(target) }
  }, [target, delay])

  if (Number.isNaN(target)) return <>{value}</>
  return (
    <span ref={ref} className="relative block tabular-nums">
      {/* invisible final value reserves the width and stays readable for screen readers */}
      <span className="opacity-0">{value}</span>
      <span aria-hidden="true" className="absolute left-0 top-0">{n}{suffix}</span>
    </span>
  )
}

export default function IndustrialImpactMetrics() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const metrics = [
    {
      value: '15+',
      label: 'MATÉRIAUX STRATÉGIQUES',
      sublabel: 'Ressources sous gestion',
      description: 'Maîtrise de la chaîne d’approvisionnement critique en lithium, cobalt et terres rares pour les infrastructures énergétiques mondiales.'
    },
    {
      value: '50+',
      label: 'PAYS',
      sublabel: 'Empreinte mondiale du renseignement',
      description: 'Veille géopolitique continue et réduction des risques sur les principaux marchés industriels émergents.'
    },
    {
      value: '30+',
      label: 'SITES PROTÉGÉS',
      sublabel: 'Infrastructures essentielles',
      description: 'Contrôle opérationnel haute sécurité des sites d’extraction et de transformation dans le monde.'
    },
    {
      value: '100%',
      label: 'CAPITAL SOUVERAIN',
      sublabel: 'Indépendance du capital',
      description: 'Garantir l’autonomie stratégique grâce à un capital industriel entièrement indépendant, sans influence étrangère.'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white text-black font-sans border-t-8 border-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Institutional Header */}
        <div className="border-b-2 border-black pb-12 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="min-w-0 max-w-3xl">
              <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-neutral-500">
                Excellence opérationnelle
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter break-words">
                ACTIFS STRATÉGIQUES. <br />
                <span className="text-neutral-400">PRÉSENCE MONDIALE.</span>
              </h2>
            </div>
            <div className="min-w-0 max-w-md">
              <p className="text-lg font-medium leading-snug border-l-4 border-black pl-6">
                Nous appliquons les plus hauts standards de sécurité industrielle et d’intégrité des ressources sur l’ensemble de notre chaîne de valeur mondiale.
              </p>
            </div>
          </div>
        </div>

        {/* Industrial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-black">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="p-10 border-r border-b border-black hover:bg-neutral-50 transition-colors duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Metric Value */}
                <span className="text-7xl font-black tracking-tighter mb-6 block">
                  <CountUp value={metric.value} delay={index * 150} />
                </span>
                
                {/* Metric Labels */}
                <div className="mb-8">
                  <h3 className="text-xl font-black uppercase leading-none mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    {metric.sublabel}
                  </p>
                </div>

                {/* Metric Description */}
                <div className="mt-auto pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600 leading-relaxed font-medium">
                    {metric.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}