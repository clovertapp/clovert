export const metadata = {
  title: 'Terms of Service | Clovert',
  description: 'Terms of Service for Clovert.',
}

export default function Terms() {
  return (
    <main style={{ minHeight: '100vh', background: '#080C0A', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      <header style={{ padding: '20px 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Clovert" style={{ height: '30px' }} />
          <span style={{ fontSize: '18px', fontWeight: '700', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clovert</span>
        </a>
      </header>

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 40px 100px', fontSize: '15px', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', letterSpacing: '-0.8px', marginBottom: '8px' }}>Terms of Service</h1>
        <p style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '40px' }}>Last updated: March 2026</p>

        {[
          { title: 'Acceptance of terms', body: 'By using Clovert you agree to these Terms of Service. If you do not agree, please do not use the service.' },
          { title: 'Description of service', body: 'Clovert is a document generation tool that helps freelancers create professional change order documents. It is not a law firm and does not provide legal advice. Documents generated are templates only.' },
          { title: 'Free tier', body: 'The free tier provides 3 change order generations per month. We reserve the right to modify or discontinue the free tier at any time with reasonable notice.' },
          { title: 'Paid subscription', body: 'The Pro subscription is billed monthly at £12. You can cancel at any time. Cancellation takes effect at the end of the current billing period. We offer a 7-day refund policy for new subscribers.' },
          { title: 'Acceptable use', body: 'You agree not to use Clovert to generate fraudulent documents, misrepresent terms to clients, or use the service for any unlawful purpose. We reserve the right to suspend accounts that violate these terms.' },
          { title: 'No warranty', body: 'Clovert is provided as-is. We do not warrant that documents generated are legally binding or suitable for your specific situation. Always review documents before sending and consult a legal professional for complex situations.' },
          { title: 'Limitation of liability', body: 'Clovert shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service. Our maximum liability shall not exceed the amount you paid in the 12 months preceding the claim.' },
          { title: 'Changes to terms', body: 'We may update these terms from time to time. We will notify you of significant changes by email. Continued use of the service after changes constitutes acceptance.' },
          { title: 'Contact', body: 'For any questions about these terms, email hello@clovert.net.' },
        ].map(({ title, body }) => (
          <div key={title} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
