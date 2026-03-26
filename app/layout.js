import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata = {
  title: 'Clovert — Turn Scope Creep Into a Professional Change Order',
  description: 'Paste your original brief and what your client just asked for. Get a professional, ready-to-send change order document in 60 seconds. Free to try.',
  keywords: 'scope creep, change order, freelance, change order template, scope creep template',
  openGraph: {
    title: 'Clovert — Turn Scope Creep Into a Professional Change Order',
    description: 'Generate a professional change order from scope creep in 60 seconds. Free to try.',
    url: 'https://clovert.net',
    siteName: 'Clovert',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clovert — Turn Scope Creep Into a Change Order in 60 Seconds',
    description: 'Free tool for freelancers. Paste your brief and the client request. Get a professional change order document instantly.',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
