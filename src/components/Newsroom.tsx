'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ARTICLES } from '@/lib/articles'

// Show only the 3 most recent articles on the homepage
const latestNews = ARTICLES.slice(0, 3)

export default function Newsroom() {
  return (
    <section className="py-16 md:py-24 bg-white text-black font-sans border-t-[8px] md:border-t-[12px] border-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 pb-8 border-b-4 border-black gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-neutral-400 mb-4">
              Presse et médias
            </p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] md:leading-none">
              Espace <br className="hidden md:block" /> presse
            </h2>
          </div>
          <Link 
            href="/newsroom" 
            className="w-full md:w-auto group flex items-center justify-center md:justify-start gap-4 px-8 py-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors"
          >
            Archives médias <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t md:border-l border-black">
          {latestNews.map((news, idx) => (
            <div 
              key={news.id}
              className="group border-b md:border-r border-l md:border-l-0 border-black flex flex-col"
            >
              <Link href={`/newsroom/${news.slug}`} className="flex flex-col h-full">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-neutral-200 border-b border-black">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 text-[9px] font-black uppercase tracking-widest">
                    {news.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow group-hover:bg-neutral-50 transition-colors">
                  <span className="text-[9px] md:text-[10px] font-black text-neutral-400 tracking-[0.2em] mb-3 md:mb-4 block uppercase">
                    {news.date}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black leading-[1.1] text-black uppercase tracking-tight mb-6 md:mb-8">
                    {news.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}