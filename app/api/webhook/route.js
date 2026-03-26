import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function POST(req) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  let event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('Webhook signature error:', err.message)
    return Response.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const email = event.data.object.customer_details?.email
    console.log('Payment received for:', email)

    if (email) {
      await supabase
        .from('users')
        .upsert(
          { email, is_paid: true },
          { onConflict: 'email' }
        )
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const email = event.data.object.customer_email
    console.log('Subscription cancelled for:', email)

    if (email) {
      await supabase
        .from('users')
        .update({ is_paid: false })
        .eq('email', email)
    }
  }

  return Response.json({ received: true })
}
