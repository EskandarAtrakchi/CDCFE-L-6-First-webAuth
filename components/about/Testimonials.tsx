"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "The computer science course is the best. I am so happy with it!",
      author: "Appul Joshua, student",
    },
    {
      quote: "One word... WOW!!",
      author: "Eskandar, Student",
    },
    {
      quote: "Could I... BE any more happy with this course?",
      author: "Yonus, Student",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-center mb-6">What our students say</h2>

      <div className="relative">
        <Card className="bg-muted/50">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center">
              <blockquote className="text-xl italic mb-4">"{testimonials[currentIndex].quote}"</blockquote>
              <cite className="text-muted-foreground">{testimonials[currentIndex].author}</cite>
            </div>
          </CardContent>
        </Card>

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>

        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
