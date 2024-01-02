import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Service Worker prototype',
  description: 'Klaar om keuzes te maken',
  icons: {
    icon: '/favicon/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
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
