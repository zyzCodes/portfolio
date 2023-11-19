import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

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
    <div>
      <Navbar/>
      <body className={inter.className}>{children}</body>
    </div>
  )
}
