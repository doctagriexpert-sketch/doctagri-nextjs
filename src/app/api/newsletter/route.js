import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Email invalide.' }, { status: 400 })
    }

    const { error } = await supabase
      .from('newsletter')
      .insert([{ email }])

    if (error) {
      if (error.code === '23505') {
        return Response.json({ error: 'Cet email est déjà inscrit.' }, { status: 409 })
      }
      throw error
    }

    return Response.json({ success: true, message: 'Inscription réussie !' }, { status: 200 })

  } catch (err) {
    console.error('Newsletter error:', err)
    return Response.json({ error: 'Une erreur est survenue.' }, { status: 500 })
  }
}