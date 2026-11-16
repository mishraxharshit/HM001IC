'use client'

import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'

// Component Imports
import Hero from '@/components/Hero'
import ModernSlider from '@/components/ModernSlider'
import CapabilitiesShowcase from '@/components/CapabilitiesShowcase'
import SplitScreenCarousel from '@/components/SplitScreenCarousel'
import ImpactMetrics from '@/components/ImpactMetrics'
import SectorsOverview from '@/components/SectorsOverview'
import TrustAndPartners from '@/components/TrustAndPartners'
import Newsroom from '@/components/Newsroom'

export default function Home() {
  return (
    <main className="bg-white font-sans text-black">
      {/* 1. Narrative & Vision */}
      <Hero />
      <ModernSlider />
      <CapabilitiesShowcase />
      
      {/* 2. Operational Evidence */}
      <SplitScreenCarousel />
      <ImpactMetrics />
      
      {/* 3. Global Reach */}
      <SectorsOverview />
      
      {/* 4. Trust & Intelligence Briefings */}
      <TrustAndPartners />
      <Newsroom />

      {/* 5. CAREERS: INDUSTRIAL TALENT ACQUISITION */}
      <section className="relative h-[70vh] flex items-center bg-black overflow-hidden border-t-[12px] border-black">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/photos/p6.jpg" 
            className="w-full h-full object-cover opacity-40"
            alt="Opérations de renseignement"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-4xl">
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em] mb-8 block">
              Intelligence humaine et capacité d’échelle
            </span>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.85] mb-10 tracking-tighter uppercase">
              Stabilité <br />
              <span className="text-white/30">mondiale.</span>
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl font-bold leading-tight mb-12 max-w-xl uppercase tracking-tight">
              USH développe ses divisions tactiques. Nous invitons les spécialistes attachés à l’intégrité souveraine à nous rejoindre.
            </p>
            
            <Link href="/careers" className="group inline-flex items-center gap-12 bg-white text-black px-12 py-6 text-xs font-black uppercase tracking-[0.3em] hover:bg-neutral-200 transition-all border-b-4 border-neutral-400">
              Rejoindre les opérations <ArrowRight className="w-5 h-5 group-hover:translate-x-4 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FINAL ACTION: STRATEGIC CTA */}
      <section className="py-24 md:py-32 bg-white border-t-[12px] border-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-4 border-black">
            
            {/* Image Block */}
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-[#05080c] border-b-4 lg:border-b-0 lg:border-r-4 border-black overflow-hidden">
              <img 
                src="/photos/p3.jpg" 
                className="w-full h-full object-cover"
                alt="Stratégie d’entreprise"
              />
              <div className="absolute top-0 left-0 bg-black text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest">
                Siège de division
              </div>
            </div>

            {/* Content Block */}
            <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8 md:p-16 bg-white">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-black leading-none uppercase tracking-tighter break-words">
                    Engager <br />
                    l’échange.
                  </h3>
                  <p className="text-neutral-500 text-sm font-black uppercase leading-relaxed max-w-sm tracking-tight">
                    Échangez avec notre direction, en toute confidentialité, sur la sécurité d’État et le renforcement des chaînes d’approvisionnement.
                  </p>
                </div>

                {/* Industrial Row Navigation */}
                <div className="flex flex-col border-t-2 border-black">
                  <Link href="/contact" className="flex items-center justify-between py-10 group border-b-2 border-black hover:bg-neutral-50 transition-colors">
                    <span className="text-sm font-black uppercase tracking-[0.3em] group-hover:pl-4 transition-all">Nous contacter</span>
                    <ChevronRight className="w-8 h-8 text-black" />
                  </Link>
                  
                  <Link href="/about" className="flex items-center justify-between py-10 group border-b-2 border-black hover:bg-neutral-50 transition-colors">
                    <span className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 group-hover:text-black group-hover:pl-4 transition-all">Présentation du Groupe</span>
                    <ChevronRight className="w-8 h-8 text-neutral-200 group-hover:text-black" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}