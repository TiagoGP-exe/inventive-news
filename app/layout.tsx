import type { Metadata } from 'next'
import "@/styles/globals.css"
import { Outfit as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { ThemeProvider } from '@/components/theme-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: 'Inventive News',
  description: 'Inventive News, site official for Inventive',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TailwindIndicator />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
