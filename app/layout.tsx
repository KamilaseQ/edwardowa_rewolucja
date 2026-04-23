import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Bebas_Neue } from 'next/font/google'
import Script from 'next/script'
import { FORM_URL } from '@/lib/constants'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: '--font-display',
  weight: ['400'],
  display: 'swap',
});

const chunkRecoveryScript = `
(() => {
  const storageKey = "next-chunk-reload-attempted";

  const isChunkError = (value) =>
    typeof value === "string" &&
    /ChunkLoadError|Failed to load chunk|Failed to fetch dynamically imported module|Loading chunk [\\w-]+ failed|_next\\/static\\/chunks\\//i.test(value);

  const reloadOnce = () => {
    try {
      if (window.sessionStorage.getItem(storageKey) === "1") {
        return;
      }
      window.sessionStorage.setItem(storageKey, "1");
    } catch {}

    window.location.reload();
  };

  window.addEventListener(
    "error",
    (event) => {
      const target = event.target;
      const assetUrl =
        target instanceof HTMLScriptElement || target instanceof HTMLLinkElement
          ? target.src || target.href || ""
          : "";
      const message = [event.message, event.filename, assetUrl].filter(Boolean).join(" ");

      if (isChunkError(message)) {
        reloadOnce();
      }
    },
    true
  );

  window.addEventListener("unhandledrejection", (event) => {
    const reason = event.reason;
    const message =
      typeof reason === "string"
        ? reason
        : typeof reason?.message === "string"
          ? reason.message
          : "";

    if (isChunkError(message)) {
      reloadOnce();
    }
  });

  window.addEventListener(
    "load",
    () => {
      try {
        window.sessionStorage.removeItem(storageKey);
      } catch {}
    },
    { once: true }
  );
})();
`

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
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.ico',
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
        url: 'https://edeknauczelni.pl/og-banner.jpg',
        width: 1200,
        height: 800,
        alt: 'Edek na uczelni - konferencja z Edwardem Warchockim',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edek na uczelni | 29.04.2026',
    description: 'Robot humanoidalny na żywo. Konferencja na styku technologii, mediów i biznesu.',
    images: ['https://edeknauczelni.pl/og-banner.jpg'],
    creator: '@edwardwarchocki',
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
    image: 'https://edeknauczelni.pl/og-banner.jpg',
    eventAttendanceMode: 'OfflineEventAttendanceMode',
    eventStatus: 'EventScheduled',
    organizer: {
      '@type': 'Organization',
      name: 'Edek na uczelni',
      url: 'https://edeknauczelni.pl',
    },
    offers: {
      '@type': 'Offer',
      url: FORM_URL,
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
        <Script
          id="chunk-recovery"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: chunkRecoveryScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${bebasNeue.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
