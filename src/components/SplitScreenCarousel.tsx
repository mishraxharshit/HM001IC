'use client'

import { useState, useEffect, useCallback, useRef, type KeyboardEvent, type FocusEvent } from 'react'
import { motion, AnimatePresence, MotionConfig, animate, useReducedMotion } from 'framer-motion'
import SmartVideo from '@/components/SmartVideo'

const SLIDE_DURATION = 8 // seconds

interface Slide {
  video: string
  poster: string // legacy field, no longer rendered
  category: string
  title: string
  stat: string
  statLabel: string
  description: string
  accent: string // tricolour: bleu / blanc / rouge, dark background ke liye
}

const slides: Slide[] = [
  {
    video: '/media/sub.mp4',
    poster: '/media/walk.jpg',
    category: 'Impact environnemental',
    title: 'Pionniers de la valorisation durable des ressources',
    stat: '100 % zéro émission nette',
    statLabel: 'Objectif opérations 2030',
    description:
      'Nous redéfinissons le paysage minier grâce à des opérations neutres en carbone et à des projets de restauration écologique sur quatre continents.',
    accent: '#4d8dff',
  },
  {
    video: '/media/met.mp4',
    poster: '/media/forge.jpg',
    category: 'Innovation et défense',
    title: 'Solutions balistiques de nouvelle génération',
    stat: '50+ brevets',
    statLabel: 'Matériaux révolutionnaires',
    description:
      'Nos laboratoires de R&D développent une détection des menaces intégrant l’IA et des blindages renforcés à l’échelle moléculaire pour répondre aux défis de sécurité actuels.',
    accent: '#ffffff',
  },
  {
    video: '/media/sup.mp4',
    poster: '/media/field.jpg',
    category: 'Sécurité stratégique',
    title: 'Sécuriser les chaînes d’approvisionnement mondiales',
    stat: '500+ sites',
    statLabel: 'sous protection',
    description:
      'Une expertise tactique inégalée dans la protection des infrastructures critiques et des corridors de ressources stratégiques dans le monde.',
    accent: '#ff5a4d',
  },
]

const pad = (n: number) => String(n).padStart(2, '0')

/* ------------------------------------------------------------------ */
/* Stat count-up: width reserve hoti hai, isliye number badhne par     */
/* aage ka text kabhi nahi hilta.                                      */
/* ------------------------------------------------------------------ */
function Stat({ text, active, reduced }: { text: string; active: boolean; reduced: boolean }) {
  const m = text.match(/^(\D*)(\d[\d,]*)(.*)$/)
  const target = m ? parseInt(m[2].replace(/,/g, ''), 10) : 0
  const [val, setVal] = useState(target)
  const first = useRef(true)

  useEffect(() => {
    if (!m) return
    // First render: always show the real number (never "0"). Animate only on later slide changes.
    if (first.current) {
      first.current = false
      setVal(target)
      return
    }
    if (!active || reduced) {
      setVal(target)
      return
    }
    setVal(0)
    const c = animate(0, target, {
      duration: 1.5,
      delay: 0.35,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => c.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reduced, target])

  if (!m) return <>{text}</>
  return (
    <>
      {m[1]}
      <span className="relative inline-block tabular-nums">
        <span className="invisible">{target}</span>
        <span className="absolute left-0 top-0">{val}</span>
      </span>
      {m[3]}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Timecode: viewfinder HUD ka chhota "live" counter                   */
/* ------------------------------------------------------------------ */
function Timecode({ resetKey, running }: { resetKey: number; running: boolean }) {
  const [sec, setSec] = useState(0)
  useEffect(() => setSec(0), [resetKey])
  useEffect(() => {
    if (!running) return
    const t = setInterval(() => setSec((s) => Math.min(s + 1, SLIDE_DURATION)), 1000)
    return () => clearInterval(t)
  }, [running, resetKey])
  return <span className="tabular-nums">T+{pad(sec)}s</span>
}

/* ------------------------------------------------------------------ */
/* Carousel                                                            */
/* ------------------------------------------------------------------ */
// Fixed-layout split-screen: koi box slide badalne par resize/shift nahi hota.
export default function SplitScreenCarousel() {
  const [current, setCurrent] = useState(0)
  const [manualPause, setManualPause] = useState(false)
  const [hover, setHover] = useState(false)
  const [inView, setInView] = useState(true)
  const reduced = useReducedMotion() ?? false
  const sectionRef = useRef<HTMLElement>(null)
  const [canPrefetch, setCanPrefetch] = useState(false)
  const [ready, setReady] = useState(false)
  useEffect(() => { setReady(false) }, [current])

  useEffect(() => {
    const c = (navigator as any).connection
    const slow = c && (c.saveData || /2g|3g/.test(c.effectiveType || ''))
    const mobile = window.matchMedia('(max-width: 1023px)').matches
    if (slow || mobile) return
    const t = setTimeout(() => setCanPrefetch(true), 3000)
    return () => clearTimeout(t)
  }, [])

  const n = slides.length
  const next = useCallback(() => setCurrent((p) => (p + 1) % n), [n])
  const prev = useCallback(() => setCurrent((p) => (p - 1 + n) % n), [n])

  // Screen se bahar ho to autoplay + timecode ruk jaate hain
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const paused = manualPause || hover || !inView || !ready
  const autoplay = !reduced // reduced motion: auto-advance band, user khud chalaye
  const s = slides[current]
  const nextSlide = slides[(current + 1) % n]

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }
  const onBlur = (e: FocusEvent<HTMLElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) setHover(false)
  }

  const btn =
    'border border-white/30 p-3 sm:p-4 transition hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

  return (
    <MotionConfig reducedMotion="user">
      {/* progress animation hi slide advance karta hai (onAnimationEnd), isliye pause = animation pause */}
      <style>{`@keyframes ssc-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>

      <section
        ref={sectionRef}
        className="grid grid-cols-1 bg-[#05080c] text-white lg:min-h-[100svh] lg:grid-cols-[5fr_7fr]"
        aria-roledescription="carousel"
        aria-label="Divisions à la une"
        onKeyDown={onKeyDown}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={onBlur}
      >
        {/* ---------------- LEFT: text panel ---------------- */}
        <div className="relative z-10 flex min-w-0 flex-col justify-between px-6 py-14 md:px-12 lg:px-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9db0c4] tabular-nums">
            USH Industries · {pad(current + 1)} / {pad(n)}
          </p>

          {/* FIXED STAGE: sab slides ek grid cell mein stack, height constant */}
          <div className="my-12 grid grid-cols-[minmax(0,1fr)]" aria-live="off">
            {slides.map((x, j) => {
              const active = j === current
              return (
                <motion.div
                  key={x.category}
                  className="col-start-1 row-start-1"
                  initial={false}
                  animate={{ opacity: active ? 1 : 0, y: active ? 0 : j < current ? -12 : 24 }}
                  transition={{ duration: 0.6, delay: active ? 0.25 : 0, ease: 'easeOut' }}
                  style={{ pointerEvents: active ? 'auto' : 'none' }}
                  aria-hidden={!active}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${j + 1} of ${n}`}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: x.accent }}>
                    {x.category}
                  </span>
                  <h2 className="mb-8 mt-4 text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">{x.title}</h2>
                  <p className="max-w-md text-lg leading-relaxed text-neutral-300">{x.description}</p>
                  <div className="mt-10 border-t pt-6" style={{ borderColor: `${x.accent}66` }}>
                    <div className="text-4xl font-semibold tracking-tighter md:text-5xl">
                      <Stat text={x.stat} active={active} reduced={reduced} />
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-neutral-400">{x.statLabel}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-5">
            <div className="flex gap-2 sm:gap-3">
              {slides.map((x, i) => {
                const active = i === current
                return (
                  <button
                    key={x.category}
                    onClick={() => setCurrent(i)}
                    aria-label={`Aller à la diapositive ${i + 1} : ${x.category}`}
                    aria-current={active}
                    className="relative h-1 w-10 overflow-hidden sm:w-14 bg-white/20 transition-colors hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {active && (
                      <span
                        key={current}
                        className="absolute inset-0 origin-left"
                        style={{
                          background: x.accent,
                          transform: autoplay ? undefined : 'scaleX(1)',
                          animation: autoplay ? `ssc-fill ${SLIDE_DURATION}s linear forwards` : undefined,
                          animationPlayState: paused ? 'paused' : 'running',
                        }}
                        onAnimationEnd={(e) => e.animationName === 'ssc-fill' && next()}
                      />
                    )}
                  </button>
                )
              })}
            </div>

            <div className="flex gap-2">
              <button onClick={prev} aria-label="Diapositive précédente" className={btn}>
                <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {autoplay && (
                <button
                  onClick={() => setManualPause((p) => !p)}
                  aria-label={manualPause ? 'Lancer le diaporama' : 'Mettre le diaporama en pause'}
                  aria-pressed={manualPause}
                  className={btn}
                >
                  {manualPause ? (
                    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
                    </svg>
                  )}
                </button>
              )}
              <button onClick={next} aria-label="Diapositive suivante" className={btn}>
                <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ---------------- RIGHT: fixed media frame ---------------- */}
        <div
          className="relative h-[55svh] overflow-hidden bg-[#05080c] bg-cover bg-center lg:h-auto"
        >
          <AnimatePresence>
            <motion.div
              key={s.video}
              // naya footage neeche se upar "wipe" hota hai, purana uske neeche rehta hai
              initial={reduced ? { opacity: 0 } : { opacity: 1, clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
              exit={{ opacity: 0, transition: { duration: 0.2, delay: reduced ? 0 : 1.1 } }}
              transition={{ duration: reduced ? 0.6 : 1.1, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0"
            >
              <SmartVideo src={s.video} opacity={0.9} onReady={() => setReady(true)} />
            </motion.div>
          </AnimatePresence>

          {/* agla video peeche se buffer ho jaata hai: transition mein atkta nahi */}
          {/* Only after the page has settled, and never on mobile data / data-saver, so it can't slow the current video. */}
          {canPrefetch && (
            <video src={nextSlide.video} preload="auto" muted playsInline tabIndex={-1} aria-hidden="true" className="hidden" />
          )}

          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#05080c] via-transparent to-transparent lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080c]/60 via-transparent to-transparent" />

          {/* accent seam between the two panels */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-px transition-colors duration-700 lg:block"
            style={{ background: s.accent, opacity: 0.55 }}
          />

          {/* Viewfinder HUD */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-5 z-10 lg:inset-8">
            {(
              [
                'left-0 top-0 border-l border-t',
                'right-0 top-0 border-r border-t',
                'bottom-0 left-0 border-b border-l',
                'bottom-0 right-0 border-b border-r',
              ] as const
            ).map((c) => (
              <span
                key={c}
                className={`absolute h-6 w-6 transition-colors duration-700 ${c}`}
                style={{ borderColor: s.accent }}
              />
            ))}
            <div className="absolute bottom-0 left-9 right-9 flex items-end justify-between text-[10px] uppercase tracking-[0.3em] text-white/70">
              <Timecode resetKey={current} running={autoplay && !paused} />
              <span className="tabular-nums">Fig. {pad(current + 1)}</span>
            </div>
          </div>

          {/* Swipe / drag to change slide (vertical scroll still works) */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 z-20 cursor-grab active:cursor-grabbing"
            style={{ touchAction: 'pan-y' }}
            drag="x"
            dragDirectionLock
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            dragSnapToOrigin
            onDragEnd={(_, info) => {
              if (info.offset.x < -60 || info.velocity.x < -500) next()
              else if (info.offset.x > 60 || info.velocity.x > 500) prev()
            }}
          />
        </div>
      </section>
    </MotionConfig>
  )
}