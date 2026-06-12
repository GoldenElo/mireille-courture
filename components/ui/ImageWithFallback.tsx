'use client'

import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'

interface Props extends Omit<ImageProps, 'onError'> {
  fallbackLabel?: string
}

export default function ImageWithFallback({ src, alt, fallbackLabel, className, ...props }: Props) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        className={`bg-linen flex items-center justify-center ${className ?? ''}`}
        aria-label={alt}
        role="img"
      >
        <span className="font-serif text-taupe text-xs tracking-luxury uppercase opacity-50">
          {fallbackLabel ?? alt}
        </span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  )
}
