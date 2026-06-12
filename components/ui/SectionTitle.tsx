interface Props {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionTitle({ label, title, subtitle, centered = false, light = false }: Props) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {label && (
        <p className="text-xs tracking-luxury uppercase text-gold mb-4">{label}</p>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight ${
          light ? 'text-cream' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm md:text-base leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-cream/75' : 'text-taupe'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
