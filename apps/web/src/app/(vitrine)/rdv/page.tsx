import type { Metadata } from 'next'
import RdvClient from './rdv-client'

export const metadata: Metadata = {
  title: 'Prendre rendez-vous',
  description: "Réservez votre entretien de découverte offert avec Gem'Apprendre. Bilan de compétences, VAE, orientation, formations — sans engagement, réponse sous 48 h.",
}

export default function RdvPage() {
  return <RdvClient />
}
