import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  background?: 'default' | 'dark'
}

export default function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  background = 'default'
}: SectionProps) {
  const bgClasses = {
    default: 'bg-white',
    dark: 'bg-[#05080c]',
  }

  const titleColor = background === 'dark' ? 'text-white' : 'text-neutral-900'
  const subtitleColor = background === 'dark' ? 'text-neutral-400' : 'text-neutral-500'

  return (
    <section id={id} className={`py-20 lg:py-28 ${bgClasses[background]} ${className}`}>
      <div className="section-container">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {subtitle && (
              <div className="mb-4">
                <span className={`text-sm font-medium uppercase tracking-widest ${subtitleColor}`}>
                  {subtitle}
                </span>
              </div>
            )}
            {title && (
              <h2 className={`heading-lg ${titleColor}`}>
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}