'use client'
import { useState, useEffect } from 'react'

export default function Account() {
  const [email, setEmail] = useState('')
  const [isPaid, setIsPaid] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedEmail = localStorage.getItem('clovert_email')
    if (!storedEmail) {
      window.location.href = '/'
      return
    }
    setEmail(storedEmail)

    async function checkStatus() {
      try {
        const res = await fetch('/api/user?email=' + encodeURIComponent(storedEmail))
        const data = await res.json()
        setIsPaid(data.isPaid || false)
      } catch (e) {}
      setLoading(false)
    }
    checkStatus()
  }, [])

  const month = new Date().toISOString().slice(0, 7)
  const usedThisMonth = typeof window !== 'undefined'
    ? parseInt(localStorage.getItem('sg_uses_' + month) || '0')
    : 0

  if (loading) {
    return (
      <main style={{ minHeight: '100vh', background: '#080C0A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>Loading your account...</div>
      </main>
    )
  }

  return (
    <main style={{ minHeight: '100vh', background: '#080C0A', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      <header style={{ padding: '20px 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Clovert" style={{ height: '30px' }} />
          <span style={{ fontSize: '18px', fontWeight: '700', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clovert</span>
        </a>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 40px 100px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-0.8px', marginBottom: '32px' }}>Your account</h1>

        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '24px', marginBottom: '16px' }}>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Email</div>
          <div style={{ fontSize: '16px', color: '#fff', fontWeight: '500' }}>{email}</div>
        </div>

        <div style={{ background: isPaid ? 'rgba(126,232,154,0.05)' : 'rgba(255,255,255,0.03)', border: '1px solid ' + (isPaid ? 'rgba(126,232,154,0.2)' : 'rgba(255,255,255,0.07)'), borderRadius: '14px', padding: '24px', marginBottom: '16px' }}>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Plan</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: isPaid ? '#7EE89A' : '#fff' }}>{isPaid ? 'Clovert Pro' : 'Free'}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                {isPaid ? 'Unlimited change orders · Active' : usedThisMonth + ' of 3 free uses this month'}
              </div>
            </div>
            {!isPaid && (
              <a href="/upgrade" style={{ background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', color: '#fff', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: '700' }}>
                Upgrade
              </a>
            )}
          </div>
        </div>

        {isPaid && (
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '24px', marginBottom: '16px' }}>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Manage subscription</div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '14px', lineHeight: '1.65' }}>Update your payment method, view invoices, or cancel your subscription through the Stripe customer portal.</p>
            <a href="billing.stripe.com/p/login/14A00k4kagNF4Egc1PafS00" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>
              Manage billing →
            </a>
          </div>
        )}

        <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <button
            onClick={() => {
              localStorage.removeItem('clovert_email')
              localStorage.removeItem('clovert_paid')
              window.location.href = '/'
            }}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            Sign out
          </button>
        </div>
      </div>
    </main>
  )
}
