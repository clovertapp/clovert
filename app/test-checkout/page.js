export default function TestCheckout() {
  return (
    <main style={{ minHeight: '100vh', background: '#080C0A', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      <div style={{ maxWidth: '440px', width: '100%', textAlign: 'center' }}>

        <div style={{ background: 'rgba(240,96,64,0.1)', border: '1px solid rgba(240,96,64,0.3)', borderRadius: '10px', padding: '12px 20px', marginBottom: '32px', fontSize: '13px', color: '#f06040', fontWeight: '600' }}>
          TEST MODE — No real payments will be taken
        </div>

        <div style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '8px', letterSpacing: '-0.4px' }}>
          Clovert Pro — Test Checkout
        </div>
        <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '32px' }}>
          Use test card: 4242 4242 4242 4242 · Any future date · Any CVC
        </div>

        <a
          href="https://buy.stripe.com/REPLACE_WITH_TEST_LINK"
          style={{ display: 'block', width: '100%', background: 'rgba(240,96,64,0.15)', border: '1px solid rgba(240,96,64,0.3)', color: '#f06040', padding: '16px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', marginBottom: '14px' }}
        >
          Test Payment — £12/month
        </a>

        <a href="/" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
          Back to Clovert
        </a>

      </div>
    </main>
  )
}
