"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube, LogIn } from "lucide-react"
import { useState } from "react"

export default function SocialSidebar() {
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <>
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col space-y-2">
          <Link
            href="https://www.facebook.com/EskandarTech/"
            className="bg-blue-600 text-white p-3 hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="https://twitter.com/AtrakchiE"
            className="bg-sky-500 text-white p-3 hover:bg-sky-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/eskandar-atrakchi-47603a22b/"
            className="bg-blue-800 text-white p-3 hover:bg-blue-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://www.youtube.com/@eskandartech6237/videos"
            className="bg-red-600 text-white p-3 hover:bg-red-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={20} />
          </Link>
          <button
            onClick={() => setShowLoginModal(true)}
            className="bg-purple-600 text-white p-3 hover:bg-purple-700 transition-colors"
          >
            <LogIn size={20} />
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-background border-t z-50">
        <div className="flex justify-around py-2">
          <Link
            href="https://www.facebook.com/EskandarTech/"
            className="text-blue-600 p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="https://twitter.com/AtrakchiE"
            className="text-sky-500 p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/eskandar-atrakchi-47603a22b/"
            className="text-blue-800 p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://www.youtube.com/@eskandartech6237/videos"
            className="text-red-600 p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={20} />
          </Link>
          <button onClick={() => setShowLoginModal(true)} className="text-purple-600 p-2">
            <LogIn size={20} />
          </button>
        </div>
      </div>
    </>
  )
}
