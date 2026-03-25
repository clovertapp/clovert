export const metadata = {
  title: 'How to Tell a Client They Are Out of Scope Without Losing Them | Clovert',
  description: 'The exact scripts and strategies to raise scope creep professionally without damaging the client relationship.',
}

export default function Article4() {
  return (
    <main style={{ minHeight: '100vh', background: '#080C0A', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      
      <header style={{ padding: '20px 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Clovert" style={{ height: '30px' }} />
          <span style={{ fontSize: '18px', fontWeight: '700', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clovert</span>
        </a>
      </header>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 40px 100px' }}>
        
        <div style={{ fontSize: '12px', color: '#7EE89A', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Client Communication</div>
        
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', lineHeight: '1.15', letterSpacing: '-1px', marginBottom: '20px' }}>
          How to Tell a Client They Are Out of Scope Without Losing Them
        </h1>
        
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '48px' }}>
          Raising scope creep feels uncomfortable. It does not have to. Here are the exact words to use and the mindset shift that makes it easy.
        </p>

        <div style={{ fontSize: '15px', lineHeight: '1.85', color: 'rgba(255,255,255,0.72)' }}>

          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '14px', letterSpacing: '-0.3px' }}>Why freelancers avoid raising it</h2>
          <p style={{ marginBottom: '20px' }}>Most freelancers know when scope creep is happening. They still say nothing. The reasons are always the same: fear of damaging the relationship, not wanting to seem difficult, hoping the client will notice and offer to pay more voluntarily.</p>
          <p style={{ marginBottom: '20px' }}>None of these things happen. The client does not notice. The relationship does not improve by you working for free. And the resentment builds until you either deliver late, deliver poorly, or simply never work with them again.</p>
          <p style={{ marginBottom: '20px' }}>Raising scope creep professionally is the thing that actually protects the relationship.</p>

          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '14px', marginTop: '40px', letterSpacing: '-0.3px' }}>The mindset shift</h2>
          <p style={{ marginBottom: '20px' }}>A change order is not a complaint. It is not an accusation. It is a professional business process that every serious client understands and respects. Builders use them. Architects use them. Consultants use them.</p>
          <p style={{ marginBottom: '20px' }}>When you raise a change order you are not saying "you are trying to cheat me." You are saying "here is what we agreed, here is what has changed, here is how we move forward professionally." That is the mark of a professional — not a difficult person.</p>

          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '14px', marginTop: '40px', letterSpacing: '-0.3px' }}>The exact scripts to use</h2>
          <p style={{ marginBottom: '20px' }}>Use one of these depending on the situation:</p>

          {[
            {
              label: 'By email — friendly and clear',
              script: `Hi [Name],

Thanks for sending this over. I love the direction you're thinking.

Just to flag — this falls outside the scope we agreed on [date], which covered [brief summary of original scope].

I'd be happy to take this on. I've put together a short change order outlining the additional time and cost involved — let me know if you'd like to go ahead.

[Attach change order]

Best,
[Your name]`
            },
            {
              label: 'In a meeting — verbal response',
              script: `"That's a great idea and I can absolutely do that. It's outside what we originally scoped so I'll send over a change order with the additional time and cost — should be straightforward to approve."`,
            },
            {
              label: 'When the client pushes back',
              script: `"I completely understand. The original brief covered [X] which is what the current fee is based on. [The new request] is additional work — I want to be transparent about that rather than absorb it and end up rushing the rest of the project. Happy to discuss if the scope needs to be adjusted."`,
            },
          ].map(({ label, script }) => (
            <div key={label} style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '12px', color: '#7EE89A', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>{label}</div>
              <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '20px 22px', fontFamily: 'monospace', fontSize: '13px', lineHeight: '1.8', color: 'rgba(255,255,255,0.75)', whiteSpace: 'pre-wrap' }}>{script}</div>
            </div>
          ))}

          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '14px', marginTop: '40px', letterSpacing: '-0.3px' }}>What happens when you do this consistently</h2>
          <p style={{ marginBottom: '20px' }}>Clients who respect you will approve the change order and the relationship continues. Clients who push back aggressively are telling you something important about how they view the relationship — and that is valuable information.</p>
          <p style={{ marginBottom: '20px' }}>Most importantly, your income stabilises. You stop working unpaid hours. You deliver better work because you are not resentful. And your best clients respect you more, not less, for running a professional operation.</p>

        </div>

        <div style={{ marginTop: '48px', background: 'rgba(126,232,154,0.06)', border: '1px solid rgba(126,232,154,0.2)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px', letterSpacing: '-0.4px' }}>Generate your change order in 60 seconds</div>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>Paste your brief and the client request. Get a professional document ready to send.</p>
          <a href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', color: '#fff', padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Try Clovert Free
          </a>
        </div>

      </article>
    </main>
  )
}
