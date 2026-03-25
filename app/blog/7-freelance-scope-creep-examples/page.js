export const metadata = {
  title: '7 Freelance Scope Creep Examples and How to Handle Each | Clovert',
  description: 'Real scope creep scenarios faced by freelance designers, developers and copywriters — and exactly how to respond to each one.',
}

export default function Article2() {
  return (
    <main style={{ minHeight: '100vh', background: '#080C0A', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      
      <header style={{ padding: '20px 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Clovert" style={{ height: '30px' }} />
          <span style={{ fontSize: '18px', fontWeight: '700', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clovert</span>
        </a>
      </header>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 40px 100px' }}>
        
        <div style={{ fontSize: '12px', color: '#7EE89A', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Examples</div>
        
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', lineHeight: '1.15', letterSpacing: '-1px', marginBottom: '20px' }}>
          7 Freelance Scope Creep Examples and How to Handle Each
        </h1>
        
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '48px' }}>
          Scope creep comes in many forms. Here are seven real scenarios and the exact professional response to each.
        </p>

        <div style={{ fontSize: '15px', lineHeight: '1.85', color: 'rgba(255,255,255,0.72)' }}>

          {[
            {
              n: '01',
              title: 'The extra page',
              scenario: 'You agreed to design a 5-page website. Three weeks in, the client asks: "Can we add a testimonials page and a team page?"',
              response: 'This is two additional pages — clearly outside the original scope. Raise a change order immediately. Estimate the design and development time for each page, state your fee, and ask for approval before proceeding.',
            },
            {
              n: '02',
              title: 'The unlimited revisions trap',
              scenario: 'Your contract says "2 rounds of revisions." After round 4 the client says: "Just a few more small tweaks."',
              response: 'Each revision round beyond what was agreed is billable. Document how many rounds have been completed, reference the contract clause, and issue a change order for additional revision time at your hourly rate.',
            },
            {
              n: '03',
              title: 'The feature addition',
              scenario: 'You are building a simple booking form. The client says: "Can you also add user accounts, email notifications, and a calendar integration?"',
              response: 'These are substantial additions that could double your build time. Do not say yes verbally. Stop, assess the true time cost, and issue a change order before writing a single line of extra code.',
            },
            {
              n: '04',
              title: 'The format change',
              scenario: 'You were hired to write 10 blog posts. Midway through, the client asks you to reformat all completed posts into a different style guide.',
              response: 'Reformatting completed work is new work. It was not in the original brief. Issue a change order for the time required to reformat the existing posts.',
            },
            {
              n: '05',
              title: 'The rush job',
              scenario: 'The project deadline is in 3 weeks. The client suddenly asks for delivery in 5 days.',
              response: 'Rush delivery requires you to rearrange your schedule and potentially work evenings and weekends. A rush fee of 25-50% is standard. Document this as a change order.',
            },
            {
              n: '06',
              title: 'The platform change',
              scenario: 'You agreed to build a website in Webflow. Two weeks in, the client says they want it in WordPress instead.',
              response: 'This is not a small change — it requires starting over on a different platform. Issue a change order that reflects the additional time, or renegotiate the entire project scope.',
            },
            {
              n: '07',
              title: 'The brand extension',
              scenario: 'You designed a logo. The client now wants the logo adapted for social media, merchandise, email signatures, and a presentation template.',
              response: 'Brand extensions are separate deliverables. Each one takes time. Issue individual change orders or a single change order covering all additional assets with itemised pricing.',
            },
          ].map(({ n, title, scenario, response }) => (
            <div key={n} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '36px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#7EE89A', flexShrink: 0, paddingTop: '2px' }}>{n}</div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '16px', letterSpacing: '-0.3px' }}>{title}</h2>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '16px 18px', marginBottom: '14px', fontSize: '14px', color: 'rgba(255,255,255,0.55)', fontStyle: 'italic', lineHeight: '1.7' }}>
                    "{scenario}"
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: '1.75' }}><span style={{ color: '#7EE89A', fontWeight: '700' }}>How to handle it: </span>{response}</p>
                </div>
              </div>
            </div>
          ))}

        </div>

        <div style={{ marginTop: '48px', background: 'rgba(126,232,154,0.06)', border: '1px solid rgba(126,232,154,0.2)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px', letterSpacing: '-0.4px' }}>Handle scope creep in 60 seconds</div>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>Paste your brief and the new request. Get a professional change order instantly.</p>
          <a href="/" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #7EE89A, #3DB85C)', color: '#fff', padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Try Clovert Free
          </a>
        </div>

      </article>
    </main>
  )
}
