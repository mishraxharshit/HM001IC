import Link from 'next/link'
import { ARTICLES, getArticleBySlug, getRelatedArticles } from '@/lib/articles'

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }))
}

interface Props {
  params: { slug: string }
}

const wrap = 'mx-auto max-w-[1360px] px-6 lg:px-14'

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#2b4f9c]">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Article introuvable</h1>
          <Link href="/newsroom" className="mt-8 inline-block bg-[#05080c] px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white">Retour aux actualités</Link>
        </div>
      </div>
    )
  }
  const related = getRelatedArticles(article, 3)

  return (
    <div className="bg-white text-[#05080c]">
      <header className="relative isolate overflow-hidden bg-[#05080c] pb-16 pt-40 text-white">
        <img src={article.image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#05080c] via-[#05080c]/60 to-[#05080c]/80" />
        <div className={wrap}>
          <nav aria-label="Fil d’Ariane" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
            <Link href="/newsroom" className="hover:text-white">Actualités</Link> <span className="mx-2">/</span> <span className="text-[#9db0c4]">{article.category}</span>
          </nav>
          <h1 className="mt-8 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">{article.title}</h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-neutral-300">{article.excerpt}</p>
        </div>
      </header>

      <div className={`${wrap} grid gap-12 py-20 lg:grid-cols-[240px_1fr] lg:gap-20`}>
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <dl className="space-y-6 border-t border-[#05080c] pt-6 text-sm">
            {[['Auteur', article.author], ['Fonction', article.authorRole], ['Publié le', article.date], ['Temps de lecture', article.readTime], ['Division', article.category]].map(([k, v]) => (
              <div key={k}><dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">{k}</dt><dd className="mt-1 font-medium">{v}</dd></div>
            ))}
          </dl>
          <Link href="/newsroom" className="mt-8 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 hover:text-[#05080c]">&larr; Tous les articles</Link>
        </aside>

        <article className="max-w-3xl">
          {article.body.map((s, i) => {
            if (s.type === 'paragraph') return <p key={i} className="mb-7 text-lg leading-8 text-neutral-700">{s.text}</p>
            if (s.type === 'heading') return <h2 key={i} className="mb-5 mt-14 text-2xl font-semibold tracking-tight md:text-3xl">{s.text}</h2>
            if (s.type === 'quote') return <blockquote key={i} className="my-12 border-l-2 border-[#2b4f9c] pl-6 text-2xl font-medium leading-snug tracking-[-0.015em] [text-wrap:balance] md:text-3xl">{s.text}</blockquote>
            if (s.type === 'list') return (
              <ul key={i} className="mb-8 space-y-3">
                {s.items?.map((it, j) => <li key={j} className="flex gap-4 text-lg leading-8 text-neutral-700"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#2b4f9c]" />{it}</li>)}
              </ul>
            )
            if (s.type === 'divider') return <hr key={i} className="my-12 border-neutral-200" />
            return null
          })}
        </article>
      </div>

      {related.length > 0 && (
        <section className="border-t border-neutral-200 bg-neutral-50 py-20">
          <div className={wrap}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#2b4f9c]">Articles liés</p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.id} href={`/newsroom/${r.slug}`} className="group border-t border-neutral-300 bg-white p-6 transition hover:border-[#05080c]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">{r.category} / {r.date}</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight underline-offset-4 group-hover:underline">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
