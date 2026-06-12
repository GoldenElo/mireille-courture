import Link from 'next/link'
import { NAV_LINKS, SITE_NAME, SOCIAL_LINKS } from '@/lib/constants'

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const IconYouTube = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const IconTikTok = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34v-7a8.16 8.16 0 0 0 4.77 1.52V6.37a4.85 4.85 0 0 1-1-.32z" />
  </svg>
)

const IconLinktree = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7.953 15.066c-.08.163-.08.325-.08.488.08.731.732 1.219 1.463 1.219h.569v3.9c0 .812.65 1.3 1.3 1.3h1.626c.65 0 1.3-.488 1.3-1.3v-3.9h.569c.731 0 1.382-.488 1.463-1.219 0-.163 0-.325-.081-.488l-3.006-5.2a.985.985 0 0 0-.813-.487.985.985 0 0 0-.812.487l-3.498 5.2zm4.31-6.58 2.763-4.88c.081-.162.162-.325.162-.568 0-.731-.65-1.3-1.381-1.3h-.569V.406C13.238.163 13.075 0 12.75 0h-1.626C10.8 0 10.638.163 10.638.406v1.332h-.569c-.731 0-1.381.569-1.381 1.3 0 .243.081.406.162.569l2.844 4.879c.162.243.325.406.569.406.244 0 .406-.163.569-.406h.431z" />
  </svg>
)

const SOCIALS = [
  { key: 'instagram', href: SOCIAL_LINKS.instagram, label: 'Instagram', Icon: IconInstagram },
  { key: 'youtube', href: SOCIAL_LINKS.youtube, label: 'YouTube', Icon: IconYouTube },
  { key: 'tiktok', href: SOCIAL_LINKS.tiktok, label: 'TikTok', Icon: IconTikTok },
  { key: 'linktree', href: SOCIAL_LINKS.linktree, label: 'Linktree', Icon: IconLinktree },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-serif text-2xl tracking-wider mb-4">{SITE_NAME}</p>
            <p className="text-cream/60 text-sm leading-relaxed">
              L&rsquo;art de sublimer votre image.
              <br />
              Conseil en image, personal branding
              <br />
              et création sur mesure.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-luxury uppercase text-gold mb-6">Navigation</p>
            <nav className="flex flex-col gap-3" aria-label="Navigation du pied de page">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs tracking-luxury uppercase text-gold mb-6">Contact</p>
            <div className="flex flex-col gap-3 text-sm text-cream/70">
              <a href="mailto:contact@ateliermireillelue.fr" className="hover:text-gold transition-colors">
                contact@ateliermireillelue.fr
              </a>
              <a href="tel:+33600000000" className="hover:text-gold transition-colors">
                +33 6 00 00 00 00
              </a>
            </div>
            <div className="flex items-center gap-5 mt-6">
              {SOCIALS.map(({ key, href, label, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/50 hover:text-gold transition-colors"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.
          </p>
          <p className="text-cream/40 text-xs tracking-luxury uppercase">Fait avec soin</p>
        </div>
      </div>
    </footer>
  )
}
