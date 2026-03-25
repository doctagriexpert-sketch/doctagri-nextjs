import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json({ error: 'Nom, email et message sont obligatoires.' }, { status: 400 })
    }

    // 1. Sauvegarder dans Supabase
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert([{ name, email, phone, subject, message }])

    if (dbError) throw dbError

    // 2. Envoyer email de notification
    await resend.emails.send({
      from: 'DoctAgri <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      subject: `Nouveau message de ${name} — ${subject || 'Contact DoctAgri'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #2D5016; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🌿 DoctAgri — Nouveau message</h1>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Nom :</td>
                <td style="padding: 8px 0; color: #111;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email :</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00C853;">${email}</a></td>
              </tr>
              ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Téléphone :</td><td style="padding: 8px 0; color: #111;">${phone}</td></tr>` : ''}
              ${subject ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Sujet :</td><td style="padding: 8px 0; color: #111;">${subject}</td></tr>` : ''}
            </table>
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;" />
            <h3 style="color: #2D5016; margin-top: 0;">Message :</h3>
            <p style="color: #333; line-height: 1.6; background: white; padding: 16px; border-radius: 6px; border-left: 4px solid #00C853;">${message}</p>
            <p style="font-size: 12px; color: #999; margin-top: 24px;">Message reçu via le formulaire de contact DoctAgri</p>
          </div>
        </div>
      `,
    })

    // 3. Envoyer email de confirmation à l'expéditeur
    await resend.emails.send({
      from: 'DoctAgri <onboarding@resend.dev>',
      to: email,
      subject: 'Nous avons bien reçu votre message — DoctAgri',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #2D5016; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🌿 DoctAgri</h1>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
            <p style="color: #333; font-size: 16px;">Bonjour <strong>${name}</strong>,</p>
            <p style="color: #333; line-height: 1.6;">Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.</p>
            <div style="background: white; padding: 16px; border-radius: 6px; border-left: 4px solid #00C853; margin: 20px 0;">
              <p style="color: #555; margin: 0; font-style: italic;">"${message}"</p>
            </div>
            <p style="color: #333; line-height: 1.6;">Cordialement,<br/><strong style="color: #2D5016;">L'équipe DoctAgri</strong></p>
          </div>
        </div>
      `,
    })

    return Response.json({ success: true, message: 'Message envoyé avec succès !' }, { status: 200 })

  } catch (err) {
    console.error('Contact error:', err)
    return Response.json({ error: 'Une erreur est survenue.' }, { status: 500 })
  }
}