import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DetailTrip | Mobile Exterior Detailing',
  description:
    'Professional mobile exterior detailing service serving Timmins and Northern Ontario. We bring premium care directly to your location with attention to detail.',
  generator: 'DetailTrip Landing',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
