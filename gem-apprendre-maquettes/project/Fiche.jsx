/* global React, Icon, FICHES */
const { useContext: useCtxF } = React;
function fHtml(s) { return { dangerouslySetInnerHTML: { __html: s } }; }

function FicheHero({ f, onBook }) {
  const nav = useCtxF(window.NavCtx);
  return (
    <section className={"fiche-hero uni-" + f.uni}>
      <div className="shell fiche-hero-grid">
        <div className="fiche-hero-copy">
          <nav className="crumb">
            <a href="#/" onClick={(e) => { e.preventDefault(); nav.go("#/"); }}>Accueil</a>
            <Icon name="chevron-right" />
            <span>{f.univers}</span>
          </nav>
          <p className="eyebrow">{f.eyebrow}</p>
          <h1 {...fHtml(f.title)}></h1>
          <p className="lead">{f.lead}</p>
          <div className="fiche-facts">
            {f.facts.map((m, i) => (
              <span key={i} className={"fact" + (m.price ? " is-price" : "")}>
                <Icon name={m.icon} />{m.label}
              </span>
            ))}
          </div>
          <div className="fiche-hero-cta">
            <button className="btn btn-primary" onClick={onBook}>{f.ctaPrimary}<Icon name="arrow-right" /></button>
            <button className="btn btn-secondary" onClick={() => nav.section("diagnostic")}>Refaire le diagnostic</button>
          </div>
        </div>
        <div className="fiche-hero-media">
          <image-slot id={"fiche-" + f.family} shape="rounded" radius="16" placeholder={f.ambiance}></image-slot>
        </div>
      </div>
    </section>
  );
}

function Pains({ f }) {
  if (!f.pains) return null;
  return (
    <section className="section fiche-pains-sec">
      <div className="shell">
        <div className="fiche-pains">
          <h2>{f.painTitle}</h2>
          <ul>
            {f.pains.map((p, i) => <li key={i}><Icon name="message-circle" />{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Steps({ f }) {
  if (!f.steps) return null;
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">{f.steps.label}</p>
          {f.steps.hint && <h2 className="steps-hint-h">{f.steps.hint}</h2>}
        </div>
        <div className={"steps-grid n" + f.steps.items.length}>
          {f.steps.items.map((s, i) => (
            <div key={i} className="step-card">
              <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing({ f, onBook }) {
  if (!f.pricing) return null;
  const p = f.pricing;
  return (
    <section className="section section-soft" id="tarifs">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">Tarifs</p>
          <h2 {...fHtml(p.label)}></h2>
          {p.intro && <p>{p.intro}</p>}
        </div>
        {p.offer && <p className="pricing-offer"><Icon name="gift" />{p.offer}</p>}
        <div className="pricing-list">
          {p.items.map((it, i) => (
            <div key={i} className={"price-row" + (it.popular ? " popular" : "")}>
              <div className="pr-main">
                <span className="pr-name">{it.name}{it.popular && <em className="pr-badge">le + choisi</em>}</span>
                <span className="pr-detail">{it.detail}</span>
              </div>
              <span className="pr-price is-price">{it.price}</span>
              <button className="pr-cta" onClick={onBook} aria-label={"Choisir " + it.name}><Icon name="arrow-right" /></button>
            </div>
          ))}
        </div>
        {p.note && <p className="pricing-note serif">{p.note}</p>}
      </div>
    </section>
  );
}

function Extra({ f }) {
  const pq = f.pourquoi, pw = f.pourqui;
  if (!pq && !pw) return null;
  return (
    <section className="section">
      <div className="shell fiche-extra">
        {pw && (
          <div className="extra-block">
            <p className="eyebrow">{pw.label}</p>
            <p className="extra-body">{pw.body}</p>
            {pw.stat && (
              <div className="extra-stat">
                <span className="es-num">{pw.stat.num}</span>
                <span className="es-lbl">{pw.stat.lbl}</span>
              </div>
            )}
          </div>
        )}
        {pq && (
          <div className="extra-block">
            <p className="eyebrow">{pq.label}</p>
            {pq.bullets && (
              <ul className="extra-bullets">
                {pq.bullets.map((b, i) => <li key={i}><Icon name="check" />{b}</li>)}
              </ul>
            )}
            {pq.testimonials && (
              <div className="testis">
                {pq.testimonials.map((t, i) => (
                  <blockquote key={i} className="testi">
                    <Icon name="quote" />
                    <p>« {t.text} »</p>
                    <cite>— {t.who}</cite>
                  </blockquote>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function FicheCTA({ f, onBook }) {
  const nav = useCtxF(window.NavCtx);
  return (
    <section className="section fiche-cta-band">
      <div className="shell-narrow">
        <div className="fcb-inner">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Devenir ce que GEM</p>
          <h2 {...fHtml(f.ctaTitle)}></h2>
          <p>{f.ctaBody}</p>
          <div className="btns">
            <button className="btn btn-primary" onClick={onBook}>{f.ctaPrimary}<Icon name="arrow-right" /></button>
            <button className="btn btn-secondary" onClick={() => nav.go("#/")}>Retour à l'accueil</button>
          </div>
          <p className="reassure"><Icon name="shield" />Organisme certifié Qualiopi · entretien sans engagement</p>
        </div>
      </div>
    </section>
  );
}

function Fiche({ family }) {
  const nav = useCtxF(window.NavCtx);
  const f = FICHES[family] || FICHES.bilan;
  const book = () => {
    window.__reco = { family: f.family, label: f.eyebrow, tier: f.eyebrow };
    nav.go(`#/rdv?s=${f.family}`);
  };
  return (
    <div className="fiche">
      <FicheHero f={f} onBook={book} />
      <Pains f={f} />
      <Steps f={f} />
      <Pricing f={f} onBook={book} />
      <Extra f={f} />
      <FicheCTA f={f} onBook={book} />
    </div>
  );
}

window.Fiche = Fiche;
