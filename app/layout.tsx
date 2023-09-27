import { ClerkProvider } from '@clerk/nextjs'
import {Inter, Space_Grotesk} from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({
  subsets : ['latin'],
  weight : ['100','200','300','400','500','600','700','800','900'],
  variable : '--font-inter'
})
 
const spaceGrotesk = Space_Grotesk({
  subsets : ['latin'],
  weight : ['300','400','500','600','700'],
  variable : '--font-spaceGrotesk'
})

export const metadata = {
  title: 'DevFlow',
  description : 'A community-driven platform for asking and answering programming questions Get Help, Share knowledge, and collaborate with developers form around the world. Explore topics in web Development, mobile app development, algorithms, data structure, data structure, and more.',
  icons  : {
    icon : '/assets/images/site-logo.png'
  }
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements : {
          formButtonPrimary : 'primary-gradient',
          footerActionLink : 'primary-text-gradient hover:text-primary-500'
        }
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}