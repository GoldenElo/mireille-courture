'use client'

import { useState, useEffect } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

export default function FloatingBooking() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Réserver un rendez-vous avec Mireille"
      className={`fixed bottom-6 right-6 z-40 bg-gold text-cream text-xs tracking-luxury uppercase px-6 py-3.5 shadow-lg hover:bg-charcoal transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      Réserver
    </a>
  )
}
