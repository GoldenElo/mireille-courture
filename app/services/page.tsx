import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, CALENDLY_URL } from '@/lib/constants'
import Button from '@/components/ui/Button'
import CTA from '@/sections/CTA'

export const metadata: Metadata = {
  title: 'Mes services',
  description:
    "Conseil en image, personal branding, création sur mesure et accompagnement entreprises. Découvrez tous les services de l'Atelier de Mireille Lué.",
  openGraph: {
    title: `Mes services | ${SITE_NAME}`,
    description:
      'Conseil en image, personal branding, création sur mesure et accompagnement entreprises.',
    url: `${SITE_URL}/services`,
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: `Mes services | ${SITE_NAME}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Mes services | ${SITE_NAME}`,
    description:
      'Conseil en image, personal branding, création sur mesure et accompagnement entreprises.',
  },
}

const INDIVIDUAL_SERVICES = [
  {
    id: 'conseil-image',
    title: 'Conseil en image',
    description:
      'Un accompagnement sur mesure pour révéler votre potentiel et affirmer votre présence avec élégance. Ensemble, nous travaillons sur votre garde-robe, votre morphologie, vos couleurs et votre style de vie pour créer une image qui vous ressemble profondément.',
  },
  {
    id: 'personal-branding',
    title: 'Personal branding',
    description:
      'Construisez une identité visuelle forte, cohérente et mémorable. Du shooting photo à votre présence digitale, chaque détail est pensé pour que votre image professionnelle reflète qui vous êtes vraiment et serve vos ambitions.',
  },
  {
    id: 'creation-sur-mesure',
    title: 'Création sur mesure',
    description:
      'Des pièces uniques conçues et réalisées pour sublimer votre silhouette et exprimer votre singularité. De l\'esquisse au porter final, chaque création est une collaboration intime entre votre vision et mon savoir-faire.',
  },
]

const ENTREPRISE_OFFRES = [
  {
    title: 'Formation image professionnelle',
    description:
      'Ateliers collectifs pour harmoniser la présentation de vos équipes et renforcer l\'image de marque de votre entreprise.',
  },
  {
    title: 'Coaching individuel en entreprise',
    description:
      'Accompagnement personnalisé de vos dirigeants, managers ou commerciaux pour développer une présence qui inspire confiance.',
  },
  {
    title: 'Conseil en dress code',
    description:
      'Définition d\'une charte vestimentaire cohérente avec votre culture d\'entreprise et vos enjeux de représentation.',
  },
  {
    title: 'Préparation prise de parole',
    description:
      'Optimisation de l\'image pour les conférences, interviews, événements corporate et prises de parole publiques.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs tracking-luxury uppercase text-gold mb-4">Notre expertise</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal max-w-2xl leading-tight">
            Un accompagnement
            <br />
            sur mesure
          </h1>
        </div>
      </section>

      {/* Services individuels */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14">
            <p className="text-xs tracking-luxury uppercase text-gold-text mb-3">Pour vous</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
              Accompagnements individuels
            </h2>
            <div className="w-10 h-px bg-gold mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INDIVIDUAL_SERVICES.map((service) => (
              <article
                key={service.id}
                className="p-10 border border-linen hover:border-gold transition-colors duration-300 flex flex-col"
              >
                <span className="text-gold text-lg mb-6 block" aria-hidden="true">✦</span>
                <h3 className="font-serif text-2xl font-light text-charcoal mb-4">{service.title}</h3>
                <p className="text-sm text-taupe leading-relaxed mb-8 flex-1">{service.description}</p>
                <Button href="/contact" variant="ghost">
                  Prendre rendez-vous →
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Accompagnement entreprises */}
      <section className="py-20 md:py-32 bg-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-luxury uppercase text-gold-text mb-3">Pour les entreprises</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-snug">
                L&rsquo;image de marque commence par ceux qui la portent
              </h2>
              <div className="w-10 h-px bg-gold mt-5 mb-8" />
              <p className="text-sm text-taupe leading-relaxed mb-6">
                Vos collaborateurs sont les premiers ambassadeurs de votre entreprise. Une image
                cohérente, soignée et authentique renforce la crédibilité de votre marque et
                l&rsquo;engagement de vos équipes.
              </p>
              <p className="text-sm text-taupe leading-relaxed mb-10">
                Mireille intervient directement au sein de votre structure pour des formations,
                coachings ou missions de conseil adaptés à votre secteur et vos enjeux.
              </p>
              <Button href={CALENDLY_URL} variant="solid" target="_blank" rel="noopener noreferrer">
                Discutons de votre projet
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ENTREPRISE_OFFRES.map((offre) => (
                <div key={offre.title} className="p-7 bg-cream">
                  <h3 className="font-serif text-lg font-light text-charcoal mb-3">{offre.title}</h3>
                  <p className="text-xs text-taupe leading-relaxed">{offre.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
