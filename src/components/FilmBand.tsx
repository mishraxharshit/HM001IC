'use client'
import SmartVideo from '@/components/SmartVideo'

export default function FilmBand({ video, poster, eyebrow, title }: { video: string; poster?: string /* unused, kept for compatibility */; eyebrow: string; title: string }) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#05080c] text-white">
      <SmartVideo src={video} opacity={0.7} eager={false} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 pb-16 lg:px-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9db0c4]">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-none tracking-tight md:text-6xl lg:text-8xl">{title}</h2>
      </div>
    </section>
  )
}
