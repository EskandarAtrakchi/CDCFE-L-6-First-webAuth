"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function HeroSection() {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const message = "earn & Build"

  useEffect(() => {
    let i = 0
    let direction = 1

    const typeText = () => {
      if (isTyping) {
        setText(message.substring(0, i) + "_")
      } else {
        setText(message.substring(0, i))
      }

      i += direction

      if (i > message.length || i < 0) {
        direction *= -1
        i += direction

        if (direction === 1) {
          setText("_")
          setTimeout(typeText, 2000)
          return
        }
      }

      setIsTyping(!isTyping)
      setTimeout(typeText, 300)
    }

    typeText()

    return () => {
      // Cleanup
    }
  }, [])

  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold mb-6">
        L<span className="text-purple-600 dark:text-purple-400">{text}</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="mb-6">
            Programming languages are the languages that computers understand and use to execute instructions. There are
            many programming languages available, each with its own syntax, semantics, and features. Some common
            programming languages include C, C++, Java, Python, and Ruby.
          </p>
          <p className="mb-6">
            Blockchain is a distributed ledger technology that allows for secure, transparent, and tamper-evident
            record-keeping. It is often used for applications such as cryptocurrency transactions and supply chain
            management.
          </p>
          <p className="mb-6">
            Solidity is a programming language specifically designed for writing smart contracts for the Ethereum
            blockchain. It is a high-level, object-oriented language that is similar to JavaScript and C++ in syntax.
            Solidity allows developers to write code that can be executed on the Ethereum blockchain, enabling the
            creation of decentralized applications (DApps) and other blockchain-based systems.
          </p>
          <p className="mb-6">
            Smart contracts are self-executing contracts with the terms of the agreement between buyer and seller being
            directly written into lines of code. The code and the agreements contained therein are stored and replicated
            on the blockchain network.
          </p>
        </div>

        <div>
          <div className="relative h-80 w-full">
            <Slideshow />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-6">
          Programming languages are used to create software applications, websites, and other systems by writing
          instructions for computers to execute. These instructions are written in a programming language that is
          understood by the computer, which can then execute the instructions to perform a specific task or solve a
          problem.
        </p>
        <p className="mb-6">There are several reasons why we need to use programming languages:</p>
        <p className="mb-6">
          <strong>To automate tasks:</strong> Programming languages allow us to write instructions that can be executed
          by a computer, enabling us to automate tasks and processes. This can save time and effort, and can also reduce
          the chances of human error.
        </p>
        <p className="mb-6">
          There is high demand for programming languages such as Java, Python, and JavaScript, as they are widely used
          in various industries for developing applications, websites, and other software. C# and C++ are also popular
          languages, though demand may be slightly lower. Salaries for professionals proficient in these languages can
          range from $65,000 to $110,000, depending on the specific language and location.
        </p>
      </div>
    </div>
  )
}

function Slideshow() {
  const images = [
    "https://res.cloudinary.com/postman/image/upload/t_team_logo/v1640018998/team/4fc7f2cf67746a0d00dcf5d2bb6a63e897bedfff5fbbb8d8fb19c3ff273bcd03.png",
    "https://www.postman.com/_wp-assets/home/homepage-header-illustration.3385ecf.svg",
    "https://www.postman.com/_ar-assets/images/homepage-api-first-world-large-3cd0298fa1384a3a8953facd311db66c.png",
    "https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629872709/team/e20e2ef7a54bb2223e5cdb37fc8b0198649b405cf1434468c40733f8ea5f6daf",
    "https://www.postman.com/_wp-assets/home/homepage-footer-illustration.d3da127.svg",
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={src || "/placeholder.svg"} alt={`Slideshow image ${index + 1}`} fill className="object-contain" />
        </div>
      ))}
    </div>
  )
}
