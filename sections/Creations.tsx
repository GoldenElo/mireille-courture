import SplitSection from '@/components/ui/SplitSection'
import Button from '@/components/ui/Button'

export default function Creations() {
  return (
    <SplitSection
      image="/images/creation-sur-mesure.jpg"
      imageAlt="Création sur mesure — Atelier de Mireille Lué"
      reverse
      textBg="linen"
    >
      <p className="text-[10px] tracking-[0.2em] uppercase text-gold-text mb-4 font-medium">
        Créations sur mesure
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-snug mb-5">
        L&rsquo;élégance du sur-mesure, pensée pour vous
      </h2>
      <div className="w-8 h-px bg-gold mb-6" aria-hidden="true" />
      <p className="text-sm text-taupe leading-relaxed mb-8 font-light">
        Chaque femme est unique, chaque création aussi. Je conçois des vêtements
        sur mesure qui subliment votre silhouette et traduisent votre personnalité
        avec raffinement.
      </p>
      <Button href="/creations" variant="solid">
        Découvrir mes créations
      </Button>
    </SplitSection>
  )
}
