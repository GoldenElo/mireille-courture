import type { Metadata } from 'next'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import About from '@/sections/About'
import Creations from '@/sections/Creations'
import Testimonials from '@/sections/Testimonials'
import CTA from '@/sections/CTA'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} — Conseil en Image & Personal Branding`,
  description: SITE_DESCRIPTION,
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Creations />
      <Testimonials />
      <CTA />
    </>
  )
}
