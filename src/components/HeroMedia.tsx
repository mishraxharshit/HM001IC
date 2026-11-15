// Media layer for page heroes: drop inside a `relative isolate` section; renders behind the content.
export default function HeroMedia({ video, poster, dim = 0.55 }: { video?: string; poster: string; dim?: number }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden bg-black">
      {video
        ? <video src={video} autoPlay muted loop playsInline preload="metadata" className="h-full w-full object-cover" style={{ opacity: dim }} />
        : <img src={poster} alt="" className="h-full w-full object-cover" style={{ opacity: dim }} />}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-black/30 to-black/60" />
    </div>
  )
}
