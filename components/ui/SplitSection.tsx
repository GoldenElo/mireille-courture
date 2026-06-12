'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface Props {
  image: string
  imageAlt: string
  imageSizes?: string
  reverse?: boolean
  textBg?: 'cream' | 'linen'
  children: React.ReactNode
}

export default function SplitSection({
  image,
  imageAlt,
  imageSizes = '(max-width: 768px) 100vw, 50vw',
  reverse = false,
  textBg = 'cream',
  children,
}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const imgOrder = reverse ? 'order-1 md:order-2' : 'order-1'
  const textOrder = reverse ? 'order-2 md:order-1' : 'order-2'
  const bgClass = textBg === 'linen' ? 'bg-linen' : 'bg-cream'

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 min-h-[560px] md:min-h-[640px]"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className={`relative min-h-[60vw] md:min-h-0 ${imgOrder}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-top"
          sizes={imageSizes}
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        className={`flex items-center ${bgClass} px-8 md:px-14 lg:px-20 py-16 md:py-0 ${textOrder}`}
      >
        <div className="max-w-md w-full">{children}</div>
      </motion.div>
    </section>
  )
}
