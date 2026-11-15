import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'USH Industries | Sécurité stratégique et ressources critiques',
  description: 'Groupe industriel européen qui sécurise les ressources stratégiques, protège les infrastructures critiques et développe des systèmes de défense à double usage dans les secteurs minier, énergétique et logistique.',
  keywords: 'systèmes de défense, ressources critiques, renseignement stratégique, sécurité minière, infrastructures énergétiques, sécurité logistique, technologie souveraine',
  openGraph: {
    title: 'USH Industries | Groupe de sécurité stratégique',
    description: 'Sécuriser les ressources stratégiques et les infrastructures critiques à l’échelle mondiale',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${barlow.variable} font-sans antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}