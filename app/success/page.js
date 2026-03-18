export default function Success() {
  return (
    <main style={{ minHeight: '100vh', background: '#080C0A', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      <div style={{ maxWidth: '440px', width: '100%', textAlign: 'center' }}>
        <div style={{ width: '64px', height: '64px', background: 'rgba(126,232,154,0.1)', border: '1px solid rgba(126,232,154,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '28px' }}>
          ✓
        </div>
        <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#fff', marginBottom: '10px', letterSpacing: '-0.5px' }}>
          You are all set!
        </h1>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', lineHeight: '1.65' }}>
          Welcome to Clovert Pro. Your subscription is active.
        </p>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginBottom: '32px' }}>
          You will receive a confirmation email from Stripe shortly.
        </p>
        <a href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', color: '#fff', padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
          Start generating change orders
        </a>
      </div>
    </main>
  )
}
