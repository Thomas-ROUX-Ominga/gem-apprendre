import type { Metadata } from 'next'
import '../styles/globals.css'

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
      <body>{children}</body>
    </html>
  )
}
