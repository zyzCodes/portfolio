import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diego Arana',
  description: 'Personal website of Diego Arana',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }:Props ) {
  return (
    <html>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>

  )
}
