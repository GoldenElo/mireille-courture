'use client'

import Script from 'next/script'
import { useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'
import { CALENDLY_URL } from '@/lib/constants'

export default function Booking() {
  const [loaded, setLoaded] = useState(false)

  const widgetUrl = `${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=F8F6F3&text_color=2E2E2E&primary_color=C4A16D`

  return (
    <section className="py-20 md:py-32 bg-linen" id="reserver">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => setLoaded(true)}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <SectionTitle
          label="Réservation"
          title="Prenez rendez-vous"
          subtitle="Choisissez le créneau qui vous convient pour un premier échange personnalisé avec Mireille."
          centered
        />

        <div className="relative mt-4">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center min-h-[600px]">
              <span className="text-xs tracking-luxury uppercase text-taupe animate-pulse">
                Chargement du calendrier…
              </span>
            </div>
          )}
          <div
            className="calendly-inline-widget w-full"
            data-url={widgetUrl}
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </section>
  )
}
