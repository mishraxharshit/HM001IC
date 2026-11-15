import type { Metadata } from 'next'
import DivisionPage from '@/components/DivisionPage'
import { MULTI_COMMODITIES } from '@/lib/multi-commodities-data'

export const metadata: Metadata = {
  title: 'Négoce multi-matières | USH Industries',
  description: 'Division Négoce multi-matières d’USH Industries : négoce physique de métaux, minerais, énergie et matières industrielles, avec financement et couverture des risques.',
}

export default function MultiCommoditiesPage() {
  return <DivisionPage d={MULTI_COMMODITIES} />
}
