import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tanishka Shah | UI/UX Designer',
  
  description:
    'Portfolio of Tanishka Shah — a passionate UI/UX designer creating intuitive, modern, and user-centered digital experiences through thoughtful design and visual storytelling.',

  generator: 'Next.js',

  keywords: [
    'Tanishka Shah',
    'UI/UX Designer',
    'Product Designer',
    'Figma Designer',
    'UX Research',
    'Interaction Design',
    'Visual Design',
    'Portfolio Website',
    'UI Design',
    'User Experience',
  ],

  authors: [{ name: 'Tanishka Shah' }],

  creator: 'Tanishka Shah',

  openGraph: {
    title: 'Tanishka Shah | UI/UX Designer',
    description:
      'Explore the portfolio of Tanishka Shah featuring UI/UX case studies, interaction design, branding, and user-centered digital experiences.',
    type: 'website',
    locale: 'en_US',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="font-sans antialiased bg-slate-950 text-slate-50 overflow-x-hidden">
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}