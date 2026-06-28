/* global React, Icon */
const { useContext: useCtxC } = React;
function cHtml(s) { return { dangerouslySetInnerHTML: { __html: s } }; }

const TIMELINE = [
  { y: "2015", t: "Le centre de formation", b: "Tout commence par l'envie de transmettre autrement." },
  { y: "2018", t: "Gem'Bien", b: "La première agence immobilière en transactions & urbanisme." },
  { y: "2019", t: "Gem'Conseils", b: "Le conseil en immobilier, finance et fiscalité." },
  { y: "2022", t: "Gem'Apprendre", b: "Le centre de formation prend son nom — et sa mission." },
];

const PHILO = [
  { icon: "heart", t: "Le plaisir d'apprendre", b: "Une éducation agréable et gratifiante, jamais strictement disciplinaire." },
  { icon: "lightbulb", t: "La réflexion critique", b: "Penser par soi-même, questionner, analyser plutôt que subir." },
  { icon: "sprout", t: "Le bien-être", b: "Le bonheur et la tranquillité d'esprit, conditions d'un vrai apprentissage." },
  { icon: "compass", t: "L'autonomie", b: "Explorer ses propres intérêts et prendre en main son apprentissage." },
];

const HABILS = [
  { icon: "shield", t: "Certifiée Qualiopi", b: "Actions de formation, bilans de compétences & VAE." },
  { icon: "scale", t: "Carte professionnelle T", b: "Experte en immobilier, finance et fiscalité." },
  { icon: "award", t: "Orias · IOBSP niveau 1", b: "Gérante de Gem'Bien et Gem'Conseils." },
];

function Cynthia() {
  const nav = useCtxC(window.NavCtx);
  return (
    <div className="cynthia">
      <section className="cy-hero">
        <div className="shell cy-hero-grid">
          <div className="cy-portrait">
            <image-slot id="cynthia-page-portrait" shape="rounded" radius="16" placeholder="Portrait de Cynthia Roux"></image-slot>
          </div>
          <div className="cy-hero-copy">
            <nav className="crumb">
              <a href="#/" onClick={(e) => { e.preventDefault(); nav.go("#/"); }}>Accueil</a>
              <Icon name="chevron-right" /><span>Qui suis-je ?</span>
            </nav>
            <p className="eyebrow">Faites le choix de la liberté</p>
            <h1>Je suis Cynthia <em>Roux</em>.</h1>
            <p className="cy-tag serif">« Une épicurienne de l'éducation. »</p>
            <p className="lead">Curieuse et passionnée par l'être humain, j'ai choisi de proposer, avec mon équipe, des formations et des accompagnements de qualité — portés par une pédagogie innovante et le goût de transmettre.</p>
            <div className="cy-hero-cta">
              <button className="btn btn-primary" onClick={() => nav.section("diagnostic")}>Faire le diagnostic<Icon name="arrow-right" /></button>
              <button className="btn btn-secondary" onClick={() => nav.go("#/rdv")}>Me rencontrer</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell cy-quote-wrap">
          <blockquote className="cy-quote">
            <Icon name="quote" />
            <p>Partager fait partie de moi, comme le sang qui coule dans mes veines. Je lis, j'écris, je produis, j'apprends, je forme et me forme — non pour flamber, juste parce que transmettre me rend vivante.</p>
          </blockquote>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Un parcours atypique</p>
            <h2>Trois doctorats, et une <em>obsession</em>&nbsp;: apprendre.</h2>
            <p>Après des années à l'Université d'Aix-Marseille — économie, sciences humaines et sociales, psychologie — j'ai mené un parcours parallèle entre l'enseignement et l'insertion. Puis j'ai construit, une brique après l'autre, le Groupe GEM.</p>
          </div>
          <div className="timeline">
            {TIMELINE.map((it, i) => (
              <div key={i} className="tl-item">
                <span className="tl-year">{it.y}</span>
                <span className="tl-dot"></span>
                <div className="tl-body">
                  <h4>{it.t}</h4>
                  <p>{it.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Épicurienne de l'éducation</p>
            <h2>Apprendre, c'est d'abord <em>se sentir bien</em>.</h2>
            <p>Inspirée d'Épicure — la recherche du bonheur, la tranquillité de l'esprit, la vie simple — ma pédagogie repose sur quatre convictions.</p>
          </div>
          <div className="philo-grid">
            {PHILO.map((p, i) => (
              <div key={i} className="philo-card">
                <span className="philo-ico"><Icon name={p.icon} /></span>
                <h4>{p.t}</h4>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Valeurs</p>
            <h2>Ce qui guide chaque <em>accompagnement</em>.</h2>
          </div>
          <div className="values values-lg">
            {["Bienveillance", "Respect", "Écoute", "Adaptabilité", "Compétence", "Qualité", "Expertise", "Excellence", "Droiture"].map((v) => (
              <span key={v} className="v">{v}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Titres & habilitations</p>
            <h2>Une expertise <em>certifiée</em>.</h2>
          </div>
          <div className="habil-grid">
            {HABILS.map((h, i) => (
              <div key={i} className="habil-card">
                <span className="habil-ico"><Icon name={h.icon} /></span>
                <div>
                  <h4>{h.t}</h4>
                  <p>{h.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section fiche-cta-band">
        <div className="shell-narrow">
          <div className="fcb-inner">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Devenir ce que GEM</p>
            <h2>On commence par <em>un échange</em> ?</h2>
            <p>Le premier pas est toujours le plus simple. On regarde ensemble où vous en êtes.</p>
            <div className="btns">
              <button className="btn btn-primary" onClick={() => nav.go("#/rdv")}>Prendre RDV<Icon name="arrow-right" /></button>
              <button className="btn btn-secondary" onClick={() => nav.section("diagnostic")}>Faire le diagnostic</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Cynthia = Cynthia;
