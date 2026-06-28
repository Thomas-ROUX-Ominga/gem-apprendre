import Link from 'next/link'
import Diagnostic from '@/components/Diagnostic'
import Icon from '@/components/Icon'
import UniversCards from '@/components/UniversCards'

const UNIVERS = [
  {
    cls: 'uni-1',
    tag: 'Orientation',
    icon: 'compass',
    href: '/fiche/orientation',
    a: 'Je suis ',
    b: 'OÙ',
    c: ' ?',
    body: "Pour les 15-25 ans qui cherchent leur voie. Bilan d'orientation en 4 étapes, choix de spécialités, Parcoursup.",
    links: [
      { label: 'Bilan 15-25 ans', href: '/fiche/orientation' },
      { label: 'Spécialités', href: '/fiche/orientation' },
      { label: 'Parcoursup', href: '/fiche/orientation' },
    ],
  },
  {
    cls: 'uni-2',
    tag: 'Transition',
    icon: 'refresh',
    href: '/fiche/bilan',
    a: 'Je suis dans le ',
    b: 'FLOU',
    c: '.',
    body: 'Faire le point, se reconvertir, valider son expérience. Bilan de compétences sur-mesure et VAE accompagnée.',
    links: [
      { label: 'Bilan de compétences', href: '/fiche/bilan' },
      { label: 'VAE', href: '/fiche/vae' },
      { label: 'Financement', href: '/fiche/bilan' },
    ],
  },
  {
    cls: 'uni-3',
    tag: 'Formation',
    icon: 'graduation-cap',
    href: '/fiche/entreprise',
    a: 'Je me ',
    b: 'FORME',
    c: '.',
    body: "Monter en compétences, concrètement. Création d'entreprise, immobilier, finance, communication, vente.",
    links: [
      { label: "Création d'entreprise", href: '/fiche/entreprise' },
      { label: 'Immobilier', href: '/fiche/immobilier' },
      { label: 'Vente', href: '/fiche/autres' },
    ],
  },
]

const STATS = [
  { num: '100%', lbl: 'de satisfaction sur nos accompagnements VAE & bilans (2024-2025)' },
  { num: '+250', lbl: "créateurs d'entreprise déjà accompagnés" },
  { num: '100%', lbl: 'de satisfaction sur nos 20 actions de formation en 2025' },
  { num: '82%', lbl: "des entreprises créées toujours actives après 3 ans" },
]

const VALUES = ['Bienveillance', 'Respect', 'Écoute', 'Adaptabilité', 'Compétence', 'Qualité', 'Expertise', 'Excellence', 'Droiture']

export default function HomePage() {
  return (
    <>
      {/* ---- HERO ---- */}
      <section className="hero" id="diagnostic">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Bilans · VAE · Formations</p>
            <h1>Où en êtes-vous <em>aujourd&apos;hui</em>&nbsp;?</h1>
            <p className="lead">
              Comme Cynthia le ferait en rendez-vous&nbsp;: on regarde d&apos;abord où vous en êtes.
              Trois réponses, et l&apos;on vous oriente vers ce qui vous ferait du bien.
            </p>
            <div className="hero-meta">
              <div className="row"><Icon name="clock" /><span><b>30 secondes</b>, sans engagement.</span></div>
              <div className="row"><Icon name="gift" /><span><b>Entretien de positionnement offert</b> pour démarrer.</span></div>
              <div className="row"><Icon name="shield" /><span>Organisme <b>certifié Qualiopi</b> depuis 2023.</span></div>
            </div>
          </div>
          <Diagnostic />
        </div>
      </section>

      {/* ---- 3 UNIVERS ---- */}
      <section className="section section-soft" id="univers">
        <div className="shell">
          <div className="section-head">
            <h2>Les trois <em>univers</em>, à explorer librement.</h2>
            <p>Le diagnostic vous oriente en 30 secondes. Mais vous pouvez aussi entrer par la grande porte&nbsp;: choisissez l&apos;univers qui vous parle.</p>
          </div>
          <UniversCards items={UNIVERS} />
        </div>
      </section>

      {/* ---- CONFIANCE ---- */}
      <section className="section" id="confiance">
        <div className="shell">
          <div className="section-head">
            <h2>Un organisme <em>certifié</em>, des résultats mesurés.</h2>
          </div>
          <div className="proof-grid">
            {STATS.map((s, i) => (
              <div key={i} className="stat">
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
          <div className="qualiopi">
            <div className="seal">Q</div>
            <div className="q-body">
              <strong>Certifié Qualiopi</strong>
              <span>« Pour les actions de formation, les bilans de compétences et la VAE. »</span>
            </div>
            <div className="codes">
              29.06.2023 · formations<br />
              08.08.2023 · bilans &amp; VAE<br />
              SIREN 811 043 991 · NDA 93132007913
            </div>
          </div>
        </div>
      </section>

      {/* ---- CYNTHIA TEASER ---- */}
      <section className="section section-soft" id="cynthia">
        <div className="shell-narrow">
          <div className="founder founder-solo">
            <div>
              <h2>Une <em>épicurienne</em> de l&apos;éducation.</h2>
              <p className="pull">« Partager fait partie de moi, comme le sang qui coule dans mes veines. »</p>
              <p>Curieuse et passionnée par l&apos;être humain, j&apos;ai choisi de proposer, avec mon équipe, des formations et des accompagnements de qualité — avec une pédagogie qui cherche le plaisir d&apos;apprendre autant que le résultat.</p>
              <div className="values">
                {VALUES.map((v) => <span key={v} className="v">{v}</span>)}
              </div>
              <Link href="/qui-suis-je" className="btn btn-secondary founder-cta">
                Découvrir mon parcours<Icon name="arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---- FINAL CTA ---- */}
      <section className="section final-cta" id="final">
        <div className="shell-narrow">
          <h2>Le premier pas, c&apos;est <em>un échange</em>.</h2>
          <p>Sans engagement, on regarde ensemble où vous en êtes et ce qui vous ferait du bien. C&apos;est souvent là que tout se clarifie.</p>
          <div className="btns">
            <Link href="/rdv" className="btn btn-primary">Réserver mon échange<Icon name="arrow-right" /></Link>
            <a href="#diagnostic" className="btn btn-secondary">Refaire le diagnostic</a>
          </div>
        </div>
      </section>
    </>
  )
}
