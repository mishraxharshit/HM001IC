'use client'

import { useEffect } from 'react'
import HeroMedia from '@/components/HeroMedia'
import Link from 'next/link'

export default function FractalysiumPage() {
  useEffect(() => {
    // Auto-redirect after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = 'https://fractalysium.com/'
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative isolate min-h-screen bg-neutral-950 flex items-center justify-center px-6">
      <HeroMedia video="/media/lancement.mp4" poster="/media/walk.jpg" dim={0.45} />
      <div className="text-center max-w-2xl">
        {/* Animated dots */}
        <div className="flex justify-center gap-2 mb-12">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-red-700 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        <span className="text-[10px] font-black text-red-700 uppercase tracking-[0.4em] block mb-6">
          Division Renseignement d’USH
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-6 tracking-tight">
          Fractalysium
        </h1>

        <p className="text-neutral-500 font-light text-lg mb-4 leading-relaxed">
          Modélisation prédictive des menaces par IA géospatiale
        </p>

        <p className="text-neutral-600 text-sm mb-12">
          Redirection vers la plateforme Fractalysium dans un instant...
        </p>

        <a
          href="https://fractalysium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300"
        >
          Accéder à Fractalysium →
        </a>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <Link href="/" className="text-[11px] font-bold text-neutral-600 uppercase tracking-widest hover:text-white transition-colors">
            ← Retour à USH Industries
          </Link>
        </div>
      </div>
    </div>
  )
}