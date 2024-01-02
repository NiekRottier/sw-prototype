import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vanilla SW',
  description: 'Vanilla Service Worker prototype',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
