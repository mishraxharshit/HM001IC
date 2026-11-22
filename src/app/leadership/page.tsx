import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero, { wrap } from '@/components/PageHero'
import { CHAIRMAN, EXECUTIVES, DIRECTORS, ADVISORS } from '@/lib/leadership'
import { ArtStyles, Contours, RadarBand, RouteBand, HexBand, RulerStrip } from '@/components/LeadershipArt'

export const metadata: Metadata = {
  title: 'Direction | USH Industries',
  description: 'L’équipe de direction et le comité consultatif responsables d’USH Industries.',
}

function Portrait({ src, name, ratio = 'aspect-[4/5]' }: { src: string; name: string; ratio?: string }) {
  return (
    <div className={`relative overflow-hidden bg-neutral-200 ${ratio}`}>
      <img src={src} alt={`Portrait de ${name}`} loading="lazy"
        className="h-full w-full object-cover object-[50%_25%] contrast-[1.05] transition duration-700" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
    </div>
  )
}

/** Tier heading: heavy rule, number, label and head count. */
function TierHead({ n, label, count }: { n: string; label: string; count: string }) {
  return (
    <div className="flex items-end justify-between gap-6 border-t-2 border-[#05080c] pt-5">
      <div className="flex items-baseline gap-4">
        <span className="text-sm font-bold tracking-[0.25em] text-[#2b4f9c]">{n}</span>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{label}</h2>
      </div>
      <span className="shrink-0 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">{count}</span>
    </div>
  )
}

export default function LeadershipPage() {
  const tiers = [
    { n: '01', label: 'Présidence', count: 1 },
    { n: '02', label: 'Direction exécutive', count: EXECUTIVES.length },
    { n: '03', label: 'Directions', count: DIRECTORS.length },
    { n: '04', label: 'Comité consultatif', count: ADVISORS.length },
  ]

  return (
    <div className="bg-white text-[#05080c]">
      <ArtStyles />
      <PageHero
        eyebrow="Direction"
        title={<>Les responsables <span className="text-[#9db0c4]">du Groupe.</span></>}
        intro="Des dirigeants expérimentés issus de la défense, du renseignement, de la technologie et des ressources stratégiques, responsables de chaque programme livré par USH."
        video="/media/helmet.mp4"
        poster="/media/helmet.jpg"
      />

      {/* Chain of command */}
      <section aria-label="Chaîne de commandement" className="relative overflow-hidden bg-[#05080c] text-white">
        <Contours seed={3} className="text-[#2b4f9c]/45" centers={[{ x: 150, y: 150, rings: 9, r0: 20, step: 22 }, { x: 560, y: 70, rings: 7, r0: 24, step: 26 }, { x: 900, y: 230, rings: 9, r0: 18, step: 24 }]} />
        <div className={`${wrap} relative py-12 md:py-14`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9db0c4]">Chaîne de commandement</p>
          <ol className="mt-8 grid grid-cols-2 md:grid-cols-4">
            {tiers.map((t, i) => (
              <li key={t.n} className="relative py-6 pr-4 md:border-l md:border-white/15 md:px-8 md:first:border-l-0 md:first:pl-0">
                <span className="text-xs font-bold tracking-[0.25em] text-[#2b4f9c]">{t.n}</span>
                <p className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">{String(t.count).padStart(2, '0')}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">{t.label}</p>
                {i < tiers.length - 1 && <span aria-hidden="true" className="absolute right-4 top-6 hidden text-neutral-600 md:block">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Chairman */}
      <section className="py-24 md:py-32">
        <div className={wrap}>
          <TierHead n="01" label="Présidence" count="Président et fondateur" />
          <div className="group mt-12 grid items-start gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
            <div className="w-full max-w-[320px] pl-[10px] pt-[10px]">
              <div className="outline outline-1 outline-offset-[10px] outline-[#2b4f9c]"><Portrait src={CHAIRMAN.image} name={CHAIRMAN.name} /></div>
              <div className="mt-7"><RulerStrip /></div>
            </div>
            <div>
              <h2 className="text-5xl font-semibold tracking-tight">{CHAIRMAN.name}</h2>
              <blockquote className="mt-8 border-l-2 border-[#2b4f9c] pl-6 text-xl font-medium leading-snug tracking-[-0.01em] [text-wrap:balance] md:text-2xl">{CHAIRMAN.quote}</blockquote>
              <p className="mt-8 max-w-2xl leading-relaxed text-neutral-600">{CHAIRMAN.bio}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {CHAIRMAN.expertise.map((e) => <li key={e} className="border border-neutral-300 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-600">{e}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Executive team and directors */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-24 md:py-32">
        <div className={wrap}>
          <TierHead n="02" label="Direction exécutive" count={`${EXECUTIVES.length} dirigeants`} />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {EXECUTIVES.map((x, i) => (
              <li key={x.name} className="group flex flex-col border border-neutral-200 bg-white transition-colors duration-300 hover:border-[#2b4f9c]">
                {i === 0 ? <RouteBand /> : i === 1 ? <RadarBand /> : <HexBand />}
                <div className="px-7 pb-8">
                  <div className="relative z-10 -mt-14 h-40 w-32 overflow-hidden border-4 border-white bg-neutral-200 outline outline-1 outline-offset-[6px] outline-[#2b4f9c] transition-[outline-offset] duration-300 group-hover:outline-offset-[10px]">
                    <img src={x.image} alt={`Portrait de ${x.name}`} loading="lazy" className="h-full w-full object-cover object-[50%_25%]" />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">{x.name}</h3>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2b4f9c]">{x.title}</p>
                  <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t border-neutral-200 pt-5 text-sm">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Périmètre</dt>
                    <dd className="font-medium">{x.scope}</dd>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Expertise</dt>
                    <dd className="text-neutral-600">{x.expertise}</dd>
                  </dl>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-24">
            <TierHead n="03" label="Directions" count={`${DIRECTORS.length} directeurs`} />
            <ul className="mt-2">
              {DIRECTORS.map((d) => {
                const initials = d.name.split(' ').map((w) => w[0]).slice(0, 2).join('')
                return (
                  <li key={d.name} className="group grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-3 border-b border-neutral-300 py-6 transition-colors duration-300 hover:bg-white sm:px-4 md:grid-cols-[auto_1fr_auto] md:gap-x-8">
                    <div aria-hidden="true" className="flex h-14 w-14 items-center justify-center bg-[#0a1628] text-base font-semibold text-white transition-colors duration-300 group-hover:bg-[#2b4f9c]">{initials}</div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold tracking-tight">{d.name}</h3>
                      <p className="mt-1 text-sm text-neutral-600">{d.title}</p>
                    </div>
                    <span className="col-span-2 border border-neutral-300 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 md:col-span-1 md:justify-self-end">{d.scope}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="bg-neutral-50 py-24 md:py-32">
        <div className={wrap}>
          <TierHead n="04" label="Comité consultatif stratégique" count={`${ADVISORS.length} domaines`} />
          <h2 className="mt-12 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Des experts indépendants, six domaines de conseil.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">Le comité conseille la direction sur la stratégie et la gouvernance. Par mesure de sécurité opérationnelle, l’identité de ses membres reste confidentielle.</p>
          <ul className="mt-12 grid gap-px border border-neutral-200 bg-neutral-200 md:grid-cols-2 lg:grid-cols-3">
            {ADVISORS.map((a, i) => (
              <li key={a.domain} className="group flex min-w-0 flex-col bg-white p-8 transition-colors duration-300 hover:bg-[#05080c] hover:text-white md:p-10">
                <span className="text-sm font-bold tracking-[0.25em] text-[#2b4f9c] transition-colors group-hover:text-[#9db0c4]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight">{a.name ?? a.domain}</h3>
                {a.name && <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400 group-hover:text-neutral-400">{a.domain}</p>}
                <p className="mt-4 text-sm leading-relaxed text-neutral-600 transition-colors group-hover:text-neutral-300">{a.mandate}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#05080c] py-24 text-white">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-8`}>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Rejoignez notre réseau stratégique</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-400">Nous recherchons des talents en renseignement, ingénierie de défense et analyse géopolitique.</p>
          </div>
          <Link href="/careers" className="bg-white px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#05080c] transition-colors hover:bg-neutral-300">Voir les carrières</Link>
        </div>
      </section>
    </div>
  )
}
