'use client'

import Link from 'next/link'

const sectors = [
  { id: 'mining', title: 'Mines et ressources', focus: 'Protection des actifs' },
  { id: 'energy', title: 'Infrastructures énergétiques', focus: 'Résilience des réseaux' },
  { id: 'logistics', title: 'Corridors stratégiques', focus: 'Chaîne d’approvisionnement' },
]

export default function BossSectors() {
  return (
    <section className="py-16 md:py-32 bg-white text-black font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-[10rem] font-black uppercase leading-[0.9] md:leading-[0.8] tracking-tighter">
            Impact <br /> <span className="text-neutral-200">clé.</span>
          </h2>
        </div>

        {/* The Clickable List */}
        <div className="border-t-2 border-black">
          {sectors.map((sector) => (
            <Link 
              key={sector.id}
              href={`/sectors/${sector.id}`}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-16 border-b-2 border-black transition-all duration-300 hover:bg-neutral-50"
            >
              {/* Left Side: Title */}
              <div className="flex items-center transition-transform duration-300 group-hover:translate-x-0 md:group-hover:translate-x-4">
                <h3 className="text-3xl sm:text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                  {sector.title}
                </h3>
              </div>

              {/* Right Side: Focus & Arrow */}
              <div className="flex items-center justify-between md:justify-end gap-4 md:gap-8 mt-6 md:mt-0 transition-transform duration-300 md:group-hover:-translate-x-4">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-opacity">
                  {sector.focus}
                </span>
                
                {/* Clean Box Arrow */}
                <div className="w-10 h-10 md:w-16 md:h-16 border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <svg 
                    className="w-5 h-5 md:w-6 md:h-6"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}