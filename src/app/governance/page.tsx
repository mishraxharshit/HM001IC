import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero, { Eyebrow, wrap } from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Gouvernance | USH Industries',
  description: 'Comment USH Industries encadre les risques, la conformité, l’éthique et les opérations responsables.',
}

// Texte de cadre indicatif - à faire valider par le juridique/la conformité avant publication.
const AREAS = [
  { n: '01', title: 'Supervision exécutive', desc: 'La stratégie du Groupe, les grands programmes et les décisions de risque relèvent du Président et de l’équipe de direction, avec une responsabilité claire pour chaque division.' },
  { n: '02', title: 'Conformité réglementaire', desc: 'Les obligations de contrôle des exportations, de sanctions, de lutte contre la corruption et de protection des données sont intégrées à nos réponses aux appels d’offres, à notre exécution et à nos rapports.', href: '/compliance', cta: 'Voir la conformité' },
  { n: '03', title: 'Éthique et conduite', desc: 'Chaque collaborateur et partenaire doit agir dans le respect de la loi, en toute transparence et avec égard pour les communautés proches de nos sites.' },
  { n: '04', title: 'Gestion des risques', desc: 'Les risques opérationnels, géopolitiques et de sécurité sont évalués avant tout engagement et suivis tout au long de l’exécution.' },
  { n: '05', title: 'Développement durable', desc: 'Des normes environnementales et sociales s’appliquent à l’extraction, à la logistique et aux travaux d’infrastructure.', href: '/sustainability', cta: 'Voir le développement durable' },
  { n: '06', title: 'Sécurité des données et de l’information', desc: 'Des contrôles stricts protègent les informations des partenaires, du personnel et des opérations.', href: '/privacy', cta: 'Politique de confidentialité' },
]

const COMMITMENTS = [
  ['Légalité dès la conception', 'Nous déclinons toute mission que nous ne pouvons pas mener dans le respect de la loi.'],
  ['Transparence des rapports', 'Les informations importantes sont communiquées aux partenaires et aux régulateurs selon les exigences applicables.'],
  ['Direction responsable', 'Des dirigeants identifiés sont responsables de chaque domaine du Groupe.'],
]

export default function GovernancePage() {
  return (
    <div className="bg-white text-[#05080c]">
      <PageHero
        eyebrow="Gouvernance"
        title={<>La responsabilité à <span className="text-[#9db0c4]">chaque niveau.</span></>}
        intro="Intervenir dans la défense, les ressources et les infrastructures critiques exige une supervision rigoureuse. Voici comment nous gouvernons le Groupe."
        poster="/photos/p4.jpg"
      />

      <section className="py-24 md:py-32">
        <div className={wrap}>
          <Eyebrow>Cadre de gouvernance</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Six domaines de supervision.</h2>
          <div className="mt-14 grid gap-px border border-neutral-200 bg-neutral-200 md:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((a) => (
              <div key={a.n} className="flex flex-col bg-white p-10">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#2b4f9c]">{a.n}</span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{a.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-neutral-600">{a.desc}</p>
                {a.href && <Link href={a.href} className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2b4f9c] hover:underline">{a.cta} →</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 py-24">
        <div className={`${wrap} grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20`}>
          <div>
            <Eyebrow>Nos engagements</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">Un même standard, partout.</h2>
          </div>
          <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
            {COMMITMENTS.map(([t, d]) => (
              <li key={t} className="grid gap-2 py-8 md:grid-cols-[1fr_2fr] md:gap-8">
                <h3 className="text-xl font-semibold tracking-tight">{t}</h3>
                <p className="leading-relaxed text-neutral-600">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#05080c] py-24 text-white">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-8`}>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Une question sur notre gouvernance ?</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-400">Contactez notre équipe pour toute demande confidentielle.</p>
          </div>
          <Link href="/contact" className="bg-white px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#05080c] transition-colors hover:bg-neutral-300">Nous contacter</Link>
        </div>
      </section>
    </div>
  )
}
