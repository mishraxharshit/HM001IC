export const CHAIRMAN = {
  name: 'WBZ',
  role: 'Président et fondateur',
  image: '/team/1.jpg',
  quote:
    'La souveraineté repose aujourd’hui sur trois leviers indissociables : le renseignement pour anticiper les risques, la maîtrise des ressources dont les nations dépendent et la protection physique pour les sécuriser. Nous avons fondé USH pour les offrir ensemble, au sein d’un même groupe responsable.',
  bio: 'A fondé USH Industries afin de réunir renseignement, ressources stratégiques et protection de défense au sein d’une structure unique et responsable. Plus de 25 ans d’expérience dans la défense, le renseignement et la gestion de ressources stratégiques, dont des fonctions de direction sur des programmes européens et alignés sur l’OTAN. Préside le Comité exécutif du Groupe et pilote les relations avec les gouvernements et les partenaires souverains.',
  expertise: ['Sécurité stratégique', 'Politique de défense', 'Géopolitique des ressources', 'Relations internationales'],
}

export const EXECUTIVES = [
  {
    name: 'Eric C.S.',
    title: 'Directeur des opérations (COO)',
    expertise: 'Chaîne d’approvisionnement, commerce international',
    background:
      'Responsable des opérations quotidiennes de l’ensemble des divisions, de la sécurité des sites et de la logistique jusqu’à la livraison aux partenaires. Dispose d’une solide expérience de la conduite de programmes complexes de ressources et de chaîne d’approvisionnement en zones à risque.',
    image: '/team/4.jpg',
  },
  {
    name: 'Harshit Mishra',
    title: 'Directeur de la technologie (CTO)',
    expertise: 'Architecte Logiciel, Recherche et Développement',
    background:
      'Dirige la stratégie technologique et la plateforme d intelligence Fractalysium. Se concentre sur la recherche appliquée et l apprentissage cognitif pour l\'évaluation prédictive des risques à destination des clients souverains et industriels.',
    image: '/team/7.jpg',
  },
  {
    name: 'Rémi V. Cauchy',
    title: 'Directeur de la défense',
    expertise: 'Ingénierie balistique, défense',
    background:
      'Dirige Fortress Defense Systems, entité qui englobe la recherche, l’ingénierie et la fabrication de solutions de protection balistique. Ingénieur militaire de formation, avec plus de 20 ans d’expérience dans les programmes de blindage et de protection.',
    image: '/team/2.jpg',
  },
]

// Directors (placeholder names, edit freely). Shown as initials cards, no photo needed.
export const DIRECTORS = [
  { name: 'Isabelle Marchetti', title: 'Directrice des relations institutionnelles' },
  { name: 'Camille Delaunay', title: 'Directrice de la conformité et de l’éthique' },
  { name: 'Élodie Varennes', title: 'Directrice financière' },
]

// Advisory committee, shown by area of expertise.
// The committee's identities are confidential (see the newsroom article on the committee), so no names or photos are published.
// When you are ready to publish a REAL member, add  name: 'Prénom Nom'  to that entry and the card will show the name.
export const ADVISORS: { domain: string; mandate: string; name?: string }[] = [
  { domain: 'Renseignement stratégique', mandate: 'Éclaire l’analyse des risques géopolitiques et la lecture des menaces émergentes.' },
  { domain: 'Ingénierie de défense', mandate: 'Conseille les choix techniques et les standards de qualification des systèmes de protection.' },
  { domain: 'Géopolitique des ressources', mandate: 'Suit l’évolution des chaînes d’approvisionnement en minerais, en énergie et en matières premières.' },
  { domain: 'Finance et investissement', mandate: 'Accompagne la structuration des projets, du financement du négoce et des relations investisseurs.' },
  { domain: 'Droit international et conformité', mandate: 'Veille au respect des sanctions, des régimes de contrôle et des normes anticorruption.' },
  { domain: 'Politiques publiques et institutions', mandate: 'Relie le Groupe aux institutions et aux programmes publics européens et internationaux.' },
]
