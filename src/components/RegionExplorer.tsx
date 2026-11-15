'use client'

import { useState } from 'react'
import HubMap, { type MapMarker } from '@/components/HubMap'

export interface Region {
  id: string
  name: string
  view: { center: [number, number]; zoom: number }
  markers: MapMarker[]
  summary: string
  hubs: string[]
  sectors: string[]
  capabilities: string[]
}

export default function RegionExplorer({ regions }: { regions: Region[] }) {
  const [activeId, setActiveId] = useState(regions[0].id)
  const active = regions.find((r) => r.id === activeId) ?? regions[0]

  return (
    <div className="grid gap-px border border-neutral-200 bg-neutral-200 lg:grid-cols-[320px_1fr]">
      {/* Region list */}
      <div role="tablist" aria-label="Régions d’intervention" className="flex flex-row overflow-x-auto bg-white lg:flex-col lg:overflow-visible">
        {regions.map((r, i) => {
          const on = r.id === activeId
          return (
            <button
              key={r.id}
              role="tab"
              aria-selected={on}
              onClick={() => setActiveId(r.id)}
              className={`flex shrink-0 items-center gap-4 border-b border-neutral-200 px-6 py-5 text-left transition-colors lg:shrink ${
                on ? 'bg-[#05080c] text-white' : 'bg-white text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              <span className={`text-xs font-semibold tracking-[0.25em] ${on ? 'text-[#9db0c4]' : 'text-[#2b4f9c]'}`}>{String(i + 1).padStart(2, '0')}</span>
              <span className="whitespace-nowrap text-base font-semibold tracking-tight">{r.name}</span>
            </button>
          )
        })}
      </div>

      {/* Detail */}
      <div className="bg-white">
        <HubMap regions={regions} activeId={activeId} />

        <div className="p-8 md:p-10">
          <h3 className="text-3xl font-semibold tracking-tight">{active.name}</h3>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-neutral-600">{active.summary}</p>
          <dl className="mt-8 grid gap-8 border-t border-neutral-200 pt-8 md:grid-cols-3">
            {([['Pôles', active.hubs], ['Secteurs', active.sectors], ['Capacités', active.capabilities]] as const).map(([label, items]) => (
              <div key={label}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#2b4f9c]">{label}</dt>
                <dd className="mt-3 space-y-2">
                  {items.map((i) => (
                    <p key={i} className="flex gap-3 text-sm text-neutral-700"><span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#2b4f9c]" />{i}</p>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
