import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: '--font-display',
  weight: ['700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Edwardowa Rewolucja | 29 Kwietnia | Politechnika Warszawska',
  description: 'Wydarzenie technologiczne o przyszłości robotyki humanoidalnej. Edward Warchocki na Politechnice Warszawskiej. Wstęp wolny.',
  generator: 'v0.app',
  keywords: ['Edward Warchocki', 'robotyka humanoidalna', 'Politechnika Warszawska', 'wydarzenie technologiczne', 'przyszłość technologii'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Edwardowa Rewolucja | 29 Kwietnia',
    description: 'Wydarzenie technologiczne o przyszłości robotyki humanoidalnej z Edwardem Warchockim.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${oswald.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
