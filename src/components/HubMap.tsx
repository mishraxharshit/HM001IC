'use client'

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import type { Map as LMap, CircleMarker, Polyline } from 'leaflet'

export interface MapMarker { name: string; lat: number; lng: number; hq?: boolean }
export interface MapRegion {
  id: string
  name: string
  view: { center: [number, number]; zoom: number }
  markers: MapMarker[]
}

const HQ_COLOR = '#c4302b'
const BASE = '#9db0c4'
const ACTIVE = '#ffffff'

// Open-source mapping: Leaflet + OpenStreetMap data. The dark look comes from a CSS filter on the tile pane.
export default function HubMap({ regions, activeId }: { regions: MapRegion[]; activeId: string }) {
  const el = useRef<HTMLDivElement>(null)
  const state = useRef<{
    map: LMap
    dots: { regionId: string; dot: CircleMarker; hq: boolean }[]
    lines: { regionId: string; line: Polyline }[]
  } | null>(null)

  // Create the map once.
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const L = (await import('leaflet')).default
      if (cancelled || !el.current) return

      const first = regions.find((r) => r.id === activeId) ?? regions[0]
      const map = L.map(el.current, {
        center: first.view.center,
        zoom: first.view.zoom,
        minZoom: 2,
        scrollWheelZoom: false, // keeps page scrolling smooth; users zoom with +/- or ctrl-scroll
        worldCopyJump: true,
        attributionControl: false, // replaced below by a compact, prefix-free credit
      })

      // Default: OpenStreetMap's public tiles (no API key). To use a keyed provider such as MapTiler or
      // Stadia, set NEXT_PUBLIC_MAP_TILE_URL (e.g. https://api.maptiler.com/maps/dataviz-dark/{z}/{x}/{y}.png?key=YOUR_KEY).
      const customUrl = process.env.NEXT_PUBLIC_MAP_TILE_URL
      L.tileLayer(customUrl || 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>',
      }).addTo(map)

      // Discreet credit: no Leaflet logo/flag, tiny text. The OpenStreetMap credit itself must stay (it is a licence condition).
      if (!document.getElementById('ush-map-credit-css')) {
        const st = document.createElement('style')
        st.id = 'ush-map-credit-css'
        st.textContent = '.leaflet-control-attribution{background:transparent!important;color:rgba(255,255,255,.35)!important;font-size:9px!important;line-height:1.2;padding:0 6px 4px!important}.leaflet-control-attribution a{color:rgba(255,255,255,.45)!important;text-decoration:none!important}.leaflet-control-attribution a:hover{color:#fff!important}'
        document.head.appendChild(st)
      }
      L.control.attribution({ prefix: false, position: 'bottomright' }).addTo(map)

      const all = regions.flatMap((r) => r.markers.map((m) => ({ ...m, regionId: r.id })))
      const hq = all.find((m) => m.hq)

      const lines: { regionId: string; line: Polyline }[] = []
      if (hq) {
        all.filter((m) => !m.hq).forEach((m) => {
          const line = L.polyline([[hq.lat, hq.lng], [m.lat, m.lng]], { color: BASE, weight: 1, opacity: 0.45, dashArray: '4 6' }).addTo(map)
          lines.push({ regionId: m.regionId, line })
        })
      }

      const dots = all.map((m) => {
        const dot = L.circleMarker([m.lat, m.lng], {
          radius: m.hq ? 9 : 7, color: m.hq ? HQ_COLOR : BASE, weight: 2, fillColor: m.hq ? HQ_COLOR : '#05080c', fillOpacity: 1,
        }).addTo(map)
        dot.bindTooltip(m.hq ? `${m.name} · Siège` : m.name, { permanent: true, direction: 'top', offset: [0, -8], className: 'ush-map-label' })
        return { regionId: m.regionId, dot, hq: !!m.hq }
      })

      state.current = { map, dots, lines }
      applyActive(activeId)
      requestAnimationFrame(() => map.invalidateSize())
    })()

    return () => {
      cancelled = true
      state.current?.map.remove()
      state.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function applyActive(id: string) {
    const s = state.current
    if (!s) return
    s.dots.forEach(({ regionId, dot, hq }) => {
      const on = regionId === id
      dot.setStyle({ color: hq ? HQ_COLOR : on ? ACTIVE : BASE, weight: on ? 3 : 2, fillColor: hq ? HQ_COLOR : on ? ACTIVE : '#05080c' })
      dot.setRadius(hq ? 9 : on ? 9 : 7)
    })
    s.lines.forEach(({ regionId, line }) => {
      const on = regionId === id
      line.setStyle({ color: on ? ACTIVE : BASE, opacity: on ? 0.9 : 0.35, weight: on ? 1.5 : 1, dashArray: on ? undefined : '4 6' })
    })
  }

  // React to region changes.
  useEffect(() => {
    const s = state.current
    const r = regions.find((x) => x.id === activeId)
    if (!s || !r) return
    s.map.flyTo(r.view.center, r.view.zoom, { duration: 1.1 })
    applyActive(activeId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId])

  return (
    <div
      ref={el}
      role="region"
      aria-label="Carte des régions et pôles opérationnels d’USH"
      className={`relative isolate z-0 h-[360px] w-full bg-[#05080c] md:h-[480px] ${process.env.NEXT_PUBLIC_MAP_TILE_URL ? '' : 'ush-dark-tiles'}`}
    />
  )
}
