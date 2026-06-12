'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="min-h-[85vh] grid grid-cols-1 md:grid-cols-2 pt-20 md:pt-0">
      {/* Text column */}
      <div className="flex items-center bg-cream px-8 md:px-14 lg:px-20 py-20 md:py-0 order-2 md:order-1 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-lg"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[10px] tracking-[0.2em] uppercase text-taupe mb-5"
          >
            Conseillère en image &amp; Créatrice de mode
          </motion.p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-light text-charcoal leading-[1.15] mb-5">
            Révélez votre image,<br />
            affirmez votre essence.
          </h1>

          <div className="w-12 h-px bg-gold mb-6" aria-hidden="true" />

          <p className="text-sm text-taupe leading-relaxed mb-8 font-light max-w-sm">
            Conseillère en image et créatrice de mode, j&rsquo;accompagne les femmes
            professionnelles à rayonner avec confiance, élégance et authenticité.
          </p>

          <Button href="/services" variant="solid">
            Découvrir mes services
          </Button>
        </motion.div>
      </div>

      {/* Image column */}
      <div className="relative aspect-[4/5] md:aspect-auto md:min-h-0 order-1 md:order-2 md:pt-20">
        <Image
          src="/images/hero.jpg"
          alt="Mireille — Conseillère en image et créatrice de mode"
          fill
          priority
          className="object-cover object-center md:object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}
