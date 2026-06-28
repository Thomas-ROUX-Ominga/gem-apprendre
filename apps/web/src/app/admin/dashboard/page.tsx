import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tableau de bord — Admin Gem'Apprendre",
}

export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold tracking-tight">Tableau de bord</h1>
      <p className="text-muted-foreground mt-2">
        Backoffice Gem&apos;Apprendre — fonctionnalités à venir.
      </p>
    </main>
  )
}
