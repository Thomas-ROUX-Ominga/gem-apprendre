'use client'

import { useState, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FLOW, RESULTS, familyOf, type FlowOption, type ResultData } from '@/data/flow-data'
import Icon from './Icon'

function Progress({ stage }: { stage: number }) {
  const steps = ['Vous', 'Votre besoin', 'Résultat']
  return (
    <div className="diag-progress" aria-hidden="true">
      {steps.map((label, i) => (
        <Fragment key={i}>
          <span className={'pip' + (i === stage ? ' active' : i < stage ? ' done' : '')}>
            <span className="dot">
              {i < stage ? <Icon name="check" /> : String(i + 1)}
            </span>
            <span className="lbl-txt">{label}</span>
          </span>
          {i < 2 && <span className={'bar' + (i < stage ? ' done' : '')} />}
        </Fragment>
      ))}
    </div>
  )
}

function Option({ opt, onPick }: { opt: FlowOption; onPick: (o: FlowOption) => void }) {
  return (
    <button className="opt" onClick={() => onPick(opt)}>
      <span className="key">
        {opt.icon ? <Icon name={opt.icon} /> : opt.key}
      </span>
      <span className="txt">
        <span className="t">{opt.t}</span>
        {opt.s && <span className="s">{opt.s}</span>}
      </span>
      <span className="go"><Icon name="chevron-right" /></span>
    </button>
  )
}

function Result({
  data,
  resultKey,
  onRestart,
}: {
  data: ResultData
  resultKey: string
  onRestart: () => void
}) {
  const family = familyOf(resultKey)

  return (
    <div className="result">
      <p className="eyebrow result-eyebrow no-rule">Recommandé pour vous</p>
      <div className="result-card">
        <span className="tier">{data.tier}</span>
        <h3 dangerouslySetInnerHTML={{ __html: data.title }} />
        <div className="meta">
          {data.meta.map((m, i) => (
            <span key={i} className={'chip' + (m.price ? ' price is-price' : '')}>
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
        <Link href={`/rdv?s=${family}`} className="btn btn-primary">
          Réserver mon échange<Icon name="arrow-right" />
        </Link>
      </div>
      <Link href={`/fiche/${family}`} className="result-detail-link">
        En savoir plus sur ce parcours<Icon name="arrow-right" />
      </Link>
      <button className="result-restart" onClick={onRestart}>
        <Icon name="rotate-ccw" />Recommencer le diagnostic
      </button>
    </div>
  )
}

export default function Diagnostic() {
  const [history, setHistory] = useState(['start'])
  const [result, setResult] = useState<ResultData | null>(null)
  const [resultKey, setResultKey] = useState<string | null>(null)
  const [animKey, setAnimKey] = useState(0)

  const current = history[history.length - 1]
  const node = FLOW[current]
  const stage = result ? 2 : history.length - 1

  const pick = (opt: FlowOption) => {
    if (opt.result) {
      setResult(RESULTS[opt.result])
      setResultKey(opt.result)
    } else if (opt.next) {
      setHistory([...history, opt.next])
      setAnimKey((k) => k + 1)
    }
  }

  const back = () => {
    if (result) { setResult(null); setAnimKey((k) => k + 1); return }
    if (history.length > 1) { setHistory(history.slice(0, -1)); setAnimKey((k) => k + 1) }
  }

  const restart = () => {
    setResult(null)
    setResultKey(null)
    setHistory(['start'])
    setAnimKey((k) => k + 1)
  }

  return (
    <div className="diag">
      <div className="diag-top">
        <div className="who">
          <Image src="/gem-apprendre-mark.png" alt="" width={26} height={26} />
          <span className="gem-name">Gem<em>&apos;</em>Apprendre</span>
        </div>
        <span className="secs">répondez en 30 secondes</span>
      </div>

      <p className="sr-only" aria-live="polite">Étape {stage + 1} sur 3</p>
      <Progress stage={stage} />

      {result && resultKey ? (
        <Result key={'r' + animKey} data={result} resultKey={resultKey} onRestart={restart} />
      ) : (
        <div className="diag-body q-anim" key={animKey}>
          <p className="eyebrow diag-q-eyebrow">{node.eyebrow}</p>
          <h2 className="diag-q" dangerouslySetInnerHTML={{ __html: node.q }} />
          <p className="diag-hint">{node.hint}</p>
          <div className={'diag-options' + (node.cols === 2 ? ' cols-2' : '')}>
            {node.options.map((opt) => (
              <Option key={opt.key} opt={opt} onPick={pick} />
            ))}
          </div>
          <div className="diag-foot">
            <button
              className={'diag-back' + (history.length > 1 ? ' show' : '')}
              onClick={back}
            >
              <Icon name="arrow-left" />Retour
            </button>
            <span className="diag-skip">
              Pas envie ?{' '}
              <a
                href="#univers"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('univers')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                Voir tout le menu
              </a>
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
