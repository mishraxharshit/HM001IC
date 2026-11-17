import Link from 'next/link'
import FooterWordmark from '@/components/FooterWordmark'

interface FooterLink {
  name: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const COMPANY = {
  name: 'USH Industries',
  tagline:
    'Groupe industriel européen dédié à la sécurisation des ressources stratégiques, à la protection des infrastructures critiques et au développement de systèmes de défense tactiques.',
  hq: 'Paris, France',
  email: 'contact@ushindustries.com',
}

const columns: FooterColumn[] = [
  {
    title: 'Groupe',
    links: [
      { name: 'Le Groupe USH', href: '/about' },
      { name: 'Direction', href: '/leadership' },
      { name: 'Notre vision', href: '/vision' },
      { name: 'Gouvernance', href: '/governance' },
    ],
  },
  {
    title: 'Divisions',
    links: [
      { name: 'Fortress Defense', href: '/divisions/fortress' },
      { name: 'Fractalysium Intelligence', href: '/divisions/fractalysium' },
      { name: 'Ressources stratégiques', href: '/divisions/resources' },
      { name: 'Pétrole et gaz', href: '/divisions/oil-gas' },
      { name: 'Négoce multi-matières', href: '/divisions/multi-commodities' },
    ],
  },
  {
    title: 'Secteurs',
    links: [
      { name: 'Mines et ressources', href: '/sectors/mining' },
      { name: 'Infrastructures énergétiques', href: '/sectors/energy' },
      { name: 'Logistique et corridors', href: '/sectors/logistics' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { name: 'Technologie et R&D', href: '/technology' },
      { name: 'Développement durable', href: '/sustainability' },
      { name: 'Actualités', href: '/newsroom' },
      { name: 'Carrières', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
]

const legalLinks: FooterLink[] = [
  { name: 'Confidentialité', href: '/privacy' },
  { name: 'Mentions légales', href: '/legal' },
  { name: 'Compliance', href: '/compliance' },
]

const linkClass =
  'group/link relative inline-flex items-center py-2 text-lg text-neutral-300 transition-colors hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

export default function Footer() {
  return (
    <footer className="bg-[#05080c] text-neutral-400">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-14">
        {/* Statement and call to action */}
        <div className="flex flex-col gap-10 border-b border-white/10 py-16 md:py-24 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9db0c4]">{COMPANY.name}</p>
            <p className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white [text-wrap:balance] md:text-6xl">
              Renseigner. Approvisionner. Protéger.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400">{COMPANY.tagline}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#05080c] transition-colors hover:bg-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Nous contacter <span aria-hidden>→</span>
            </Link>
            <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center justify-center px-2 py-2 text-sm text-neutral-300 underline-offset-4 hover:text-white hover:underline">
              {COMPANY.email}
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Pied de page" className="grid gap-x-10 gap-y-14 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((c, i) => (
            <div key={c.title} className="min-w-0">
              <div className="flex items-center gap-3">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">{c.title}</h2>
                <span aria-hidden className="ml-auto text-xs font-bold tracking-widest text-white/20">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <ul className="mt-6 space-y-1">
                {c.links.map((l) => (
                  <li key={l.href + l.name}>
                    <Link href={l.href} className={linkClass}>
                      <span className="relative">
                        {l.name}
                        <span aria-hidden className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover/link:scale-x-100" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-8 text-xs md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex gap-[3px]" aria-hidden><i className="h-[3px] w-5 bg-[#2b4f9c]" /><i className="h-[3px] w-5 bg-white" /><i className="h-[3px] w-5 bg-[#c4302b]" /></span>
            <span>© {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.</span>
            <span className="text-neutral-500">{COMPANY.hq}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((l) => <Link key={l.href + l.name} href={l.href} className="py-1 transition-colors hover:text-white">{l.name}</Link>)}
            <a href="#contenu" className="py-1 uppercase tracking-[0.2em] text-neutral-300 transition-colors hover:text-white">Haut de page ↑</a>
          </div>
        </div>
        <FooterWordmark />
      </div>
    </footer>
  )
}