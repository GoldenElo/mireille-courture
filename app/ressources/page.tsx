import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import Button from '@/components/ui/Button'
import CTA from '@/sections/CTA'

export const metadata: Metadata = {
  title: 'Ressources',
  description:
    "Articles, conseils et vidéos YouTube de Mireille Lué pour révéler votre image, affiner votre style et affirmer votre présence.",
  openGraph: {
    title: `Ressources | ${SITE_NAME}`,
    description: 'Articles et vidéos pour révéler votre image.',
    url: `${SITE_URL}/ressources`,
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: `Ressources | ${SITE_NAME}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Ressources | ${SITE_NAME}`,
    description: 'Articles et vidéos pour révéler votre image.',
  },
}

const ARTICLES = [
  {
    id: 1,
    category: 'Conseil en image',
    title: 'Comment trouver son style signature en 5 étapes',
    excerpt:
      'Découvrez une méthode simple et efficace pour identifier le style qui vous correspond vraiment, et le cultiver au quotidien.',
    date: 'Bientôt disponible',
  },
  {
    id: 2,
    category: 'Personal branding',
    title: 'Pourquoi votre image professionnelle est votre meilleur atout',
    excerpt:
      "Dans un monde où la première impression se forme en moins de 7 secondes, votre apparence parle avant même que vous n'ouvriez la bouche.",
    date: 'Bientôt disponible',
  },
  {
    id: 3,
    category: 'Couleurs',
    title: 'Quelle palette de couleurs vous correspond ?',
    excerpt:
      'Comprendre son colorimétrie personnelle change tout. Voici comment identifier les teintes qui illuminent votre teint et renforcent votre présence.',
    date: 'Bientôt disponible',
  },
  {
    id: 4,
    category: 'Entreprises',
    title: "L'image en entreprise : un levier de confiance sous-estimé",
    excerpt:
      "Au-delà du dress code, l'image de vos équipes reflète les valeurs de votre marque. Comment en faire un avantage concurrentiel ?",
    date: 'Bientôt disponible',
  },
]

const VIDEOS = [
  {
    id: 'v1',
    title: 'Comment s\'habiller selon sa morphologie',
    description: 'Les clés pour valoriser votre silhouette et vous sentir à l\'aise dans vos vêtements.',
  },
  {
    id: 'v2',
    title: 'Les erreurs de style à éviter absolument',
    description: 'Tour d\'horizon des faux pas vestimentaires les plus courants et comment les corriger.',
  },
  {
    id: 'v3',
    title: 'Construire une garde-robe capsule',
    description: 'Avoir moins mais mieux : la méthode pour une garde-robe cohérente, polyvalente et élégante.',
  },
]

export default function RessourcesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs tracking-luxury uppercase text-gold mb-4">Inspirations</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal max-w-2xl leading-tight">
            Ressources
          </h1>
          <p className="text-sm text-taupe mt-6 max-w-xl leading-relaxed">
            Articles, conseils et vidéos pour vous accompagner dans votre transformation stylistique.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14">
            <p className="text-xs tracking-luxury uppercase text-gold-text mb-3">À lire</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">Articles</h2>
            <div className="w-10 h-px bg-gold mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES.map((article) => (
              <article
                key={article.id}
                className="border-t border-linen pt-8 flex flex-col gap-3 group"
              >
                <p className="text-xs tracking-luxury uppercase text-gold-text">{article.category}</p>
                <h3 className="font-serif text-2xl font-light text-charcoal leading-snug group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-taupe leading-relaxed flex-1">{article.excerpt}</p>
                <p className="text-xs text-taupe/60 italic mt-2">{article.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vidéos YouTube */}
      <section className="py-20 md:py-32 bg-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14">
            <p className="text-xs tracking-luxury uppercase text-gold-text mb-3">À regarder</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
              Vidéos YouTube
            </h2>
            <div className="w-10 h-px bg-gold mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VIDEOS.map((video) => (
              <div key={video.id} className="flex flex-col gap-4 group">
                {/* Placeholder vidéo */}
                <div className="relative aspect-video bg-charcoal/10 flex items-center justify-center overflow-hidden">
                  <div className="flex flex-col items-center gap-3 text-taupe">
                    {/* Icône play */}
                    <div className="w-14 h-14 rounded-full border border-taupe/40 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-xs tracking-luxury uppercase">Vidéo à venir</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-light text-charcoal leading-snug mb-2 group-hover:text-gold transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-taupe leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button
              href="https://www.youtube.com/@mireille_lue"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir toutes les vidéos sur YouTube
            </Button>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
