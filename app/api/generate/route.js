export async function POST(req) {
  try {
    const { OpenAI } = await import('openai')
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
 
    const body = await req.json()
    const { brief, request } = body
 
    if (!brief || !request) {
      return Response.json({ error: 'Both fields are required' }, { status: 400 })
    }
 
    const prompt = `You are a professional project manager helping a freelancer document scope creep and issue a formal Change Order.
 
ORIGINAL PROJECT BRIEF:
${brief}
 
CLIENT NEW REQUEST:
${request}
 
Write a complete professional Change Order document that includes:
1. Change Order number and date
2. Original scope summary quoting the brief directly
3. Description of new work requested
4. Additional hours estimate and recommended fee
5. Client approval section with signature line
 
Be specific and professional. Make it ready to send immediately.`
 
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1500,
      temperature: 0.3
    })
 
    const document = response.choices[0].message.content
 
    return Response.json({ document })
 
  } catch (error) {
    console.error('Full error:', error)
    return Response.json({ 
      error: error.message || 'Failed to generate. Please try again.'
    }, { status: 500 })
  }
}
 
