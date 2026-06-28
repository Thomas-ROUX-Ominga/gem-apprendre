import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

const TO = 'cynthia.roux13@gmail.com'
const FROM = process.env.RESEND_FROM ?? "Gem'Apprendre <noreply@gemapprendre.fr>"

const SUBJECT_LABELS: Record<string, string> = {
  orientation: "Bilan d'orientation (15-25 ans)",
  bilan: 'Bilan de compétences',
  vae: 'VAE',
  entreprise: "Création d'entreprise",
  immobilier: 'Immobilier',
  autres: 'Finance · Comm · Vente',
  autre: 'À préciser ensemble',
}

const FORMAT_LABELS: Record<string, string> = {
  visio: 'En visio',
  tel: 'Par téléphone',
  presentiel: 'En présentiel',
}

function buildAdminHtml(data: Record<string, string>) {
  const subject = SUBJECT_LABELS[data.subject] ?? data.subject
  const format = FORMAT_LABELS[data.format] ?? data.format
  const creneau = data.day && data.slot ? `${data.day} à ${data.slot} (indicatif)` : 'Non précisé'

  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><title>Nouvelle demande RDV</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a1a">
  <h2 style="color:#8A3D67;margin:0 0 24px">Nouvelle demande de rendez-vous</h2>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;width:140px">Nom</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">${data.prenom} ${data.nom}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666">E-mail</td><td style="padding:10px 0;border-bottom:1px solid #eee"><a href="mailto:${data.email}" style="color:#8A3D67">${data.email}</a></td></tr>
    ${data.tel ? `<tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666">Téléphone</td><td style="padding:10px 0;border-bottom:1px solid #eee">${data.tel}</td></tr>` : ''}
    <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666">Sujet</td><td style="padding:10px 0;border-bottom:1px solid #eee">${subject}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666">Format</td><td style="padding:10px 0;border-bottom:1px solid #eee">${format}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666">Créneau souhaité</td><td style="padding:10px 0;border-bottom:1px solid #eee">${creneau}</td></tr>
    ${data.msg ? `<tr><td style="padding:10px 0;color:#666;vertical-align:top">Message</td><td style="padding:10px 0;line-height:1.5">${data.msg.replace(/\n/g, '<br>')}</td></tr>` : ''}
  </table>
  <p style="margin:24px 0 0;font-size:13px;color:#888">Envoyé depuis gemapprendre.fr</p>
</body>
</html>`
}

function buildConfirmHtml(prenom: string, subjectLabel: string) {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><title>Votre demande est bien reçue</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a1a">
  <h2 style="color:#8A3D67;margin:0 0 16px">Votre demande est bien reçue, ${prenom} !</h2>
  <p style="line-height:1.6;margin:0 0 16px">Merci pour votre demande concernant <strong>${subjectLabel}</strong>.</p>
  <p style="line-height:1.6;margin:0 0 16px">Je lis toutes les demandes personnellement et vous recontacterai sous 48 h pour confirmer notre échange — sans engagement, comme promis.</p>
  <p style="font-family:Georgia,serif;font-style:italic;color:#8A3D67;margin:24px 0;font-size:16px">« À très vite — Cynthia »</p>
  <hr style="border:none;border-top:1px solid #eee;margin:24px 0">
  <p style="font-size:13px;color:#888;line-height:1.5">Gem'Apprendre · Organisme certifié Qualiopi<br>SIREN 811 043 991 · NDA 93132007913</p>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { prenom, nom, email, tel, subject, format, day, slot, msg } = body

    if (!prenom || !nom || !email) {
      return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const subjectLabel = SUBJECT_LABELS[subject] ?? 'À préciser ensemble'

    const [adminResult, confirmResult] = await Promise.all([
      resend.emails.send({
        from: FROM,
        to: TO,
        subject: `Nouvelle demande RDV — ${prenom} ${nom} (${subjectLabel})`,
        html: buildAdminHtml({ prenom, nom, email, tel: tel ?? '', subject, format, day: day ?? '', slot: slot ?? '', msg: msg ?? '' }),
        replyTo: email,
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "Votre demande est bien reçue — Gem'Apprendre",
        html: buildConfirmHtml(prenom, subjectLabel),
      }),
    ])

    if (adminResult.error || confirmResult.error) {
      console.error('Resend error:', adminResult.error ?? confirmResult.error)
      return NextResponse.json({ error: 'Erreur lors de l\'envoi.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('RDV API error:', err)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
