'use client'

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

/* ------------------------------------------------------------------ */
/* Types + content                                                     */
/* ------------------------------------------------------------------ */
export type HeroSlide = {
  index: string
  tag: string
  title: string
  sub: string
  colors: [string, string] // [accent, secondary] hex: wave gradient + accents
}

type Cta = { label: string; href: string }

const SLIDE_DURATION = 7000 // ms

// Har slide ka apna rang: slide badalte hi wave us rang mein beh jaata hai
const DEFAULT_SLIDES: HeroSlide[] = [
  {
    index: '01',
    tag: 'Fabrication de systèmes de défense',
    title: 'Sécuriser les ressources stratégiques.',
    sub: 'Des systèmes de défense européens souverains, conçus et fabriqués pour les environnements opérationnels les plus exigeants.',
    colors: ['#1d4ed8', '#06b6d4'], // blue → cyan
  },
  {
    index: '02',
    tag: 'Renseignement piloté par l’IA',
    title: 'Le renseignement à la vitesse des événements.',
    sub: 'Une analyse pilotée par l’IA qui transforme des signaux fragmentés en décisions exploitables par vos équipes.',
    colors: ['#6d28d9', '#ec4899'], // violet → magenta
  },
  {
    index: '03',
    tag: 'Gestion des ressources critiques',
    title: 'Protéger les infrastructures critiques.',
    sub: 'Approvisionnement, stockage et supervision sécurisés des ressources dont dépendent les nations.',
    colors: ['#c2410c', '#f59e0b'], // ember → amber
  },
  {
    index: '04',
    tag: 'Énergie et négoce de matières premières',
    title: 'L’énergie et les matières, de l’origine à la livraison.',
    sub: 'Pétrole, gaz et négoce multi-matières : des approvisionnements fiables, financés, contrôlés et protégés.',
    colors: ['#0f766e', '#22d3ee'], // teal → cyan
  },
]

const DEFAULT_CTA: Cta[] = [
  { label: 'Devenir partenaire', href: '/contact' },
  { label: 'Découvrir nos divisions', href: '/about' },
]

const hexToRgb = (hex: string): [number, number, number] => {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.replace(/./g, (c) => c + c) : h, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

/* ------------------------------------------------------------------ */
/* WaveField: layered, gradient-filled ribbons on transparent canvas   */
/* ------------------------------------------------------------------ */
function WaveField({
  colors,
  pulse,
  reducedMotion,
}: {
  colors: [string, string]
  pulse: number
  reducedMotion: boolean
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const targetRef = useRef<[number, number, number][]>([hexToRgb(colors[0]), hexToRgb(colors[1])])
  const curRef = useRef<[number, number, number][]>(targetRef.current.map((c) => [...c] as [number, number, number]))
  const changedAtRef = useRef(0)
  const drawRef = useRef<(() => void) | null>(null)

  // Naya slide: naya target colour + ek "surge" (waves upar uthte hain, phir settle)
  useEffect(() => {
    targetRef.current = [hexToRgb(colors[0]), hexToRgb(colors[1])]
    changedAtRef.current = performance.now()
    if (reducedMotion) {
      curRef.current = targetRef.current.map((c) => [...c] as [number, number, number])
      drawRef.current?.()
    }
  }, [colors, pulse, reducedMotion])

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    const ctx = canvas?.getContext('2d')
    if (!canvas || !parent || !ctx) return

    let w = 0
    let h = 0
    let raf = 0
    let running = false
    let inView = true
    let last = 0
    let time = 2

    const ptr = { x: 0.5, tx: 0.5, a: 0, ta: 0 }
    const LAYERS = 6
    const TAU = Math.PI * 2

    const resize = () => {
      const r = parent.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = r.width
      h = r.height
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const [c1, c2] = curRef.current.map((c) => c.map(Math.round))
      const since = (performance.now() - changedAtRef.current) / 1000
      const step = Math.max(5, Math.round(w / 260))

      for (let l = 0; l < LAYERS; l++) {
        const p = l / (LAYERS - 1)
        const base = h * (0.5 + p * 0.36)
        const amp = h * (0.04 + p * 0.05)

        // surge: har layer thoda late uthti hai, bell-curve mein
        const t = Math.min(1, Math.max(0, (since - l * 0.09) / 1.4))
        const lift = h * 0.14 * Math.sin(t * Math.PI) * (1 - p * 0.4)

        const phase = l * 1.3
        const path = new Path2D()
        for (let x = 0; x <= w + step; x += step) {
          const u = (x / w) * TAU
          let y =
            base -
            lift +
            amp *
              (0.6 * Math.sin(u * 0.9 + time * 0.9 + phase) +
                0.3 * Math.sin(u * 1.7 - time * 0.7 + phase * 0.6) +
                0.1 * Math.sin(u * 3.1 + time * 1.2))

          if (ptr.a > 0.01) {
            const dx = x / w - ptr.x
            y -= h * 0.035 * ptr.a * Math.exp(-(dx * dx) / 0.02) * (0.4 + p)
          }
          x === 0 ? path.moveTo(x, y) : path.lineTo(x, y)
        }

        const fill = new Path2D(path)
        fill.lineTo(w + step, h + 4)
        fill.lineTo(0, h + 4)
        fill.closePath()

        const fa = 0.06 + p * 0.2
        const g = ctx.createLinearGradient(0, 0, w, 0)
        g.addColorStop(0, `rgba(${c1[0]},${c1[1]},${c1[2]},${fa})`)
        g.addColorStop(1, `rgba(${c2[0]},${c2[1]},${c2[2]},${fa})`)
        ctx.fillStyle = g
        ctx.fill(fill)

        const sa = 0.22 + p * 0.5
        const sg = ctx.createLinearGradient(0, 0, w, 0)
        sg.addColorStop(0, `rgba(${c1[0]},${c1[1]},${c1[2]},${sa})`)
        sg.addColorStop(1, `rgba(${c2[0]},${c2[1]},${c2[2]},${sa})`)
        ctx.strokeStyle = sg
        ctx.lineWidth = 0.8 + p * 1.2
        ctx.stroke(path)
      }
    }
    drawRef.current = draw

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000 || 0.016, 0.05)
      last = now

      // smooth colour flow toward target
      const k = Math.min(1, dt * 1.8)
      for (let i = 0; i < 2; i++)
        for (let j = 0; j < 3; j++)
          curRef.current[i][j] += (targetRef.current[i][j] - curRef.current[i][j]) * k

      ptr.x += (ptr.tx - ptr.x) * Math.min(1, dt * 5)
      ptr.a += (ptr.ta - ptr.a) * Math.min(1, dt * 3)

      time += dt * 0.55
      draw()
      raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (running || reducedMotion || !inView || document.hidden) return
      running = true
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect()
      ptr.tx = (e.clientX - r.left) / r.width
      ptr.ta = 1
    }
    const onLeave = () => (ptr.ta = 0)

    resize()
    start()

    const ro = new ResizeObserver(resize)
    ro.observe(parent)
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting
      inView ? start() : stop()
    })
    io.observe(parent)
    const onVis = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVis)
    parent.addEventListener('pointermove', onMove)
    parent.addEventListener('pointerleave', onLeave)

    return () => {
      stop()
      drawRef.current = null
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      parent.removeEventListener('pointermove', onMove)
      parent.removeEventListener('pointerleave', onLeave)
    }
  }, [reducedMotion])

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 z-[1] h-full w-full" />
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export default function Hero({
  slides = DEFAULT_SLIDES,
  cta = DEFAULT_CTA,
}: {
  slides?: HeroSlide[]
  cta?: Cta[]
}) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useReducedMotion() ?? false

  const multi = slides.length > 1
  const autoplay = multi && !paused && !reducedMotion
  const s = slides[i]

  useEffect(() => {
    if (!autoplay) return
    const t = setTimeout(() => setI((v) => (v + 1) % slides.length), SLIDE_DURATION)
    return () => clearTimeout(t)
  }, [i, autoplay, slides.length])

  const go = useCallback((j: number) => setI(j), [])

  if (!s) return null

  const [accent, accent2] = s.colors
  const focus =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900'

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-white text-neutral-900"
      style={{ '--accent': accent } as CSSProperties}
      aria-roledescription="carousel"
      aria-label="Nos divisions"
    >
      {/* Blueprint grid, fades away from the top-left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 [-webkit-mask-image:radial-gradient(ellipse_at_20%_20%,black,transparent_70%)] [mask-image:radial-gradient(ellipse_at_20%_20%,black,transparent_70%)]"
      />

      {/* Soft colour atmosphere that fades in with each chapter */}
      <AnimatePresence>
        <motion.div
          key={accent}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(60% 55% at 85% 20%, ${accent}1f, transparent 70%), radial-gradient(50% 50% at 10% 100%, ${accent2}1a, transparent 70%)`,
          }}
        />
      </AnimatePresence>

      <WaveField colors={s.colors} pulse={i} reducedMotion={reducedMotion} />

      {/* Keeps text crisp where the waves pass behind it */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.6)_35%,rgba(255,255,255,0)_65%)]"
      />

      {/* Drawing marks */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-4 z-[3] hidden md:block lg:inset-8">
        <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-neutral-300" />
        <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-neutral-300" />
        <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-neutral-300" />
        <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-neutral-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 pb-40 pt-36 lg:px-14">
        <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Groupe européen de sécurité stratégique
        </p>

        <div aria-live={autoplay ? 'off' : 'polite'}>
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} sur ${slides.length}`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: accent }}>
                {s.tag}
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-[6.5rem]">
                {s.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-neutral-600 md:text-xl">{s.sub}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {cta.map((c, k) => (
            <Link
              key={c.href}
              href={c.href}
              className={`px-8 py-4 text-center text-xs font-bold uppercase tracking-widest transition-colors duration-500 ${focus} ${
                k === 0
                  ? 'bg-neutral-900 text-white hover:bg-[var(--accent)]'
                  : 'border border-neutral-900/40 bg-white/60 hover:border-[var(--accent)] hover:text-[var(--accent)]'
              }`}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Chapter navigation + progress */}
      {multi && (
        <div className="absolute inset-x-6 bottom-8 z-10 flex items-end gap-4 lg:inset-x-14">
          <div className="grid flex-1 gap-3" style={{ gridTemplateColumns: `repeat(${slides.length},1fr)` }}>
            {slides.map((x, j) => {
              const active = j === i
              return (
                <button
                  key={x.index}
                  onClick={() => go(j)}
                  aria-label={`Aller à la diapositive ${j + 1} : ${x.tag}`}
                  aria-current={active}
                  className={`relative pt-3 text-left text-[10px] font-medium uppercase tracking-[0.16em] transition-colors ${focus} ${
                    active ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  <span className="absolute left-0 right-0 top-0 h-[2px] bg-neutral-300" />
                  {active &&
                    (autoplay ? (
                      <motion.span
                        key={`p-${i}`}
                        className="absolute left-0 top-0 h-[2px]"
                        style={{ background: `linear-gradient(to right, ${accent}, ${accent2})` }}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                      />
                    ) : (
                      <span
                        className="absolute left-0 top-0 h-[2px] w-full"
                        style={{ background: `linear-gradient(to right, ${accent}, ${accent2})` }}
                      />
                    ))}
                  <span className="hidden sm:inline">{x.tag}</span>
                </button>
              )
            })}
          </div>

          {!reducedMotion && (
            <button
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Lancer le diaporama' : 'Mettre le diaporama en pause'}
              className={`flex h-8 w-8 shrink-0 items-center justify-center border border-neutral-300 bg-white/70 text-neutral-900 transition hover:bg-neutral-900 hover:text-white ${focus}`}
            >
              {paused ? (
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
                  <path d="M0 0l10 6-10 6z" />
                </svg>
              ) : (
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
                  <path d="M0 0h3.5v12H0zM6.5 0H10v12H6.5z" />
                </svg>
              )}
            </button>
          )}
        </div>
      )}
    </section>
  )
}