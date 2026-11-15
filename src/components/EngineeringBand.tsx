'use client'
import { useId, type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'

// Full-width band with a themed, lightweight engineering animation (pure SVG) behind the title.
export type Variant = 'gears' | 'lattice' | 'flow' | 'grid' | 'radar' | 'layers'
const C = '#9db0c4'
const W = 1600
const H = 700

const gear = (teeth: number, ro: number, ri: number) => {
  const s = (2 * Math.PI) / teeth
  const pts: string[] = []
  for (let i = 0; i < teeth; i++)
    for (const [r, f] of [[ri, 0], [ro, 0.15], [ro, 0.45], [ri, 0.6]] as const) {
      const a = i * s + f * s
      pts.push(`${(r * Math.cos(a)).toFixed(1)},${(r * Math.sin(a)).toFixed(1)}`)
    }
  return pts.join(' ')
}

const Spin = ({ dur, rev, rm, children }: { dur: number; rev?: boolean; rm: boolean; children: ReactNode }) => (
  <g>
    {children}
    {!rm && <animateTransform attributeName="transform" type="rotate" from={rev ? '360' : '0'} to={rev ? '0' : '360'} dur={`${dur}s`} repeatCount="indefinite" />}
  </g>
)

/* ── gears: meshing gear train (mining / processing) ── */
function Gears({ rm }: { rm: boolean }) {
  const g = (x: number, y: number, teeth: number, ro: number, ri: number, dur: number, rev = false) => (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y})`} fill="none" stroke={C} strokeOpacity=".55" strokeWidth="1.2">
      <Spin dur={dur} rev={rev} rm={rm}>
        <polygon points={gear(teeth, ro, ri)} />
        <circle r={ri * 0.72} strokeOpacity=".35" />
        <circle r={ri * 0.2} />
        {[0, 60, 120, 180, 240, 300].map(a => <line key={a} x1={ri * 0.2} y1="0" x2={ri * 0.72} y2="0" transform={`rotate(${a})`} strokeOpacity=".35" />)}
      </Spin>
    </g>
  )
  return (
    <>
      {g(1100, 350, 24, 150, 128, 60)}
      {g(1271, 210, 12, 82, 57, 30, true)}
      {g(1286, 486, 18, 116, 92, 45, true)}
      <g stroke={C} strokeOpacity=".3" strokeDasharray="4 6"><line x1="880" y1="350" x2="1520" y2="350" /><line x1="1100" y1="110" x2="1100" y2="630" /></g>
      <text x="900" y="338" fill={C} fillOpacity=".6" fontSize="12" letterSpacing="3">Ø 300</text>
    </>
  )
}

/* ── lattice: crystal lattice with scan line (materials / technology) ── */
function Lattice({ rm, id }: { rm: boolean; id: string }) {
  const pts: { x: number; y: number; c: number; r: number }[] = []
  for (let r = 0; r < 10; r++) for (let c = 0; c < 12; c++) pts.push({ x: 650 + c * 70 + (r % 2) * 35, y: 60 + r * 62, c, r })
  const at = (c: number, r: number) => pts.find(p => p.c === c && p.r === r)
  const lines: ReactNode[] = []
  pts.forEach(p => {
    const nb = [at(p.c + 1, p.r), at(p.r % 2 === 0 ? p.c : p.c, p.r + 1), at(p.r % 2 === 0 ? p.c - 1 : p.c + 1, p.r + 1)]
    nb.forEach((q, i) => q && lines.push(<line key={`${p.c}-${p.r}-${i}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} />))
  })
  return (
    <>
      <defs><linearGradient id={`${id}s`} x1="0" x2="1"><stop offset="0" stopColor={C} stopOpacity="0" /><stop offset="1" stopColor={C} stopOpacity=".35" /></linearGradient></defs>
      <g stroke={C} strokeOpacity=".22">{lines}</g>
      {pts.map(p => <circle key={`${p.c}-${p.r}`} className="eb-pulse" cx={p.x} cy={p.y} r="3.2" fill={C} style={{ animationDelay: `${(p.c + p.r) * 0.3}s` }} />)}
      <rect x="-220" y="0" width="220" height={H} fill={`url(#${id}s)`}>
        {!rm && <animateTransform attributeName="transform" type="translate" from="0 0" to="1900 0" dur="8s" repeatCount="indefinite" />}
      </rect>
    </>
  )
}

/* ── flow: route network with moving shipments (logistics / sustainability) ── */
function Flow({ rm }: { rm: boolean }) {
  const N: [number, number][] = [[760, 520], [980, 300], [1180, 470], [1350, 230], [1480, 420], [880, 120], [1120, 110]]
  const E: [number, number][] = [[0, 1], [1, 2], [2, 3], [2, 4], [1, 5], [5, 6], [6, 3], [0, 2]]
  const d = (a: number, b: number) => {
    const [x1, y1] = N[a]; const [x2, y2] = N[b]
    const cx = (x1 + x2) / 2 - (y2 - y1) * 0.15; const cy = (y1 + y2) / 2 + (x2 - x1) * 0.15
    return `M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`
  }
  return (
    <>
      {E.map(([a, b], i) => <path key={i} d={d(a, b)} fill="none" stroke={C} strokeOpacity=".35" strokeDasharray="3 7" />)}
      {N.map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="5" fill="none" stroke={C} /><circle className="eb-pulse" cx={x} cy={y} r="14" fill="none" stroke={C} style={{ animationDelay: `${i * 0.4}s` }} /></g>)}
      {!rm && E.map(([a, b], i) => (
        <circle key={`d${i}`} r="3.5" fill="#fff"><animateMotion dur={`${5 + (i % 4)}s`} begin={`${i * 0.7}s`} repeatCount="indefinite" path={d(a, b)} /></circle>
      ))}
    </>
  )
}

/* ── grid: power network with travelling pulses (energy) ── */
function Grid({ rm }: { rm: boolean }) {
  const xs = [760, 900, 1040, 1180, 1320, 1460]
  const ys = [180, 340, 500]
  const wave = Array.from({ length: 85 }, (_, i) => `${i ? 'L' : 'M'}${700 + i * 10} ${600 + Math.sin(i / 4) * 26}`).join(' ')
  const pulse = (x1: number, y1: number, x2: number, y2: number, i: number) => (
    <line key={`${x1}${y1}${x2}${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeOpacity=".8" strokeWidth="1.6" strokeDasharray="22 900">
      {!rm && <animate attributeName="stroke-dashoffset" from="922" to="0" dur={`${4 + (i % 3)}s`} begin={`${i * 0.5}s`} repeatCount="indefinite" />}
    </line>
  )
  return (
    <>
      <g stroke={C} strokeOpacity=".3">
        {xs.map(x => <line key={x} x1={x} y1="60" x2={x} y2="560" />)}
        {ys.map(y => <line key={y} x1="700" y1={y} x2="1540" y2={y} />)}
      </g>
      {xs.flatMap((x, i) => ys.map(y => <rect key={`${x}${y}`} x={x - 5} y={y - 5} width="10" height="10" fill="#05080c" stroke={C} />))}
      {xs.map((x, i) => pulse(x, 60, x, 560, i))}
      {ys.map((y, i) => pulse(700, y, 1540, y, i + 2))}
      <path d={wave} pathLength="1" fill="none" stroke={C} strokeOpacity=".7" strokeDasharray="1" strokeDashoffset="0">
        {!rm && <animate attributeName="stroke-dashoffset" values="1;0;0;-1" keyTimes="0;.5;.8;1" dur="6s" repeatCount="indefinite" />}
      </path>
    </>
  )
}

/* ── radar: monitoring sweep (sovereignty / security) ── */
function Radar({ rm, id }: { rm: boolean; id: string }) {
  const blips: [number, number][] = [[1210, 250], [1000, 420], [1300, 470], [1130, 560], [1050, 220]]
  return (
    <>
      <defs><linearGradient id={`${id}r`} x1="0" x2="1"><stop offset="0" stopColor={C} stopOpacity=".5" /><stop offset="1" stopColor={C} stopOpacity="0" /></linearGradient></defs>
      <g transform="translate(1150 350)" fill="none" stroke={C}>
        {[60, 120, 180, 240, 300].map(r => <circle key={r} r={r} strokeOpacity=".28" />)}
        <line x1="-310" x2="310" strokeOpacity=".28" /><line y1="-310" y2="310" strokeOpacity=".28" />
        <Spin dur={9} rm={rm}><path d="M0 0 L300 0 A300 300 0 0 0 259.8 -150 Z" fill={`url(#${id}r)`} stroke="none" /><line x2="300" strokeOpacity=".8" /></Spin>
      </g>
      {blips.map(([x, y], i) => <circle key={i} className="eb-pulse" cx={x} cy={y} r="5" fill="#fff" style={{ animationDelay: `${i * 0.9}s` }} />)}
    </>
  )
}

/* ── layers: exploded armour assembly (protection) ── */
function Layers({ rm }: { rm: boolean }) {
  const fills = ['#34465c', '#4a5e77', '#3a4d66', '#243346', '#141e2b']
  return (
    <g transform="translate(980 150) scale(1.35)">
      {[4, 3, 2, 1, 0].map(i => (
        <g key={i} transform={`translate(0 ${i * 34})`}>
          <g stroke={C} strokeWidth=".8" strokeLinejoin="round">
            <polygon points="0,44 150,0 300,44 150,88" fill={fills[i]} />
            <polygon points="0,44 150,88 150,100 0,56" fill="#0c131c" />
            <polygon points="150,88 300,44 300,56 150,100" fill="#111a26" />
            {!rm && <animateTransform attributeName="transform" type="translate" values={`0 0;0 ${(i - 2) * 46};0 ${(i - 2) * 46};0 0`} keyTimes="0;0.35;0.7;1" dur="9s" repeatCount="indefinite" calcMode="spline" keySplines=".4 0 .2 1;0 0 1 1;.4 0 .2 1" />}
          </g>
        </g>
      ))}
    </g>
  )
}

export default function EngineeringBand({ variant, eyebrow, title }: { variant: Variant; eyebrow: string; title: string }) {
  const rm = !!useReducedMotion()
  const id = useId().replace(/:/g, '')
  return (
    <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden bg-[#05080c] text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs><pattern id={`${id}g`} width="80" height="80" patternUnits="userSpaceOnUse"><path d="M80 0H0V80" fill="none" stroke={C} strokeOpacity=".08" /></pattern></defs>
          <rect width={W} height={H} fill={`url(#${id}g)`} />
          {variant === 'gears' && <Gears rm={rm} />}
          {variant === 'lattice' && <Lattice rm={rm} id={id} />}
          {variant === 'flow' && <Flow rm={rm} />}
          {variant === 'grid' && <Grid rm={rm} />}
          {variant === 'radar' && <Radar rm={rm} id={id} />}
          {variant === 'layers' && <Layers rm={rm} />}
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-[#05080c]/30 to-[#05080c]/60" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 pb-16 lg:px-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9db0c4]">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-none tracking-tight md:text-6xl lg:text-8xl">{title}</h2>
      </div>
    </section>
  )
}
