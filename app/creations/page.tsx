import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import SectionTitle from '@/components/ui/SectionTitle'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import Button from '@/components/ui/Button'
import CTA from '@/sections/CTA'

export const metadata: Metadata = {
  title: 'Créations',
  description:
    "Découvrez les créations sur mesure de l'Atelier de Mireille Lué : des pièces uniques conçues pour sublimer votre silhouette.",
  openGraph: {
    title: `Créations | ${SITE_NAME}`,
    description: 'Des pièces uniques conçues pour sublimer votre silhouette.',
    url: `${SITE_URL}/creations`,
    images: [{ url: '/images/creation-sur-mesure.jpg', width: 1200, height: 630, alt: `Créations | ${SITE_NAME}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Créations | ${SITE_NAME}`,
    description: 'Des pièces uniques conçues pour sublimer votre silhouette.',
  },
}

const STEPS = [
  'Consultation personnalisée',
  'Choix des matières',
  'Patron sur mesure',
  'Essayages & ajustements',
  'Livraison',
]

export default function CreationsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs tracking-luxury uppercase text-gold mb-4">Atelier</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal max-w-2xl leading-tight">
            Créations sur mesure
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] w-full max-w-md">
              <ImageWithFallback
                src="/images/creation-sur-mesure.jpg"
                alt="Création sur mesure"
                fill
                className="object-cover"
                fallbackLabel="Création sur mesure"
              />
            </div>
            <div>
              <SectionTitle label="Notre atelier" title="L'art du sur mesure" />
              <div className="space-y-4 text-sm text-taupe leading-relaxed mb-8">
                <p>
                  Chaque création naît d&rsquo;un dialogue. Un échange sur vos envies, votre silhouette,
                  votre vie. Nous sélectionnons ensemble les tissus, les coupes, les détails qui feront de
                  cette pièce une expression unique de qui vous êtes.
                </p>
                <p>
                  De l&rsquo;esquisse à l&rsquo;ajustement final, notre atelier vous accompagne à chaque étape avec
                  patience et expertise. Le résultat : une pièce qui vous appartient entièrement.
                </p>
              </div>
              <ol className="space-y-3 mb-8">
                {STEPS.map((step, i) => (
                  <li key={step} className="flex items-center gap-4">
                    <span className="text-gold font-serif text-lg w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-charcoal">{step}</span>
                  </li>
                ))}
              </ol>
              <Button href="/contact" variant="outline">
                Commencer votre projet
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
