import Link from 'next/link'

type Variant = 'solid' | 'outline' | 'outline-light' | 'ghost'

interface ButtonProps {
  variant?: Variant
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

const BASE =
  'inline-block text-[11px] tracking-[0.18em] uppercase font-sans font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'

const VARIANTS: Record<Variant, string> = {
  solid: 'bg-gold text-white px-8 py-3.5 hover:bg-[#b8935f]',
  outline: 'border border-charcoal text-charcoal px-8 py-3.5 hover:bg-charcoal hover:text-cream',
  'outline-light': 'border border-white text-white px-8 py-3.5 hover:bg-white hover:text-gold',
  ghost: 'text-charcoal hover:text-gold underline-offset-4 hover:underline',
}

export default function Button({
  variant = 'solid',
  href,
  target,
  rel,
  type = 'button',
  disabled,
  onClick,
  className = '',
  children,
}: ButtonProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`

  if (href) {
    if (target === '_blank') {
      return (
        <a href={href} target={target} rel={rel ?? 'noopener noreferrer'} className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
