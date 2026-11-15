export interface Slide {
  image: string
  category: string
  title: string
  stat: string
  statLabel: string
  description: string
}

export const SLIDES: Slide[] = [
  {
    image: '/photos/p6.jpg',
    category: 'Protection individuelle',
    title: 'Plaques de protection balistique certifiées NIJ',
    stat: 'NIJ III+',
    statLabel: 'Certifié contre les munitions de fusil',
    description: 'Plaques de blindage rigides en composite PEUHMM conçues pour arrêter les munitions OTAN 7,62×51 mm et 5,56×45 mm. Le meilleur rapport poids/protection de sa catégorie.',
  },
  {
    image: '/media/field.jpg',
    category: 'Blindage de véhicules',
    title: 'Systèmes de blindage de véhicules tactiques',
    stat: 'STANAG 4569',
    statLabel: 'Conforme niveau 4 OTAN',
    description: 'Kits balistiques modulaires pour SUV, véhicules blindés de transport de troupes et convois VIP. Panneaux de portes, plancher anti-explosion et vitrages classés B7, déployables en 72 heures.',
  },
  {
    image: '/photos/p2.jpg',
    category: 'Blindage transparent',
    title: 'Verre balistique et systèmes de boucliers',
    stat: 'UL 752 Lv.8',
    statLabel: 'Classé anti-fusil',
    description: 'Verre en polycarbonate multicouche pour banques, ambassades et points de contrôle. Fabrication sur mesure. Clarté optique. Certifié EN 1063.',
  },
  {
    image: '/photos/p4.jpg',
    category: 'Protection des forces',
    title: 'Sécurité des infrastructures critiques',
    stat: '200+ clients',
    statLabel: 'Gouvernements · Armées · Entreprises',
    description: 'Sécurité physique de bout en bout pour ambassades, centres de données et corridors logistiques. Évaluation des menaces, renforcement des périmètres, intervention armée.',
  }
]

export const PRODUCTS = [
  {
    tag: 'Protection individuelle',
    name: 'Plaque de protection rigide AT-300',
    desc: 'Plaque autonome de coupe SAPI en composite PEUHMM. Arrête les munitions de fusil au niveau de menace III+. Conçue pour un usage prolongé sur le terrain.',
    specs: [
      { label: 'Niveau de protection', val: 'NIJ 0101.07 III+' },
      { label: 'Poids', val: '1,8 kg par plaque' },
      { label: 'Épaisseur', val: '18 mm' },
      { label: 'Munitions testées', val: '7,62×51 OTAN, 5,56×45' },
    ],
    image: '/photos/p3.jpg',
  },
  {
    tag: 'Protection souple',
    name: 'Gilet discret AT-120',
    desc: 'Gilet pare-balles souple ultra-fin en Dyneema, porté sous les vêtements. Idéal pour les forces de l’ordre, le personnel de sécurité et l’escorte de personnalités.',
    specs: [
      { label: 'Niveau de protection', val: 'NIJ IIIA (9 mm, .44 Mag)' },
      { label: 'Poids', val: '0,9 kg le gilet complet' },
      { label: 'Épaisseur', val: '5 mm' },
      { label: 'Tailles', val: 'XS à 3XL + sur mesure' },
    ],
    image: '/photos/p1.jpg',
  },
  {
    tag: 'Blindage véhicule',
    name: 'Kit de blindage véhicule AT-V4',
    desc: 'Kit balistique modulaire à boulonner pour SUV et véhicules tactiques légers. Panneaux de portes, protection anti-explosion du plancher et vitrages renforcés inclus.',
    specs: [
      { label: 'Niveau de protection', val: 'STANAG 4569 niveau 4' },
      { label: 'Classe du vitrage', val: 'EN 1063 BR7' },
      { label: 'Installation', val: '48 à 72 heures' },
      { label: 'Compatibilité', val: 'Toyota, Ford, BMW, GM' },
    ],
    image: '/media/armour.jpg',
  },
  {
    tag: 'Transparent Armor',
    name: 'Verre balistique AT-G8',
    desc: 'Composite polycarbonate multicouche pour comptoirs, postes de garde et centres de commandement. Découpe sur mesure. Revêtement anti-éclats.',
    specs: [
      { label: 'Niveau de protection', val: 'UL 752 niveau 8' },
      { label: 'Plage d’épaisseur', val: '19 mm à 76 mm' },
      { label: 'Panneau maximal', val: '2 400 × 1 200 mm' },
      { label: 'Délai', val: '4 à 6 semaines sur mesure' },
    ],
    image: '/photos/p5.jpg',
  },
]

export const QUALITY_TYPES = [
  {
    icon: '',
    name: 'Essais balistiques en tir réel',
    desc: 'Chaque produit subit des essais en tir réel sur notre pas de tir certifié. Les résultats sont documentés et livrés avec chaque commande.',
    image: '/media/field.jpg',
  },
  {
    icon: '',
    name: 'Vérification des matériaux',
    desc: 'Les composites PEUHMM, Dyneema et céramique sont testés pour leur résistance à la traction et l’intégrité des fibres avant le début de la production.',
    image: '/media/forge.jpg',
  },
  {
    icon: '',
    name: 'Durabilité environnementale',
    desc: 'Les blindages sont soumis à des cycles de température, d’humidité et d’UV extrêmes pour confirmer leurs performances dans tous les environnements de déploiement.',
    image: '/media/walk.jpg',
  },
  {
    icon: '',
    name: 'Audit par un tiers',
    desc: 'Des laboratoires indépendants vérifient chaque année nos performances balistiques. Des certificats sont disponibles sur demande pour chaque gamme de produits.',
    image: '/media/workshop.jpg',
  },
]

export const CERTS = [
  { code: 'NIJ 0101.07', label: 'Norme américaine de protection individuelle' },
  { code: 'STANAG 4569', label: 'Protection des véhicules OTAN' },
  { code: 'EN 1063', label: 'Verre balistique européen' },
  { code: 'UL 752', label: 'Matériaux pare-balles' },
  { code: 'ISO 9001', label: 'Management de la qualité' },
]

