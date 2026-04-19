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
  description: 'Konferencja z Edwardem Warchockim o robotyce humanoidalnej i przyszłości AI. 29 kwietnia 2026, Politechnika Warszawska. Wstęp wolny. Ograniczona liczba miejsc (350).',
  keywords: ['Edward Warchocki', 'robotyka humanoidalna', 'konferencja', 'Politechnika Warszawska', 'event warszawa 2026', 'robot humanoidalny', 'AI', 'technologia', 'Edek na uczelni', 'robot influencer'],
  metadataBase: new URL('https://edeknauczelni.pl'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
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
    locale: 'pl_PL',
    url: 'https://edeknauczelni.pl',
    siteName: 'Edek na uczelni',
    images: [
      {
        url: '/nieb.webp',
        width: 1200,
        height: 630,
        alt: 'Edek na uczelni - konferencja z Edwardem Warchockim',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edek na uczelni | 29.04.2026',
    description: 'Robot humanoidalny na żywo. Konferencja na styku technologii, mediów i biznesu.',
    images: ['/nieb.webp'],
    creator: '@EdwardWarchocki',
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Edek na uczelni - Konferencja z Edwardem Warchockim',
    description: 'Konferencja o robotyce humanoidalnej i przyszłości AI z udziałem Edwarda Warchockiego, pierwszego polskiego robota influencera.',
    startDate: '2026-04-29T14:00:00+02:00',
    endDate: '2026-04-29T18:00:00+02:00',
    location: {
      '@type': 'Place',
      name: 'Gmach Główny Politechniki Warszawskiej',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ul. Nolberta Barlickiego 25',
        addressLocality: 'Warszawa',
        addressRegion: 'mazowieckie',
        postalCode: '00-665',
        addressCountry: 'PL',
      },
    },
    image: '/nieb.webp',
    eventAttendanceMode: 'OfflineEventAttendanceMode',
    eventStatus: 'EventScheduled',
    organizer: {
      '@type': 'Organization',
      name: 'Edek na uczelni',
      url: 'https://edeknauczelni.pl',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://forms.gle/PLACEHOLDER_UZUPELNIJ_URL',
      price: '0',
      priceCurrency: 'PLN',
      availability: 'InStock',
      validFrom: '2026-01-01',
      validThrough: '2026-04-29',
    },
    performer: {
      '@type': 'Person',
      name: 'Edward Warchocki',
      description: 'Pierwszy polski robot influencer',
    },
  }

  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${bebasNeue.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
