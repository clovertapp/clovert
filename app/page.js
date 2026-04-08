'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [brief, setBrief] = useState('')
  const [request, setRequest] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [usesLeft, setUsesLeft] = useState(3)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [copied, setCopied] = useState(false)
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [isPaid, setIsPaid] = useState(false)

  useEffect(() => {
    const storedEmail = localStorage.getItem('clovert_email')
    if (storedEmail) {
      setEmail(storedEmail)
      setEmailSubmitted(true)
      checkPaidStatus(storedEmail)
    }
    const month = new Date().toISOString().slice(0, 7)
    const used = parseInt(localStorage.getItem('sg_uses_' + month) || '0')
    setUsesLeft(Math.max(0, 3 - used))
  }, [])

  async function checkPaidStatus(userEmail) {
    try {
      const res = await fetch('/api/user?email=' + encodeURIComponent(userEmail))
      const data = await res.json()
      if (data.isPaid) setIsPaid(true)
    } catch (e) {}
  }

  async function saveEmail(userEmail) {
    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail })
      })
      const data = await res.json()
      console.log('Save email result:', data)
    } catch (e) {
      console.error('Save email error:', e)
    }
  }

  async function generateWithEmail(userEmail) {
    if (!brief.trim() || !request.trim()) return
    const month = new Date().toISOString().slice(0, 7)
    const used = parseInt(localStorage.getItem('sg_uses_' + month) || '0')
    if (used >= 3 && !isPaid) { setShowUpgrade(true); return }
    setLoading(true)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brief, request })
      })
      const data = await res.json()
      setResult(data.document)
      localStorage.setItem('sg_uses_' + month, String(used + 1))
      setUsesLeft(Math.max(0, 2 - used))
    } catch (err) {
      setResult('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  async function generate() {
    if (!brief.trim() || !request.trim()) return
    if (!emailSubmitted) { setShowEmailModal(true); return }
    await generateWithEmail(email)
  }

  async function handleEmailSubmit() {
    if (!email.includes('@')) return
    localStorage.setItem('clovert_email', email)
    setEmailSubmitted(true)
    setShowEmailModal(false)
    await saveEmail(email)
    setTimeout(() => generateWithEmail(email), 100)
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main style={{ minHeight: '100vh', background: '#080C0A', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>

      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse, rgba(74,192,104,0.10) 0%, transparent 65%)', borderRadius: '50%' }} />
      </div>

      {/* ── HEADER ── */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, background: 'rgba(8,12,10,0.90)', backdropFilter: 'blur(24px)', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/logo.png" alt="Clovert" style={{ height: '28px', width: 'auto' }} />
          <span style={{ fontSize: '16px', fontWeight: '700', letterSpacing: '-0.3px', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clovert</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {emailSubmitted && (
            <a href="/account" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', padding: '6px 10px' }}>Account</a>
          )}
          {!isPaid ? (
            <a href="/upgrade" style={{ fontSize: '12px', color: '#080C0A', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', padding: '7px 14px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', whiteSpace: 'nowrap' }}>
              {isPaid ? 'Pro' : 'Upgrade'}
            </a>
          ) : (
            <div style={{ fontSize: '12px', color: '#7EE89A', background: 'rgba(126,232,154,0.08)', border: '1px solid rgba(126,232,154,0.18)', padding: '6px 12px', borderRadius: '20px', fontWeight: '600' }}>Pro</div>
          )}
        </div>
      </header>

      {/* ── FREE USES BAR ── */}
      {!isPaid && (
        <div style={{ background: 'rgba(126,232,154,0.05)', borderBottom: '1px solid rgba(126,232,154,0.1)', padding: '8px 20px', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', color: usesLeft > 0 ? '#7EE89A' : '#f87171', fontWeight: '500' }}>
            {usesLeft > 0 ? `${usesLeft} free change orders remaining this month` : 'Free limit reached — upgrade for unlimited access'}
          </span>
        </div>
      )}

      {/* ── HERO ── */}
      <section style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 24px 40px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(126,232,154,0.07)', border: '1px solid rgba(126,232,154,0.18)', borderRadius: '20px', padding: '5px 14px', fontSize: '11px', color: '#7EE89A', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '24px' }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#7EE89A', display: 'inline-block', boxShadow: '0 0 5px #7EE89A' }} />
          The freelancer scope creep tool
        </div>

        <h1 style={{ fontSize: 'clamp(32px, 8vw, 60px)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-1.5px', marginBottom: '16px' }}>
          <span style={{ color: '#fff' }}>Turn scope creep into a </span>
          <span style={{ background: 'linear-gradient(135deg, #7EE89A 0%, #3DB85C 50%, #2A9446 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>professional change order</span>
        </h1>

        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', maxWidth: '480px', margin: '0 auto 36px' }}>
          Paste your original brief and what your client just asked for. Get a ready-to-send document in 60 seconds.
        </p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', overflow: 'hidden', marginBottom: '0' }}>
          {[['28M+', 'Freelancers globally'], ['£6,800', 'Lost per year avg.'], ['60 sec', 'To generate']].map(([val, label]) => (
            <div key={val} style={{ textAlign: 'center', padding: '16px 8px', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{val}</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '3px', lineHeight: '1.4' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAIN TOOL ── */}
      <section style={{ maxWidth: '940px', margin: '0 auto', padding: '0 20px 80px', position: 'relative', zIndex: 1 }}>

        {/* Input cards — stack on mobile */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', marginBottom: '12px' }}>
          {[
            { label: 'Your original brief', value: brief, setter: setBrief, placeholder: 'Paste what was originally agreed with your client...', icon: '📄' },
            { label: "Client's new request", value: request, setter: setRequest, placeholder: "Paste exactly what they're now asking for...", icon: '📨' }
          ].map(({ label, value, setter, placeholder, icon }) => (
            <div key={label} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid ' + (value.length > 0 ? 'rgba(126,232,154,0.2)' : 'rgba(255,255,255,0.07)'), borderRadius: '14px', padding: '18px 20px', transition: 'border-color 0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '14px' }}>{icon}</span>
                <label style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: value.length > 0 ? '#7EE89A' : 'rgba(255,255,255,0.35)' }}>{label}</label>
                {value.length > 0 && <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>{value.length}</span>}
              </div>
              <textarea
                value={value}
                onChange={e => setter(e.target.value)}
                placeholder={placeholder}
                style={{ width: '100%', height: '160px', background: 'transparent', border: 'none', outline: 'none', resize: 'none', fontSize: '14px', lineHeight: '1.7', color: 'rgba(255,255,255,0.8)', fontFamily: 'inherit' }}
              />
            </div>
          ))}
        </div>

        {/* Generate button */}
        <button
          onClick={generate}
          disabled={loading || !brief.trim() || !request.trim()}
          style={{ width: '100%', padding: '18px', background: loading || !brief.trim() || !request.trim() ? 'rgba(255,255,255,0.05)' : 'linear-gradient(135deg, #7EE89A 0%, #3DB85C 55%, #2A9446 100%)', border: loading || !brief.trim() || !request.trim() ? '1px solid rgba(255,255,255,0.07)' : 'none', borderRadius: '12px', fontSize: '16px', fontWeight: '700', color: loading || !brief.trim() || !request.trim() ? 'rgba(255,255,255,0.2)' : '#fff', cursor: loading || !brief.trim() || !request.trim() ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', boxShadow: loading || !brief.trim() || !request.trim() ? 'none' : '0 4px 32px rgba(61,184,92,0.25)', transition: 'all 0.2s' }}
        >
          {loading ? (
            <>
              <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.25)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.75s linear infinite' }} />
              Generating your change order...
            </>
          ) : 'Generate Change Order →'}
        </button>

        {/* Result */}
        {result && (
          <div style={{ marginTop: '24px', background: 'rgba(126,232,154,0.03)', border: '1px solid rgba(126,232,154,0.18)', borderRadius: '14px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid rgba(126,232,154,0.1)', background: 'rgba(126,232,154,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#7EE89A', boxShadow: '0 0 6px rgba(126,232,154,0.6)' }} />
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#7EE89A' }}>Change Order Ready</span>
              </div>
              <button onClick={copyToClipboard} style={{ fontSize: '12px', color: copied ? '#7EE89A' : 'rgba(255,255,255,0.45)', background: copied ? 'rgba(126,232,154,0.1)' : 'rgba(255,255,255,0.05)', border: '1px solid ' + (copied ? 'rgba(126,232,154,0.25)' : 'rgba(255,255,255,0.1)'), padding: '6px 14px', borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: '500' }}>
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <pre style={{ padding: '20px', fontSize: '13px', lineHeight: '1.85', color: 'rgba(255,255,255,0.7)', whiteSpace: 'pre-wrap', fontFamily: "'SF Mono', 'Fira Code', monospace", margin: 0, overflowX: 'auto' }}>{result}</pre>
          </div>
        )}

        {/* Upgrade prompt */}
        {showUpgrade && (
          <div style={{ marginTop: '20px', background: 'rgba(126,232,154,0.04)', border: '1px solid rgba(126,232,154,0.2)', borderRadius: '14px', padding: '28px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.3px' }}>Free limit reached</div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '20px', lineHeight: '1.65' }}>Upgrade to Pro for unlimited change orders, PDF downloads, and saved history.</p>
            <a href="/upgrade" style={{ display: 'block', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', color: '#fff', padding: '15px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', boxShadow: '0 4px 24px rgba(61,184,92,0.3)', marginBottom: '10px' }}>
              Upgrade to Clovert Pro — £12/month
            </a>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>Cancel any time · Secure payment via Stripe</div>
          </div>
        )}
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '56px 24px 80px', maxWidth: '940px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>How it works</div>
          <h2 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.6px', color: '#fff' }}>Three steps. One document.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
          {[
            { n: '01', title: 'Paste your brief', desc: 'Add the original scope agreed with your client.' },
            { n: '02', title: 'Add their request', desc: 'Paste exactly what they are now asking for.' },
            { n: '03', title: 'Send the document', desc: 'Get a professional change order ready to send immediately.' }
          ].map(({ n, title, desc }) => (
            <div key={n} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', padding: '24px 20px' }}>
              <div style={{ fontSize: '12px', fontWeight: '800', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '12px' }}>{n}</div>
              <div style={{ fontSize: '15px', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>{title}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', lineHeight: '1.65' }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '24px 24px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/logo.png" alt="Clovert" style={{ height: '20px', width: 'auto', opacity: 0.6 }} />
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)', fontWeight: '600' }}>Clovert</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/faq" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>FAQ</a>
          <a href="/privacy" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>Privacy</a>
          <a href="/terms" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>Terms</a>
        </div>
      </footer>

      {/* ── EMAIL MODAL ── */}
      {showEmailModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, padding: '24px' }}>
          <div style={{ background: '#111', border: '1px solid rgba(126,232,154,0.2)', borderRadius: '20px', padding: '36px 28px', maxWidth: '380px', width: '100%', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '14px' }}>🍀</div>
            <div style={{ fontSize: '20px', fontWeight: '800', color: '#fff', marginBottom: '10px', lineHeight: '1.25', letterSpacing: '-0.3px' }}>Where should we send your change order?</div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '22px', lineHeight: '1.65' }}>Enter your email to get your free change order. No spam, ever.</p>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleEmailSubmit() }}
              autoFocus
              style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#fff', fontSize: '16px', marginBottom: '12px', fontFamily: 'inherit', outline: 'none', WebkitAppearance: 'none' }}
            />
            <button
              onClick={handleEmailSubmit}
              style={{ width: '100%', padding: '15px', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 4px 20px rgba(61,184,92,0.3)' }}
            >
              Get my free change order
            </button>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', marginTop: '12px' }}>Free forever · No credit card required</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg) } }
        * { box-sizing: border-box }
        body { margin: 0 }
        ::placeholder { color: rgba(255,255,255,0.18) !important }
        textarea { caret-color: #7EE89A }
        input { caret-color: #7EE89A }
        @media (max-width: 480px) {
          textarea { height: 140px !important }
        }
      `}</style>
    </main>
  )
}
