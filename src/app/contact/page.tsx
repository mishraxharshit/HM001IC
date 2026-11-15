import type { Metadata } from 'next'
import HeroMedia from '@/components/HeroMedia'
import Section from '@/components/Section'
import CopyEmailButton from '@/components/CopyEmailButton'

export const metadata: Metadata = {
  title: 'Contact | USH Industries',
  description:
    'Consultation confidentielle pour vos besoins en sécurité stratégique et en protection des ressources.',
}

const CONTACT = {
  email: 'contact@ushindustries.com',
  subject: 'Demande de consultation confidentielle',
  responseTime: 'sous 24 heures ouvrées',
  address: ['76, Avenue Michelet 93400', 'Saint-Ouen-sur-Seine, France'],
}

const mailtoHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(CONTACT.subject)}`

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="isolate relative pt-32 pb-20 bg-[#05080c]">
<HeroMedia poster="/photos/p6.jpg" dim={0.35} />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"
        />
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-neutral-400 mb-4 block">
              Prendre contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              Contacter USH Industries
            </h1>
            <p className="text-xl text-neutral-300 font-light">
              Consultation confidentielle pour vos besoins en sécurité stratégique et en protection des ressources
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <Section background="default">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#05080c] p-10 md:p-14 text-center">
            <div
              aria-hidden="true"
              className="w-16 h-16 border border-neutral-600 mx-auto mb-8 flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <span className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-3 block">
              Contact direct
            </span>
            <h2 className="text-2xl font-light text-white mb-2">Écrivez-nous directement</h2>
            <p className="text-sm text-neutral-400 mb-8">
              Toutes les demandes sont traitées en toute confidentialité. Nous répondons {CONTACT.responseTime}.
            </p>

            <a
              href={mailtoHref}
              className="inline-block max-w-full text-lg sm:text-xl md:text-2xl [overflow-wrap:anywhere] text-white font-light border-b border-neutral-600 hover:border-white focus-visible:border-white focus-visible:outline-none pb-1 transition-colors break-all"
            >
              {CONTACT.email}
            </a>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={mailtoHref}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Envoyer un e-mail
              </a>
              <CopyEmailButton email={CONTACT.email} />
            </div>
          </div>

          {/* Headquarters */}
          <div className="mt-6 text-center text-sm text-neutral-600">
            <span className="block text-xs font-medium uppercase tracking-widest text-neutral-400 mb-1">
              Siège social
            </span>
            {CONTACT.address[0]}
            <br />
            {CONTACT.address[1]}
          </div>
        </div>
      </Section>

      {/* Security Notice */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <svg
            aria-hidden="true"
            className="w-12 h-12 mx-auto mb-6 text-neutral-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <h2 className="text-2xl font-light text-white mb-4">Confidentialité garantie</h2>
          <p className="text-neutral-400 leading-relaxed">
            Toutes les communications avec USH Industries sont traitées avec le plus haut niveau de
            confidentialité. Nous mesurons la sensibilité des questions de sécurité stratégique et
            appliquons des protocoles stricts de protection de l’information, conformément à la
            réglementation européenne sur la protection des données.
          </p>
        </div>
      </Section>
    </div>
  )
}