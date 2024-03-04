import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import { AOSInit } from './components/AOS'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Godswill Kalu Portfolio',
  description: 'Software Engineer - Full Stack',
  openGraph: {
    url: 'https://lordwill.netlify.app/',
    images: 'https://github.com/Lordwill1/my_portfolio/assets/105258746/fc32b316-0838-432c-9e66-f8279c62bc6b',
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
