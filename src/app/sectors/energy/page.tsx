import Link from 'next/link'
import EngineeringBand from '@/components/EngineeringBand'
import HeroMedia from '@/components/HeroMedia'
import Section from '@/components/Section'

export const metadata = {
  title: 'Sécurité des infrastructures énergétiques - USH Industries',
  description: 'Protéger les installations et infrastructures énergétiques critiques en Europe et au-delà.',
}

const ASSETS = [
  {
    tag: 'PÉTROLE ET GAZ',
    icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
    title: 'Installations pétrolières et gazières',
    desc: 'Protection complète des raffineries, usines de traitement, plateformes offshore et terminaux de stockage contre les attaques physiques, le sabotage et la guerre hybride.',
    pills: ['Raffineries', 'Plateformes offshore', 'Pipelines'],
  },
  {
    tag: 'PRODUCTION D’ÉLECTRICITÉ',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Production d’électricité',
    desc: 'Architecture de sécurité pour centrales nucléaires, centrales thermiques, barrages hydroélectriques et postes de transformation, colonne vertébrale des réseaux électriques nationaux.',
    pills: ['Centrales nucléaires', 'Centrales thermiques', 'Postes de réseau'],
  },
  {
    tag: 'ÉNERGIES RENOUVELABLES',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Énergies renouvelables',
    desc: 'Protection des parcs éoliens, installations solaires, sites de stockage par batteries et unités de production d’hydrogène, alors que l’énergie propre devient une priorité nationale stratégique.',
    pills: ['Parcs éoliens', 'Installations solaires', 'Stockage par batteries'],
  },
  {
    tag: 'TRANSPORT D’ÉLECTRICITÉ',
    icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0',
    title: 'Réseaux de transport',
    desc: 'Protection cyber-physique intégrée pour les corridors de transport à haute tension, les systèmes de contrôle SCADA et les interconnexions de réseaux interrégionales.',
    pills: ['Systèmes SCADA', 'Transport haute tension', 'Salles de contrôle'],
  },
  {
    tag: 'CYBER-PHYSIQUE',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Sécurité cyber-physique',
    desc: 'Protection multicouche associant renforcement physique des périmètres et surveillance cyber continue, intégrée aux centres opérationnels de sécurité des exploitants.',
    pills: ['Architecture Zero Trust', 'Détection d’intrusion', 'Intégration au SOC'],
  },
  {
    tag: 'MICRO-RÉSEAU HYBRIDE',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    title: 'Systèmes de micro-réseaux hybrides',
    desc: 'Intégration de solaire, de batteries et de secours qui réduit le coût de l’énergie et l’intensité carbone sur les sites isolés, avec une disponibilité de 99,6 % constatée sur les sites actifs.',
    pills: ['Solaire + batteries', '99,6 % de disponibilité', '38 % de réduction des coûts'],
  },
]

const PHASES = [
  {
    phase: 'Phase 1',
    title: 'Analyse du renseignement',
    desc: 'Fractalysium cartographie les vulnérabilités, les vecteurs de menace et les dépendances critiques de l’actif et de son environnement.',
    pills: ['Modélisation géospatiale des risques', 'Simulation de scénarios de menace', 'Cartographie des dépendances'],
  },
  {
    phase: 'Phase 2',
    title: 'Planification stratégique',
    desc: 'Conception de l’architecture de sécurité et allocation des ressources adaptées précisément au profil de risque et aux exigences opérationnelles de chaque actif.',
    pills: ['Stratégie de défense en profondeur', 'Déploiement de forces', 'Conception de la redondance'],
  },
  {
    phase: 'Phase 3',
    title: 'Déploiement physique',
    desc: 'Mise en œuvre des systèmes Fortress Defense, intégration aux infrastructures existantes et soutien opérationnel continu.',
    pills: ['Barrières balistiques', 'Renforcement des points de contrôle', 'Modules anti-drones'],
  },
]

export default function EnergyPage() {
  return (
    <>
      {/* Hero */}
      <section className="isolate relative pt-32 pb-24 bg-[#05080c] overflow-hidden text-center">
<HeroMedia video="/media/field.mp4" poster="/media/field.jpg" dim={0.5} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        <div className="section-container relative z-10 max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] text-red-600 uppercase mb-6">Infrastructures énergétiques</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Protéger les <em className=" font-normal italic text-neutral-400">infrastructures critiques</em>
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed mb-10">
            Les actifs énergétiques sont les cibles prioritaires de la guerre hybride du XXIe siècle. USH fournit un renseignement et une protection physique intégrés pour les installations qui alimentent les nations et les économies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Demander une évaluation de sécurité</Link>
            <Link href="/divisions/fortress" className="btn-secondary">Fortress Defense →</Link>
          </div>
        </div>
      </section>
<EngineeringBand variant="grid" eyebrow="Infrastructures énergétiques" title="Protéger l’énergie critique." />

      {/* Assets Grid */}
      <Section title="Actifs énergétiques protégés" subtitle="Infrastructures critiques que nous sécurisons">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ASSETS.map((asset) => (
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

      {/* 3-Phase */}
      <Section title="Architecture de protection intégrée" subtitle="L’approche USH en trois phases" background="dark">
        <div className="grid lg:grid-cols-3 gap-8">
          {PHASES.map((p) => (
            <div key={p.phase} className="border border-neutral-800 p-8">
              <p className="text-xs font-bold tracking-widest text-neutral-500 mb-3">{p.phase}</p>
              <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.pills.map((pill) => (
                  <span key={pill} className="text-xs font-medium text-neutral-400 border border-neutral-700 px-3 py-1">{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Intelligence CTA */}
      <Section title="Sécurité énergétique pilotée par le renseignement" subtitle="Propulsé par Fractalysium">
        <div className="max-w-4xl mx-auto border border-neutral-200 p-10 md:p-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Renseignement sur les menaces en temps réel</h3>
              <p className="text-neutral-500 mb-6 text-sm leading-relaxed">Fractalysium s’intègre aux systèmes SCADA des exploitants d’énergie pour offrir une connaissance continue des menaces, permettant une posture de sécurité proactive plutôt que réactive.</p>
              <div className="flex flex-wrap gap-2">
                {['Mises à jour des menaces en moins de 24 h', 'Intégration SCADA', 'Alertes automatisées', 'Surveillance régionale'].map((pill) => (
                  <span key={pill} className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">{pill}</span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <a href="https://fractalysium.com/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                Accéder à Fractalysium →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Protégez vos infrastructures énergétiques</h2>
          <p className="text-lg text-neutral-400 mb-8">Renseignement et sécurité physique complets pour les installations énergétiques critiques dans le monde.</p>
          <Link href="/contact" className="btn-primary">Demander une évaluation de sécurité</Link>
        </div>
      </Section>
    </>
  )
}