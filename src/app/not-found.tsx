import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-[#05080c] px-6 pb-24 pt-40 text-white lg:px-14">
      <div className="mx-auto w-full max-w-[1360px]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9db0c4]">Erreur 404</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">Cette page est introuvable.</h1>
        <p className="mt-6 max-w-xl text-lg text-neutral-300">L’adresse saisie n’existe pas ou a été déplacée. Retournez à l’accueil ou choisissez l’une de nos divisions.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition hover:bg-neutral-300">Retour à l’accueil</Link>
          <Link href="/divisions/resources" className="border border-white/50 px-8 py-4 text-xs font-bold uppercase tracking-widest transition hover:bg-white hover:text-black">Nos divisions</Link>
          <Link href="/contact" className="border border-white/50 px-8 py-4 text-xs font-bold uppercase tracking-widest transition hover:bg-white hover:text-black">Nous contacter</Link>
        </div>
      </div>
    </section>
  )
}
