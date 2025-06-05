import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import SocialSidebar from "@/components/SocialSidebar"
import AuthModals from "@/components/AuthModals"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blockchain & Programming",
  description: "Learn about blockchain technology, programming languages, and more",
    icons: {
      icon: "https://knowledge.wharton.upenn.edu/wp-content/uploads/2019/11/machine-programming-learning-AI-600x440.jpg",
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://moonbeam.network/wp-content/uploads/2020/10/rotating-ethereum-logo.gif" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <SocialSidebar />
            <AuthModals />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
