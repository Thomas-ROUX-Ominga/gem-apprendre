import Link from 'next/link'
import Diagnostic from '@/components/Diagnostic'
import Icon from '@/components/Icon'
import UniversCards from '@/components/UniversCards'
import FadeContent from '@/components/FadeContent'
import ShinyText from '@/components/ShinyText'
import AnimatedStats from '@/components/AnimatedStats'
import Aurora from '@/components/Aurora'
import Particles from '@/components/Particles'

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

const VALUES = ['Bienveillance', 'Respect', 'Écoute', 'Adaptabilité', 'Compétence', 'Qualité', 'Expertise', 'Excellence', 'Droiture']

export default function HomePage() {
  return (
    <>
      {/* ---- HERO ---- */}
      <section className="hero" id="diagnostic">
        <div className="hero-aurora" aria-hidden="true">
          <Aurora
            colorStops={['#8a3d67', '#d9744e', '#bc5e8e']}
            amplitude={0.9}
            blend={0.5}
            speed={0.5}
          />
        </div>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <ShinyText
                text="Bilans · VAE · Formations"
                color="#a24f7a"
                shineColor="#f4d6e3"
                speed={5}
              />
            </p>
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
          <FadeContent duration={700} threshold={0.15}>
            <div className="section-head">
              <h2>Les trois <em>univers</em>, à explorer librement.</h2>
              <p>Le diagnostic vous oriente en 30 secondes. Mais vous pouvez aussi entrer par la grande porte&nbsp;: choisissez l&apos;univers qui vous parle.</p>
            </div>
          </FadeContent>
          <FadeContent delay={160} duration={700} threshold={0.1}>
            <UniversCards items={UNIVERS} />
          </FadeContent>
        </div>
      </section>

      {/* ---- CONFIANCE ---- */}
      <section className="section" id="confiance">
        <div className="shell">
          <FadeContent duration={700} threshold={0.15}>
            <div className="section-head">
              <h2>Un organisme <em>certifié</em>, des résultats mesurés.</h2>
            </div>
          </FadeContent>
          <AnimatedStats />
          <FadeContent delay={480} duration={700} threshold={0.1}>
            <div className="qualiopi">
              <div className="qualiopi-orb" aria-hidden="true">
                <Aurora
                  colorStops={['#bc5e8e', '#471c32', '#d9744e']}
                  amplitude={1.2}
                  blend={0.4}
                  speed={0.6}
                />
              </div>
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
          </FadeContent>
        </div>
      </section>

      {/* ---- CYNTHIA TEASER ---- */}
      <section className="section section-soft" id="cynthia">
        <div className="shell-narrow">
          <FadeContent duration={800} threshold={0.12}>
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
          </FadeContent>
        </div>
      </section>

      {/* ---- FINAL CTA ---- */}
      <section className="section final-cta" id="final">
        <div className="final-cta-particles" aria-hidden="true">
          <Particles
            particleCount={80}
            particleSpread={14}
            speed={0.15}
            particleColors={['#8a3d67', '#d9744e', '#bc5e8e', '#a24f7a']}
            alphaParticles={true}
            particleBaseSize={90}
            sizeRandomness={0.9}
            disableRotation={false}
          />
        </div>
        <div className="shell-narrow">
          <FadeContent duration={700} threshold={0.2}>
            <h2>Le premier pas, c&apos;est <em>un échange</em>.</h2>
            <p>Sans engagement, on regarde ensemble où vous en êtes et ce qui vous ferait du bien. C&apos;est souvent là que tout se clarifie.</p>
            <div className="btns">
              <Link href="/rdv" className="btn btn-primary">Réserver mon échange<Icon name="arrow-right" /></Link>
              <a href="#diagnostic" className="btn btn-secondary">Refaire le diagnostic</a>
            </div>
          </FadeContent>
        </div>
      </section>
    </>
  )
}
