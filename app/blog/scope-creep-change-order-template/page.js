export const metadata = {
  title: 'How to Write a Scope Creep Change Order | Clovert',
  description: 'A step-by-step guide to writing a professional change order when your client asks for more than was originally agreed.',
}

export default function Article1() {
  return (
    <main style={{ minHeight: '100vh', background: '#080C0A', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      
      <header style={{ padding: '20px 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Clovert" style={{ height: '30px' }} />
          <span style={{ fontSize: '18px', fontWeight: '700', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clovert</span>
        </a>
      </header>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 40px 100px' }}>
        
        <div style={{ fontSize: '12px', color: '#7EE89A', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Guide</div>
        
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', lineHeight: '1.15', letterSpacing: '-1px', marginBottom: '20px' }}>
          How to Write a Scope Creep Change Order
        </h1>
        
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '48px' }}>
          Scope creep costs the average freelancer £6,800 per year. Here is exactly how to document it and get paid for the extra work.
        </p>

        <div style={{ fontSize: '15px', lineHeight: '1.85', color: 'rgba(255,255,255,0.72)' }}>

          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '14px', marginTop: '40px', letterSpacing: '-0.3px' }}>What is scope creep?</h2>
          <p style={{ marginBottom: '20px' }}>Scope creep is when a client gradually expands what they originally asked for without agreeing to pay more. It rarely happens all at once. It happens in small increments — one extra page here, one more revision there — until you are doing twice the work for the original fee.</p>
          <p style={{ marginBottom: '20px' }}>The problem is not the client asking. The problem is the freelancer saying yes without documenting it. A change order fixes that.</p>

          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '14px', marginTop: '40px', letterSpacing: '-0.3px' }}>What is a change order?</h2>
          <p style={{ marginBottom: '20px' }}>A change order is a formal document that describes work being added to a project beyond the original scope, the additional time it will take, and the additional fee being charged. It requires client approval before the extra work begins.</p>
          <p style={{ marginBottom: '20px' }}>Change orders are standard practice in construction and engineering. Freelancers in design, development, copywriting, and consulting should use them too.</p>

          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '14px', marginTop: '40px', letterSpacing: '-0.3px' }}>What to include in a change order</h2>
          <p style={{ marginBottom: '16px' }}>A professional change order should include:</p>
          {[
            'A change order number and the date',
            'Reference to the original project brief or contract',
            'A clear description of what was originally agreed',
            'A clear description of what the client is now requesting',
            'An estimate of the additional hours required',
            'The additional fee being charged',
            'A revised timeline if applicable',
            'A signature line for client approval',
          ].map(item => (
            <div key={item} style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
              <span style={{ color: '#7EE89A', flexShrink: 0 }}>✓</span>
              <span>{item}</span>
            </div>
          ))}

          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '14px', marginTop: '40px', letterSpacing: '-0.3px' }}>Step by step — how to write one</h2>
          
          {[
            { n: '01', title: 'Reference the original scope', body: 'Open your original brief, contract, or the email where scope was agreed. Quote the specific language that defines what was included. This is your foundation.' },
            { n: '02', title: 'Describe exactly what is being added', body: 'Use the client\'s own words from their message. Copy their request directly. This removes ambiguity and shows you listened.' },
            { n: '03', title: 'Estimate the additional time', body: 'Be specific. "Approximately 6 additional hours" is better than "some extra time." Base it on your real estimate, not a round number.' },
            { n: '04', title: 'State your additional fee', body: 'Multiply your hours by your rate. State it clearly. Do not apologise for it. This is legitimate work that was not in the original agreement.' },
            { n: '05', title: 'Ask for written approval', body: 'Include a signature line or ask the client to reply with confirmation. Do not start the extra work until you have this.' },
          ].map(({ n, title, body }) => (
            <div key={n} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '22px 24px', marginBottom: '14px' }}>
              <div style={{ fontSize: '11px', color: '#7EE89A', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '8px' }}>{n}</div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{title}</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>{body}</div>
            </div>
          ))}

          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '14px', marginTop: '40px', letterSpacing: '-0.3px' }}>The faster way</h2>
          <p style={{ marginBottom: '20px' }}>Writing a change order from scratch takes time and requires you to get the tone exactly right — professional but not confrontational. Clovert automates this entirely. Paste your original brief and the client's new request, and get a ready-to-send change order document in 60 seconds.</p>

        </div>

        <div style={{ marginTop: '48px', background: 'rgba(126,232,154,0.06)', border: '1px solid rgba(126,232,154,0.2)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px', letterSpacing: '-0.4px' }}>Generate your change order in 60 seconds</div>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>Paste your brief and the client request. Get a professional document instantly.</p>
          <a href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', color: '#fff', padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Try Clovert Free
          </a>
        </div>

      </article>
    </main>
  )
}
