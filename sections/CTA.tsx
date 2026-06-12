'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { CALENDLY_URL } from '@/lib/constants'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 min-h-[480px] md:min-h-[540px]"
    >
      {/* Image column */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative min-h-[50vw] md:min-h-0 order-2 md:order-1"
      >
        <Image
          src="/images/cta-banner.jpg"
          alt="Prenez rendez-vous avec Mireille"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Gold column */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="flex items-center bg-gold px-8 md:px-14 lg:px-20 py-16 md:py-0 order-1 md:order-2"
      >
        <div className="max-w-md w-full">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white leading-snug mb-5">
            Prête à révéler la meilleure version de vous-même&nbsp;?
          </h2>
          <p className="text-sm text-white/80 leading-relaxed mb-8 font-light">
            Prenons le temps d&rsquo;échanger sur vos besoins et construisons ensemble
            votre transformation.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-white text-[11px] tracking-[0.18em] uppercase px-8 py-3.5 hover:bg-white hover:text-gold transition-all duration-300 font-medium"
          >
            Réserver un appel découverte
          </a>
        </div>
      </motion.div>
    </section>
  )
}
