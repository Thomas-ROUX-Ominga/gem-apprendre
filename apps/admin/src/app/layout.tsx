import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: "Administration — Gem'Apprendre",
  description: "Backoffice Gem'Apprendre",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
