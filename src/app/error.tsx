'use client'
import Link from 'next/link'

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-[#05080c] px-6 pb-24 pt-40 text-white lg:px-14">
      <div className="mx-auto w-full max-w-[1360px]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9db0c4]">Erreur</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">Un problème est survenu.</h1>
        <p className="mt-6 max-w-xl text-lg text-neutral-300">La page n’a pas pu s’afficher correctement. Réessayez, ou revenez à l’accueil.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button onClick={() => reset()} className="bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition hover:bg-neutral-300">Réessayer</button>
          <Link href="/" className="border border-white/50 px-8 py-4 text-xs font-bold uppercase tracking-widest transition hover:bg-white hover:text-black">Retour à l’accueil</Link>
        </div>
      </div>
    </section>
  )
}
