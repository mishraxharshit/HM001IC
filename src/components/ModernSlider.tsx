'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SmartVideo from '@/components/SmartVideo'

interface Slide {
  category: string
  title: string
  description: string
  cta: string
  ctaLink: string
  video: string
  poster: string
}

const slides: Slide[] = [
  {
    category: "Systèmes de blindage balistique",
    title: "Forger le bouclier ultime",
    description:
      "Des systèmes de protection balistique certifiés OTAN, conçus pour une mobilité maximale et une fiabilité sans faille dans les environnements à haut risque.",
    cta: "En savoir plus",
    ctaLink: "/divisions/fortress",
    video: "/media/forge.mp4",
    poster: "/media/forge.jpg",
  },
  {
    category: "Espace · Air · Eau · Terre",
    title: "Fractalysium Intelligence",
    description:
      "USH Industries développe des technologies de défense et de sécurité dans l’espace, l’air, l’eau et sur terre. Fractalysium, notre plateforme de renseignement phare, associe surveillance satellitaire en temps réel et évaluation des risques par IA pour repérer les vulnérabilités tactiques avant qu’elles ne soient exploitées.",
    cta: "Découvrir Fractalysium",
    ctaLink: "https://fractalysium.com",
    video: "/media/lancement.mp4",
    poster: "/media/walk.jpg",
  },
  {
    category: "Pétrole et gaz",
    title: "Sécuriser l’énergie des nations",
    description:
      "Pétrole brut, produits raffinés, GNL et gaz naturel : des flux d’hydrocarbures sécurisés, de la source jusqu’au terminal de livraison, avec des contreparties vérifiées et une protection physique des corridors critiques.",
    cta: "Découvrir la division",
    ctaLink: "/divisions/oil-gas",
    video: "/media/energy/aerial-refinery.mp4",
    poster: "/media/energy/aerial-refinery.jpg",
  },
  {
    category: "Négoce multi-matières",
    title: "Un guichet unique pour les matières premières",
    description:
      "Énergie, métaux, minerais et matières industrielles : un négoce physique adossé à la logistique, au financement et à la conformité, de l’origine jusqu’à la livraison.",
    cta: "Découvrir la division",
    ctaLink: "/divisions/multi-commodities",
    video: "/media/trading/molten-pour.mp4",
    poster: "/media/trading/molten-pour.jpg",
  },
]

export default function DefenseTerminalSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const current = slides[currentSlide]

  return (
    <div className="relative w-full h-[85vh] bg-black overflow-hidden font-sans border-y border-white/10">

      {/* Background Video */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
        >
          <SmartVideo key={current.video} src={current.video} opacity={0.7} />
          {/* Readability Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-24 px-8 md:px-20 lg:px-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="mb-4">
              <span className="text-neutral-400 font-bold tracking-[0.3em] uppercase text-xs">
                {current.category}
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
              {current.title}
            </h2>

            <p className="text-neutral-300 text-lg md:text-xl max-w-xl font-normal mb-10 leading-relaxed drop-shadow-md">
              {current.description}
            </p>

            <div className="flex">
              <Link
                href={current.ctaLink}
                className="px-10 py-5 bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors uppercase tracking-[0.2em] shadow-xl"
              >
                {current.cta}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 right-8 md:right-20 z-30 flex gap-2">
        <button
          onClick={prevSlide}
          aria-label="Diapositive précédente"
          className="p-4 text-white border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-black transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Diapositive suivante"
          className="p-4 text-white border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-black transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}