'use client'

import { useMemo, useState } from 'react'
import HeroMedia from '@/components/HeroMedia'

const APPLY_EMAIL = 'contact@ushindustries.com'
const applyHref = (title: string) =>
  `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(`Candidature : ${title}`)}`

/* ------------------------------------------------------------------ */
/* Data - roles, values and process steps are editable                 */
/* ------------------------------------------------------------------ */

type Dept = 'Défense' | 'Renseignement' | 'Ressources' | 'Énergie et logistique'

const ROLES: { id: number; title: string; dept: Dept; division: string; location: string; type: string; clearance: 'Requise' | 'Souhaitée' | 'Non requise'; desc: string }[] = [
  { id: 1, title: 'Ingénieur balistique senior', dept: 'Défense', division: 'Fortress Defense Systems', location: 'Paris, France', type: 'CDI', clearance: 'Requise',
    desc: 'Piloter la conception et les essais de systèmes de blindage composite pour la protection des véhicules et du personnel. Une expérience des normes OTAN STANAG est indispensable.' },
  { id: 2, title: 'Analyste en renseignement géospatial', dept: 'Renseignement', division: 'Fractalysium Intelligence', location: 'Télétravail / Paris', type: 'CDI', clearance: 'Requise',
    desc: 'Analyser des images satellitaires multispectrales et des données de sources ouvertes pour produire des évaluations de menace exploitables pour des clients souverains dans des zones de conflit actives.' },
  { id: 3, title: 'Chef de projet ressources stratégiques', dept: 'Ressources', division: 'Division Ressources stratégiques', location: 'Nairobi / Paris', type: 'CDI', clearance: 'Souhaitée',
    desc: 'Gérer l’extraction, la logistique et les relations avec les parties prenantes pour des opérations de minerais critiques en Afrique de l’Est et centrale.' },
  { id: 4, title: 'Spécialiste en sécurité des infrastructures énergétiques', dept: 'Énergie et logistique', division: 'Secteur Énergie', location: 'Bruxelles, Belgique', type: 'CDI', clearance: 'Souhaitée',
    desc: 'Évaluer et durcir les infrastructures énergétiques critiques face aux menaces physiques et cyber. Une expérience en exploitation de réseaux ou en protection des infrastructures critiques est requise.' },
  { id: 5, title: 'Ingénieur de recherche IA/ML', dept: 'Renseignement', division: 'Fractalysium Intelligence', location: 'Télétravail', type: 'CDI', clearance: 'Non requise',
    desc: 'Développer et valider des modèles d’apprentissage automatique pour la modélisation prédictive des risques géopolitiques. Solide expérience en Python, traitement du langage naturel et prévision de séries temporelles requise.' },
  { id: 6, title: 'Coordinateur sécurité logistique', dept: 'Énergie et logistique', division: 'Logistique et corridors', location: 'Dubaï, Émirats arabes unis', type: 'CDD', clearance: 'Souhaitée',
    desc: 'Coordonner la logistique d’escorte armée et le renseignement d’itinéraire pour les transports de cargaisons à forte valeur sur les corridors stratégiques du Moyen-Orient, d’Afrique du Nord et d’Afrique de l’Est.' },
]

const DEPTS: ('Tous' | Dept)[] = ['Tous', 'Défense', 'Renseignement', 'Ressources', 'Énergie et logistique']

const VALUES = [
  { n: '01', title: 'Excellence', desc: 'Nous opérons à la croisée du renseignement, de la défense et de l’industrie, et nous attendons et récompensons une performance exceptionnelle.' },
  { n: '02', title: 'Discrétion', desc: 'La confidentialité et la sécurité opérationnelle font partie de chaque poste. Nous recrutons des personnes qui comprennent cette responsabilité.' },
  { n: '03', title: 'Sens de la mission', desc: 'Chaque poste contribue à protéger des actifs souverains et des infrastructures critiques.' },
  { n: '04', title: 'Dimension internationale', desc: 'De Paris à Nairobi et Singapour, nos équipes travaillent à travers les continents, les fuseaux horaires et les niveaux de complexité.' },
]

const PROCESS = [
  { n: '01', title: 'Étude des candidatures', desc: 'Notre équipe talents examine chaque profil au regard des exigences du poste.' },
  { n: '02', title: 'Entretiens métier', desc: 'Des échanges structurés avec le responsable du recrutement et les futurs collègues.' },
  { n: '03', title: 'Vérifications et habilitation', desc: 'Vérification des antécédents et, lorsque le poste l’exige, contrôle de l’habilitation de sécurité.' },
  { n: '04', title: 'Offre et intégration', desc: 'Un plan d’intégration défini couvrant les systèmes, la conformité et les procédures opérationnelles.' },
]

const wrap = 'mx-auto max-w-[1360px] px-6 lg:px-14'

const Eyebrow = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <p className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${dark ? 'text-[#9db0c4]' : 'text-[#2b4f9c]'}`}>{children}</p>
)

export default function CareersPage() {
  const [dept, setDept] = useState<'Tous' | Dept>('Tous')
  const [open, setOpen] = useState<number | null>(null)

  const visible = useMemo(() => ROLES.filter((r) => dept === 'Tous' || r.dept === dept), [dept])
  const locations = useMemo(() => new Set(ROLES.flatMap((r) => r.location.split(/\s*\/\s*/))).size, [])
  const stats: [string, string][] = [
    [String(ROLES.length), 'Postes ouverts'],
    [String(DEPTS.length - 1), 'Équipes qui recrutent'],
    [String(locations), 'Implantations'],
    ['4', 'Étapes de recrutement'],
  ]

  return (
    <div className="bg-white text-[#05080c]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#05080c] pt-40 text-white">
        <HeroMedia video="/media/armour.mp4" poster="/media/armour.jpg" dim={0.45} />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className={`relative ${wrap}`}>
          <Eyebrow dark>Carrières</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-7xl lg:text-[6rem]">
            Construire ce qui <span className="text-[#9db0c4]">protège.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-300">
            Nous recrutons des analystes en renseignement, des ingénieurs de défense, des spécialistes des ressources et des opérateurs capables de travailler
            avec discrétion et expertise dans des environnements à fort enjeu.
          </p>
          <div className="mt-10">
            <a href="#positions" className="inline-block bg-white px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#05080c] transition-colors hover:bg-neutral-300">Voir les postes ouverts</a>
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 border-t border-white/20 md:grid-cols-4 md:gap-x-0">
            {stats.map(([v, l], i) => (
              <div key={l} className={`py-8 ${i > 0 ? 'md:border-l md:border-white/20 md:pl-8' : ''}`}>
                <dd className="text-4xl font-semibold tracking-tight md:text-5xl">{v}</dd>
                <dt className="mt-2 text-[10px] uppercase tracking-[0.14em] text-neutral-400 sm:text-[11px] sm:tracking-[0.2em]">{l}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Why USH */}
      <section className="py-24 md:py-32">
        <div className={wrap}>
          <Eyebrow>Pourquoi USH</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">Un travail à réel impact stratégique.</h2>
          <div className="mt-14 grid gap-px border border-neutral-200 bg-neutral-200 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.n} className="bg-white p-8">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#2b4f9c]">{v.n}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="positions" className="scroll-mt-24 border-y border-neutral-200 bg-neutral-50 py-24 md:py-32">
        <div className={wrap}>
          <Eyebrow>Postes ouverts</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Opportunités actuelles</h2>

          <div role="group" aria-label="Filtrer par équipe" className="mt-10 flex flex-wrap gap-2">
            {DEPTS.map((d) => (
              <button key={d} onClick={() => { setDept(d); setOpen(null) }} aria-pressed={dept === d}
                className={`border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors ${dept === d ? 'border-[#05080c] bg-[#05080c] text-white' : 'border-neutral-300 bg-white text-neutral-600 hover:border-neutral-900'}`}>
                {d}
              </button>
            ))}
          </div>

          <div className="mt-8 hidden grid-cols-[3fr_2fr_2fr_1fr_40px] gap-6 border-b border-neutral-300 px-6 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 md:grid">
            <span>Poste</span><span>Équipe</span><span>Lieu</span><span>Contrat</span><span />
          </div>

          <ul className="border-neutral-200 md:border-t-0">
            {visible.map((r) => {
              const isOpen = open === r.id
              return (
                <li key={r.id} className="border-b border-neutral-200 bg-white">
                  <button onClick={() => setOpen(isOpen ? null : r.id)} aria-expanded={isOpen}
                    className="grid w-full gap-2 px-6 py-6 text-left transition-colors hover:bg-neutral-50 md:grid-cols-[3fr_2fr_2fr_1fr_40px] md:items-center md:gap-6">
                    <span>
                      <span className="block text-lg font-semibold tracking-tight">{r.title}</span>
                      {r.clearance === 'Requise' && <span className="mt-1 inline-block bg-[#05080c] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">Habilitation requise</span>}
                    </span>
                    <span className="text-sm text-neutral-600">{r.division}</span>
                    <span className="text-sm text-neutral-600">{r.location}</span>
                    <span className="text-sm text-neutral-600">{r.type}</span>
                    <svg aria-hidden="true" className={`hidden h-5 w-5 text-neutral-400 transition-transform md:block ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {isOpen && (
                    <div className="grid gap-8 border-t border-neutral-100 px-6 py-8 md:grid-cols-[3fr_2fr]">
                      <p className="max-w-2xl leading-relaxed text-neutral-600">{r.desc}</p>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Habilitation de sécurité : <span className="text-[#05080c]">{r.clearance}</span></p>
                        <a href={applyHref(r.title)} className="mt-5 inline-block bg-[#05080c] px-8 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#2b4f9c]">Postuler</a>
                      </div>
                    </div>
                  )}
                </li>
              )
            })}
            {visible.length === 0 && <li className="bg-white px-6 py-10 text-neutral-500">Aucun poste ouvert dans cette équipe pour le moment.</li>}
          </ul>
        </div>
      </section>

      {/* Hiring process */}
      <section className="py-24 md:py-32">
        <div className={wrap}>
          <Eyebrow>Processus de recrutement</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Un parcours clair, de la candidature à l’intégration.</h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <li key={p.n} className="border-t-2 border-[#2b4f9c] pt-6">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#2b4f9c]">{p.n}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-600">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Speculative */}
      <section className="bg-[#05080c] py-24 text-white">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-8`}>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Vous ne trouvez pas votre poste ?</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-400">Nous recherchons en permanence des talents en renseignement, ingénierie de défense, analyse géopolitique et opérations stratégiques. Envoyez-nous votre profil.</p>
          </div>
          <a href={applyHref('Candidature spontanée')} className="bg-white px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#05080c] transition-colors hover:bg-neutral-300">Envoyer un profil</a>
        </div>
      </section>
    </div>
  )
}
