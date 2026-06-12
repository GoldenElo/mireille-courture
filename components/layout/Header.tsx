'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE_NAME, CALENDLY_URL } from '@/lib/constants'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-sm' : 'border-b border-linen'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div
                className="w-9 h-9 rounded-full border border-gold flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="font-serif text-gold text-sm">M</span>
              </div>
              <div className="leading-tight">
                <p className="font-serif text-[13px] tracking-[0.12em] text-charcoal group-hover:text-gold transition-colors">
                  {SITE_NAME}
                </p>
                <p className="text-[9px] tracking-[0.14em] uppercase text-taupe">
                  Conseillère en image &amp; Créatrice de mode
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden xl:flex items-center gap-7"
              aria-label="Navigation principale"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className={`relative text-[13px] tracking-[0.12em] uppercase py-1 transition-colors whitespace-nowrap ${
                    pathname === link.href
                      ? 'text-gold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold'
                      : 'text-charcoal hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="/contact"
              className="hidden xl:inline-block bg-gold text-white text-[13px] tracking-[0.12em] uppercase px-5 py-2.5 hover:bg-[#b8935f] transition-colors flex-shrink-0"
            >
              Contacter
            </a>

            {/* Mobile burger */}
            <button
              className="xl:hidden p-2 text-charcoal"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-cream flex flex-col"
          >
            <div className="flex items-center justify-between h-20 px-6 border-b border-linen">
              <Link
                href="/"
                className="font-serif text-sm tracking-[0.12em] text-charcoal"
                onClick={() => setIsOpen(false)}
              >
                {SITE_NAME}
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Fermer le menu"
                className="p-2 text-charcoal"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            <nav
              className="flex flex-col flex-1 justify-center px-10 gap-7"
              aria-label="Navigation mobile"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={`${link.href}-${link.label}-m`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`text-[16px] tracking-[0.15em] uppercase transition-colors ${
                      pathname === link.href ? 'text-gold' : 'text-charcoal hover:text-gold'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 }}
                className="mt-2"
              >
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold text-white text-[13px] tracking-[0.12em] uppercase px-6 py-3 hover:bg-[#b8935f] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Réserver un appel
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
