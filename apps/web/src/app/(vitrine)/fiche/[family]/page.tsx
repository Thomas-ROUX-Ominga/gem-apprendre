import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FICHES } from '@/data/fiche-data'
import Icon from '@/components/Icon'
import ImageSlot from '@/components/ImageSlot'

interface Props {
  params: Promise<{ family: string }>
}

export async function generateStaticParams() {
  return Object.keys(FICHES).map((family) => ({ family }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { family } = await params
  const f = FICHES[family]
  if (!f) return {}
  const description = f.lead.length > 155 ? f.lead.slice(0, 152) + '…' : f.lead
  return {
    title: f.eyebrow,
    description,
    openGraph: { title: `${f.eyebrow} — Gem'Apprendre`, description },
  }
}

export default async function FichePage({ params }: Props) {
  const { family } = await params
  const f = FICHES[family]
  if (!f) notFound()

  const bookHref = `/rdv?s=${f.family}`

  return (
    <div className="fiche">
      {/* ---- HERO ---- */}
      <section className="fiche-hero">
        <div className="shell fiche-hero-grid">
          <div className="fiche-hero-copy">
            <nav className="crumb">
              <Link href="/">Accueil</Link>
              <Icon name="chevron-right" />
              <span>{f.eyebrow}</span>
            </nav>
            <p className="eyebrow">{f.eyebrow}</p>
            <h1 dangerouslySetInnerHTML={{ __html: f.title }} />
            <p className="lead">{f.lead}</p>
            <div className="fiche-facts">
              {f.facts.map((m, i) => (
                <span key={i} className={'fact' + (m.price ? ' is-price' : '')}>
                  <Icon name={m.icon} />{m.label}
                </span>
              ))}
            </div>
            <div className="fiche-hero-cta">
              <Link href={bookHref} className="btn btn-primary">
                {f.ctaPrimary}<Icon name="arrow-right" />
              </Link>
              <Link href="/#diagnostic" className="btn btn-secondary">
                Refaire le diagnostic
              </Link>
            </div>
          </div>
          <div className="fiche-hero-media">
            <ImageSlot
              placeholder={f.ambiance}
              className="fiche-hero-img"
              style={{ width: '100%', height: 460, borderRadius: 16 }}
            />
          </div>
        </div>
      </section>

      {/* ---- PAINS ---- */}
      {f.pains && f.painTitle && (
        <section className="section fiche-pains-sec">
          <div className="shell">
            <div className="fiche-pains">
              <h2>{f.painTitle}</h2>
              <ul>
                {f.pains.map((p, i) => (
                  <li key={i}><Icon name="message-circle" />{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ---- STEPS ---- */}
      {f.steps && (
        <section className="section">
          <div className="shell">
            <div className="section-head">
              <p className="eyebrow">{f.steps.label}</p>
              {f.steps.hint && <h2 className="steps-hint-h">{f.steps.hint}</h2>}
            </div>
            <div className={`steps-grid n${f.steps.items.length}`}>
              {f.steps.items.map((s, i) => (
                <div key={i} className="step-card">
                  <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- PRICING ---- */}
      {f.pricing && (
        <section className="section section-soft" id="tarifs">
          <div className="shell">
            <div className="section-head">
              <p className="eyebrow">Tarifs</p>
              <h2 dangerouslySetInnerHTML={{ __html: f.pricing.label }} />
              {f.pricing.intro && <p>{f.pricing.intro}</p>}
            </div>
            {f.pricing.offer && (
              <p className="pricing-offer"><Icon name="gift" />{f.pricing.offer}</p>
            )}
            <div className="pricing-list">
              {f.pricing.items.map((it, i) => (
                <Link key={i} href={bookHref} className={'price-row' + (it.popular ? ' popular' : '')} aria-label={'Choisir ' + it.name}>
                  <div className="pr-main">
                    <span className="pr-name">
                      {it.name}{it.popular && <em className="pr-badge">le + choisi</em>}
                    </span>
                    <span className="pr-detail">{it.detail}</span>
                  </div>
                  <span className="pr-price is-price">{it.price}</span>
                  <span className="pr-cta">
                    <Icon name="arrow-right" />
                  </span>
                </Link>
              ))}
            </div>
            {f.pricing.note && <p className="pricing-note serif">{f.pricing.note}</p>}
          </div>
        </section>
      )}

      {/* ---- EXTRA ---- */}
      {(f.pourquoi || f.pourqui) && (
        <section className="section">
          <div className="shell fiche-extra">
            {f.pourqui && (
              <div className="extra-block">
                <p className="eyebrow">{f.pourqui.label}</p>
                <p className="extra-body">{f.pourqui.body}</p>
                {f.pourqui.stat && (
                  <div className="extra-stat">
                    <span className="es-num">{f.pourqui.stat.num}</span>
                    <span className="es-lbl">{f.pourqui.stat.lbl}</span>
                  </div>
                )}
              </div>
            )}
            {f.pourquoi && (
              <div className="extra-block">
                <p className="eyebrow">{f.pourquoi.label}</p>
                {f.pourquoi.bullets && (
                  <ul className="extra-bullets">
                    {f.pourquoi.bullets.map((b, i) => (
                      <li key={i}><Icon name="check" />{b}</li>
                    ))}
                  </ul>
                )}
                {f.pourquoi.testimonials && (
                  <div className="testis">
                    {f.pourquoi.testimonials.map((t, i) => (
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
      )}

      {/* ---- FAQ ---- */}
      {f.faq && f.faq.length > 0 && (
        <section className="section section-soft" id="faq">
          <div className="shell">
            <div className="section-head">
              <p className="eyebrow">Questions fréquentes</p>
              <h2>Tout ce que vous voulez <em>savoir</em>.</h2>
            </div>
            <div className="faq-list">
              {f.faq.map((item, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-q">
                    <Icon name="chevron-right" />
                    <span>{item.q}</span>
                  </summary>
                  <p className="faq-a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- FICHE CTA ---- */}
      <section className="section fiche-cta-band">
        <div className="shell-narrow">
          <div className="fcb-inner">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Devenir ce que j&apos;aime</p>
            <h2 dangerouslySetInnerHTML={{ __html: f.ctaTitle }} />
            <p>{f.ctaBody}</p>
            <div className="btns">
              <Link href={bookHref} className="btn btn-primary">
                {f.ctaPrimary}<Icon name="arrow-right" />
              </Link>
              <Link href="/" className="btn btn-secondary">Retour à l&apos;accueil</Link>
            </div>
            <p className="reassure">
              <Icon name="shield" />Organisme certifié Qualiopi · entretien sans engagement
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
