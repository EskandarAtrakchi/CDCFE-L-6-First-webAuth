"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function AuthModals() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(true)

  const validateEmail = (email: string) => {
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      alert("Invalid Email Address")
      return
    }

    if (email === "Eskandar@gmail.com" && password === "1234") {
      alert("You have logged in successfully!")
      setShowLoginModal(false)
    } else if (email === "Eskandar@gmail.com") {
      alert("Invalid Password")
    } else {
      alert("Invalid UserID")
    }
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      alert("Invalid Email Address")
      return
    }

    alert("Account created successfully!")
    setShowSignupModal(false)
  }

  // Fixed button at the bottom right for signup
  const SignupButton = () => (
    <button
      onClick={() => setShowSignupModal(true)}
      className="fixed bottom-20 right-4 md:bottom-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full shadow-lg transition-colors z-50"
    >
      Sign Up?
    </button>
  )

  return (
    <>
      <SignupButton />

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Login</h2>
              <button onClick={() => setShowLoginModal(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-center mb-6">
                <img
                  src="https://media.istockphoto.com/id/1279388417/photo/cyber-security-digital-crime-concept.jpg?b=1&s=612x612&w=0&k=20&c=W5ep5z1mQU9hGYxDkieT7kQeP0lT1C5GWbGEAzQJ1c8="
                  alt="Security"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(!!checked)}
                  />
                  <Label htmlFor="remember" className="text-red-500 font-bold">
                    Remember me?
                  </Label>
                </div>

                <div className="flex space-x-4">
                  <Button type="submit" className="flex-1">
                    Submit
                  </Button>
                  <Button type="button" variant="outline" className="flex-1" onClick={() => setShowLoginModal(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Register with us</h2>
              <button onClick={() => setShowSignupModal(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="signup-password">Create Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="flex space-x-4">
                  <Button type="submit" className="flex-1">
                    Create now
                  </Button>
                  <Button type="button" variant="outline" className="flex-1" onClick={() => setShowSignupModal(false)}>
                    Close
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
