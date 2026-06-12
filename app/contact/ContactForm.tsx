'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { SERVICES } from '@/lib/constants'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch('/netlify-forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      setSubmitted(true)
    } catch {
      form.submit()
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center" role="status">
        <span className="text-gold text-3xl mb-4" aria-hidden="true">✦</span>
        <h3 className="font-serif text-2xl font-light text-charcoal mb-3">Message envoyé</h3>
        <p className="text-sm text-taupe">Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    )
  }

  const inputClasses =
    'w-full bg-transparent border-b border-linen focus:border-gold outline-none py-2 text-sm text-charcoal transition-colors placeholder:text-taupe/50'
  const labelClasses = 'block text-xs tracking-luxury uppercase text-charcoal mb-2'

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true">
        <label>
          Ne pas remplir : <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
            placeholder="votre@email.fr"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>
          Téléphone{' '}
          <span className="text-taupe normal-case" style={{ letterSpacing: 0 }}>
            (optionnel)
          </span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClasses}
          placeholder="+33 6 00 00 00 00"
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>
          Service souhaité
        </label>
        <select
          id="service"
          name="service"
          className="w-full bg-cream border-b border-linen focus:border-gold outline-none py-2 text-sm text-charcoal transition-colors"
        >
          <option value="">Choisir un service</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Parlez-nous de votre projet..."
        />
      </div>

      <div className="pt-2">
        <Button type="submit" variant="solid">
          Envoyer le message
        </Button>
      </div>
    </form>
  )
}
