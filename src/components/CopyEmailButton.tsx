'use client'

import { useEffect, useRef, useState } from 'react'

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable (e.g. insecure context); the address is still visible to select.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
    >
      <span aria-live="polite">{copied ? 'Copié' : 'Copier l’adresse'}</span>
    </button>
  )
}