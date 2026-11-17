import Link from 'next/link'
import PageHero from '@/components/PageHero'
import EngineeringBand from '@/components/EngineeringBand'
import Section from '@/components/Section'

export const metadata = {
  title: 'Mines et ressources critiques - USH Industries',
  description: 'Sécuriser les exploitations minières stratégiques et les chaînes d’approvisionnement en ressources critiques dans le monde.',
}

const MATERIALS = [
  {
    tag: 'CRITICITÉ EXTRÊME',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    title: 'Terres rares',
    desc: 'Colonne vertébrale des systèmes de défense modernes et des énergies propres. L’Europe en importe plus de 90 % d’une seule origine géographique, une vulnérabilité structurelle de souveraineté qu’USH traite au niveau des actifs.',
    pills: ['Néodyme', 'Dysprosium', 'Terbium', 'Électronique de défense'],
  },
  {
    tag: 'CRITICITÉ EXTRÊME',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Uranium',
    desc: 'Essentiel à la production d’énergie nucléaire et aux applications de défense. Des chaînes d’approvisionnement stables en uranium sont une condition de la souveraineté énergétique européenne et de la capacité de défense stratégique.',
    pills: ['Énergie nucléaire', 'Programmes de défense', 'Isotopes médicaux'],
  },
  {
    tag: 'CRITICITÉ ÉLEVÉE',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064',
    title: 'Lithium et cobalt',
    desc: 'Intrants critiques des batteries qui alimentent la transition vers les véhicules électriques et le stockage d’énergie militaire. La concentration de l’offre dans des régions politiquement instables crée une exposition stratégique durable.',
    pills: ['Batteries de véhicules électriques', 'Stockage militaire', 'Alliages aérospatiaux'],
  },
  {
    tag: 'CRITICITÉ ÉLEVÉE',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    title: 'Graphite et cuivre',
    desc: 'Le graphite, modérateur nucléaire et anode de batterie ; le cuivre, conducteur indispensable à toutes les infrastructures électriques et aux systèmes de défense dans le monde.',
    pills: ['Anodes de batterie', 'Modérateurs nucléaires', 'Câblage de défense'],
  },
  {
    tag: 'PILOTÉ PAR LE RENSEIGNEMENT',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Analyse géologique par IA',
    desc: 'Fractalysium identifie les gisements à forte valeur par la fusion d’imagerie satellitaire et de données géophysiques, pour une sélection précise des sites et une planification de l’extraction ajustée au risque.',
    pills: ['Imagerie satellitaire', 'Fusion géophysique', 'Sélection de sites'],
  },
  {
    tag: 'SÉCURITÉ PHYSIQUE',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Protection des sites et des convois',
    desc: 'Fortress Defense assure la sécurité des périmètres, des barrières balistiques, des points de contrôle renforcés et l’escorte de convois blindés pour le transport de matériaux en territoire hostile.',
    pills: ['Systèmes de périmètre', 'Barrières balistiques', 'Convois blindés'],
  },
]

const REGIONS = [
  { title: 'Afrique de l’Ouest et centrale', focus: 'Terres rares, cobalt, lithium, manganèse', pills: ['Guinée', 'RDC', 'Cameroun'] },
  { title: 'Afrique de l’Est', focus: 'Graphite, terres rares, niobium', pills: ['Tanzanie', 'Mozambique', 'Kenya'] },
  { title: 'Asie centrale et Eurasie', focus: 'Uranium, terres rares, cuivre', pills: ['Kazakhstan', 'Ouzbékistan', 'Mongolie'] },
  { title: 'Zones d’extraction à haut risque', focus: 'Opérations multi-minerais à proximité de zones de conflit', pills: ['Suivi des conflits', 'Protection des forces', 'Plans d’évacuation'] },
]

export default function MiningPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
      eyebrow="Mines et ressources critiques"
      title={<>Sécuriser les ressources <span className="text-[#9db0c4]">à la source</span></>}
      intro="Terres rares, uranium, lithium, cobalt : les matériaux dont dépendent les systèmes de défense modernes, les réseaux énergétiques et les économies industrielles. USH les sécurise à la source, avec un renseignement et une protection physique intégrés dès le premier jour."
      video="/media/forge.mp4"
      poster="/media/forge.jpg"
    >
      <Link href="/contact" className="bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition hover:bg-neutral-300">Discuter de vos besoins</Link>
      <Link href="/sustainability" className="border border-white/50 px-8 py-4 text-xs font-bold uppercase tracking-widest transition hover:bg-white hover:text-black">Nos standards ESG →</Link>
    </PageHero>
<EngineeringBand variant="gears" eyebrow="Mines et ressources" title="Du minerai à la spécification." />

      {/* Materials & Capabilities */}
      <Section title="Matériaux critiques que nous sécurisons" subtitle="Classes d’actifs stratégiques et capacités intégrées">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MATERIALS.map((material) => (
            <div key={material.title} className="group">
              <div className="w-14 h-14 bg-[#05080c] flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={material.icon} />
                </svg>
              </div>
              <p className="text-xs font-bold tracking-widest text-neutral-400 mb-2">{material.tag}</p>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{material.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">{material.desc}</p>
              <div className="flex flex-wrap gap-2">
                {material.pills.map((pill) => (
                  <span key={pill} className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Regions */}
      <Section title="Régions opérationnelles" subtitle="Portée mondiale" background="dark">
        <div className="grid md:grid-cols-2 gap-6">
          {REGIONS.map((region) => (
            <div key={region.title} className="border border-neutral-800 p-8">
              <h3 className="text-xl font-bold text-white mb-2">{region.title}</h3>
              <p className="text-sm text-neutral-400 mb-5">{region.focus}</p>
              <div className="flex flex-wrap gap-2">
                {region.pills.map((pill) => (
                  <span key={pill} className="text-xs font-medium text-neutral-400 border border-neutral-700 px-3 py-1">{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ESG */}
      <Section title="Standards d’extraction responsable" subtitle="L’ESG au niveau des actifs">
        <div className="max-w-4xl mx-auto border border-neutral-200 p-10 md:p-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">ISO 14001 sur tous les sites</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">L’extraction responsable n’est pas une contrainte pour notre modèle économique : elle en fait partie. Chaque opération partenaire fait l’objet d’une diligence environnementale et sociale indépendante avant tout engagement.</p>
              <div className="flex flex-wrap gap-2">
                {['Certifié ISO 14001', 'Diligence ESG', 'Bénéfice pour les communautés', '70 %+ d’emploi local'].map((pill) => (
                  <span key={pill} className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">{pill}</span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Link href="/sustainability" className="btn-primary inline-block">Notre cadre ESG →</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sécurisez vos opérations minières</h2>
          <p className="text-lg text-neutral-400 mb-8">Faites équipe avec USH Industries pour un renseignement, des ressources et une protection physique intégrés.</p>
          <Link href="/contact" className="btn-primary">Discuter de vos besoins</Link>
        </div>
      </Section>
    </>
  )
}