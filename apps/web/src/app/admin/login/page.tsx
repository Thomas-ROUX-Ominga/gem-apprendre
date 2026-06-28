import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Connexion — Admin Gem'Apprendre",
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-muted/40">
      <div className="w-full max-w-sm bg-card border border-border rounded-xl p-8 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Administration</h1>
          <p className="text-sm text-muted-foreground mt-1">Gem&apos;Apprendre</p>
        </div>
        {/* Login form — à implémenter avec BetterAuth client */}
        <p className="text-sm text-muted-foreground text-center">
          Authentification à configurer.
        </p>
      </div>
    </main>
  )
}
