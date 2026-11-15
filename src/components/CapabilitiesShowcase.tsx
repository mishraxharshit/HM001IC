import Link from 'next/link'

interface Capability {
  iconPath: string
  title: string
  description: string
  stats: { label: string; value: string }[]
  link: string
}

const capabilities: Capability[] = [
  {
    iconPath:
      'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Fabrication de défense',
    description:
      'Fortress Defense produit des boucliers balistiques, des systèmes de blindage et des protections d’infrastructures, de la R&D au déploiement en zone de conflit.',
    stats: [
      { label: 'Systèmes de protection', value: '50+' },
      { label: 'Sites de fabrication', value: '3' },
      { label: 'Pays de déploiement', value: '15+' },
    ],
    link: '/divisions/fortress',
  },
  {
    iconPath:
      'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    title: 'Plateforme de renseignement',
    description:
      'L’IA de Fractalysium analyse imagerie satellitaire, données géologiques et renseignement géopolitique pour identifier les ressources stratégiques et les menaces de sécurité avant qu’elles ne se matérialisent.',
    stats: [
      { label: 'Sources de données', value: '100+' },
      { label: 'Pays analysés', value: '50+' },
      { label: 'Mises à jour en temps réel', value: '24/7' },
    ],
    link: '/divisions/fractalysium',
  },
  {
    iconPath:
      'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
    title: 'Ressources critiques',
    description:
      'Accès sécurisé aux terres rares, au lithium, à l’uranium et aux métaux stratégiques. Nous structurons actifs miniers, réseaux logistiques et chaînes d’approvisionnement souveraines.',
    stats: [
      { label: 'Matériaux sécurisés', value: '15+' },
      { label: 'Projets miniers', value: '8' },
      { label: 'Pôles logistiques', value: '12' },
    ],
    link: '/divisions/resources',
  },
  {
    iconPath:
      'M12 3.5s-6 6.5-6 10.5a6 6 0 0012 0c0-4-6-10.5-6-10.5z',
    title: 'Pétrole et gaz',
    description:
      'Approvisionnement en pétrole brut, produits raffinés, GNL et gaz naturel, avec stockage, affrètement et protection des terminaux et des corridors maritimes.',
    stats: [
      { label: 'Pétrole', value: 'Brut' },
      { label: 'Produits', value: 'Raffinés' },
      { label: 'Gaz', value: 'GNL' },
    ],
    link: '/divisions/oil-gas',
  },
  {
    iconPath:
      'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    title: 'Négoce multi-matières',
    description:
      'Négoce physique de métaux, de minerais, de matières énergétiques et industrielles, avec financement, contrôle indépendant et couverture des risques.',
    stats: [
      { label: 'Matières', value: 'Multi' },
      { label: 'Paiement', value: 'UCP 600' },
      { label: 'Contrôle', value: 'Indépendant' },
    ],
    link: '/divisions/multi-commodities',
  },
  {
    iconPath:
      'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Opérations mondiales',
    description:
      'Nous opérons en Europe, en Afrique, en Eurasie et sur des corridors stratégiques. Nos équipes se déploient dans des environnements à haut risque où les acteurs conventionnels ne peuvent pas aller.',
    stats: [
      { label: 'Régions opérationnelles', value: '6+' },
      { label: 'Sites stratégiques', value: '30+' },
      { label: 'Personnel de sécurité', value: '200+' },
    ],
    link: '/global-connections',
  },
]

export default function CapabilitiesShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm font-medium uppercase tracking-widest text-neutral-500 mb-4 block">
            Expertises clés
          </span>
          <h2 className="heading-lg text-neutral-900 mb-4">Des solutions stratégiques intégrées</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light">
            De l’analyse du renseignement au déploiement physique, nous fournissons des
            solutions de souveraineté complètes
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {capabilities.map((capability) => (
            <Link
              key={capability.title}
              href={capability.link}
              className="group relative block bg-white border border-neutral-200 hover:border-neutral-900 focus-visible:border-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 transition-colors duration-300"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div
                    aria-hidden="true"
                    className="w-16 h-16 bg-[#05080c] flex items-center justify-center text-white"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={capability.iconPath}
                      />
                    </svg>
                  </div>
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <h3 className="text-2xl font-medium text-neutral-900 mb-4">{capability.title}</h3>

                <p className="text-neutral-600 mb-6 leading-relaxed">{capability.description}</p>

                <dl className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
                  {capability.stats.map((stat) => (
                    <div key={stat.label}>
                      <dd className="text-2xl font-light text-neutral-900 mb-1">{stat.value}</dd>
                      <dt className="text-xs text-neutral-500 uppercase tracking-wider">
                        {stat.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>

              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#05080c] origin-left scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}