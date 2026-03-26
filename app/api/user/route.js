import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')

  if (!email) {
    return Response.json({ isPaid: false })
  }

  try {
    const { data } = await supabase
      .from('users')
      .select('is_paid')
      .eq('email', email)
      .single()

    return Response.json({ isPaid: data?.is_paid || false })
  } catch (e) {
    return Response.json({ isPaid: false })
  }
}

export async function POST(req) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Invalid email' }, { status: 400 })
    }

    await supabase
      .from('users')
      .upsert(
        { email, is_paid: false },
        { onConflict: 'email' }
      )

    return Response.json({ success: true })
  } catch (e) {
    return Response.json({ error: 'Failed to save' }, { status: 500 })
  }
}
