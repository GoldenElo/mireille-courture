import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingBooking from '@/components/ui/FloatingBooking'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Conseil en Image & Personal Branding`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Conseil en Image & Personal Branding`,
    description: SITE_DESCRIPTION,
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Conseil en Image & Personal Branding`,
    description: SITE_DESCRIPTION,
    images: ['/images/hero.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-cream text-charcoal font-sans antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingBooking />
      </body>
    </html>
  )
}
