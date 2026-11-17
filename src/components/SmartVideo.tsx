'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Background video engineered for any connection, with no poster image.
 *  - Phones get a light "<name>-m.mp4" (falls back to "<name>.mp4" if that file is absent).
 *  - Fetched only when near the viewport (eager = above the fold); paused when far away.
 *  - Skipped on Data-Saver / 2G. A calm animated dark panel stands in, never a broken box.
 *  - Fades in only once it is really playing.
 *  - onReady() fires when playing OR after `giveUpMs` OR on error, so sliders can start
 *    their timers in sync with the footage and never stall on a slow network.
 */
export default function SmartVideo({
  src, className = '', opacity = 1, eager = true, onReady, giveUpMs = 6000,
}: { src: string; className?: string; opacity?: number; eager?: boolean; onReady?: () => void; giveUpMs?: number }) {
  const wrap = useRef<HTMLDivElement>(null)
  const vid = useRef<HTMLVideoElement>(null)
  const done = useRef(false)
  const cb = useRef(onReady)
  cb.current = onReady
  const [near, setNear] = useState(eager)
  const [allowed, setAllowed] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [failed, setFailed] = useState(false)

  const ready = () => { if (!done.current) { done.current = true; cb.current?.() } }

  useEffect(() => {
    const c = (navigator as any).connection
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || (c && (c.saveData || /(^|-)2g/.test(c.effectiveType || '')))) { setAllowed(false); ready() }
  }, [])

  useEffect(() => {
    if (eager || !wrap.current || typeof IntersectionObserver === 'undefined') { setNear(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); io.disconnect() } }, { rootMargin: '300px' })
    io.observe(wrap.current)
    return () => io.disconnect()
  }, [eager])

  // Never let a slow video hold up the page: after giveUpMs the rest of the UI carries on.
  useEffect(() => {
    if (!near) return
    const t = setTimeout(ready, giveUpMs)
    return () => clearTimeout(t)
  }, [near, giveUpMs])

  // Pause when far off-screen, resume when back.
  useEffect(() => {
    const v = vid.current, w = wrap.current
    if (!v || !w || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) v.play?.().catch(() => {}); else v.pause?.() }, { rootMargin: '100px' })
    io.observe(w)
    return () => io.disconnect()
  }, [near, allowed])

  const mobileSrc = src.replace(/\.mp4$/, '-m.mp4')
  const useVideo = allowed && near && !failed
  return (
    <div ref={wrap} aria-hidden="true" className={`absolute inset-0 overflow-hidden bg-[#05080c] ${className}`}>
      <div className="smartvideo-sheen absolute inset-0" />
      {useVideo && (
        <video
          ref={vid}
          autoPlay muted loop playsInline preload="auto"
          onPlaying={() => { setPlaying(true); ready() }}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: playing ? opacity : 0 }}
        >
          <source src={mobileSrc} type="video/mp4" media="(max-width: 767px)" />
          <source src={src} type="video/mp4" onError={() => { setFailed(true); ready() }} />
        </video>
      )}
    </div>
  )
}
