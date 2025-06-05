"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { MapEmbed } from "@/components/MapEmbed"
import { Canvas } from "@/components/Canvas"
import { CookieManager } from "@/components/CookieManager"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission with progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setLoading(false)
          alert("Message sent successfully!")
          return 0
        }
        return prev + 5
      })
    }, 100)
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstname" className="block mb-2">
                First Name
              </label>
              <Input id="firstname" placeholder="Your first name" required />
            </div>
            <div>
              <label htmlFor="lastname" className="block mb-2">
                Last Name
              </label>
              <Input id="lastname" placeholder="Your last name" required />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2">
              Subject
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="solidity">Solidity</SelectItem>
                <SelectItem value="ides">IDEs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <Textarea id="message" placeholder="Write your message here..." rows={5} required />
          </div>

          <div>
            <label htmlFor="file" className="block mb-2">
              Attach a file
            </label>
            <Input id="file" type="file" />
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>

          {loading && (
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}
        </form>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Canvas />
        <MapEmbed />
      </div>

      <CookieManager />
    </div>
  )
}
