import Link from 'next/link'

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
  'inline-block py-1 text-sm text-neutral-400 hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors'

export default function Footer() {
  return (
    <footer className="bg-[#05080c] text-[#bdb9b0]">
      <div className="mx-auto max-w-[1360px] px-6 pt-20 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[5fr_repeat(4,2fr)]">
          <div>
            <p className="text-5xl font-light leading-none tracking-tight text-white lg:text-7xl">{COMPANY.name}</p>
            <p className="mt-5 max-w-sm text-sm">{COMPANY.tagline}</p>
            <p className="mt-6 text-sm">{COMPANY.hq}</p>
            <a href={`mailto:${COMPANY.email}`} className="text-sm text-white hover:underline">{COMPANY.email}</a>
          </div>
          {columns.map(c => (
            <div key={c.title}>
              <h4 className="mb-5 text-[11px] uppercase tracking-[0.24em] text-white">{c.title}</h4>
              {c.links.map(l => <Link key={l.href + l.name} href={l.href} className="block py-1.5 text-sm hover:text-white">{l.name}</Link>)}
            </div>
          ))}
        </div>
        <div className="mt-16 flex gap-[3px]" aria-hidden><i className="h-[3px] w-6 bg-[#2b4f9c]" /><i className="h-[3px] w-6 bg-white" /><i className="h-[3px] w-6 bg-[#c4302b]" /></div>
        <div className="mt-5 flex flex-wrap justify-between gap-3 border-t border-[#2a2a2a] py-6 text-xs">
          <span>© {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.</span>
          <span className="flex gap-6">{legalLinks.map(l => <Link key={l.href + l.name} href={l.href} className="hover:text-white">{l.name}</Link>)}</span>
        </div>
      </div>
    </footer>
  )
}
