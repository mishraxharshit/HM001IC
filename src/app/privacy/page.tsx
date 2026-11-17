'use client'

import PageHero from '@/components/PageHero'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <PageHero
      eyebrow="Mentions"
      title={<>Politique de confidentialité</>}
      intro="Dernière mise à jour : janvier 2025"
      poster="/photos/p1.jpg"
    />

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="prose prose-neutral max-w-none space-y-10 text-neutral-700 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-widest text-sm">1. Responsable du traitement</h2>
            <p>USH Industries, immatriculée à Paris, France, est responsable du traitement des données personnelles collectées via ce site et dans le cadre de nos activités. Nous traitons les données conformément au Règlement général sur la protection des données de l’UE (RGPD) et à la législation française applicable en matière de protection des données.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-widest text-sm">2. Données collectées</h2>
            <p>Nous collectons les informations que vous nous fournissez volontairement, telles que votre nom, votre adresse e-mail et vos informations professionnelles, lorsque vous nous contactez, soumettez une demande ou postulez à un poste. Nous collectons également des statistiques d’usage anonymisées via notre site afin d’améliorer l’expérience utilisateur.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-widest text-sm">3. Finalités du traitement</h2>
            <p>Les données personnelles sont traitées aux fins suivantes : répondre aux demandes commerciales et de partenariat ; recrutement et évaluation des candidats ; respect de nos obligations légales.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-widest text-sm">4. Durée de conservation</h2>
            <p>Nous ne conservons les données personnelles que pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, ou selon les exigences de la loi applicable. Les données des candidats sont conservées pendant 24 mois après la clôture d’un processus de recrutement.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-widest text-sm">5. Vos droits</h2>
            <p>En vertu du RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et de portabilité de vos données personnelles, ainsi que d’un droit d’opposition à leur traitement. Pour exercer ces droits, contactez-nous à l’adresse : <span className="font-medium text-neutral-900">contact@USHindustries.com</span></p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-widest text-sm">6. Tiers</h2>
            <p>Nous ne vendons pas de données personnelles. Nous pouvons partager des données avec des prestataires de confiance qui nous assistent dans nos activités, sous réserve d’obligations strictes de confidentialité. Tout traitement est encadré par des accords de traitement des données appropriés.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-4 uppercase tracking-widest text-sm">7. Contact</h2>
            <p>Pour toute question relative à la confidentialité, veuillez contacter notre délégué à la protection des données à l’adresse : <span className="font-medium text-neutral-900">contact@USHindustries.com</span></p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-wrap gap-6">
          <Link href="/legal" className="text-[11px] font-black text-neutral-400 uppercase tracking-widest hover:text-neutral-900 transition-colors">Mentions légales</Link>
          <Link href="/compliance" className="text-[11px] font-black text-neutral-400 uppercase tracking-widest hover:text-neutral-900 transition-colors">Conformité</Link>
          <Link href="/contact" className="text-[11px] font-black text-neutral-400 uppercase tracking-widest hover:text-neutral-900 transition-colors">Nous contacter</Link>
        </div>
      </div>
    </div>
  )
}