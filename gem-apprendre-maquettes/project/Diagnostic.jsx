/* global React, Icon, FLOW, RESULTS, familyOf */
const { useState, useContext } = React;

// Raw HTML helper for the terracotta-apostrophe em markup in copy
function html(s) { return { dangerouslySetInnerHTML: { __html: s } }; }

function Progress({ stage }) {
  const steps = ["Vous", "Votre besoin", "Résultat"];
  return (
    <div className="diag-progress" aria-hidden="true">
      {steps.map((label, i) => (
        <React.Fragment key={i}>
          <span className={"pip" + (i === stage ? " active" : i < stage ? " done" : "")}>
            <span className="dot">{i < stage ? <Icon name="check" /> : "①②③"[i]}</span>
            <span className="lbl-txt">{label}</span>
          </span>
          {i < 2 && <span className={"bar" + (i < stage ? " done" : "")}></span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function Option({ opt, onPick }) {
  return (
    <button className="opt" onClick={() => onPick(opt)}>
      <span className="key">{opt.icon ? <Icon name={opt.icon} /> : opt.key}</span>
      <span className="txt">
        <span className="t">{opt.t}</span>
        {opt.s && <span className="s">{opt.s}</span>}
      </span>
      <span className="go"><Icon name="chevron-right" /></span>
    </button>
  );
}

function Result({ data, resultKey, onRestart }) {
  const nav = useContext(window.NavCtx);
  const family = familyOf(resultKey);
  const reco = { family, label: data.title.replace(/<[^>]+>/g, ""), tier: data.tier };

  const book = () => { window.__reco = reco; nav.go(`#/rdv?s=${family}`); };
  const fiche = () => { window.__reco = reco; nav.go(`#/fiche/${family}`); };

  return (
    <div className="result">
      <p className="eyebrow result-eyebrow no-rule">Recommandé pour vous</p>
      <div className="result-card">
        <span className="tier">{data.tier}</span>
        <h3 {...html(data.title)}></h3>
        <div className="meta">
          {data.meta.map((m, i) => (
            <span key={i} className={"chip" + (m.price ? " price is-price" : "")}>
              <Icon name={m.icon} />{m.label}
            </span>
          ))}
        </div>
        <ul className="why">
          {data.why.map((w, i) => (
            <li key={i}><Icon name="check" />{w}</li>
          ))}
        </ul>
        <p className="result-offer"><Icon name="gift" />{data.offer}</p>
      </div>
      <div className="result-cta">
        <button onClick={book} className="btn btn-primary">Réserver mon échange<Icon name="arrow-right" /></button>
        <button onClick={fiche} className="btn btn-secondary">Voir la fiche détaillée</button>
      </div>
      <button className="result-restart" onClick={onRestart}>
        <Icon name="rotate-ccw" />Recommencer le diagnostic
      </button>
    </div>
  );
}

function Diagnostic({ badge30 = true }) {
  const nav = useContext(window.NavCtx);
  const [history, setHistory] = useState(["start"]);
  const [result, setResult] = useState(null);
  const [resultKey, setResultKey] = useState(null);
  const [animKey, setAnimKey] = useState(0);

  const current = history[history.length - 1];
  const node = FLOW[current];
  const stage = result ? 2 : history.length - 1;

  const pick = (opt) => {
    if (opt.result) {
      setResult(RESULTS[opt.result]);
      setResultKey(opt.result);
    } else if (opt.next) {
      setHistory([...history, opt.next]);
      setAnimKey((k) => k + 1);
    }
  };

  const back = () => {
    if (result) { setResult(null); setAnimKey((k) => k + 1); return; }
    if (history.length > 1) { setHistory(history.slice(0, -1)); setAnimKey((k) => k + 1); }
  };

  const restart = () => { setResult(null); setResultKey(null); setHistory(["start"]); setAnimKey((k) => k + 1); };

  return (
    <div className="diag">
      <div className="diag-top">
        <div className="who">
          <img src="assets/gem-apprendre-mark.png" alt="" />
          <span className="gem-name">Gem<em>'</em>Apprendre</span>
        </div>
        <span className="secs">{badge30 ? "répondez en 30 secondes" : "votre orientation, en 3 réponses"}</span>
      </div>

      <Progress stage={stage} />

      {result ? (
        <Result key={"r" + animKey} data={result} resultKey={resultKey} onRestart={restart} />
      ) : (
        <div className="diag-body q-anim" key={animKey}>
          <p className="eyebrow diag-q-eyebrow">{node.eyebrow}</p>
          <h2 className="diag-q" {...html(node.q)}></h2>
          <p className="diag-hint">{node.hint}</p>
          <div className={"diag-options" + (node.cols === 2 ? " cols-2" : "")}>
            {node.options.map((opt) => (
              <Option key={opt.key} opt={opt} onPick={pick} />
            ))}
          </div>

          <div className="diag-foot">
            <button className={"diag-back" + (history.length > 1 ? " show" : "")} onClick={back}>
              <Icon name="arrow-left" />Retour
            </button>
            <span className="diag-skip">
              Pas envie ? <a href="#univers" onClick={(e) => { e.preventDefault(); const el = document.getElementById("univers"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" }); }}>Voir tout le menu</a>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

window.Diagnostic = Diagnostic;
