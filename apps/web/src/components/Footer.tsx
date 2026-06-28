import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="shell">
        <div className="ftr-grid">
          <div>
            <Link href="/" className="brand" style={{ display: 'inline-flex' }}>
              <Image src="/gem-apprendre-mark.png" alt="" width={30} height={30} />
              <span className="gem-name">Gem<em>&apos;</em>Apprendre</span>
            </Link>
            <p className="ftr-blurb">
              « L&apos;organisme de formation du Groupe GEM. Rendre les décisions complexes plus claires,
              plus accessibles et plus sûres. »
            </p>
          </div>
          <div>
            <p className="ftr-col-head">Je suis dans le FLOU</p>
            <Link href="/fiche/orientation">Bilan d&apos;orientation 15-25</Link>
            <Link href="/fiche/bilan">Bilan de compétences</Link>
            <Link href="/fiche/vae">VAE</Link>
          </div>
          <div>
            <p className="ftr-col-head">Je me forme</p>
            <Link href="/fiche/entreprise">Création d&apos;entreprise</Link>
            <Link href="/fiche/immobilier">Immobilier</Link>
            <Link href="/fiche/autres">Finance · Communication · Vente</Link>
          </div>
          <div>
            <p className="ftr-col-head">Le Groupe GEM</p>
            <Link href="/qui-suis-je">Qui suis-je ?</Link>
            <Link href="/rdv">Contact &amp; RDV</Link>
            <Link href="/mentions-legales">Mentions légales</Link>
          </div>
        </div>
        <div className="ftr-bottom">
          <span>© 2023 — 2026 Gem&apos;Apprendre · SIREN 811 043 991 · NDA 93132007913</span>
          <span>Certifié Qualiopi · <Link href="/mentions-legales">Mentions légales</Link> · <Link href="/cgv">CGV</Link></span>
        </div>
      </div>
    </footer>
  )
}
