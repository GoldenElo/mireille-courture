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

const GALLERY = [
  { src: '/images/gallery/creation-1.jpg', label: 'Robe de soirée' },
  { src: '/images/gallery/creation-2.jpg', label: 'Ensemble tailleur' },
  { src: '/images/gallery/creation-3.jpg', label: 'Robe cocktail' },
  { src: '/images/gallery/creation-4.jpg', label: 'Veste sur mesure' },
  { src: '/images/gallery/creation-5.jpg', label: 'Robe de mariée' },
  { src: '/images/gallery/creation-6.jpg', label: 'Tenue de ville' },
  { src: '/images/gallery/creation-7.jpg', label: 'Ensemble casual chic' },
  { src: '/images/gallery/creation-8.jpg', label: 'Robe longue' },
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

      {/* L'art du sur mesure */}
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

      {/* Galerie */}
      <section className="py-20 md:py-32 bg-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs tracking-luxury uppercase text-gold-text mb-3">Nos réalisations</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
              La galerie
            </h2>
            <div className="w-10 h-px bg-gold mt-5 mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {GALLERY.map((item, i) => (
              <div
                key={item.src}
                className={`relative overflow-hidden bg-cream group ${
                  i === 0 || i === 4 ? 'md:row-span-2 aspect-[3/4] md:aspect-auto' : 'aspect-square'
                }`}
              >
                <ImageWithFallback
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fallbackLabel={item.label}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-xs tracking-luxury uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/contact" variant="outline">
              Commander une création
            </Button>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
