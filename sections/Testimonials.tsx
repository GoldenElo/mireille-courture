'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <p className="text-center text-[10px] tracking-[0.3em] uppercase text-charcoal mb-12">
          Elles témoignent
        </p>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-linen p-8 md:p-10 flex flex-col">
              <span
                className="font-serif text-5xl text-gold leading-none select-none mb-4"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-sm text-charcoal leading-relaxed text-center flex-1 font-light">
                {t.content}
              </p>
              <p className="text-xs text-taupe text-center mt-8 italic">
                &mdash; {t.name}, {t.role}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="bg-linen p-8 flex flex-col"
              >
                <span
                  className="font-serif text-5xl text-gold leading-none mb-4"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="text-sm text-charcoal leading-relaxed text-center font-light">
                  {TESTIMONIALS[active].content}
                </p>
                <p className="text-xs text-taupe text-center mt-6 italic">
                  &mdash; {TESTIMONIALS[active].name}, {TESTIMONIALS[active].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6" role="tablist" aria-label="Témoignages">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Témoignage ${i + 1} sur ${TESTIMONIALS.length}`}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  i === active ? 'bg-gold' : 'bg-taupe/25'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
