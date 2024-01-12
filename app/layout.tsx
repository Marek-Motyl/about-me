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
  description: 'Marek Motyl CV/Resume',
}

export default function Root({ children, }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <div className='py-6 px-6 md:px-12 lg:px-16 sticky top-0 bg-base-beige'>
          <Navbar />
        </div>
        <main className="flex p-6 md:p-12 lg:p-16">
          {children}
        </main>
      </body>
    </html>
  )
}
