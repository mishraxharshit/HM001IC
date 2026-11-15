import type { ReactNode } from 'react'
import HeroMedia from '@/components/HeroMedia'

export const wrap = 'mx-auto max-w-[1360px] px-6 lg:px-14'

export const Eyebrow = ({ children, dark = false }: { children: ReactNode; dark?: boolean }) => (
  <p className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${dark ? 'text-[#9db0c4]' : 'text-[#2b4f9c]'}`}>{children}</p>
)

// Shared enterprise-style page hero: media backdrop, eyebrow, headline, intro and optional key figures.
export default function PageHero({
  eyebrow, title, intro, video, poster, facts,
}: {
  eyebrow: string
  title: ReactNode
  intro: string
  video?: string
  poster: string
  facts?: [string, string][]
}) {
  return (
    <section className={`relative isolate overflow-hidden bg-[#05080c] pt-40 text-white ${facts ? '' : 'pb-24'}`}>
      <HeroMedia video={video} poster={poster} dim={0.45} />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className={`relative ${wrap}`}>
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-7xl lg:text-[6rem]">{title}</h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-300">{intro}</p>
        {facts && (
          <dl className="mt-16 grid grid-cols-2 gap-x-6 border-t border-white/20 md:grid-cols-4 md:gap-x-0">
            {facts.map(([v, l], i) => (
              <div key={l} className={`py-8 ${i > 0 ? 'md:border-l md:border-white/20 md:pl-8' : ''}`}>
                <dd className="text-4xl font-semibold tracking-tight md:text-5xl">{v}</dd>
                <dt className="mt-2 text-[10px] uppercase tracking-[0.14em] text-neutral-400 sm:text-[11px] sm:tracking-[0.2em]">{l}</dt>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}
