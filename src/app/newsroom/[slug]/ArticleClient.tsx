'use client'

import Link from 'next/link'
import { getArticleBySlug, getRelatedArticles } from '@/lib/articles'

const CATEGORY_COLORS: Record<string, string> = {
  'Défense': 'bg-red-900 text-red-300',
  'Renseignement': 'bg-blue-900 text-blue-300',
  'Ressources': 'bg-amber-900 text-amber-300',
  'Énergie': 'bg-green-900 text-green-300',
  'Logistique': 'bg-purple-900 text-purple-300',
  'Mines': 'bg-orange-900 text-orange-300',
  'Entreprise': 'bg-neutral-700 text-neutral-300',
}

export default function ArticleClient({ slug }: { slug: string }) {
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-4">404</p>
          <h1 className="text-4xl font-light text-neutral-900 mb-6">Article introuvable</h1>
          <Link href="/newsroom" className="inline-block bg-[#05080c] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-colors">
            Retour aux actualités
          </Link>
        </div>
      </div>
    )
  }

  const related = getRelatedArticles(article, 3)

  return (
    <div className="bg-white">

      {/* Hero Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-[#05080c]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-[#05080c]/40 to-transparent" />

        {/* Back link */}
        <div className="absolute top-28 left-0 right-0 max-w-4xl mx-auto px-6">
          <Link href="/newsroom" className="inline-flex items-center gap-2 text-[11px] font-black text-neutral-400 uppercase tracking-widest hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Newsroom
          </Link>
        </div>

        {/* Title block */}
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 pb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 ${CATEGORY_COLORS[article.category]}`}>
              {article.category}
            </span>
            <span className="text-[11px] text-neutral-400 font-medium uppercase tracking-widest">{article.date}</span>
            <span className="text-[11px] text-neutral-500 uppercase tracking-widest">{article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Author */}
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-neutral-100">
          <div className="w-12 h-12 bg-[#05080c] flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold">{article.author.slice(0, 2)}</span>
          </div>
          <div>
            <p className="font-bold text-neutral-900 text-sm">{article.author}</p>
            <p className="text-[11px] text-neutral-400 uppercase tracking-widest">{article.authorRole} · USH Industries</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-[10px] text-neutral-400 uppercase tracking-widest">{article.date}</p>
          </div>
        </div>

        {/* Lead excerpt */}
        <p className="text-xl text-neutral-600 font-light leading-relaxed mb-12 border-l-4 border-neutral-900 pl-6">
          {article.excerpt}
        </p>

        {/* Body sections */}
        <div className="space-y-8">
          {article.body.map((section, idx) => {
            if (section.type === 'paragraph') {
              return (
                <p key={idx} className="text-neutral-700 leading-relaxed text-base">
                  {section.text}
                </p>
              )
            }
            if (section.type === 'heading') {
              return (
                <h2 key={idx} className="text-2xl font-bold text-neutral-900 mt-12 mb-4 pt-8 border-t border-neutral-100">
                  {section.text}
                </h2>
              )
            }
            if (section.type === 'quote') {
              return (
                <blockquote key={idx} className="my-12 py-8 px-8 bg-[#05080c] border-l-4 border-red-700">
                  <p className="text-xl text-white font-light leading-snug italic">
                    &quot;{section.text}&quot;
                  </p>
                </blockquote>
              )
            }
            if (section.type === 'list') {
              return (
                <ul key={idx} className="space-y-3 bg-neutral-50 border border-neutral-200 p-6">
                  {section.items?.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                      <span className="w-1.5 h-1.5 bg-red-700 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )
            }
            return null
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Division :</span>
            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 ${CATEGORY_COLORS[article.category]}`}>
              {article.category}
            </span>
          </div>
          <Link href="/newsroom" className="text-[11px] font-black text-neutral-500 uppercase tracking-widest hover:text-neutral-900 transition-colors">
            ← Tous les articles
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <div className="border-t border-neutral-200 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em] mb-8">Articles liés</p>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link key={rel.id} href={`/newsroom/${rel.slug}`}>
                  <article className="group bg-white border border-neutral-200 overflow-hidden hover:shadow-xl hover:border-neutral-900 transition-all duration-500 h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className={`absolute top-3 left-3 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 ${CATEGORY_COLORS[rel.category]}`}>
                        {rel.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-[10px] text-neutral-400 mb-2 uppercase tracking-widest">{rel.date}</p>
                      <h3 className="text-sm font-bold text-neutral-900 leading-snug group-hover:text-red-800 transition-colors flex-1">
                        {rel.title}
                      </h3>
                      <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mt-4 group-hover:text-red-800 transition-colors">Lire →</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-24 bg-[#05080c] text-center border-t border-neutral-800">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl text-white font-light mb-6 tracking-wide">Restez informé</h2>
          <p className="text-neutral-500 mb-10 font-light">Pour les demandes presse, les demandes de briefing ou l’accès aux rapports de renseignement complets.</p>
          <Link href="/contact" className="inline-block border border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  )
}