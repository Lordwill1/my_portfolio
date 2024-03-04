import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import { AOSInit } from './components/AOS'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Godswill Kalu Portfolio',
  description: 'Software Engineer - Full Stack',
  openGraph: {
    url: 'https://www.lordwill.tech',
    images: 'https://raw.githubusercontent.com/lordwill1/portfolio_v2/main/public/img/twitter-card.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />  
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
