"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function ProgressBar() {
  const [progress, setProgress] = useState(0)
  const [showProgress, setShowProgress] = useState(false)
  const [message, setMessage] = useState("")

  const animateProgress = () => {
    setShowProgress(true)
    setMessage("We are checking the problem, please wait!")
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 50) {
          clearInterval(interval)
          setShowProgress(false)
          checkInternet()
          return 0
        }
        setMessage(`${prev.toFixed(1)}% finding solution`)
        return prev + 0.5
      })
    }, 50)
  }

  const checkInternet = () => {
    if (navigator.onLine) {
      alert("No problem has been detected! Refreshing the page might fix the issue!")
    } else {
      alert("You may need internet connection!")
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <Button onClick={animateProgress} variant="outline">
        Can't code?
      </Button>

      {showProgress && (
        <div className="w-full max-w-md">
          <Progress value={progress} className="h-2 mb-2" />
          <p className="text-center text-sm">{message}</p>
        </div>
      )}
    </div>
  )
}
