import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import SectionTitle from '@/components/ui/SectionTitle'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    "Découvrez l'histoire et la vision de l'Atelier de Mireille Lué, votre experte en conseil en image et personal branding.",
  openGraph: {
    title: `À propos | ${SITE_NAME}`,
    description: "Découvrez l'histoire et la vision de l'Atelier de Mireille Lué.",
    url: `${SITE_URL}/a-propos`,
    images: [{ url: '/images/about.jpg', width: 1200, height: 630, alt: `À propos | ${SITE_NAME}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `À propos | ${SITE_NAME}`,
    description: "Découvrez l'histoire et la vision de l'Atelier de Mireille Lué.",
  },
}

const VALUES = [
  {
    title: 'Authenticité',
    text: 'Nous croyons que le style le plus puissant est celui qui vous ressemble vraiment.',
  },
  {
    title: 'Excellence',
    text: 'Chaque détail compte. Nous nous engageons à la plus haute qualité dans chaque projet.',
  },
  {
    title: 'Confiance',
    text: 'Notre accompagnement est un espace sécurisé pour explorer, oser et se transformer.',
  },
]

export default function APropos() {
  return (
    <>
      <section className="pt-32 pb-20 bg-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs tracking-luxury uppercase text-gold mb-4">Notre maison</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal max-w-2xl leading-tight">
            L&rsquo;élégance comme art de vivre
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] w-full max-w-md">
              <ImageWithFallback
                src="/images/about.jpg"
                alt="Atelier de Mireille Lué"
                fill
                className="object-cover"
                fallbackLabel="À propos"
              />
            </div>
            <div>
              <SectionTitle label="Notre histoire" title="Une vision, une passion" />
              <div className="space-y-4 text-sm text-taupe leading-relaxed">
                <p>
                  L&rsquo;Atelier de Mireille Lué est né d&rsquo;une conviction profonde : chaque personne possède une
                  beauté singulière qui mérite d&rsquo;être révélée, cultivée, célébrée. Fondé sur des années
                  d&rsquo;expérience dans le domaine de l&rsquo;image et de la mode, notre atelier s&rsquo;est
                  construit autour d&rsquo;une approche qui place l&rsquo;humain au cœur de chaque
                  accompagnement.
                </p>
                <p>
                  Notre philosophie est simple mais exigeante : écouter avant de conseiller, comprendre
                  avant de créer, respecter la singularité de chaque cliente pour l&rsquo;aider à trouver
                  son propre chemin vers l&rsquo;élégance.
                </p>
                <p>
                  Chaque rencontre est une promesse : celle de repartir avec une image plus juste, plus
                  forte, plus vous.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="outline">
                  Nous rencontrer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle label="Ce qui nous guide" title="Nos valeurs" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {VALUES.map((value) => (
              <div key={value.title} className="p-8 bg-cream">
                <h3 className="font-serif text-2xl font-light text-charcoal mb-4">{value.title}</h3>
                <p className="text-sm text-taupe leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
