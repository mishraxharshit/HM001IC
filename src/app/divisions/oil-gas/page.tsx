import type { Metadata } from 'next'
import DivisionPage from '@/components/DivisionPage'
import { OIL_GAS } from '@/lib/oil-gas-data'

export const metadata: Metadata = {
  title: 'Pétrole et gaz | USH Industries',
  description: 'Division Pétrole et gaz d’USH Industries : approvisionnement en pétrole brut, produits raffinés, GNL et gaz naturel, avec logistique et protection des corridors.',
}

export default function OilGasPage() {
  return <DivisionPage d={OIL_GAS} />
}
