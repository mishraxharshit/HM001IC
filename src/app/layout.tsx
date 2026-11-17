import type { Metadata, Viewport } from 'next'
import { SITE_URL } from '@/lib/site'
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

export const viewport: Viewport = { themeColor: '#05080c', width: 'device-width', initialScale: 1 }

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  title: 'USH Industries | Sécurité stratégique et ressources critiques',
  description: 'Groupe industriel européen qui sécurise les ressources stratégiques, protège les infrastructures critiques et développe des systèmes de défense à double usage dans les secteurs minier, énergétique et logistique.',
  keywords: 'systèmes de défense, ressources critiques, renseignement stratégique, sécurité minière, infrastructures énergétiques, sécurité logistique, technologie souveraine',
  openGraph: {
    title: 'USH Industries | Groupe de sécurité stratégique',
    description: 'Sécuriser les ressources stratégiques et les infrastructures critiques à l’échelle mondiale',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'USH Industries',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'USH Industries, groupe de sécurité stratégique' }],
  },
  twitter: { card: 'summary_large_image', title: 'USH Industries | Groupe de sécurité stratégique', images: ['/og.png'] },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${barlow.variable} font-sans antialiased`}>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-black">Aller au contenu</a>
        <Header />
        <main id="contenu" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}