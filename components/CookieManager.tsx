"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function CookieManager() {
  const [cookieValue, setCookieValue] = useState("")
  const [cookieDisplay, setCookieDisplay] = useState("")

  const writeCookie = () => {
    if (cookieValue === "") {
      alert("Enter some value!")
      return
    }

    document.cookie = `name=${encodeURIComponent(cookieValue)}`
    alert(`Setting Cookies : name=${cookieValue}`)
  }

  const readCookie = () => {
    const cookies = document.cookie.split(";")
    let name = ""

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.startsWith("name=")) {
        name = cookie.substring(5)
        break
      }
    }

    setCookieDisplay(`Your cookie is ${name}`)
  }

  return (
    <Card className="p-4">
      <CardContent>
        <h3 className="text-lg font-bold mb-4">Cookie Manager</h3>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Input
            type="text"
            placeholder="Set your Cookies"
            value={cookieValue}
            onChange={(e) => setCookieValue(e.target.value)}
          />

          <div className="flex gap-2">
            <Button onClick={writeCookie}>Set Cookie</Button>
            <Button onClick={readCookie} variant="outline">
              Get Cookie
            </Button>
          </div>
        </div>

        {cookieDisplay && <div className="p-3 bg-muted rounded-md">{cookieDisplay}</div>}
      </CardContent>
    </Card>
  )
}
