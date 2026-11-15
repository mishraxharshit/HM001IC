'use client'

import { Shield, Globe, CheckCircle, FileText, Landmark, Building2, Scale, Users } from 'lucide-react'

export default function TrustAndPartners() {
  const certifications = [
    { name: 'Conforme à la souveraineté', icon: <Shield className="w-4 h-4" /> },
    { name: 'Normes de défense de l’UE', icon: <Globe className="w-4 h-4" /> },
    { name: 'Certifié ISO 27001', icon: <CheckCircle className="w-4 h-4" /> },
    { name: 'Licence d’exportation stratégique', icon: <FileText className="w-4 h-4" /> },
  ]

  const clientTypes = [
    { icon: <Building2 strokeWidth={2} className="w-8 h-8" />, title: 'Gouvernements', desc: 'Ministères de la Défense, de l’Intérieur et de la Planification stratégique.' },
    { icon: <Landmark strokeWidth={2} className="w-8 h-8" />, title: 'Énergie d’État', desc: 'Gestionnaires de réseaux nationaux et autorités d’infrastructures critiques.' },
    { icon: <Scale strokeWidth={2} className="w-8 h-8" />, title: 'Fonds souverains', desc: 'Véhicules d’investissement publics et réserves de capital stratégiques.' },
    { icon: <Users strokeWidth={2} className="w-8 h-8" />, title: 'Multilatéral', desc: 'Agences internationales de sécurité et organismes du commerce mondial.' },
  ]

  return (
    <section className="py-24 bg-white text-black font-sans border-t-[12px] border-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Compliance Bar - Horizontal Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-black mb-24">
          {certifications.map((cert, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 p-6 border-r last:border-r-0 border-black transition-colors hover:bg-neutral-50"
            >
              <div className="text-black">{cert.icon}</div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">
                {cert.name}
              </span>
            </div>
          ))}
        </div>

        {/* Section Title - Strictly Bold, No Italics */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-neutral-400 mb-4">Confiance institutionnelle</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            PARTENARIATS <span className="text-neutral-300">STRATÉGIQUES.</span>
          </h2>
        </div>

        {/* Client Grid - Industrial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-black">
          {clientTypes.map((client, i) => (
            <div 
              key={i} 
              className="p-10 border-r border-b border-black hover:bg-neutral-50 transition-all duration-300"
            >
              <div className="mb-8 text-black">
                {client.icon}
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight mb-4">
                {client.title}
              </h3>
              <p className="text-sm text-neutral-600 font-bold leading-relaxed">
                {client.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}