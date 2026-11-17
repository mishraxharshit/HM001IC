'use client'

import PageHero from '@/components/PageHero'
import Link from 'next/link'

export default function LegalPage() {
  return (
    <div className="bg-white">
      <PageHero
      eyebrow="Mentions"
      title={<>Mentions légales</>}
      intro="Informations légales et éditeur du site"
      poster="/photos/p3.jpg"
    />

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-10 text-neutral-700 leading-relaxed">

          <div>
            <h2 className="text-sm font-black text-neutral-900 mb-4 uppercase tracking-widest">Informations sur la société</h2>
            <div className="bg-neutral-50 border border-neutral-200 p-8 text-sm space-y-2">
              <p><span className="font-bold text-neutral-900">Raison sociale :</span> USH Industries </p>
              <p><span className="font-bold text-neutral-900">Siège social :</span> Saint-Ouen-sur-Seine, France</p>
              <p><span className="font-bold text-neutral-900">Forme juridique :</span> Société à responsabilité limitée </p>
              <p><span className="font-bold text-neutral-900">Numéro de TVA :</span> Communiqué sur demande formelle</p>
              <p><span className="font-bold text-neutral-900">E-mail :</span> contact@USHindustries.com (pour le service juridique)</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black text-neutral-900 mb-4 uppercase tracking-widest">Avertissement relatif au site</h2>
            <p>Les informations figurant sur ce site sont fournies à titre purement informatif. USH Industries ne donne aucune garantie, expresse ou implicite, quant à l’exhaustivité, l’exactitude, la fiabilité, l’adéquation ou la disponibilité des informations contenues sur ce site.</p>
          </div>

          <div>
            <h2 className="text-sm font-black text-neutral-900 mb-4 uppercase tracking-widest">Propriété intellectuelle</h2>
            <p>L’ensemble des contenus de ce site, notamment les textes, graphismes, logos et images, est la propriété intellectuelle d’USH Industries et est protégé par le droit d’auteur et le droit des marques applicables. Toute reproduction ou diffusion non autorisée est strictement interdite.</p>
          </div>

          <div>
            <h2 className="text-sm font-black text-neutral-900 mb-4 uppercase tracking-widest">Limitation de responsabilité</h2>
            <p>USH Industries ne saurait être tenue responsable de tout dommage direct, indirect, accessoire ou consécutif résultant de l’utilisation ou de l’impossibilité d’utiliser ce site ou les informations qu’il contient. Les liens vers des sites externes sont fournis pour information uniquement ; USH Industries n’approuve pas les contenus externes et décline toute responsabilité à leur égard.</p>
          </div>

          <div>
            <h2 className="text-sm font-black text-neutral-900 mb-4 uppercase tracking-widest">Droit applicable</h2>
            <p>Les présentes mentions légales et tout litige y afférent sont soumis au droit français. Les tribunaux de Paris ont compétence exclusive.</p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-wrap gap-6">
          <Link href="/privacy" className="text-[11px] font-black text-neutral-400 uppercase tracking-widest hover:text-neutral-900 transition-colors">Politique de confidentialité</Link>
          <Link href="/compliance" className="text-[11px] font-black text-neutral-400 uppercase tracking-widest hover:text-neutral-900 transition-colors">Conformité</Link>
          <Link href="/contact" className="text-[11px] font-black text-neutral-400 uppercase tracking-widest hover:text-neutral-900 transition-colors">Nous contacter</Link>
        </div>
      </div>
    </div>
  )
}