import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero, { Eyebrow, wrap } from '@/components/PageHero'
import { CHAIRMAN, EXECUTIVES, DIRECTORS, ADVISORS } from '@/lib/leadership'

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

export default function LeadershipPage() {
  return (
    <div className="bg-white text-[#05080c]">
      <PageHero
        eyebrow="Direction"
        title={<>Les responsables <span className="text-[#9db0c4]">du Groupe.</span></>}
        intro="Des dirigeants expérimentés issus de la défense, du renseignement, de la technologie et des ressources stratégiques, responsables de chaque programme livré par USH."
        video="/media/helmet.mp4"
        poster="/media/helmet.jpg"
      />

      {/* Chairman */}
      <section className="py-24 md:py-32">
        <div className={wrap}>
          <Eyebrow>Président et fondateur</Eyebrow>
          <div className="group mt-10 grid items-center gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
            <div className="max-w-md"><Portrait src={CHAIRMAN.image} name={CHAIRMAN.name} /></div>
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

      {/* Executive team */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-24 md:py-32">
        <div className={wrap}>
          <Eyebrow>Équipe de direction</Eyebrow>
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {EXECUTIVES.map((x) => (
              <li key={x.name} className="group bg-white">
                <Portrait src={x.image} name={x.name} />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold tracking-tight">{x.name}</h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2b4f9c]">{x.title}</p>
                  <p className="mt-1 text-sm text-neutral-500">{x.expertise}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-20 text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">Direction</p>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {DIRECTORS.map((d) => {
              const initials = d.name.split(' ').map((w) => w[0]).slice(0, 2).join('')
              return (
                <li key={d.name} className="border border-neutral-200 bg-white p-8 transition-colors duration-300 hover:border-[#05080c]">
                  <div aria-hidden="true" className="flex h-16 w-16 items-center justify-center bg-[#0a1628] text-lg font-semibold text-white">{initials}</div>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight">{d.name}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{d.title}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Advisors */}
      <section className="bg-neutral-50 py-24 md:py-32">
        <div className={wrap}>
          <Eyebrow>Comité consultatif stratégique</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Des experts indépendants, six domaines de conseil.</h2>
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