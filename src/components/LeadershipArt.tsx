// Decorative artwork for the Direction page, drawn from USH's own world:
// topographic contours (resources and terrain), a radar sweep (Fractalysium intelligence),
// a delivery route (operations and logistics) and an armour hex mesh (Fortress Defense).
// Everything is SVG/CSS, seeded (same output on server and browser) and hidden from screen readers.

export function ArtStyles() {
  return (
    <style>{`
@keyframes la-sweep{to{transform:rotate(360deg)}}
@keyframes la-blip{0%,100%{opacity:.15;transform:scale(.8)}50%{opacity:1;transform:scale(1.25)}}
@keyframes la-route{to{stroke-dashoffset:-48}}
@keyframes la-node{0%{r:3;opacity:.9}100%{r:11;opacity:0}}
@keyframes la-shimmer{from{transform:translateX(-60%)}to{transform:translateX(160%)}}
@keyframes la-scan{from{left:0}to{left:100%}}
.la-sweep{animation:la-sweep 7s linear infinite;transform-origin:50% 50%}
.la-blip{animation:la-blip 3.2s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
.la-route{animation:la-route 2.4s linear infinite}
.la-node{animation:la-node 2.6s ease-out infinite}
.la-shimmer{animation:la-shimmer 5.5s ease-in-out infinite}
.la-scan{animation:la-scan 7s ease-in-out infinite alternate}
@media (prefers-reduced-motion:reduce){.la-sweep,.la-blip,.la-route,.la-node,.la-shimmer,.la-scan{animation:none!important}}
`}</style>
  )
}

function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Center = { x: number; y: number; rings: number; r0: number; step: number }

/** Topographic contour lines: nested, slightly irregular rings around a few summits. */
export function Contours({ seed, centers, viewBox = '0 0 1000 300', className = '' }: { seed: number; centers: Center[]; viewBox?: string; className?: string }) {
  const r = rng(seed)
  const N = 72
  const paths: string[] = []
  centers.forEach((c) => {
    const p1 = r() * 6.28, p2 = r() * 6.28, p3 = r() * 6.28
    for (let i = 0; i < c.rings; i++) {
      const base = c.r0 + i * c.step
      const pts: string[] = []
      for (let j = 0; j < N; j++) {
        const th = (j / N) * Math.PI * 2
        const rad = base * (1 + 0.1 * Math.sin(2 * th + p1 + i * 0.28) + 0.07 * Math.sin(3 * th + p2 - i * 0.2) + 0.04 * Math.sin(5 * th + p3))
        pts.push(`${(c.x + rad * Math.cos(th)).toFixed(1)} ${(c.y + rad * Math.sin(th) * 0.78).toFixed(1)}`)
      }
      paths.push(`M${pts.join('L')}Z`)
    }
  })
  return (
    <svg aria-hidden="true" viewBox={viewBox} preserveAspectRatio="xMidYMid slice" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}>
      {paths.map((d, i) => <path key={i} d={d} fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />)}
    </svg>
  )
}

const label = 'absolute left-3 top-3 font-mono text-[9px] uppercase tracking-[0.22em] text-[#9db0c4]/80'

/** Intelligence / Fractalysium: rings, crosshair, rotating sweep and blinking contacts. */
export function RadarBand() {
  return (
    <div aria-hidden="true" className="relative h-32 overflow-hidden bg-[#05080c] text-[#2b4f9c] transition-colors duration-500 group-hover:text-[#9db0c4]">
      <svg viewBox="0 0 400 128" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <g transform="translate(300 70)" fill="none" stroke="currentColor" strokeOpacity=".55">
          {[18, 38, 58, 78, 98].map((rr) => <circle key={rr} r={rr} />)}
          <path d="M-110 0H110M0 -80V80" strokeOpacity=".35" />
        </g>
        <g fill="#fff">
          <circle className="la-blip" cx="262" cy="46" r="2.2" />
          <circle className="la-blip" cx="338" cy="92" r="2.2" style={{ animationDelay: '1.1s' }} />
          <circle className="la-blip" cx="318" cy="30" r="2.2" style={{ animationDelay: '2.1s' }} />
        </g>
      </svg>
      <div className="la-sweep absolute right-[calc(75%-300px)] top-1/2 -mt-[120px] h-[240px] w-[240px] rounded-full opacity-70"
        style={{ right: 'calc(100% * 0.25 - 120px)', background: 'conic-gradient(from 0deg, transparent 0deg 290deg, rgba(43,79,156,.65) 360deg)', maskImage: 'radial-gradient(circle, #000 0 98px, transparent 100px)', WebkitMaskImage: 'radial-gradient(circle, #000 0 98px, transparent 100px)' }} />
      <span className={label}>Renseignement · 48.85°N 2.35°E</span>
    </div>
  )
}

/** Operations / logistics: a delivery route across contour lines, with pulsing waypoints. */
export function RouteBand() {
  return (
    <div aria-hidden="true" className="relative h-32 overflow-hidden bg-[#05080c] text-[#2b4f9c] transition-colors duration-500 group-hover:text-[#9db0c4]">
      <Contours seed={5} viewBox="0 0 400 128" className="opacity-35" centers={[{ x: 80, y: 40, rings: 6, r0: 14, step: 13 }, { x: 330, y: 100, rings: 6, r0: 12, step: 12 }]} />
      <svg viewBox="0 0 400 128" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <path d="M-10 104 C 60 104, 70 62, 140 66 S 230 100, 280 58 S 360 30, 410 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="la-route" />
        {[[140, 66], [280, 58], [372, 34]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill="#fff" />
            <circle className="la-node" cx={x} cy={y} r="3" fill="none" stroke="#fff" strokeWidth="1" style={{ animationDelay: `${i * 0.8}s` }} />
          </g>
        ))}
      </svg>
      <span className={label}>Corridors · Livraison</span>
    </div>
  )
}

/** Defence / Fortress: ballistic armour hex mesh with a slow light passing across it. */
export function HexBand() {
  return (
    <div aria-hidden="true" className="relative h-32 overflow-hidden bg-[#05080c] text-[#2b4f9c] transition-colors duration-500 group-hover:text-[#9db0c4]">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="la-hex" width="28" height="48.5" patternUnits="userSpaceOnUse" patternTransform="scale(1.1)">
            <path d="M14 0 L28 8.08 V24.25 L14 32.33 L0 24.25 V8.08 Z M14 32.33 V48.5 M0 24.25 L-0 40.4 M28 24.25 V40.4" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <linearGradient id="la-lite" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#9db0c4" stopOpacity="0" />
            <stop offset=".5" stopColor="#ffffff" stopOpacity=".55" />
            <stop offset="1" stopColor="#9db0c4" stopOpacity="0" />
          </linearGradient>
          <mask id="la-hexmask"><rect width="100%" height="100%" fill="url(#la-hex)" /></mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#la-hex)" opacity=".7" />
        <g mask="url(#la-hexmask)">
          <rect className="la-shimmer" x="0" y="0" width="45%" height="100%" fill="url(#la-lite)" />
        </g>
      </svg>
      <span className={label}>Protection balistique</span>
    </div>
  )
}

/** Graduated ruler with a slow scanning line and the Paris coordinates, for the Chairman. */
export function RulerStrip() {
  return (
    <div aria-hidden="true" className="relative h-[68px] overflow-hidden bg-[#05080c]">
      <div className="absolute inset-x-0 top-0 h-3 opacity-80" style={{ backgroundImage: 'repeating-linear-gradient(90deg,#2b4f9c 0 1px,transparent 1px 8px)' }} />
      <div className="absolute inset-x-0 top-0 h-5 opacity-80" style={{ backgroundImage: 'repeating-linear-gradient(90deg,#9db0c4 0 1px,transparent 1px 40px)' }} />
      <div className="la-scan absolute top-0 h-full w-px bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
      <p className="absolute bottom-2 left-3 font-mono text-[9px] uppercase tracking-[0.22em] text-[#9db0c4]/80">Paris · Siège · 48°51′N 2°21′E</p>
    </div>
  )
}
