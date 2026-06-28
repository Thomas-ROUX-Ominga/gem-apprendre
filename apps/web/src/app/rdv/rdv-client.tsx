'use client'

import { useState, Suspense, Fragment } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Icon from '@/components/Icon'

const SUBJECTS = [
  { key: 'orientation', icon: 'compass', label: "Bilan d'orientation", sub: '15-25 ans · trouver sa voie' },
  { key: 'bilan', icon: 'refresh', label: 'Bilan de compétences', sub: 'Faire le point, se reconvertir' },
  { key: 'vae', icon: 'award', label: 'VAE', sub: 'Valider mon expérience' },
  { key: 'entreprise', icon: 'briefcase', label: "Création d'entreprise", sub: "De l'idée à la réussite" },
  { key: 'immobilier', icon: 'building', label: 'Immobilier', sub: "Loi ALUR, BTS, « Comme une Pro »" },
  { key: 'autres', icon: 'layers', label: 'Finance · Comm · Vente', sub: 'Parcours sur mesure' },
  { key: 'autre', icon: 'message-circle', label: 'Je ne sais pas encore', sub: 'On en parle ensemble' },
]

const FORMATS = [
  { key: 'visio', icon: 'video', label: 'En visio', sub: 'Lien sécurisé, où que vous soyez' },
  { key: 'tel', icon: 'phone', label: 'Par téléphone', sub: 'Un premier échange simple' },
  { key: 'presentiel', icon: 'map-pin', label: 'En présentiel', sub: 'Sud de la France · sur RDV' },
]

const DAYS = [
  { key: 'lun', d: 'Lun.', n: '16' },
  { key: 'mar', d: 'Mar.', n: '17' },
  { key: 'mer', d: 'Mer.', n: '18' },
  { key: 'jeu', d: 'Jeu.', n: '19' },
  { key: 'ven', d: 'Ven.', n: '20' },
]
const SLOTS = ['09:00', '11:00', '14:00', '16:30', '18:00']
const TAKEN = new Set(['lun-14:00', 'mar-09:00', 'mer-16:30', 'jeu-11:00', 'ven-14:00'])

function StepBar({ step }: { step: number }) {
  const labels = ['Le sujet', 'Le créneau', 'Vos coordonnées']
  return (
    <>
      <div aria-live="polite" className="sr-only">
        Étape {step + 1} sur 3 : {labels[step]}
      </div>
      <div className="rdv-steps" aria-hidden="true">
        {labels.map((l, i) => (
          <Fragment key={i}>
            <div className={'rs' + (i === step ? ' active' : i < step ? ' done' : '')}>
              <span className="rs-dot">
                {i < step ? <Icon name="check" /> : i + 1}
              </span>
              <span className="rs-lbl">{l}</span>
            </div>
            {i < 2 && <span className={'rs-bar' + (i < step ? ' done' : '')} />}
          </Fragment>
        ))}
      </div>
    </>
  )
}

function RdvForm({ initialSubject }: { initialSubject: string | null }) {
  const [step, setStep] = useState(0)
  const [subject, setSubject] = useState<string | null>(initialSubject)
  const [format, setFormat] = useState('visio')
  const [day, setDay] = useState<string | null>(null)
  const [slot, setSlot] = useState<string | null>(null)
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', tel: '', msg: '', consent: false })
  const [touched, setTouched] = useState(false)
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: (e.target as HTMLInputElement).type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value })

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  const step3Ok = form.prenom.trim() && form.nom.trim() && emailOk && form.consent

  const subjectLabel = SUBJECTS.find((s) => s.key === subject)?.label
  const next = () => setStep((s) => s + 1)
  const prev = () => setStep((s) => s - 1)

  const submit = async () => {
    setTouched(true)
    if (!step3Ok) return
    setLoading(true)
    setSendError(null)
    try {
      const res = await fetch('/api/rdv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject, format, day, slot }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error ?? 'Erreur inconnue')
      setDone(true)
    } catch {
      setSendError("Une erreur s'est produite. Réessayez ou contactez-nous directement.")
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <section className="rdv-confirm">
        <div className="shell-narrow">
          <div className="confirm-card">
            <span className="confirm-icon"><Icon name="check-circle" /></span>
            <p className="eyebrow no-rule" style={{ justifyContent: 'center' }}>
              C&apos;est noté, {form.prenom || 'à vous'}
            </p>
            <h1>Votre demande est <em>envoyée</em>.</h1>
            <p className="confirm-lead">
              On vous recontacte sous 48 h pour confirmer votre échange — sans engagement, comme promis.
            </p>
            <div className="confirm-recap">
              <div>
                <span className="cr-k">Sujet</span>
                <span className="cr-v">{subjectLabel || 'À préciser ensemble'}</span>
              </div>
              <div>
                <span className="cr-k">Format</span>
                <span className="cr-v">{FORMATS.find((f) => f.key === format)?.label}</span>
              </div>
              {day && slot && (
                <div>
                  <span className="cr-k">Créneau souhaité</span>
                  <span className="cr-v">
                    {DAYS.find((d) => d.key === day)?.d} {DAYS.find((d) => d.key === day)?.n} · {slot}
                  </span>
                </div>
              )}
              <div>
                <span className="cr-k">Vous</span>
                <span className="cr-v">{form.prenom} {form.nom} · {form.email}</span>
              </div>
            </div>
            <p className="confirm-offer serif">
              <Icon name="gift" />L&apos;entretien de positionnement / découverte vous est offert.
            </p>
            <p className="confirm-cynthia serif">
              « Je lis toutes les demandes personnellement. À très vite — Cynthia »
            </p>
            <div className="btns">
              <Link href="/" className="btn btn-primary">
                Retour à l&apos;accueil<Icon name="arrow-right" />
              </Link>
              {subject && subject !== 'autre' && (
                <Link href={`/fiche/${subject}`} className="btn btn-secondary">
                  En savoir plus sur {SUBJECTS.find(s => s.key === subject)?.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="rdv">
      <div className="shell-narrow">
        <div className="rdv-head">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Prendre rendez-vous</p>
          <h1>Un échange, pour <em>commencer</em>.</h1>
          <p className="rdv-sub">
            Trois étapes, deux minutes. On regarde ensemble où vous en êtes — et ce qui vous ferait du bien.
          </p>
        </div>

        <StepBar step={step} />

        <div className="rdv-card">
          {step === 0 && (
            <div className="rdv-step q-anim">
              <h3 className="rdv-q">Sur quoi porte votre demande ?</h3>
              <div className="choice-grid">
                {SUBJECTS.map((s) => (
                  <button
                    key={s.key}
                    aria-pressed={subject === s.key}
                    className={'choice' + (subject === s.key ? ' sel' : '')}
                    onClick={() => setSubject(s.key)}
                  >
                    <span className="choice-ico"><Icon name={s.icon} /></span>
                    <span className="choice-txt">
                      <span className="ct">{s.label}</span>
                      <span className="cs">{s.sub}</span>
                    </span>
                    <span className="choice-check"><Icon name="check" /></span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="rdv-step q-anim">
              <h3 className="rdv-q">Comment préférez-vous échanger ?</h3>
              <div className="format-row">
                {FORMATS.map((fm) => (
                  <button
                    key={fm.key}
                    aria-pressed={format === fm.key}
                    className={'format' + (format === fm.key ? ' sel' : '')}
                    onClick={() => setFormat(fm.key)}
                  >
                    <span className="format-ico"><Icon name={fm.icon} /></span>
                    <span className="ft">{fm.label}</span>
                    <span className="fs">{fm.sub}</span>
                  </button>
                ))}
              </div>

              <h3 className="rdv-q mt">
                Choisissez un créneau <span className="opt-tag">facultatif</span>
              </h3>
              <div className="cal">
                <div className="cal-days">
                  {DAYS.map((d) => (
                    <button
                      key={d.key}
                      aria-pressed={day === d.key}
                      className={'cal-day' + (day === d.key ? ' sel' : '')}
                      onClick={() => { setDay(d.key); setSlot(null) }}
                    >
                      <span className="cd-d">{d.d}</span>
                      <span className="cd-n">{d.n}</span>
                    </button>
                  ))}
                </div>
                {day && (
                  <div className="cal-slots">
                    {SLOTS.map((t) => {
                      const taken = TAKEN.has(day + '-' + t)
                      return (
                        <button
                          key={t}
                          disabled={taken}
                          aria-pressed={!taken && slot === t}
                          className={'slot' + (slot === t ? ' sel' : '') + (taken ? ' taken' : '')}
                          onClick={() => setSlot(t)}
                        >
                          {t}{taken && <span className="slot-x">complet</span>}
                        </button>
                      )
                    })}
                  </div>
                )}
                {!day && (
                  <p className="cal-hint serif">
                    Sélectionnez un jour pour voir les disponibilités — ou passez cette étape, on s&apos;arrange.
                  </p>
                )}
                <p className="cal-note serif">
                  Les créneaux sont indicatifs — nous confirmons le rendez-vous par email.
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="rdv-step q-anim">
              <h3 className="rdv-q">Comment vous joindre ?</h3>
              <div className="form-grid">
                <label className="field">
                  <span className="fl">Prénom *</span>
                  <input
                    className={'finput' + (touched && !form.prenom.trim() ? ' err' : '')}
                    aria-invalid={touched && !form.prenom.trim() ? true : undefined}
                    required
                    value={form.prenom}
                    onChange={set('prenom')}
                    placeholder="Camille"
                    autoComplete="given-name"
                  />
                </label>
                <label className="field">
                  <span className="fl">Nom *</span>
                  <input
                    className={'finput' + (touched && !form.nom.trim() ? ' err' : '')}
                    aria-invalid={touched && !form.nom.trim() ? true : undefined}
                    required
                    value={form.nom}
                    onChange={set('nom')}
                    placeholder="Durand"
                    autoComplete="family-name"
                  />
                </label>
                <label className="field full">
                  <span className="fl">E-mail *</span>
                  <input
                    className={'finput' + (touched && !emailOk ? ' err' : '')}
                    aria-invalid={touched && !emailOk ? true : undefined}
                    aria-describedby={touched && !emailOk ? 'err-email' : undefined}
                    required
                    value={form.email}
                    onChange={set('email')}
                    placeholder="camille.durand@email.fr"
                    type="email"
                    autoComplete="email"
                  />
                  {touched && !emailOk && (
                    <span id="err-email" className="ferr" role="alert">
                      Indiquez un e-mail valide.
                    </span>
                  )}
                </label>
                <label className="field full">
                  <span className="fl">
                    Téléphone <span className="opt-tag">facultatif</span>
                  </span>
                  <input
                    className="finput"
                    value={form.tel}
                    onChange={set('tel')}
                    placeholder="06 12 34 56 78"
                    type="tel"
                    autoComplete="tel"
                  />
                </label>
                <label className="field full">
                  <span className="fl">
                    Votre message <span className="opt-tag">facultatif</span>
                  </span>
                  <textarea
                    className="finput"
                    rows={3}
                    value={form.msg}
                    onChange={set('msg')}
                    placeholder="Dites-nous en deux mots où vous en êtes…"
                  />
                </label>
                <label className={'consent' + (touched && !form.consent ? ' err' : '')}>
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={set('consent')}
                    required
                    aria-invalid={touched && !form.consent ? true : undefined}
                  />
                  <span>
                    J&apos;accepte d&apos;être recontacté·e par Gem&apos;Apprendre.
                    Vos données restent confidentielles (secret professionnel) —{' '}
                    <Link href="/mentions-legales">mentions légales</Link>.
                  </span>
                </label>
              </div>
            </div>
          )}

          {sendError && (
            <p className="rdv-send-error" role="alert">
              <Icon name="alert-circle" />{sendError}
            </p>
          )}
          <div className="rdv-nav">
            {step === 0 ? (
              <Link href="/" className="btn btn-ghost rdv-back">
                <Icon name="arrow-left" />Annuler
              </Link>
            ) : (
              <button className="btn btn-ghost rdv-back" onClick={prev}>
                <Icon name="arrow-left" />Retour
              </button>
            )}
            {step < 2 ? (
              <button
                className="btn btn-primary"
                disabled={step === 0 && !subject}
                onClick={next}
              >
                Continuer<Icon name="arrow-right" />
              </button>
            ) : (
              <button className="btn btn-primary" onClick={submit} disabled={loading}>
                {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}<Icon name={loading ? 'loader' : 'send'} />
              </button>
            )}
          </div>
        </div>

        <p className="rdv-foot serif">
          <Icon name="shield" />Entretien sans engagement · réponse sous 48 h · organisme certifié Qualiopi.
        </p>
      </div>
    </section>
  )
}

function RdvWithParams() {
  const searchParams = useSearchParams()
  const s = searchParams.get('s')
  return <RdvForm initialSubject={s} />
}

export default function RdvClient() {
  return (
    <Suspense fallback={<RdvForm initialSubject={null} />}>
      <RdvWithParams />
    </Suspense>
  )
}
