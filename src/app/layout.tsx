import type { Metadata, Viewport } from 'next'

import dynamic from 'next/dynamic'

const RegisterSW = dynamic(
  () => import('@/lib/RegisterSW').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => null,
  },
);

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
      <body>
        {children}
        <RegisterSW />
      </body>
    </html>
  )
}
