import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Prenez rendez-vous avec l'Atelier de Mireille Lué pour un premier échange autour de votre projet.",
  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    description: "Prenez rendez-vous avec l'Atelier de Mireille Lué.",
    url: `${SITE_URL}/contact`,
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: `Contact | ${SITE_NAME}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact | ${SITE_NAME}`,
    description: "Prenez rendez-vous avec l'Atelier de Mireille Lué.",
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-xs tracking-luxury uppercase text-gold mb-4">Échangeons</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal max-w-2xl leading-tight">
            Prenons contact
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-luxury uppercase text-gold mb-6">Nous trouver</p>
              <div className="space-y-6 text-sm text-taupe">
                <div>
                  <p className="font-medium text-charcoal mb-1">Email</p>
                  <a
                    href="mailto:contact@ateliermireillelue.fr"
                    className="hover:text-gold transition-colors"
                  >
                    contact@ateliermireillelue.fr
                  </a>
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-1">Téléphone</p>
                  <a href="tel:+33600000000" className="hover:text-gold transition-colors">
                    +33 6 00 00 00 00
                  </a>
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-1">Atelier</p>
                  <p>Paris, France</p>
                </div>
              </div>
              <blockquote className="mt-10 p-6 bg-linen border-l-2 border-gold">
                <p className="font-serif text-xl font-light text-charcoal leading-relaxed">
                  &ldquo;Chaque grande aventure de style commence par une conversation.&rdquo;
                </p>
              </blockquote>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
