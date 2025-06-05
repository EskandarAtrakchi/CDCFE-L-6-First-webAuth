"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [browserName, setBrowserName] = useState("")
  const [hitCount, setHitCount] = useState(0)
  const [currentDate, setCurrentDate] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    // Browser detection
    const detectBrowser = () => {
      const userAgent = navigator.userAgent
      if (userAgent.indexOf("Chrome") !== -1) {
        setBrowserName("Chrome")
      } else if (userAgent.indexOf("Opera") !== -1) {
        setBrowserName("OPERA")
      } else if (userAgent.indexOf("Firefox") !== -1) {
        setBrowserName("FIREFOX")
      } else if (userAgent.indexOf("MSIE") !== -1 || !!document.DOCUMENT_NODE === true) {
        setBrowserName("Internet Explorer")
      } else {
        setBrowserName("Unknown")
      }
    }

    // Hit counter
    const incrementHitCount = () => {
      const count = localStorage.getItem("pagecount")
      const newCount = count ? Number(count) + 1 : 1
      localStorage.setItem("pagecount", newCount.toString())
      setHitCount(newCount)
    }

    // Date
    const updateDate = () => {
      setCurrentDate(new Date().toString())
    }

    detectBrowser()
    incrementHitCount()
    updateDate()

    const dateInterval = setInterval(updateDate, 1000)

    return () => {
      clearInterval(dateInterval)
    }
  }, [])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Programming", path: "/programming" },
    { name: "FAQ", path: "/faq" },
    { name: "Wallet-Generator", path: "/wallet-generator" },
  ]

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="py-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center">
              <Image
                src="https://img.favpng.com/7/18/7/computer-programming-programming-language-programmer-logo-png-favpng-JqsAuuQCyRK9kDmZgbdxycJgT.jpg"
                alt="Logo"
                width={50}
                height={50}
                className="animate-pulse"
              />
            </Link>

            <div className="flex items-center space-x-2">
              <ModeToggle />
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0 overflow-hidden">
              <div className="animate-marquee">
                <p className="text-sm">
                  This <span className="font-bold">{browserName}</span> page has been browsed{" "}
                  <span className="font-bold">{hitCount}</span> times
                </p>
                <p className="text-sm">
                  Updated on <span className="font-bold">{currentDate}</span>
                </p>
              </div>
            </div>

            <div className="relative w-full md:w-64">
              <Input type="search" placeholder="Search..." className="w-full" />
            </div>
          </div>
        </div>

        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block py-2`}>
          <ul className="flex flex-col md:flex-row md:space-x-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`block py-2 px-3 rounded-md transition-colors ${
                    pathname === link.path ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
