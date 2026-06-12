'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Sparkles,
  Scale,
  Building2,
  ShoppingBag,
  Scissors,
  Palette,
} from 'lucide-react'

const PILLARS = [
  {
    icon: Sparkles,
    title: 'Femmes\nprofessionnelles',
    description: 'Affirmez votre style, gagnez en impact et en confiance.',
  },
  {
    icon: Scale,
    title: 'Changement\nde poids',
    description: 'Reconnexion à soi et valorisation de votre nouvelle silhouette.',
  },
  {
    icon: Building2,
    title: 'Entreprises',
    description: 'Ateliers, formations et conférences pour valoriser vos équipes et votre image.',
  },
  {
    icon: ShoppingBag,
    title: 'Boutiques\n& marques',
    description: 'Conseil en image, merchandising et identité visuelle.',
  },
  {
    icon: Scissors,
    title: 'Création\nsur mesure',
    description: 'Des pièces uniques, conçues pour sublimer votre personnalité.',
  },
  {
    icon: Palette,
    title: 'Colorimétrie\n& style',
    description: 'Découvrez les couleurs qui illuminent votre beauté naturelle.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl md:text-4xl font-light text-charcoal text-center mb-14 max-w-2xl mx-auto leading-snug"
        >
          Des accompagnements{' '}
          <em className="not-italic text-gold">sur-mesure</em>{' '}
          pour chaque étape de votre vie.
        </motion.h2>

        {/* Pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-linen">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="px-6 py-8 md:py-10 flex flex-col items-start gap-4"
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="text-gold flex-shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-[10px] tracking-[0.18em] uppercase text-charcoal font-medium leading-relaxed whitespace-pre-line">
                  {pillar.title}
                </h3>
                <p className="text-xs text-taupe leading-relaxed font-light">
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
