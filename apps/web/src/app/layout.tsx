import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomBar from '@/components/BottomBar'
import Tarteaucitron from '@/components/Tarteaucitron'

export const metadata: Metadata = {
  title: {
    default: "Gem'Apprendre — Bilans · VAE · Formations",
    template: "%s — Gem'Apprendre",
  },
  description:
    "Organisme de formation certifié Qualiopi. Bilan de compétences, VAE, orientation 15-25 ans, formations entreprise, immobilier. Diagnostic gratuit en 30 secondes.",
  openGraph: {
    siteName: "Gem'Apprendre",
    locale: 'fr_FR',
    type: 'website',
  },
  metadataBase: new URL('https://gemapprendre.fr'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="ga-page">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BottomBar />
        <Tarteaucitron />
      </body>
    </html>
  )
}
