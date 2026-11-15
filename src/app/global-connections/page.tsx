import type { Metadata } from 'next'
import Link from 'next/link'
import HeroMedia from '@/components/HeroMedia'
import RegionExplorer, { type Region } from '@/components/RegionExplorer'

export const metadata: Metadata = {
  title: 'Opérations mondiales | USH Industries',
  description:
    'Opérations pilotées depuis Paris en Europe, en Afrique, au Moyen-Orient, en Eurasie et en Asie-Pacifique, intégrant renseignement, contrôle des ressources et protection physique.',
}

/* ------------------------------------------------------------------ */
/* Data - replace placeholders with confirmed figures before launch    */
/* ------------------------------------------------------------------ */

const FACTS = [['6+', 'Régions opérationnelles'], ['30+', 'Sites stratégiques'], ['200+', 'Personnel de sécurité'], ['24/7', 'Veille opérationnelle']]

const REGIONS: Region[] = [
  { id: 'europe', name: 'Europe', view: { center: [49.5, 8], zoom: 5 }, markers: [{ name: 'Paris', lat: 48.8566, lng: 2.3522, hq: true }, { name: 'Bruxelles', lat: 50.8503, lng: 4.3517 }],
    summary: 'Siège du Groupe, gouvernance, programmes de défense et partenariats souverains.',
    hubs: ['Paris (siège)', 'Bruxelles'], sectors: ['Défense', 'Énergie'], capabilities: ['Gestion de programmes', 'Durcissement des infrastructures critiques', 'R&D appliquée'] },
  { id: 'africa', name: 'Afrique', view: { center: [-2, 30], zoom: 4 }, markers: [{ name: 'Nairobi', lat: -1.2921, lng: 36.8219 }],
    summary: 'Sécurité et logistique pour l’extraction de minerais critiques en Afrique de l’Est et centrale.',
    hubs: ['Nairobi'], sectors: ['Mines', 'Logistique'], capabilities: ['Protection des sites', 'Sécurité des corridors', 'Relations avec les parties prenantes'] },
  { id: 'mena', name: 'Moyen-Orient et Afrique du Nord', view: { center: [27, 45], zoom: 4 }, markers: [{ name: 'Dubaï', lat: 25.2048, lng: 55.2708 }],
    summary: 'Logistique d’escorte et renseignement sur les itinéraires dans des corridors maritimes et terrestres stratégiques.',
    hubs: ['Dubaï'], sectors: ['Logistique', 'Énergie'], capabilities: ['Coordination d’escortes armées', 'Sécurité des ports et terminaux', 'Renseignement sur les itinéraires'] },
  { id: 'eurasia', name: 'Eurasie', view: { center: [46, 62], zoom: 3 }, markers: [],
    summary: 'Corridors de transit terrestres et renseignement aux passages frontaliers reliant l’Europe à l’Asie.',
    hubs: ['Liaison régionale'], sectors: ['Logistique', 'Mines'], capabilities: ['Liaison aux passages frontaliers', 'Suivi des menaces', 'Intégrité des cargaisons'] },
  { id: 'apac', name: 'Asie-Pacifique', view: { center: [8, 108], zoom: 4 }, markers: [{ name: 'Singapore', lat: 1.3521, lng: 103.8198 }],
    summary: 'Pôles de transformation, intégrité de la chaîne d’approvisionnement et analyses prédictives pour les routes maritimes.',
    hubs: ['Singapore'], sectors: ['Logistique', 'Technologie'], capabilities: ['Assurance de la chaîne d’approvisionnement', 'Analyse géospatiale', 'Coordination des partenaires'] },
  { id: 'americas', name: 'Amériques', view: { center: [15, -80], zoom: 3 }, markers: [],
    summary: 'Approvisionnement en matériaux stratégiques et partenariats industriels.',
    hubs: ['Piloté par des partenaires'], sectors: ['Mines', 'Matériaux'], capabilities: ['Accords d’approvisionnement', 'Partenariats industriels', 'Conformité'] },
]

const MODEL = [
  { n: '01', title: 'Renseignement', desc: 'Fractalysium fusionne données satellitaires, géologiques et de sources ouvertes en modèles de menace actualisés qui guident chaque décision de déploiement.' },
  { n: '02', title: 'Contrôle des ressources', desc: 'Nous structurons actifs miniers, réseaux logistiques et chaînes d’approvisionnement afin que les matériaux stratégiques restent sous contrôle souverain.' },
  { n: '03', title: 'Protection physique', desc: 'Les systèmes Fortress et un personnel formé sécurisent sites, convois et infrastructures en environnements à haut risque.' },
]

const GOVERNANCE = [
  ['La conformité d’abord', 'Nos opérations respectent les exigences de sanctions, de contrôle des exportations et de lutte contre la corruption dans chaque juridiction.'],
  ['Alignement souverain', 'Les programmes sont structurés autour des intérêts stratégiques de nos partenaires gouvernementaux et institutionnels.'],
  ['Opérations responsables', 'Des normes environnementales et communautaires s’appliquent sur chaque site que nous protégeons.'],
]

const wrap = 'mx-auto max-w-[1360px] px-6 lg:px-14'

const Eyebrow = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <p className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${dark ? 'text-[#9db0c4]' : 'text-[#2b4f9c]'}`}>{children}</p>
)

export default function GlobalOperationsPage() {
  return (
    <div className="bg-white text-[#05080c]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#05080c] pb-0 pt-40 text-white">
        <HeroMedia video="/media/field.mp4" poster="/media/field.jpg" dim={0.45} />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className={`relative ${wrap}`}>
          <Eyebrow dark>Opérations mondiales</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-7xl lg:text-[6rem]">
            Opérer là où <span className="text-[#9db0c4]">d’autres ne le peuvent pas.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-300">
            Un groupe unique et responsable qui fournit renseignement, contrôle des ressources et protection physique en Europe, en Afrique,
            en Eurasie et sur les corridors qui les relient.
          </p>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 border-t border-white/20 md:grid-cols-4 md:gap-x-0">
            {FACTS.map(([v, l], i) => (
              <div key={l} className={`py-8 ${i > 0 ? 'md:border-l md:border-white/20 md:pl-8' : ''}`}>
                <dd className="text-4xl font-semibold tracking-tight md:text-5xl">{v}</dd>
                <dt className="mt-2 text-[10px] uppercase tracking-[0.14em] text-neutral-400 sm:text-[11px] sm:tracking-[0.2em]">{l}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Region explorer */}
      <section className="py-24 md:py-32">
        <div className={wrap}>
          <Eyebrow>Présence régionale</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">Présence locale, pilotage au niveau du Groupe.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">Sélectionnez une région pour voir ses pôles, secteurs et capacités.</p>
          <div className="mt-12"><RegionExplorer regions={REGIONS} /></div>
          <p className="mt-4 text-xs text-neutral-500">Données cartographiques &copy; contributeurs OpenStreetMap. Utilisez les boutons +/- pour zoomer.</p>
        </div>
      </section>

      {/* Operating model */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-24">
        <div className={wrap}>
          <Eyebrow>Modèle opérationnel</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Trois expertises, un seul déploiement.</h2>
          <div className="mt-14 grid gap-px border border-neutral-200 bg-neutral-200 md:grid-cols-3">
            {MODEL.map((m) => (
              <div key={m.n} className="bg-white p-10">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#2b4f9c]">{m.n}</span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{m.title}</h3>
                <p className="mt-4 leading-relaxed text-neutral-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-24 md:py-32">
        <div className={`${wrap} grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
          <div>
            <Eyebrow>Gouvernance</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Une portée mondiale, un seul standard.</h2>
          </div>
          <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
            {GOVERNANCE.map(([t, d]) => (
              <li key={t} className="grid gap-2 py-8 md:grid-cols-[1fr_2fr] md:gap-8">
                <h3 className="text-xl font-semibold tracking-tight">{t}</h3>
                <p className="leading-relaxed text-neutral-600">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#05080c] py-24 text-white">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-8`}>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Parlons de votre environnement opérationnel</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-400">Partenaire gouvernemental, industriel ou de recherche ? Dites-nous où vous opérez.</p>
          </div>
          <Link href="/contact" className="bg-white px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#05080c] transition-colors hover:bg-neutral-300">Demander une consultation</Link>
        </div>
      </section>
    </div>
  )
}
