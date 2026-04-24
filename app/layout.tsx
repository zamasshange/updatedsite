import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zamashange.co.za'),
  title: {
    default: 'Zama Shange | Full-Stack Developer & UI/UX Designer',
    template: '%s | Zama Shange',
  },
  description: 'Zama Shange is a South African full-stack developer and UI/UX designer building modern websites, apps, and digital experiences.',
  keywords: ['Zama Shange', 'web developer South Africa', 'UI UX designer', 'Next.js developer', 'full-stack developer', 'Johannesburg', 'South Africa'],
  authors: [{ name: 'Zama Shange' }],
  creator: 'Zama Shange',
  publisher: 'Zama Shange',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.zamashange.co.za',
    siteName: 'Zama Shange',
    title: 'Zama Shange | Full-Stack Developer & UI/UX Designer',
    description: 'Zama Shange is a South African full-stack developer and UI/UX designer building modern websites, apps, and digital experiences.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Zama Shange - Full-Stack Developer & UI/UX Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zama Shange | Full-Stack Developer & UI/UX Designer',
    description: 'Zama Shange is a South African full-stack developer and UI/UX designer building modern websites, apps, and digital experiences.',
    images: ['/logo.png'],
    creator: '@zamashange',
  },
  alternates: {
    canonical: 'https://www.zamashange.co.za',
  },
}

export const viewport: Viewport = {
  themeColor: '#4F46E5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Zama Shange',
    url: 'https://www.zamashange.co.za',
    jobTitle: 'Full Stack Developer',
    sameAs: [
      'https://www.linkedin.com/in/zama-shange-344166298/',
    ],
  }

  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
