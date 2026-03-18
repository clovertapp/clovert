export default function Upgrade() {
  const features = [
    'Unlimited change order generations',
    'Download as PDF with your branding',
    'Saved history of all past change orders',
    'Template library for common scenarios',
  ]

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="text-4xl font-bold mb-2">ScopeGuard Pro</div>
        <div className="text-gray-400 mb-8">You have used your 3 free change orders this month</div>

        <div className="text-6xl font-bold mb-1">£12</div>
        <div className="text-gray-400 mb-8">per month · cancel any time</div>

        <ul className="text-left space-y-3 mb-8">
          {features.map(f => (
            <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
              <span className="text-green-500 font-bold text-base">✓</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Replace the href with your Stripe Payment Link from Step 14 */}
        <a
          href="https://buy.stripe.com/test_9B614o0677Kq5Yx3Yp6EU00"
          className="block w-full bg-black text-white py-4 rounded-lg font-semibold text-base hover:bg-gray-800 transition-colors"
        >
          Upgrade now — £12/month
        </a>

        <p className="text-gray-400 text-xs mt-4">
          Secure payment via Stripe. Cancel any time.
        </p>
      </div>
    </main>
  )
}
