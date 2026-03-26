export const metadata = {
  title: 'FAQ | Clovert',
  description: 'Frequently asked questions about Clovert.',
}

export default function FAQ() {
  const faqs = [
    {
      q: 'How does the free tier work?',
      a: 'You get 3 free change order generations per month. No credit card required. Just enter your email and start generating. The counter resets at the start of each month.'
    },
    {
      q: 'What happens when I upgrade to Pro?',
      a: 'You get unlimited change order generations, the ability to download as a PDF with your own branding, a saved history of all your past change orders, and access to our template library. Your subscription starts immediately after payment.'
    },
    {
      q: 'Can I cancel my subscription?',
      a: 'Yes, any time. Go to your Stripe customer portal (linked from your account page) and cancel with one click. You will retain Pro access until the end of your current billing period. No questions asked.'
    },
    {
      q: 'Is my data stored?',
      a: 'We store your email address and usage count so we can manage your free tier limit and subscription status. We do not store the text you paste into the tool — it is sent to OpenAI for processing and not retained on our servers. See our Privacy Policy for full details.'
    },
    {
      q: 'What if the generated change order is not quite right?',
      a: 'The AI generates a professional starting point based on what you paste in. You can always edit the output before sending it to your client. The more detail you paste into both boxes, the better and more specific the output will be.'
    },
    {
      q: 'How do I get a refund?',
      a: 'Email us at hello@clovert.net within 7 days of your payment and we will refund you in full, no questions asked. We want you to be completely satisfied.'
    },
    {
      q: 'Does this work for all types of freelancers?',
      a: 'Yes. Clovert works for web designers, developers, copywriters, photographers, consultants, marketers, and any other type of freelancer or agency that works on project-based contracts.'
    },
    {
      q: 'Is this legal advice?',
      a: 'No. Clovert generates professional document templates based on the information you provide. It is not a law firm and does not provide legal advice. For complex legal situations, consult a qualified solicitor.'
    },
  ]

  return (
    <main style={{ minHeight: '100vh', background: '#080C0A', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      <header style={{ padding: '20px 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Clovert" style={{ height: '30px' }} />
          <span style={{ fontSize: '18px', fontWeight: '700', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clovert</span>
        </a>
      </header>

      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '60px 40px 100px' }}>
        <div style={{ fontSize: '12px', color: '#7EE89A', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>FAQ</div>
        <h1 style={{ fontSize: '40px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '12px' }}>Frequently asked questions</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', marginBottom: '56px' }}>Everything you need to know about Clovert.</p>

        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '28px', marginBottom: '28px' }}>
            <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#fff', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.75' }}>{faq.a}</p>
          </div>
        ))}

        <div style={{ marginTop: '40px', background: 'rgba(126,232,154,0.05)', border: '1px solid rgba(126,232,154,0.15)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>Still have a question?</div>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '16px' }}>Email us and we will get back to you within 24 hours.</p>
          <a href="mailto:hello@clovert.net" style={{ color: '#7EE89A', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>hello@clovert.net</a>
        </div>
      </div>
    </main>
  )
}
