"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export function ProgrammingCards() {
  const cards = [
    {
      title: "Java",
      description:
        "is a powerful and widely-used programming language that is well-suited for a variety of applications. Hover here for more",
      videoId: "2Xa3Y4xz8_s",
      videoTitle: "Introduction to Java",
    },
    {
      title: "Solidity",
      description:
        "is an important tool for building blockchain-based applications and systems, and it is an essential part of the Ethereum ecosystem. Hover here for more",
      videoId: "kdvVwGrV7ec",
      videoTitle: "Introduction to Solidity",
    },
    {
      title: "JavaScript",
      description:
        "is a powerful and widely-used programming language that is essential for creating interactive and engaging web experiences. Hover here for more",
      videoId: "PkZNo7MFNFg",
      videoTitle: "Introduction to JavaScript",
    },
    {
      title: "Python",
      description:
        "a powerful that is well-suited for a wide range of applications and is a great choice for anyone looking to learn programming. Hover here for more",
      videoId: "x7X9w_GIm1s",
      videoTitle: "Introduction to Python",
    },
    {
      title: "HTML&CSS",
      description:
        "are essential tools for creating and styling web content, and they are an important part of any web developer's toolkit. Hover here for more",
      videoId: "61dckXqDRJI",
      videoTitle: "Introduction to HTML and CSS",
    },
  ]

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Programming Languages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <ProgrammingCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

function ProgrammingCard({
  title,
  description,
  videoId,
  videoTitle,
}: {
  title: string
  description: string
  videoId: string
  videoTitle: string
}) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="h-64 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front */}
        <Card className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center backface-hidden">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
        </Card>

        {/* Back */}
        <Card className="absolute inset-0 p-4 flex flex-col justify-center items-center backface-hidden rotate-y-180">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <iframe
              width="160"
              height="120"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mb-2"
            ></iframe>
            <p className="text-sm text-center">{videoTitle}</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
