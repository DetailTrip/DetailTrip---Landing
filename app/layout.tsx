import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DetailTrip - Professional Mobile Car Detailing | Timmins, Ontario',
  description: 'Premium mobile exterior car detailing serving Timmins & Northern Ontario. Two service packages: Clean + Sealant and Deep Clean + Protect. Quality work done properly.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
