import SplitSection from '@/components/ui/SplitSection'
import Button from '@/components/ui/Button'

export default function About() {
  return (
    <SplitSection
      image="/images/about.jpg"
      imageAlt="Mireille — Conseillère en image"
      textBg="cream"
    >
      <p className="text-[10px] tracking-[0.2em] uppercase text-gold-text mb-4 font-medium">
        À propos
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-snug mb-5">
        Une expertise au service de votre rayonnement
      </h2>
      <div className="w-8 h-px bg-gold mb-6" aria-hidden="true" />
      <p className="text-sm text-taupe leading-relaxed mb-4 font-light">
        Depuis plus de 3 ans, j&rsquo;accompagne des femmes ambitieuses, des entreprises
        et des marques à révéler leur image avec justesse et élégance.
      </p>
      <p className="text-sm text-taupe leading-relaxed mb-8 font-light">
        Mon approche allie écoute, bienveillance et expertise pour vous aider à vous
        reconnecter à votre identité et à valoriser votre singularité.
      </p>
      <Button href="/a-propos" variant="solid">
        En savoir plus
      </Button>
    </SplitSection>
  )
}
