import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conditions générales de vente',
  description: "CGV de Gem'Apprendre — conditions de vente des bilans de compétences, VAE et formations.",
}

export default function CGVPage() {
  return (
    <div className="legal-page">
      <div className="shell-narrow">
        <nav className="crumb" style={{ marginBottom: 32, marginTop: 32 }}>
          <Link href="/">Accueil</Link>
          <span style={{ color: 'var(--ink-300)', fontSize: 13 }}>›</span>
          <span>Conditions générales de vente</span>
        </nav>

        <h1 className="legal-h1">Conditions générales de vente</h1>

        <section className="legal-section">
          <h2>Article 1 — Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Gem&apos;Apprendre (SIREN 811 043 991) et tout client souhaitant bénéficier de ses prestations de formation professionnelle, bilans de compétences, accompagnements VAE et services associés.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 2 — Prestations</h2>
          <p>
            Gem&apos;Apprendre propose les prestations suivantes, détaillées sur les fiches de service du site&nbsp;:
          </p>
          <ul>
            <li>Bilan d&apos;orientation (15-25 ans)</li>
            <li>Bilan de compétences (formules GEM&apos;Express à GEM&apos;Excellence)</li>
            <li>Accompagnement VAE (Livret 1, Livret 2, jury blanc)</li>
            <li>Formations entreprise, immobilier, finance, communication, vente</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Article 3 — Tarifs</h2>
          <p>
            Les tarifs sont indiqués en euros TTC sur les fiches de service. Gem&apos;Apprendre se réserve le droit de modifier ses tarifs à tout moment, sans que cela affecte les devis ou conventions déjà signés.
          </p>
          <p>
            Un devis ou une convention de formation est établi et signé avant tout démarrage de prestation. L&apos;entretien de découverte / positionnement initial est systématiquement offert, sans engagement.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 4 — Modalités de paiement</h2>
          <p>
            Le règlement s&apos;effectue selon les modalités précisées dans la convention de formation ou le devis. Des facilités de paiement (échéancier) peuvent être accordées sur demande.
          </p>
          <p>
            Les financements via CPF, Pôle Emploi, OPCO ou autres dispositifs sont possibles. Gem&apos;Apprendre accompagne ses clients dans les démarches de financement.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 5 — Droit de rétractation</h2>
          <p>
            Conformément aux articles L.221-18 et suivants du Code de la consommation, le client dispose d&apos;un délai de 14 jours à compter de la signature de la convention pour exercer son droit de rétractation, sans pénalité et sans justification. La rétractation doit être notifiée par écrit à <a href="mailto:cynthia.roux13@gmail.com">cynthia.roux13@gmail.com</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 6 — Annulation et report</h2>
          <p>
            Toute annulation ou report de session doit être communiqué par e-mail au minimum 48 h avant la séance prévue. En cas d&apos;annulation tardive répétée, Gem&apos;Apprendre se réserve le droit de facturer la séance concernée.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 7 — Confidentialité</h2>
          <p>
            Gem&apos;Apprendre s&apos;engage à la stricte confidentialité des informations transmises par le client dans le cadre de l&apos;accompagnement, conformément au secret professionnel applicable aux conseillers en bilan de compétences.
          </p>
        </section>

        <section className="legal-section">
          <h2>Article 8 — Litiges</h2>
          <p>
            En cas de litige, les parties rechercheront en priorité une solution amiable. À défaut, le tribunal compétent sera celui du siège social de Gem&apos;Apprendre.
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
