export const metadata = {
  title: 'Privacy Policy | Clovert',
  description: 'Privacy Policy for Clovert.',
}

export default function Privacy() {
  return (
    <main style={{ minHeight: '100vh', background: '#080C0A', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      <header style={{ padding: '20px 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Clovert" style={{ height: '30px' }} />
          <span style={{ fontSize: '18px', fontWeight: '700', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clovert</span>
        </a>
      </header>

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 40px 100px', fontSize: '15px', lineHeight: '1.8', color: 'rgba(255,255,255,0.65)' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#fff', letterSpacing: '-0.8px', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '40px' }}>Last updated: March 2026</p>

        {[
          { title: 'Who we are', body: 'Clovert is a web application that helps freelancers generate professional change order documents. Our website is clovert.net.' },
          { title: 'What data we collect', body: 'We collect your email address when you use our service. We collect usage data (how many change orders you have generated this month) to manage free tier limits. We do not collect or store the text you paste into the tool — this is processed by OpenAI and not retained on our servers.' },
          { title: 'How we use your data', body: 'We use your email address to manage your account and subscription status. We may send you important service updates. We do not sell your data to third parties. We do not send marketing emails without your explicit consent.' },
          { title: 'Data storage', body: 'Your email and subscription status are stored securely in Supabase, a PostgreSQL database provider. Payment information is handled entirely by Stripe and we never see or store your card details.' },
          { title: 'Your rights under GDPR', body: 'If you are based in the UK or EU, you have the right to access the data we hold about you, request deletion of your data, and object to processing of your data. To exercise any of these rights, email us at hello@clovert.net.' },
          { title: 'Cookies', body: 'We use localStorage (browser storage) to remember your email address and usage count between visits. This is not a tracking cookie and does not follow you across other websites.' },
          { title: 'Third party services', body: 'We use OpenAI to process text inputs and generate documents. We use Stripe for payment processing. We use Supabase for database storage. We use Vercel for hosting. Each of these services has their own privacy policy.' },
          { title: 'Contact', body: 'For any privacy related questions, email hello@clovert.net.' },
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
