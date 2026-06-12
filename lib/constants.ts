import type { NavLink, Service, Testimonial } from './types'

export const SITE_NAME = 'Atelier de Mireille Lué'
export const SITE_URL = 'https://ateliermireillelue.fr'
export const SITE_DESCRIPTION =
  "Conseillère en image et créatrice de mode. L'Atelier de Mireille Lué accompagne les femmes professionnelles à rayonner avec confiance, élégance et authenticité."

export const CALENDLY_URL = 'https://calendly.com/luemireille/conseil-en-image'

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/mireille.lue_',
  youtube: 'https://youtube.com/@mireille_lue?si=YV2BAxPppd5-eGqg',
  tiktok: 'https://www.tiktok.com/@mireille.lue?_r=1&_t=ZN-978BjkKEEru',
  linktree: 'https://linktr.ee/luemireille',
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Mes services', href: '/services' },
  { label: 'Créations sur mesure', href: '/creations' },
  { label: 'Blog', href: '/blog' },
]

export const SERVICES: Service[] = [
  {
    id: 'conseil-image',
    title: 'Conseil en image',
    description:
      'Un accompagnement personnalisé pour révéler votre potentiel et affirmer votre présence avec élégance.',
  },
  {
    id: 'personal-branding',
    title: 'Personal branding',
    description:
      'Construisez une identité visuelle forte, cohérente et mémorable qui vous ressemble profondément.',
  },
  {
    id: 'creation-sur-mesure',
    title: 'Création sur mesure',
    description:
      'Des pièces uniques conçues et réalisées pour sublimer votre silhouette et exprimer votre singularité.',
  },
  {
    id: 'accompagnement-entreprises',
    title: 'Accompagnement entreprises',
    description:
      "Valorisez l'image de votre équipe et renforcez l'identité de votre marque avec expertise.",
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marie',
    role: 'Cliente',
    content:
      "Grâce à Mireille, j'ai appris à m'aimer et à valoriser mon corps après ma perte de poids. Aujourd'hui, je me sens belle, forte et alignée.",
    image: '/images/testimonial-1.jpg',
  },
  {
    id: '2',
    name: 'Sarah',
    role: 'RH, Entreprise',
    content:
      "Atelier très inspirant ! Mireille a su capter les besoins de notre équipe et nous aider à renforcer notre image professionnelle.",
    image: '/images/testimonial-2.jpg',
  },
  {
    id: '3',
    name: 'Sophie',
    role: 'Cliente',
    content:
      "Un accompagnement exceptionnel, des conseils précis et une écoute bienveillante. Je recommande les yeux fermés !",
    image: '/images/testimonial-3.jpg',
  },
]
