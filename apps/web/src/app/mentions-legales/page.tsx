import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: "Mentions légales de Gem'Apprendre — éditeur, hébergeur, propriété intellectuelle et données personnelles.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="legal-page">
      <div className="shell-narrow">
        <nav className="crumb" style={{ marginBottom: 32, marginTop: 32 }}>
          <Link href="/">Accueil</Link>
          <span style={{ color: 'var(--ink-300)', fontSize: 13 }}>›</span>
          <span>Mentions légales</span>
        </nav>

        <h1 className="legal-h1">Mentions légales</h1>

        <section className="legal-section">
          <h2>Éditeur du site</h2>
          <p>
            <strong>Gem&apos;Apprendre</strong><br />
            Organisme de formation du Groupe GEM<br />
            SIREN&nbsp;: 811&nbsp;043&nbsp;991<br />
            NDA&nbsp;: 93132007913<br />
            Responsable de publication&nbsp;: Cynthia Roux<br />
            Contact&nbsp;: <a href="mailto:cynthia.roux13@gmail.com">cynthia.roux13@gmail.com</a>
          </p>
        </section>

        <section className="legal-section">
          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par&nbsp;:<br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
          </p>
        </section>

        <section className="legal-section">
          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images, logos, structure) est la propriété exclusive de Gem&apos;Apprendre, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
          </p>
        </section>

        <section className="legal-section">
          <h2>Données personnelles</h2>
          <p>
            Les informations collectées via le formulaire de contact (nom, prénom, e-mail, téléphone) sont utilisées exclusivement pour répondre à votre demande de rendez-vous. Elles ne sont ni transmises à des tiers, ni utilisées à des fins commerciales.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à <a href="mailto:cynthia.roux13@gmail.com">cynthia.roux13@gmail.com</a>.
          </p>
          <p>
            Vos données sont couvertes par le secret professionnel dans le cadre d&apos;un accompagnement en bilan de compétences ou VAE.
          </p>
        </section>

        <section className="legal-section">
          <h2>Cookies</h2>
          <p>
            Ce site utilise des cookies strictement nécessaires à son fonctionnement. Aucun cookie publicitaire ou de traçage tiers n&apos;est utilisé sans votre consentement. Vous pouvez gérer vos préférences via le bandeau de consentement disponible en bas de page.
          </p>
        </section>

        <section className="legal-section">
          <h2>Liens hypertextes</h2>
          <p>
            Gem&apos;Apprendre ne peut être tenu responsable du contenu des sites tiers vers lesquels des liens sont proposés sur ce site.
          </p>
        </section>

        <p style={{ marginTop: 40, fontSize: 13, color: 'var(--ink-500)' }}>
          Dernière mise à jour&nbsp;: juin 2026
        </p>

        <Link href="/" className="btn btn-secondary" style={{ marginTop: 16, marginBottom: 64 }}>
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
