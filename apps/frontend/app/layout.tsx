import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/app/ui/navbar'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Marek Motyl',
  description: 'About me page',
}

export default function Root({ children, }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <header className="flex justify-center py-6 px-6 md:px-12 lg:px-16 sticky top-0 z-10 bg-base-beige transition-all duration-250">
          <Navbar />
        </header>
        <main className="flex justify-center px-6 md:px-12 lg:px-16 py-6 md:py-24 transition-all duration-250">
          {children}
        </main>
      </body>
    </html>
  )
}
