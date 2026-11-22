'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import SmartVideo from '@/components/SmartVideo'

// Closing mark of the footer: "USH" cut out of the page like a window, with live footage behind it.
// The footage is the only movement. There is no entrance or reload animation.
// Change VIDEO to any file in /public/media (a "-m.mp4" phone version is picked up automatically).
const VIDEO = '/media/forge.mp4'
const FONT_SIZE = 100
const PAD = 1
const SUB_WORD = 'INDUSTRIES'
const SUB_COLORS = ['#2b6bd6', '#2b6bd6', '#2b6bd6', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ef4135', '#ef4135', '#ef4135'] // IND | USTR | IES
const BASELINE = FONT_SIZE * 0.8
const SUB_SIZE = 15 // "INDUSTRIES" size, in the same units as the USH letters
const SUB_CAP = SUB_SIZE * 0.74
const CAP = FONT_SIZE * 0.74 // capital letters only, so the window hugs the letters vertically

export default function FooterWordmark() {
  const ink = useRef<SVGTextElement>(null)
  const [box, setBox] = useState({ x: 0, y: BASELINE - CAP - PAD, w: 260, h: CAP + PAD * 2 + 2 })
  const [subX, setSubX] = useState<number[]>(() => SUB_WORD.split('').map((_, i) => 14 + (i * 232) / (SUB_WORD.length - 1)))

  // Measure the real ink of the letters (not their text boxes), so the window hugs "USH" exactly and
  // "INDUSTRIES" starts and ends precisely under the first and last stroke of USH.
  useLayoutEffect(() => {
    const measure = () => {
      const t = ink.current
      if (!t) return
      const ctx = document.createElement('canvas').getContext('2d')
      if (!ctx) return
      const family = getComputedStyle(t).fontFamily
      ctx.font = `900 ${FONT_SIZE}px ${family}`
      const U = ctx.measureText('U'), H = ctx.measureText('H')
      const left = t.getStartPositionOfChar(0).x - U.actualBoundingBoxLeft
      const right = t.getStartPositionOfChar(2).x + H.actualBoundingBoxRight
      if (!(right > left)) return
      setBox({ x: left - PAD, y: BASELINE - CAP - PAD, w: right - left + PAD * 2, h: CAP + PAD * 2 + 2 })

      // Place each letter of INDUSTRIES by its ink centre, evenly from the left edge to the right edge.
      ctx.font = `700 ${FONT_SIZE}px ${family}`
      const k = SUB_SIZE / FONT_SIZE
      const m = SUB_WORD.split('').map((ch) => {
        const q = ctx.measureText(ch)
        return { l: -q.actualBoundingBoxLeft * k, r: q.actualBoundingBoxRight * k }
      })
      const first = left + (m[0].r - m[0].l) / 2
      const last = right - (m[m.length - 1].r - m[m.length - 1].l) / 2
      setSubX(m.map((g, i) => first + (i * (last - first)) / (m.length - 1) - (g.l + g.r) / 2))
    }
    measure()
    if (typeof document !== 'undefined' && document.fonts?.ready) document.fonts.ready.then(measure).catch(() => {})
  }, [])

  const letterProps = {
    x: 0,
    y: BASELINE,
    fontSize: FONT_SIZE,
    fontWeight: 900,
    letterSpacing: '-0.03em',
    style: { fontFamily: 'inherit' } as const,
  }

  return (
    <div className="relative pb-6 pt-12 md:pb-10 md:pt-16">
      <div className="relative w-full overflow-hidden bg-[#05080c]" style={{ aspectRatio: `${box.w} / ${box.h}` }}>
        {/* Footage shown through the letters */}
        <SmartVideo src={VIDEO} eager={false} opacity={0.95} />

        <svg
          viewBox={`${box.x} ${box.y} ${box.w} ${box.h}`}
          className="absolute inset-0 h-full w-full select-none"
          role="img"
          aria-label="USH"
          preserveAspectRatio="none"
        >
          <defs>
            {/* White = covered, black letters = open window onto the video */}
            <mask id="ush-window" maskUnits="userSpaceOnUse" x={box.x - 4} y={box.y - 4} width={box.w + 8} height={box.h + 8}>
              <rect x={box.x - 4} y={box.y - 4} width={box.w + 8} height={box.h + 8} fill="#fff" />
              <text {...letterProps} fill="#000">USH</text>
            </mask>
          </defs>
          <rect x={box.x - 4} y={box.y - 4} width={box.w + 8} height={box.h + 8} fill="#05080c" mask="url(#ush-window)" />
          {/* Fine outline so the letters stay readable while the footage loads or on a slow connection */}
          <text ref={ink} {...letterProps} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth={0.5}>USH</text>
        </svg>
      </div>

      {/* INDUSTRIES: static, spread to the same width as USH, in the colours of the French flag */}
      <svg
        viewBox={`${box.x} 0 ${box.w} ${SUB_CAP + 2}`}
        className="mt-4 block h-auto w-full select-none md:mt-6"
        role="img"
        aria-label="Industries"
      >
        <text y={SUB_CAP + 1} fontSize={SUB_SIZE} fontWeight={700} style={{ fontFamily: 'inherit' }}>
          {SUB_WORD.split('').map((ch, i) => (
            <tspan key={i} x={subX[i]} fill={SUB_COLORS[i]}>{ch}</tspan>
          ))}
        </text>
      </svg>
    </div>
  )
}
