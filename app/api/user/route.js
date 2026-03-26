import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')

  if (!email) return Response.json({ isPaid: false })

  try {
    const { data, error } = await supabase
      .from('users')
      .select('is_paid')
      .eq('email', email)
      .single()

    if (error) console.error('GET error:', error)
    return Response.json({ isPaid: data?.is_paid || false })
  } catch (e) {
    console.error('GET exception:', e)
    return Response.json({ isPaid: false })
  }
}

export async function POST(req) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Invalid email' }, { status: 400 })
    }

    console.log('Attempting to save email:', email)

    const { data: existing } = await supabase
      .from('users')
      .select('email')
      .eq('email', email)
      .single()

    if (existing) {
      console.log('User already exists:', email)
      return Response.json({ success: true, existing: true })
    }

    const { data, error } = await supabase
      .from('users')
      .insert([{ email, is_paid: false }])

    if (error) {
      console.error('Insert error:', error)
      return Response.json({ error: error.message }, { status: 500 })
    }

    console.log('Email saved successfully:', email)
    return Response.json({ success: true })

  } catch (e) {
    console.error('POST exception:', e)
    return Response.json({ error: 'Failed to save' }, { status: 500 })
  }
}
