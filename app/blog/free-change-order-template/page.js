export const metadata = {
  title: 'Free Change Order Template for Freelancers | Clovert',
  description: 'A free professional change order template you can use immediately when a client asks for work outside the original scope.',
}

export default function Article3() {
  return (
    <main style={{ minHeight: '100vh', background: '#080C0A', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      
      <header style={{ padding: '20px 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Clovert" style={{ height: '30px' }} />
          <span style={{ fontSize: '18px', fontWeight: '700', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clovert</span>
        </a>
      </header>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 40px 100px' }}>
        
        <div style={{ fontSize: '12px', color: '#7EE89A', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Free Template</div>
        
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', lineHeight: '1.15', letterSpacing: '-1px', marginBottom: '20px' }}>
          Free Change Order Template for Freelancers
        </h1>
        
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '48px' }}>
          Copy this template, fill in the brackets, and send it the next time a client asks for work outside your original scope.
        </p>

        <div style={{ fontSize: '15px', lineHeight: '1.85', color: 'rgba(255,255,255,0.72)' }}>

          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '14px', letterSpacing: '-0.3px' }}>The template</h2>
          <p style={{ marginBottom: '20px' }}>Copy everything below and replace the sections in brackets with your own details:</p>

          <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '28px', marginBottom: '32px', fontFamily: 'monospace', fontSize: '13px', lineHeight: '1.9', color: 'rgba(255,255,255,0.8)', whiteSpace: 'pre-wrap' }}>
{`CHANGE ORDER #[NUMBER]
Date: [DATE]
Project: [PROJECT NAME]
Client: [CLIENT NAME]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ORIGINAL SCOPE

As agreed on [DATE OF ORIGINAL AGREEMENT], 
the scope of this project includes:

[PASTE YOUR ORIGINAL BRIEF OR CONTRACT 
SCOPE SUMMARY HERE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REQUESTED CHANGE

You have requested the following additional 
work, which falls outside the original scope:

[DESCRIBE WHAT THE CLIENT HAS ASKED FOR, 
USING THEIR OWN WORDS WHERE POSSIBLE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ADDITIONAL TIME AND FEE

Estimated additional hours: [X] hours
Rate: £[YOUR RATE]/hour
Additional fee: £[TOTAL]

Revised project total: £[NEW TOTAL]
Revised delivery date: [NEW DATE]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

APPROVAL

Please confirm your approval of this change 
order by replying to this email or signing below. 
Work on the additional items will begin upon 
receipt of your approval.

Client signature: _______________________

Date: _______________________`}
          </div>

          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '14px', marginTop: '40px', letterSpacing: '-0.3px' }}>Tips for using this template</h2>
          
          {[
            { title: 'Send it before starting the extra work', body: 'Never begin additional work without written approval. Once the work is done your leverage disappears entirely.' },
            { title: 'Use the client\'s own words', body: 'Copy their request directly into the template. This removes any "that\'s not what I meant" responses later.' },
            { title: 'Be specific about hours', body: 'Vague estimates invite negotiation. A specific number feels more professional and is harder to push back on.' },
            { title: 'Keep the tone neutral', body: 'A change order is not a complaint. It is a professional business document. Write it as if you are completely comfortable — because you should be.' },
          ].map(({ title, body }) => (
            <div key={title} style={{ marginBottom: '20px' }}>
              <div style={{ fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{title}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)' }}>{body}</div>
            </div>
          ))}

          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '14px', marginTop: '40px', letterSpacing: '-0.3px' }}>Want this written for you automatically?</h2>
          <p style={{ marginBottom: '20px' }}>Instead of filling in the template manually every time, Clovert generates a customised change order from your specific brief and client request in 60 seconds. Free to try.</p>

        </div>

        <div style={{ marginTop: '32px', background: 'rgba(126,232,154,0.06)', border: '1px solid rgba(126,232,154,0.2)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px', letterSpacing: '-0.4px' }}>Generate a custom change order in 60 seconds</div>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>No template filling. Just paste and generate.</p>
          <a href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', color: '#fff', padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Try Clovert Free
          </a>
        </div>

      </article>
    </main>
  )
}
