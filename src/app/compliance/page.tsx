'use client'

import Link from 'next/link'
import HeroMedia from '@/components/HeroMedia'
import Section from '@/components/Section'

const FRAMEWORKS = [
  { name: 'RGPD', full: 'Règlement général sur la protection des données', region: 'UE', desc: 'Conformité totale au droit européen de la protection des données pour l’ensemble des opérations numériques et du traitement des données clients.' },
  { name: 'FCPA', full: 'Foreign Corrupt Practices Act', region: 'États-Unis/Monde', desc: 'Contrôles anticorruption alignés sur les standards du FCPA pour l’ensemble des opérations internationales.' },
  { name: 'UK Bribery Act', full: 'UK Bribery Act 2010', region: 'Royaume-Uni/Monde', desc: 'Procédures adéquates en place pour prévenir la corruption de la part de toutes les personnes associées et des agents tiers.' },
  { name: 'LCB-FT UE', full: 'Directives de lutte contre le blanchiment', region: 'UE', desc: 'Protocoles de connaissance client (KYC) et de lutte contre le blanchiment intégrés à toutes les relations financières.' },
  { name: 'ITAR/EAR', full: 'Réglementations de contrôle des exportations', region: 'États-Unis', desc: 'Protocoles de conformité au contrôle des exportations pour tous les transferts de technologies à double usage et de matériels liés à la défense.' },
  { name: 'Sanctions ONU', full: 'Régimes de sanctions de l’ONU et de l’UE', region: 'Monde', desc: 'Programme de conformité aux sanctions à tolérance zéro, avec filtrage automatisé de toutes les contreparties.' },
]

export default function CompliancePage() {
  return (
    <div className="bg-white">
      <section className="isolate relative pt-32 pb-16 bg-[#05080c]">
<HeroMedia poster="/photos/p4.jpg" dim={0.3} />
        <div className="container mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-neutral-500 mb-4 block">Gouvernance</span>
          <h1 className="text-4xl lg:text-6xl font-light text-white mb-6 tracking-tight">Conformité</h1>
          <p className="text-neutral-400 font-light max-w-2xl mx-auto">
            L’éthique des opérations et la conformité réglementaire ne sont pas des contraintes : elles sont le fondement de notre crédibilité et de notre légitimité à opérer sur le long terme.
          </p>
        </div>
      </section>

      {/* Frameworks */}
      <Section title="Cadres réglementaires" subtitle="Les standards qui encadrent nos activités">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FRAMEWORKS.map((f) => (
            <div key={f.name} className="border border-neutral-100 p-8 hover:shadow-xl hover:border-neutral-900 transition-all duration-500">
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl font-black text-neutral-900">{f.name}</span>
                <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest bg-neutral-100 px-2 py-1">{f.region}</span>
              </div>
              <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-4">{f.full}</p>
              <p className="text-neutral-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Program */}
      <Section background="dark" title="Notre programme de conformité">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { title: 'Cycle d’audit interne', body: 'Quatre audits de conformité menés chaque année dans toutes les divisions opérationnelles, dont les conclusions sont remontées directement au Comité consultatif.' },
            { title: 'Diligence à l’égard des tiers', body: 'Tous les partenaires, agents et fournisseurs font l’objet d’un KYC structuré et d’une diligence renforcée avant tout engagement, puis à intervalles de révision définis.' },
            { title: 'Formation des collaborateurs', body: 'Formation annuelle obligatoire à la conformité pour l’ensemble du personnel, avec des modules spécialisés pour les fonctions les plus exposées aux risques de corruption ou de sanctions.' },
            { title: 'Canal d’alerte', body: 'Canal de signalement confidentiel permettant aux collaborateurs et aux tiers de soulever des préoccupations de conformité sans crainte de représailles, géré par un médiateur indépendant.' },
          ].map((item) => (
            <div key={item.title} className="bg-neutral-800 border border-neutral-700 p-8">
              <div className="w-1 h-6 bg-red-700 mb-6" />
              <h3 className="font-bold text-white mb-3">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 bg-[#05080c] text-center border-t border-neutral-800">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl text-white font-light mb-6 tracking-wide">Demandes relatives à la conformité</h2>
          <p className="text-neutral-500 mb-4 font-light">Pour les demandes réglementaires, les demandes de diligence ou toute correspondance liée à la conformité.</p>
          <p className="text-neutral-600 text-sm mb-10 uppercase tracking-widest">contact@USHindustries.com</p>
          <Link href="/contact" className="inline-block border border-white text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300">
            Contacter la conformité
          </Link>
        </div>
      </section>
    </div>
  )
}