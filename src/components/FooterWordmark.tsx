'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const WORD = 'USH INDUSTRIES'

// Closing signature of the footer: the name fitted to the full width, revealed letter by letter,
// with a wave of French flag colours (blue, white, red) running through it.
export default function FooterWordmark() {
  const box = useRef<HTMLDivElement>(null)
  const word = useRef<HTMLParagraphElement>(null)
  const [shown, setShown] = useState(false)
  const [size, setSize] = useState<number | null>(null)

  // Fit the word to the container width on every screen.
  useLayoutEffect(() => {
    const fit = () => {
      const b = box.current, w = word.current
      if (!b || !w) return
      const current = parseFloat(getComputedStyle(w).fontSize)
      if (!current || !w.offsetWidth) return
      const next = (current * b.clientWidth) / w.offsetWidth * 0.995
      if (Number.isFinite(next)) setSize((prev) => (prev && Math.abs(prev - next) < 0.5 ? prev : next))
    }
    fit()
    const ro = new ResizeObserver(fit)
    if (box.current) ro.observe(box.current)
    if (typeof document !== 'undefined' && document.fonts?.ready) document.fonts.ready.then(fit).catch(() => {})
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const el = box.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') { setShown(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={box} className={`fw ${shown ? 'fw-in' : ''} overflow-hidden pb-8 pt-10 md:pb-12`}>
      <p
        ref={word}
        aria-label="USH Industries"
        style={size ? { fontSize: `${size}px` } : { fontSize: '100px', visibility: 'hidden' }}
        className="inline-block select-none whitespace-nowrap font-extrabold uppercase leading-[0.9] tracking-[-0.03em]"
      >
        {WORD.split('').map((ch, i) =>
          ch === ' ' ? (
            <span key={i} aria-hidden="true" className="inline-block w-[0.3em]" />
          ) : (
            <span key={i} aria-hidden="true" className="fw-mask inline-block overflow-hidden align-bottom">
              <span className="fw-letter inline-block" style={{ ['--i' as string]: i }}>{ch}</span>
            </span>
          ),
        )}
      </p>
    </div>
  )
}
