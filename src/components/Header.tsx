'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const EMAIL = 'contact@ushindustries.com'

const DIVISIONS = [
  {
    category: 'Défense et protection',
    items: [{ name: 'Fortress Defense Systems', href: '/divisions/fortress', desc: 'Protection balistique et sécurité' }],
  },
  {
    category: 'Renseignement et analyse',
    items: [{ name: 'Fractalysium Intelligence', href: '/divisions/fractalysium', desc: 'Modélisation prédictive des menaces par IA géospatiale' }],
  },
  {
    category: 'Ressources et actifs',
    items: [
      { name: 'Division Ressources stratégiques', href: '/divisions/resources', desc: 'Matériaux critiques et exploitation minière' },
      { name: 'Pétrole et gaz', href: '/divisions/oil-gas', desc: 'Approvisionnement en hydrocarbures, GNL et logistique' },
      { name: 'Négoce multi-matières', href: '/divisions/multi-commodities', desc: 'Négoce physique d’énergie, de métaux et de matières premières' },
    ],
  },
]

const LINKS = [
  { name: 'Technologie', href: '/technology' },
  { name: 'Développement durable', href: '/sustainability' },
  { name: 'Actualités', href: '/newsroom' },
]

const SECONDARY = [
  { name: 'À propos', href: '/about' },
  { name: 'Carrières', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

const Chevron = ({ open, className = '' }: { open: boolean; className?: string }) => (
  <svg aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null)
  const [divisionsOpen, setDivisionsOpen] = useState(false)
  const pathname = usePathname()
  const closeBtn = useRef<HTMLButtonElement>(null)
  const openBtn = useRef<HTMLButtonElement>(null)

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    setDivisionsOpen(false)
  }, [])

  // Close on route change
  useEffect(() => { closeMenu() }, [pathname, closeMenu])

  // Lock page scroll while the drawer is open; move focus into it; Escape closes
  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { closeMenu(); openBtn.current?.focus() }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen, closeMenu])

  // Close if the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => { if (mq.matches) closeMenu() }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [closeMenu])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Principale">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="group flex min-w-0 items-center gap-3 sm:gap-4" aria-label="Accueil USH Industries">
              <div className="relative h-10 w-8 shrink-0 transition-transform duration-200 group-hover:scale-105 sm:h-12 sm:w-10">
                <Image src="/ush.jpeg" alt="" fill className="object-contain" priority />
              </div>
              <div className="flex min-w-0 flex-col border-l border-neutral-300 py-1 pl-3 sm:pl-4">
                <div className="flex items-baseline">
                  <span className="text-xl font-bold leading-none tracking-tighter text-neutral-900 sm:text-2xl">USH</span>
                  <span className="ml-1 text-xl font-light leading-none tracking-tighter text-neutral-500 sm:text-2xl">industries</span>
                </div>
                <span className="mt-1.5 hidden text-[10px] font-bold uppercase leading-none tracking-[0.25em] text-neutral-400 sm:block">
                  Groupe de sécurité stratégique
                </span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center space-x-1 lg:flex">
              <div className="relative" onMouseEnter={() => setDesktopMenu('Divisions')} onMouseLeave={() => setDesktopMenu(null)}>
                <button className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900" aria-haspopup="true" aria-expanded={desktopMenu === 'Divisions'}>
                  Divisions
                  <Chevron open={desktopMenu === 'Divisions'} className="ml-1" />
                </button>
                {desktopMenu === 'Divisions' && (
                  <div className="absolute left-0 top-full w-screen max-w-md pt-2">
                    <div className="rounded-sm border border-neutral-200 bg-white shadow-xl">
                      <div className="space-y-6 p-6">
                        {DIVISIONS.map((section) => (
                          <div key={section.category}>
                            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-red-700">{section.category}</div>
                            <div className="space-y-2">
                              {section.items.map((item) => (
                                <Link key={item.name} href={item.href} className="group/item block p-3 transition-colors hover:bg-neutral-50">
                                  <div className="font-semibold text-neutral-900 transition-colors group-hover/item:text-red-700">{item.name}</div>
                                  <div className="mt-1 text-xs text-neutral-500">{item.desc}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} className={`px-4 py-2 text-sm font-medium transition-colors ${isActive(l.href) ? 'text-red-700' : 'text-neutral-600 hover:text-neutral-900'}`}>
                  {l.name}
                </Link>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="hidden bg-[#05080c] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-red-800 lg:block">
                Nous contacter
              </Link>
              <button
                ref={openBtn}
                onClick={() => setMenuOpen(true)}
                className="-mr-2 flex h-11 w-11 items-center justify-center text-neutral-800 transition-colors hover:bg-neutral-100 lg:hidden"
                aria-label="Ouvrir le menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h10" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu du site"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? 'visible' : 'invisible delay-300'} transition-[visibility]`}
      >
        {/* Backdrop */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#05080c] text-white shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Top bar */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5 pt-[env(safe-area-inset-top)] box-content">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9db0c4]">Menu</span>
            <button ref={closeBtn} onClick={closeMenu} className="-mr-2 flex h-11 w-11 items-center justify-center text-white transition-colors hover:bg-white/10" aria-label="Fermer le menu">
              <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable navigation */}
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
            <ul>
              <li className="border-b border-white/10">
                <button
                  onClick={() => setDivisionsOpen((v) => !v)}
                  aria-expanded={divisionsOpen}
                  aria-controls="mobile-divisions"
                  className="flex min-h-[64px] w-full items-center justify-between py-4 text-left text-2xl font-semibold tracking-tight"
                >
                  Divisions
                  <Chevron open={divisionsOpen} className="h-5 w-5 text-[#9db0c4]" />
                </button>
                <div id="mobile-divisions" className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${divisionsOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <ul className={`space-y-5 pb-5 ${divisionsOpen ? '' : 'invisible'}`}>
                      {DIVISIONS.map((section) => (
                        <li key={section.category}>
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9db0c4]">{section.category}</p>
                          {section.items.map((item) => (
                            <Link key={item.name} href={item.href} onClick={closeMenu}
                              className={`block border-l-2 py-2 pl-4 transition-colors ${isActive(item.href) ? 'border-white' : 'border-white/20 hover:border-white/60'}`}>
                              <span className="block text-base font-semibold">{item.name}</span>
                              <span className="mt-0.5 block text-sm text-neutral-400">{item.desc}</span>
                            </Link>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              {LINKS.map((l) => (
                <li key={l.href} className="border-b border-white/10">
                  <Link href={l.href} onClick={closeMenu} aria-current={isActive(l.href) ? 'page' : undefined}
                    className={`flex min-h-[64px] items-center justify-between py-4 text-2xl font-semibold tracking-tight transition-colors ${isActive(l.href) ? 'text-white' : 'text-neutral-300 hover:text-white'}`}>
                    {l.name}
                    {isActive(l.href) && <span aria-hidden="true" className="h-2 w-2 bg-[#c4302b]" />}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-8 grid grid-cols-3 gap-px border border-white/10 bg-white/10">
              {SECONDARY.map((l) => (
                <li key={l.href} className="bg-[#05080c]">
                  <Link href={l.href} onClick={closeMenu} aria-current={isActive(l.href) ? 'page' : undefined}
                    className={`flex min-h-[52px] items-center justify-center px-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-white/5 ${isActive(l.href) ? 'text-white' : 'text-neutral-400'}`}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer CTA */}
          <div className="shrink-0 border-t border-white/10 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5">
            <Link href="/contact" onClick={closeMenu}
              className="flex min-h-[52px] w-full items-center justify-center bg-white px-6 text-xs font-bold uppercase tracking-[0.25em] text-[#05080c] transition-colors hover:bg-neutral-300">
              Nous contacter
            </Link>
            <a href={`mailto:${EMAIL}`} className="mt-4 block text-center text-sm text-neutral-400 hover:text-white">{EMAIL}</a>
          </div>
        </div>
      </div>
    </>
  )
}
