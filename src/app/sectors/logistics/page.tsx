import Link from 'next/link'
import EngineeringBand from '@/components/EngineeringBand'
import HeroMedia from '@/components/HeroMedia'
import Section from '@/components/Section'

export const metadata = {
  title: 'Logistique et corridors stratégiques - USH Industries',
  description: 'Sécuriser les chaînes d’approvisionnement mondiales et les routes de transport stratégiques par des opérations pilotées par le renseignement.',
}

const INFRASTRUCTURE = [
  {
    tag: 'MARITIME',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    title: 'Ports stratégiques',
    desc: 'Terminaux maritimes et installations de fret situés sur des points de passage critiques, nœuds par lesquels transitent entre les continents ressources stratégiques et matériels de défense.',
    pills: ['Protection des terminaux', 'Escorte de navires', 'Intégrité des cargaisons'],
  },
  {
    tag: 'ROUTES TERRESTRES',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    title: 'Corridors terrestres',
    desc: 'Routes ferroviaires et routières reliant sites d’extraction, pôles industriels et terminaux d’exportation à travers des zones géographiques contestées ou à haut risque.',
    pills: ['Planification de convois', 'Évaluation des itinéraires', 'Escorte armée'],
  },
  {
    tag: 'STOCKAGE',
    icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    title: 'Pôles de stockage',
    desc: 'Entrepôts, centres de distribution et nœuds de transfert intermodaux dont la défaillance se propage à des réseaux d’approvisionnement entiers.',
    pills: ['Sécurité des périmètres', 'Contrôle d’accès', 'Intégrité des stocks'],
  },
  {
    tag: 'TRANSIT FRONTALIER',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Passages frontaliers',
    desc: 'Points de contrôle de transit international où se rejoignent frictions réglementaires, risques de corruption et menaces d’interdiction, et qui exigent une capacité dédiée de renseignement et de liaison.',
    pills: ['Liaison douanière', 'Documentation', 'Suivi des menaces'],
  },
  {
    tag: 'RENSEIGNEMENT D’ITINÉRAIRE',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    title: 'Renseignement d’itinéraire Fractalysium',
    desc: 'Des données de menace en direct intégrées à la planification des convois : choix de l’itinéraire, horaires de départ et composition de l’escorte déterminés par la probabilité de menace en temps réel.',
    pills: ['Réacheminement dynamique', 'Optimisation des départs', '62 % d’incidents en moins'],
  },
  {
    tag: 'PROTECTION DE CONVOIS',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    title: 'Protection de convois Fortress',
    desc: 'Protection physique déployée en coordination avec la planification du renseignement : véhicules blindés, équipes d’escorte formées et protection autonome AUTONEX.',
    pills: ['Blindage certifié OTAN', 'Escorte armée', 'Système AUTONEX'],
  },
]

const CORRIDORS = [
  { title: 'Corridors Europe–Asie', desc: 'Ponts terrestres reliant les marchés européens aux centres de production asiatiques à travers l’Asie centrale et le Caucase.', pills: ['Asie centrale', 'Caucase', 'Europe de l’Est'] },
  { title: 'Routes de ressources africaines', desc: 'Transport de minerais critiques et d’énergie des sites d’extraction africains vers les terminaux d’exportation côtiers, puis vers les acheteurs européens.', pills: ['Région du Sahel', 'Afrique de l’Est', 'Corridor austral'] },
  { title: 'Points de passage maritimes critiques', desc: 'Renseignement de protection et coordination d’escortes pour les navires transitant par des voies d’eau stratégiques à haut risque dans le monde.', pills: ['Détroits', 'Canaux', 'Zones de piraterie'] },
  { title: 'Points de transit frontaliers', desc: 'Capacité de renseignement et de liaison pour les cargaisons franchissant des frontières internationales sensibles dans des conditions de risque élevé.', pills: ['Zones douanières', 'Ports francs', 'Pôles de transit'] },
]

export default function LogisticsPage() {
  return (
    <>
      {/* Hero */}
      <section className="isolate relative pt-32 pb-24 bg-[#05080c] overflow-hidden text-center">
<HeroMedia video="/media/walk.mp4" poster="/media/walk.jpg" dim={0.5} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        <div className="section-container relative z-10 max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] text-red-600 uppercase mb-6">Logistique et corridors stratégiques</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Sécuriser les <em className=" font-normal italic text-neutral-400">chaînes d’approvisionnement</em> mondiales
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed mb-10">
            Une chaîne d’approvisionnement n’est aussi résiliente que son maillon le plus exposé. USH sécurise les artères du commerce mondial et des flux de ressources stratégiques, en associant renseignement en temps réel et protection physique sur chaque corridor critique.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Discuter de votre sécurité logistique</Link>
            <Link href="/divisions/fractalysium" className="btn-secondary">Renseignement d’itinéraire →</Link>
          </div>
        </div>
      </section>
<EngineeringBand variant="flow" eyebrow="Logistique et corridors" title="Sécuriser les corridors mondiaux." />

      {/* Infrastructure Grid */}
      <Section title="Infrastructures logistiques stratégiques" subtitle="Actifs et capacités que nous fournissons">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INFRASTRUCTURE.map((asset) => (
            <div key={asset.title} className="group">
              <div className="w-14 h-14 bg-[#05080c] flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={asset.icon} />
                </svg>
              </div>
              <p className="text-xs font-bold tracking-widest text-neutral-400 mb-2">{asset.tag}</p>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{asset.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">{asset.desc}</p>
              <div className="flex flex-wrap gap-2">
                {asset.pills.map((pill) => (
                  <span key={pill} className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Active Corridors */}
      <Section title="Opérations de corridors en cours" subtitle="Couverture mondiale" background="dark">
        <div className="grid md:grid-cols-2 gap-6">
          {CORRIDORS.map((corridor) => (
            <div key={corridor.title} className="border border-neutral-800 p-8">
              <h3 className="text-xl font-bold text-white mb-3">{corridor.title}</h3>
              <p className="text-sm text-neutral-400 mb-5 leading-relaxed">{corridor.desc}</p>
              <div className="flex flex-wrap gap-2">
                {corridor.pills.map((pill) => (
                  <span key={pill} className="text-xs font-medium text-neutral-400 border border-neutral-700 px-3 py-1">{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sécurisez vos chaînes d’approvisionnement</h2>
          <p className="text-lg text-neutral-400 mb-8">Renseignement et sécurité physique intégrés pour les opérations logistiques stratégiques dans le monde.</p>
          <Link href="/contact" className="btn-primary">Discuter de votre sécurité logistique</Link>
        </div>
      </Section>
    </>
  )
}