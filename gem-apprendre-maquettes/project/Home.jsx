/* global React, Icon, Diagnostic */
const { useContext, useState, useEffect } = React;
function rawHtml(s) { return { dangerouslySetInnerHTML: { __html: s } }; }

const NAV_LINKS = [
  { label: "Le diagnostic", section: "diagnostic" },
  { label: "Je suis OÙ ?", to: "#/fiche/orientation", strong: "OÙ ?" },
  { label: "Je suis dans le FLOU", to: "#/fiche/bilan", strong: "FLOU" },
  { label: "Je me FORME", to: "#/fiche/entreprise", strong: "FORME" },
  { label: "Qui suis-je ?", to: "#/cynthia" },
];

// ---------- HEADER (shared chrome) ----------
function Header() {
  const nav = useContext(window.NavCtx);
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const click = (l) => (e) => {
    e.preventDefault();
    setOpen(false);
    if (l.section) nav.section(l.section);
    else nav.go(l.to);
  };
  const renderLabel = (l) => l.strong
    ? <>{l.label.split(l.strong)[0]}<u>{l.strong}</u></>
    : l.label;

  return (
    <header className="hdr">
      <div className="shell hdr-row">
        <a href="#/" className="brand" onClick={(e) => { e.preventDefault(); nav.go("#/"); }}>
          <img src="assets/gem-apprendre-mark.png" alt="" />
          <span className="gem-name">Gem<em>'</em>Apprendre</span>
        </a>
        <nav className="nav">
          {NAV_LINKS.map((l, i) => (
            <a key={i} href={l.to || "#"} onClick={click(l)}>{renderLabel(l)}</a>
          ))}
        </nav>
        <a href="#/rdv" className="btn btn-primary hdr-cta" onClick={(e) => { e.preventDefault(); nav.go("#/rdv"); }}>
          Prendre RDV<Icon name="arrow-right" />
        </a>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(true)}><Icon name="menu" /></button>
      </div>

      {open && (
        <div className="drawer" onClick={() => setOpen(false)}>
          <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-top">
              <span className="gem-name">Gem<em>'</em>Apprendre</span>
              <button className="burger" aria-label="Fermer" onClick={() => setOpen(false)}><Icon name="x" /></button>
            </div>
            <nav className="drawer-nav">
              {NAV_LINKS.map((l, i) => (
                <a key={i} href={l.to || "#"} onClick={click(l)}>{renderLabel(l)}<Icon name="chevron-right" /></a>
              ))}
            </nav>
            <a href="#/rdv" className="btn btn-primary" onClick={click({ to: "#/rdv" })}>
              Prendre RDV<Icon name="arrow-right" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ---------- HERO + diagnostic ----------
const ACCROCHES = {
  "posée": "On commence par <em>une question</em>, pas par un menu.",
  "directe": "Où en êtes-vous <em>aujourd'hui</em> ?",
  "chaleureuse": "Dites-nous où vous en êtes.<br/>On s'occupe <em>du reste</em>.",
};

function Hero({ accroche, badge30 }) {
  return (
    <section className="hero" id="diagnostic">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Bilans · VAE · Formations</p>
          <h1 {...rawHtml(ACCROCHES[accroche] || ACCROCHES["posée"])}></h1>
          <p className="lead">
            Comme Cynthia le ferait en rendez-vous&nbsp;: on regarde d'abord où vous
            en êtes. Trois réponses, et l'on vous oriente vers ce qui vous ferait du bien.
          </p>
          <div className="hero-meta">
            {badge30 && <div className="row"><Icon name="clock" /><span><b>30 secondes</b>, sans engagement.</span></div>}
            <div className="row"><Icon name="heart" /><span>Un aiguillage <b>chaleureux</b>, jamais un formulaire froid.</span></div>
            <div className="row"><Icon name="shield" /><span>Organisme <b>certifié Qualiopi</b>.</span></div>
          </div>
        </div>
        <Diagnostic badge30={badge30} />
      </div>
    </section>
  );
}

// ---------- 3 univers ----------
const UNIVERS = [
  {
    cls: "uni-1", tag: "Orientation", icon: "compass", to: "#/fiche/orientation",
    a: "Je suis ", b: "OÙ", c: " ?",
    body: "Pour les 15-25 ans qui cherchent leur voie. Bilan d'orientation en 4 étapes, choix de spécialités, Parcoursup.",
    links: [{ label: "Bilan 15-25 ans", to: "#/fiche/orientation" }, { label: "Spécialités", to: "#/fiche/orientation" }, { label: "Parcoursup", to: "#/fiche/orientation" }],
  },
  {
    cls: "uni-2", tag: "Transition", icon: "refresh", to: "#/fiche/bilan",
    a: "Je suis dans le ", b: "FLOU", c: ".",
    body: "Faire le point, se reconvertir, valider son expérience. Bilan de compétences sur-mesure et VAE accompagnée.",
    links: [{ label: "Bilan de compétences", to: "#/fiche/bilan" }, { label: "VAE", to: "#/fiche/vae" }, { label: "Financement", to: "#/fiche/bilan" }],
  },
  {
    cls: "uni-3", tag: "Formation", icon: "graduation-cap", to: "#/fiche/entreprise",
    a: "Je me ", b: "FORME", c: ".",
    body: "Monter en compétences, concrètement. Création d'entreprise, immobilier, finance, communication, vente.",
    links: [{ label: "Création d'entreprise", to: "#/fiche/entreprise" }, { label: "Immobilier", to: "#/fiche/immobilier" }, { label: "Vente", to: "#/fiche/autres" }],
  },
];

function Univers() {
  const nav = useContext(window.NavCtx);
  return (
    <section className="section section-soft" id="univers">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Pas envie de répondre ?</p>
          <h2>Les trois <em>univers</em>, à explorer librement.</h2>
          <p>Le diagnostic vous oriente en 30 secondes. Mais vous pouvez aussi entrer par la grande porte&nbsp;: choisissez l'univers qui vous parle.</p>
        </div>
        <div className="univers">
          {UNIVERS.map((u, i) => (
            <div key={i} className={"uni " + u.cls} onClick={() => nav.go(u.to)} role="link" tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") nav.go(u.to); }}>
              <span className="ico"><Icon name={u.icon} /></span>
              <span className="tag">{u.tag}</span>
              <h3>{u.a}<u>{u.b}</u>{u.c}</h3>
              <p>{u.body}</p>
              <div className="links">
                {u.links.map((l, j) => (
                  <span key={j} onClick={(e) => { e.stopPropagation(); nav.go(l.to); }}>{l.label}</span>
                ))}
              </div>
              <span className="arrow">Explorer<Icon name="arrow-right" /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Confiance ----------
const STATS = [
  { num: "100%", lbl: "de satisfaction sur nos accompagnements VAE & bilans (2024-2025)" },
  { num: "100%", lbl: "de satisfaction sur nos 20 actions de formation en 2025" },
  { num: "+250", lbl: "créateurs d'entreprise déjà accompagnés" },
  { num: "82%", lbl: "des entreprises créées toujours actives après 3 ans" },
];

function Confiance() {
  return (
    <section className="section" id="confiance">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">La confiance, en chiffres</p>
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
  );
}

// ---------- Cynthia teaser ----------
function CynthiaTeaser() {
  const nav = useContext(window.NavCtx);
  return (
    <section className="section section-soft" id="cynthia">
      <div className="shell founder">
        <div className="founder-portrait">
          <image-slot id="cynthia-portrait" shape="rounded" radius="16"
            placeholder="Portrait de Cynthia Roux"></image-slot>
          <div className="cap">« Cynthia Roux — épicurienne de l'éducation. »</div>
        </div>
        <div>
          <p className="eyebrow">Qui suis-je ?</p>
          <h2>Une <em>épicurienne</em> de l'éducation.</h2>
          <p className="pull">« Partager fait partie de moi, comme le sang qui coule dans mes veines. »</p>
          <p>Curieuse et passionnée par l'être humain, j'ai choisi de proposer, avec mon équipe, des formations et des accompagnements de qualité — avec une pédagogie qui cherche le plaisir d'apprendre autant que le résultat.</p>
          <div className="values">
            {["Bienveillance", "Respect", "Écoute", "Adaptabilité", "Compétence", "Qualité", "Expertise", "Excellence", "Droiture"].map((v) => (
              <span key={v} className="v">{v}</span>
            ))}
          </div>
          <a href="#/cynthia" className="btn btn-secondary founder-cta" onClick={(e) => { e.preventDefault(); nav.go("#/cynthia"); }}>
            Découvrir mon parcours<Icon name="arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Final CTA ----------
function FinalCTA() {
  const nav = useContext(window.NavCtx);
  return (
    <section className="section final-cta" id="final">
      <div className="shell-narrow">
        <p className="eyebrow" style={{ justifyContent: "center" }}>Devenir ce que GEM</p>
        <h2>Le premier pas, c'est <em>un échange</em>.</h2>
        <p>Sans engagement, on regarde ensemble où vous en êtes et ce qui vous ferait du bien. C'est souvent là que tout se clarifie.</p>
        <div className="btns">
          <a href="#/rdv" className="btn btn-primary" onClick={(e) => { e.preventDefault(); nav.go("#/rdv"); }}>Réserver mon échange<Icon name="arrow-right" /></a>
          <a href="#diagnostic" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); nav.section("diagnostic"); }}>Refaire le diagnostic</a>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  const nav = useContext(window.NavCtx);
  const go = (to) => (e) => { e.preventDefault(); nav.go(to); };
  return (
    <footer className="ftr">
      <div className="shell">
        <div className="ftr-grid">
          <div>
            <span className="brand" style={{ display: "inline-flex" }}>
              <img src="assets/gem-apprendre-mark.png" alt="" style={{ height: 30 }} />
              <span className="gem-name">Gem<em>'</em>Apprendre</span>
            </span>
            <p className="ftr-blurb">« L'organisme de formation du Groupe GEM. Rendre les décisions complexes plus claires, plus accessibles et plus sûres. »</p>
          </div>
          <div>
            <h6>Je suis dans le flou</h6>
            <a href="#/fiche/orientation" onClick={go("#/fiche/orientation")}>Bilan d'orientation 15-25</a>
            <a href="#/fiche/bilan" onClick={go("#/fiche/bilan")}>Bilan de compétences</a>
            <a href="#/fiche/vae" onClick={go("#/fiche/vae")}>VAE</a>
          </div>
          <div>
            <h6>Je me forme</h6>
            <a href="#/fiche/entreprise" onClick={go("#/fiche/entreprise")}>Création d'entreprise</a>
            <a href="#/fiche/immobilier" onClick={go("#/fiche/immobilier")}>Immobilier</a>
            <a href="#/fiche/autres" onClick={go("#/fiche/autres")}>Finance · Communication · Vente</a>
          </div>
          <div>
            <h6>Le Groupe GEM</h6>
            <a href="#/cynthia" onClick={go("#/cynthia")}>Qui suis-je ?</a>
            <a href="#/rdv" onClick={go("#/rdv")}>Contact &amp; RDV</a>
            <a href="#/rdv" onClick={go("#/rdv")}>Renseignements</a>
          </div>
        </div>
        <div className="ftr-bottom">
          <span>© 2023 — 2026 Gem'Apprendre · SIREN 811 043 991 · NDA 93132007913</span>
          <span>Certifié Qualiopi · Mentions légales · CGV</span>
        </div>
      </div>
    </footer>
  );
}

// ---------- Mobile sticky CTA bar ----------
function BottomBar() {
  const nav = useContext(window.NavCtx);
  return (
    <div className="bottombar">
      <div className="bb-txt"><b>Entretien offert</b><span>sans engagement</span></div>
      <button className="btn btn-primary" onClick={() => nav.go("#/rdv")}>Prendre RDV<Icon name="arrow-right" /></button>
    </div>
  );
}

// ---------- HOME page ----------
function Home({ accroche, badge30 }) {
  return (
    <>
      <Hero accroche={accroche} badge30={badge30} />
      <Univers />
      <Confiance />
      <CynthiaTeaser />
      <FinalCTA />
    </>
  );
}

Object.assign(window, { Header, Footer, BottomBar, Home });
