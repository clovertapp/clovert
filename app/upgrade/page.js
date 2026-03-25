export default function Upgrade() {
  const features = [
    'Unlimited change order generations',
    'Download as PDF with your branding',
    'Saved history of all past change orders',
    'Template library for common scenarios',
  ]
 
  return (
    <main style={{ minHeight: '100vh', background: '#080C0A', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      <div style={{ maxWidth: '440px', width: '100%', textAlign: 'center' }}>
 
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '32px' }}>
          <img src="/logo.png" alt="Clovert" style={{ height: '36px', width: 'auto' }} />
          <span style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-0.4px', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clovert</span>
        </div>
 
        <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>Clovert Pro</div>
        <div style={{ fontSize: '64px', fontWeight: '800', color: '#fff', letterSpacing: '-2px', lineHeight: '1', marginBottom: '6px' }}>£12</div>
        <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.35)', marginBottom: '36px' }}>per month · cancel any time</div>
 
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', textAlign: 'left' }}>
          {features.map(f => (
            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
              <span style={{ color: '#7EE89A', fontWeight: '700', fontSize: '16px' }}>✓</span>
              {f}
            </li>
          ))}
        </ul>
 
        <a
          href="https://buy.stripe.com/test_9B614o0677Kq5Yx3Yp6EU00"
          style={{ display: 'block', width: '100%', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', color: '#fff', padding: '16px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '16px', letterSpacing: '-0.2px', boxShadow: '0 4px 24px rgba(61,184,92,0.3)', marginBottom: '14px' }}
        >
          Upgrade to Clovert Pro — £12/month
        </a>
 
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>
          Secure payment via Stripe · Cancel any time
        </p>
 
      </div>
    </main>
  )
}
