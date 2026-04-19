import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, Bebas_Neue } from 'next/font/google'
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

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: '--font-display',
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Edek na uczelni | 29.04.2026 Robot humanoidalny na żywo',
  description: 'Konferencja z Edwardem Warchockim robotyka humanoidalna, AI, przyszłość biznesu. 29 kwietnia 2026, Gmach Główny Politechniki Warszawskiej. Wstęp wolny. Ograniczona liczba miejsc.',
  keywords: ['Edward Warchocki', 'robotyka humanoidalna', 'konferencja', 'Politechnika Warszawska', 'event warszawa 2026', 'robot humanoidalny', 'AI', 'technologia', 'Edek na uczelni'],
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
    title: 'Edek na uczelni | 29.04.2026',
    description: 'Robot humanoidalny na żywo. Konferencja na styku technologii, mediów i biznesu. Wstęp wolny.',
    type: 'website',
    images: [{ url: '/nieb.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edek na uczelni | 29.04.2026',
    description: 'Robot humanoidalny na żywo. Konferencja na styku technologii, mediów i biznesu.',
    images: ['/nieb.png'],
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
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${bebasNeue.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
